import React, { useContext, useEffect, useState } from "react";
import Routers from "../../routes/Routers";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { HashLoader } from "react-spinners";
import { CollectionsContext } from "../../context/Collections";
import axios from "../../api/axios";

const Layout = () => {
  const { setCollections } = useContext(CollectionsContext);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCollections();
  }, []);

  const getCollections = async () => {
    const config = {
      params: {
        collection_slug: "cryptopunks",
        order_direction: "desc",
        limit: "50",
        include_orders: "false",
      },
      headers: {
        "X-RapidAPI-Key": "639b9f7098msh1ea9e977655facfp1caa26jsn39af68403727",
        "X-RapidAPI-Host": "opensea-nft.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.get("/assets", config);
      const collections = response.data.assets;
      setCollections(collections);
      setIsLoading(false);
    } catch (error) {
      alert("Error, Refresh");
    }
  };

  if (isLoading) {
    return (
      <div className="loading-section">
        <HashLoader color="green" size={60} />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
