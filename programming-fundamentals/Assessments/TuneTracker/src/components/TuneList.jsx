function TuneList({
  tunes,
  onToggle,
  showFavorites,
  toggleOnlyFavorites,
  onDelete,
}) {
  const visibleTunes = showFavorites
    ? tunes.filter((tune) => tune.isFavorite)
    : tunes;

  return (
    <div className="card">
      <div className="card-header d-flex align-items-center">
        <h1 className="me-auto">Your Tracks</h1>

        {tunes.length > 0 && (
          <button className="btn btn-sm btn-warning ms-2" type="button" onClick={toggleOnlyFavorites}>
            {!showFavorites ? "Show favorites" : "View All"}
          </button>
        )}
      </div>

      <div className="card-body">
        <div className="card">
          <ul className="list-group">
            {visibleTunes.map((tune) => (
              <li
                key={tune.id}
                className={`list-group-item d-flex align-items-center ${tune.isFavorite ? "list-group-item-success" : ""}`}
              >
                <span className="me-auto">
                  {tune.title} - {tune.artist}
                </span>
                <div>
                  <button className="btn btn-primary me-2" onClick={() => onToggle(tune.id)}>
                    {!tune.isFavorite ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-heart-plus-icon lucide-heart-plus"
                      >
                        <path d="m14.479 19.374-.971.939a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.219 1.49" />
                        <path d="M15 15h6" />
                        <path d="M18 12v6" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-heart-minus-icon lucide-heart-minus "
                      >
                        <path d="m14.876 18.99-1.368 1.323a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.244 1.572" />
                        <path d="M15 15h6" />
                      </svg>
                    )}
                  </button>

                  <button className="btn btn-danger" onClick={() => onDelete(tune.id)}>
                    <i className="bi bi-x-lg"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default TuneList;
