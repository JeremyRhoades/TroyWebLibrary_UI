export interface User {
    "id": string;
    "firstName": string;
    "lastName": string;
    "birthDate": string;
    "email": string | null;
    "phone": string | null;
    "role": string;
    "joinDate": string;
}