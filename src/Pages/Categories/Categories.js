import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCourse from '../SingleCourse/SingleCourse';

const Categories = () => {

    const courses=useLoaderData();
   
    return (
        <div className='py-5'>
            
            {
                 courses.map((course) => (
                    <SingleCourse key={course?._id} course={course} />
                  ))
            }
        </div>
    );
};

export default Categories;