import TypeScriptComponent from 'typescript-component'

function init() {
  var selector = ".container"
  var component = new TypeScriptComponent(selector)
  component.attach()
}

init()
