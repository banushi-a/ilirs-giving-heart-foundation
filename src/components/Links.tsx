export default function Links() {
  const sections = [
    { name: "About Us", href: "#about-us" },
    { name: "Donate", href: "#donate" },
    { name: "Events", href: "#events" },
    { name: "Our Work", href: "#our-work" },
    { name: "Volunteer", href: "#volunteer" },
  ];

  return (
    <section>
      <ul className="flex flex-wrap justify-between aligign-center w-[66vw]">
        {sections.map((section) => {
          return (
            <li
              className="hover:bg-gray-200 bg-gray-100 rounded-full p-3"
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
