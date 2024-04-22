import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/core/models/service';
import { ServiceService } from 'src/app/core/services/service.service';

@Component({
    selector: 'app-service-details-page-one',
    templateUrl: './service-details-page-one.component.html',
    styleUrls: ['./service-details-page-one.component.scss'],
})
export class ServiceDetailsPageOneComponent implements OnInit {
    lang?: string;
    services?: Service;
    sub: any;
    serviceId!: string;
    constructor(
        private _serviceService: ServiceService,
        private _ActivatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        if (localStorage.getItem('lang')) {
            this.lang = JSON.parse(localStorage.getItem('lang')!);
        } else {
            this.lang = 'ltr';
        }

        this.sub = this._ActivatedRoute.params.subscribe((params) => {
            this.serviceId = params['id'];
            this.getByServiceId(this.serviceId);
        });
    }

    getByServiceId(id: string) {
        return this._serviceService.getById(id).subscribe((service) => {
            this.services = service.data;
        });
    }
}
