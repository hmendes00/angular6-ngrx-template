import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './section-title.component.html',
  styleUrls: ['./section-title.component.scss']
})
export class SectionTitleComponent implements OnInit {
  @Input() title: string;
  @HostBinding('class.center') @Input() centered = false;

  constructor() { }

  ngOnInit() {
  }

}
