import { RastreadorModule } from './rastreador/rastreador.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//firebase
import { AngularFireModule } from '@angular/fire/';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';

// maps
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RastreadorModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,

  ],
  exports: [
    RastreadorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
