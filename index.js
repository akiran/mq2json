let camelCase = require("lodash/camelCase");

function mq2json(mediaQuery) {
  let fragments = mediaQuery.split(" and ");
  console.log(fragments, "###");
  let obj = fragments.reduce(function(acc, fragment) {
    let isMediaFeature = /:/.test(fragment);
    if (isMediaFeature) {
      let mediaFeatureFragments = fragment
        .replace("(", "")
        .replace(")", "")
        .split(":");

      let mediaFeature = camelCase(mediaFeatureFragments[0].trim());
      acc[mediaFeature] = mediaFeatureFragments[1].trim();
    } else {
      let mediaType = fragment.replace("not ", "");
      acc[mediaType] = !fragment.startsWith("not ");
    }
    return acc;
  }, {});
  return obj;
}

module.exports = mq2json;
