import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  usuario: Usuario;
  formRegistro: FormGroup;
  submitted: boolean = false;

  constructor(private usuarioService: UsuarioService, private readonly fb: FormBuilder, private router: Router) {

    this.usuario = new Usuario('', '', 0, '', '');

    this.formRegistro = this.fb.group({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
      lname: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(25),
      ]),
      telefon: new FormControl('', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
      ]),
      rpass: new FormControl('', [
        Validators.required,
        RxwebValidators.compare({ fieldName: 'pass' }),
      ])
    })
  }

  ngOnInit(): void {}

  get f(){return this.formRegistro.controls;}

  registrarUsuari(){
    console.log("Hola");
    this.submitted = true;
    if(this.formRegistro.invalid){
      return;
    }

    this.usuario = new Usuario(
      this.formRegistro.controls.name.value,
      this.formRegistro.controls.lname.value,
      this.formRegistro.controls.telefon.value,
      this.formRegistro.controls.email.value,
      this.formRegistro.controls.pass.value
    );

    console.log(this.usuario);

  }

}
