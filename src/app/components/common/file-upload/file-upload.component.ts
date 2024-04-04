import { Component, ElementRef, HostListener, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-file-upload',
    templateUrl: './file-upload.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: FileUploadComponent,
            multi: true,
        },
    ],
    styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent implements ControlValueAccessor {
    onChange!: Function;
    public file: File | null = null;
    @HostListener('change', ['$event.target.files']) emitFiles(
        event: FileList
    ) {
        const file = event && event.item(0);
        this.onChange(file);
        this.file = file;
    }
    constructor(private host: ElementRef<HTMLInputElement>) {}

    writeValue(obj: any): void {
        this.host.nativeElement.value = '';
        this.file = null;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {}
}
