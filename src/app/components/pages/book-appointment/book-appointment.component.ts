import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecaptchaErrorParameters } from 'ng-recaptcha';
import { CookieService } from 'ngx-cookie-service';
import { Doctor } from 'src/app/core/models/doctor';
import { UserService } from 'src/app/core/services/auth-services.service';
import { BookingService } from 'src/app/core/services/booking.service';
import { DoctorService } from 'src/app/core/services/doctor.service';

@Component({
    selector: 'app-book-appointment',
    templateUrl: './book-appointment.component.html',
    styleUrls: ['./book-appointment.component.scss'],
})
export class BookAppointmentComponent {
    lang?: string;
    alert?: string;
    alertStatus!: string;
    appointmentForm: FormGroup;
    sub: any;
    schedule: any;
    doctor!: Doctor;
    scheduleId!: number;
    user!: any;
    siteKey = '6LeBjYgpAAAAAJCRCOmCYYQ8u4oiCfNXd_DUbaQg';

    constructor(
        private _router: Router,
        private _formBuilder: FormBuilder,
        private _ActivatedRoute: ActivatedRoute,
        private _doctorService: DoctorService,
        private _bookingService: BookingService,
        private _userService: UserService,
        private _Cookie: CookieService
    ) {
        this.appointmentForm = this._formBuilder.group({
            patient_name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required]],
            payment: ['', [Validators.required]],
            time: ['', [Validators.required]],
        });
    }

    onSubmit() {
        if (this.appointmentForm.valid) {
            this.sendBooking();
        } else {
            this.alertStatus = 'warning';
            this.alert =
                this.lang === 'ltr'
                    ? 'Please enter valid Data'
                    : 'أرجوك أدخل بيانات صحيحة';
        }
    }

    ngOnInit() {
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

            this.getDoctorById(this.schedule.doctor_id);
        });
    }

    getDoctorById(id: number) {
        return this._doctorService.getById(id).subscribe((data) => {
            this.doctor = data.data;
        });
    }

    sendBooking() {
        let booking = {
            doctor_id: this.doctor.id,
            date: this.schedule.date,
            status: 'submitted',
            ...this.appointmentForm.value,
        };
        console.log(booking);
        return this._bookingService.postBooking(booking).subscribe({
            next: (data) => {
                this.alertStatus = 'success';
                this.alert =
                    this.lang === 'ltr'
                        ? 'Appointment Successfully Booked'
                        : 'تم الحجز بنجاح';
            },
            error: (err) => {
                this.alertStatus = 'danger';
                this.alert = err.error.message;
            },
        });
    }

    public resolved(captchaResponse: string): void {
        console.log(`Resolved captcha with response: ${captchaResponse}`);
    }

    public onError(errorDetails: RecaptchaErrorParameters): void {
        console.log(`reCAPTCHA error encountered; details:`, errorDetails);
    }
}
