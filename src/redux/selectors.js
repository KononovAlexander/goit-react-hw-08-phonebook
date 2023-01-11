
import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts;
console.log('selectContacts: ', selectContacts);

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter.filterValue;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  
  (contacts, filter) => {
    
 
    let normalizedFilter = filter?.toLowerCase();
    const filtredContacts = contacts.filter(contact =>
      contact.name?.toLowerCase().includes(normalizedFilter)
    );
        
    return filtredContacts;
  }
);