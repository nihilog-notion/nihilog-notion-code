declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NOTION_ACCESS_TOKEN: string;
      NOTION_BLOG_DATABASE_Id: string;
    }
  }
}

export { };
