import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SideNav = () => {

    const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

    return (
        <div>
           {
                categories.map(category=><p key={category.id}>
                    <Link to={`/category/${category.id}`}><Button variant="outline-secondary">{category.name}</Button></Link>
                </p>)
            }
        </div>
    );
};

export default SideNav;