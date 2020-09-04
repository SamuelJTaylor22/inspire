import quoteService from "../Services/QuoteService.js";
import { ProxyState } from "../AppState.js";


function _drawQuote(){
  document.getElementById("quote").innerText = ProxyState.quote.body
  document.getElementById("quote").setAttribute("title",`Author: ${ProxyState.quote.author}`)
}


export default class QuoteController {
  constructor(){
    ProxyState.on("quote", _drawQuote)
    quoteService.getQuote()
  }
 }