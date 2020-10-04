// Libs
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from  'react-router-dom';
import axios from 'axios';
// Files for organization
import { goToFeedPage } from '../../router/goToPages';
import { useProtectedPages } from '../../hooks/useProtectedPages';
import { baseUrl, axiosConfig } from '../../constants/axiosConstants';
import Header from '../../components/Header/Header';
// Styles
import { PostCardContainer, Back, Votes, FooterPost, CommentContainer } from './styles';
// Icons
import upArrow from '../../assets/icons/up-arrow.png';
import downArrow from '../../assets/icons/down-arrow.png';
import backArrow from '../../assets/icons/back-arrow.png';


function PostDetailsPage() {

  // Custom hook
  useProtectedPages()

  // Libs
  const history = useHistory()
  const pathParams = useParams()

  // For security
  useEffect(() => {
    if(!pathParams.postId) {
      history.push('/feed')
    }
  })

  // Get post details function --(TO MAKE CUSTOM HOOK)--
  const [postDetails, setPostDetails] = useState({})
  const getPostDetails = () => {
    axios.get(`${baseUrl}/posts/${pathParams.postId}`, axiosConfig)
    .then((response) => {
      setPostDetails(response.data.post)
    })
    .catch(error => [
      console.error(error)
    ])
  }
  useEffect(() => {
    getPostDetails()
  })

  return (
    <div>
      <Header/>
      <Back onClick={() => goToFeedPage(history)} src={backArrow} alt={"Voltar para feed"}/>
      <PostCardContainer key={postDetails.id}> 
          <h2>{postDetails.title}</h2>
          <h5>by {postDetails.username}</h5>
          <p>{postDetails.text}</p>
          <FooterPost>
            <Votes>
              <img src={upArrow} alt={"Voto positivo"}/>
              <p>{postDetails.votesCount}</p>
              <img src={downArrow} alt={"Voto negativo"}/>
            </Votes>
            <h4>{postDetails.commentsCount} comentário(s)</h4>
          </FooterPost>
      </PostCardContainer>
      {postDetails.comments && postDetails.comments.map(comment => {
        return (
          <CommentContainer key={comment.id}>
            <h5>{comment.username}</h5>
            <p>{comment.text}</p>
          </CommentContainer>
        )
      })}
    </div>
  )
  
}

export default PostDetailsPage;