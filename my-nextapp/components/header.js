import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import style from './header.module.css';


//navBar

export default function Header() {
    return (
      <div role="presentation" className={style.container}>
        <Breadcrumbs maxItems={2} aria-label="breadcrumb">
      
          <Link underline="hover" color="inherit" href="/" className={style.links}>
          Home 
          </Link>       
          <Link underline="hover" color="inherit" href="/about" className={style.links}>
            About
          </Link>    
        </Breadcrumbs>
      </div>
    )
};