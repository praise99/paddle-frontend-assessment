import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ComingSoon from "../components/coming-soon";
import About from "../components/about-us";
const Home: NextPage = () => {
  return (
    <div>
      <About />
    </div>
  );
};

export default Home;
