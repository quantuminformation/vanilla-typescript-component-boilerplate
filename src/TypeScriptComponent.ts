import {IAttachableComponent} from "vanilla-typescript"
import './TypeScriptComponent.pcss'
import {config} from "./Configuration";


/**
 * A TypeScriptComponent component
 *
 * Features
 *
 */
export default class TypeScriptComponent implements IAttachableComponent {
  destroyBoundWithThis = this.detach.bind(this)
  private hostElement: HTMLElement

  constructor(public selector: string) {
    this.hostElement = <HTMLElement> document.querySelector(selector)


  }


  addListeners() {

    document.querySelector('.my-button').addEventListener('click', (event: MouseEvent) => {
      console.log("hello-world")
    })
  }


  attach() {
    this.hostElement.innerHTML = `
        <button class="my-button">Click me</button>
    `
    this.addListeners()
  }

  detach() {
  }

}

