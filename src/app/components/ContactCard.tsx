
import { Mail, Phone } from 'lucide-react';

interface ContactCardProps {
  name: string;
  role: string;
  email: string;
  phone: string;
  image: string;
  initials: string;
}

const ContactCard = ({ name, role, email, phone, image, initials }: ContactCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center max-w-sm">
      <div className="relative mb-4">
        <div className="w-30 h-30 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
          {image ? (
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-white font-bold text-xl">{initials}</span>
          )}
        </div>
      </div>
      
      <h3 className="font-bold text-lg text-gray-900 mb-1">{name}</h3>
      <p className="text-gray-600 text-sm mb-4">{role}</p>
      
      <div className="space-y-3 w-full">
        <a 
          href={`mailto:${email}`}
          className="flex items-center justify-center space-x-2 bg-gray-50 hover:bg-gray-100 rounded-lg p-3 transition-colors duration-200"
        >
          <Mail className="w-4 h-4 text-gray-600" />
          <span className="text-sm text-gray-700">{email}</span>
        </a>
        
        <a 
          href={`tel:${phone}`}
          className="flex items-center justify-center space-x-2 bg-green-50 hover:bg-green-100 rounded-lg p-3 transition-colors duration-200"
        >
          <Phone className="w-4 h-4 text-green-600" />
          <span className="text-sm text-green-700">{phone}</span>
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
