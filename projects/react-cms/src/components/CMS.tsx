import { useState } from "react";
import ContactForm from "./ContactForm";
import ContactTable from "./ContactTable";
import { Contact } from "../schemas/Contact";

function CMS() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const addContacts = (contact: Contact) => setContacts([
    {
      ...contact, 
      id: Math.random().toString(),
    }, ...contacts
  ]);

  const deleteContact = (id: string) => setContacts(contacts.filter(c => c.id != id));

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ContactForm onSubmit={addContacts}/>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ContactTable contacts={contacts} onClick={deleteContact}/>
        </div>
      </div>
    </div>
  );
}

export default CMS;
