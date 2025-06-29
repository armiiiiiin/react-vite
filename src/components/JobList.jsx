import JobCard from './JobCard';

const jobs = [
  { id: 1, title: 'Frontend Developer', company: 'Tech Co.', location: 'Remote' },
  { id: 2, title: 'Backend Developer', company: 'Dev Corp.', location: 'Tehran' },
  // Add more...
];

const JobList = ({ search }) => {
  const filtered = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {filtered.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
