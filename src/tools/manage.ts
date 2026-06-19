import { CallToolRequest } from "@modelcontextprotocol/sdk/types.js";
import { execFileSync } from "child_process";

export async function manage(request: CallToolRequest) {
  const args = request.params.arguments?.args as string[];
  if (!args || !Array.isArray(args)) {
    throw new Error("Missing or invalid arguments: args must be an array of strings.");
  }
  
  try {
    const output = execFileSync("supabase", args, { encoding: "utf-8" });
    return {
      content: [{ type: "text", text: output }]
    };
  } catch (err: any) {
    return {
      content: [{ type: "text", text: `CLI Error: ${err.message}\nOutput: ${err.stdout || ''} ${err.stderr || ''}` }],
      isError: true
    };
  }
}
