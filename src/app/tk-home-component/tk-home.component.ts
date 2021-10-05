import { AfterViewInit, Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

import { CardContentGuidComponent } from '../tk-card-content-guid-component/tk-card-content-guid.component';
import { CardContentHallOfShameComponent } from '../tk-card-content-hall-of-shame-component/tk-card-content-hall-of-shame.component';
import { CardContentSqlComponent } from '../tk-card-content-sql-component/tk-card-content-sql.component';
import { CardContentSqlViewComponent } from '../tk-card-content-sql-view-component/tk-card-content-sql-view.component';
import { CardContentTextComponent } from '../tk-card-content-text-component/tk-card-content-text.component';
import { CardContentConverterComponent } from '../tk-card-content-converter-component/tk-card-content-converter.component';
import { CardContentTranslateKeysComponent } from '../tk-card-content-translate-keys-component/tk-card-content-translate-keys.component';
import { CardContentWelcomeComponent } from '../tk-card-content-welcome-component/tk-card-content-welcome.component';
import { CardContentPageInDevelopmentComponent } from './../tk-card-content-page-in-development-component/tk-card-content-page-in-development.component';

export class ListOfComponents {

  public welcomeComponent :any = CardContentWelcomeComponent;
  public guidComponent:any = CardContentGuidComponent;
  public textComponent:any = CardContentTextComponent;
  public sqlComponent:any = CardContentSqlComponent;
  public sqlViewComponent:any = CardContentSqlViewComponent;
  public converter:any = CardContentConverterComponent;
  public translateKeysComponent:any = CardContentTranslateKeysComponent;
  public pageInDevelpment:any = CardContentPageInDevelopmentComponent;
  public hallOfShame:any = CardContentHallOfShameComponent;

}

@Component({
  selector: 'tk-home',
  templateUrl: './tk-home.component.html',
  styleUrls: ['./tk-home.component.scss']
})
export class HomeComponent extends ListOfComponents implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild("cardContentContainerRef", { read: ViewContainerRef }) container:any;

  public cardLabel:string = "Welcome";
  public chosenComponent:any = CardContentWelcomeComponent;

  constructor(private resolver: ComponentFactoryResolver) {
    super();
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    this.createComponent(this.chosenComponent);
  }

  ngOnDestroy(): void {
    this.container.destroy();
  }

  destroyComponent() {

  }

  public changeMainCardContent(option:string){
    option = option.toLowerCase();
    switch (option) {
      case 'guid':
        this.createComponent(this.guidComponent);
        break;

      case 'welcome':
          this.createComponent(this.welcomeComponent);
          break;

      case 'text':
          this.createComponent(this.textComponent);
          break;

      case 'converter':
        this.createComponent(this.converter);
        break;

      case 'sqlview':
        this.createComponent(this.sqlViewComponent);
        break;

      case 'translatekeys':
          this.createComponent(this.translateKeysComponent);
          break;

      case 'pageindevelopment':
        this.createComponent(this.pageInDevelpment);
        break;

      case 'hallofshame':
          this.createComponent(this.hallOfShame);
          break;

      default:
        this.createComponent(this.welcomeComponent);
        break;
    }
  }
    // const factory = this.resolver.resolveComponentFactory(CardContentWelcomeComponent);
//
  createComponent(component:any) {
    this.container?.clear();
    const factory = this.resolver.resolveComponentFactory(component);
    this.container?.createComponent(factory);

    // To acess the element
    //const componentRef =this.container?.createComponent(factory);
    // componentRef.instance.message = message;
    }
}

