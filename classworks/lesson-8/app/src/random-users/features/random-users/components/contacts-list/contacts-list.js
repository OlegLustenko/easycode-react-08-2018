import React from 'react';
import {withLoadingSpinner} from '../hocs';

export const ContactListComponent = ({contacts}) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.email}>
          <img src={contact.thumbnail} alt=""/>
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

export const ContactList = withLoadingSpinner(ContactListComponent);
