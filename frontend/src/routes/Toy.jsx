import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react'

// const axios = require("axios");

export default async function Toy() {
    const [toy, setToy] = useState([])

    const params = useParams();
    // console.log(params.id)
    await axios.get(`http://localhost:3000/toys/${params.id}`)
                .then((result) => {
                    const name = result.data.toys[0].name;
                    // const description = result.data.toys[0].description;
                    // const price = result.data.toys[0].price;
                    // setToy(result.data.toys[0].name);
                    // console.log("toy " + {toy});
                    });
    return(
        <div>
            <h6>Here is your toy</h6>
            {/* <p>{toy}</p> */}
        </div>

    )


}
