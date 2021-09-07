import { useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import GithubContext from '../../context/GithubContext';
import { Container, Row, Col } from 'react-bootstrap';
import { BsPersonCheck, BsPersonPlus } from 'react-icons/bs';
import { BiBuildings } from 'react-icons/bi';
import { FiMapPin } from 'react-icons/fi';
import Repositories from '../repository/Repositories';
import UserDetailskeleton from './UserDetailskeleton';

const UserDetails = () => {
  const { login: userName } = useParams();
  const { getUser, getRepository, repository, user, loading } = useContext(GithubContext);

  useEffect(() => {
    getUser(userName);
    getRepository(userName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const {
    avatar_url, bio, company, followers, following, html_url, location, login, name
  } = user

  return (
    <Container className="userDetails__components">
      <Link to='/' className='btn btn-outline-primary mt-4'>
        Back To Search
      </Link>
      <Row className="my-4 justify-content-center p-3 gap-5">
        {!user ? <h3 className="text-primary text-center">No such user available.</h3>
          :
          <>
            {loading ? <UserDetailskeleton></UserDetailskeleton>
              :
              <>
                <Col sm={12} md={4} className="user-profile-column text-center bg-light rounded p-3">
                  <img src={avatar_url} className="avatar mb-3" alt="" />
                  <h4>
                    {name}
                  </h4>
                  <p className="text-secondary">{login}</p>
                  <a className="btn btn-primary mb-3" href={html_url}>Go To Github Profile</a>
                  {bio && <p>{bio}</p>}
                  <p><BsPersonCheck></BsPersonCheck> <span className="ms-2 vertical-text-middle">Followers: {followers}</span></p>
                  <p><BsPersonPlus></BsPersonPlus> <span className="ms-2 vertical-text-middle">Following: {following}</span></p>
                  {company && <p><BiBuildings></BiBuildings> <span>{company}</span></p>}
                  {location && <p><FiMapPin></FiMapPin> <span>{location}</span></p>}
                </Col>
                <Col className="bg-light rounded p-4 mt-md-0" sm={12} md={7}>
                  {repository.length > 0 ?
                    <Repositories repository={repository}></Repositories>
                    :
                    <h3 className="text-primary text-center">User has no repository available.</h3>
                  }
                </Col>
              </>
            }
          </>
        }
      </Row>
    </Container >
  );
};

export default UserDetails;