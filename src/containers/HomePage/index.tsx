/* eslint-disable jsx-a11y/anchor-is-valid */
import { Dropdown, Menu, Space } from "antd";
import { DownOutlined, LogoutOutlined } from "@ant-design/icons";
import {
  LayoutWrapper,
  LayoutHeader,
  LayoutContent,
  LayoutFooter,
  SettingsLink,
} from "./styles";
import { useAuth } from "../../contexts/AuthContext";
import GameBoard from "../../components/GameBoard/GameBoard";

const HomePage = () => {
  const { logout } = useAuth();
  const date = new Date();
  const currentYear = date.getFullYear();

  const menu = (
    <Menu
      items={[
        {
          key: "2",
          label: <a onClick={logout}>Log out</a>,
          icon: <LogoutOutlined />,
        },
      ]}
    />
  );

  return (
    <LayoutWrapper>
      <LayoutHeader>
        <Dropdown overlay={menu}>
          <SettingsLink onClick={(e) => e.preventDefault()}>
            <Space>
              Settings
              <DownOutlined />
            </Space>
          </SettingsLink>
        </Dropdown>
      </LayoutHeader>
      <LayoutContent>
        <GameBoard />
      </LayoutContent>
      <LayoutFooter>Copyright ©{currentYear}</LayoutFooter>
    </LayoutWrapper>
  );
};

export default HomePage;
