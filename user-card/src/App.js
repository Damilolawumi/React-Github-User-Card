import React from 'react';
import axios from 'axios';

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    }
  }


  componentDidMount() {

    axios.get(`https://api.github.com/users/Damilolawumi`)
      .then((response) => {
        this.setState({
          user: response.data
        })
        console.log(response);
      })
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default App;


