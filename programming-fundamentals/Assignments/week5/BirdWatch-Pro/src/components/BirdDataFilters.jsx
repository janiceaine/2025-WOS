function BirdDataFilters({ showOnlyUnwatched, handleToggleShowOnlyUnwatched }) {
  return (
    <div className="card bg-black">
        <div className="card-body text-end">
          <button 
          className={`btn btn-primary  ${showOnlyUnwatched ? 'btn-primary' : 'btn-success'}`}
          onClick={handleToggleShowOnlyUnwatched} 
          >{showOnlyUnwatched ? 'Show All Birds' : 'Hide Watched'}</button>
        </div>
    </div>
  )
}

export default BirdDataFilters