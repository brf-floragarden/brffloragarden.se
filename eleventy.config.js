import yaml from "js-yaml";

export default function (eleventyConfig) {
  // Innehåll i src/_data/*.yml redigeras av styrelsen (direkt eller via Pages CMS)
  eleventyConfig.addDataExtension("yml", (contents) => yaml.load(contents));

  eleventyConfig.addPassthroughCopy("src/filer");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/style.css");

  // Länka filer med mellanslag och å/ä/ö säkert
  eleventyConfig.addFilter("fileUrl", (path) =>
    path.split("/").map(encodeURIComponent).join("/")
  );

  return {
    dir: { input: "src", output: "_site" },
    markdownTemplateEngine: false,
  };
}
