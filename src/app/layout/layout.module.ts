import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppMobileHeaderComponent } from './app-mobile-header/app-mobile-header.component';
import { AppTopPaneComponent } from './app-toppane/app-toppane.component';
import { AppLeftPaneComponent } from './app-leftpane/app-leftpane.component';
import { AppRightPaneComponent } from './app-rightpane/app-rightpane.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { SharedModule } from '../components/shared/shared.module';
import { AppMobileFooterComponent } from './app-mobile-footer/app-mobile-footer.component';

@NgModule({
    imports: [
      BrowserModule,
      NgbModule,
      FormsModule,
      ReactiveFormsModule,
      MatDatepickerModule,
      NgSelectModule,
      MatMomentDateModule,
      BrowserAnimationsModule,
      NgbDropdownModule,
      SharedModule,
      RouterModule
    ],
    declarations: [
      AppNavbarComponent,
      AppTopPaneComponent,
      AppMobileHeaderComponent,
      AppMobileFooterComponent,
      AppLeftPaneComponent,
      AppRightPaneComponent,
      AppFooterComponent
    ],
    exports: [
      AppNavbarComponent,
      AppTopPaneComponent,
      AppMobileHeaderComponent,
      AppMobileFooterComponent,
      AppLeftPaneComponent,
      AppRightPaneComponent,
      AppFooterComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  export class LayoutModule { }