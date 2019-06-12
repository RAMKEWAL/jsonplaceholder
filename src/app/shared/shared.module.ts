import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatProgressSpinnerModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    LoaderComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    LoaderComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
