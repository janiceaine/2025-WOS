import BirdDataFilters from './BirdDataFilters';
import BirdDataItem from './BirdDataItem';
import { birdData } from "../Data/birdData";
import { useState } from 'react';

function BirdDataList() {

  const [showOnlyUnwatched, setShowOnlyUnwatched] = useState(false);

  const [birds, setAllBirds] = useState(birdData);

  const filteredBirds = showOnlyUnwatched ? birds.filter((bird) => !bird.watched) : birds;

  const handleToggleShowOnlyUnwatched = () => {
    setShowOnlyUnwatched((prev) => !prev);
  };

   const handleMarkAsWatched = (idToMark) => {
        setAllBirds((prev) => {
            return prev.map(
                (birds) => birds.id === idToMark ? { ...birds, watched: !birds.watched}
                : birds
            );
        });         
    };

    const handleDeletedBird = (idToDelete) => {
        setAllBirds((prev) => 
             prev.filter((birds) => birds.id !== idToDelete) 
            );
    };     


  return (
    <div>
      <BirdDataFilters 
      showOnlyUnwatched={showOnlyUnwatched}
      handleToggleShowOnlyUnwatched={handleToggleShowOnlyUnwatched}/>


      <div className="row">
        {filteredBirds.map((bird) => (
          <div key={bird.id} className="col-md-6 d-flex">
            <BirdDataItem
              bird={bird}
              handleMarkAsWatched={handleMarkAsWatched}
              handleDeletedBird={handleDeletedBird}
            />
          </div>
        ))}
      </div>
    </div>
  );

}
export default BirdDataList;
