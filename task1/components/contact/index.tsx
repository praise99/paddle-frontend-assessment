import React from "react";
import { ContactWrapper, Form } from "./style";
import { TextMedium300, TextMedium40, Button } from "../../common/style";
const Contact = () => {
  return (
    <ContactWrapper>
      <TextMedium40 className="title">
        Hey, we are still in the works,
        <br /> but you can send us a message!
      </TextMedium40>
      <Form>
        <div className="blue-circle"></div>
        <div className="input name-box">
          <label htmlFor="firstName">
            <TextMedium300 className="name">First name</TextMedium300>
          </label>
          <input type="text" placeholder="Enter your first name" />
        </div>
        <div className="input">
          <label htmlFor="lastName">
            <TextMedium300 className="name">Last name</TextMedium300>
          </label>
          <input type="text" placeholder="Enter your Last name" />
        </div>
        <div className="input">
          <label htmlFor="email">
            <TextMedium300 className="name"> Email address</TextMedium300>
          </label>
          <input type="text" placeholder="Enter your Email address" />
        </div>
        <div className="input">
          <label htmlFor="help">
            <TextMedium300 className="name">
              Tell us what you need help with:
            </TextMedium300>
          </label>
          <textarea placeholder="Enter a topic, like  channel problem... " />
        </div>
        <div>
          <Button type="submit" className="button">Send now</Button>
        </div>
      </Form>
    </ContactWrapper>
  );
};

export default Contact;
