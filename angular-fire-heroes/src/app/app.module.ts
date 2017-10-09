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
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HeroeService} from './heroes/shared/heroe.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule, MdCardModule, MdCheckboxModule, MdInputModule, MdListModule, MdSidenavModule,
  MdToolbarModule
} from '@angular/material';
import { UploadFormComponent } from './uploads/upload-form/upload-form.component';
import {UploadService} from './uploads/shared/upload.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroesFormComponent,
    HeroeDetailComponent,
    UploadFormComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    BrowserAnimationsModule,
    MdListModule,
    MdCardModule,
    MdButtonModule,
    MdSidenavModule,
    MdToolbarModule,
    MdInputModule,
    MdCheckboxModule,
    RouterModule.forRoot([
      {
        path: 'heroesform',
        component: HeroesFormComponent
      },
      {
        path: '',
        redirectTo: 'heroeslist', pathMatch: 'full'
      },
      {
        path: 'heroeslist',
        component: HeroesListComponent
      },
      {
        path: 'uploadform',
        component: UploadFormComponent
      }
    ])
  ],
  providers: [HeroeService, UploadService],
  bootstrap: [AppComponent]
})


export class AppModule { }
