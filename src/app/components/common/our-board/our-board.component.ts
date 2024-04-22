import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Board } from 'src/app/core/models/board';
import { BoardService } from 'src/app/core/services/board.service';

@Component({
    selector: 'app-our-board',
    templateUrl: './our-board.component.html',
    styleUrls: ['./our-board.component.scss'],
})
export class OurBoardComponent {
    lang?: string;
    doctors: Board[] = [];

    constructor(public router: Router, private _careerService: BoardService) {}

    ngOnInit(): void {
        if (localStorage.getItem('lang')) {
            this.lang = JSON.parse(localStorage.getItem('lang')!);
        } else {
            this.lang = 'ltr';
        }
        this.getDoctors();
    }

    getDoctors() {
        return this._careerService.get().subscribe({
            next: (data) => {
                this.doctors = data.data;
            },
            error: (err) => {
                console.error(err);
            },
        });
    }

    customOptions: OwlOptions = {
        nav: false,
        margin: 25,
        loop: true,
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        navText: [
            '<i class="flaticon-011-chevron-1"></i>',
            '<i class="flaticon-010-chevron"></i>',
        ],
        responsive: {
            0: {
                items: 1,
            },
            515: {
                items: 2,
            },
            695: {
                items: 2,
            },
            935: {
                items: 3,
            },
            1200: {
                items: 3,
            },
        },
    };
}
