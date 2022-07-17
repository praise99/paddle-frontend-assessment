import React, { useState } from "react";
import {
  AboutWrapper,
  AboutHeader,
  DevelopedWrapper,
  GrowingWrapper,
  Section,
  Questions,
  Circle,
} from "./style";
import Image from "next/image";
import {
  TextMedium500,
  TextSmall400,
  TextSmall500,
  TextBold,
  TextMedium,
  TextLittle400,
  Text400,
} from "../../common/style";
import {
  Lines,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
} from "../../assets";
import Modal from "../modal/Modal";
import Link from "next/link";
const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && <Modal setIsOpen={setIsOpen} />}

      <AboutWrapper>
        <AboutHeader>
          <div className="left-desc">
            <div className="square"></div>
            <div className="flex about-line">
              <div className="line"></div>
              <TextMedium500 onClick={() => setIsOpen(true)}>
                About us
              </TextMedium500>
            </div>
          </div>

          <TextSmall500 className="title">
            Built for Saas <br />
            and E-commerce
          </TextSmall500>
          <div className="right-desc">
            <TextSmall400 className="desc-width">
              Our tools are easy to set up and use with a user friendly
              dashboard that enables you to set up, launch, automate and manage
              multi-affiliate campaigns in 5 minutes.
            </TextSmall400>
          </div>
          <div className="blue-circle"></div>
        </AboutHeader>
        <DevelopedWrapper>
          <TextMedium className="developed-text">
            Metricks was developed because just like you, we needed a product
            that could give us good value.
          </TextMedium>
        </DevelopedWrapper>
        <GrowingWrapper>
          <div className="description">
            <Section>
              <div className="top">
                <TextLittle400 className="sectionNumber">01</TextLittle400>
                <div className="line"></div>
              </div>
              <TextMedium500 className="section_desc">WHY US?</TextMedium500>
            </Section>
            <div className="description_text">
              <TextSmall400>
                We pride ourselves in our ability to innovate and create
                world-class tools that provide reliable and efficient
                touchpoints between advertisers and affiliates.
              </TextSmall400>
            </div>
            <div className="description_image">
              <div className="image">
                <Image src={Lines} alt="lins" />
              </div>
            </div>
          </div>
          <div className="information">
            <Section>
              <div className="top">
                <TextLittle400 className="sectionNumber">02</TextLittle400>
                <div className="line"></div>
              </div>
              <TextMedium500 className="section_desc">
                Growing with you
              </TextMedium500>
            </Section>
            <div className="blue-box"></div>
            <div className="description_text">
              <TextSmall400>
                Leveraging the best technology, we have developed an all-in-one
                affiliate marketing tracking software, a genius tool to help you
                track, automate and optimize your influencer campaigns, all from
                one dashboard.
              </TextSmall400>
            </div>
            <div className="description_text">
              <TextSmall400>
                Our team of experts are constantly brainstorming, testing and
                developing new solutions with only one thing in mind - your
                business growth. Your success is our success and by giving you
                the tools you need to scale, we grow as well.
              </TextSmall400>
            </div>
          </div>
        </GrowingWrapper>
        <Questions>
          <div className="questions">
            <TextSmall500 className="question-title">
              Got a Question?
            </TextSmall500>
            <TextSmall400 className="question-desc">
              See how Metricks can help your business grow with best Affiliate
              Marketing Tracking Software.
            </TextSmall400>
            <Link href="">
              <a>
                <TextSmall400 className="contact">
                  Contact us &rarr;
                </TextSmall400>
              </a>
            </Link>
          </div>
          <div className="questions-image">
            <div className="box-purple"></div>
          </div>
        </Questions>
        <Circle>
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
      </AboutWrapper>
    </>
  );
};

export default About;
