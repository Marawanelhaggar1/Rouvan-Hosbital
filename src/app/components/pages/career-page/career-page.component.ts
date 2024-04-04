import { Component } from '@angular/core';

@Component({
    selector: 'app-career-page',
    templateUrl: './career-page.component.html',
    styleUrls: ['./career-page.component.scss'],
})
export class CareerPageComponent {
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
