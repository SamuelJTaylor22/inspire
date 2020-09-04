import { api } from "./AxiosService.js";
import { ProxyState } from "../AppState.js";
import Quote from "../models/Quote.js";

class QuoteService {

  async getQuote(){
    let res = await api.get("quotes")
    ProxyState.quote = new Quote(res.data.quote)
    console.log(ProxyState.quote.body)
  }


 }

const quoteService = new QuoteService();
export default quoteService;