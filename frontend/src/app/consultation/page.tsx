import { ConsultationForm } from "@/components/consultation-form";
export const metadata={title:"طلب استشارة | دار البناء المصرية"};
export default function Consultation(){return <main className="container section"><div className="grid gap-14 md:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow">طلب استشارة</p><h1 className="display mt-6 text-6xl md:text-7xl">لديك مشروع؟<br/>دعنا نتحدث.</h1><p className="mt-8 max-w-sm leading-8 text-black/70">أرسل تفاصيلك الأولية، وسيصل طلبك مباشرة إلى فريق دار البناء المصرية.</p></div><ConsultationForm/></div></main>}
