import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookReaderComponent } from './components/book-reader/book-reader.component';
import { BookListenComponent } from './components/book-listen/book-listen.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { VideoComponent } from './components/video/video.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: BookDetailComponent },
  { path: 'reader', component: BookReaderComponent },
  { path: 'audio', component: BookListenComponent },
  { path: 'video', component: VideoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
