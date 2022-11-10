export const layout = "layouts/tag.njk";

export default function* ({ search }) {

  for (const tag of search.tags()) {
    yield {
      url: `/tag/${tag}/`,
      title: `Tagged ${tag}`,
      type: "tag",
      tag,
    };
  }
}