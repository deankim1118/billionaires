import { API_URL } from '@/app/constants';

export async function getPersonDetails(id: string) {
  const response = await fetch(`${API_URL}/person/${id}`);
  return response.json();
}

export const convertNetWorth = (number: number) => {
  const rounded = Math.round(number / 1000);
  return `${rounded} Billion`;
};

export default async function PersonInfo({ id }: { id: string }) {
  const person = await getPersonDetails(id);

  interface IAssets {
    ticker: string;
    numberOfShares: number;
    sharePrice?: number;
  }

  return (
    <>
      <section className='flex flex-col gap-4 mb-6 bg-neutral-700 w-full p-9 text-gray-400 rounded-md shadow-md'>
        <img src={person.squareImage} alt={person.name} width='30%' />
        <h3 className='text-white font-bold text-2xl'>{person.name}</h3>
        <div className='flex flex-col gap-1 font-semibold'>
          <span>Networth: {convertNetWorth(person.netWorth)}</span>
          <span>Country: {person.country}</span>
          <span>Industry: {person.industries[0]}</span>
          <p>{person.bio}</p>
        </div>
      </section>
      <section className='bg-neutral-700 w-full p-9 text-gray-400 rounded-md shadow-md '>
        <h3 className='text-white font-bold text-2xl mb-4'>Financial Assets</h3>
        <ul className='grid grid-cols-4 gap-4'>
          {person.financialAssets?.map((asset: IAssets) => (
            <li
              key={person.id}
              className='flex flex-col gap-1 outline rounded-lg p-3'
            >
              <span>Ticker: {asset.ticker}</span>
              <span>Shares: {asset.numberOfShares.toLocaleString()}</span>
              <span>Share Price: ${asset.sharePrice?.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
