import { useContext, useEffect, useState } from 'react';
import { Form, InputGroup, FormControl, Button, Alert } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';
import GithubContext from '../../context/GithubContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const [searchText, setSearchText] = useState('');
  const [noSearchAlert, setNoSearchAlert] = useState(false);
  const [noUserAlert, setNoUserAlert] = useState(false);
  const { users } = useContext(GithubContext);

  const handleChange = e => setSearchText(e.target.value);

  useEffect(() => {
    users.total_count === 0 ? setNoUserAlert(true) : setNoUserAlert(false);
  }, [users])

  const handleSubmit = e => {
    e.preventDefault();
    if (searchText === "") {
      setNoSearchAlert(true);
    }
    else {
      setNoSearchAlert(false);
      githubContext.searchUsers(searchText);
      setSearchText('');
    }
  }

  return (
    <>
      {
        noSearchAlert &&
        <Alert variant="danger" onClose={() => setNoSearchAlert(false)} dismissible>
          <Alert.Heading>Opps! Please enter a value to search!</Alert.Heading>
        </Alert>
      }
      {
        noUserAlert &&
        <Alert variant="danger" onClose={() => setNoUserAlert(false)} dismissible>
          <Alert.Heading>Opps! No user with this username exists!</Alert.Heading>
        </Alert>
      }
      <Form className="d-flex w-75 my-4 mx-auto" onSubmit={handleSubmit}>
        <InputGroup>
          <FormControl
            placeholder="Search Users"
            onChange={handleChange}
            value={searchText}
            name='searchText'
          />
          <Button type="submit" variant="primary">
            <AiOutlineSearch size={32}></AiOutlineSearch>
          </Button>
        </InputGroup>
      </Form>
    </>
  );
};

export default Search;