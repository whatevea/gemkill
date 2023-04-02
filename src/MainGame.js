class MainGame extends Phaser.Scene {//Creates the class for this scene
  
  constructor() {//the constructor for the class
    super({key:'MainGame'});  
  }

  preload(){

  }
  
  create(){
  // this.add.text(100,100,"Game Started")
    this.add.image(0,0,"bg").setOrigin(0,0).setScale(2.3);
// adding particles
  makeParticles(this);
    //making buttons
let btn1=makeButton(this,"PLAY",367,136, "bi-play-circle");
// enableDrag(this,btn);
let btn2= makeButton(this,"Instructions",345,237,"bi-card-list")    
// enableDrag(this,btn2);
let btn3 = makeButton(this,"Settings",362,336,"bi-gear") 
btn1.addListener("click");
  btn1.on("click",()=>{
  console.log(this);
    this.scene.start("LevelSelect");
    
  })
    btn2.addListener('click');

    btn2.on("click",()=>{swal.fire("Destroy all the gems. You can destroy whole row/col by clicking on items in same row/col. Game available for reskin,modification or liscense . Contact at thirty545@gmail.com")})
  }
  
  update(){
  
}
}