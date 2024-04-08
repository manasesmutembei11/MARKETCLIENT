import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Author } from "../Models/Blog/author.model";

@Injectable(
    {
        providedIn: 'root'
    }
)

export class BlogService {
    private baseUrl = "https://localhost:7064/"

    constructor (private http: HttpClient) {}

    CreateAuthor(Author: Author) : Observable<any>{
        return this.http.post<any>(`${this.baseUrl}api/author/CreateAuthor`, Author, {headers: new HttpHeaders({"Content-Type": "application/json"})});
    }

    GetAuthor(authorId: string) : Observable<any> {
        return this.http.get<Author>(`${this.baseUrl}api/author/GetAuthor/AuthorId=${authorId}`)
    }

    UpdateAuthor(authorId: string, Author: Author) : Observable<Author>{
        return this.http.put<Author>(`${this.baseUrl}api/author/UpdateAuthor/AuthorId=${authorId}`, Author)
    }

    GetPagedAuthors(PageNumber: number, pageSize: number) : Observable<any> {
        return this.http.get<any>(`${this.baseUrl}api/author/GetPagedAuthors?PageNumber=${PageNumber}&PageSize=${pageSize}`)
    }

    DeleteAuthor(authorId: string) : Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}api/author/DeleteAuthor?id=${authorId}`);
    }
}