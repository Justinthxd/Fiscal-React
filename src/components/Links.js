import React from 'react'
import LinksFroms from './LinksFroms';
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const Links = () => {


  const add = async (value) => {
    await setDoc(doc(db, "cities", "new-city-id"), value);
    console.log('New task added');
  }

  return (
    <div>
      <LinksFroms add={add} />
      Links
    </div>
  );
}

export default Links;
