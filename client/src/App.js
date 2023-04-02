import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Auth from './utils/auth';

import Home from './pages/Home';
import Nav from './components/Nav';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Footer from './components/Footer';
import { StoreProvider } from './utils/GlobalState';
import SingleAnime from './pages/singleAnime';
import SingleManga from './pages/singleManga';

const userData = Auth.loggedIn ? Auth.getProfile() : null;

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
      userData: userData ? JSON.stringify(userData) : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  const color = localStorage.getItem('theme');
  console.log(color)

  if (color === 'red') {
    document.documentElement.style.setProperty('--main-color', 'var(--red)');
    document.documentElement.style.setProperty('--main-color-hover', 'var(--red-hover)');
    document.documentElement.style.setProperty('--main-background', 'var(--red-background)');
    document.documentElement.style.setProperty('--text-color', 'var(--black)');
  } else if (color === 'grey') {
    document.documentElement.style.setProperty('--main-color', 'var(--black)');
    document.documentElement.style.setProperty('--main-color-hover', 'var(--black-hover)');
    document.documentElement.style.setProperty('--main-background', 'var(--black-background)');
    document.documentElement.style.setProperty('--text-color', 'var(--white)');
  } else if (color === 'yellow') {
    document.documentElement.style.setProperty('--main-color', 'var(--yellow)');
    document.documentElement.style.setProperty('--main-color-hover', 'var(--yellow-hover)');
    document.documentElement.style.setProperty('--main-background', 'var(--yellow-background)');
    document.documentElement.style.setProperty('--text-color', 'var(--black)');
  } else if (color === 'blue') {
    document.documentElement.style.setProperty('--main-color', 'var(--blue)');
    document.documentElement.style.setProperty('--main-color-hover', 'var(--blue-hover)');
    document.documentElement.style.setProperty('--main-background', 'var(--blue-background)');
    document.documentElement.style.setProperty('--text-color', 'var(--white)');
  } else if (color === 'green') {
    document.documentElement.style.setProperty('--main-color', 'var(--green)');
    document.documentElement.style.setProperty('--main-color-hover', 'var(--green-hover)');
    document.documentElement.style.setProperty('--main-background', 'var(--green-background)');
    document.documentElement.style.setProperty('--text-color', 'var(--black)');
  } else if (color === 'purple') {
    document.documentElement.style.setProperty('--main-color', 'var(--purple)');
    document.documentElement.style.setProperty('--main-color-hover', 'var(--purple-hover)');
    document.documentElement.style.setProperty('--main-background', 'var(--purple-background)');
    document.documentElement.style.setProperty('--text-color', 'var(--white)');
  } else if (color === 'pink') {
    document.documentElement.style.setProperty('--main-color', 'var(--pink)');
    document.documentElement.style.setProperty('--main-color-hover', 'var(--pink-hover)');
    document.documentElement.style.setProperty('--main-background', 'var(--pink-background)');
    document.documentElement.style.setProperty('--text-color', 'var(--black)');
  } else if (color === 'grey') {
    document.documentElement.style.setProperty('--main-color', 'var(--grey)');
    document.documentElement.style.setProperty('--main-color-hover', 'var(--grey-hover)');
    document.documentElement.style.setProperty('--main-background', 'var(--grey-background)');
    document.documentElement.style.setProperty('--text-color', 'var(--black)');
  } else {
    document.documentElement.style.setProperty('--main-color', 'var(--orange)');
    document.documentElement.style.setProperty('--main-color-hover', 'var(--orange-hover)');
    document.documentElement.style.setProperty('--main-background', 'var(--orange-background)');
    document.documentElement.style.setProperty('--text-color', 'var(--black)');
  }

  return (
    <ApolloProvider client={client}>
      <Router>
          <StoreProvider>
            <Nav />
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
                <Route 
                path="/profile" 
                element={<Profile />} 
              />
              <Route
              path="/singleAnime"
              element={<SingleAnime/>}
              />
              <Route
              path="/singleManga"
              element={<SingleManga/>}
              />
              <Route 
                path="*" 
                element={<NoMatch />}
              />
            </Routes>
          </StoreProvider>
        <Footer />
      </Router>
      
    </ApolloProvider>
  );
}

export default App;
