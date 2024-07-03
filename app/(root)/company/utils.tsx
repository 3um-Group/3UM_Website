
export const KeyTechnologiesSection: React.FC = () => {
  return (
    <div className="key-technologies-section bg-gray-200 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Key Technologies</h2>
      <p className="text-lg mb-4">At 3UM, we leverage cutting-edge technologies to drive innovation and create intelligent solutions:</p>
      <ul className="list-disc list-inside">
        <li className="text-lg mb-2">
          <strong>Artificial Intelligence:</strong> Implementing advanced AI algorithms to optimize processes and enhance user experiences.
        </li>
        <li className="text-lg mb-2">
          <strong>Blockchain:</strong> Utilizing blockchain technology for secure and transparent transactions, ensuring data integrity.
        </li>
        <li className="text-lg mb-2">
          <strong>Quantum Computing:</strong> Exploring quantum computing to solve complex problems faster and more efficiently.
        </li>
      </ul>
    </div>
  );
};

interface TeamMember {
  name: string;
  position: string;
  photo: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'John Doe',
    position: 'CEO',
    photo: '/assets/team/john_doe.jpg',
  },
  {
    name: 'Jane Smith',
    position: 'CTO',
    photo: '/assets/team/jane_smith.jpg',
  },
  {
    name: 'Alice Johnson',
    position: 'Lead Developer',
    photo: '/assets/team/alice_johnson.jpg',
  },
];

export const TeamSection: React.FC = () => {
  return (
    <div className="team-section bg-gray-100 p-8 rounded-lg shadow-lg mt-32">
      <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member text-center">
            <img
              src={member.photo}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-600">{member.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};