const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let strArr = [].concat(...arr);
let result = 0;

strArr.forEach (item =>{
if (item === '^^') {
    result++
}
});
return result;
};
