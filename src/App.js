import React, { useEffect, useState } from "react";
import Repos from './Repos';
import './App.scss';

const App = () => {
  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('')

  useEffect(() => {
    const getRepos = async () => {
      const response = await fetch(`https://api.github.com/search/repositories?q=stars:%3E10000+language:${query}`);
      const data = await response.json();
      setRepos(data.items);
    };
    getRepos();
  }, [query]);

  

  const updateSearch = e => {
    setSearch(e.target.value);
  }
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="searchForm">
        <input className="searchBar" type="text" value={search} onChange={updateSearch} placeholder="search" />
        <button className="searchButton" type="submit">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>

      <div className="repoCards">
        {repos.map(repo => (
          <Repos
            key={repo.id}
            language={repo.language}
            repoName={repo.name}
            description={repo.description}
            forks={repo.forks}
            views={repo.watchers}
            visitRepo={repo.html_url}
          />
        ))}
      </div>

    </div>

  );
}

export default App;
