import React, { useState } from 'react';
import Header from './components/Header';
import JobList from './components/JobList';
import JobDetails from './components/JobDetails';
import './App.css';

const App = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <>
      <Header />
      <div className="split-layout">
        <JobList onSelect={setSelectedJob} />
        <JobDetails job={selectedJob} />
      </div>
    </>
  );
};

export default App;
