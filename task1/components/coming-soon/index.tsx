import React, { useState } from "react";
import { Wrapper, Header, Cards, Card, Form, Circle } from "./style";
import {
  TextBold,
  TextMedium,
  TextMedium300,
  TextMedium400,
  Text400,
} from "../../common/style";
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from "../../assets";
import { TimeData } from "./timeData";
import Image from "next/image";
import Link from "next/link";
const ComingSoon = () => {
  return (
    <Wrapper>
      <Header>
        <div className="left-box"></div>
        <TextBold className="title">
          something awesome is
          <br /> coming soon
        </TextBold>
        <TextMedium300 className="description">
          <span>Your all-in-one affiliate marketing tracking software </span>
          track, automate <span>and</span>
          <br /> optimize<span>your campaigns</span>
        </TextMedium300>
        <div className="right-box"></div>
        <Cards>
          {TimeData?.map((item) => {
            return (
              <Card key={item.key}>
                <TextMedium className="time-title">{item.value}</TextMedium>
                <TextMedium400 className="time">{item.label}</TextMedium400>
              </Card>
            );
          })}
        </Cards>
        <Form action="">
          <div className="names">
            <input
              type="text"
              name="firstName"
              placeholder="First Name .."
              className="input-text pad-right"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name .."
              className="input-text"
            />
          </div>
          <div className="email">
            <input
              type="email"
              name="Email"
              placeholder="Enter your email address..."
              className="input-email"
            />
            <button type="submit">Join our waiting list</button>
          </div>
        </Form>
      </Header>
      <Circle>
        <div className="bottom-box"></div>
        <div className="circle">
          <div className="icons flex">
            <div className="icon-links">
              <Image src={Youtube} alt="youtube-icon" />
            </div>
            <div className="icon-links">
              <Image src={Facebook} alt="facebook-icon" />
            </div>
            <div className="icon-links">
              <Image src={Linkedin} alt="linkedin-icon" />
            </div>
            <div className="icon-links">
              <Image src={Instagram} alt="instagram-icon" />
            </div>
            <div className="icon-links">
              <Image src={Twitter} alt="twitter-icon" />
            </div>
          </div>
          <div className="service">
            <Link href="terms-of-service">
              <a>
                <Text400 className="links-pages">Terms of services</Text400>
              </a>
            </Link>
            <Link href="privacy-policy">
              <a>
                <Text400 className="links-pages">Privacy policy</Text400>
              </a>
            </Link>
          </div>
          <div className="copyright">
            <Text400 className="links-pages">
              Copyright 2021 @ Peddle Technologies. All Rights Reserved.
            </Text400>
          </div>
        </div>
      </Circle>
    </Wrapper>
  );
};

export default ComingSoon;
