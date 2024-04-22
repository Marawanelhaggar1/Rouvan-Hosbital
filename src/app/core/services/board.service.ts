import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Board } from '../models/board';

@Injectable({
    providedIn: 'root',
})
export class BoardService {
    lang: string;

    constructor(private _http: HttpClient) {
        if (JSON.parse(localStorage.getItem('lang')!) == 'rtl') {
            this.lang = 'Ar';
        } else {
            this.lang = 'En';
        }
    }
    get(): Observable<{ data: Board[] }> {
        return this._http.get<{ data: Board[] }>(
            `https://rouvanhospital.com/laravel/public/api/new/employee?lang=${this.lang}`
        );
    }
}
