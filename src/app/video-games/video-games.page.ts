import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle} from '@ionic/angular/standalone';
import { VideoGameService } from '../videoGameServices/video-game';

@Component({
  selector: 'app-video-games',
  templateUrl: './video-games.page.html',
  styleUrls: ['./video-games.page.scss'],
  standalone: true,
  imports: [ IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, CommonModule, FormsModule]
})
export class VideoGamesPage {
  query = '';
  videoGames: any[] = [];

  constructor(private videoGameService: VideoGameService) {}

  ionViewWillEnter() {
    this.videoGameService.GetVideoGameData('mario').subscribe((data) => {
      this.videoGames = data.results || [];
    });
  }

  search(event?: any) {
    const value = event?.detail?.value ?? this.query;
    if (!value.trim()) return;
    this.videoGameService.GetVideoGameData(value).subscribe((data) => {
      this.videoGames = data.results || [];
    });
  }
}