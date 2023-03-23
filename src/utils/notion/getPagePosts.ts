import { NotionDatabaseRow, NotionPrePost } from '@/types/page.types';
import { DATABASE_ID } from '../constans';
import { PAGE_SIZE, notion } from './notionClient';

export async function getPagePosts(startCursor: string): Promise<NotionPrePost[]> {
  const res = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      property: 'published',
      checkbox: {
        equals: true,
      },
    },
    start_cursor: startCursor,
    page_size: PAGE_SIZE,
  });

  const data = res.results as NotionDatabaseRow[];

  const allData = data.map((item) => ({
    id: item.id,
    cover: item.cover,
    properties: item.properties,
  }));

  return allData;
}
