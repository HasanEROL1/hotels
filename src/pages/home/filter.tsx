import type { FC } from "react"
import { sortOptions } from "../../utils/constansts"
import { usePlaces } from "../../utils/service"
import { useSearchParams } from "react-router"


const Filter:FC = () => {
  const { data } = usePlaces()
  const [searchParams, setSearchParams] = useSearchParams()

  // otellerin bulundugu sehirleri benzersiz olarak al
  const locations = [...new Set(data?.map((i)=>i.location))];
  
  // url'e parametre ekler
  const handleChange = (name: string, value: string): void => {
    const params = new URLSearchParams(searchParams)
    params.set(name, value)
    setSearchParams(params)
  };
  return (
   <form className="lg:mt-15 flex flex-col gap-4 lg:gap-10 md:sticky lg:top-10">
    <div className="field">
      <label htmlFor="">Nereye Gitmek İstiyorsunuz ?</label>
      <select onChange={(e) => handleChange("location", e.target.value)}
      className="input">

        <option value="">Tüm Şehirler</option>
      {locations?.map((i)=>(
        <option key={i} value={i}>{i}</option>
      ))}
        </select>
    </div>

      <div className="field">
        <label htmlFor="">Konaklama yeri adına göre ara !</label>
        <input onChange={(e) => handleChange("title", e.target.value)}
        type="text" placeholder="Örn:Seaside Villa" className="input" />
        </div>

      <div className="field">
        <label htmlFor="">Sıralama Ölçütü</label>
        <select className="input" value={searchParams.get("order") || ""}
          onChange={(e) => handleChange("order", e.target.value)}>
         {sortOptions.map((i)=>(
          <option key={i.value} value={i.value}>{i.label}</option>
         ))}
        </select>
      </div>

      <div className="flex gap-4 justify-end" >
        <button className="bg-blue-500 p-1 px-4 text-white rounded-md hover:scale-105 cursor-pointer hover:bg-blue-700"
        type="reset"
        onClick={() => setSearchParams({})}
        >Filtreleri Temizle</button>
      </div>
   </form>
  )
}

export default Filter