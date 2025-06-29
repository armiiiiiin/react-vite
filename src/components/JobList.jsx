import JobCard from './JobCard';

const jobs = [
  { id: 1, title: 'Frontend Developer', company: 'Tech Co.', location: 'Remote' },
  { id: 2, title: 'Backend Developer', company: 'Dev Corp.', location: 'Tehran' },
  // Add more...
];

const JobList = ({ onSelect }) => (
  <div className="list-panel">
    {jobs.map((job) => (
      <JobCard key={job.id} job={job} onClick={() => onSelect(job)} />
    ))}
  </div>
);

export default JobList;
