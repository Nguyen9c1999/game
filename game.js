let canvar = document.getElementById("flap");
let context = canvar.getContext("2d");
var scoreshow = document.getElementById("score")

var birding = new Image();
var hinhNenChinh = new Image();
var ongTren = new Image();
var ongDuoi = new Image();
birding.src = "img/xu2.png"
hinhNenChinh.src= "img/nenchinh.png"
ongTren.src = "img/ongtren.png"
ongDuoi.src="img/ongduoi.png"
//tao bien
var score = 0;
var khoangCachhaiOng=140;
var khoangCachDenongDuoi;
var bird={
    x:hinhNenChinh.width/5,
    y: hinhNenChinh.height/2
}
var ong = []
ong[0]={
    x : canvar.width,
    y:0
    
}

function run(){
    context.drawImage(hinhNenChinh,0,0);
    context.drawImage(birding,bird.x,bird.y,50,50);
    
    for(let i = 0;i<ong.length;i++){
        khoangCachDenongDuoi=ongTren.height + khoangCachhaiOng;
        context.drawImage(ongTren,ong[i].x,ong[i].y);

        context.drawImage(ongDuoi,ong[i].x,ong[i].y+khoangCachDenongDuoi)
        ong[i].x -=3; //de ong di chuyen

        if(ong[i].x==canvar.width/3 ){
            ong.push({
                x:canvar.width,
                y:Math.floor(Math.random()*ongTren.height)-ongTren.height
            })
        }
        if(ong[i].x==0){
            ong.slice(0,1)
        }
        if(ong[i].x==bird.x){
            score++
        }
        if(bird.y+birding.height==canvar.height
            ||
            bird.x+birding.width>= ong[i].x && bird.x <= ong[i].x +ongTren.width
            && (bird.y<=ong[i].y+ongTren.height||
            bird.y +birding.height>= ong[i].y+ khoangCachDenongDuoi)    
            ){
                document.getElementById("xu").innerHTML="Bạn phải rửa đít cho xu"
                return
            }             
    }
    scoreshow.innerHTML="score: " +score
    //cho bird roi xuong
    bird.y+=2
    requestAnimationFrame(run)
}
run()
document.addEventListener("click",function(){
    bird.y-=60
})
