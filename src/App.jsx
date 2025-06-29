import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import JobList from './components/JobList';

const App = () => {
  const [search, setSearch] = useState('');

  return (
    <div>
      <Header />
      <SearchBar search={search} setSearch={setSearch} />
      <JobList search={search} />
    </div>
  );
};

export default App;
