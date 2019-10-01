import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import './App.css';
import User from './User';
import Followers from './followers';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      followers: []
    }
  }

  componentDidMount() {

    axios.get(`https://api.github.com/users/Damilolawumi`)
      .then((response) => {
        //set user state to reponse from backend
        this.setState({
          user: response.data,
        })
        console.log(response);
      })

    axios.get('https://api.github.com/users/Damilolawumi/followers')
      .then((response) => {
        this.setState({
          followers: response.data,
        })
        console.log(response);
      })
  }



  render() {
    return (
      <div>
        <Route exact path="/"  >
          <User myUser={this.state.user} />
        </Route>
        <Route exact path="/followers"  >
          <Followers myFollowers={this.state.followers} />
        </Route>
        {/* <Route path="/movies/:id" component={Movie} /> */}




      </div>
    );
  }
}

export default App;


