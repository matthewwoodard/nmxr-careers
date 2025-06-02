
import { Phone, Mail, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-lg font-medium text-gray-500 mb-2">Help</h2>
        <h3 className="text-3xl font-bold text-gray-900">Get in Touch</h3>
        <p className="mt-4 text-gray-600">We're here to assist you with your inquiries.</p>
      </div>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <Mail className="h-6 w-6 text-gray-900 mr-3" />
          <p className="text-gray-600">hello@example.io</p>
        </div>
        <div className="flex items-start">
          <Phone className="h-6 w-6 text-gray-900 mr-3" />
          <p className="text-gray-600">+1 (833) 431-4675</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
