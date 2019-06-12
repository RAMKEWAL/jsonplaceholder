import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditComponent } from './pages/add-edit/add-edit.component';
import { ListingComponent } from './pages/listing/listing.component';

const routes: Routes = [
  { path: 'listing', component: ListingComponent },
  { path: 'add-edit', component: AddEditComponent },
  { path: '', redirectTo: '/listing', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostModuleRoutingModule { }
