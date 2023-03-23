/* eslint-disable no-await-in-loop */
import { NotionDatabaseRow, NotionPostData } from '@/types/page.types';
import { PAGE_SIZE, notion } from './notionClient';
import { DATABASE_ID } from '../constans';

export async function getDatabase(): Promise<NotionPostData> {
  let data: NotionDatabaseRow[] = [];
  let hasMore = true;
  let nextCursor: string;
  let count = 0;

  while (hasMore) {
    const posts = await notion.databases.query({
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
      start_cursor: nextCursor,
      page_size: PAGE_SIZE,
    });

    count += posts.results.length;
    hasMore = posts.has_more;
    nextCursor = posts.next_cursor;
    data.push(...posts.results as NotionDatabaseRow[]);
  }

  const allData = data.map((item) => ({
    id: item.id,
    cover: item.cover,
    properties: item.properties,
  }));

  return {
    data: allData,
    count,
  };
}
