/* global describe, it, beforeEach */
import assert from 'assert'

import TypeScriptComponent from '../TypeScriptComponent'

let tempElement = document.createElement('DIV')
tempElement.className = 'container'
document.body.appendChild(tempElement)

let selector = '.container'
let component = new TypeScriptComponent(selector)
component.attach()

let outputElement = document.querySelector('#component-output')
describe('Basic tests', () => {
  it('Renders', () => {

    assert.equal(document.querySelectorAll('.typescript-component').length, 1)

  })
  it('handles button clicks', () => {

    document.querySelector('.my-button-1').dispatchEvent(new Event('click'))
    setTimeout(function () {
      assert.equal(outputElement.innerHTML, 'hello-world')
    }, 0)
  })
})
