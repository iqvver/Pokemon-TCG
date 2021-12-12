import { Autocomplete, TextField } from '@mui/material';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import *as React from 'react';
import * as axios from "axios"
import './Navbar.css';

let Navbar = (props) => {
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    if (props.typepoke.length === 0) {
        axios.get("https://api.pokemontcg.io/v2/types").then(type => {
            props.setTypePoke(type.data.data)
        });
    }

    if (props.subtypepoke.length === 0) {
        axios.get("https://api.pokemontcg.io/v2/subtypes").then(subtype => {
            props.setTypePoke(subtype.data.data)
        });
    }

    return <div>
        <div className='comboFilter'>
            <div className='type-Block' sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select
                        label="Type"
                        onChange={handleChange}
                    >
                        {props.typepoke.map(t => <MenuItem value={t}>{t}</MenuItem>)}
                    </Select>
                </FormControl>
            </div>

            <div className='subtype-Block' sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel>subType</InputLabel>
                    <Select
                        label="subType"
                        onChange={handleChange}
                    >
                        {props.typepoke.map(s => <MenuItem value={s}>{s}</MenuItem>)}
                    </Select>
                </FormControl>
            </div>
        </div>

    </div>
}
export default Navbar;