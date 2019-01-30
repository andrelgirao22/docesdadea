import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


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
        address: new FormGroup({
          addressName: new FormControl('Rua x', [Validators.required]),
          addressNumber:new FormControl('Rua x', [Validators.required]),
          neighborhood: new FormControl('Bairro x', [Validators.required]),
          postalCode: new FormControl('60730285', [Validators.required]),
          city: new FormControl(null, [Validators.required]),
          state: new FormControl(null, [Validators.required]),
          complement: new FormControl('', [Validators.required])
        })
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signupUser() {
    console.log('passou')
  }

}
