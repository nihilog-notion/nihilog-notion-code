declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_NOTION_ACCESS_TOKEN: string;
      NEXT_PUBLIC_NOTION_BLOG_DATABASE_ID: string;
    }
  }
}

export { };
