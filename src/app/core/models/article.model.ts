export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string; // format ISO ex. '2026-03-12'
  imageUrl: string;
  readTimeMinutes: number;
}
