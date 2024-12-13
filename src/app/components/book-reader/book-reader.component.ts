import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-book-reader',
  standalone: false,
  
  templateUrl: './book-reader.component.html',
  styleUrl: './book-reader.component.css'
})
export class BookReaderComponent {
  currentPage: number = 1;
  totalPages: number = 5;
  zoomLevel: number = 100;
  bookmarkedPages: Set<number> = new Set();
  inWatchlist: boolean = false;
  content: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`;

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch(event.key) {
      case 'ArrowLeft':
        this.previousPage();
        break;
      case 'ArrowRight':
        this.nextPage();
        break;
      case '+':
        this.zoomIn();
        break;
      case '-':
        this.zoomOut();
        break;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  zoomIn() {
    this.zoomLevel = Math.min(this.zoomLevel + 10, 200);
  }

  zoomOut() {
    this.zoomLevel = Math.max(this.zoomLevel - 10, 50);
  }

  toggleBookmark() {
    if (this.bookmarkedPages.has(this.currentPage)) {
      this.bookmarkedPages.delete(this.currentPage);
    } else {
      this.bookmarkedPages.add(this.currentPage);
    }
  }

  isCurrentPageBookmarked(): boolean {
    return this.bookmarkedPages.has(this.currentPage);
  }

  downloadDocument() {
    console.log('Downloading document...');
    alert('Document download started!');
  }

  toggleWatchlist() {
    this.inWatchlist = !this.inWatchlist;
    if (this.inWatchlist) {
      console.log('Added to watchlist');
      alert('Added to watchlist!');
    } else {
      console.log('Removed from watchlist');
      alert('Removed from watchlist!');
    }
  }
}
