import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-appointment-search',
    templateUrl: './appointment-search.component.html',
    styleUrls: ['./appointment-search.component.scss'],
})
export class AppointmentSearchComponent {
    searchForm!: FormGroup;
    lang?: string;

    constructor(private _formBuilder: FormBuilder) {
        this.searchForm = _formBuilder.group({
            specialty: ['', [Validators.required]],
            doctor: ['', [Validators.required]],
        });
    }

    ngOnInit(): void {
        if (localStorage.getItem('lang')) {
            this.lang = JSON.parse(localStorage.getItem('lang')!);
        } else {
            this.lang = 'ltr';
        }
    }
}
