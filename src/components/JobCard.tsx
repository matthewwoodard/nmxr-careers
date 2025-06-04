
import { Link } from "react-router-dom";
import { Job } from "../data/jobs";

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              {job.title}
            </h3>
            <div className="flex items-center text-gray-600 mb-3">
              <svg className="h-5 w-5 text-brand-red mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{job.location}</span>
            </div>
          </div>
          
          <div className="flex space-x-2">
            {job.tags.map((tag, index) => (
              <span 
                key={index}
                className="inline-flex items-center rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-medium text-brand-red"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        <p className="text-gray-600 mb-6">
          {job.summary}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            Posted: {new Date(job.postedDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric"
            })}
          </span>
          
          <Link
            to={`/open-positions/${job.id}`}
            className="rounded-md bg-white px-4 py-2 text-sm font-medium text-brand-red border border-brand-red shadow-sm hover:bg-brand-red hover:text-white transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
