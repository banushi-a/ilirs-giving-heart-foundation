import { Button } from "@/src/components/ui/button";
import { Heart, Users, Calendar, ArrowRight } from "lucide-react";

const GetInvolved = () => {
  const ways = [
    {
      icon: Heart,
      title: "Make a Donation",
      description:
        "Your financial support directly helps families in need and funds our community programs.",
      action: "Donate Now",
      link: "https://www.zeffy.com/en-US/donation-form/b5b13e8a-4447-46ca-955f-9ef805e10aee",
      color: "from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600",
    },
    {
      icon: Users,
      title: "Volunteer",
      description:
        "Join our team of dedicated volunteers and make a hands-on difference in your community.",
      action: "Sign Up",
      link: "", // TODO
      color: "from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600",
    },
    {
      icon: Calendar,
      title: "Attend Events",
      description:
        "Participate in our fundraising events and community gatherings throughout the year.",
      action: "View Events",
      link: "", // TODO
      color:
        "from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Involved
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            There are many ways to support our mission and make a meaningful
            impact. Choose how you'd like to help create positive change in our
            community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {ways.map((way, index) => {
            const IconComponent = way.icon;

            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 group border border-gray-100"
              >
                <div
                  className={`bg-gradient-to-br ${way.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {way.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6 text-center">
                  {way.description}
                </p>

                <a
                  className="block text-center"
                  href={way.link}
                  target="_blank"
                >
                  <Button
                    className={`bg-gradient-to-r ${way.color} text-white px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300 group shadow-lg`}
                  >
                    {way.action}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            );
          })}
        </div>

        {/* Featured Donation CTA */}
        <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl max-w-4xl mx-auto">
          <Heart
            className="w-16 h-16 mx-auto mb-6 text-white/90"
            fill="currentColor"
          />
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Every Dollar Makes a Difference
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Your generous donation helps us continue our mission of supporting
            families and building stronger communities. Together, we can create
            lasting change.
          </p>
          <a
            href="https://www.zeffy.com/en-US/donation-form/b5b13e8a-4447-46ca-955f-9ef805e10aee"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-white text-red-500 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Donate Today
              <Heart className="ml-2 w-5 h-5" fill="currentColor" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
