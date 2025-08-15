function TrotterCard({ countries }) {
  return (
    <div className="mt-3">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th colSpan={2}>
              Search Results: <strong>{countries.length}</strong>
            </th>
          </tr>
          <tr>
            <th>CODE</th>
            <th>COUNTRY</th>
          </tr>
        </thead>

        <tbody>
          {countries.length > 0 ? (
            countries.map((country) => (
              <tr key={country.id}>
                <td>{country.id}</td>
                <td>{country.name}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" className="text-center text-muted">
                No countries found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TrotterCard;
