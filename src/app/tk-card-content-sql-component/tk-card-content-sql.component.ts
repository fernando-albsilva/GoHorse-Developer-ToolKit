import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tk-card-content-sql-component',
  templateUrl: './tk-card-content-sql.component.html',
  styleUrls: ['./tk-card-content-sql.component.scss']
})
export class CardContentSqlComponent {

  @Output() changeMainCardContent: any = new EventEmitter();

  constructor() {}


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


  public optionSelected(option:string){
    this.changeMainCardContent.emit(option);
  }

}
