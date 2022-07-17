import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ComingSoon from "../components/coming-soon";
import About from "../components/about-us";
import NavBar from "../components/layout/nav";
const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
    </div>
  );
};

export default Home;
