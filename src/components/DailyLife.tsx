
import { useState } from "react";
import { Tab } from "@headlessui/react";
import { CarFront, User, MapPin } from "lucide-react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const DailyLife = () => {
  const [categories] = useState([
    { 
      id: "day-in-life", 
      name: "Day in the Life",
      icon: User
    },
    { 
      id: "vehicle", 
      name: "Company Vehicle",
      icon: CarFront
    },
    { 
      id: "schedule", 
      name: "Scheduling",
      icon: MapPin
    }
  ]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-10">
          <h2 className="text-base text-brand-red font-semibold tracking-wide uppercase">Your Day-to-Day</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Life as a Mobile Diagnostic Professional
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Independence, flexibility, and purpose in your daily work
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Tab.Group>
            <Tab.List className="flex rounded-xl bg-white p-1 shadow-sm border border-gray-200">
              {categories.map((category) => (
                <Tab
                  key={category.id}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-3 text-sm font-medium leading-5 text-gray-700",
                      "focus:outline-none focus:ring-0",
                      selected
                        ? "bg-brand-red text-white shadow"
                        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    )
                  }
                >
                  <div className="flex flex-col items-center space-y-1 px-2">
                    <category.icon className="h-5 w-5" />
                    <span>{category.name}</span>
                  </div>
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-6">
              {/* Day in the Life Panel */}
              <Tab.Panel className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">A Typical Day as a Mobile Diagnostic Professional</h3>
                    
                    <div className="space-y-4">
                      <div className="flex">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-red flex items-center justify-center text-white font-semibold">
                          1
                        </div>
                        <div className="ml-4">
                          <p className="text-md font-medium text-gray-900">Morning Preparation</p>
                          <p className="mt-1 text-gray-600">
                            Begin your day reviewing your route, checking equipment, and ensuring your company vehicle is ready for the day.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-red flex items-center justify-center text-white font-semibold">
                          2
                        </div>
                        <div className="ml-4">
                          <p className="text-md font-medium text-gray-900">Facility Visits</p>
                          <p className="mt-1 text-gray-600">
                            Drive to each scheduled location, unload equipment with assisted lifting technology, and perform diagnostic imaging.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-red flex items-center justify-center text-white font-semibold">
                          3
                        </div>
                        <div className="ml-4">
                          <p className="text-md font-medium text-gray-900">Image Processing</p>
                          <p className="mt-1 text-gray-600">
                            Transmit studies wirelessly via our PACS system for immediate radiologist review and continue to your next location.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-red flex items-center justify-center text-white font-semibold">
                          4
                        </div>
                        <div className="ml-4">
                          <p className="text-md font-medium text-gray-900">Wrap-Up</p>
                          <p className="mt-1 text-gray-600">
                            Complete your scheduled visits, finalize any outstanding documentation, and prepare for the next day.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <p className="text-gray-700 italic">
                        "About 60-70% of your day will be spent traveling between locations, with the remainder conducting diagnostic exams. Independence and decision-making are built into your workflow."
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <img 
                      src="/lovable-uploads/daily-routine.jpg" 
                      alt="Mobile technologist working" 
                      className="rounded-lg shadow-sm w-full"
                    />
                  </div>
                </div>
              </Tab.Panel>
              
              {/* Vehicle Panel */}
              <Tab.Panel className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <img 
                        src="/lovable-uploads/subaru-logo.png" 
                        alt="Subaru" 
                        className="h-8 mr-3"
                      />
                      <h3 className="text-xl font-bold text-gray-900">2025 Subaru Forester</h3>
                    </div>
                    
                    <p className="text-gray-700 mb-6">
                      All mobile technologists drive our custom-outfitted 2025 Subaru Foresters, specially designed for diagnostic equipment transport and technologist comfort.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-4 rounded-md border-l-4 border-brand-red">
                        <h4 className="font-semibold text-gray-900 mb-1">Safety-First Features</h4>
                        <p className="text-gray-600 text-sm">
                          Subaru EyeSight® Driver Assist Technology, 360° camera system, and advanced safety features for confident driving in all conditions
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-md border-l-4 border-brand-red">
                        <h4 className="font-semibold text-gray-900 mb-1">Equipment Support</h4>
                        <p className="text-gray-600 text-sm">
                          Custom winch system to reduce physical strain, inverter for equipment charging, and customized layout for diagnostic equipment
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-md border-l-4 border-brand-red">
                        <h4 className="font-semibold text-gray-900 mb-1">Technologist Comfort</h4>
                        <p className="text-gray-600 text-sm">
                          Climate control, ergonomic features, and thoughtful organization to make your mobile workplace comfortable and efficient
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <img 
                      src="/lovable-uploads/subaru-forester.jpg" 
                      alt="2025 Subaru Forester" 
                      className="rounded-lg shadow-sm w-full mb-4"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <img 
                        src="/lovable-uploads/vehicle-interior.jpg" 
                        alt="Vehicle Interior" 
                        className="rounded-lg shadow-sm w-full h-32 object-cover"
                      />
                      <img 
                        src="/lovable-uploads/equipment-loading.jpg" 
                        alt="Equipment Loading" 
                        className="rounded-lg shadow-sm w-full h-32 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              
              {/* Scheduling Panel */}
              <Tab.Panel className="rounded-xl bg-white p-6 shadow-sm border border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Scheduling for Work-Life Balance</h3>
                    
                    <p className="text-gray-700 mb-6">
                      At National Mobile X-Ray, we understand the importance of flexibility and work-life balance. Our scheduling approach is designed to give you control and predictability.
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-red-100 flex items-center justify-center text-brand-red">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-md font-medium text-gray-900">Regional Assignment</p>
                          <p className="mt-1 text-sm text-gray-600">
                            You'll be assigned to a specific region, typically within 50-75 miles of your home base, minimizing excessive travel.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-red-100 flex items-center justify-center text-brand-red">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-md font-medium text-gray-900">Predictable Routes</p>
                          <p className="mt-1 text-sm text-gray-600">
                            Many techs work with the same facilities regularly, building relationships and becoming familiar with their specific needs.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-red-100 flex items-center justify-center text-brand-red">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-md font-medium text-gray-900">Weekend Coverage Options</p>
                          <p className="mt-1 text-sm text-gray-600">
                            Some positions include weekend rotations with premium pay, while others are weekday-only. Choose what works for your lifestyle.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-red-100 flex items-center justify-center text-brand-red">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-md font-medium text-gray-900">On-Call Opportunities</p>
                          <p className="mt-1 text-sm text-gray-600">
                            Enhance your earnings with optional on-call shifts. Perfect for those looking to maximize their income.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <img 
                      src="/lovable-uploads/scheduling-map.jpg" 
                      alt="Regional scheduling map" 
                      className="rounded-lg shadow-sm w-full mb-4"
                    />
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">Schedule Example</h4>
                      <div className="grid grid-cols-5 gap-1 text-sm">
                        <div className="bg-white p-2 rounded border border-gray-200 text-center">
                          <span className="font-medium">Mon</span>
                          <p className="text-xs text-gray-600 mt-1">8am - 4pm</p>
                        </div>
                        <div className="bg-white p-2 rounded border border-gray-200 text-center">
                          <span className="font-medium">Tue</span>
                          <p className="text-xs text-gray-600 mt-1">8am - 4pm</p>
                        </div>
                        <div className="bg-white p-2 rounded border border-gray-200 text-center">
                          <span className="font-medium">Wed</span>
                          <p className="text-xs text-gray-600 mt-1">8am - 4pm</p>
                        </div>
                        <div className="bg-white p-2 rounded border border-gray-200 text-center">
                          <span className="font-medium">Thu</span>
                          <p className="text-xs text-gray-600 mt-1">8am - 4pm</p>
                        </div>
                        <div className="bg-white p-2 rounded border border-gray-200 text-center">
                          <span className="font-medium">Fri</span>
                          <p className="text-xs text-gray-600 mt-1">8am - 4pm</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 mt-2 italic text-center">
                        *Weekend rotation schedules available with premium pay
                      </p>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
};

export default DailyLife;
