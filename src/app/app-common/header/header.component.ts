import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.querySelector('.closebtn').addEventListener('click', (e) => this.closeNav());
    document.querySelector('.openbtn').addEventListener('click', (e) => this.openDiv());
  }

  openDiv() {
    document.querySelector('.sidenav').classList.remove('hideNav');
    document.querySelector('.sidenav').classList.add('showNav');
  }

  closeNav() {
    document.querySelector('.sidenav').classList.add('hideNav');
    document.querySelector('.sidenav').classList.remove('showNav');
  }

}
