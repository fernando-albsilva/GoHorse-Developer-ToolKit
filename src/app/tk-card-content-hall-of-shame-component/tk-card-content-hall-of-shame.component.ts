import { Component } from '@angular/core';


@Component({
  selector: 'tk-card-content-hall-of-shame',
  templateUrl: './tk-card-content-hall-of-shame.component.html',
  styleUrls: ['./tk-card-content-hall-of-shame.component.scss']
})
export class CardContentHallOfShameComponent {

  constructor(){}

  public navegateToGithub(){
    window.location.href='https://github.com/fernando-albsilva';
  }

  public navegateToLinkedin(){
    window.location.href='https://www.linkedin.com/in/fernando-albuquerque-65a980193';
  }
}
