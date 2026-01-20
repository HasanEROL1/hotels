import type { FC } from "react"
import type { Place } from "../../types"
import { Link } from "react-router-dom";
import Status from "./status";
import Rating from "./rating";
interface Props {
  place: Place;
}

const Card: FC<Props> = ({ place }) => {
  return (
    <Link to={`/place/${place.id}`}
      className="border border-zinc-300 rounded-md grid grid-cols-3 min-h-72 hover:shadow-md transition-shadow"
    >

      {/* resim */}
      <figure className="size-full bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
        {place.image_url ? (
          <img
            className="w-full h-full object-cover"
            src={place.image_url}
            alt={place.name || "picture"}
          />
        ) : (
          <span className="text-gray-400 text-4xl">🖼️</span> // placeholder simgesi
        )}
      
      </figure>

      {/* içerik */}
 <section className="p-4 col-span-2 flex flex-col justify-between">
        {/* içerik */}
        <div className="flex flex-col gap-3">
       <header className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">{place.name}</h2>
     <Status availability={place.availability} />
       </header>

       <p className="text-stone-500/80 text-lg ">{place.location}</p>

       <div className="flex flex-wrap gap-2">
        {place.amenities.map((i, key) => (
          <span key={key} className="text-xs bg-gray-200 rounded-full px-2 py-1">
            {i}
          </span>
        ))}
       </div>
        
            <Rating rating={place.rating} />
        
        </div>
       

       {/*fiyat bilgisi */}
       <div className="flex flex-col items-end">
        <span className="text-2xl font-bold">${place.price_per_night}</span>
        <span className="text-xs text-gray-400">Vergiler ve ücretler dahildir</span>
       </div>
      </section>


    </Link>
  );
};

export default Card