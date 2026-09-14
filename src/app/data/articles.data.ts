import { Article } from '../models/article.model';

export const ARTICLES: Article[] = [
  {
    id: 1,
    titre: 'Pourquoi on a choisi Angular pour ce projet',
    auteur: 'Mous Tapha',
    date: '2026-09-01',
    categorie: 'Web',
    extrait: 'Angular n\'était pas notre premier choix spontané, mais c\'est le framework qu\'on a étudié en cours de Technologie Web.',
    contenu: 'Il existe plusieurs frameworks front-end populaires comme React ou Vue, mais pour ce projet on a utilisé Angular parce que c\'est celui vu en cours et imposé par le sujet. Ça nous a permis de mettre en pratique directement les notions apprises : composants, services, routage.',
    image: 'https://picsum.photos/seed/codenova1/800/500'
  },
  {
    id: 2,
    titre: 'Comprendre le Data Binding dans Angular',
    auteur: 'Aïssatou T.',
    date: '2026-09-05',
    categorie: 'Web',
    extrait: 'Le data binding, c\'est ce qui relie automatiquement les données de notre code à ce qui s\'affiche sur la page.',
    contenu: 'Dans Angular, le data binding permet de relier automatiquement les données et l\'affichage. Par exemple, quand une variable change dans le composant, l\'affichage se met à jour tout seul, sans qu\'on ait besoin de le faire manuellement. On utilise ça notamment dans notre formulaire de contact avec le binding bidirectionnel.',
    image: 'https://picsum.photos/seed/codenova2/800/500'
  },
  {
    id: 3,
    titre: 'L\'IA au quotidien pour un étudiant en dev',
    auteur: 'Mous Tapha',
    date: '2026-09-08',
    categorie: 'IA',
    extrait: 'On a déjà utilisé une IA comme Claude pour nous aider à comprendre du code, et ça change vraiment la façon d\'apprendre.',
    contenu: 'Les IA génératives comme Claude ou ChatGPT sont de plus en plus utilisées par les étudiants en développement. On les utilise notamment pour nous aider à comprendre du code qu\'on ne maîtrise pas encore, ou pour déboguer une erreur. Ça ne remplace pas l\'apprentissage, mais ça aide à avancer plus vite quand on est bloqué.',
    image: 'https://picsum.photos/seed/codenova3/800/500'
  },
  {
    id: 4,
    titre: '5 réflexes essentiels pour sécuriser une application web',
    auteur: 'Aïssatou T.',
    date: '2026-09-10',
    categorie: 'Cybersécurité',
    extrait: 'Une règle de base en sécurité web : ne jamais stocker un mot de passe en clair dans une base de données.',
    contenu: 'Parmi les bonnes pratiques essentielles en sécurité web, il y a le fait de ne jamais stocker un mot de passe en clair. Il faut toujours le hasher avant de l\'enregistrer. D\'autres réflexes importants : valider les entrées utilisateur, utiliser HTTPS, et garder ses dépendances à jour pour éviter les failles connues.',
    image: 'https://picsum.photos/seed/codenova4/800/500'
  },
  {
    id: 5,
    titre: 'Le développement mobile hybride, c\'est quoi ?',
    auteur: 'Mous Tapha',
    date: '2026-09-12',
    categorie: 'Mobile',
    extrait: 'On n\'avait jamais entendu parler du développement hybride avant de se pencher sur le sujet pour cet article.',
    contenu: 'Le développement mobile hybride permet d\'écrire un seul code qui fonctionne à la fois sur Android et sur iOS, avec des outils comme Flutter ou React Native. C\'est un concept qu\'on découvre en écrivant cet article, mais qui semble très utile pour les petites équipes qui n\'ont pas le temps de développer deux applications natives séparées.',
    image: 'https://picsum.photos/seed/codenova5/800/500'
  },
  {
    id: 6,
    titre: 'Notre expérience : construire ce site avec Angular',
    auteur: 'Aïssatou T.',
    date: '2026-09-13',
    categorie: 'Web',
    extrait: 'Le plus dur pour nous jusqu\'ici, ça a été de comprendre comment gérer Git et Angular ensemble.',
    contenu: 'Sur ce projet, la partie technique Angular en elle-même n\'était pas la plus difficile. Ce qui nous a le plus posé problème, c\'est de comprendre comment gérer Git (les commits, le push, la fusion) en parallèle d\'un projet Angular fonctionnel. Une fois qu\'on a compris le fonctionnement de base, tout est devenu plus fluide.',
    image: 'https://picsum.photos/seed/codenova6/800/500'
  }
];