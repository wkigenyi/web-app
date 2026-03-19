/**
 * Copyright since 2025 Mifos Initiative
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/** Angular Imports */
import { Component, Input, OnInit, inject } from '@angular/core';
import { UntypedFormControl, UntypedFormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';

/** Custom Services */
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { STANDALONE_SHARED_IMPORTS } from 'app/standalone-shared.module';
import { LoanAccountActionsBaseComponent } from '../loan-account-actions-base.component';

/**
 * Undo Disbursal component.
 */
@Component({
  selector: 'mifosx-undo-disbursal',
  templateUrl: './undo-disbursal.component.html',
  styleUrls: ['./undo-disbursal.component.scss'],
  imports: [
    ...STANDALONE_SHARED_IMPORTS,
    CdkTextareaAutosize
  ]
})
export class UndoDisbursalComponent extends LoanAccountActionsBaseComponent implements OnInit {
  private formBuilder = inject(UntypedFormBuilder);

  @Input() actionName: string;

  /** Undo disbursal form. */
  note: UntypedFormControl;

  constructor() {
    super();
  }

  /**
   * Creates the undo disbursal form.
   */
  ngOnInit() {
    this.note = this.formBuilder.control('', Validators.required);
  }

  /**
   * Submits the undo disbursal form.
   */
  submit() {
    let command = 'undodisbursal';
    if (this.actionName === 'Undo Last Disbursal') {
      command = 'undolastdisbursal';
    }
    this.loanService.loanActionButtons(this.loanId, command, { note: this.note.value }).subscribe((response: any) => {
      this.gotoLoanDefaultView();
    });
  }
}
