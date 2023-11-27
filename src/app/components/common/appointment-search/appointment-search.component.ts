import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
    selector: 'app-appointment-search',
    templateUrl: './appointment-search.component.html',
    styleUrls: ['./appointment-search.component.scss'],
})
export class AppointmentSearchComponent {
    searchForm!: FormGroup;
    lang?: string;
    showCustomList: boolean = false;
    showCustomListDoctors: boolean = false;
    doctors?: string[];
    specialties?: string[];

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
        if (this.lang == 'rtl') {
            this.doctors = [
                'محمد الميسيري',
                'أميرة السيد',
                'سالي محمد',
                'ماجد الوكيل',
            ];

            this.specialties = [
                ' المسالك البوليه',
                ' التخدير أمراض النساء و الولادة ',
                ' جراحة القلب و القسطرة طب القلب العامة  ',
                ' جراحة ',
            ];
        } else {
            this.doctors = [
                'Muhammed Elmessry',
                'Amira Elsaid',
                'Sally Mohamed',
                'Maged El Wakeel',
            ];
            this.specialties = [
                'Urology',
                'Anesthesia, obstetrics and gynecology',
                'cardiology',
                'Surgery',
            ];
        }
        console.log(this.doctors);
    }
}
