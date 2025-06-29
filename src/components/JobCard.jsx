const JobCard = ({ job }) => (
  <div style={{ border: '1px solid #ccc', margin: '1rem', padding: '1rem' }}>
    <h2>{job.title}</h2>
    <p>{job.company}</p>
    <p>{job.location}</p>
    <button>Apply Now</button>
  </div>
);

export default JobCard;
