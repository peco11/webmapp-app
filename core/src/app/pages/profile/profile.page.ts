import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoginComponent } from 'src/app/components/shared/login/login.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'webmapp-page-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit, OnDestroy {
  public loggedOutSliderOptions: any;
  public isLoggedIn: boolean;
  public name: string;
  public email: string;
  public avatarUrl: string;

  private _destroyer: Subject<boolean> = new Subject<boolean>();

  constructor(
    private _authService: AuthService,
    private _modalController: ModalController
  ) {
    this.loggedOutSliderOptions = {
      initialSlide: 0,
      speed: 400,
      spaceBetween: 10,
      slidesOffsetAfter: 0,
      slidesOffsetBefore: 0,
      slidesPerView: 1,
    };
  }

  ngOnInit() {
    this._authService.onStateChange
      .pipe(takeUntil(this._destroyer))
      .subscribe((user: IUser) => {
        this.isLoggedIn = this._authService.isLoggedIn;
        this.name = this._authService.name;
        this.email = this._authService.email;
      });
  }

  login(): void {
    this._modalController
      .create({
        component: LoginComponent,
        swipeToClose: true,
        mode: 'ios',
        id: 'webmapp-login-modal',
      })
      .then((modal) => {
        modal.present();
      });
  }

  signup(): void {}

  ngOnDestroy(): void {
    this._destroyer.next(true);
  }
}
