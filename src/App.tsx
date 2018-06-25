import * as React from "react"
import { hot } from "react-hot-loader"
import * as styles from "./App.css"

const App = (): JSX.Element => <div className={styles.base}>⬡</div>

export default hot(module)(App)

export { App }
