import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import type { Place, PlaceData, PlaceResponse, PlacesResponse } from "../types"
import api from "./api"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export const usePlaces = (paramsObj?: any) => {
 return useQuery({

        queryKey: ["places" ,paramsObj], // sorgu için benzersiz anahtar
    queryFn: () => api.get<PlacesResponse>("/places", {params: paramsObj}).then(res => res.data.places), // api isteği atan fonksiyon
// opsiyonel ayarlar

// error gelirse yeniden deneme
    retry: 3,
    //
    refetchOnWindowFocus: false, // pencere odağı değiştiğinde yeniden sorgulama
    retryDelay: 1000, // yeniden deneme gecikmesi (ms)
    staleTime: 5 * 60 * 1000, // verinin taze kalma süresi (ms)
    gcTime: 10 * 60 * 1000, // kullanılmayan verinin bellekten temizlenme süresi (ms)    
})}


 export const useCreatePlace = () =>    {
    const navigate = useNavigate();
     const queryClient = useQueryClient();
return useMutation({

    // mutation için key
    mutationKey: ["create"],
    // API isteği için kullanılan fonksiyon
    mutationFn: (body: PlaceData) => api.post("/places", body),
    // Başarılı olduğunda çalışacak fonksiyon
    onSuccess: (res) => {
        toast.success("Konaklama başarıyla oluşturuldu!")
         navigate("/")
        queryClient.invalidateQueries({ queryKey: ["places"] });

    },
    // Hata durumunda çalışacak fonksiyon
    onError: (err: any) => {
        toast.error(err.response?.data?.message || "Bir hata oluştu!")
    }
})
 }

 export const usePlace = (id: string) => {
    return useQuery({
        queryKey: ["place", id],
        queryFn: () => api.get<PlaceResponse>(`/place/${id}`).then(res => res.data.place),       
    })
 }


export const useRemovePlace = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey: ["remove"],

        mutationFn: (id: number) => api.delete(`/place/${id}`),

        onSuccess: () => {
            toast.success("Konaklama noktası kaldırıldı");
            navigate("/");
            queryClient.invalidateQueries({ queryKey: ["places"] });

        },

        onError: () => {
            toast.error("Bir hata oluştu");
        },
    });
};