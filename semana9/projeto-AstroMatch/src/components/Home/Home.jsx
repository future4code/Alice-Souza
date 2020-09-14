import React, {useState, useEffect} from 'react';
import axios from 'axios';
import love from '../../img/love.png';
import notLove from '../../img/not-love.png';
import {
  LoveOrNotLove,
  Profile
} from './styles';

const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/alice-souza-jackson";

const Home = () => {
  const [profile, setProfile] = useState([]);

  const getProfileToChoose = () => {
    axios.get(`${baseUrl}/person`)
    .then(response => {
        setProfile(response.data.profile)
    }).catch(err => {
        console.log(err.message)
    });
  };

  const onClickLike = () => {
    const body = {
      id: profile.id,
      choice: true,
  };
  axios.post(`${baseUrl}/choose-person`, body)
  .then(response => {
    getProfileToChoose()
  }).catch(err => {
      console.log(err.message)
  });
};

const onClickUnlike = () => {
  const body = {
    id: profile.id,
    choice: false,
  };
  axios.post(`${baseUrl}/choose-person`, body)
  .then(response => {
    getProfileToChoose()
  }).catch(err => {
      console.log(err.message)
  });
};
useEffect(() => {
  getProfileToChoose()
}, []);

  return (
    <div>
      {profile 
        ? <Profile>
            <img src={profile.photo} />
            <div>
              {profile.name && <h3>{profile.name}, {profile.age}</h3>}
              <p>{profile.bio}</p>
            </div>
         </Profile>
         : <p>Desculpe, não temos mais perfis para mostrar!</p>
         }
      <LoveOrNotLove>
        <img src={notLove} alt="não amei" onClick={onClickUnlike}/>
        <img src={love} alt="amei" onClick={onClickLike}/>
      </LoveOrNotLove>
    </div>
  );
};

export default Home;