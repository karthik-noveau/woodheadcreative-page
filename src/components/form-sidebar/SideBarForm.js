import React, { useState } from 'react';
import './sideBarForm.css';
import { FiMail } from 'react-icons/fi'
import { Button } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loader from '../loader/Loader';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function SideBarForm(props) {
    const navigate = useNavigate();
    const [navigateLoad, setNavigateLoad] = useState(false)
   

    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [country, setCountry] = useState('');
    const [phno, setPhno] = useState("")
    const [quries, setQuries] = useState("")
    const handleClicked = () => {
        props.setOpened(!props.open)
    }

    const ButtonClicked = (e) => {
        e.preventDefault();
        console.log("ahi")
        if (name == "" || mail == "" || country == "" || phno == "" || quries == "") {
            toast.error('Invalid Details', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        else {
            setNavigateLoad(true)
            const data = {
                Name: name,
                WhatsappNumber: phno,
                MailId: mail,
                Country: country,
                Quries: quries
            }
            console.log(data)
            axios.post('https://sheet.best/api/sheets/d5f8f0b6-8f44-4dad-add8-2d29ff3aaa18', data).then((res) => {
                setName('');
                setPhno('');
                setMail('');
                setQuries('');
                setCountry('');

                if (res.status == 200) {
                    setNavigateLoad(false)
                    navigate("/thankyou")
                }

            })
        }

        props.setOpened(false)

    }

    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            {
                navigateLoad ?
                    (
                        <div className='enquireSpinner'>
                            <Loader />
                        </div>
                    )
                    :
                    (
                        <div className='EnquireMainContainerOne'>
                            <div className='EnquireMainContainer'>
                                <div className='enquireContainer' onClick={handleClicked }>
                                    <div className='FormTextContainer'>
                                        <p><FiMail className='mailIcon' /></p>
                                        <p>Contact</p>
                                        <p>US</p>
                                    </div>
                                </div>

                                <div className={props.open ? 'enquireFormContainer' : 'falseEnquireFormContainer'}>
                                    <form>
                                        <input type='text' name='name' placeholder='Name' id='inputItem' onChange={(e) => { setName(e.target.value) }} />
                                        <input type='number' placeholder='Whatsapp number' id='inputItem' onChange={(e) => { setPhno(e.target.value) }} />
                                        <input type='email' placeholder='Email Id' id='inputItem' onChange={(e) => { setMail(e.target.value) }} />
                                        {/* <Select
                                            className='dropdownContainer'
                                            value={country}
                                            onChange={(e) => { setCountry(e.target.value) }}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}

                                        >
                                            <MenuItem value="">
                                                <p className='MenuLabelText'>Select your country</p>
                                            </MenuItem>
                                            <MenuItem value="India">India</MenuItem>
                                            <MenuItem value="Australia">Australia</MenuItem>
                                            <MenuItem value="Africa">Africa</MenuItem>
                                            <MenuItem value="America">America</MenuItem>
                                            <MenuItem value="Malaysia">Malaysia</MenuItem>
                                        </Select> */}
                                        <textarea id='textAreaItem' placeholder='Write your query here ...' onChange={(e) => { setQuries(e.target.value) }} />
                                        <Button variant='contained' id='formButton' onClick={ButtonClicked}>Send</Button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    )


            }

        </div>
    )
}

export default SideBarForm