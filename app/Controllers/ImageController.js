


import imageService from "../Services/ImageService.js";
import { ProxyState } from "../AppState.js";

//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)
function _drawbg(){
  document.getElementById("main").style.backgroundImage = `url('${ProxyState.image.url}')`
}

function _drawClock(){
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes().toString();
  if(parseInt(m) < 10){ m = "0"+ m}
  
  setTimeout(_drawClock, 500);
  document.getElementById("time").innerText = h + ":" + m;
}

export default class ImageController {
  constructor(){
    
    ProxyState.on("image", _drawbg )
    imageService.getimage()
    _drawClock()
  }


 }