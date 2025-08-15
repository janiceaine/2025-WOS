import SearchGlobe from "./SearchGlobe";
import TrotterCard from "./trotterCard";
import { countries } from "../Data";
import { useState } from "react";

function TrotterApp() {
  const [search, setSearch] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <SearchGlobe search={search} setSearch={setSearch} />

      <TrotterCard countries={filteredCountries} />
    </div>
  );
}

export default TrotterApp;
