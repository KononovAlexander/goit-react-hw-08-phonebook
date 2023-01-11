import PropTypes from "prop-types"
import {List, Button} from './Contacts.styled';
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "redux/operations";
import { selectFilteredContacts } from 'redux/selectors';


export const Contacts = () => {
    const contacts = useSelector(selectFilteredContacts);
    const dispatch = useDispatch();


    return (
            <List>
                {   contacts.map(contact => {  
                    return (<li 
                        key={contact.id} 
                        >
                            <p>{contact.name}: {contact.phone}</p>
                            {/* <p>{contact.createdAt}</p> */}
                    <Button 
                        onClick={() => {dispatch(deleteContact(contact.id))}} 
                        
                        style={{ width: '22%', marginLeft:'10px' }}>Delete</Button></li>)
                })}
            </List>
        )                                      
    }

    Contacts.propTypes = {
        deleteContact:PropTypes.func
    }
