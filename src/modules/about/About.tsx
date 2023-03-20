import { Article } from './Article';
import { CustomHead } from '@/components/CustomHead';
import { Collaboration } from './Collaboration';

export default function About() {
  return (
    <div>
      <CustomHead title='About' />
      <Article />
      <Collaboration />
    </div>
  );
}
