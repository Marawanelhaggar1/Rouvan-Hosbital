import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Specialization } from 'src/app/core/models/specialization';
import { SpecializationService } from 'src/app/core/services/specialization.service';

@Component({
    selector: 'app-specialities',
    templateUrl: './specialities.component.html',
    styleUrls: ['./specialities.component.scss'],
})
export class SpecialitiesComponent {
    lang?: string;
    currentPage!: number;
    page: number[] = [];
    specialties?: Specialization[] = [];

    constructor(
        public router: Router,
        private _specialtyService: SpecializationService
    ) {}

    ngOnInit(): void {
        if (localStorage.getItem('lang')) {
            this.lang = JSON.parse(localStorage.getItem('lang')!);
        } else {
            this.lang = 'ltr';
        }
        this.getSpecialties(1);
    }

    getSpecialties(page: number) {
        this.specialties = [];

        return this._specialtyService.getPaginate(page).subscribe((data) => {
            this.specialties = data.data;
            this.currentPage = data.meta.current_page;
            for (let i = 1; i <= data.meta.last_page; i++) {
                if (!this.page.includes(i)) this.page.push(i);
            }
            console.log(data);

            return this.specialties;
        });
    }
}
