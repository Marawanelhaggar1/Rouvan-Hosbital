import { Component } from '@angular/core';

@Component({
    selector: 'app-clinic-page',
    templateUrl: './clinic-page.component.html',
    styleUrls: ['./clinic-page.component.scss'],
})
export class ClinicPageComponent {
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
