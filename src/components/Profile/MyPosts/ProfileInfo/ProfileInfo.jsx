import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (      
    <div>
      <div className={s.wallpapper}>
        <img src={window.location.origin + '/image/big021.png'} alt="avatar"></img>
      </div>
      <div className={s.descriptionBlock}>
        <img src={window.location.origin + '/image/rickmorty1.png'} alt="avatar" />
        <div>
          <p>Name: Rick and Morty</p>
          <p>Age: no informations</p>
          <p>Education: no informations</p>
          <p>Job: no informations</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;