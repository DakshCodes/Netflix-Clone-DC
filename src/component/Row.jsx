import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Movie } from './Movie';
import {MdChevronRight,MdChevronLeft} from 'react-icons/md'

export const Row = ({ title, fetchURL,Rowid }) => {
//    For movies get help with api..........
    const [movies, setMovie] = useState([])
     useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovie(response.data.results)
        })
    }, [fetchURL])

    // for scrolll.............
    const SlideLeft= () =>{
        var slider = document.getElementById('slider'+Rowid);
        slider.scrollLeft = slider.scrollLeft - 500;
    }
    const SlideRight= () =>{
        var slider = document.getElementById('slider'+Rowid);
        slider.scrollLeft = slider.scrollLeft + 500;
    }


   
    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='relative flex items-center group '>
              <MdChevronLeft onClick={SlideLeft} size={40} className="bg-white rounded-full opacity-50 hover:opacity-100 absolute cursor-pointer hidden z-10 group-hover:block"/>
                <div id={"slider"+Rowid} className="slider-effect">
                    {movies.map((item, id) => {
                       return <Movie  item={item} key={id} />
                    })}
                </div>
             <MdChevronRight onClick={SlideRight} size={40} className="bg-white rounded-full  absolute right-0 opacity-50 hover:opacity-100  cursor-pointer z-10 hidden  group-hover:block"/>
               </div>
        </>
    )
}
