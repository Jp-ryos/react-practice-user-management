import { HeaderOnly } from "../templates/HeaderOnly";
import { Users } from "./Users";

export const UserLayout = () => {
  return (
    <HeaderOnly>
      <Users />
    </HeaderOnly>
  );
};
