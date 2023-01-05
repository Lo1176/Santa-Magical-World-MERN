import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

// const axios = require("axios");

export default function Toy() {
  const [toy, setToy] = useState({});

  // const params = useParams();
  // ci-dessous la methode useParams permet de cibler directement l'id
  const {id} = useParams();
  // console.log(params.id)
  useEffect(() => {
    axios.get(`http://localhost:3000/toys/${id}`)
    .then((result) => {
      const name = result.data.toys[0].name;
      // console.log(name)
      const description = result.data.toys[0].description;
      const price = result.data.toys[0].price;
      setToy(
        { name: name, description: description, price: price }
        // [name, description, price]
      );
  });
  }, []);
  
  return (
    <div>
      <h1>Here is your toy</h1>
      <p>{toy.name}</p>
      <p>{toy.description}</p>
      <p>{toy.price}</p>
    </div>
  );
}
