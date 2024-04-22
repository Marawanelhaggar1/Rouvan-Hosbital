import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/app/core/models/settings';
import { SettingsService } from 'src/app/core/services/settings.service';

@Component({
    selector: 'app-contact-info',
    templateUrl: './contact-info.component.html',
    styleUrls: ['./contact-info.component.scss'],
})
export class ContactInfoComponent implements OnInit {
    lang?: string;
    setting?: Settings;
    constructor(private _settingService: SettingsService) {}

    ngOnInit(): void {
        if (localStorage.getItem('lang')) {
            this.lang = JSON.parse(localStorage.getItem('lang')!);
        } else {
            this.lang = 'ltr';
        }

        this.getSettings();
    }

    getSettings() {
        this._settingService.get().subscribe({
            next: (data) => {
                console.log(data.data);
                this.setting = data.data[data.data.length - 1];
            },
            error: (err) => {
                console.error(err);
            },
        });
    }
}
