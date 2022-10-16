export interface Article {
  author: string;
  tags: Tag[];
  image_url: string;
  title: string;
  description: string;
  content: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
  id: number;
  created_at: string;
  updated_at: string | null;
}

export interface Tag {
  icon_name: string;
  name: string;
}
