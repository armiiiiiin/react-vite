const JobCard = ({ job, onClick }) => (
  <div className="job-card" onClick={onClick}>
    <h4>{job.title}</h4>
    <p>{job.company}</p>
    <p>{job.location}</p>
  </div>
);

export default JobCard;
