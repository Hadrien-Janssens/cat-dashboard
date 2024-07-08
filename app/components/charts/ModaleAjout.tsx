import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const ModaleAjout = () => {
  const putWeigth = () => {};

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ajoute le nouveau poid</CardTitle>
      </CardHeader>
      <CardContent>
        <Input />
      </CardContent>
      <CardFooter>
        <Button onClick={putWeigth}>Valider</Button>
      </CardFooter>
    </Card>
  );
};

export default ModaleAjout;
