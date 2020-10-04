// Libs
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
// File for organization
import { baseUrl, axiosConfig } from '../../constants/axiosConstants';
// Styles
import { FooterPost, PostCardContainer, TextsPost, Loading } from './styles';
// Icons
import upArrow from '../../assets/icons/up-arrow.png';
import downArrow from '../../assets/icons/down-arrow.png';
 
function PostCard() {

  // Lib
  const history = useHistory()

  // Get posts function
  const [isLoading, setIsLoading] = useState(false)
  const [posts, setPosts] = useState([])
  const getPosts = () => {
    setIsLoading(true)
    axios.get(`${baseUrl}/posts`, axiosConfig)
    .then((response) => {
      setPosts(response.data.posts)
      setIsLoading(false)
    })
    .catch((error) => {
      console.error(error)
    })
  }
  useEffect(() => {
    getPosts()
  }, [])

  // Go to Post details - click
  const openPostDetails = (postId) => {
    if(postId === postId) {
      history.push(`/post/${postId}`) 
    } else {
      return false
    }
  }

  return (
    <div>
      {isLoading && <Loading>Carregando posts... <br></br> <progress/></Loading>}
      {posts
        .filter(post => {return typeof post.title === 'string'} )
        .map(post => {
          return (
            <PostCardContainer onClick={() => openPostDetails(post.id)} key={post.id}>
              <TextsPost>
                <h3>{post.title}</h3>
                <h5>by {post.username}</h5> 
                <p>{post.text}</p>
              </TextsPost>
              <FooterPost>
                <div>
                  <img src={upArrow} alt={"Voto positivo"}/>
                  <p>{post.votesCount}</p>
                  <img src={downArrow} alt={"Voto negativo"}/>
                </div>
                <button onClick={() => openPostDetails(post.id)}>{post.commentsCount} comentário(s)</button>
              </FooterPost>
            </PostCardContainer>
          )
        })
      }
    </div>
  )

}

export default PostCard;