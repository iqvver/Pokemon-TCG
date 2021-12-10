import { Autocomplete, TextField } from '@mui/material';
import * as React from 'react';
import './Navbar.css';

const Navbar = (props) => {
    return (<div className='comboFilter'>
        <div>
            <Autocomplete disablePortal id="type"
                //options={ }
                sx={
                    { width: 300 }
                }
                renderInput={
                    (params) => < TextField {...params}
                        label="Type" />
                } />
        </div>
        <div className='subtype'>
            <Autocomplete disablePortal id="subtype"
                //options={ }
                sx={
                    { width: 300 }
                }
                renderInput={
                    (params) => < TextField {...params}
                        label="Subtype" />
                } />
        </div>
    </div>
    )
}
export default Navbar;