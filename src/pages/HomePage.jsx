import { Fragment } from "react";
import Feautures from "../components/Fragments/Features";
import MainPage from "../components/Fragments/MainPage";
import Navbar from "../components/Fragments/Navbar";
import Pricing from "../components/Fragments/Pricing";

let HomePage = () => {
  return (
    <Fragment>
      <Navbar />
      <Feautures />
      <MainPage />
      <Pricing />
    </Fragment>
  );
};

export default HomePage;
