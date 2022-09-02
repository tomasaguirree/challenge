import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Status } from 'src/app/interfaces/interfaces';
import { StatusService } from 'src/app/services/status.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-pop-status',
  templateUrl: './pop-status.component.html',
  styleUrls: ['./pop-status.component.scss'],
})
export class PopStatusComponent implements OnInit {
  public allStatus: Status[] = [];

  constructor(
    private popoverCtrl: PopoverController,
    private statusService: StatusService,
    private uiService: UiService
  ) { }

  ngOnInit() {
    this.getStatus();
  }

  getStatus() {
    this.statusService.getStatus().subscribe((res: any) => {
      this.allStatus = res.result;
    }, err => {
      this.uiService.presentToast(err.message);
    });
  }

  onClick(status: Status) {    
    this.popoverCtrl.dismiss(status);
  }
}
