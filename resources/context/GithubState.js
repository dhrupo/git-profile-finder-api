import { useReducer } from 'react';
import axios from 'axios';
import GithubReducer from './GithubReducer';
import GithubContext from './GithubContext';

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repository: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  const searchUsers = async searchText => {
    setLoading();
    // const res = await axios.get(`https://api.github.com/search/users?q=${searchText}`);
    const res = await axios.get(`http://127.0.0.1:8000/api/search/users?q=${searchText}`);
    dispatch({
      type: 'SEARCH_USERS',
      payload: res.data
    });
  }

  const getUser = async login => {
    setLoading();
    // const res = await axios.get(`https://api.github.com/users/${login}`);
    const res = await axios.get(`http://127.0.0.1:8000/api/users/${login}`);
    dispatch({
      type: 'GET_USER',
      payload: res.data
    })
  }

  const getRepository = async login => {
    setLoading();
    // const res = await axios.get(`https://api.github.com/users/${login}/repos`);
    const res = await axios.get(`http://127.0.0.1:8000/api/users/${login}/repos`);
    dispatch({
      type: 'GET_REPOSITORY',
      payload: res.data
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repository: state.repository,
        loading: state.loading,
        searchUsers,
        getUser,
        getRepository,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;