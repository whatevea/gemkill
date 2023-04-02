class LevelSelect extends Phaser.Scene {//Creates the class for this scene
  
  constructor() {
    //the constructor for the class
    super({key:'LevelSelect'});  
  }

  preload(){

  }
  
  create(){
//background 
    this.add.image(0, 0, "bg2").setOrigin(0, 0).setScale(2);
//back buttons
    let btn1=makeButton(this,"Back",88, 57, "bi bi-caret-left-square");
  enableDrag(this,btn1)
    btn1.setInteractive();
    btn1.addListener("click");
  btn1.on("click",()=>{
    this.scene.start("MainGame");
    })

   //make level selection 
let totallevels=9;
    let x=120;
    let y= 341;
    let width=230;
    for(let i=1;i<=totallevels;i++){
    let btn=makeButton(this,`Level ${i}`,x,y,"bi bi-caret-left-square","btn-danger");
      btn.addListener("click");
      btn.on("click",function(){
        console.log(this);
        console.log("clicked")
        this.scene.scene.start('Play',{"level":`level${i}`});
      })
      x=x+width;
      
    if(i%3===0){x=120; y=y+100}

    }
  
  }
  
  update(){
  
}
}