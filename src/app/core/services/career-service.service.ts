import { Injectable } from '@angular/core';
import { Career } from '../models/career';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { NewEmployees } from '../models/new-employees';

@Injectable({
    providedIn: 'root',
})
export class CareerService {
    // token: string;
    constructor(private _http: HttpClient, private _Cookie: CookieService) {}
    post(body: FormData): Observable<Career> {
        return this._http.post<Career>(
            'https://rouvanhospital.com/laravel/public/api/career',
            body
        );
    }

    getNewEmployees(): Observable<{ data: NewEmployees[] }> {
        return this._http.get<{ data: NewEmployees[] }>(
            'https://rouvanhospital.com/laravel/public/api/new/employee'
        );
    }

    getPics(): Observable<{ data: { image: string }[] }> {
        return this._http.get<{ data: { image: string }[] }>(
            `https://rouvanhospital.com/laravel/public/api/pics`
        );
    }

    getFeedback(): Observable<{ data: { image: string }[] }> {
        return this._http.get<{ data: { image: string }[] }>(
            `https://rouvanhospital.com/laravel/public/api/feedback`
        );
    }
}
