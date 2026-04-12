import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MoviesPage{

  movies:any[]=[];
  constructor(private service:MovieService) {}

  ionViewWillEnter(){
    this.service.GetMovieData().subscribe(         // subscribes to event to get movie info
      (data)=>{
        this.movies = data.Search;                 
        console.log(this.movies);                  
      }
    );

}
