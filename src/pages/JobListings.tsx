
import { useState } from "react";
import { jobs } from "../data/jobs";
import JobCard from "../components/JobCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const JobListings = () => {
  const [filters, setFilters] = useState({
    modality: "",
    location: "",
    certification: "",
  });

  const filteredJobs = jobs.filter((job) => {
    // Filter by modality
    if (filters.modality && !job.title.toLowerCase().includes(filters.modality.toLowerCase())) {
      return false;
    }
    
    // Filter by location
    if (filters.location && job.location !== filters.location) {
      return false;
    }
    
    // Filter by certification
    if (filters.certification && !job.tags.some(tag => tag.toLowerCase().includes(filters.certification.toLowerCase()))) {
      return false;
    }
    
    return true;
  });

  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      modality: "",
      location: "",
      certification: "",
    });
  };

  const locations = Array.from(new Set(jobs.map(job => job.location)));
  const certifications = ["ARRT", "ARDMS", "CET"];
  const modalities = ["X-Ray", "Ultrasound", "EKG"];

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Browse our current opportunities at National Mobile X-Ray. Filter by modality, location, and certification to find the perfect fit for your career.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Filters sidebar */}
            <div className="w-full lg:w-64 mb-6 lg:mb-0 lg:mr-6">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Filters</h3>
                  <button
                    onClick={clearFilters}
                    className="text-sm text-brand-red hover:text-red-700 transition"
                  >
                    Clear all filters
                  </button>
                </div>

                {/* Modality Filter */}
                <div className="mb-4">
                  <label htmlFor="modality" className="block text-sm font-medium text-gray-700 mb-1">
                    Modality
                  </label>
                  <select
                    id="modality"
                    value={filters.modality}
                    onChange={(e) => handleFilterChange("modality", e.target.value)}
                    className="w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
                  >
                    <option value="">All Modalities</option>
                    {modalities.map((modality) => (
                      <option key={modality} value={modality}>
                        {modality}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Location Filter */}
                <div className="mb-4">
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <select
                    id="location"
                    value={filters.location}
                    onChange={(e) => handleFilterChange("location", e.target.value)}
                    className="w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
                  >
                    <option value="">All Locations</option>
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Certification Filter */}
                <div>
                  <label htmlFor="certification" className="block text-sm font-medium text-gray-700 mb-1">
                    Certification
                  </label>
                  <select
                    id="certification"
                    value={filters.certification}
                    onChange={(e) => handleFilterChange("certification", e.target.value)}
                    className="w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
                  >
                    <option value="">All Certifications</option>
                    {certifications.map((certification) => (
                      <option key={certification} value={certification}>
                        {certification}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Job listings */}
            <div className="flex-1">
              {filteredJobs.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2">
                  {filteredJobs.map((job) => (
                    <JobCard key={job.id} job={job} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg p-8 text-center border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No positions found</h3>
                  <p className="text-gray-600 mb-4">
                    We couldn't find any positions matching your filters. 
                    Please try adjusting your search criteria.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="inline-flex items-center rounded-md bg-brand-red px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 transition"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobListings;
