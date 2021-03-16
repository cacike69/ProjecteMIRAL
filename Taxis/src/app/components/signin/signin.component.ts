import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  ngOnInit(): void {
  }

  formRegistro: FormGroup;

  validation_messages={
    name:[
      {type:'required', message:'Este campo es obligatorio'}
    ],
    lname:[
      {type:'required', message:'Este campo es obligatorio'}
    ],
    telefon:[
      {type:'required', message:'Este campo es obligatorio'}
    ],
    email:[
      {type:'required', message:'Este campo es obligatorio'}
    ],
    pass:[
      {type:'required', message:'Este campo es obligatorio'}
    ],
    rpass:[
      {type:'required', message:'Este campo es obligatorio'}
    ]
  }

  constructor(private readonly fb: FormBuilder, private router: Router) {
    this.formRegistro = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
      lname: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
      telefon: new FormControl('', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9),
      ]),
      rpass: new FormControl('', [
        Validators.required,
        RxwebValidators.compare({ fieldName: 'pass' }),
      ])
    })
  }



  registrarUsuari(){
    console.log("Hola");
  }

}
