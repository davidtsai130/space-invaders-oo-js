class CrewMember {
    constructor(object){
      this.position = object.position;
      this.id = object.id;
      this.currentShip = "Looking for a Rig"
      Store.data.crewMembers.push(this);
    }

    assignShip(spaceship) {
      this.currentShip = spaceship
      this.spaceshipId = spaceship.id
      spaceship.docked = false
    }

    engageWarpDrive() {
      if (this.position === 'Pilot' && this.spaceshipId) {
        this.currentShip.warpDrive = 'engaged!'
      } else {
        return 'had no effect'
      }
    }

    chargePhasers() {
      if (this.position === 'Gunner' && this.spaceshipId) {
        this.currentShip.phasersCharge = 'charged!'
      } else {
        return 'had no effect'
      }
    }

    setsInvisibility() {
      if (this.position === 'Defender' && this.spaceshipId) {
        this.currentShip.cloaked = true
      } else {
        return 'had no effect'
      }
    }

  }
