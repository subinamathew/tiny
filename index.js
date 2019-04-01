module.exports = function tiny(string) {
  if (typeof string !== "string") throw new TypeError("Tiny Script wants a string!");
  return string.replace(/\s/g, "").trim();
};
