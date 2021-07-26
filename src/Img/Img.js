import React from 'react';
import s from './Img.module.css';

const Img = React.memo(({src}) => {
    return (
       <img className={s.image} src={src} />
    );
});

export default Img;
