export const sortOptions = [
    {
        label:"Seçiniz",
        value:""
    },
    {
        label: "En Ucuz",
        value: "price-asc"
    },
    {
        label: "En Pahalı",
        value: "price-desc" ,
    },
    {
        label: "En İyi Puan",
        value: "rating-desc"
    },
    {
        label: "En Kötü Puan",
        value: "rating-asc"
    }
];

export const initialValues = {
    name: "",
    location: "",
    address: "",
    description: "",
    amenities:"",
    rating:"",
    price_per_night:"",
    availability:false,
}

export const inputs = [
    { label: "Başlık", name: "name", placeholder: "Seaside Villa" },
    { label: "Lokasyon", name: "location", placeholder: "Ankara Türkiye" },
    { label: "Adres", name: "address", placeholder: "1985 Sokak No: 123" },
    {
        label: "Açıklama",
        name: "description",
        placeholder: "Deniz manzaralı bir villa...",
    },
    { label: "Hizmetler", name: "amenities", placeholder: "Wifi, Havuz, Park" },
    { label: "Puan", name: "rating", placeholder: "4.5" },
    { label: "Gece Fiyatı", name: "price_per_night", placeholder: "1000$" },
    {
        label: "Uygunluk (Şuan müsait mi?)",
        name: "availability",
        type: "checkbox",
    },
];