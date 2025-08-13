import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "../app/pages/home/home.component";
import { ExploreComponent } from "../app/pages/explore/explore.component";
import { LibraryComponent } from "../app/pages/library/library.component";
import { ReaderComponent } from "../app/pages/reader/reader.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'reader/:id', component: ReaderComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
