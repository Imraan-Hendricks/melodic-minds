import { CustomHead } from '@/components/CustomHead';
import { Sound } from './Sound';
import { Studio } from './Studio';

export default function Services() {
  return (
    <div>
      <CustomHead title='Services' />
      <Studio />
      <Sound />
    </div>
  );
}
