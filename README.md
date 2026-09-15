# CodeNova

Blog tech statique réalisé avec Angular dans le cadre du cours **Technologie Web 3**
(Licence 1 — Informatique). Le site présente des articles sur le développement web, l'IA,
la cybersécurité et le mobile. Toutes les données sont statiques (aucune base de données,
aucune API).

**Site déployé :** https://codenova-blog.web.app

## Binôme

| Nom | Rôle principal |
|---|---|
| Moustapha Diop | Navbar, footer, routage, service de données, structure initiale de la page d'accueil |
| Aïssatou Thiam | Page de détail d'article, page "À propos", page "Contact", images des articles, redesign visuel (accueil, détail, à propos) |

## Fonctionnalités

- **Page d'accueil (`/`)** — hero de présentation et liste des articles générée
  dynamiquement (`*ngFor`) à partir du service de données, avec badge de catégorie coloré.
- **Page de détail (`/articles/:id`)** — affiche un article à partir de son identifiant
  dans l'URL, récupéré via `ActivatedRoute`.
- **Page "À propos" (`/a-propos`)** — présentation du binôme et du projet.
- **Page "Contact" (`/contact`)** — formulaire avec binding bidirectionnel (`[(ngModel)]`)
  et validation (nom, email, message).
- **Navbar et footer communs**, réutilisés sur toutes les pages via le routeur Angular.

## Notions Angular mises en pratique

| Notion | Où la voir dans le code |
|---|---|
| Composants | `navbar`, `footer`, `accueil`, `detail-article`, `a-propos`, `contact` |
| Interpolation / property binding | `accueil.html`, `detail-article.html` |
| Directive structurelle `*ngFor` | `accueil.html` (liste des articles) |
| Binding bidirectionnel | `contact.html` avec `[(ngModel)]` |
| Services + injection de dépendances | `ArticleService` (`services/article.ts`, `providedIn: 'root'`) |
| Routage (routes, paramètres, routerLink) | `app.routes.ts`, `detail-article.ts` |

## Structure du projet