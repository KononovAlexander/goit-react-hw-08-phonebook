import axios from 'axios'

axios.defaults.baseURL = 'https://63b97c294482143a3f1263e7.mockapi.io/contacts';


export async function fetchContacts() {
    const response = await axios.get();
    return response.data;
  }
  
  export async function addContact(contact) {
    const response = await axios.post('', contact);
    return response.data;
  }
  
  export async function deleteContact(contactId) {
    const response = await axios.delete(contactId);
    return response.data;
  }