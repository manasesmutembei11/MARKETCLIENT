interface Article {
    id: number;
    title: string;
    content: string;
    publicationDate: Date;
    blogcategories: BlogCategory[];
    tags: string[];
    comments: Comment[];
  }