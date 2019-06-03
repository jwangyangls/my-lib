import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sf-my-lib',
  template: `
    <p>
      my-lib works!
    </p>
  `,
  styles: []
})
export class MyLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(1223876543)
  }

}
