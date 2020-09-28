import React, { useState } from "react";
import axios from "axios";

// const getImages = async () => {
//     const API_KEYS = 'K0SxPXMzJfgTYEaUk6gV6XVQd2Qc3yrWyyvlxALkHnk';
//     const collection =9585833;
//     const URL = `https://api.unsplash.com/photos/random/?collections=${collectionId}&q=99&fm=jpg&crop=entropy&w=2048&cs=tinysrgb&fit=max&client_id=${API_KEYS}`;

//     const res = await fetch(URL).catch(e=>console.log('ErrorType:', e))
//     const {user, urls, location, description, links} = await res.json()

// // }
// const [images, setImages] = useState([]);

// const getImages = () => {
//   axios
//     .get("https://api.unsplash.com/photos/random", {
//       params: {
//         client_id: "K0SxPXMzJfgTYEaUk6gV6XVQd2Qc3yrWyyvlxALkHnk",
//         count: 30,
//       },
//     })
//     .then((res) => {
//       setImages([...images, ...res.data.map((image) => image.urls.small)]);
//     });
// };
