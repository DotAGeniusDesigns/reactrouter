import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import Nav from "./Nav";
import "./App.css";

function App() {
  const dogs = [
    {
      name: "Whiskey",
      age: 5,
      src: "/whiskey.jpg", // Referencing images in /public
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!",
      ],
    },
    {
      name: "Duke",
      age: 3,
      src: "/duke.jpg",
      facts: ["Duke believes that ball is life.", "Duke likes snow.", "Duke enjoys pawing other dogs."],
    },
    {
      name: "Perry",
      age: 4,
      src: "/perry.jpg",
      facts: ["Perry loves all humans.", "Perry demolishes all snacks.", "Perry hates the rain."],
    },
  ];

  return (
    <Router>
      <Nav dogs={dogs} />
      <Switch>
        <Route exact path="/dogs">
          <DogList dogs={dogs} />
        </Route>
        <Route path="/dogs/:name">
          <DogDetails dogs={dogs} />
        </Route>
        <Redirect to="/dogs" />
      </Switch>
    </Router>
  );
}

export default App;
