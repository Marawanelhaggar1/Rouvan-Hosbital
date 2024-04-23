import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/core/models/service';
import { ServiceService } from 'src/app/core/services/service.service';

@Component({
    selector: 'app-features',
    templateUrl: './features.component.html',
    styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
    lang?: string;
    services?: Service[];
    constructor(
        public router: Router,
        private _serviceService: ServiceService
    ) {}

    ngOnInit(): void {
        if (localStorage.getItem('lang')) {
            this.lang = JSON.parse(localStorage.getItem('lang')!);
        } else {
            this.lang = 'ltr';
        }
        this.getService();
    }

    getService() {
        this._serviceService.getFeatured().subscribe({
            next: (data) => {
                this.services = data.data;
            },
            error: (err) => {
                console.error(err);
            },
        });
    }
}
