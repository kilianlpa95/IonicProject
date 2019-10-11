import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MillUser } from '../millUser';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{

  constructor(public api: ApiService,
    public loadingController: LoadingController,
    public router: Router,
    public route: ActivatedRoute) {}

    ngOnInit() {
      this.getMillUsers();
    }

    drop(event: CdkDragDrop<string[]>) {
      moveItemInArray(this.millUser, event.previousIndex, event.currentIndex);
    }

    millUser: MillUser[] = [];

    millDetail(){
      this.router.navigate(['/mill-register'])
    }

    async getMillUsers() {
      const loading = await this.loadingController.create({
        message: 'Loading...'
      });
      await loading.present();
      await this.api.getMillUsers()
        .subscribe(res => {
          this.millUser = res;
          console.log(this.millUser);
          loading.dismiss();
        }, err => {
          console.log(err);
          loading.dismiss();
        });
    }
}
