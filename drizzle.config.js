/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: "postgresql",
    dbCredentials: {
      url: 'postgresql://ai-mock-interview_owner:1OoAKdkyGB9s@ep-square-recipe-a1y1mkvj.ap-southeast-1.aws.neon.tech/ai-mock-interview?sslmode=require'
    }
  };