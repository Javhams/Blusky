import React from 'react'
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom';

const ButtoNav = ({routes}) => {
    const buttonS = {
        border:'2px solid',
        color: (theme) => theme.palette.primary[50],
        m: 2,
    }

    return(
        <Button component={NavLink} to={routes.to} sx={{ my: 2, display: { xs: 'none', md: 'flex' }, ...buttonS }} >
            {routes.name}
        </Button>

    )
}

export default ButtoNav