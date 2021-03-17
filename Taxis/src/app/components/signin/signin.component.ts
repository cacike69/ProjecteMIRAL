import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  formRegistro!: FormGroup;
  submitted = false;

  constructor(private readonly fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
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

  get f(){
    return this.formRegistro.controls;
  }

  registrarUsuari(){
    console.log("Hola");
    this.submitted = true;

    if(this.formRegistro.invalid){

      return;

    }
    // console.log(this.formRegistro.get('name'));
  }

}
