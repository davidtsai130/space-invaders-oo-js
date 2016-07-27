class Spaceship {
  constructor(object) {
    this.name = object.name;
    this.phasers = object.phasers;
    this.phasersCharge = 'uncharged';
    this.shields = object.shields;
    this.id = object.id;
    this.cloaked = false;
    this.warpDrive = 'disengaged';
    this.docked = true
    Store.data.spaceships.push(this);
  }
}
