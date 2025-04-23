export interface BlogPost {
  frontmatter: { title: string; slug: string; description: string; publishdate: string; layout: string };
  url: string;
}
