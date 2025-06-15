import { Button } from "@/src/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* Background decorative elements - heart shapes and gentle patterns */}
      <div className="absolute top-10 left-10 opacity-25">
        <svg
          width="100"
          height="100"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-red-400"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
      <div className="absolute top-32 right-16 opacity-20">
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-blue-400"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
      <div className="absolute bottom-20 left-32 opacity-30">
        <svg
          width="120"
          height="120"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-green-400"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
      <div className="absolute bottom-32 right-20 opacity-25">
        <svg
          width="90"
          height="90"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-red-400"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="hover:scale-110 transition-transform duration-300">
              <img
                src="/IlirsGivingHeartFoundation.png"
                alt="Ilir's Giving Heart Foundation Logo"
                className="w-24 h-24 md:w-32 md:h-32"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Ilir's Giving Heart
            <span className="block text-red-500">Foundation</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Spreading love, hope, and support to families in need. Together, we
            create lasting change in our communities through compassion and
            action.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              target="_blank"
              href="https://www.zeffy.com/en-US/donation-form/b5b13e8a-4447-46ca-955f-9ef805e10aee"
            >
              <Button
                size="lg"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                Donate Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </a>
          </div>

          {/* #IlirProud hashtag */}
          <a
            target="_blank"
            href="https://www.facebook.com/hashtag/ilirproud"
            className="mt-10 inline-block bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg"
          >
            <span className="text-blue-600 font-bold text-lg">#IlirProud</span>
            <span className="text-gray-600 ml-2">• Join our movement</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
