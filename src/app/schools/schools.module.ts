import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SchoolsRoutingModule } from './schools-routing.module';
import { SchoolsComponent } from './schools.component';
import { StoreModule } from '@ngrx/store';
import { schoolReducer, schoolStateName } from './store/reducer/school.reducer';
import { SchoolEffects } from './store/effects/school.effect';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [SchoolsComponent],
  imports: [
    CommonModule,
    SchoolsRoutingModule,
    StoreModule.forFeature(schoolStateName, schoolReducer),
    EffectsModule.forFeature([SchoolEffects]),
  ]
})
export class SchoolsModule { }
