import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

const transport = new StdioClientTransport({
  command: "node",
  args: ["./build/index.js"]
});

const client = new Client(
    {
      name: "Ejemplo MCP Client",
      version: "1.0.0"
    }
  );
  
await client.connect(transport);

// List prompts
const prompts = await client.listPrompts();
console.log("Prompts: ", prompts);

// Get a prompt
const prompt = await client.getPrompt({
  name: "review-code",
  arguments: {
    code: "console.log(\"hola mundo\");"
  }
});

console.log("Prompt: ", prompt.messages[0].content);

// List resources
const resources = await client.listResources();
for(let resource in resources.resources) {
  console.log("Resource: ", resource);
}

// List resource templates
const templates = await client.listResourceTemplates();
for(let template of templates.resourceTemplates) {
  console.log("Resource template: ", template.name);
}

// List tools
const tools = await client.listTools();
console.log("\n🔧 HERRAMIENTAS DISPONIBLES:");
console.log("================================");
if (tools.tools && tools.tools.length > 0) {
  tools.tools.forEach((tool, index) => {
    console.log(`${index + 1}. Nombre: ${tool.name}. Parámetros: ${JSON.stringify(tool.inputSchema.properties)}`);
  });
} else {
  console.log("No hay herramientas disponibles");
}

// Probar una herramienta específica
const ARGUMENTS = {
  a: 1,
  b: 8
}
console.log(`\nLlamar a ADD con argumentos: ${JSON.stringify(ARGUMENTS)}`)
const result = await client.callTool({
  name: "add",
  arguments: ARGUMENTS
});

console.log("Resultado de ADD: ", result);