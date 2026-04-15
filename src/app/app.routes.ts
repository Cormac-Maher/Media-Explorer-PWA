import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then( m => m.HomePage)
  },
  {
    path: 'movies',
    loadComponent: () => import('./movies/movies.page').then( m => m.MoviesPage)
  },
  {
    path: 'video-games',
    loadComponent: () => import('./video-games/video-games.page').then( m => m.VideoGamesPage)
  },
  {
    path: 'albums',
    loadComponent: () => import('./albums/albums.page').then( m => m.AlbumsPage)
  },
  {
    path: 'movie-detail/:id',
    loadComponent: () => import('./movie-detail/movie-detail.page').then( m => m.MovieDetailPage)
  },
  {
    path: 'album-detail/:id',
    loadComponent: () => import('./album-detail/album-detail.page').then( m => m.AlbumDetailPage)
  },
  {
    path: 'video-game-detail/:id',
    loadComponent: () => import('./video-game-detail/video-game-detail.page').then( m => m.VideoGameDetailPage)
  },
];
