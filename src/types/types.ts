export interface BlogsProps {
  uniqueId: string;
  title: string;
  blog: string;
  category: string[];
  author: string;
  author_name: string;
  author_profile?: string;
  createdAt: string;
  featured_image?: string[];
}

export interface BlogCategoryProps {
  uniqueId: number;
  blog_category: string;
}

export interface UserProps {
  uniqueId: string;
  name: string;
  avatar?: string;
}

export interface AdminProps {
  uniqueId: number;
  name: string;
  profile: string[];
}

export interface BlogCategoryProps {
  uniqueId: number;
  blog_category: string;
}

export interface BlogTagProps {
  uniqueId: number;
  blog_tag: string;
}

export interface BlogsProps {
  title: string;
  blog: string; // This will hold the HTML content of the blog post
  // This will initially be the author's uniqueId
  tags: string[] | number[]; // Can hold tag IDs initially, then names
  createdAt: string; // Should be an ISO 8601 date string (e.g., "2025-10-26T10:00:00Z")
}
