import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Article } from '../../models/article.model';
import { ArticleService } from '../../services/article';

@Component({
  selector: 'app-accueil',
  imports: [CommonModule, RouterLink],
  templateUrl: './accueil.html',
  styleUrl: './accueil.css'
})
export class Accueil {
  articles: Article[];

  constructor(private articleService: ArticleService) {
    this.articles = this.articleService.getArticles();
  }

  classeCategorie(categorie: string): string {
    const map: Record<string, string> = {
      'Web': 'web',
      'IA': 'ai',
      'Cybersécurité': 'security',
      'Mobile': 'mobile'
    };
    return map[categorie] || 'web';
  }
}
