import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { label } = props;
  return <SButton>{label}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #11999e;
`;
