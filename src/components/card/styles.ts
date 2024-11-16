import { DesignSystem } from "@styles/design-system";
import styled from "styled-components";

type CardStyleProps = {
  fontWeight?: "bold" | "normal";
  size?: "small" | "medium" | "large";
  lineHeight?: "small" | "base" | "large";
};

export const CardContainer = styled.main`
  width: 17.813rem;
  height: 8.625rem;
  background-color: ${DesignSystem.color.white};
  border-radius: ${DesignSystem.borderRadius.small};
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Text = styled.p<CardStyleProps>`
  text-align: center;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "normal")};
  font-size: ${({ size }) => DesignSystem.typography.size[size || "base"]};
  line-height: ${({ lineHeight }) =>
    DesignSystem.typography.lineHeigth[lineHeight || "base"]};
`;

export const WapperActions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  gap: 10px;
  margin-top: 10px;
`;

export const pointer = styled.button`
  cursor: pointer;
`;

export const WapperRemoveClientIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
