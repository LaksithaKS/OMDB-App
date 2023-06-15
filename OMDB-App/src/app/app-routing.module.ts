import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OmdbSearchComponent } from './components/omdb-search/omdb-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: OmdbSearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
