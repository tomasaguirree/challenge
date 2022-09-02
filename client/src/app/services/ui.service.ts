import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) { }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      position: 'bottom',
      duration: 1500,
    });

    toast.present();
  }

  async alertDelete() {
    var remove = false;

    const alert = await this.alertCtrl.create({
      cssClass: 'alertDelete',
      header: '¿Estás seguro?',
      message: 'El registro no podrá ser recuperado',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'danger',
          handler: () => {
            remove = false;
          }
        }, {
          text: 'eliminar',
          handler: () => {
            remove = true;
          }
        }
      ]
    });

    await alert.present();

    await alert.onWillDismiss();

    return remove;
  }
}
