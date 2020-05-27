export interface Book  {
    book_id: number;
    book_title: string;
    author_name: string;
    isbn: number;
    total_page: number;
    publisher_id: number;
    publisher_name: string;
    publish_date: string;
    publisher_address: string;
    book_shelf_number: number;
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

