import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CardDetails() {
  let { id } = useParams();
  let api = `https://rickandmortyapi.com/api/character/${id}`;

  let [info, setInfo] = useState([]);
  let { name, image, species, origin, location, gender, status, episode } = info;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);
      console.log(data)
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center ">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name}</h1>
        <img src={image} alt="" className="img-fluid" />
        <div className="content">
          <div className="">
            <span className="fw-bold">Gender : </span>
            {gender}
          </div>
        </div>
        <div className="">
          <span className="fw-bold">Location : </span>
          {location?.name}
        </div>
        <div className="">
          <span className="fw-bold">Origin : </span>
          {origin?.name}
        </div>
        <div className="">
          <span className="fw-bold">Species : </span>
          {species}
        </div>
        <div className="">
          <span className="fw-bold">Status : </span>
          {status}
        </div>
      </div>
    </div>
  );
}