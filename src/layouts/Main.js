import React from 'react';
import { Outlet } from 'react-router-dom';
import AppFooter from '../components/Shared/AppFooter';
import NavBar from '../components/Shared/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='text-center m-12'>
                <div className="">
                <Outlet></Outlet>
                </div>
            </div>
            
            <AppFooter></AppFooter>
        </div>
    );
};

export default Main;