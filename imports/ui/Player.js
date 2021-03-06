import React from "react";
import {Players} from "../api/players";
import PropTypes from "prop-types"

export default class Player extends React.Component{
    render(){
        return (
        <div key = {this.props.player._id} className = "item">
            <p>The player {this.props.player.name} have {this.props.player.score}</p>
            <button onClick={() => {
                Players.update({_id : this.props.player._id}, {$inc: {score: 1}});
            }}>+1</button>
            <button onClick={() => {
                Players.update({_id : this.props.player._id}, {$inc: {score: -1}});
            }}>-1</button>
            <button onClick={() => {alert("Remove");
                Players.remove({_id: this.props.player._id})}}>X</button></div>)
    }

}

Players.PropTypes = {
    player: PropTypes.object.isRequired
};