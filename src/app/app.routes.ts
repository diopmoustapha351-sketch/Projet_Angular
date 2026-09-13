import { Routes } from '@angular/router';
import { Accueil } from './pages/accueil/accueil';
import { DetailArticle } from './pages/detail-article/detail-article';
import { APropos } from './pages/a-propos/a-propos';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Accueil },
  { path: 'articles/:id', component: DetailArticle },
  { path: 'a-propos', component: APropos },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];