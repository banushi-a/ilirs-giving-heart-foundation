export default function Links() {
  const sections = [
    { name: "About Us", href: "#about-us" },
    // { name: "Donate", href: "#donate" },
    { name: "Events", href: "#events" },
    // { name: "Our Work", href: "#our-work" },
    // { name: "Volunteer", href: "#volunteer" },
  ];

  return (
    <section>
      <ul className="flex justify-between align-center gap-4">
        {sections.map((section) => {
          return (
            <li
              className="hover:bg-neutral-100 hover:text-red-600 active:bg-white active:text-gh-red-800 bg-gh-red-400 text-white rounded-full px-4 my-1 lg:my-2 font-semibold transition-colors duration-300 ease-in-out w-[6rem] text-center flex justify-center items-center text-sm h-10 outline outline-gh-red-600 shadow-md shadow-gray-400"
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
