import { z } from "zod";

export const contactTypeOptions = [
    "Familiar",
    "Trabajo",
    "Amigo",
    "Otros"
] as const;


export const contactSchema = z.object({
    name: z.string().min(1, {message: "Nombre requerido."}).min(3, {message: "Longitud mínima 3."}),
    lastname: z.string().min(1, {message: "Apellido requerido."}).min(3, {message: "Longitud mínima 3."}),
    email: z.string().min(1, {message: "Correo requerido."}).email("Correo inválido."),
    type: z.enum(contactTypeOptions, {errorMap: () => ({message: "Seleccione tipo."})}), 
})

export type Contact = z.infer<typeof contactSchema> & { id: string };