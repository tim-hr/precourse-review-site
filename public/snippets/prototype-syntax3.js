const PandaAssassin = function (preferredWeapon){
  return this.preferredWeapon = preferredWeapon;
}

PandaAssassin.prototype.terminate = function (target) {
  return `${target} terminated with ${this.preferredWeapon}.`;
}