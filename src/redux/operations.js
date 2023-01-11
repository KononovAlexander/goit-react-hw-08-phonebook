import {createAsyncThunk} from '@reduxjs/toolkit';
// import * as actions from './actions';
import * as API from './contactsAPI';

// export const fetchContacts = () => async dispatch => {
//     dispatch(actions.fetchContactsRequest());

//     try{
//         const contacts = await API.fetchContacts();
//         dispatch(actions.fetchContactsSuccess(contacts));
//     } catch(error) {
//         dispatch(actions.fetchContactsError(error));
//     }
// };

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async () => {
        const contacts = await API.fetchContacts();
        console.log('contacts: ', contacts);
        return contacts;
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact) => {
        const contacts = await API.addContact(contact);
        return contacts;
    }
);

export const deleteContact = createAsyncThunk(
    'contact/deleteContact',
    async (contactID) => {
        const contacts = await API.deleteContact(contactID);
        return contacts;
    }
)