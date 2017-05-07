const PandaAssassin = function(preferredWeapon) {
  this.preferredWeapon = preferredWeapon;
}

PandaAssassin.prototype.displayName = function() {
  return `${target} terminated with ${this.preferredWeapon}.`;
}