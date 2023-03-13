import React from 'react'
//--------css------
import './loader.css'
//--------MUI------
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Loader() {
    return (
        <div>
            <Box className='loaderContainer'>
                <CircularProgress color='inherit' />
            </Box>
        </div>
    )
}

export default Loader