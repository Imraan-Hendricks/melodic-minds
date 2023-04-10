import { ContactForm } from './ContactForm';
import { CustomHead } from '@/components/CustomHead';
import { Locations } from './Locations';

export default function Contact() {
  return (
    <div>
      <CustomHead title='Contact' />
      <ContactForm />
      <Locations />
    </div>
  );
}
