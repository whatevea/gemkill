function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function enableDrag(scene, obj) {

  obj.setInteractive();
  scene.input.setDraggable(obj);

  scene.input.on('drag', function(pointer, obj, dragX, dragY) {

    obj.x = dragX;
    obj.y = dragY;

  });
  scene.input.on('dragend', function(pointer, obj) {
    console.log(obj.x, obj.y)


  });


}

function makeParticles(scene) {
  let particles = scene.add.particles("blue");
  let emitter = particles.createEmitter();
  emitter.setPosition(random(100, 400), random(100, 400));
  emitter.setSpeed(700);
  emitter.maxParticles = 200;
  emitter.setBlendMode(Phaser.BlendModes.ADD);


}

function makeButton(scene, text, x, y, icon,color="btn-success") {
  var el = document.createElement('div');
  el.innerHTML = `<button class="ui btn ${color}" type="button">
<i class="bi ${icon}"></i>
${text}
</button>`;

  var domElement = scene.add.dom(x, y, el);
  return domElement;

}



function loadTiles(scene, boxConfig) {

  let { x, y, row, col } = boxConfig;
  for (let i = 1; i < row; i++) {
    yPos = ((i - 1) * 128) + y;
    
    for (let j = 1; j < col; j++) {
      xPos = ((j - 1) * 128) + x;    
      
      //drawing a box
      let sprite = scene.add.sprite(xPos, yPos, "gems").setFrame(15).setOrigin(0, 0).setScale(0.8);
      sprite.setInteractive();
      sprite.on("pointerdown", function() {
        boxClicked(this, scene)

      })
      sprite.setData({ "data": { "x": j, "y": i, "texture": null } })
      backTiles.push(sprite);
    }


  }

}
function renderGems(scene,elems) {
  console.log(elems);
  backTiles.forEach((item,index) => {
    let center = item.getCenter();
    let gemNum = elems[index];
  let gemSprite= scene.add.sprite(center.x, center.y, "gems").setFrame(gemNum).setScale(0.7);
    item.getData("data").texture = gemNum;
    item.getData("data").gemSprite =gemSprite;
    item.getData("data").myIndex =index;
    
  })

}
function boxClicked(box, scene) {
  //if activeBox is empty
  if(box==activeBox){
    console.log("samebox")
  emitter.remove();
    activeBox=null;
    shakeCamera(scene);
  }
  else if (activeBox===null) {
    console.log("activebox is null so i come here")
    audios.select.play();
    activeBox = box;
    //get the bounds of the box
    let bounds = box.getBounds();

    //create a particle to highlight the box 
    emitter = particles.createEmitter({
      emitZone: { type: 'edge', source: bounds, quantity: 30 },
      lifespan: 300,
      scale: { start: 0.4, end: 0 }
    })
    // modify the setInteractive to toogle the activeBox if clicked again
  
    //set the setIteractive to Normal

  } //assign activeBox if none found
  
  else if (activeBox!=null && activeBox.getData("data").texture === box.getData("data").texture) {
    
    if (activeBox.getData("data").x === box.getData("data").x) {
      console.log("same row");
      rowMatch(scene,box,activeBox)
    }
    
    else if (activeBox.getData("data").y === box.getData("data").y) {
      console.log("same col")
      colMatch(scene,box,activeBox)
      



    }
      
else{
  sameTex(scene,box,activeBox)
  console.log("same texutres only ")
}


  } //if texture same and 

  else{
    shakeCamera(scene);
    emitter.remove();
    activeBox=null;
  }
  
  
}
function shakeCamera(scene){
  // console.log("camera shaked")
    audios.shake.play();
  
   scene.cameras.main.shake(100)
}


function renderLevel(scene,level){
let x=80;
let y=300;
levelContents=levels[level];
//converting to num with ++
let row=++(levelContents.order.split("x")[0]);
let col=++(levelContents.order.split("x")[1]);
//render the boxes
let boxConfig={"x":x,
              "y":y,
              "row":row,
               "col":col
              }
  
loadTiles(scene,boxConfig);
renderGems(scene,levelContents["elements"])
}