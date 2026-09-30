import { NestFactory } from "@nestjs/core";
import { AppModule } from "../app.module.js";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import * as path from "path";
import * as fs from "fs";

async function generateOpenApiJson() {

    const app = await NestFactory.create(AppModule, { logger: ['error', 'warn'] });
    const config = new DocumentBuilder()
        .setTitle("PAM")
        .setDescription("Documentação e testes interativos dos endpoints de Simulação, Turbinas e Catálogo")
        .setVersion("1.0")
        .addTag("simulation", "gerenciamento de simulações")
        .addTag("turbines", "gerenciamento de turbinas")
        .addTag("turbines-catalog", "gerenciamento de catalogos")
        .build();

    const document = SwaggerModule.createDocument(app, config);
    const outputPath = path.resolve(process.cwd(), "src/swagger/openapi.json")
    const dir = path.dirname(outputPath);

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(outputPath, JSON.stringify(document, null, 2));
    console.log("Arquivo gerado com sucesso!");

    await app.close();
    process.exit(0);

}
generateOpenApiJson().catch((err) => {
    console.error("Erro ao gerar o arquivo:", err);
    process.exit(1);
});

generateOpenApiJson();