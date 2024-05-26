//preload scene

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super({ key: 'PreloadScene' });
    }

    preload(){
        //overall
        this.load.audio('clickSFX','assets/audio/sfx/clickSFX.mp3');
        this.load.audio('hoverSFX','assets/audio/sfx/hoverSFX.mp3');
        //menu scene
        this.load.image('titleBG','./assets/images/titleBG.png');
        this.load.image('neck','./assets/images/neck.png');
        this.load.image('launch','./assets/images/buttons/launch.png');
        this.load.image('about','./assets/images/buttons/about.png');
        this.load.image('exit','./assets/images/buttons/exit.png');
        this.load.audio('menuBG','assets/audio/bgm/menuBG.mp3');
        //credits scene
        this.load.image('credBG','./assets/images/credBG.png');
        this.load.image('back','./assets/images/buttons/back.png');
        //game scene
        this.load.audio('gameBG','./assets/audio/bgm/gameBG.mp3');
        this.load.image('forest','./assets/images/forest.png');
        //game tilemap
        this.load.image('tiles','./assets/images/tilemaps/tilemap1.png');
        this.load.tilemapTiledJSON('map','./assets/images/tilemaps/tilemap1.json');
        //game scene-player and mobs
        this.load.spritesheet('mushy',
            './assets/images/mushy.png',
            { frameWidth: 32, frameHeight: 48 }
        );
        this.load.spritesheet('laios',
            './assets/images/laioz.png',
            { frameWidth: 32, frameHeight: 72 }
        );
        this.load.audio('stepSFX','./assets/audio/sfx/stepSFX.mp3');
        this.load.audio('jumpSFX','./assets/audio/sfx/jumpSFX.mp3');
        this.load.audio('gemSFX','./assets/audio/sfx/gemSFX.wav');
        this.load.audio('shroomSFX','./assets/audio/sfx/shroomSFX.mp3');
        this.load.audio('goldSFX','./assets/audio/sfx/goldSFX.mp3');
        this.load.audio('goldSFXback','./assets/audio/sfx/goldSFXback.mp3');
        //game over scene
        this.load.audio('deathBG','assets/audio/bgm/deathBG.mp3');
        this.load.image('gameover', './assets/images/gameover.png');
        this.load.image('retry','./assets/images/buttons/retry.png');
        this.load.image('stepback','./assets/images/buttons/stepback.png');
        //game win scene
        this.load.audio('winBG','assets/audio/bgm/winBG.mp3');
        this.load.image('gamewin', './assets/images/gamewin.png');
        this.load.image('retryblue','./assets/images/buttons/retryblue.png');
        this.load.image('stepbackblue','./assets/images/buttons/stepbackblue.png');
    }

    create() {      //loading screen, transitions to Main Menu after the preloading
        this.loadingText = this.add.text(750, 360, 'Lunging into the dungeon...', { 
            fontSize: '85px', 
            fill: '#f4cfaf', 
            stroke: '#863e45',
            strokeThickness: 20, 
            fontFamily: 'Yoster'
        }).setOrigin(0.5).setAlpha(1);

        this.time.delayedCall(2000, () => {
            this.loadingText.setAlpha(0);
        }, [], this);

        this.time.delayedCall(3000, () => {
            this.loadingText.destroy();
            this.scene.start('MainMenuScene');
        }, [], this);
    }
}