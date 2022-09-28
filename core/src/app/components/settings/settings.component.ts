import {AlertController, ModalController} from '@ionic/angular';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {AuthService} from 'src/app/services/auth.service';
import {BehaviorSubject} from 'rxjs';
import {ConfigService} from 'src/app/services/config.service';
import {CreditsPage} from 'src/app/pages/credits/credits.page';
import {DisclaimerPage} from 'src/app/pages/disclaimer/disclaimer.page';
import {LanguagesService} from 'src/app/services/languages.service';
import {ProjectPage} from 'src/app/pages/project/project.page';
import {Router} from '@angular/router';

@Component({
  selector: 'webmapp-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  isLoggedIn: boolean;
  langForm: FormGroup;
  langs$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(['it']);
  public version = '0.0.0';

  constructor(
    private _alertController: AlertController,
    private _authService: AuthService,
    private _modalController: ModalController,
    private _configService: ConfigService,
    private _langSvc: LanguagesService,
    private _fb: FormBuilder,
    private _router: Router,
  ) {}

  dismiss(): void {
    this._modalController.dismiss('webmapp-login-modal');
  }

  logout(): void {
    this._alertController
      .create({
        mode: 'ios',
        header: this._langSvc.translate('generic.warning'),
        message: this._langSvc.translate('modals.settings.alert.logout'),
        buttons: [
          {
            text: this._langSvc.translate('generic.cancel'),
          },
          {
            text: this._langSvc.translate('generic.confirm'),
            handler: () => {
              this._authService.logout();
              this.dismiss();
            },
          },
        ],
      })
      .then(
        alert => {
          alert.present();
        },
        alertError => {
          console.warn(alertError);
        },
      );
  }
  async openCmp(nameCmp: string) {
    const cmp =
      nameCmp === 'project' ? ProjectPage : nameCmp === 'disclaimer' ? DisclaimerPage : CreditsPage;
    const pmodal = await this._modalController.create({
      component: cmp,
      swipeToClose: true,
      mode: 'ios',
    });
    pmodal.present();
  }

  ngOnInit() {
    this.version = this._configService.version;
    this.isLoggedIn = this._authService.isLoggedIn;
    this._initLang();
  }

  private _initLang(): void {
    this.langs$.next(this._langSvc.langs());
    this.langForm = this._fb.group({
      lang: [this._langSvc.currentLang],
    });
    this.langForm.valueChanges.subscribe(lang => this._langSvc.changeLang(lang.lang));
  }
}
