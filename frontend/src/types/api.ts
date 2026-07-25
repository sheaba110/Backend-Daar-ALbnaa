export interface Service { id: number; name: string; description: string }
export interface Project { id: number; title: string; description: string; image: string | null }
export interface ConsultationPayload { name: string; email: string; phone: string; services_type: string; preferred_date: string; message: string }
