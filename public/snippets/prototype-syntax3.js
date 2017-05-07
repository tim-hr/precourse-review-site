const PandaAssassin = function(prefferredWeapon) {
  this.prefferredWeapon = prefferredWeapon;
}

PandaAssassin.prototype.terminate = function(target) {
  return `${target} terminated with ${this.preferredWeapon}.`;
}
