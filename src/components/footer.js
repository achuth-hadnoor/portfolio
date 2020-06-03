import React from "react";
import styled from "styled-components";
import Icon from "react-icons-kit";
import { envelope, twitter, github } from "react-icons-kit/fa";
export default ({ time, date, day, month, year }) => (
  <FooterWrapper>
    <div>
      <div className="footer social-item">
        <a href="https://github.com/achuthhadnoor/" className="footer">
          <Icon icon={github} />
        </a>
      </div>
    </div>
    <div className="footer social-item">
      <a href="https://twitter.com/achuth_hadnoor" className="footer">
        <Icon icon={twitter} />
      </a>
    </div>
    <div className="footer social-item">
      <a
        href="https://www.instagram.com/uiuxdx"
        href="mailto:achuth.hadnoor@gmail.com?subject=Let's have a conversation"
      >
        <Icon icon={envelope} />
      </a>
    </div>
    <div className="footer social-item">
      <a href="mailto:achuth.hadnoor123@gmail.com" className="footer">
        achuth.hadnoor123@gmail.com
      </a>
    </div>
  </FooterWrapper>
);

const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FooterItems = styled.div``;
