import GithubContent from "../../components/github";
import React, { useEffect } from "react";
import { BASE_URL } from "../../services";
const GithubPage = (props: any) => {
  return (
    <>
      <GithubContent data={props.data} />
    </>
  );
};

export default GithubPage;

export const getStaticProps = async () => {
  const getCurrentDate = () => {
    let today = new Date();
    let priorDate = new Date(new Date().setDate(today.getDate() - 30));
    let date = new Date(priorDate).toLocaleDateString("en-us", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    let currentDate = [];
    let replacedDate = date.split("/");
    currentDate[0] = replacedDate[2];
    currentDate[2] = replacedDate[1];
    currentDate[1] = replacedDate[0];
    return currentDate.join("-");
  };
  let url = BASE_URL + getCurrentDate() + "&sort=stars&order=desc&per_page=15";
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.items.length > 0) {
      return {
        props: { data },
      };
    } else {
      alert("no items");
    }
  } catch {
    return { notFound: true };
  }
};
