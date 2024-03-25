import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_JzZ2sNEm.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getCollection, $ as $$ContactCTA } from './__p-4iWaBj.mjs';
import { b as $$Hero, a as $$BaseLayout } from './404_JZupg87Y.mjs';
import { $ as $$Grid, a as $$PortfolioPreview } from './index_t4G1OmIv.mjs';

const $$Astro = createAstro();
const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Work;
  const projects = (await getCollection("work")).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Portfolio | Gabrielle P. ", "description": "Etudiante de 17 ans, designer, cr\xE9atrice de contenu et Cyberanalyst Junior" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20"> <main class="wrapper stack gap-8"> ${renderComponent($$result2, "Hero", $$Hero, { "title": "Mes Travaux", "tagline": "Voici mes projets les plus r\xE9cents (et les meilleurs):", "align": "start" })} ${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset" }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li> ${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project })} </li>`)}` })} </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, {})} </div> ` })}`;
}, "C:/Users/pocho/porfolio/src/pages/work.astro", void 0);

const $$file = "C:/Users/pocho/porfolio/src/pages/work.astro";
const $$url = "/work";

export { $$Work as default, $$file as file, $$url as url };
