import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar";
import MainRoute from "./routes/MainRoute";
import Footer from "./components/Footer";
import Loading from "./pages/Loading";
import { asyncLoggedInUser } from "./store/actions/UserAction";
import { asyncLoadProduct } from "./store/actions/ProductAction";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(asyncLoggedInUser());
    dispatch(asyncLoadProduct());

    // Show loader for 10 seconds
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <AnimatePresence>
        {isLoading && <Loading />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar />
          <MainRoute />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
