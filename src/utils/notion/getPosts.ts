import { IPost, NotionPrePost } from '@/types/page.types';

export function getPosts(array: NotionPrePost[]): IPost[] {
  const allPosts = array.map(
    ({ id, cover, properties, }) => ({
      pageId: id,
      ID: properties.ID.number,
      cover: cover ? cover.external.url : '',
      title: properties.title.title[0].text.content,
      description: properties.description.rich_text.length !== 0
        ? properties.description.rich_text[0].text.content
        : '',
      category: properties.category.select.name,
      level: properties.level.select.name,
      status: properties.status.status.name,
      tags: properties.tags.multi_select.map((item) => item.name),
      created: properties.created.created_time,
      updated: properties.updated.last_edited_time,
      slug: properties.slug.formula.string,
      published: properties.published.checkbox,
    })
  );

  return allPosts;
}
