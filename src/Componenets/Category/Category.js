import React from 'react'
import Categorycard from './Categorycard'
import {Categoryinfos} from "./Categoryinfos"
import classes from './category.module.css'



function Category() {
   
  return (
    <section className={classes.category__container}>
      {Categoryinfos?.map((infos, i) => (
        <Categorycard key={i} data={infos} />
      ))}
    </section>
  );
}

export default Category
