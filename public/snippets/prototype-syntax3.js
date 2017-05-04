const PandaAssassin = function(name) {
  this.preferredWeapon = preferredWeapon;
};


PandaAssassin.prototype.terminate = function(target) {
  return `${target} terminated with ${this.preferredWeapon}.`;
}