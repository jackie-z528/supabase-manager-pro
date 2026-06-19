# supabase-manager-pro

Manage resources using supabase natively from your AI agent.

## Requirements

- **License key** — purchase from [MCP Marketplace](https://mcpmarketplace.com) to get your `MCP_LICENSE_KEY`
- Node.js 18+

## Installation

```json
{
  "mcpServers": {
    "supabase-manager-pro": {
      "command": "npx",
      "args": [
        "-y",
        "supabase-manager-pro"
      ],
      "env": {
        "MCP_LICENSE_KEY": "your-license-key-here"
      }
    }
  }
}
```

## Tools

| Tool | Description |
|------|-------------|
| `manage` | Run arbitrary commands using the supabase CLI. |

## Development

```bash
npm install
npm run build
npm test
```
