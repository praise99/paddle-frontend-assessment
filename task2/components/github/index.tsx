import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "next/image";
import styles from "./Github.module.css";
import { Spinner } from "../../common/spinner";
const GithubContent = ({ data }: any) => {
  const [posts, setPosts] = useState(data.items);
  const [hasMore, setHasMore] = useState(true);
  let today = new Date();
  const getDifferenceInDays = (today: any, createdAt: any) => {
    let previousDate: any = new Date(createdAt);
    const diffInMs = Math.abs(today - previousDate);
    return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  };
  const getCurrentDate = () => {
    // console.log(date);
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
  const getMorePost = async () => {
    const res = await fetch(
      `https://api.github.com/search/repositories?q=created:>${getCurrentDate()}&sort=stars&order=desc&per_page=15&page=${
        posts.length / 15 + 1
      }`
    );
    const newPosts = await res.json();
    setPosts((post: any) => [...post, ...newPosts.items]);
  };

  return (
    <div className={styles.container}>
      <InfiniteScroll
        dataLength={posts.length}
        next={getMorePost}
        hasMore={hasMore}
        loader={<Spinner />}
        endMessage={<h4>Nothing more to show</h4>}
      >
        {posts.map((data: any, index: any) => (
          <div className={styles.each_repository} key={index}>
            <div className={styles.user_avatar}>
              <Image
                src={data.owner.avatar_url}
                width={200}
                height={200}
                alt="repo-icon"
              />
            </div>
            <div className={styles.repository_data}>
              <h1 className={styles.repository_name}>
                {data.full_name.split("/")[0]}
              </h1>
              <p className={styles.repository_description}>
                {data.description}
              </p>
              <div className={styles.repository_cards}>
                <div className={styles.stars}>
                  Stars:{data.stargazers_count}
                </div>
                <div className={styles.issues}>
                  Issues:{data.open_issues_count}
                </div>
                <p className={styles.submission_time}>
                  Submitted {getDifferenceInDays(today, data.created_at)} days
                  ago by {data.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default GithubContent;
