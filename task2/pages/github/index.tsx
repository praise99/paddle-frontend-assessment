import GithubContent from "../../components/github";
import React, { useEffect } from "react";
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
  const data: any = await fetch(
    `https://api.github.com/search/repositories?q=created:>${getCurrentDate()}&sort=stars&order=desc&per_page=15`
  ).then((response) => response.json());
  return {
    props: { data },
  };
};
