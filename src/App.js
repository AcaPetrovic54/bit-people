import React, { Fragment } from "react";

import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { UsersDisplay } from "./components/UsersDisplay/UsersDisplay.jsx";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isListView: true
    };
    this.onLayoutToggle = this.onLayoutToggle.bind(this);
  }

  onLayoutToggle () {
    this.setState({
      isListView: !this.state.isListView
    });
  }

  // componentWillMount() {
  //   console.log("Will Mount");
  // }

  // componentDidMount() {
  //   console.log("Did Mount");
  // }

  // componentWillUpdate() {
  //   console.log("Will Update");
  // }

  // componentDidUpdate() {
  //   console.log("Did Update");
  // }

  // componentWillReceiveProps(prevProps) {
  //   this.props 
  // }

  // componentWillUnmount() {
  //   alert("Unmount");
  // }

  render () {
    //console.log("Render");
    return (
      <Fragment>
        <Header isListView={this.state.isListView} onLayoutToggle={this.onLayoutToggle} />
        <UsersDisplay isListView={this.state.isListView} />
        <Footer />
      </Fragment>
    );
  }

}

export default App;
