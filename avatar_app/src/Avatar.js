import React from 'react';
import ReactDom from 'react-dom';
import './Avatar.css';
import 'tachyons';
import AvatarList from './AvatarList';
import Header from './Header';
const Avatar=()=>{
    let arr=[];
    for(let i=0;i<100;i++){
        arr.push(i);
    }
    const arrAvatar=arr.map((card,i)=>{
        return <AvatarList id={arr[i]} />
    })
    return (

       <div className="tc">
           <Header/>
           {arrAvatar}
       </div>
    )
}


export default Avatar;