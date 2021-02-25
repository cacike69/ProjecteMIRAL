import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingres',
  templateUrl: './ingres.component.html',
  styleUrls: ['./ingres.component.css']
})
export class IngresComponent implements OnInit {

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
