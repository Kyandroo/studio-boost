// filters here (transforms the data that is passed)
const sortItems = (arr) => {
  const sortedArray = arr.sort((a, b) => {
    return a.data.nav.order - b.data.nav.order;
  });

  return sortedArray;
};

const getCurrentYear = () => {
  return new Date().getFullYear();
};

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({
    "./input/assets/styles/dist": "styles/",
    "./input/assets/images": "/img/",
    "./input/assets/fonts": "/fonts/",
  });

  // shortcodes here (does custom logic that is defined)
  eleventyConfig.addFilter("sortByOrder", sortItems);
  eleventyConfig.addShortcode("currentYear", getCurrentYear);

  return {
    dir: {
      // what pages gonna be build
      input: "./input/pages/",
      // where pages gonna be build to
      output: "output",
      // place of partials (headers, footers, ...)
      includes: "../_partials",
      // place of layouts
      layouts: "../_layouts",
      data: "../_data",
      pathprefix: "/output/",
    },
  };
};
