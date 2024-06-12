import { v1 as uuidv1} from 'uuid';
import Link from 'next/link';
export default function Home() {

  return (
      <div>

      <Link className="border p-2 m-10" href={`/${uuidv1()}`}>
      Create Room
      </Link>
      </div>
  );
}
