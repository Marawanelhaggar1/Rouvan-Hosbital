import { Component, OnInit } from '@angular/core';
import { BlogModel } from 'src/app/core/models/blog-model';
import { BlogService } from 'src/app/core/services/blog.service';

@Component({
    selector: 'app-blog-grid-page',
    templateUrl: './blog-grid-page.component.html',
    styleUrls: ['./blog-grid-page.component.scss'],
})
export class BlogGridPageComponent implements OnInit {
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
        return this._blogService.get().subscribe((blog) => {
            this.blogs = blog.data;
        });
    }
}
