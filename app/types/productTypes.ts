import { z } from "zod";
export type Productlist = {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string | undefined>;
};

export type Products = Productlist[];
export const FormSchema = z.object({
  name: z.string().min(1, "Please pick a unique name you want for your shirt"),
  address: z.string().min(1, "Please provide a delivery address"),
  state: z.string().min(1, "Please provide a delivery state"),
  email: z.email().min(1, "Please provide a valid email"),
  phone: z.regex(/^\d+$/, "Please provide a valid phone number"),
});
export type Orderdetails = Productlist & {
  productId: string;
  designerEmail: string;
  productName: string;
};

export type ShippingFormInput = z.infer<typeof FormSchema>;
