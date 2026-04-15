import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { MovieService } from '../movieServices/movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader,
            IonCardTitle, IonCardSubtitle, IonCardContent, IonBackButton, 
            IonButtons, CommonModule]
})
export class MovieDetailPage {
  movie: any;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ionViewWillEnter() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.movieService.GetMovieDetails(id).subscribe(data => {
      this.movie = data;
    });
  }
}
