import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Specialization } from '../models/specialization';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SpecializationService {
    lang: string;

    constructor(private _http: HttpClient) {
        if (JSON.parse(localStorage.getItem('lang')!) == 'rtl') {
            this.lang = 'Ar';
        } else {
            this.lang = 'En';
        }
    }
    get(): Observable<{ data: Specialization[] }> {
        return this._http.get<{ data: Specialization[] }>(
            `https://rouvanhospital.com/laravel/public/api/specialization?lang=${this.lang}`
        );
    }

    getPaginate(page: number): Observable<{
        data: Specialization[];
        meta: { last_page: number; current_page: number };
        links: { next: string; prev: string };
    }> {
        return this._http.get<{
            data: Specialization[];
            meta: { last_page: number; current_page: number };
            links: { next: string; prev: string };
        }>(
            `https://rouvanhospital.com/laravel/public/api/specialization/paginate/pag?lang=${this.lang}&page=${page}`
        );
    }
}
