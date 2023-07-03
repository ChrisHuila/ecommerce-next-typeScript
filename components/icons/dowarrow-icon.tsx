import { SVGProps } from "react"
const DownArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon-arrow"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M16.939 7.939 12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z" />
  </svg>
)
export default DownArrowIcon