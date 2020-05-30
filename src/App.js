import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import headshot from "./static/img_placeholder.jpg";
import spotify from "./static/img_spotify.webp";
import Nav from "./Components/Nav/Nav";
import NavSister from "./Components/Nav/NavSister/NavSister";
import Landing_Page from "./Components/Landing_Page/Landing_Page";
import IG_Banner from "./Components/IG_Banner/IG_Banner";
import RedditPosts from "./Components/RedditPosts/RedditPosts";
import PortfolioPanel from "./Components/Portfolio/PortfolioPanel";
import Portfolio from "./Components/Portfolio/Portfolio";
import Music from "./Components/Music/Music";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="Content">
          <Switch>
            <Route path="/" exact component={Landing_Page} />
            <Route path="/">
              {/* <NavSister /> */}
            </Route>
          </Switch>

          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/about" exact component={About} />
          <Route path="/reddit" exact component={RedditPosts} />

          <Switch>
            <Route path="/spotify" exact component={Music} />
            <Route path="/" component={Music} />
          </Switch>
          {/* <Route path="/" exact component={Contact} /> */}
          <Contact/>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
