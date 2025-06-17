import { Button } from "@/src/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const RecentEvents = () => {
  const events = [
    {
      title: "Ilir's Celebration of Life Blockparty Fundraiser",
      date: "June 22, 2024",
      time: "All Day",
      description:
        "Once met, never forgotten. Ilir was known for bringing people together and helping anyone in need. We celebrated his life with what he loved most: family, friends, and music. The block party tribute featured performances by Pink Houses, The Gary Band, Mad Tadders, and special guest Jason Stubbs.",
      image: "/2bros-outside.jpg",
      status: "completed",
    },
    {
      title: "Red Out Milton v. Edgerton Basketball Game Fundraiser",
      date: "January 22, 2024",
      time: "8:00 PM",
      description:
        "Edgerton and Milton basketball teams honored Ilir Banushi at this conference basketball game. The community showed up wearing red apparel in memory of Ilir, all proceeds being donated back into the community.\nAt the game, Ilir's youngest son, Brenon, played alongside his teammates to lead Milton to victory. Had the game been played a couple decades before, Ilir would be seen playing ball on the Edgerton side.",
      image: "/red-out-team.png",
      status: "completed",
    },
  ];

  return (
    <section
      className="py-20 bg-gradient-to-br from-blue-50 to-green-50"
      id="recent-events"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Recent Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how we're making a difference in our community through various
            initiatives and events.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
                    event.status === "completed"
                      ? "bg-green-100 text-green-800"
                      : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {event.status === "completed" ? "Completed" : "Upcoming"}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-500 transition-colors">
                  {event.title}
                </h3>

                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{event.date}</span>
                </div>

                <div className="flex items-center text-gray-600 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">{event.time}</span>
                </div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {event.description}
                </p>
                {/* TODO */}
                {/* <Button
                  variant="outline"
                  className="group-hover:bg-red-500 group-hover:text-white group-hover:border-red-500 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button> */}
              </div>
            </div>
          ))}
        </div>

        {events.length > 3 && (
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300"
            >
              View All Events
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentEvents;
