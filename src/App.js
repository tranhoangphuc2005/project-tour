import Loading from "./Components/Loading";
import NoTour from "./Components/NoTour";
import Tour from "./Components/Tour";
import axios from "axios";
import { useEffect, useState } from "react";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTour] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getToursAPI();
  }, []);

  const getToursAPI = async () => {
    setIsLoading(true);
    let res = await axios.get(url);
    const newData = res.data.map((v) => {
      const priceByDay = v.price.replace(",", ".");
      return {
        ...v,
        price: priceByDay,
        day: 1,
        priceByDay: priceByDay,
      };
    });
    setTour(newData);
    setIsLoading(false);
  };

  const handleUpdateDay = (id, value) => {
    const newTours = [...tours].map((v) => {
      if (v.id === id) {
        const priceByDay = v.price * value;
        return { ...v, day: value, priceByDay };
      } else {
        return v;
      }
    });
    setTour(newTours);
  };

  return (
    <>
      {isLoading && <Loading></Loading>}
      <NoTour></NoTour>
      <Tour tours={tours} onUpdateDay={handleUpdateDay}></Tour>
    </>
  );
}

export default App;
