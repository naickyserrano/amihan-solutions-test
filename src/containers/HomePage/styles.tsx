import styled from "styled-components";
import { Layout } from "antd";

const { Header, Footer, Content } = Layout;

const LayoutWrapper = styled(Layout)`
  min-height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;
const LayoutHeader = styled(Header)`
  text-align: right;

  @media screen and (max-width: 37.5em) {
    text-align: center;
  }
`;
const LayoutContent = styled(Content)`
  padding: 0 1rem;
  text-align: center;
`;
const LayoutFooter = styled(Footer)`
  text-align: center;
`;
const SettingsLink = styled.a`
  color: #fff;
`;

export {
  LayoutWrapper,
  LayoutHeader,
  LayoutContent,
  LayoutFooter,
  SettingsLink,
};
