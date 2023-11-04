import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dentists-page',
    templateUrl: './dentists-page.component.html',
    styleUrls: ['./dentists-page.component.scss'],
})
export class DentistsPageComponent implements OnInit {
    lang?: string;
    doctors = [
        {
            image: 'https://angular.hibotheme.com/inba/inba-rtl/assets/images/doctor/doctor-2.jpg',
            nameEn: 'Marwan Elhaggar',
            nameAr: 'مروان الحجار',
            specializationEn: 'Gastroenterologists',
            specializationAr: 'أطباء الجهاز الهضمي',
        },
        {
            image: 'https://angular.hibotheme.com/inba/inba-rtl/assets/images/doctor/doctor-4.jpg',
            nameEn: 'Tamer Yehia',
            nameAr: 'تامر يحي',
            specializationEn: 'Aesthetic Dentistry',
            specializationAr: 'طب الأسنان التجميلي',
        },
        {
            image: 'https://angular.hibotheme.com/inba/inba-rtl/assets/images/doctor/doctor-5.jpg',
            nameEn: 'Ibrahim Mabrouk',
            nameAr: 'ابراهيم مبروك',
            specializationEn: 'Endocrinologists',
            specializationAr: 'أطباء الغدد الصماء',
        },
        {
            image: 'https://angular.hibotheme.com/inba/inba-rtl/assets/images/doctor/doctor-3.jpg',
            nameEn: 'Asmaa Galal',
            nameAr: 'أسماء جلال',
            specializationEn: 'Gastroenterologists',
            specializationAr: 'أطباء الجهاز الهضمي',
        },
        {
            image: 'https://angular.hibotheme.com/inba/inba-rtl/assets/images/doctor/doctor-1.jpg',
            nameEn: 'Tara Emad',
            nameAr: 'تارا عماد',
            specializationEn: 'Prosthodontics Dentist',
            specializationAr: 'Prosthodontics Dentist',
        },
        {
            image: 'https://angular.hibotheme.com/inba/inba-rtl/assets/images/doctor/doctor-7.jpg',
            nameEn: 'Amina Khalel',
            nameAr: 'أمينه خليل',
            specializationEn: 'Aesthetic Dentistry',
            specializationAr: 'طب الأسنان التجميلي',
        },
        {
            image: 'https://angular.hibotheme.com/inba/inba-rtl/assets/images/doctor/doctor-8.jpg',
            nameEn: 'Bukayo Saka',
            nameAr: 'بوكايو ساكا',
            specializationEn: 'Cardiologists',
            specializationAr: 'أطباء القلب',
        },
        {
            image: 'https://angular.hibotheme.com/inba/inba-rtl/assets/images/doctor/doctor-9.jpg',
            nameEn: 'Sarah Taylor',
            nameAr: 'ساره تايلور',
            specializationEn: 'Dermatologists',
            specializationAr: 'أطباء الجلد',
        },
    ];
    constructor() {}

    ngOnInit(): void {
        if (localStorage.getItem('lang')) {
            this.lang = JSON.parse(localStorage.getItem('lang')!);
        } else {
            this.lang = 'ltr';
        }
    }
}
