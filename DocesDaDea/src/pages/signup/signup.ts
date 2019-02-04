import { CityDTO } from './../../models/city.dto';
import { StateDTO } from './../../models/state.dto';
import { CityService } from './../../services/domain/city.service';
import { StateService } from './../../services/domain/state.service';
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
  estados: StateDTO[]
  cidades: CityDTO[]

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public stateService: StateService,
    public cityService: CityService) {

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
    this.stateService.findAll().subscribe(res => {
      this.estados = res
      console.log('states', res)
      this.formGroup.get('address.state').setValue(this.estados[0]);
      this.updateCidades()
    }, error =>{})
  }

  updateCidades() {
    let state: any = this.formGroup.get('address.state').value
    console.log('state', state)
    this.cityService.findCities(state).subscribe(res => {
      this.cidades = res
      this.formGroup.get('address.city').setValue(null);
    }, error => {})
  }

  signupUser() {
    console.log('passou')
  }

}
