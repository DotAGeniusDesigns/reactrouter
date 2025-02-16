import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Joke from "./Joke";
import "./JokeList.css";

/** List of jokes */
const JokeList = ({ numJokesToGet = 5 }) => {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch jokes from API
  const getJokes = useCallback(async () => {
    try {
      let jokesArray = [];
      let seenJokes = new Set();

      while (jokesArray.length < numJokesToGet) {
        const res = await axios.get("https://icanhazdadjoke.com", {
          headers: { Accept: "application/json" },
        });
        let joke = res.data;

        if (!seenJokes.has(joke.id)) {
          seenJokes.add(joke.id);
          jokesArray.push({ ...joke, votes: 0 });
        }
      }

      setJokes(jokesArray);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  }, [numJokesToGet]);

  useEffect(() => {
    getJokes();
  }, [getJokes]);

  // Regenerate jokes
  const generateNewJokes = () => {
    setIsLoading(true);
    getJokes();
  };

  // Vote handling
  const vote = (id, delta) => {
    setJokes(jokes.map((joke) => (joke.id === id ? { ...joke, votes: joke.votes + delta } : joke)));
  };

  if (isLoading) {
    return (
      <div className="loading">
        <i className="fas fa-4x fa-spinner fa-spin" />
      </div>
    );
  }

  return (
    <div className="JokeList">
      <button className="JokeList-getmore" onClick={generateNewJokes}>
        Get New Jokes
      </button>

      {jokes
        .sort((a, b) => b.votes - a.votes)
        .map((joke) => (
          <Joke key={joke.id} id={joke.id} text={joke.joke} votes={joke.votes} vote={vote} />
        ))}
    </div>
  );
};

export default JokeList;
