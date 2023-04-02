class Preloader extends Phaser.Scene {//Creates the class for this scene
  
  constructor() {
    super({key:'Preloader'});  
  }

  preload(){
            // this.load.atlas('sea', 'assets/tanks_sprite.png', 'assets/tanks_sprite.xml');
this.load.image("bg2","assets/background1.png");
this.load.image("nextbtn","assets/nextbtn.png");

this.load.image("bg","assets/bg.jpg");
this.load.image("toast ","assets/toast.png");

this.load.image("blue","assets/blue.png");
this.load.spritesheet("pointers","assets/pointers.png",{
  frameWidth:174,frameHeight:236
})

this.load.spritesheet("aliens","assets/aliens.png",{frameWidth:32,frameHeight:32})
this.load.spritesheet("gems","assets/gems2.png",{frameWidth:128,frameHeight:128})
this.load.spritesheet("explode","assets/explode.png",{frameWidth:148,frameHeight:148})
    //sounds
    this.load.audio("destroy","assets/destr.wav");
    this.load.audio("shake","assets/shake.wav");
    this.load.audio("select","assets/select.wav");
    
  }
  
  create(){
    this.anims.create({
      key:"boom",
      frames:this.anims.generateFrameNumbers('explode',{frames:[0,1,2,3,4,5,6,7]},),

			frameRate:12,

			
    })
    this.anims.create({
      key:"click",
      frames:this.anims.generateFrameNumbers('pointers',{frames:[0,1]},),

			frameRate:5,
repeat:-1
			
    })




  this.add.text (config.width/2,config.height/2,"LOADING");
  this.scene.start("MainGame");
console.log("Everything is loaded")
    audios.destroy=this.sound.add("destroy");
    audios.shake=this.sound.add("shake");
    audios.select=this.sound.add("select");
    
    
  }
  
  update(){
  
}}