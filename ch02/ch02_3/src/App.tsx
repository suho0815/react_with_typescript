import { Component } from "react"
import ClassComponent from "./ClassComponent"
import ArrowComponent from "./ArrowComponent"

export default class App extends Component {
	render(){
    return (
      <ul>
        <ClassComponent href="http://www.google.com" text="go to google"/>
        <ArrowComponent href="http://twitter.com" text="go to Twitter"/>
      </ul>
    )
  }
  
}
