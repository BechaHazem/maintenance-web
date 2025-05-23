import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InterventionService } from 'src/app/services/intervention/intervention.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
kpis: any = {};

constructor(private interventionService: InterventionService){

}
ngOnInit(): void {
  this.interventionService.getKPIs().subscribe((data: any) => {
    this.kpis = data;
  });
}

}
