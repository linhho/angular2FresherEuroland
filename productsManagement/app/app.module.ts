import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { FilterProductPipe } from './helpers/filterProduct.pipe'

@NgModule({
  imports: [BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent},
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]),
  ],
  declarations: [AppComponent, HomeComponent, FilterProductPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
