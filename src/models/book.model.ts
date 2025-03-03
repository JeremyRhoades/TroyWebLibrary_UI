export interface Book {
    "id": string;
    "title": string;
    "author": string;
    "description": string;
    "coverImageUrl": string | null;
    "publisher": string | null;
    "publicationDate": string;
    "category": string;
    "isbn": number;
    "pageCount": number;
    "checkedOut": boolean;
    "checkOutUser": string;
    "checkedOutDate": string;
}