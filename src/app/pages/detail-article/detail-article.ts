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
}
