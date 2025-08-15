import { useState } from "react";
import AddTune from "./AddTune";
import TuneList from "./TuneList";

function TuneTracker() {
  const [tunes, setTunes] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const handleAddTune = (track) => {
    setTunes([...tunes, track]);
  };

  const handleToggle = (id) => {
    setTunes(
      tunes.map((tune) =>
        tune.id === id ? { ...tune, isFavorite: !tune.isFavorite } : tune
      )
    );
  };

  const handleToggleOnlyFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  const handleDelete = (id) => {
    setTunes(tunes.filter((tune) => tune.id !== id));
  };

  return (
    <div>
      <AddTune onAddTune={handleAddTune} />

      {tunes.length === 0 ? (
        <p>Your TuneTracker is empty. Add a track above.</p>
      ) : (
        <TuneList
            tunes={tunes}
            onToggle={handleToggle}
            showFavorites={showFavorites}
            toggleOnlyFavorites={handleToggleOnlyFavorites}
            onDelete={handleDelete}
          />
      )}
    </div>
  );
}

export default TuneTracker;
