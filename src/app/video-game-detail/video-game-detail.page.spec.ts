import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoGameDetailPage } from './video-game-detail.page';

describe('VideoGameDetailPage', () => {
  let component: VideoGameDetailPage;
  let fixture: ComponentFixture<VideoGameDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoGameDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
