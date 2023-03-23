import { getDatabase } from './getDatabase';
import { getPosts } from './getPosts';

export async function getSlugs(): Promise<string[]> {
  const { data, } = await getDatabase();
  const posts = getPosts(data);
  const slugs = posts.map((item) => item.slug);

  return slugs;
}
