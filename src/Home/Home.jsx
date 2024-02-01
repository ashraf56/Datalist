import { Outlet } from 'react-router-dom';
import Datalist from '../Components/Datalist/Datalist';

const Home = () => {
    return (
        <div className='row container mx-auto justify-content-center  align-items-center' >
            <div className='col-lg-3'>

                <Datalist></Datalist>
            </div>
            <div className='col-lg-9'>
                <Outlet></Outlet>
            </div>


        </div>
    );
};

export default Home;