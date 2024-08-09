import{load_scene} from "./scenes/load_scene";
import{menu_scene} from "./scenes/menu_scene";
import{game_scene} from "./scenes/game_scene";

const config = {
    type: Phaser.AUTO,
    width: 720,
    height: 1280,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },

    parent: 'phaser-parent',
    dom: {
        createContainer: true
    },

    scene:[
        load_scene, menu_scene, game_scene,
    ],
    render: {
        preserveDrawingBuffer: true,
    }
    
}

let game = new Phaser.Game(config);