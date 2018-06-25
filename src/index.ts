import * as React from "react"
import * as ReactDOM from "react-dom"
import { App } from "./App"

const render = (root: typeof App) =>
  ReactDOM.render(
    React.createElement(root, {}),
    document.getElementById("root")
  )

render(App)
