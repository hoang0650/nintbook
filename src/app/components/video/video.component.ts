import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
interface Subtitle {
  startTime: number;
  endTime: number;
  text: string;
  translation: string;
}

@Component({
  selector: 'app-video',
  standalone: false,
  
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent implements OnInit {
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  videoSrc = 'path/to/your/german-video.mp4';
  subtitles: Subtitle[] = [
    { startTime: 0, endTime: 3, text: 'Guten Tag!', translation: 'Good day!' },
    { startTime: 3, endTime: 7, text: 'Wie geht es Ihnen?', translation: 'How are you?' },
    { startTime: 7, endTime: 12, text: 'Ich hoffe, Sie haben einen schönen Tag.', translation: 'I hope you have a nice day.' },
    // Add more subtitles here
  ];

  currentSubtitle: string = '';
  isPlaying: boolean = false;
  currentTime: number = 0;
  duration: number = 0;
  volume: number = 1;
  playbackRate: number = 1;
  showTranslation: boolean = false;
  zoomLevel: number = 1;

  ngOnInit() {
    // Initialize component
  }

  togglePlay() {
    if (this.videoPlayer.nativeElement.paused) {
      this.videoPlayer.nativeElement.play();
      this.isPlaying = true;
    } else {
      this.videoPlayer.nativeElement.pause();
      this.isPlaying = false;
    }
  }

  onTimeUpdate() {
    this.currentTime = this.videoPlayer.nativeElement.currentTime;
    this.updateSubtitle();
  }

  updateSubtitle() {
    const currentSubtitle = this.subtitles.find(
      sub => this.currentTime >= sub.startTime && this.currentTime < sub.endTime
    );
    this.currentSubtitle = currentSubtitle ? currentSubtitle.text : '';
  }

  onLoadedMetadata() {
    this.duration = this.videoPlayer.nativeElement.duration;
  }

  seek(event: Event) {
    const target = event.target as HTMLInputElement;
    const seekTime = Number(target.value) * this.duration / 100;
    this.videoPlayer.nativeElement.currentTime = seekTime;
  }

  setVolume(event: Event) {
    const target = event.target as HTMLInputElement;
    this.volume = Number(target.value);
    this.videoPlayer.nativeElement.volume = this.volume;
  }

  setPlaybackRate(rate: string) {
    this.playbackRate = Number(rate);
    this.videoPlayer.nativeElement.playbackRate = this.playbackRate;
  }

  toggleTranslation() {
    this.showTranslation = !this.showTranslation;
  }

  zoomIn() {
    this.zoomLevel = Math.min(this.zoomLevel + 0.1, 2);
    this.applyZoom();
  }

  zoomOut() {
    this.zoomLevel = Math.max(this.zoomLevel - 0.1, 0.5);
    this.applyZoom();
  }

  applyZoom() {
    if (this.videoPlayer) {
      this.videoPlayer.nativeElement.style.transform = `scale(${this.zoomLevel})`;
    }
  }

  nextPage() {
    // Implement next page logic here
    console.log('Next page');
  }

  previousPage() {
    // Implement previous page logic here
    console.log('Previous page');
  }

  handleTouchStart(event: TouchEvent) {
    // Prevent default touch behavior
    event.preventDefault();
    // Toggle translation
    this.toggleTranslation();
  }
}
