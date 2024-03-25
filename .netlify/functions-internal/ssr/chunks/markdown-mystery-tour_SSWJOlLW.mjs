import { d as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_JzZ2sNEm.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"netcord\">Netcord</h2>\n<blockquote>\n<p>On vous aide à créer un lien unique avec votre communauté.</p>\n</blockquote>\n<p>Nous sommes votre agence Discord, vous accompagnant tout au long du processus communautaire pour faire de votre aventure une réussite. De la création du serveur à sa gestion, l’équipe Netcord s’occupe de tout.\nNotre objectif est de soutenir les communautés les plus extraordinaires. Mais nous souhaitons avant tout être le meilleur partenaire de votre projet.</p>\n<h3 id=\"mon-role-chez-netcord\">Mon role chez Netcord</h3>\n<p>Je suis Community Manager. chez Netcord, je gère l’animation, la rédaction d’annonces, le relationnel, la gestion d’équipe et la création des lignes éditoriales des différents Discords. J’ai contribué à atteindre des milliers d’utilisateurs sur les serveurs que je supervise, en optimisant le taux de rétention, la satisfaction et l’engagement des membres.</p>\n<h4 id=\"skills\">Skills</h4>\n<ul>\n<li>Rédaction</li>\n<li>Création d’engagement</li>\n<li>Animation</li>\n<li>Relationel</li>\n</ul>";

				const frontmatter = {"title":"Netcord","publishDate":"2020-03-02T00:00:00.000Z","img":"/assets/stock-1.jpg","img_alt":"Iridescent ripples of a bright blue and pink liquid","description":"Chez Netcord, notre mission est de créer un lien unique avec votre communauté grâce à Discord.\n","tags":["Marketing","Animation","Rédation"]};
				const file = "C:/Users/pocho/porfolio/src/content/work/markdown-mystery-tour.md";
				const url = undefined;
				function rawContent() {
					return "\n## Netcord\n\n> On vous aide à créer un lien unique avec votre communauté.\n\nNous sommes votre agence Discord, vous accompagnant tout au long du processus communautaire pour faire de votre aventure une réussite. De la création du serveur à sa gestion, l'équipe Netcord s'occupe de tout. \nNotre objectif est de soutenir les communautés les plus extraordinaires. Mais nous souhaitons avant tout être le meilleur partenaire de votre projet.\n\n### Mon role chez Netcord\n\nJe suis Community Manager. chez Netcord, je gère l'animation, la rédaction d'annonces, le relationnel, la gestion d'équipe et la création des lignes éditoriales des différents Discords. J'ai contribué à atteindre des milliers d'utilisateurs sur les serveurs que je supervise, en optimisant le taux de rétention, la satisfaction et l'engagement des membres.\n\n\n#### Skills\n\n- Rédaction\n- Création d'engagement\n- Animation \n- Relationel \n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"netcord","text":"Netcord"},{"depth":3,"slug":"mon-role-chez-netcord","text":"Mon role chez Netcord"},{"depth":4,"slug":"skills","text":"Skills"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
