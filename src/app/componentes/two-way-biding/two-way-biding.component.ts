import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-biding',
  templateUrl: './two-way-biding.component.html',
  styleUrls: ['./two-way-biding.component.css']
})
export class TwoWayBidingComponent implements OnInit {

  nome: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
