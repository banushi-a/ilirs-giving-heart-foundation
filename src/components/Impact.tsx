import { Heart, Users, DollarSign } from "lucide-react";

const Impact = () => {
  const stats = [
    {
      icon: Heart,
      number: "20+",
      label: "Scholarships Awarded",
      description: "Direct support provided to aspiring students",
    },
    {
      icon: Users,
      number: "100+",
      label: "Event Volunteers",
      description: "Dedicated community members making a difference",
    },
    {
      icon: DollarSign,
      number: "5+",
      label: "Causes Supported",
      description:
        "Gifts for kids, Verterans kitchen, Lunch in the Park, and various local families",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-red-500 to-pink-500 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Impact</h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Every donation, volunteer hour, and act of kindness creates ripples
            of positive change. See how together we're transforming lives and
            strengthening communities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <div className="text-5xl md:text-6xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.number}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-white/90">
                  {stat.label}
                </h3>
                <p className="text-white/80 leading-relaxed max-w-xs mx-auto">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        <a
          className="mt-16 flex justify-center"
          target="_blank"
          href="https://www.facebook.com/hashtag/ilirproud"
        >
          <div className="flex items-center w-fit bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full text-center">
            <p className="text-2xl font-bold">#IlirProud</p>
            <p className="text-white/90 ml-3">• Share stories with us</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Impact;
