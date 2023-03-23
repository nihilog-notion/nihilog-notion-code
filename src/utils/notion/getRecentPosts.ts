import { NotionDatabaseRow, NotionPrePost } from '@/types/page.types';
import { DATABASE_ID } from '../constans';
import { notion } from './notionClient';

export async function getRecentPosts(): Promise<NotionPrePost[]> {
  const { results, } = await notion.databases.query({
    database_id: DATABASE_ID,
    filter: {
      property: 'published',
      checkbox: {
        equals: true,
      },
    },
    sorts: [ {
      property: 'created',
      direction: 'descending',
    }, ],
    page_size: 10,
  });

  const data = results as NotionDatabaseRow[];

  return data.map((item) => ({
    id: item.id,
    cover: item.cover,
    properties: item.properties,
  }));
}
