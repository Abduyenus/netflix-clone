import "./App.css";
import Banner from "./Components/Banner/Banner";
import Navigation from "./Components/Navigation/Navigation";
import Row from "./Components/Row/Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Banner/>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}
export default App;
