
var rows = 4;
var columns =4;

var currIm;
var otherIm; 

var order=["7","1","10","3","4","12","6","0","15","14","2","11","5","13","9","8"]
window.onload = function( ){
    for(let r=0;r<rows;r++){
        for(let c=0; c< columns;c++){
            let im = document.createElement("img");
            im.src="im_"+order.shift()+".jpg" ;
            im.id = im.src;
            im.onclick = function(){swap(this)};
            document.getElementById("board").append(im);

            
        }
    }
}
let images =[];
function swap(img){
    images.push(img);
    if (images.length == 2){
        var val = images[0].src;
        images[0].src = images[1].src;
        images[1].src = val;
        
		
        while(images.length > 0){
            images.pop();
        }
        
    }
}