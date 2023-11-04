import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/core/models/user';

@Component({
    selector: 'app-top-header',
    templateUrl: './top-header.component.html',
    styleUrls: ['./top-header.component.scss'],
})
export class TopHeaderComponent implements OnInit {
    user?: User | null;
    lang?: string;

    constructor(public router: Router, public _cookie: CookieService) {}

    ngOnInit(): void {
        if (localStorage.getItem('lang')) {
            this.lang = JSON.parse(localStorage.getItem('lang')!);
        } else {
            this.lang = 'ltr';
        }

        if (this._cookie.get('user')) {
            this.user = JSON.parse(this._cookie.get('user'));
        } else {
            this.user = null;
        }
    }

    setLanguage() {
        console.log(this.lang);
        localStorage.setItem('lang', JSON.stringify(this.lang));
        window.location.reload();
    }

    logout() {
        this._cookie.delete('user');
        this.sendToHome();
    }

    sendToHome() {
        window.location.href = '/';
    }
}
