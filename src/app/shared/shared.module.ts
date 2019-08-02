import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as fromComponents from "./components";
import * as fromPipes from "./pipes";
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProductCardsComponent } from './components/product-cards/product-cards.component';

const modules: any[] = [
  CommonModule, 
  MaterialModule,
  FlexLayoutModule
];

@NgModule({
  declarations: [
    ...fromComponents.components, 
    ...fromPipes.pipes, 
  ],
  imports: [...modules],
  exports: [
    ...modules,
    ...fromComponents.components, 
    ...fromPipes.pipes
  ]
})
export class SharedModule {}
