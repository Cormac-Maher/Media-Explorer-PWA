import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoGamesPage } from './video-games.page';

describe('VideoGamesPage', () => {
  let component: VideoGamesPage;
  let fixture: ComponentFixture<VideoGamesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoGamesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
