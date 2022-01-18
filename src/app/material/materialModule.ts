import { NgModule } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

const materialImports = [
  DragDropModule,
  MatIconModule,
  MatCardModule
]


@NgModule({
  imports: [materialImports],
  exports:[materialImports]
})
export class MaterialModule { }
