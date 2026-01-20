import type { FC } from "react"

import { CgUnavailable as Fail } from "react-icons/cg";
import { MdEventAvailable as Ok } from "react-icons/md";


interface Props{
    availability?: boolean
    expanded?: boolean
}

const Status: FC<Props> = ({ availability, expanded = true }) => {
  return (
    <div className={`flex items-center gap-2 border border-zinc-200 rounded-md ${availability ? 'bg-green-50' : 'bg-red-50'} px-3 py-1 text-sm ${expanded ? 'text-base' : ''}`}>
      {availability ? (
      <Ok className="text-green-600 w-6 h-6"/>
      ) : (
        <Fail className="text-red-600 w-6 h-6"/>
      )}

      {expanded && (
              <p className="text-base">{availability ? "Boş" : "Dolu"}</p>
      )}
    </div>
  )
}

export default Status