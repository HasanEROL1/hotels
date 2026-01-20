import type { FC } from "react"
import { useRemovePlace } from "../../utils/service";

interface Props {
 id: number;
}

const Button: FC<Props> = ({ id }) => {

  const { mutate, isPending } = useRemovePlace();

  return (
    <div className="mt-6"> <hr></hr>
      <div className="flex justify-start my-5 mt-3" >
        <button
          onClick={() => mutate(id)}
          disabled={isPending}
          className=" bg-red-600/70 border  border-zinc-300 px-4 py-1.5 rounded-md transition hover:bg-red-400 cursor-pointer">Kaldır</button>
      </div>
    </div>
  )
}

export default Button