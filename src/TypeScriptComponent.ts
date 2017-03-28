import { IAttachableComponent } from 'vanilla-typescript'
import './TypeScriptComponent.pcss'
import { config } from './Configuration'

/**
 * A TypeScriptComponent component
 *
 * Supports attaching to a div
 *
 * Has a bunch of stuff you normally use in vanilla components
 *
 */
export default class TypeScriptComponent implements IAttachableComponent {
  static CUSTOM_EVENT: string = 'CUSTOM_EVENT'

  // we want to reference `this` component on browser based events handler functions
  private customEventHandlerBound = this.customEventHandler.bind(this)
  private hostElement: HTMLElement
  private componentOutput: HTMLElement

  constructor (public selector: string) {
    this.hostElement = document.querySelector(selector) as HTMLElement
    this.hostElement.className = 'typescript-component'
  }

  /**
   * Will contain logic to attach this components DOM to the existing DOM structure of your application.
   * It will also usually contain setup of listeners and interactivity.
   */
  attach () {
    this.hostElement.innerHTML = `
        <button class='my-button-1'>Click me to set text 1</button>
        <button class='my-button-2'>Click me to set text 2</button>
        <button class='my-button-3'>Dispatch a custom event</button>
        <p id='component-output'></p>
    `
    this.componentOutput = document.querySelector('#component-output') as HTMLElement
    this.addListeners()
  }

  addListeners () {
    document.querySelector('.my-button-1').addEventListener('click', (event: MouseEvent) => {
      this.componentOutput.innerHTML = 'hello-world'
    })
    document.querySelector('.my-button-2').addEventListener('click', (event: MouseEvent) => {
      this.componentOutput.innerHTML = 'hello-universe'
    })
    document.querySelector('.my-button-3').addEventListener('click', (event: MouseEvent) => {
      let customEvent = new CustomEvent(TypeScriptComponent.CUSTOM_EVENT)
      document.body.dispatchEvent(customEvent)
    })
    document.body.addEventListener(TypeScriptComponent.CUSTOM_EVENT, this.customEventHandlerBound)
  }

  detach () {
    // put logic in here to remove any listeners that will remain after the components removal
    // ie listeners on any remaining dom
    this.removeListeners()
    this.hostElement.innerHTML = ''
    this.hostElement.className = ''
  }

  removeListeners () {
    document.body.removeEventListener(TypeScriptComponent.CUSTOM_EVENT, this.customEventHandlerBound)
  }

  customEventHandler (event) {
    console.log(`Received event: ${event.type}`)
    this.componentOutput.innerHTML = `Received event: ${event.type}`
  }
}
