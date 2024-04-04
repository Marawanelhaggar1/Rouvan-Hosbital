import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { CareerService } from 'src/app/core/services/career-service.service';

@Component({
    selector: 'app-feedback',
    templateUrl: './feedback.component.html',
    styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
    lang?: string;
    feedback?: { image: string }[];

    constructor(
        public router: Router,
        private _feedbackService: CareerService
    ) {}

    ngOnInit(): void {
        if (localStorage.getItem('lang')) {
            this.lang = JSON.parse(localStorage.getItem('lang')!);
        } else {
            this.lang = 'ltr';
        }
        this.getFeedback();
    }

    getFeedback() {
        this._feedbackService.getFeedback().subscribe({
            next: (data) => {
                console.log(data.data);
                this.feedback = data.data;
            },
            error: (err) => {
                console.error(err);
            },
        });
    }

    feedbackSlides: OwlOptions = {
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
                items: 1,
            },
            695: {
                items: 3,
            },
            935: {
                items: 3,
            },
            1200: {
                items: 3,
            },
        },
    };
    feedbackSlides2: OwlOptions = {
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
                items: 1,
            },
            695: {
                items: 2,
            },
            935: {
                items: 2,
            },
            1200: {
                items: 2,
            },
        },
    };
    feedbackSlides3: OwlOptions = {
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
                items: 1,
            },
            695: {
                items: 2,
            },
            935: {
                items: 2,
            },
            1200: {
                items: 3,
            },
        },
    };
    testimonialsSlides: OwlOptions = {
        items: 1,
        nav: false,
        margin: 25,
        loop: true,
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplayHoverPause: true,
        navText: [
            '<i class="flaticon-011-chevron-1"></i>',
            '<i class="flaticon-010-chevron"></i>',
        ],
    };
}
