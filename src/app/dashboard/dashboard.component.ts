import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  services = [];
  
  constructor(private servicesClient: ServicesService) { }

  ngOnInit() {
    this.servicesClient.getServices()
      .subscribe(services => this.services = services);
  }
}
