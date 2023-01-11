import {Box} from '../Box'
import {Label, Input}from './Filter.styled';
import PropTypes from "prop-types"
import { useDispatch, useSelector } from 'react-redux';
import { setFilter} from 'redux/filterSlice';
import {selectFilter} from 'redux/selectors';

export let filteredContacts = null; 

export const Filter = () => {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();
    
    return(
        <Box display='flex'
        flexDirection='column'>
            <Label htmlFor="search">Find contacts by name</Label>
            <Input id="search" type="text" value={filter} onChange={e => dispatch(setFilter(e.target.value))} />
        </Box>
    )

}

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    filter: PropTypes.string,
    contacts:PropTypes.array
  };