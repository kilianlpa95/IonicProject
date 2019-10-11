import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MillUser } from '../millUser';

@Component({
  selector: 'app-mill-details',
  templateUrl: './mill-details.page.html',
  styleUrls: ['./mill-details.page.scss'],
})

export class MillDetailsPage implements OnInit {

  constructor(public api: ApiService,
    public alertController: AlertController,
    public route: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {

    this.getMillUser();

  }

  millUser: MillUser = { id: null, name: '', age: null};
  isLoadingResults = false;

  async getMillUser() {
    if (this.route.snapshot.paramMap.get('id') === 'null') {
      this.presentAlertConfirm('You are not choosing an item from the list');
    } else {
      this.isLoadingResults = true;
      await this.api.getMillUser(this.route.snapshot.paramMap.get('id'))
        .subscribe(res => {
          console.log(res);
          this.millUser = res;
          this.isLoadingResults = false;
        }, err => {
          console.log(err);
          this.isLoadingResults = false;
        });
    }
  }

  async presentAlertConfirm(msg: string) {
    const alert = await this.alertController.create({
      header: 'Warning!',
      message: msg,
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            this.router.navigate(['']);
          }
        }
      ]
    });
  
    await alert.present();
  }

  async deleteMillUser(id: any) {
    this.isLoadingResults = true;
    await this.api.deleteMillUser(id)
      .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate([ '/home' ]);
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }
  
  editMillUser(id: any) {
    this.router.navigate([ '/mill-modifier', id ]);
  }

}
