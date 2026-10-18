import yaml from "js-yaml";

export default function (eleventyConfig) {
  // Innehåll i src/_data/*.yml redigeras av styrelsen (direkt eller via Pages CMS)
  eleventyConfig.addDataExtension("yml", (contents) => yaml.load(contents));

  eleventyConfig.addPassthroughCopy("src/filer");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/style.css");

  // Länka filer med mellanslag och å/ä/ö säkert. Tar både "filer/x.pdf" och
  // "/filer/x.pdf" (Pages CMS sparar med inledande snedstreck).
  eleventyConfig.addFilter("fileUrl", (path) =>
    "/" + path.replace(/^\/+/, "").split("/").map(encodeURIComponent).join("/")
  );

  // Ett dokument har antingen en uppladdad fil eller en extern länk
  eleventyConfig.addFilter("dokumentUrl", (d) =>
    d.fil ? eleventyConfig.getFilter("fileUrl")(d.fil) : d.lank
  );

  return {
    dir: { input: "src", output: "_site" },
    markdownTemplateEngine: false,
  };
}
