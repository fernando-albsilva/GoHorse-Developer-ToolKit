import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardContentGuidComponent } from './tk-card-content-guid-component/tk-card-content-guid.component';
import { CardContentWelcomeComponent } from './tk-card-content-welcome-component/tk-card-content-welcome.component';
import { HomeComponent } from './tk-home-component/tk-home.component';
import { MenuNavComponent } from './tk-menu-nav-component/tk-menu-nav.component';
import { MenuSideTools } from './tk-menu-side-tools-component/tk-menu-side-tools.component';
import { CardContentTextComponent } from './tk-card-content-text-component/tk-card-content-text.component';
import { CardContentTranslateKeysComponent } from './tk-card-content-translate-keys-component/tk-card-content-translate-keys.component';
import { CardContentSqlComponent } from './tk-card-content-sql-component/tk-card-content-sql.component';
import { CardContentPageInDevelopmentComponent } from './tk-card-content-page-in-development-component/tk-card-content-page-in-development.component';
import { CardContentSqlViewComponent } from './tk-card-content-sql-view-component/tk-card-content-sql-view.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { CardContentHallOfShameComponent } from './tk-card-content-hall-of-shame-component/tk-card-content-hall-of-shame.component';
import { CardContentConverterComponent } from './tk-card-content-converter-component/tk-card-content-converter.component';
import { CardPasswordGeneratorComponent } from './tk-card-password-generator/tk-card-password-generator.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuNavComponent,
    MenuSideTools,
    CardContentWelcomeComponent,
    CardContentGuidComponent,
    CardContentTextComponent,
    CardContentTranslateKeysComponent,
    CardContentSqlComponent,
    CardContentPageInDevelopmentComponent,
    CardContentSqlViewComponent,
    CardContentHallOfShameComponent,
    CardContentConverterComponent,
    CardPasswordGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
