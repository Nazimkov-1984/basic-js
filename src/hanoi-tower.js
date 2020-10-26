
module.exports = function calculateHanoi(discNumber, turnSpeed) {
  let result = {
    turns: 0,
    seconds: 0
};
result.turns = (Math.pow (2, discNumber)) - 1;
result.seconds = Math.floor(((result.turns*60)/turnSpeed)*60);
return result;
};
