/**
 * supabase-manager-pro — MCP server.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { withLicense } from "@mcp_marketplace/license";
import { z } from "zod";

// --- IMPORTS ---
import { manage } from "./tools/manage.js";
// --- END IMPORTS ---

const server = new McpServer({
  name: "supabase-manager-pro",
  version: "1.0.0",
});

// --- TOOLS ---

server.tool(
  "manage",
  "Run arbitrary commands using the supabase CLI.",
  {
    args: z.string().describe("Array of command line arguments"),
  },
  async ({ args }) => {
    try {
      const result = await manage(args);
      return { content: [{ type: "text", text: typeof result === "string" ? result : JSON.stringify(result, null, 2) }] };
    } catch (e) {
      return { content: [{ type: "text", text: JSON.stringify({ error: (e as Error).message }) }] };
    }
  }
);

// --- END TOOLS ---

withLicense(server, { slug: "supabase-manager-pro" });

const transport = new StdioServerTransport();
await server.connect(transport);
