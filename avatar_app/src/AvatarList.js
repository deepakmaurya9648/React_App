import React from 'react';
import './Avatar.css';
import 'tachyons';

const AvatarList=(props)=>{
    return (
        <div className="avatar ma4 bg-light-purple dib tc">
            <img src={`https://joeschmoe.io/api/v1/${props.id}`} alt="avatar" />
        </div>
    )
}

export default AvatarList;