import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'webmapp-modal-save',
  templateUrl: './modal-save.component.html',
  styleUrls: ['./modal-save.component.scss'],
})
export class ModalSaveComponent implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() { }

  close() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
