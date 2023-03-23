import { NotionPages } from '@/types/page.types';

export function getPaginationArray(pages: NotionPages[]): number[][] {
  const numberArray = pages.map((item) => item.page);

  const slicedPaginationArray: number[][] = [];

  for (let i = 0; i < numberArray.length; i += 5) {
    slicedPaginationArray.push(numberArray.slice(i, i + 5));
  }

  return slicedPaginationArray;
}
