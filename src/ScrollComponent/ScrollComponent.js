import React, {useEffect, useRef, useState} from 'react';
import Img from '../Img/Img';
import s from './ScrollComponent.module.css';
import useFetch from "../useFetch";

const ScrollComponent = () => {
    const [page, setPage] = useState(1);
    const [photos, setPhotos] = useState([]);
    const container = useRef();
    const observer = useRef();
    const resp = useFetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`);

    useEffect(() => {
         observer.current = new IntersectionObserver(() => {
             setPage(p => p + 1);
         }, {rootMargin: '0px 0px 250px 0px'});
        observer.current.observe(container.current);
    }, []);

    useEffect(()=> {
        if (resp.status === 'fulfilled') {
            setPhotos([...photos, ...resp.data]);
        }
    }, [resp]);

    return (
        <React.Fragment>
            <div className={`container ${s.scrollComponent}`}>
                {
                    (resp.status === 'fulfilled') ?
                        photos.map((photo, index) => {
                            return (<Img
                                key={index}
                                src={photo.url}
                            />)
                        }) : ''
                }
            </div>
            <div
                ref={container}
                className={s.bottom}>
            </div>
        </React.Fragment>

    );
}

export default ScrollComponent;
