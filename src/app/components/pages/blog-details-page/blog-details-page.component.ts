import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogModel } from 'src/app/core/models/blog-model';
import { BlogService } from 'src/app/core/services/blog.service';

@Component({
    selector: 'app-blog-details-page',
    templateUrl: './blog-details-page.component.html',
    styleUrls: ['./blog-details-page.component.scss'],
})
export class BlogDetailsPageComponent implements OnInit {
    lang?: string;
    blog?: BlogModel;
    sub: any;
    constructor(
        private _blogService: BlogService,
        private _ActivatedRoutes: ActivatedRoute
    ) {}

    ngOnInit(): void {
        if (localStorage.getItem('lang')) {
            this.lang = JSON.parse(localStorage.getItem('lang')!);
        } else {
            this.lang = 'ltr';
        }
        this.sub = Object.assign(
            {},
            this._ActivatedRoutes.snapshot.queryParams
        );
        console.log(this.sub.id);
        this.getBlogById(this.sub.id);
    }
    getBlogById(id: string) {
        return this._blogService.getById(id).subscribe((blog) => {
            this.blog = blog.data;
        });
    }
}
