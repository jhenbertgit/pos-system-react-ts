import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-5 mt-5 h-full">
      <div>
        <h1 className="font-bold text-3xl mb-4">Welcome to Web-based POS</h1>
        <p className="text-lg text-justify">
          Revolutionize your business with our cutting-edge web-based point of
          sale (POS) solution. Say goodbye to traditional cash registers and
          hello to a seamless and efficient sales experience. Our marketable
          web-based POS empowers you to manage transactions, inventory, and
          customer interactions from anywhere with an internet connection. Enjoy
          the flexibility of real-time data access, allowing you to make
          informed decisions on-the-go. With user-friendly interfaces and
          customizable features, our web-based POS is designed to enhance your
          sales process, streamline operations, and boost overall productivity.
          Elevate your business to new heights with a modern and marketable POS
          solution that adapts to your needs and helps you stay ahead in today's
          dynamic market.
        </p>

        <Button asChild className="mt-4">
          <Link to="pos">Click to Sell your Products</Link>
        </Button>
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/12935074/pexels-photo-12935074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="hero-img"
          className="rounded-md"
        />
      </div>
    </div>
  );
};

export default HomePage;
