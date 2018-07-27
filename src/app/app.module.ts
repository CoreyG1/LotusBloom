import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { CardlistComponent } from './cardlist/cardlist.component';
import { Card } from './card/card.model';
import {CardService} from './card/card.service';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';


const appRoutes: Routes =[
  { path: 'search', component: CardlistComponent},
  { path: '', component: HomeComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    CardlistComponent,
    AdvancedSearchComponent,
    BodyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
