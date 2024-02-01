import { Outlet } from 'react-router-dom';
import Datalist from '../Components/Datalist/Datalist';
import { ListGroup } from 'react-bootstrap';

const Home = () => {
    return (
        <div className='row container mx-auto h-100 justify-content-center  align-items-center'>
            <div className='col-lg-5'>

                <Datalist></Datalist>
            </div>
            <div className='col-lg-7'>
                <Outlet></Outlet>
            </div>


        </div>
    );
};

export default Home;