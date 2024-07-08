"use client";

import { Button } from "@/components/ui/button";
import Charts from "../components/charts/Charts";
import { useState } from "react";
import ModaleAjout from "../components/charts/ModaleAjout";

interface Params {
  nom: string;
}

interface PageProps {
  params: Params;
}

const page = ({ params }: PageProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleForm = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <div className="m-5">
      <h2 className="my-5 text-2xl font-black capitalize text-center ">
        {params.nom}
      </h2>
      <Button variant="outline" className="mb-3" onClick={handleForm}>
        Encoder une nouvelle valeur
      </Button>
      {isOpenModal && <ModaleAjout />}
      <Charts />
    </div>
  );
};

export default page;
