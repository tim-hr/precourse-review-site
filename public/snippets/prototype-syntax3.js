const PandaAssassin = function (prefferedWeapon) {
  this.prefferedWeapon = prefferedWeapon;
};

PandaAssassin.prototype.terminate = function(target) {
  return `${target} terminated with ${this.preferredWeapon}.`;
};