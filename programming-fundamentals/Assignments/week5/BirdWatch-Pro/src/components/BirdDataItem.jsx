function BirdDataItem({ bird, handleMarkAsWatched, handleDeletedBird }) {
  return (
    <div className="col-md mb-4">
        <div className="card h-100 shadow mt-3" >
        
          <img
            src={bird.image}
            alt={bird.type}
            className="card-img-top"
          />

          <div className="card-body">

            <div>
              <h3 className="card-title">{bird.type}</h3>
              <p>{bird.description}</p>
            </div>
          </div>

          <div className="card-footer text-body-secondary text-end mt-footer">
            
            <button 
                className="btn btn-sm btn-warning me-2" 
                onClick={() => handleMarkAsWatched(bird.id)}>
                    {bird.watched ? 'Mark as Unwatched' : 'Marked as Watched'}
            </button>
            
            <button   
                className="btn btn-sm btn-danger"
                onClick={() => handleDeletedBird(bird.id)}>
                    Delete Bird
            </button>

          </div>
        
        </div>
    </div>
  );
}

export default BirdDataItem;
