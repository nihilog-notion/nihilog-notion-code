import { NotionPages, NotionPrePost } from '@/types/page.types';

export function getPages(data: NotionPrePost[]): NotionPages[] {
  return data
    .map((item) => item.id)
    .map((item, index) => ({
      no: index + 1,
      id: item,
    }))
    // .filter((item) => (
    //   item.no % 20 === 1
    // ))
    .map((item, index) => ({
      page: index + 1,
      ...item,
    }));
}
