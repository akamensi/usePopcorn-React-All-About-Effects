import ListBox from "./ListBox";
import WatchedBox from "./WatchedBox";

//Structural Component
const Main = ({ tempWatchedData, average, movies }) => {
  return (
    <main className="main">
      <ListBox movies={movies} />
      <WatchedBox tempWatchedData={tempWatchedData} average={average} />
    </main>
  );
};

export default Main;
