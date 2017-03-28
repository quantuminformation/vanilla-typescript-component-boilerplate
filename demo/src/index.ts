import TypeScriptComponent from '../../src/TypeScriptComponent'

function init () {
  let selector = '.container'
  let component = new TypeScriptComponent(selector)
  component.attach()
}

init()
