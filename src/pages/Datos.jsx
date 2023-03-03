import React from "react";
import { mones } from "../assets/mones";
import { useParams } from "react-router-dom";

export default function Datos() {
  const { id } = useParams();
  const [puchamon, setPuchamon] = React.useState({});

  React.useEffect(() => {
    const load = mones.find((mon) => mon.id.toString() === id);
    if (load !== undefined && load !== null) {
      setPuchamon(load);
    }
  }, [id]);

  return <div>{puchamon.name}</div>;
}
