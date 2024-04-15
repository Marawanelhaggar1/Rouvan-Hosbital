import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { BlogModel } from 'src/app/core/models/blog-model';
import { BlogService } from 'src/app/core/services/blog.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
    lang?: string;
    blogs?: BlogModel[];
    constructor(private _blogService: BlogService) {}

    ngOnInit(): void {
        if (localStorage.getItem('lang')) {
            this.lang = JSON.parse(localStorage.getItem('lang')!);
        } else {
            this.lang = 'ltr';
        }
        this.getBlogs();
    }
    getBlogs() {
        return this._blogService.getFeatured().subscribe((blog) => {
            this.blogs = blog.data;
        });
    }

    blogSlides: OwlOptions = {
        nav: true,
        margin: 25,
        loop: true,
        dots: false,
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
                items: 2,
            },
            1115: {
                items: 3,
            },
        },
    };
}
