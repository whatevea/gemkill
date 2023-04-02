class Play extends Phaser.Scene {//Creates the class for this scene

  constructor() {//the constructor for the class
    super({ key: 'Play' });
  }
  init(data){
    this.level=data.level;
    this.levelnum=+this.level.split("vel")[1];
  }
  preload() {
    this.load.image("ball", "assets/pangball.png")
  }

  create() {
    //background
    this.add.image(0, 0, "bg2").setOrigin(0, 0).setScale(2);
    //back btn
    let btn1=makeButton(this,"Back",88, 57, "bi bi-caret-left-square");
    let btn2=makeButton(this,"Restart",598,57,"bi bi-arrow-repeat","btn-warning")
    btn1.setInteractive();
    btn1.addListener("click");
    btn2.addListener("click");
  
    btn1.on("click",()=>{
 {

Swal.fire({
  backdrop:false,
   allowOutsideClick:true,
  title: 'Are you sure?',
  text: "Exit this level and go out",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes',
    width:"90%"
}).then((result) => {
  if (result.isConfirmed) {
        this.scene.start("LevelSelect");

  }
})

  }
    })
  btn2.on("click",()=>{

Swal.fire({
  backdrop:false,
   allowOutsideClick:true,
  title: 'Are you sure?',
  text: "Do you want to restart this Level?",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes',
    width:"90%"
}).then((result) => {
  if (result.isConfirmed) {
     this.scene.start('Play',{"level":this.level});
  }
})

  })    //settting the global variables
    backTiles=[];
    destroyedTiles=0;
    
    
      renderLevel(this,this.level)
      if(this.level==="level2"){
        
  
        showPointer(this)


      }

    // set activeBox at beginning to null
    activeBox=null;
    //global variable particles set
    particles = this.add.particles("blue");
    //explode animation
  
    
  }

  update() {

  }
}
function showPointer(scene){
  const beginPos={x:125,y:272}
  const finalPos={x:514,y:272}
let pointer=scene.add.sprite(beginPos.x,beginPos.y,"pointers").setScale(0.5).play("click");
let pointer2=scene.add.sprite(finalPos.x,finalPos.y,"pointers").setScale(0.5).play("click");
scene.time.addEvent({
  delay:5300,
  callback:function(){
  pointer.destroy();
  pointer2.destroy();

  },
  callbackScope:this,
  loop:false
  
  })
}
