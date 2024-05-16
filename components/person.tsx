import Link from 'next/link';
import styles from './person.module.css';

interface personInfo {
  img: string;
  id: string;
  alt: string;
  name: string;
  netWorth: string;
  industry: string[];
}

export default function Person({
  img,
  id,
  alt,
  name,
  netWorth,
  industry,
}: personInfo) {
  return (
    <li className={styles.personList}>
      <Link href={`/person/${id}`}>
        <img src={img} alt={alt} />
      </Link>
      <h3 className={styles.personTitle}>{name}</h3>
      <div className={styles.personInfo}>
        <span>
          {netWorth} / {industry}
        </span>
      </div>
    </li>
  );
}
