import TeamMember from "./TeamMember"; // Import the component

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Melissa Tatcher",
      role: "Marketing Expert",
      imageUrl: "team-01.png",
    },
    {
      name: "Stuard Ferrel",
      role: "Digital Marketer",
      imageUrl: "team-02.png",
    },
    {
      name: "Eva Hudson",
      role: "Creative Designer",
      imageUrl:
        "https://cdn.tailgrids.com/1.0/assets/images/team/image-07/image-03.png",
    },
    {
      name: "Eva Hudson",
      role: "Creative Designer",
      imageUrl: "team-04.png",
    },
  ];

  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[485px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Team Members
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark  sm:text-4xl md:text-[40px]">
                Our Clients
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4"
            >
              <TeamMember
                name={member.name}
                role={member.role}
                imageUrl={member.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
