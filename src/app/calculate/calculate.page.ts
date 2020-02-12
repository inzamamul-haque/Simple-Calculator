import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.page.html',
  styleUrls: ['./calculate.page.scss'],
})
export class CalculatePage implements OnInit {

  num1: number;
  num2: number;
  num3: number;
  num4: number;
  num5: number;

  constructor() {
  }
  ngOnInit() {
  }
  add() {
    this.num3 = this.num1 + (this.num2) / 40;
  }
  multiple() {
    this.num3 = this.num1 + (this.num2) / 40;
    this.num5 = this.num4 * this.num3;
  }
  refresh() {
    this.num1 = null;
    this.num2 = null;
    this.num3 = null;
    this.num4 = null;
    this.num5 = null;
  }
}
