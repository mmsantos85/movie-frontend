import React from 'react';
import Row from '../components/Row';
import useFetch from '../custom hooks/useFetch';
import requests from '../Requests';
import '../styles/MoviePage.css';

function MoviePage() {
  const Action = useFetch(requests.fetchActionMovies);
  const Comedy = useFetch(requests.fetchComedyMovies);
  const Thriller = useFetch(requests.fetchThrillerMovies);
  const Family = useFetch(requests.fetchFamilyMovies);
  const Fantasy = useFetch(requests.fetchFantasyMovies);
  const Crime = useFetch(requests.fetchCrimeMovies);
  const Adventure = useFetch(requests.fetchAdventureMovies);
  return (
    <div className="banner__contents__genres">
      <Row genre={Comedy} type="Komedie" />
      <Row genre={Action} type="Actie" />
      <Row genre={Thriller} type="Thriller" />
      <Row genre={Family} type="Familie" />
      <Row genre={Fantasy} type="Fantasie" />
      <Row genre={Crime} type="Misdaad" />
      <Row genre={Adventure} type="Avontuur" />
    </div>
  );
}

export default MoviePage;
