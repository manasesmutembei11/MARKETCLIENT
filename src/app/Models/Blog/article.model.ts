interface Article {
    id: number;
    title: string;
    content: string;
    publicationDate: Date;
    author: Author;
    blogcategories: BlogCategory[];
    tags: string[];
    comments: Comment[];
  }