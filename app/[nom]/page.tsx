"use client";

import { Button } from "@/components/ui/button";
import Charts from "../components/charts/Charts";
import { useState } from "react";
import ModaleAjout from "../components/charts/ModaleAjout";

const page = ({ params }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleForm = () => {
    setIsOpenModal(!isOpenModal);
  };
  return (
    <div>
      <h2 className="mb-3">{params.nom}</h2>
      <Button variant="outline" className="mb-3" onClick={handleForm}>
        Encoder une nouvelle valeur
      </Button>
      {isOpenModal && <ModaleAjout />}
      <Charts />
    </div>
  );
};

export default page;
