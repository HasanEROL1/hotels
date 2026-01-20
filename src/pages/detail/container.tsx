import type { FC } from "react"
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
interface Props{
children: React.ReactNode;
}


const Container:FC<Props> = ({children}) => {
  return (
    <div className="container">
      <div className="flex">
        <Link to="/" className="border border-zinc-200 p-2 rounded-md transition hover:bg-zinc-100" >
          <FaArrowLeft />
        </Link>

       
      </div>
      {children}
    </div>
  )
}

export default Container