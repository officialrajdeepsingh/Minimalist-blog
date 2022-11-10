export function url(page) {
    return (
      page.src.path
      .replace('/posts', '')
      .replace(/[0-9]{4}-[0-9]{2}-[0-9]{2}_/, '') + '.html' // this seems to be necessary even with the new get date from folders functionality
    );
  }