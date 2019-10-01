import React from 'react';

class FollowerCard extends React.Component {

    render() {
        return (
            <div>
                <img src={this.props.newFollower.avatar_url}/>
                <p>{this.props.newFollower.login}</p>
                <p>{this.props.newFollower.html_url}</p>
                <p>{this.props.newFollower.location}</p>
                
            </div>
        );
    }
}

export default FollowerCard;