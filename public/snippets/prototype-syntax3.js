 const PandaAssassin = function(preferredWeapon) {
  this.preferredWeapon = preferredWeapon;
 }

 PandaAssassin.prototype.terminate = function() {
  return `${target} terminated with ${this.preferredWeapon}.`;
 }