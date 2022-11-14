import lume from "lume/mod.ts";
import windi_css from "lume/plugins/windi_css.ts";
import jsx from "lume/plugins/jsx.ts";
import prism from "lume/plugins/prism.ts";
import relations from "lume/plugins/relations.ts";
import date from "lume/plugins/date.ts";
import pagefind from "lume/plugins/pagefind.ts";
import slugifyUrls from "lume/plugins/slugify_urls.ts";
import metas from "lume/plugins/metas.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import attributes from "lume/plugins/attributes.ts";
import base_path from "lume/plugins/base_path.ts";
import esbuild from "lume/plugins/esbuild.ts";
import imagick from "lume/plugins/imagick.ts";
import inline from "lume/plugins/inline.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import liquid from "lume/plugins/liquid.ts";
import minify_html from "lume/plugins/minify_html.ts";
import modify_urls from "lume/plugins/modify_urls.ts";
import relative_urls from "lume/plugins/relative_urls.ts";
import resolve_urls from "lume/plugins/resolve_urls.ts";
import svgo from "lume/plugins/svgo.ts";
import terser from "lume/plugins/terser.ts";
import code_highlight from "lume/plugins/code_highlight.ts";

// import netlify_cms from "lume/plugins/netlify_cms.ts";

const site = lume(
  {
    location: new URL("https://officialrajdeepsingh.github.io/minimalist-blog-github-page/"),
    server: {
      page404: "/404/",
    },
  }
);

site.use(
  relations({
    foreignKeys: {
      article: "article_id",
      author: "author_id"
    }
  }));
site.use(attributes());
site.use(base_path());
site.use(date());
site.use(esbuild());
site.use(imagick());
site.use(inline());
site.use(jsx());
site.use(jsx_preact());
site.use(liquid());
site.use(metas());
site.use(minify_html());
site.use(modify_urls());
site.use(relative_urls());
site.use(resolve_urls());
site.use(svgo());
site.use(terser());
site.use(windi_css());
site.use(pagefind());
site.use(jsx());
site.use(prism());
site.copy("images")
site.copy("favicon.ico");
site.use(windi_css());
site.use(minifyHTML());
site.use(date());
site.use(code_highlight());
site.ignore("readme.md") // ignore readme.md file
site.use(slugifyUrls({
  lowercase: true
}));
site.filter("category", (value) => value[0].toLowerCase().trim().split(" ").join("-"));
site.filter("numToArray", (value) => Array.from({length: value}, (_, i) =>  i=== 0 ? '/' : i + 1));
site.use(metas({
  defaultPageData: {
    title: "title",
    description: "description"
  },
}));
site.preprocess([".md"], (page) => {
  
  let tags = page.data.tags;
  let category = page.data.category;

  // Normalize tags
  tags = tags?.map((tag) => tag.toLowerCase().trim());
  category = category?.map((item) => item.toLowerCase().trim());

  // Save the normalized tags 
  page.data.tags = tags;
  page.data.category = category;

});


export default site;