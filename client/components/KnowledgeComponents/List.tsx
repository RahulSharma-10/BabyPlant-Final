import React from "react";
import { items } from "./data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Card({ id, title, category, theme }:{id:any,title:any,category:any,theme:any}) {
  return (
    <li className={`card ${theme}`}>
      <div className="card-content-container">
        <motion.div className="card-content" layoutId={`card-container-${id}`}>
          <motion.div
            className="card-image-container"
            layoutId={`card-image-container-${id}`}
          >
            <img className="card-image" src={`images/${id}.jpg`} alt="" />
          </motion.div>
          <motion.div
            className="title-container"
            layoutId={`title-container-${id}`}
          >
            <span className="category">{category}</span>
            <h2>{title}</h2>
          </motion.div>
        </motion.div>
      </div>
      <Link to={id} className={`card-open-link`} />
    </li>
  );
}

export function List({ selectedId }:{selectedId:any}) {
  return (
    <ul className="card-list">
      {items.map(card => (
        // const x = new Boolean(false);
        // if(card.id === selectedId)
        // {
        //   x = true;
        // }
        <Card theme={undefined} key={card.id} {...card} /> //isSelected= {card.id === selectedId}
      ))}
    </ul>
  );
}
//mapping of cards done here