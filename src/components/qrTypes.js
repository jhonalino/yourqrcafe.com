import EmailForm from './EmailForm';
import EventForm from './EventForm';
import SmsForm from './SmsForm';
import TextForm from './TextForm';
import UrlForm from './UrlForm';
import VCardForm from './VCardForm';

export default [
    {
        name: 'url',
        icon: 'web',
        form: UrlForm
    },
    {
        name: 'text',
        icon: 'text_fields',
        form: TextForm
    },
    {
        name: 'email',
        icon: 'email',
        form: EmailForm
    },
    {
        name: 'sms',
        icon: 'sms',
        form: SmsForm
    },
    {
        name: 'vcard',
        icon: 'contact_phone',
        form: VCardForm
    },
    {
        name: 'event',
        icon: 'event',
        form: EventForm
    },
]