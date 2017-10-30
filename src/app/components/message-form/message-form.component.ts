import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SessionService } from '../../session.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.sass']
})
export class MessageFormComponent implements OnInit {

  chirpsList;
  chirpAuthor: string; //gets passed from form validation
  totalChirps: number;//look for users total chirps

  constructor(session: SessionService) { 
    this.chirpsList = session.chirpsList;
    
  }

  ngOnInit() {

  }

  sendChirp(chirp) {

    this.chirpAuthor = 'test';
    this.totalChirps = 0;
    
    this.chirpsList.push(chirp);
    this.totalChirps++;
    console.log(this.chirpsList);
    document.forms['form'].reset();
    return false;
  }

}

 
// get the value in the input and create a new shirp that needs to be pushed into the array with the user validation info.

// generate a ramdom id for each chirp
