import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import { TOKEN } from '../constans';

export const PAGE_SIZE = 1;

export const notion = new Client({
  auth: TOKEN,
  notionVersion: '2022-06-28',
});

export const n2m = new NotionToMarkdown({ notionClient: notion, });
