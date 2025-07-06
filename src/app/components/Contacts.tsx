import ContactHeader from "./ContactHeader";
import ContactCard from "./ContactCard";

const Contact = () => {
    const contacts = [
        {
        name: "Alba Manutenção",
        role: "Serviços Especializados", 
        email: "Alba@albamanutenção.com.br",
        phone: "",
        image: "/logo.svg",
        initials: "AB"
        },
        {
        name: "Engº Gilberto Júnior",
        role: "Engenheiro",
        email: "Alba@albamanutenção.com.br", 
        phone: "(11) 94248 - 1911",
        image: "/logo.svg",
        initials: "GJ"
        },
        {
        name: "Engº Jacob Almeida", 
        role: "Engenheiro",
        email: "Alba@albamanutenção.com.br",
        phone: "(11) 98514 - 2002", 
        image: "/Jacob.png",
        initials: "JA"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-100 from-gray-50 to-gray-100 py-12 px-4">
        <div className="max-w-6xl mx-auto">
            <ContactHeader />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {contacts.map((contact, index) => (
                <ContactCard
                key={index}
                name={contact.name}
                role={contact.role}
                email={contact.email}
                phone={contact.phone}
                image={contact.image}
                initials={contact.initials}
                />
            ))}
            </div>
        </div>
        </div>
    );
};

export default Contact;