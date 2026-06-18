import express from "express";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Serve static files from the build output directory if we are in production
  const isProd = process.env.NODE_ENV === "production";
  
  if (!isProd) {
    try {
      // Dynamically import Vite only in development to prevent issues in production
      const { createServer: createViteServer } = await import("vite");
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa",
      });
      app.use(vite.middlewares);
      console.log("Vite dev server middleware mounted.");
    } catch (e) {
      console.warn("Could not start Vite dev server, falling back to static server:", e);
      serveStatic(app);
    }
  } else {
    serveStatic(app);
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

function serveStatic(app: express.Express) {
  const distPath = path.join(process.cwd(), 'dist');
  app.use(express.static(distPath));
  // Catch-all route to serve index.html for Single Page Application routing fallback
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

startServer();
