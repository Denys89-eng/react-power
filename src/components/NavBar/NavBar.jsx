import React from "react";
import {Stack} from "@mui/material";
import {Link} from "react-router-dom";
import styles from '../../styles/NavBar.module.css'

const NavBar = () => {

    return (
        <Stack direction='row'
               justifyContent='space-around'
               sx={{gap: {sm: '122px', xs: '40px'}}}
        >
            <Link to='/'>
                <img src="https://img.freepik.com/premium-vector/power-gym-logo-template_80802-769.jpg?w=2000" alt=""
                     style={{width: '100px', height: '100px'}}/>
            </Link>

            <Stack
                direction='row'
                gap='40px'
                fontSize='24px'
                alignItems='flex-end'
            >
                <Link to='/' className={styles.link}>
                    Home
                </Link>
                <a href="#exercises" style={{textDecoration: 'none',color: '3A1212'}}>
                    Exercises
                </a>
            </Stack>
        </Stack>
    )
}

export default NavBar