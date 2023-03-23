import { IPostPage, NotionDatabaseRow } from '@/types/page.types';
import { n2m, notion } from './notionClient';
import { getPosts } from './getPosts';
import { DATABASE_ID } from '../constans';

export async function getPage(slug: string): Promise<IPostPage> {
  const posts = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      property: 'slug',
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });

  const data = posts.results as NotionDatabaseRow[];

  const oneData = data.map((item) => ({
    id: item.id,
    cover: item.cover,
    properties: item.properties,
  }));

  const page = getPosts(oneData)[0];

  const blocks = await n2m.pageToMarkdown(page.pageId);

  const mdString = n2m.toMarkdownString(blocks);

  return {
    page,
    mdString,
  };
}
