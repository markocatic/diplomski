import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromComponents from './components';
import * as fromPipes from './pipes';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

const modules: any[] = [CommonModule, MaterialModule, FlexLayoutModule, RouterModule];

@NgModule({
  declarations: [...fromComponents.components, ...fromPipes.pipes],
  imports: [...modules],
  exports: [...modules, ...fromComponents.components, ...fromPipes.pipes]
})
export class SharedModule {}
