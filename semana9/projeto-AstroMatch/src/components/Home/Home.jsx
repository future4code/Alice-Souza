import React, {useState, useEffect} from 'react';
import axios from 'axios';

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
        ? <div>
          <img src={profile.photo} />
          <div>
            <p>{profile.bio}</p>
            {profile.name && <p>{profile.name}, {profile.age}</p>}
          </div>
      </div> 
      : <p>Por enquanto nao temos mais perfis para mostrar</p>}
      <div>
        {profile ? <button onClick={onClickLike}>Like</button> : <button>Like</button>}
        {profile ? <button onClick={onClickUnlike}>Dislike</button> : <button>Dislike</button>}
      </div>
    </div>
  );
};

export default Home;