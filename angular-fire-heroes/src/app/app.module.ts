import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { HeroesFormComponent } from './heroes/heroe-form/heroes-form.component';
import { HeroeDetailComponent } from './heroes/heroe-detail/heroe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroesFormComponent,
    HeroeDetailComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
