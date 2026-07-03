import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const root = join(process.cwd(), "dist");
const port = Number(process.env.PORT || 4173);

const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

createServer(async (request, response) => {
  try {
    const url = new URL(request.url || "/", `http://${request.headers.host}`);
    const safePath = normalize(decodeURIComponent(url.pathname))
      .replace(/^[/\\]+/, "")
      .replace(/^(\.\.[/\\])+/, "");
    const requestedPath = url.pathname === "/" ? join(root, "index.html") : join(root, safePath);
    let servedPath = requestedPath;
    let file = await readFile(requestedPath).catch(async () => {
      servedPath = join(root, "index.html");
      return readFile(servedPath);
    });
    response.writeHead(200, {
      "Content-Type": mime[extname(servedPath)] || "text/html; charset=utf-8",
    });
    response.end(file);
  } catch {
    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Server error");
  }
}).listen(port, "0.0.0.0", () => {
  console.log(`CaseKart catalogue running at http://localhost:${port}`);
});
