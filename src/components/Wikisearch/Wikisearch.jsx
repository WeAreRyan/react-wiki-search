import "../Wikisearch/Wikisearch.css";
import { useState } from "react";

export default function Wikisearch() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [searchInfo, setSearchInfo] = useState({});

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search === "") return;

    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json*origin=*&&srlimi=20&srsearch=${search}`;
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw Error(response.statusText);
    }

    const json = await response.json();
    console.log(json);
    setResults(json.query.search);
    setSearchInfo(json.query.searchinfo);
  };

  return (
    <>
      <div className="Wikisearch">
        <h1 className="banner">Wiki Searcher</h1>
        <form className="search-box" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="What are you looking for?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        {searchInfo.totalshits ? (
          <p>Search Results: {searchInfo.totalhits} </p>
        ) : (
          ""
        )}
        <div className="results">
          {results.map((result, i) => {
            const url= `https://en.wikipedia.org/?curid=${result.pageid}`;
            return (
              <div className="result" key={i}>
                <h3>{ result.title }</h3>
                <p dangerouslySetInnerHTML={{ __html: result.snippet }}>
                 
                </p>
                <a href={url} target="_blank" rel="noreferrer">ReadMore</a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
