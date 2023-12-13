import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RecaptchaErrorParameters } from 'ng-recaptcha';
import { Doctor } from 'src/app/core/models/doctor';
import { DoctorService } from 'src/app/core/services/doctor.service';

@Component({
    selector: 'app-book-appointment',
    templateUrl: './book-appointment.component.html',
    styleUrls: ['./book-appointment.component.scss'],
})
export class BookAppointmentComponent {
    lang?: string;
    appointmentForm: FormGroup;
    sub: any;
    schedule: any;
    doctor!: Doctor;
    scheduleId!: number;
    siteKey = '6LdICtkoAAAAAD6AtUM08O4U-DS_5HIVfSY__Py3';

    constructor(
        private _formBuilder: FormBuilder,
        private _ActivatedRoute: ActivatedRoute,
        private _doctorService: DoctorService
    ) {
        this.appointmentForm = this._formBuilder.group({
            first_name: ['', [Validators.required]],
            last_name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            mobile: ['', [Validators.required]],
            payment_method: ['', [Validators.required]],
        });
    }

    onSubmit() {}

    ngOnInit() {
        // this.getTheDate();
        if (localStorage.getItem('lang')) {
            this.lang = JSON.parse(localStorage.getItem('lang')!);
        } else {
            this.lang = 'ltr';
        }
        this.sub = this._ActivatedRoute.params.subscribe((params) => {
            this.scheduleId = params['id'];
            this.getScheduleById(this.scheduleId);
        });
    }

    getScheduleById(id: number) {
        return this._doctorService.getSchedule(id).subscribe((data) => {
            this.schedule = data.data;
            console.log(this.schedule);
            this.getTheDate(this.schedule.date);
            // this.schedule.date = console.log(this.schedule);
            this.getDoctorById(this.schedule.doctor_id);
        });
    }

    getDoctorById(id: number) {
        return this._doctorService.getById(id).subscribe((data) => {
            // console.log(data);
            this.doctor = data.data;
        });
    }

    getTheDate(targetDay: string) {
        // Validate the target day input
        const validDays =
            this.lang == 'ltr'
                ? [
                      'Sunday',
                      'Monday',
                      'Tuesday',
                      'Wednesday',
                      'Thursday',
                      'Friday',
                      'Saturday',
                  ]
                : [
                      'الأحد',
                      'الأثنين',
                      'الثلاثاء',
                      'الأربعاء',
                      'الخميس',
                      'الجمعه',
                      'السبت',
                  ];
        if (!validDays.includes(targetDay)) {
            console.error(
                'Invalid target day. Please provide a valid day name (e.g., Sunday, Monday, etc.).'
            );
            return;
        }

        // Get the current date
        const today = new Date();

        // Calculate the next occurrence of the target day
        const targetIndex = validDays.indexOf(targetDay);
        const nextOccurrence = new Date(today);
        nextOccurrence.setDate(
            today.getDate() + ((targetIndex + 7 - today.getDay()) % 7)
        );

        // Format the date as "dd/mm/yyyy"
        const options: any = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        };
        const formattedDate =
            this.lang == 'ltr'
                ? nextOccurrence.toLocaleDateString('en', options)
                : nextOccurrence.toLocaleDateString('ar', options);
        this.schedule.date = formattedDate;
        // console.log(formattedDate);
        // return formattedDate;
        // Output: "dd/mm/yyyy" (Next occurrence of the specified day with the format day/month/year)
    }

    public resolved(captchaResponse: string): void {
        console.log(`Resolved captcha with response: ${captchaResponse}`);
    }

    public onError(errorDetails: RecaptchaErrorParameters): void {
        console.log(`reCAPTCHA error encountered; details:`, errorDetails);
    }
}
