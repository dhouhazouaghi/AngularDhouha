import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidencesComponent } from './residences/residences.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { RouterModule } from '@angular/router';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { FormApartmentComponent } from './form-apartment/form-apartment.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailApartmentComponent } from './detail-apartment/detail-apartment.component';
@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    ApartmentsComponent,
    FormResidenceComponent,
    FormApartmentComponent,
    NotFoundComponent,
    DetailApartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
