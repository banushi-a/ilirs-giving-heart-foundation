import Button from "./Button";

export default function VolunteerSection() {
  return (
    <section className="bg-neutral-700 text-white w-full grid grid-cols-2 gap-y-4 py-10 px-12">
      <div className="col-span-2 md:col-span-1 md:border-r-2 border-gh-red-800 md:px-12">
        <h2 className="text-2xl font-semibold text-gh-red-400">
          Interested in Volunteering?
        </h2>
        <p className="italic">
          Sign up to recieve updates whenever we are looking for volunteers to
          assist in our mission
        </p>
      </div>
      <div className="flex items-center justify-start md:justify-center col-span-2 md:col-span-1 md:border-l-2 border-gh-red-800 md:p-2">
        <Button
          href={"https://forms.fillout.com/t/vvjaUXLWRWus"}
          target={"_blank"}
          text={"Volunteer Sign Up Form"}
          extraStyles={"px-10"}
        />
      </div>
    </section>
  );
}
