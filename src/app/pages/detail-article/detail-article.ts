import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Article } from '../../models/article.model';
import { ArticleService } from '../../services/article';

@Component({
  imports: [RouterLink],
  selector: 'app-detail-article',
  styleUrl: './detail-article.css',
  templateUrl: './detail-article.html',
})
export class DetailArticle {
  article: Article | undefined;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.article = this.articleService.getArticleById(id);
  }

  get initiales(): string {
    if (!this.article) return '';
    return this.article.auteur
      .split(' ')
      .map(mot => mot.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }

  get tempsLecture(): number {
    if (!this.article) return 0;
    const nbMots = this.article.contenu.split(' ').length;
    return Math.max(1, Math.round(nbMots / 200));
  }
}
