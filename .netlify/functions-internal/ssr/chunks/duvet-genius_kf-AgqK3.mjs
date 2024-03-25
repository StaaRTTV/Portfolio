import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_JzZ2sNEm.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"staarcord\">StaaRCord</h2>\n<p>En tant que plateforme centralisée pour les fans et les adeptes du jeu vidéo, notre serveur offre bien plus qu’une simple expérience de streaming. C’est un lieu de rencontre virtuel où la convivialité et l’enthousiasme se mêlent pour créer une atmosphère unique.</p>\n<h4 id=\"-communauté-unie-de-1100-membres\">🌐 Communauté Unie de 1100 Membres :</h4>\n<p>Plongez au cœur d’une communauté florissante, composée de plus de 1000 membres partageant la même passion pour les jeux vidéo. Que vous soyez un joueur occasionnel ou un compétiteur acharné, notre serveur offre un espace inclusif où chaque voix compte.</p>\n<h4 id=\"-pôle-animation-actif\">🎉 Pôle Animation Actif :</h4>\n<p>Notre serveur se distingue par son pôle animation vibrant. Avec des événements réguliers, des tournois passionnants et une variété d’activités interactives, notre équipe d’animateurs dévoués crée une expérience immersive pour les membres. Cette approche active stimule l’engagement et renforce les liens au sein de la communauté.</p>\n<h4 id=\"-atmosphère-accueillante\">🤝 Atmosphère Accueillante :</h4>\n<p>L’essence même de notre serveur réside dans une atmosphère chaleureuse et accueillante. Nous croyons en la diversité, le respect mutuel et la bienveillance. Chacun est encouragé à participer, à partager ses expériences et à créer des souvenirs inoubliables dans un cadre où l’inclusivité est au premier plan.</p>";

				const frontmatter = {"title":"StaaRCord","publishDate":"2020-03-04T00:00:00.000Z","img":"/assets/stock-3.jpg","img_alt":"Pearls of silky soft white cotton, bubble up under vibrant lighting","description":"Ma première experience professionnelle dans le monde de l'influence.\n","tags":["Design","Gestion d'équipe","Communication"]};
				const file = "C:/Users/pocho/porfolio/src/content/work/nested/duvet-genius.md";
				const url = undefined;
				function rawContent() {
					return "## StaaRCord\n\n En tant que plateforme centralisée pour les fans et les adeptes du jeu vidéo, notre serveur offre bien plus qu'une simple expérience de streaming. C'est un lieu de rencontre virtuel où la convivialité et l'enthousiasme se mêlent pour créer une atmosphère unique.\n\n#### 🌐 Communauté Unie de 1100 Membres :\nPlongez au cœur d'une communauté florissante, composée de plus de 1000 membres partageant la même passion pour les jeux vidéo. Que vous soyez un joueur occasionnel ou un compétiteur acharné, notre serveur offre un espace inclusif où chaque voix compte.\n\n#### 🎉 Pôle Animation Actif :\nNotre serveur se distingue par son pôle animation vibrant. Avec des événements réguliers, des tournois passionnants et une variété d'activités interactives, notre équipe d'animateurs dévoués crée une expérience immersive pour les membres. Cette approche active stimule l'engagement et renforce les liens au sein de la communauté.\n\n#### 🤝 Atmosphère Accueillante :\nL'essence même de notre serveur réside dans une atmosphère chaleureuse et accueillante. Nous croyons en la diversité, le respect mutuel et la bienveillance. Chacun est encouragé à participer, à partager ses expériences et à créer des souvenirs inoubliables dans un cadre où l'inclusivité est au premier plan.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"staarcord","text":"StaaRCord"},{"depth":4,"slug":"-communauté-unie-de-1100-membres","text":"🌐 Communauté Unie de 1100 Membres :"},{"depth":4,"slug":"-pôle-animation-actif","text":"🎉 Pôle Animation Actif :"},{"depth":4,"slug":"-atmosphère-accueillante","text":"🤝 Atmosphère Accueillante :"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
