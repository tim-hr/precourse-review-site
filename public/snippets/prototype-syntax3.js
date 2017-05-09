const PandaAssassin = function(name) {
	this.name = name;
};

PandaAssassin.prototype.preferredWeapon = 
function (preferredWeapon) {
  this.preferredWeapon = preferredWeapon;
};

PandaAssassin.prototype.terminate(target) {
  return `${target} terminated with ${this.preferredWeapon}.`;
};