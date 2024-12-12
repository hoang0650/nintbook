import { Component , OnInit, ViewChild, ElementRef } from '@angular/core';
interface TranscriptSegment {
  start: number;
  end: number;
  text: string;
}
@Component({
  selector: 'app-book-listen',
  standalone: false,
  
  templateUrl: './book-listen.component.html',
  styleUrl: './book-listen.component.css'
})
export class BookListenComponent implements OnInit {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  audioSrc = 'path/to/your/german-audio.mp3';
  transcript: TranscriptSegment[] = [
    { start: 0, end: 3, text: 'Guten Tag!' },
    { start: 3, end: 7, text: 'Wie geht es Ihnen?' },
    { start: 7, end: 12, text: 'Ich hoffe, Sie haben einen schönen Tag.' },
    // Add more segments as needed
  ];

  currentSegmentIndex = -1;

  ngOnInit() {
    // Initialize component
  }

  onTimeUpdate() {
    const currentTime = this.audioPlayer.nativeElement.currentTime;
    const newIndex = this.transcript.findIndex(
      segment => currentTime >= segment.start && currentTime < segment.end
    );

    if (newIndex !== this.currentSegmentIndex) {
      this.currentSegmentIndex = newIndex;
    }
  }

  isHighlighted(index: number): boolean {
    return index === this.currentSegmentIndex;
  }

  seekToSegment(index: number) {
    this.audioPlayer.nativeElement.currentTime = this.transcript[index].start;
    this.audioPlayer.nativeElement.play();
  }
}
