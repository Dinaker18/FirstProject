import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})

  export class DashBoardComponent implements OnInit {
    dtOptions: DataTables.Settings = {};
  
    ngOnInit(): void {
      this.dtOptions = {
        pagingType: 'full_numbers'
      };
    }
  }
  


