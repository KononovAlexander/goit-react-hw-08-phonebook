import {Box} from './Box'
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading, selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import styled from 'styled-components';

const Title = styled.h2`
font-size:36px;
`;

 export  const App = () => { 

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

      return (
        <div
          style={{
            // height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101',
            flexDirection: 'column'
          }}
        >
          <div>
            <Title>Phonebook</Title>
          <Form />

          </div>
          <Box width={600}>
          <Title>Contacts</Title>
                
                <Filter/>
                     {isLoading && !error && <b>Request in progress...</b>}
                  <Contacts 
              />
          </Box>
        </div>
      );
}
