import { getPeople } from '@/lib/content';
import PersonCard from '@/components/PersonCard';

export default function PeoplePage() {
  const people = getPeople();

  // Group people by role
  const faculty = people.filter(p => p.role.toLowerCase().includes('professor') || p.role.toLowerCase().includes('investigator'));
  const students = people.filter(p => p.role.toLowerCase().includes('student'));
  const staff = people.filter(p => !p.role.toLowerCase().includes('professor') && !p.role.toLowerCase().includes('investigator') && !p.role.toLowerCase().includes('student'));

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Team</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Meet the brilliant minds driving innovation in artificial intelligence research
          </p>
        </div>

        {/* Faculty */}
        {faculty.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Faculty</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {faculty.map((person) => (
                <PersonCard key={person.slug} person={person} />
              ))}
            </div>
          </section>
        )}

        {/* Students */}
        {students.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Students</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {students.map((person) => (
                <PersonCard key={person.slug} person={person} />
              ))}
            </div>
          </section>
        )}

        {/* Staff */}
        {staff.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Staff</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {staff.map((person) => (
                <PersonCard key={person.slug} person={person} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
