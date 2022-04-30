import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { label } = props;
  return <SButton>{label}</SButton>;
};

const SButton = styled(BaseButton)`
  background-color: #40514e;
`;
