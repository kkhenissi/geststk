import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  showHideSideBar: boolean;

  @Output()
  showHideSideBarEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }


  afficherSideBar() {
    this.showHideSideBar = !this.showHideSideBar;
   // tslint:disable-next-line:align
   this.showHideSideBarEvent.emit(this.showHideSideBar);
  }

  ngOnInit() {

  }

}
