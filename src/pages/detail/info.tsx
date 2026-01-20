import type { FC } from "react"
import type { Place } from "../../types";
import Rating from "../../components/card/rating";
interface Props {
  place: Place;
}
const Info: FC<Props> = ({ place }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between my-6 ">
      <div className="flex-1 min-w-0">
        <h1 className="text-2xl lg:text-3xl font-bold  ">{place.name}</h1>
        <p className="text-zinc-600 mt-2 max-sm:truncate">{place.description}</p>
      </div>
            <div className="mt-4 sm:mt-0 sm:ml-6 flex items-center">
              <Rating rating={place.rating} expanded />
            </div>
     </div>
  )
}

export default Info