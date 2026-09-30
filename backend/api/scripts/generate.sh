set -e

JAR_VERSION="7.4.0"
JAR_NAME="openapi-generator-cli-${JAR_VERSION}.jar"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
JAR_PATH="${SCRIPT_DIR}/${JAR_NAME}"

if [ ! -f "$JAR_PATH" ]; then
  echo "Baixando o OpenAPI Generator CLI (v${JAR_VERSION})"
  curl -L --retry 5 --retry-delay 2 "https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/${JAR_VERSION}/${JAR_NAME}" -o "$JAR_PATH"
  echo "Download concluido"
fi

BACKEND_ROOT="$(cd "${SCRIPT_DIR}/../.." && pwd)"
OPENAPI_JSON="${BACKEND_ROOT}/src/swagger/openapi.json"
OUTPUT_CLIENT_DIR="${BACKEND_ROOT}/../frontend/clients/projeto-pam"

echo "Gerando client library"
java -jar "$JAR_PATH" generate \
  -i "$OPENAPI_JSON" \
  -g typescript-axios \
  -o "$OUTPUT_CLIENT_DIR" \
  --additional-properties=npmName="@projeto-pam/api",supportsES6=true,withInterfaces=true

COMMON_TS="${OUTPUT_CLIENT_DIR}/common.ts"
if [ -f "$COMMON_TS" ]; then
  echo "Aplicando correcao no common.ts"
  
  sed -i.bak 's/Required<RequestArgs>/any/g' "$COMMON_TS"
  
  node -e '
    const fs = require("fs");
    const file = process.argv[1];
    let content = fs.readFileSync(file, "utf8");
    content = content.replace(
      /export const createRequestFunction = function \((.*?)\) \{/g,
      "export const createRequestFunction = function ($1): any {"
    );
    fs.writeFileSync(file, content);
  ' "$COMMON_TS"

  rm -f "${COMMON_TS}.bak"
fi

echo "Instalando dependencias e compilando"
cd "$OUTPUT_CLIENT_DIR"
npm install --ignore-scripts
npm run build

echo "Biblioteca cliente @projeto-pam/api gerada e compilada com sucesso"