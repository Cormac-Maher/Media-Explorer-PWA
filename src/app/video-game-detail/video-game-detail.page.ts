import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-video-game-detail',
  templateUrl: './video-game-detail.page.html',
  styleUrls: ['./video-game-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class VideoGameDetailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
