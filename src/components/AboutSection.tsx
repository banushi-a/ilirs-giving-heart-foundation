export default function AboutSection() {
  const paragraphs = [
    "Founded in 2024, Ilir's Giving Heart Foundation was created in honor and memory of Ilir Banushi. Ilir was well known in the community for his generosity and willingness to give back to the community. In hopes of contiuing his generous spirit, we have worked to raise money that will directly impact our community and those in need.",
    "We recently raised over $18,000 at the 'Red Out' event at the Milton v. Edgerton varsity basketball game earlier this year. We were able to employ these funds to present grants to many boosters at the Edgerton High School. Furthermore, we partnered with Chilimania to together deliver over $40,000 in scholarships to students.",
  ];

  return (
    <section className="bg-black text-white w-screen p-8 pb-0" id="about">
      <h2 className="text-3xl lg:text-4xl font-semibold flex justify-start items-center text-gh-red-200">
        About Our Mission
      </h2>
      {paragraphs.map((p, i) => {
        return (
          <p
            key={"mission paragraphs" + i}
            className="text-lg lg:text-xl flex justify-start my-4 italic"
          >
            {p}
          </p>
        );
      })}
    </section>
  );
}
