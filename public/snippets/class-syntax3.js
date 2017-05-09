class PandaAssassin {

  constructor(preferredWeapon) {
    this.preferredWeapon = preferredWeapon;
  }

  terminate(target) {
    return `${target} terminated with ${this.preferredWeapon}.`;
  }

}