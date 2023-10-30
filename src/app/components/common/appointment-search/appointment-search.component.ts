import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-appointment-search',
    templateUrl: './appointment-search.component.html',
    styleUrls: ['./appointment-search.component.scss'],
})
export class AppointmentSearchComponent {
    searchForm!: FormGroup;

    constructor(private _formBuilder: FormBuilder) {
        this.searchForm = _formBuilder.group({
            specialty: ['', [Validators.required]],
            doctor: ['', [Validators.required]],
        });
    }
}
