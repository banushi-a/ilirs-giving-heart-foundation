export default function Links() {
  const sections = [
    { name: "About Us", href: "#about-us" },
    { name: "Donate", href: "#donate" },
    { name: "Events", href: "#events" },
    // { name: "Our Work", href: "#our-work" },
    // { name: "Volunteer", href: "#volunteer" },
  ];

  return (
    <section>
      <ul className="flex flex-wrap justify-between align-center gap-4 md:gap-8 lg:gap-12">
        {sections.map((section) => {
          return (
            <li
              className="hover:bg-gh-red-600 active:bg-gh-red-800 bg-gh-red-400 text-white rounded-full px-3 py-2 my-2 font-semibold transition-colors duration-300 ease-in-out w-[6rem] text-center flex justify-center items-center"
              key={section.href}
            >
              <a href={section.href}>{section.name}</a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
