const JobDetails = ({ job }) => {
  if (!job) return <div className="details-panel">Select a job to view details.</div>;

  return (
    <div className="details-panel">
      <h2>{job.title}</h2>
      <h3>{job.company}</h3>
      <p><strong>Location:</strong> {job.location}</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 🎯</p>
      <button>Apply Now</button>
    </div>
  );
};

export default JobDetails;
