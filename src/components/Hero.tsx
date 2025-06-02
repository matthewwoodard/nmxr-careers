
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-gray-50">
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/381a3d81-6e29-4fc0-86f3-cba05216e7c5.png" 
          alt="Healthcare professionals examining X-ray" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60 mix-blend-multiply"></div>
      </div>
      <div className="relative">
        <div className="container mx-auto px-4 py-32 sm:px-6 sm:py-40 lg:px-8">
          <div className="lg:w-2/3 max-w-2xl text-white">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block text-white">Mobile Imaging.</span>
              <span className="block text-brand-red">Flexible Careers.</span>
              <span className="block text-white">Real Impact.</span>
            </h1>
            <p className="mt-6 max-w-lg text-xl text-gray-300">
              Join National Mobile X-Ray and deliver essential diagnostic services across five states. Enjoy flexible schedules, competitive pay, and a supportive team.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/jobs"
                className="rounded-md bg-brand-red px-8 py-3 text-base font-medium text-white shadow-sm hover:bg-red-700 transition"
              >
                View Open Positions
              </Link>
              <Link
                to="/about"
                className="rounded-md bg-white/10 backdrop-blur-sm px-8 py-3 text-base font-medium text-white border border-white/30 hover:bg-white/20 transition flex items-center"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
