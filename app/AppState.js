import Todo from "./models/Todo.js"
import Weather from "./models/Weather.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import bgImage from "./models/Image.js"
import Quote from "./models/Quote.js"


class AppState extends EventEmitter {
  /** @type {Todo[]} */
  todos = []
  /** @type {Weather} */
  weather = null

  /**@type {bgImage} */
  image = {url:"placehold.it/500x500"}

  /**@type {Quote} */
  quote = {author:"Sam", body:"Async code makes me want to die"}
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
