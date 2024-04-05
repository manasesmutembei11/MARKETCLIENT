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

    GetAuthor(id: string) : Observable<any> {
        return this.http.get<Author>(`${this.baseUrl}api/author/GetAuthor/AuthorId=${id}`)
    }

    UpdateAuthor(id: string, Author: Author) : Observable<Author>{
        return this.http.put<Author>(`${this.baseUrl}api/author/UpdateAuthor/AuthorId=${id}`, Author)
    }
}