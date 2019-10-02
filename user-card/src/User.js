import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
width:400px;
margin:auto;
`;


class User extends React.Component {
   
    render() { 
        return ( 
            <Div>
                <img src={this.props.myUser.avatar_url}/>
                <p>{this.props.myUser.name}</p>
                <p>{this.props.myUser.login}</p>
                <p>{this.props.myUser.location}</p>
                <p>{this.props.myUser.html_url}</p>
                <p>{this.props.myUser.followers}</p>
                <p>{this.props.myUser.following}</p>
                <p>{this.props.myUser.bio}</p>
            </Div>
         );
    }
}
 
export default User;