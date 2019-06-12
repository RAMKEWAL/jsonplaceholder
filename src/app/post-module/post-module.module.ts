import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostModuleRoutingModule } from './post-module-routing.module';
import { AddEditComponent } from './pages/add-edit/add-edit.component';
import { ListingComponent } from './pages/listing/listing.component';
import { SharedModule } from '../shared/shared.module';
import { MatInputModule, MatSnackBarModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule, MatCheckboxModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PostModuleRoutingModule,
    SharedModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  declarations: [AddEditComponent, ListingComponent]
})
export class PostModuleModule { }
