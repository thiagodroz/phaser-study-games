var SpaceWar = SpaceWar || {};

SpaceWar.PlayerBullet = function(game, x, y) {
  Phaser.Sprite.call(this, game, x, y, 'bullet');

  this.anchor.setTo(0.5);
  this.checkWorldBounds = true;
  this.outOfBoundsKill = true;
};

SpaceWar.PlayerBullet.prototype = Object.create(Phaser.Sprite.prototype);
SpaceWar.PlayerBullet.prototype.constructor = SpaceWar.PlayerBullet;