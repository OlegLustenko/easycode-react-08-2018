import React from 'react';
import {LoadingHOC} from './HOCs/Loading-HOC';

export const ContactListComponent = ({contacts, filterText}) => {
  const filteredContacts = contacts.filter((contact) => contact.name.includes(filterText));
  console.log('SECOND RENDER')
  return (
    <ul>
      {filteredContacts.map((contact) => (
        <li key={contact.email}>
          <img src={contact.thumbnail} role="presentation"/>
          <div className="contactData">
            <strong>{contact.name}</strong>
            <br/>
            <small>{contact.email}</small>
          </div>
        </li>
      ))}
    </ul>
  );
};

export const ContactList = LoadingHOC(ContactListComponent);
// export const ContactList = withCounter(ContactListComponent);