import type { FC } from "react"
import type { Place } from './../../types/index';
interface Props {
  place: Place;
}

const Overview: FC<Props> = ({ place }) => {
  return (
    <div>
      <div className="border-b border-zinc-300 pb-2 flex items-center gap-6 text-zinc-500">
        <span className="cursor-pointer font-bold">Genel</span>
        <span className="cursor-pointer font-bold">Odalar</span>
        <span className="cursor-pointer  text-blue-500 font-bold">Özellikler</span>
        <span className="cursor-pointer font-bold">Kurallar</span>
      </div>

      <div className="flex justify-between max-lg:flex-col gap-5 mt-5">
        <div>
          <h1 className="font-bold text-2xl mt-4 mb-2">Özellikler</h1>

          <div className="grid grid-cols-2 gap-4 mt-4">
            {place.amenities.map((item) => (
              <span
                key={item}
                className="border border-zinc-300 rounded-md p-2  text-zinc-600 line-clamp-1"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="flex-1 min-w-0 h-60 lg:h-64">
        <iframe
          src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyBsIeyT619QHjkdSUcn_A0c1Bqy0X8yn8s&q=${place.location}`}
          className="w-full h-full rounded-md lg:max-h-62.5"
          loading="lazy"
        ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Overview