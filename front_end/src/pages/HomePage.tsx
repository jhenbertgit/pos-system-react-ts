import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="mt-5">
      <h1 className="font-bold text-2xl">Welcome to Web-based POS</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
        placeat esse repellat earum recusandae ad, maiores nulla fugiat
        exercitationem autem, reprehenderit magnam ratione! Repudiandae officia
        voluptates, et provident at sunt!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facilis
        recusandae, aut consectetur dolorem reprehenderit natus cum repellendus
        dicta? Sunt beatae laboriosam ratione quia omnis aut id voluptatibus non
        tenetur.
      </p>
      <Button asChild className="mt-4">
        <Link to="pos">Click to Sell your Products</Link>
      </Button>
    </div>
  );
};

export default HomePage;
