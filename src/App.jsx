import React from "react"
import { hot } from "react-hot-loader/root"
import "./app.css"

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        Hell000000o
        {this.props.message}
      </div>
    )
  }
}
export default hot(App)
