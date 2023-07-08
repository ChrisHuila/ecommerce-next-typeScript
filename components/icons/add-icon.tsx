import { SVGProps } from "react"
import style from "@/components/auth/Auth.module.css"

const AddIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`add_icon ${style.add_icon}`}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M19 15v-3h-2v3h-3v2h3v3h2v-3h3v-2h-.937zM4 7h11v2H4zm0 4h11v2H4zm0 4h8v2H4z" />
  </svg>
)
export default AddIcon;