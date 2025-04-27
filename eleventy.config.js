import pluginWebc from "@11ty/eleventy-plugin-webc";

export default function (eleventyConfig) {
  eleventyConfig.setServerOptions({
    watch: ["./_src/sass/styles.scss"],
    domDiff: true
  })
  eleventyConfig.addPlugin(pluginWebc, {
    components: "./_includes/webc/*.webc"
  });
  eleventyConfig.addJavaScriptFunction("serviceTimes", function () {
    const serviceTimes = [
      { time: "10:00am", desc: "Sunday School" },
      { time: "11:00am", desc: "Sunday Morning" },
      { time: "5:30pm", desc: "Sunday Evening" },
      { time: "7:00pm", desc: "Thursday Evening" }
    ];
    return serviceTimes
  });

  eleventyConfig.addJavaScriptFunction("currentDate", function () {
    const today = new Date()
    return today.getFullYear()
  });

  eleventyConfig.addPassthroughCopy("img");



}

export const config = {
}

