/* eslint-disable no-await-in-loop */
import { NotionDatabaseRow, NotionPostData } from '@/types/page.types';
import { DATABASE_ID } from '../constans';
import { PAGE_SIZE, notion } from './notionClient';

export async function getCategoryPosts(category: string): Promise<NotionPostData> {
  let data: NotionDatabaseRow[] = [];
  let hasMore = true;
  let nextCursor: string;
  let count = 0;

  while (hasMore) {
    const posts = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: {
        and: [
          {
            property: 'published',
            checkbox: {
              equals: true,
            },
          },
          {
            property: 'category',
            select: {
              equals: category,
            },
          },
        ],
      },
      sorts: [
        {
          property: 'created',
          direction: 'descending',
        },
      ],
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
