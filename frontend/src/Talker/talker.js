import { API } from '../server';

export const getGenres = () => {
    return fetch(`${API}/genres`, { method: "GET" })
      .then(response => {
        console.log(response.json);
        return response.json();
      })
      .catch(err => console.log(err));
};
  

export const getMovies = () => {
    return fetch(`${API}/movies`, { method: "GET" })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
};

export const getAnimations = () => {
  return fetch(`${API}/genre/60c0bd812143036a22c769c2`, { method: "GET" })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
};

export const getMystery = () => {
  return fetch(`${API}/genre/60c0bd812143036a22c769c9`, { method: "GET" })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
};

export const getBiography = () => {
  return fetch(`${API}/genre/60c0bd812143036a22c769c3`, { method: "GET" })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
};

export const getAdventure = () => {
  return fetch(`${API}/genre/60c0bd812143036a22c769c4`, { method: "GET" })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
};

export const getComedy = () => {
  return fetch(`${API}/genre/60c0bd812143036a22c769c5`, { method: "GET" })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
};

export const getAction = () => {
  return fetch(`${API}/genre/60c0bd812143036a22c769c6`, { method: "GET" })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
};

export const getCrime = () => {
  return fetch(`${API}/genre/60c0bd812143036a22c769c7`, { method: "GET" })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
};

export const getDrama = () => {
  return fetch(`${API}/genre/60c0bd812143036a22c769c8`, { method: "GET" })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
};
