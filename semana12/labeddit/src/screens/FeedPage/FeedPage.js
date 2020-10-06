import React from 'react';
// Files for organization
import { useProtectedPages } from '../../hooks/useProtectedPages';
import FormCreatePost from '../../components/FormCreatePost/FormCreatePost'
import Header from '../../components/Header/Header';
import PostCard from '../../components/PostCard/PostCard'

function FeedPage() {

  // Custom hook
  useProtectedPages()

  return (
    <div>
      <Header/>
      <FormCreatePost/>
      <PostCard/>
    </div>
  )
  
}

export default FeedPage;