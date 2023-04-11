import { ContactForm } from './ContactForm';
import { CustomHead } from '@/components/CustomHead';
import { FAQ } from './FAQ';
import { Locations } from './Locations';

export default function Contact() {
  return (
    <div>
      <CustomHead title='Contact' />
      <ContactForm />
      <Locations />
      <FAQ />
    </div>
  );
}
