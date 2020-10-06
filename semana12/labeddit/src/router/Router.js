import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './../screens/HomePage/HomePage';
import SignUpPage from './../screens/SignUpPage/SignUpPage';
import FeedPage from './../screens/FeedPage/FeedPage';
import ErrorPage from './../screens/ErrorPage/ErrorPage';
import PostDetailsPage from './../screens/PostDetailsPage/PostDetailsPage';

function Router() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <HomePage/>
        </Route>
        <Route exact path='/cadastro'>
          <SignUpPage/>
        </Route>
        <Route exact path='/feed'>
          <FeedPage/>
        </Route>
        <Route exact path='/post/:postId'>
           <PostDetailsPage/> 
        </Route>
        <ErrorPage/>
      </Switch>
    </BrowserRouter>
  )
  
}

export default Router;
