var groupStrings = function (strings) {
  //找key for each word to group them, so we can store them in a container
  //corner case
  if (typeof strings !== "string") {
    throw new Error();
  }
  //用map的value做list
  const map = new Map();
  const result = [];
  for (const str of strings) {
    const key = getKey(str);
    if (map.has(key)) {
      const list = map.get(key);
      list.push(str);
    } else {
      map.set(key, [str]);
    }
  }
  return Array.from(map.values);
};
function getKey(str) {
  str = "111";
  let key = "";
  for (let index = 1; index < str.length; index++) {
    let diff =
      str.charAt(index).charCodeAt() - str.charAt(index - 1).charCodeAt();
    key += diff > 0 ? diff : diff + 26;
    key += ",";
  }
  return key;
}
