import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-appointment',
    templateUrl: './appointment.component.html',
    styleUrls: ['./appointment.component.scss'],
})
export class AppointmentComponent implements OnInit {
    mytime: Date = new Date();
    lang?: string;
    doctors?: string[];
    specialties?: string[];
    searchForm!: FormGroup;

    constructor(private _formBuilder: FormBuilder, public router: Router) {
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
    }

    // Video Popup
    isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }
}
