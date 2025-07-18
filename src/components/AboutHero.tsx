
const AboutHero = () => {
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
              <span className="block text-white">Your Career.</span>
              <span className="block text-brand-red">Their Care.</span>
              <span className="block text-white">Real Difference.</span>
            </h1>
            <p className="mt-6 max-w-lg text-xl text-gray-300">
              Discover how your career at National Mobile X-Ray makes a meaningful impact on healthcare delivery across communities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
