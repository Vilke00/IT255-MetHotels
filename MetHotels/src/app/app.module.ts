import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/Forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SmestajComponent } from './components/smestaj/smestaj.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterPipePipe } from './helpers/filter-pipe.pipe';

import { SmestajService } from './services/smestaj.service';
import { AddComponent } from './components/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    SmestajComponent,
    NavbarComponent,
    FilterPipePipe,
    AddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SmestajService],
  bootstrap: [AppComponent]
})
export class AppModule { }
