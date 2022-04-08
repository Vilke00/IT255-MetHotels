import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/Forms';

import { AppComponent } from './app.component';
import { SmestajComponent } from './components/smestaj/smestaj.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FilterPipePipe } from './helpers/filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SmestajComponent,
    NavbarComponent,
    FilterPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
