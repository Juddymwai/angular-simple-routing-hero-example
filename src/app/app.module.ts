import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';

const appRoutes: Routes =[
  {path: 'crisis-center', component: CrisisListComponent},
  { path: 'heroes', component: HeroListComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes, 
      { enableTracing: true} // debugging purposes
    )

  ],
  declarations: [
    AppComponent,
    CrisisListComponent,
    HeroListComponent
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
