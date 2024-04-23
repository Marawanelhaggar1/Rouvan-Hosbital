import { Injectable } from '@angular/core';
import { BlogModel } from '../models/blog-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class BlogService {
    lang: string;

    constructor(private _http: HttpClient) {
        if (JSON.parse(localStorage.getItem('lang')!) == 'rtl') {
            this.lang = 'Ar';
        } else {
            this.lang = 'En';
        }
    }
    get(): Observable<{ data: BlogModel[] }> {
        return this._http.get<{ data: BlogModel[] }>(
            `https://rouvanhospital.com/public/api/blogs?lang=${this.lang}`
        );
    }

    getFeatured(): Observable<{ data: BlogModel[] }> {
        return this._http.get<{ data: BlogModel[] }>(
            `https://rouvanhospital.com/public/api/blogs/featured?lang=${this.lang}`
        );
    }

    getById(id: string): Observable<{ data: BlogModel }> {
        return this._http.get<{ data: BlogModel }>(
            `https://rouvanhospital.com/public/api/blogs/${id}?lang=${this.lang}`
        );
    }
}
