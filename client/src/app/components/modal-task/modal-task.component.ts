import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController, PopoverController } from '@ionic/angular';
import { Task } from 'src/app/interfaces/interfaces';
import { TaskService } from 'src/app/services/task.service';
import { UiService } from 'src/app/services/ui.service';
import { PopStatusComponent } from '../pop-status/pop-status.component';

@Component({
  selector: 'app-modal-task',
  templateUrl: './modal-task.component.html',
  styleUrls: ['./modal-task.component.scss'],
})
export class ModalTaskComponent {
  @Input() task: Task;
  @Input() title: string;
  @Input() accion: string;

  public labelStatus: string;

  constructor(
    private modalCtrl: ModalController,
    private taskService: TaskService,
    private uiService: UiService,
    private popoverCtrl: PopoverController
  ) { }

  async sendForm(frmTask: NgForm) {
    if (frmTask.invalid) return;

    if (this.accion == 'create') var res = await this.taskService.create(this.task);

    if (this.accion == 'update') var res = await this.taskService.update(this.task);

    if (!res) return this.uiService.presentToast('No se pudo registrar la tarea');

    this.uiService.presentToast(`${this.accion == 'create' ? 'Tarea registrada correctamente' : 'Tarea actualizada correctamente'}`);
    this.back();
  }

  async statusSelected(event) {
    const popover = await this.popoverCtrl.create({
      component: PopStatusComponent,
      event,
      mode: 'ios',
      backdropDismiss: false
    });

    await popover.present();

    const { data } = await popover.onWillDismiss();

    this.task.status_id = data.id;
    this.task.status = data;
  }

  back() {
    this.modalCtrl.dismiss(this.task);
  }
}
