module.exports = {
  apps: [
    {
      name: "apo-api",
      cwd: "./apps/api",
      script: "server.js",
      autorestart: true,
      max_restarts: 10,
      env: {
        NODE_ENV: "development",
        PORT: 3000,
        LOG_LEVEL: "debug",
        CORS_ORIGIN: "http://localhost:5175",
        APO_ENV_FILE: ".env.preprod"
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 3000,
        LOG_LEVEL: "info",
        CORS_ORIGIN: "https://au-paradis-ofer.fr",
        PUBLIC_SITE_URL: "https://au-paradis-ofer.fr",
        APO_ENV_FILE: ".env.production"
      }
    }
  ]
};
