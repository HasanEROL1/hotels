import * as yup from 'yup';

// regex:  /^[a-zA-Z0-9\s,'-]*$/ resmi isimler, şehirler ve adresler için özel karakterleri engeller
const nameRegex = /^[A-Za-zÇĞİÖŞÜçğıöşü ]+$/;

// formdaki inputlar için doğrulama şeması
export const schema = yup.object().shape({
    name:yup
    .string()
    .required("Başlık zorunludur")
    .min(3,"Başlık en az 3 karakter olmalıdır")
    .matches(nameRegex, "Başlık özel karakterler içeremez"),
    location:yup
    .string().
    required("Lütfen bir şehir girin")
    .min(3,"Şehir ismi en az 3 karakter olmalıdır"),
    address:yup.string()
    .required("Lütfen bir adres girin")
    .min(3,"Adres en az 3 karakter olmalıdır"),
    description: yup.
    string().
    required("Lütfen bir açıklama girin").
    min(10," Açıklama en az 10 karakter olmalıdır"),
    amenities: yup.string()
    .required("Lütfen hizmetleri girin")
    .min(3,"Hizmetler en az 3 karakter olmalıdır"),
    rating:yup
    .number()
    .required("Lütfen bir puan girin")
    .min(1," Puan en az 1 olmalıdır")
    .max(5," Puan en fazla 5 olmalıdır"),
    price_per_night:yup.number()
    .required("Lütfen bir fiyat girin")
    .min(20,"Fiyat en az 20 olmalıdır")
    .max(1000,"Fiyat en fazla 1000 olmalıdır"),
   
    availability:yup.boolean().default(false),

})