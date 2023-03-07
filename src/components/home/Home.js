import React from 'react'
import Navbar from '../navbar/Navbar';
//------css------
import './home.css'
//------MUI------
import Button from '@mui/material/Button';

function Home() {
    return (
        <div>
            <Navbar />
            <section className='secondNavContainer'>
                <div className='secondNavContainerBox'>
                    <marquee direction="right" className='secondNavContainerBox1'>
                        orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500
                    </marquee>
                    <div className='secondNavContainerBox2'>
                        <Button variant="contained" style={{backgroundColor:" #b37402"}}>CLICK HERE</Button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home