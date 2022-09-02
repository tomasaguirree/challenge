import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PopStatusComponent } from './pop-status/pop-status.component';
import { ModalTaskComponent } from './modal-task/modal-task.component';

@NgModule({
  declarations: [
    PopStatusComponent,
    ModalTaskComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    PopStatusComponent,
    ModalTaskComponent,
    FormsModule
  ]
})
export class ComponentsModule { }
