import Person from '@/components/person';

export const API_URL = 'https://billions-api.nomadcoders.workers.dev/';

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

export const convertNetWorth = (number: number) => {
  const rounded = Math.round(number / 1000);
  return `${rounded} Billion`;
};

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
