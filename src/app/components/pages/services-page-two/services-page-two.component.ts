import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-services-page-two',
    templateUrl: './services-page-two.component.html',
    styleUrls: ['./services-page-two.component.scss'],
})
export class ServicesPageTwoComponent implements OnInit {
    lang?: string;
    services = [
        {
            en: 'Radiology Center',
            ar: 'مركز الأشعة',
            descriptionEn:
                'Integrated radiology integrated center with the most advanced radiology devices and equipments',
            descriptionAr: 'مركز متكامل للأشعة يحتوي علي أحدث الأجهزة والمعدات',
        },
        {
            en: 'Operations Department',
            ar: ' قسم العمليات ',
            descriptionEn:
                'Operation rooms are designed with a capsule system to ensure the highest degree of sterilization and avoid any sources of infection',
            descriptionAr:
                'غرف عمليات صُممت بنظام الكبسولة لضمان أعلى درجات التعقيم وتجُنب أي مصادر للعدوى',
        },
        {
            en: 'Emergency and Trauma Center',
            ar: ' مركز الطوارئ والإصابات ',
            descriptionEn:
                'Emergency service is available 24/7 to provide the highest medical care',
            descriptionAr:
                'طوارئ متاحة 24 ساعة طوال أيام الأسبوع لتقديم أعلى مستويات الرعاية الطبية في الحالات الطارئة',
        },
        {
            en: 'Intensive Care Unit',
            ar: ' الرعاية المركزة ',
            descriptionEn:
                'Fully equipped intensive care unit with the most advanced types of equipment for critical and unstable cases',
            descriptionAr:
                'وحدة رعاية مجهزة بالكامل ومزودة بأحدث الأجهزة لرعاية الحالات الحرجة والغير مستقرة',
        },
        {
            en: 'Outpatient clinics',
            ar: 'العيادات الخارجية',
            descriptionEn:
                'The hospital contains a large number of outpatient clinics equipped with the latest equipment in all specialties',
            descriptionAr:
                'تحتوي المستشفى على عدد كبير من العيادات الخارجية المجهزة بأحدث التقنيات والخدمات الطبية في جميع التخصصات',
        },
        {
            en: 'Accommodation',
            ar: 'الإقامات',
            descriptionEn:
                'Special internal accommodation to ensure the highest level of comfort and luxury',
            descriptionAr:
                'إقامات داخلية متميزة لضمان أعلى درجات الراحة والرفاعية',
        },
        {
            en: 'Medical analysis laboratory',
            ar: 'معمل التحاليل الطبية',
            descriptionEn:
                'lab services 24/7 to give fast and accurate results',
            descriptionAr:
                'معمل مجهز للعمل علي مدار 24 ساعة لإعطاء أسرع وأدق النتائج',
        },
        {
            en: 'Medical analysis laboratory',
            ar: 'معمل التحاليل الطبية',
            descriptionEn:
                'lab services 24/7 to give fast and accurate results',
            descriptionAr:
                'معمل مجهز للعمل علي مدار 24 ساعة لإعطاء أسرع وأدق النتائج',
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
