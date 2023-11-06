import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-book-doctors-page',
    templateUrl: './book-doctors-page.component.html',
    styleUrls: ['./book-doctors-page.component.scss'],
})
export class BookDoctorsPageComponent {
    lang?: string;
    customOptions: OwlOptions = {
        items: 3,
        nav: true,
        loop: false,
        dots: false,

        smartSpeed: 1000,
        navText: [
            '<i class="flaticon-011-chevron-1"></i>',
            '<i class="flaticon-010-chevron"></i>',
        ],
    };

    daysOfTheWeek!: string[];

    constructor() {}

    ngOnInit() {
        if (localStorage.getItem('lang')) {
            this.lang = JSON.parse(localStorage.getItem('lang')!);
        } else {
            this.lang = 'ltr';
        }
        this.startAndEndOfWeek();
        console.log(this.daysOfTheWeek);
    }

    startAndEndOfWeek() {
        var now = new Date().toLocaleDateString();
        this.daysOfTheWeek = Array(7)
            .fill('')
            .map((_, i) => {
                var monday = new Date(now);
                monday.setDate(monday.getDate() - monday.getDay() + i);
                const day = monday.toDateString().split(' ')[0];
                const month = monday.getMonth() + 1;
                const date = monday.getDate();
                return day + ' ' + month + '/' + date;
            });
    }
}
