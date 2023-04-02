function colMatch(scene,box1,box2){
//delete the emitter and activebox
  emitter.remove();
  activeBox=null;
  // console.log(center1,center2)
  //move particles across and destroy
explodeBox(scene,middleBoxes(scene,box1,box2));    
  }
function rowMatch(scene,box1,box2){
explodeBox(scene,middleBoxes(scene,box1,box2));  
}


function sameTex(scene,box1,box2){
emitter.remove();
activeBox=null;  
  boxesToDestroy=[box1,box2]
explodeBox(scene,boxesToDestroy)
}
function middleBoxes(scene,box1,box2){
  center1=box1.getCenter();
  center2=box2.getCenter();
  let line=scene.add.graphics();
  line.lineStyle(5, 0x2f345c, 1.0);
  line.beginPath();
  line.strokeStyle="white";
  line.moveTo(center1.x,center1.y);
  line.lineTo(center2.x,center2.y);
  line.stroke();
  let touchedBox=[];
  let geomLine=new Phaser.Geom.Line(center1.x,center1.y,center2.x,center2.y);
backTiles.forEach((item)=>{
  if (item !=null){  
boundsA=item.getBounds();
if(Phaser.Geom.Intersects.LineToRectangle(geomLine,boundsA))
{
 console.log(item)
  touchedBox.push(item)
}
  }
  

})
  line.destroy();
  return touchedBox;

}


function explodeBox(scene,boxes){
boxes.forEach((box)=>{
let center=box.getCenter();
let index=box.getData("data").myIndex;
console.log("mhy index is",index);
let explosion=scene.add.sprite(center.x,center.y,"explode").play("boom");
audios.destroy.play();
explosion.on("animationcomplete",function(){this.destroy()})
box.getData("data").gemSprite.destroy();
console.log(index);
box.destroy();
backTiles[index]=null;
destroyedTiles++;
if (destroyedTiles===backTiles.length){
let text=scene.add.text(180,500,"Congratulations\nLevel Completed",{
			fontSize: '40px',
			color: '#79B4A9',
			fontStyle: 'oblique',
		},)
    let nextbtn= scene.add.image(347.31653730122 ,631.8077789042584,"nextbtn").setScale(0.3);
    nextbtn.setInteractive();
    nextbtn.on("pointerdown",()=>{
      let nextlvl=`level${scene.levelnum+1}`;
      console.log(nextlvl);
      scene.scene.start('Play',{"level":nextlvl});
      
    })
  }

  
})
activeBox=null;
emitter.remove();
  
}