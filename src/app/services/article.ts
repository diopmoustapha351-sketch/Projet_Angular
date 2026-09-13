import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';
import { ARTICLES } from '../data/articles.data';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  getArticles(): Article[] {
    return ARTICLES;
  }

  getArticleById(id: number): Article | undefined {
    return ARTICLES.find(article => article.id === id);
  }
}