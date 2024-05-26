//sceneManager file

import PreloadScene from '../scripts/scenes/preloadScene.js';
import MainMenuScene from '../scripts/scenes/menuScene.js';
import GameScene from '../scripts/scenes/game.js';
import GameOverScene from '../scripts/scenes/gameOver.js';
import GameWinScene from '../scripts/scenes/gameWin.js';
import CredScene from '../scripts/scenes/credits.js';

var config = {
    type: Phaser.AUTO,
    width: 1500,
    height: 750,
    scene: [PreloadScene, MainMenuScene, GameScene, GameOverScene, GameWinScene, CredScene], //leftmost gets loaded FIRST
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 600 },
            debug: false
        }
    },
    pixelArt: true          //prevents white lines and other visual glitches/inconsistencies
};

const game = new Phaser.Game(config);

game.events.on('ready', function () {       //centers the game on the webpage
    var canvas = game.canvas;
    canvas.style.position = 'absolute';
    canvas.style.left = '50%';
    canvas.style.top = '50%';
    canvas.style.transform = 'translate(-50%, -50%)';
});