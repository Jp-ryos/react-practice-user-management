import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organism/user/UserCard";

const userList = [
  {
    name: "test-primary",
    img: "https://source.unsplash.com/Mv9hjnEUHR4",
    email: "text@a.com",
    phone: "000-000-000",
    company: {
      name: "株式会社テスト"
    },
    website: "https://google.com"
  },
  {
    name: "test-A1",
    img: "https://source.unsplash.com/Mv9hjnEUHR4",
    email: "text@b.com",
    phone: "000-000-001",
    company: {
      name: "株式会社テストA"
    },
    website: "https://google.com"
  },
  {
    name: "test-B2",
    img: "https://source.unsplash.com/Mv9hjnEUHR4",
    email: "text@c.com",
    phone: "000-000-002",
    company: {
      name: "株式会社テストB"
    },
    website: "https://google.com"
  }
];

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザ一覧</h2>
      <SearchInput />
      <SUserArea>
        {userList.map((user) => (
          <UserCard user={user} key={user.name} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
