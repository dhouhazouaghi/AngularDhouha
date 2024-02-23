import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { FormApartmentComponent } from './form-apartment/form-apartment.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailApartmentComponent } from './detail-apartment/detail-apartment.component';

const routes: Routes = [
  {path:'',redirectTo:'residences',pathMatch:'full'},
  {path:'residences',component:ResidencesComponent},
  {path:'apartments/:idR', component:ApartmentsComponent},
  { path: 'apartments/:id', component:ApartmentsComponent },
  { path: 'home', component: ResidencesComponent },
  { path: 'addResidence', component: FormResidenceComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'addApartment', component: FormApartmentComponent },
  {path:'404', component: NotFoundComponent},
  {path:'**', redirectTo:'/404'},
  { path: 'apartment/:id', component: DetailApartmentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
