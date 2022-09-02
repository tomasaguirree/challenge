import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, ModalController } from '@ionic/angular';
import { Task } from 'src/app/interfaces/interfaces';
import { TaskService } from 'src/app/services/task.service';
import { UiService } from 'src/app/services/ui.service';
import { ModalTaskComponent } from 'src/app/components/modal-task/modal-task.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  @ViewChild('list') list: IonList;
  public tasks: Task[] = [];
  public task: Task = {
    id: null,
    title: '',
    status_id: 1,
    status: {
      id: 1,
      name: 'Pendiente'
    }
  };

  constructor(
    private taskService: TaskService,
    private uiService: UiService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe((res: any) => {
      this.tasks = res.result;
    }, err => {
      this.uiService.presentToast(err.message);
    });
  }

  async openModalTask(task: Task, title: string, accion: string) {
    const modal = await this.modalCtrl.create({
      component: ModalTaskComponent,
      componentProps: {
        task,
        title,
        accion
      }
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();

    if (data) {
      this.task = {
        id: null,
        title: '',
        status_id: 1,
        status: {
          id: 1,
          name: 'Pendiente'
        }
      }

      this.getTasks();
    }
  }

  async deleteTask(task: Task) {
    var data = await this.uiService.alertDelete();

    if (!data) return this.list.closeSlidingItems();
    
    const res = await this.taskService.delete(task);

    if (!res) {
      this.uiService.presentToast('No se pudo eliminar la tarea');
      this.list.closeSlidingItems();
      return;
    }

    this.uiService.presentToast('Tarea eliminada correctamente');
    this.getTasks();
  }
}
