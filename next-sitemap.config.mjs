import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

/** Fix for __dirname in ES modules **/
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://csui24.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  additionalPaths: async () => {
    const jsonPath = path.join(__dirname, "modules/fams-data.json");
    const rawData = fs.readFileSync(jsonPath, "utf-8");
    const famsData = JSON.parse(rawData);

    return famsData.data.map((fam) => ({
      loc: `/fams/${fam.id}`,
      lastmod: new Date().toISOString(),
    }));
  },
};

export default config;
