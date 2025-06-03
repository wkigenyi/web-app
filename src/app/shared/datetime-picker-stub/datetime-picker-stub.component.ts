import { Component, Input } from '@angular/core';

/* eslint-disable @angular-eslint/component-selector */
/* eslint-disable @angular-eslint/prefer-standalone */
@Component({
  selector: 'ngx-mat-datetime-picker',
  template: `
    <mat-datepicker-toggle [for]="picker"></mat-datepicker-toggle>
    <mat-datepicker #picker></mat-datepicker>
  `,
  standalone: false
})
export class DatetimePickerStubComponent {
  @Input() enableMeridian: boolean = true;
}
