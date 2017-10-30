import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../session.service';
import { MatCardModule } from '@angular/material';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  chirpsList;
  
  constructor (session: SessionService){
    this.chirpsList = session.chirpsList;
    console.log(this.chirpsList)
   }
    
  ngOnInit() {
  }

}
