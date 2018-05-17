import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
//import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { HomeComponent } from './home.component';
import { SearchComponent } from './search.component';
import { DetailsComponent } from './details.component';
import { FileDetailsComponent } from './filedetails.component';
import { OCDDetailsComponent } from './ocddetails.component';
import { EventLinksComponent } from './eventlinks.component';
import { MQDetailsComponent } from './mqdetails.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'mqdetails', component: MQDetailsComponent },
  { path: 'filedetails', component: FileDetailsComponent },
  { path: 'ocddetails', component: OCDDetailsComponent },
  { path: 'eventlinks', component: EventLinksComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, HttpModule,  
    RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  declarations: [AppComponent, HomeComponent, SearchComponent, DetailsComponent, FileDetailsComponent, OCDDetailsComponent, EventLinksComponent, MQDetailsComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})

export class AppModule { }
