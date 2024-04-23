import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { About } from '../models/about';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AboutUsService {
    lang: string;

    constructor(private _http: HttpClient) {
        if (JSON.parse(localStorage.getItem('lang')!) == 'rtl') {
            this.lang = 'Ar';
        } else {
            this.lang = 'En';
        }
    }
    get(): Observable<{ data: About[] }> {
        return this._http.get<{ data: About[] }>(
            `https://rouvanhospital.com/public/api/about/us?lang=${this.lang}`
        );
    }
}
