import { Menu } from 'antd';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
  const history = useHistory();
  const [current, setCurrent] = useState();

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const onClickNav = (url) => {
    history.push(url);
  };

  return (
    <div>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item
          key="members"
          onClick={() => {
            onClickNav('/members');
          }}
        >
          회원관리
        </Menu.Item>
        <Menu.Item
          key="createBoard"
          onClick={() => {
            onClickNav('/createBoard');
          }}
        >
          게시글 추가
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
