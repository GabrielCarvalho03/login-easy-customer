import { DesignSystem } from "@styles/design-system";

interface CustomerIconProps {
  color?: "primary" | "default";
}

const CustomerIcon = ({ color }: CustomerIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="18"
    fill="none"
    viewBox="0 0 12 18"
  >
    <path
      fill={color == "primary" ? DesignSystem.color.primary : "#0F0F0F"}
      d="M6 .625a3.96 3.96 0 0 0-3.958 3.958c0 2.142 1.675 3.875 3.858 3.95a.7.7 0 0 1 .183 0h.059000000000000004a3.95 3.95 0 0 0 3.816-3.95A3.96 3.96 0 0 0 6 .625M10.233 10.75c-2.325-1.55-6.116-1.55-8.458 0-1.058.708-1.642 1.667-1.642 2.692s.584 1.975 1.634 2.675c1.166.783 2.7 1.175 4.233 1.175s3.067-.392 4.233-1.175c1.05-.709 1.634-1.659 1.634-2.692-.009-1.025-.584-1.975-1.634-2.675"
    ></path>
  </svg>
);

export default CustomerIcon;
