import { api } from "./AxiosService";
import { ProxyState } from "../AppState";
import Quote from "../models/Quote";

//TODO create methods to retrieve data and update the State
class QuoteService {

  async getQuote(){
    let res = await api.get("quotes")
    console.log(res)

  }


 }

const quoteService = new QuoteService();
export default quoteService;