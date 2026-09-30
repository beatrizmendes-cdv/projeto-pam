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

echo "Instalando dependencias e compilando"
node --input-type=commonjs - "$OUTPUT_CLIENT_DIR/common.ts" <<'NODE'
const fs = require("node:fs");

const file = process.argv[2];
let content = fs.readFileSync(file, "utf8");

const replacements = [
  [
    "export const createRequestFunction = function (axiosArgs: RequestArgs, globalAxios: AxiosInstance, BASE_PATH: string, configuration?: Configuration) {",
    "export const createRequestFunction = function (axiosArgs: RequestArgs, globalAxios: AxiosInstance, BASE_PATH: string, configuration?: Configuration): <T = unknown>(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<T>> {"
  ],
  [
    "return <T = unknown, R = AxiosResponse<T>>(axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {",
    "return <T = unknown>(axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH): Promise<AxiosResponse<T>> => {"
  ],
  [
    "return axios.request<T, R>(axiosRequestArgs);",
    "return axios.request<T>(axiosRequestArgs);"
  ]
];

for (const [original, replacement] of replacements) {
  if (!content.includes(original)) {
    throw new Error(`Trecho não encontrado: ${original}`);
  }

  content = content.replace(original, replacement);
}

fs.writeFileSync(file, content);
NODE
cd "$OUTPUT_CLIENT_DIR"
npm install --ignore-scripts
npm run build

echo "Biblioteca cliente @projeto-pam/api gerada e compilada com sucesso"