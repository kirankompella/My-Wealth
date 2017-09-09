import { Component, OnInit } from '@angular/core';
import { Fd } from '../fd';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  fd : Fd = new Fd();

  constructor() { }

  ngOnInit() {
    this.fd.InvestmentType = 'Fixed Deposit';
  }

}
