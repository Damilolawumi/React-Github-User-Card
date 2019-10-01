import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
margin: 10px;
width: 350px;
box-shadow: 2px 2px 4px 2px;
`;

const Image = styled.img`
width: 350px;
`;

class FollowerCard extends React.Component {

    render() {
        return (

            <Div>
                <Image src={this.props.newFollower.avatar_url} />
                <p>{this.props.newFollower.login}</p>
                <p>{this.props.newFollower.html_url}</p>
                <p>{this.props.newFollower.location}</p>

            </Div>

        );
    }
}

export default FollowerCard;