const PandaAssassin = function(preferredWeapon) {
  this.preferredWeapon = preferredWeapon;
};

PandaAssassin.prototype.target = function(target) {
  return `${target} terminated with ${this.preferredWeapon}.`;
}