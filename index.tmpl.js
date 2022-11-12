// title for SEO
export const title = "Minimalist blog"
// description for SEO
export const description = "Minimalist blog theme is liteweight and work with lume."

export default function* ({ search, paginate }) {

//  get all posts which type is article.
  const posts = search.pages("type=article", "date=desc");

  // configation for pagination
  const options = {
    // The page 1 is the homepage, set "/" as url
    url: (n) => n === 1 ? "/" : `/page/${n}/`,
    // par page posts
    size: 7,
  };

  // Yield the pages, but the index needs a different layout
  for (const page of paginate(posts, options)) {

    //  if home page use diffrent layout "/"
    if (page.pagination.page === 1) {
      page.menu = {visible: true, order: 1, title:"Home" }
      page.title = "Home page"

      //  comes from _includes folder

      page.layout = "layouts/home.njk";
    } else {
      // Rander diffrent layout if it is not home page page "/page/2","/page/3",etc
      page.title = "Pagination page"

      page.layout = "layouts/home.njk";
    }

    yield page;
  }

}