import { api } from "./AxiosService.js";
import { ProxyState } from "../AppState.js";
import bgImage from "../models/Image.js";

//TODO create methods to retrieve data and save to the State
class ImageService {
  async getimage() {
    let res = await api.get("images")
    ProxyState.image = new bgImage(res.data)
  }
}

const imageService = new ImageService();
export default imageService;