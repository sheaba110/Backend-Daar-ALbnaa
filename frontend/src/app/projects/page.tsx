import { api } from "@/lib/api/client";
import { ProjectsList } from "@/components/projects-list";
import type { Project } from "@/types/api";
export const metadata={title:"مشاريعنا | دار البناء المصرية"};
export default async function Projects(){let projects:Project[]=[];let failed=false;try{projects=await api.projects()}catch{failed=true}return <main className="container section"><p className="eyebrow">مشاريعنا</p><h1 className="display mt-6 text-6xl md:text-8xl">أعمال صُنعت لتدوم.</h1><p className="mt-8 max-w-2xl leading-8 text-black/70">مشروعات مختارة من أعمال الشركة، تُعرض كما هي متاحة في النظام الإداري.</p><div className="mt-16">{failed?<p className="text-red-700">تعذر تحميل المشاريع حالياً. يرجى المحاولة لاحقاً.</p>:<ProjectsList projects={projects}/>}</div></main>}
