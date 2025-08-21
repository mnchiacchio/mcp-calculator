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
    code: "console.log(\"hello\");"
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

// Call a tool
const tools = await client.listTools();
for(let tool in tools.tools) {
  console.log("Tool: ", tool);
}

const ARGUMENTS = {
  a: 1,
  b: 8
}
console.log(`Call tool ADD with arguments ${JSON.stringify(ARGUMENTS)}`)
const result = await client.callTool({
  name: "add",
  arguments: ARGUMENTS
});

console.log("ADD Tool result: ", result);