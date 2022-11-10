export const layout = "layouts/category.njk";

export default function* (props) {


  const { search }= props

  for (const category of search.values("category") ) {

    yield {
      url: `/category/${category}/`,
      title: `Categoryed ${category}`,
      type:"category",
      category,
    };
    
  }

}

