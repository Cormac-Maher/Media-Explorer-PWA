import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle} from '@ionic/angular/standalone';
import { AlbumService } from '../albumServices/albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.page.html',
  styleUrls: ['./albums.page.scss'],
  standalone: true,
  imports: [ IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, CommonModule, FormsModule]
})
export class AlbumsPage {
  query = '';
  albums: any[] = [];

  constructor(private albumService: AlbumService) {}

  ionViewWillEnter() {
    this.albumService.GetAlbumData('beatles').subscribe((data) => {
      this.albums = data.results || [];
    });
  }

  search(event?: any) {
    const value = event?.detail?.value ?? this.query;
    if (!value.trim()) return;
    this.albumService.GetAlbumData(value).subscribe((data) => {
      this.albums = data.results || [];
    });
  }
}