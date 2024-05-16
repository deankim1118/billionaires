import PersonInfo from '@/components/person-info';

interface IParams {
  params: { id: string };
}

export default function PersonDetail({ params: { id } }: IParams) {
  return (
    <div>
      <PersonInfo id={id} />;
    </div>
  );
}
