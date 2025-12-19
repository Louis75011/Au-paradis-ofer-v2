module.exports = {
  apps: [
    {
      name: "apo-api",
      cwd: "./apps/api",
      script: "server.js",

      // Optionnel mais conseillé
      autorestart: true,
      max_restarts: 10,

      // Dev (si un jour vous l’utilisez avec PM2 en local)
      env: {
        NODE_ENV: "development",
        PORT: 3000,
        LOG_LEVEL: "debug",
        CORS_ORIGIN: "http://localhost:5174"
      },

      // Prod : NE METTEZ PAS les vraies clés ici si vous commitez ce fichier.
      // Injectez-les sur le VPS via un fichier .env.production non committé,
      // ou via `pm2 set`/export shell, ou via un EnvironmentFile systemd.
      env_production: {
        NODE_ENV: "production",
        PORT: 3000,
        LOG_LEVEL: "info",
        // CORS_ORIGIN: "https://au-paradis-ofer.fr",
        CORS_ORIGIN: "https://au-paradis-ofer.fr",
        PUBLIC_SITE_URL: "https://au-paradis-ofer.fr",
      }
    }
  ]
};
