interface Comment {
    id: number;
    articleId: number;
    commenterName: string;
    commenterEmail: string;
    content: string;
    publicationDate: Date;
  }