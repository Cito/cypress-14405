import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  opened = false;
  submitted = false;
  hint = true;

  options = [
    {label: '', value: null},
    {label: 'New York', value: 'NY'},
    {label: 'Rome', value: 'RM'},
    {label: 'London', value: 'LDN'},
    {label: 'Istanbul', value: 'IST'},
    {label: 'Paris', value: 'PRS'}
  ];

  selection = null;

  ngOnInit(): void {
    setTimeout(() => this.hint = false, 8000);
  }

  submit(): void {
    if (this.selection) {
      setTimeout(() => {
      this.opened = false;
      this.submitted = true;
      }, 500);
    }
  }

}
