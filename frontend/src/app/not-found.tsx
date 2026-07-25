import Link from "next/link";
export default function NotFound(){return <main className="container section"><p className="eyebrow">404</p><h1 className="display mt-6 text-6xl">الصفحة غير موجودة.</h1><Link href="/projects" className="button button-solid mt-10">العودة إلى المشاريع</Link></main>}
