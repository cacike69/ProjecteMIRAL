import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  registro = new FormGroup({
    name: new FormControl(''),
    lname: new FormControl(''),
    telefon: new FormControl(''),
    email: new FormControl(''),
    pass: new FormControl(''),
    rpass: new FormControl('')
  })

  ngOnInit(): void {
  }

  registrarUsuari(){
    console.log("Hola");
  }

}
