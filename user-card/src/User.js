import React from 'react';

class User extends React.Component {
   
    render() { 
        return ( 
            <div>
                <img src={this.props.myUser.avatar_url}/>
                <p>{this.props.myUser.name}</p>
                <p>{this.props.myUser.login}</p>
                <p>{this.props.myUser.location}</p>
                <p>{this.props.myUser.html_url}</p>
                <p>{this.props.myUser.followers}</p>
                <p>{this.props.myUser.following}</p>
                <p>{this.props.myUser.bio}</p>
            </div>
         );
    }
}
 
export default User;