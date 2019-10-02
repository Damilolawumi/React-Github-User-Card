import React from 'react';
import FollowerCard from './FollowerCard';
import styled from 'styled-components';

const Div = styled.div`
display:flex;
flex-wrap: wrap;
`;

class Followers extends React.Component {
   


    render() { 
        return ( 
            <Div >
                {
                    this.props.myFollowers.map(newFollower => {
                        return (
                            <FollowerCard newFollower={newFollower}/>
                        )
                    })
                }
            </Div>
         );
    }
}
 
export default Followers;