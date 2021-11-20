import { Component } from '@angular/core';


@Component({
  selector: 'tk-card-content-hall-of-shame',
  templateUrl: './tk-card-content-hall-of-shame.component.html',
  styleUrls: ['./tk-card-content-hall-of-shame.component.scss']
})
export class CardContentHallOfShameComponent {

  constructor(){}

  //                      `o.....-        `----`
//                     --.   -.   `-....++
//                   ````----/-` `-.+:/:`   ..
//                    ..   `.  .  `--: ````-..`
//                   +.`/  `..--      ``..----.
//             `..   /+-. /    `/       `-.----`         `    `.
//         -/--..:+--` .` +. /h-`   /       --:-      `+-+os/.+o+---`
//         /h.d    ` :.    .-.      /         :/` `--.:     /d/o:--``.
//         h-..    /h:+s`        `-`:            ..` `       `do::-.-.
//         +y       ..`   .------.`.y               .-        :o--.:`
//        +:    .----`````          m`        `.`+  +        --  .`
//        s/y-o-.`:/::`             o+        /`:+.`.---.   s`
//          hos `.:/.               .d        :./-    --:-:-
//            `.//`                  +s+.    /-`       /--:/
//                                     /so/ -:        `..`./.
//                                     /: //        .-`    +-
//                                     -. /:      ``.:`    +-
//                                   .-    -+-   ./.  /   `..--
//                                 `---      :.:  .-/:`  :.   .:
//                               .:`  /    `.` `:.       `-::-`
//                               `+o++/-   /:::-.`

  public navegateToGithub(){
    window.location.href='https://github.com/fernando-albsilva';
  }

  public navegateToLinkedin(){
    window.location.href='https://www.linkedin.com/in/fernando-albuquerque-65a980193';
  }
}
