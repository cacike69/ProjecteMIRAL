import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapes',
  templateUrl: './mapes.component.html',
  styleUrls: ['./mapes.component.css']
})
export class MapesComponent implements OnInit {

  lat :number | undefined;
  lng : number | undefined;
  zoom: number | undefined;
  mapTypeId : number | undefined;

  constructor(


  ) { }


  ngOnInit(): void {
  }

}
