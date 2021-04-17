import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from '../components/AppBar';
import ContactsView from '../views/ContactsView';
import HomeView from '../views/HomeView';
import LoginView from '../views/LoginView';
import RegisterView from '../views/RegisterView';

const App = () => (
  <div>
    <AppBar />
    <Switch>
      <Route path="/" exact component={HomeView} />
      <Route path="/register" component={RegisterView} />
      <Route path="/login" component={LoginView} />
      <Route path="/contacts" component={ContactsView} />
    </Switch>
  </div>
);

export default App;
