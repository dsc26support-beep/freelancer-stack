import { defineConfig } from 'astro/config';
import rehypeAffiliate from './src/plugins/rehype-affiliate.mjs';

// Update `site` again if you add a custom domain.
export default defineConfig({
  site: 'https://freelance-stack.netlify.app',
  markdown: {
    rehypePlugins: [rehypeAffiliate],
  },
});
