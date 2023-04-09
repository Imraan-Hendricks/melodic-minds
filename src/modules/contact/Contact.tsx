import { ContactForm } from './ContactForm';
import { CustomHead } from '@/components/CustomHead';

export default function Contact() {
  return (
    <div>
      <CustomHead title='Contact' />
      <ContactForm />
    </div>
  );
}
