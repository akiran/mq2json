function mq2json(mediaQuery) {
  let fragments = mediaQuery.split(" and ");
  console.log(fragments, "###");
  let obj = fragments.reduce(function(acc, fragment) {
    let mediaType = fragment.replace("not ", "");
    acc[mediaType] = !fragment.startsWith("not ");
    return acc;
  }, {});
  return obj;
}

module.exports = mq2json;
