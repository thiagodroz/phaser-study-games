var SpaceWar = SpaceWar || {};

SpaceWar.game = new Phaser.Game('100%', '100%', Phaser.AUTO);

SpaceWar.game.state.add('GameState', SpaceWar.GameState);
SpaceWar.game.state.start('GameState');    