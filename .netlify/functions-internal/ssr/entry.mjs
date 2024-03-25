import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_LcAe-ksU.mjs';

const _page0  = () => import('./chunks/generic_pui1y2VC.mjs');
const _page1  = () => import('./chunks/_.._iIuVo2mc.mjs');
const _page2  = () => import('./chunks/index_nit-rP5Q.mjs');
const _page3  = () => import('./chunks/404_wxyOxUpg.mjs');
const _page4  = () => import('./chunks/about_aWl2sKvt.mjs');
const _page5  = () => import('./chunks/work_h-TXkS5y.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/work/[...slug].astro", _page1],["src/pages/index.astro", _page2],["src/pages/404.astro", _page3],["src/pages/about.astro", _page4],["src/pages/work.astro", _page5]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {"middlewareSecret":"49546777-4f15-434d-97ad-52030a0f81cf"};

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
