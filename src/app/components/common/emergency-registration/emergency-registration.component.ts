import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Career } from 'src/app/core/models/career';
import { CareerService } from 'src/app/core/services/career-service.service';

@Component({
    selector: 'app-emergency-registration',
    templateUrl: './emergency-registration.component.html',
    styleUrls: ['./emergency-registration.component.scss'],
})
export class EmergencyRegistrationComponent implements OnInit {
    hiringForm: FormGroup;
    lang?: string;
    alert?: string;
    alertStatus!: string;
    constructor(
        private _formBuilder: FormBuilder,
        private _careerService: CareerService
    ) {
        this.hiringForm = _formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required]],
            job: ['', [Validators.required]],
            cv: ['', [Validators.required]],
        });
    }

    ngOnInit(): void {
        if (localStorage.getItem('lang')) {
            this.lang = JSON.parse(localStorage.getItem('lang')!);
        } else {
            this.lang = 'ltr';
        }
    }

    onSubmit() {
        console.log(this.hiringForm.value);
        if (this.hiringForm.valid) {
            const file = this.hiringForm.get('cv')?.value;
            const formData = new FormData();
            formData.append('name', this.hiringForm.value.name);
            formData.append('email', this.hiringForm.value.email);
            formData.append('phone', this.hiringForm.value.phone);
            formData.append('job', this.hiringForm.value.job);
            formData.append('cv', file);

            this.sendCareer(formData);
        } else {
            this.alertStatus = 'warning';
            this.alert =
                this.lang === 'ltr'
                    ? 'Please enter valid Data'
                    : 'أرجوك أدخل بيانات صحيحة';
        }
    }

    sendCareer(body: FormData) {
        return this._careerService.post(body).subscribe({
            next: (data) => {
                this.alertStatus = 'success';
                this.alert =
                    this.lang === 'ltr'
                        ? 'Data Sent Successfully '
                        : 'تم الأرسال بنجاح';
            },
            error: (err) => {
                this.alertStatus = 'danger';
                this.alert = err.error.message;
            },
        });
    }
}
