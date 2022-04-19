
import React from 'react';
import {  ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';

const LisNavItem = ({routes}) => {

  return (
    <ListItem button component={NavLink} to={routes.to} >
      <>
      <ListItemIcon> {routes.icon} </ListItemIcon>
      <ListItemText primary={routes.name} />
      </>
    </ListItem>
  )
}

export default LisNavItem