import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-insurance-page',
    templateUrl: './insurance-page.component.html',
    styleUrls: ['./insurance-page.component.scss'],
})
export class InsurancePageComponent implements OnInit {
    lang?: string;
    constructor() {}

    ngOnInit(): void {
        if (localStorage.getItem('lang')) {
            this.lang = JSON.parse(localStorage.getItem('lang')!);
        } else {
            this.lang = 'ltr';
        }
    }
}
