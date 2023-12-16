import { Outlet } from 'react-router-dom';
import Userlist from '../Components/Userlist/Userlist';
import { ListGroup } from 'react-bootstrap';

const Home = () => {
    return (
        <div className='row container mx-auto h-100 justify-content-center  align-items-center'>
            <div className='col-lg-5'>

                <Userlist></Userlist>
            </div>
            <div className='col-lg-7'>
                <Outlet></Outlet>
            </div>


        </div>
    );
};

export default Home;