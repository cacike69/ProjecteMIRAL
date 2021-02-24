import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  verpasswd: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  habilitarpasswd(): void {

    let campo:any = document.getElementById('passwd');

    if (this.verpasswd) {

      this.verpasswd = false;
      campo.type = "password";

    } else {

      this.verpasswd = true;
      campo.type = "text";

    }


  }

}
