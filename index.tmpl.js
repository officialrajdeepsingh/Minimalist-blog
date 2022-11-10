export const layout = "layouts/base.njk";
export const title = "Minimalist blog"
export const description = "Minimalist blog theme is liteweight and work with lume."

export default function* ({ search, paginate }) {

  const posts = search.pages("type=article", "date=desc");

  const options = {
    // The page 1 is the homepage, set "/" as url
    url: (n) => n === 1 ? "/" : `/page/${n}/`,
    size: 7,
  };

  // Yield the pages, but the index needs a different layout
  for (const page of paginate(posts, options)) {

    if (page.pagination.page === 1) {
      page.menu = {visible: true, order: 1, title:"Home" }
      page.title = "Home page"
      page.layout = "layouts/home.njk";
    } else {
      page.title = "Pagination page"
      page.layout = "layouts/home.njk";
    }
    yield page;
  }

}