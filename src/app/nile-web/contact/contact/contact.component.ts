import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


// ngrx
// import { Store } from '@ngrx/store';

// import * as fromApp from '../../../reducers';

// import * as app from '../../../core/store/app.actions';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  
    constructor(
      private _fb: FormBuilder,
      private _afAuth: AngularFireAuth,
      private _afDb: AngularFireDatabase
      // private _appStore: Store<fromApp.State>
  
    ) {
      this.buildForm();
      }
  
  ngOnInit() {
    }
  
  buildForm(): void {
    this.form = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  
  onSubmit() {
    this._afDb.list(`/company`).push({
      name: this.form.value.Name,
      email: this.form.controls['Email'].value,
      subject: this.form.controls['Subject'].value,
      message: this.form.controls['Message'].value
  }
}
}
