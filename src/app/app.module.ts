import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookInfoComponent } from './book-info/book-info.component';
import { HouseInfoComponent } from './house-info/house-info.component';
import { CharacterInfoComponent } from './character-info/character-info.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GotHttpService } from './got-http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookInfoComponent,
    HouseInfoComponent,
    CharacterInfoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'character/:id', component:CharacterInfoComponent},
      {path:'book/:id', component:BookInfoComponent},
      {path:'house/:id', component:HouseInfoComponent},
      {path:'**',component:NotFoundComponent}
    ])
  ],
  providers: [
    GotHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
