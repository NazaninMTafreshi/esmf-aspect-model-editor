/*
 * Copyright (c) 2023 Robert Bosch Manufacturing Solutions GmbH
 *
 * See the AUTHORS file(s) distributed with this work for
 * additional information regarding authorship.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * SPDX-License-Identifier: MPL-2.0
 */

import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {EditorModelService} from '../../../editor-model.service';

@Component({
  selector: 'ame-trait-characteristic',
  templateUrl: './trait-characteristic.component.html',
})
export class TraitCharacteristicComponent {
  @Input() parentForm: FormGroup;
  public element$ = this.metaModelDialogService.getMetaModelElement();

  constructor(public metaModelDialogService: EditorModelService) {}
}
