const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeatTimesMain = options.repeatTimes || 1;
  const separatorMain = options.separator || "+";
  const additionMain =
    options.addition !== undefined ? String(options.addition) : "";
  const additionRepeatTimesMain = options.additionRepeatTimes || 1;
  const additionSeparatorMain = options.additionSeparator || "|";
  const repeatedAddition = Array(additionRepeatTimesMain)
    .fill(additionMain)
    .join(additionSeparatorMain);
  const repeatedString = Array(repeatTimesMain)
    .fill(str + repeatedAddition)
    .join(separatorMain);
  return repeatedString;
}

module.exports = {
  repeater,
};
