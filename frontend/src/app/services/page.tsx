import { api } from "@/lib/api/client";
import { ServicesList } from "@/components/services-list";
import type { Service } from "@/types/api";
export const metadata={title:"خدماتنا | دار البناء المصرية"};
export default async function Services(){let services:Service[]=[];let failed=false;try{services=await api.services()}catch{failed=true}return <main className="container section"><p className="eyebrow">خدماتنا</p><h1 className="display mt-6 text-6xl md:text-8xl">العمل يبدأ بخطة واضحة.</h1><p className="mt-8 max-w-2xl leading-8 text-black/70">استكشف الخدمات المتاحة من دار البناء المصرية.</p><div className="mt-16">{failed?<p className="text-red-700">تعذر تحميل الخدمات حالياً. يرجى المحاولة لاحقاً.</p>:<ServicesList services={services}/>}</div></main>}
