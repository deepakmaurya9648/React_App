import React from 'react';
import ReactDom from 'react-dom';
import './Avatar.css';
import 'tachyons';
import AvatarList from './AvatarList';

const Avatar=()=>{
    let arr=[];
    for(let i=0;i<1000;i++){
        arr.push(i);
    }
    const arrAvatar=arr.map((card,i)=>{
        return <AvatarList id={arr[i]} />
    })
    return (
       <div className="tc">
           <h1 className="tc bg-white-90 pa3">Welcome to avatar world</h1>
           {arrAvatar}
       </div>
    )
}


export default Avatar;