import Person from '@/components/person';
import { convertNetWorth } from '@/components/person-info';
import { API_URL } from './constants';

const getPersons = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
};

interface personInfo {
  id: string;
  squareImage: string;
  name: string;
  netWorth: number;
  industries: string[];
}

export default async function Home() {
  const persons = await getPersons();

  return (
    <ul className='grid grid-cols-4 gap-4 '>
      {persons.map((person: personInfo) => (
        <Person
          key={person.id}
          img={person.squareImage}
          alt={person.name}
          id={person.id}
          name={person.name}
          netWorth={convertNetWorth(person.netWorth)}
          industry={person.industries}
        />
      ))}
    </ul>
  );
}
