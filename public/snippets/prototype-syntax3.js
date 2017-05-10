const pandaAssassin= function(preferredWeapon){
  this.preferredWeapon = preferredWeapon;
};

pandaAssassin.prototype.terminate = function(target){
  return `${target} terminated with ${this.preferredWeapon}.`;
};