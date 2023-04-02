const config = {
    type: Phaser.CANVAS,
    width: 720,
    height: 1280,
    backgroundColor: 0x000000,
   physics: {
        default: 'matter',
        matter: {
            enableSleeping: true,
          debug:true
            
        }
    },
  parent: "screen",
    dom: {
        createContainer: true
    },
    scene: 
      [Preloader,MainGame,Play,LevelSelect],
    scale:{mode:Phaser.Scale.FIT, autoCenter:Phaser.Scale.CENTER_BOTH } 
    }

var game = new Phaser.Game(config);
var backTiles=[];
var activeBox;
var emitter;
var particles;
var destroyedTiles;
var audios={};
window.addEventListener("popstate", (e)=>{
  e.preventDefault();
    document.write("Back was pressed")
})
