import { Component, OnInit } from '@angular/core';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { CoverOverviewComponent } from '../cover-overview/cover-overview.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
