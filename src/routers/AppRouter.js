import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Home } from '../pages/Home';
import { Projects } from '../pages/Projects';
import { Skills } from '../pages/Skills';

export const AppRouter = () => {
   return (
      <Router>
         <Header />
         <div className="main">
            <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/skills" component={Skills} />
               <Route exact path="/projects" component={Projects} />
            </Switch>
         </div>
         <Footer />
      </Router>
   );
};
