import React from 'react'
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

import useInputChange from '../../../hooks/useInputChange';

const SearchBar = () => {
    const [value, handleInputChange] = useInputChange();

    return (
        <InputGroup className="mb-3">
            <Form.Group
                as={InputGroup.Prepend}
                variant="outline-secondary"
                controlId="exampleForm.ControlSelect1"
            >
                <InputGroup.Text>Filter By</InputGroup.Text>
                <FormControl
                    as="select"
                    name="dropDown"
                    onChange={handleInputChange}
                    value={value.dropDown}
                >
                    <option value="wellName">Well Name</option>
                    <option value="apiNum">API Number</option>
                </FormControl>
            </Form.Group>
            <FormControl
                aria-describedby="basic-addon1"
                name="filter"
                onChange={handleInputChange}
                value={value.filter}
                placeholder="Search"
            />
        </InputGroup>
    )
}

export default SearchBar;
