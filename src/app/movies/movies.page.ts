import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle,} from '@ionic/angular/standalone';
import { MovieService } from '../movieServices/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, CommonModule, FormsModule]
})


export class MoviesPage{
  
  query = '';
  movies:any[]=[];

  constructor(private movieService: MovieService) {}

    ionViewWillEnter() {
      this.movieService.GetMovieData('war').subscribe((data) => {
        this.movies = data.Search || [];
      });
    }

search(event?: any) {
  const value = event?.detail?.value ?? this.query;
  if (!value.trim()) return;
  this.movieService.GetMovieData(value).subscribe((data) => {
    this.movies = data.Search || [];
  });
    }

  }

