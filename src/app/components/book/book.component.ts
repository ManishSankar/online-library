export interface Book  {
    bookId: number;
    bookTitle: string;
    authorName: string;
    isbn: number;
    totalPage: number;
    publisherId: number;
    publisherName: string;
    publishDate: string;
    publisherAddress: string;
    bookShelfNumber: number;
    price: number;

}

export interface BookIssueDetail {
  issue_id: number;
  book_id: number;
  user_id: number;
  issue_date: string;
  expiry_date: string;
  issued_by: string;
  description: string;
}

export interface UserDetails {
  user_id: number;
  firstname: string;
  lastname: string;
  age: number;
  gender: string;
  address: string;
  username: string;
  password: string;
}

