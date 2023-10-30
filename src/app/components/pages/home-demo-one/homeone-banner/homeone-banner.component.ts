import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-homeone-banner',
    templateUrl: './homeone-banner.component.html',
    styleUrls: ['./homeone-banner.component.scss']
})
export class HomeoneBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    homeSlides: OwlOptions = {
        items: 1,
		nav: true,
		loop: true,
		dots: false,
		autoplay: true,
		smartSpeed: 1000,
        animateIn: `fadeIn`,
        animateOut: `fadeOut`,
		autoplayHoverPause: true,
		navText: [
            '<i class="flaticon-011-chevron-1"></i>',
            '<i class="flaticon-010-chevron"></i>'
		]
    }

}