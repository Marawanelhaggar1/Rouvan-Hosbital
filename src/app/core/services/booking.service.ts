import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../models/booking';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root',
})
export class BookingService {
    constructor(private _http: HttpClient, private _Cookie: CookieService) {}

    postBooking(body: Booking): Observable<Booking> {
        return this._http.post<Booking>(
            'http://pp.etqanis.com/public/api/booking',
            body,
            {
                headers: {
                    Authorization:
                        'Bearer ' +
                        JSON.parse(this._Cookie.get('user')).data.token,
                },
            }
        );
    }
}
