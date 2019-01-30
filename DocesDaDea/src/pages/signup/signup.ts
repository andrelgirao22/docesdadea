import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder) {

      this.formGroup = this.formBuilder.group({
        name: ['Joao', [Validators.required]],
        email: ['joao@gmail.com', [Validators.required, Validators.email]],
        addressName: ['Rua x', [Validators.required]],
        addressNumber: ['Rua x', [Validators.required]],
        neighborhood: ['Bairro x', [Validators.required]],
        postalCode: ['60730285', [Validators.required]],
        city: [null, [Validators.required]],
        state: [null, [Validators.required]],
        complement: ['', [Validators.required]]
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signupUser() {
    console.log('passou')
  }

}
