import { NgModule } from '@angular/core';
import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { ObserversModule } from '@angular/cdk/observers';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule, MAT_DATE_LOCALE, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';

import * as _moment from 'moment';
import 'moment/locale/ko';

import { MatPaginatorIntlKo } from 'src/app/intl/MatPaginatorIntlKo';
import { PosDateAdaptor } from 'src/app/shared/adaptors/pos-date-adaptor';


const modules = [
  // CDK
  A11yModule,
  BidiModule,
  ObserversModule,
  OverlayModule,
  PlatformModule,
  PortalModule,
  ScrollingModule,
  CdkStepperModule,
  CdkTableModule,

  // Material
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatSliderModule,
  MatToolbarModule,
  MatTabsModule,
  MatDialogModule,
  MatRadioModule,
  MatDatepickerModule,
  MatAutocompleteModule,
  MatIconModule,
  MatChipsModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatTooltipModule,
  MatMomentDateModule,
  MatExpansionModule,
  MatListModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatRippleModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatBadgeModule,
  MatProgressBarModule,
  // date range modules
  SatDatepickerModule,
  SatNativeDateModule
];


export const POS_DATE_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@NgModule({
  imports: modules,
  exports: modules,
  providers: [
    PosDateAdaptor,
    { provide: DateAdapter, useClass: PosDateAdaptor, deps: [MAT_DATE_LOCALE] },

    { provide: MAT_DATE_FORMATS, useValue: POS_DATE_FORMATS },
    {
      provide: MatPaginatorIntl,
      useClass: MatPaginatorIntlKo
    }
  ],
})
export class PosMaterialModule {
}
