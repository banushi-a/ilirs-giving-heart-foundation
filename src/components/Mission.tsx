import { Heart, Users, Globe } from "lucide-react";

const Mission = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description:
        "We lead with our hearts, providing support and care to those who need it most.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "Building stronger communities through unity, support, and shared responsibility.",
    },
    {
      icon: Globe,
      title: "Impact",
      description:
        "Creating lasting change that reaches every member of our community and beyond.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded in 2024, Ilir's Giving Heart Foundation was created in honor
            and memory of Ilir Banushi. Ilir was well known in the community for
            his generosity and willingness to give back to the community. In
            hopes of contiuing his generous spirit, we have worked to raise
            money that will directly impact our community and those in need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-500 hover:scale-105 group"
              >
                <div className="bg-gradient-to-br from-red-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Mission;
