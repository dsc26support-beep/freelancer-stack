// Rewrites links written as  aff:<key>  using src/data/affiliates.mjs.
// Works for markdown links [text](aff:key) and raw HTML <a href="aff:key">.
// Affiliate links get rel="sponsored"; plain vendor links do not.
// Unknown keys fail the build so a typo can't ship a broken link.
import { tools } from '../data/affiliates.mjs';

function resolve(key, where) {
  const tool = tools[key];
  if (!tool) {
    throw new Error(`Unknown affiliate key "aff:${key}" in ${where}. Add it to src/data/affiliates.mjs.`);
  }
  const isAffiliate = Boolean(tool.affiliate);
  return {
    href: isAffiliate ? tool.affiliate : tool.site,
    rel: isAffiliate ? 'sponsored nofollow noopener' : 'nofollow noopener',
  };
}

function escapeAttr(value) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function walk(node, fn) {
  fn(node);
  if (node.children) node.children.forEach((child) => walk(child, fn));
}

export default function rehypeAffiliate() {
  return (tree, file) => {
    const where = file?.path ?? 'a markdown file';
    walk(tree, (node) => {
      // Markdown links
      if (node.type === 'element' && node.tagName === 'a') {
        const href = node.properties?.href;
        if (typeof href !== 'string' || !href.startsWith('aff:')) return;
        const key = href.slice(4);
        const { href: url, rel } = resolve(key, where);
        node.properties.href = url;
        node.properties.rel = rel.split(' ');
        node.properties.target = '_blank';
        node.properties.dataTool = key;
        return;
      }
      // Raw HTML blocks inside markdown
      if (node.type === 'raw' && typeof node.value === 'string' && node.value.includes('aff:')) {
        node.value = node.value.replace(/href="aff:([a-z0-9-]+)"/g, (_, key) => {
          const { href: url, rel } = resolve(key, where);
          return `href="${escapeAttr(url)}" rel="${rel}" target="_blank" data-tool="${key}"`;
        });
      }
    });
  };
}
