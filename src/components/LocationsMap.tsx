
import { useState } from "react";

const LocationsMap = () => {
  const [activeState, setActiveState] = useState<string | null>(null);
  
  const stateInfo = {
    TX: {
      name: "Texas",
      description: "Serving Dallas-Fort Worth, Houston, San Antonio, and Austin metropolitan areas with mobile diagnostic services.",
      image: "/placeholder.svg",
      highlights: ["Growing team in major Texas cities", "High demand for services", "Great opportunities for new grads"]
    },
    NC: {
      name: "North Carolina",
      description: "Covering Charlotte, Raleigh-Durham, Greensboro, and surrounding communities with comprehensive mobile imaging.",
      image: "/placeholder.svg",
      highlights: ["Established presence across the state", "Expanding into rural communities", "Close-knit team environment"]
    },
    VA: {
      name: "Virginia",
      description: "Operating throughout Northern Virginia, Richmond, Hampton Roads, and the Shenandoah Valley region.",
      image: "/placeholder.svg",
      highlights: ["Growing market with excellent career growth", "Diverse facility types", "Supportive regional management"]
    },
    GA: {
      name: "Georgia",
      description: "Providing services across greater Atlanta, Savannah, Augusta, and expanding into additional regions.",
      image: "/placeholder.svg",
      highlights: ["Rapidly growing territory", "Newest market with advancement opportunities", "Collaborative team atmosphere"]
    },
    KY: {
      name: "Kentucky",
      description: "Serving Louisville, Lexington, Northern Kentucky, and surrounding areas with mobile diagnostic expertise.",
      image: "/placeholder.svg",
      highlights: ["Established client relationships", "Close-knit community focus", "Excellent work-life balance"]
    }
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-brand-red font-semibold tracking-wide uppercase">Our Service Areas</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Find Your Perfect Location
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We're continuously growing our presence across the Southeast and beyond
          </p>
        </div>
        
        <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-6 lg:p-8">
              <div className="mb-6">
                <img 
                  src="/placeholder.svg" 
                  alt="Map of NMXR service areas" 
                  className="w-full rounded-lg"
                  useMap="#locationMap"
                />
                <map name="locationMap">
                  <area 
                    shape="poly" 
                    coords="100,200,150,220,170,250,120,270,90,240" 
                    alt="Texas" 
                    onMouseOver={() => setActiveState("TX")}
                    onClick={() => setActiveState("TX")}
                  />
                  {/* Other state area elements would go here */}
                </map>
              </div>
              
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {Object.keys(stateInfo).map((state) => (
                  <button
                    key={state}
                    onClick={() => setActiveState(state)}
                    className={`py-2 px-2 rounded text-center transition ${
                      activeState === state 
                        ? "bg-brand-red text-white" 
                        : "bg-white hover:bg-red-50 text-gray-800 border border-gray-200"
                    }`}
                  >
                    <span className="font-medium">{state}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 lg:p-8 border-t lg:border-t-0 lg:border-l border-gray-200">
              {activeState ? (
                <div className="animate-fade-in">
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={stateInfo[activeState as keyof typeof stateInfo].image} 
                      alt={stateInfo[activeState as keyof typeof stateInfo].name} 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {stateInfo[activeState as keyof typeof stateInfo].name}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {stateInfo[activeState as keyof typeof stateInfo].description}
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Location Highlights:</h4>
                    <ul className="space-y-1">
                      {stateInfo[activeState as keyof typeof stateInfo].highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="h-5 w-5 text-brand-red mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="text-gray-500 mb-4">
                    <svg className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium text-gray-800 mb-2">Select a state to view details</p>
                  <p className="text-gray-600">Click on any of our service areas to learn more</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsMap;
