
//TODO Create methods for constructor, and rendering the image to the page

import imageService from "../Services/ImageService.js";
import { ProxyState } from "../AppState.js";

//      (you may wish to set it as a background image: https://www.w3schools.com/JSREF/prop_style_backgroundimage.asp)
function _drawbg(){
  document.getElementById("main").style.backgroundImage = `url('${ProxyState.image.url}')`
}

export default class ImageController {
  constructor(){
    
    ProxyState.on("image", _drawbg )
    imageService.getimage()
  }


 }