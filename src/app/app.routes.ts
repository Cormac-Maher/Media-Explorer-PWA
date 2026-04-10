import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
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
];
