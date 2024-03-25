import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_JzZ2sNEm.mjs';
import 'kleur/colors';
import 'clsx';
import { b as $$Hero, a as $$BaseLayout } from './404_JZupg87Y.mjs';
import { $ as $$ContactCTA } from './__p-4iWaBj.mjs';
/* empty css                          */

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About | Gabrielle P.", "description": "", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="stack gap-20" data-astro-cid-kh7btl4r> <main class="wrapper about" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Hero", $$Hero, { "title": "A propos", "tagline": "Merci de votre interet pour mon portfolio ! Apprenez-en plus sur moi ci dessous", "data-astro-cid-kh7btl4r": true }, { "default": ($$result3) => renderTemplate` <img width="1553" height="873" src="/assets/at-work.jpg" alt="Jeanine White at work with a colleague" data-astro-cid-kh7btl4r> ` })} <section data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Présentation</h2> <div class="content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
Passionnée par les nouvelles technologies, la cybersécurité, et le monde du gaming, je suis une étudiante déterminée à contribuer au domaine de la sécurité informatique tout en partageant ma passion à travers mes streams. Mon parcours académique en cybersécurité, ma créativité en design, et mon savoir-faire en marketing sur Internet font de moi une professionnelle polyvalente.
</p> </div> </section> <section data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Education</h2> <div class="content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>⭐️ Clonlara, Ann Arbor, high school diploma en computer science (2021-2024)
</p>⭐️ Cisco Networking Academy graduate, Junior Cybersecurity Analyst (2023)
<p data-astro-cid-kh7btl4r> ⭐️ CS50 harvard Introduction to computer science (2023-2024)
</p></div> </section> <section data-astro-cid-kh7btl4r> <h2 class="section-title" data-astro-cid-kh7btl4r>Skills</h2> <div class="content" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>• Marketing en ligne
</p><p data-astro-cid-kh7btl4r>• Gestion de projet
</p><p data-astro-cid-kh7btl4r>• Gestion d'équipe
</p><p data-astro-cid-kh7btl4r>• Montage vidéo
</p><p data-astro-cid-kh7btl4r>• Design d'interface
</p>   </div> </section> </main> ${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "data-astro-cid-kh7btl4r": true })} </div> ` })} `;
}, "C:/Users/pocho/porfolio/src/pages/about.astro", void 0);

const $$file = "C:/Users/pocho/porfolio/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
