export interface Project {
  title: string;
  image_url: string;
  description: string;
  project_url: string;
  tags: Tag[];
  id: number;
}

export interface Tag {
  icon_name: string;
  name: string;
}
