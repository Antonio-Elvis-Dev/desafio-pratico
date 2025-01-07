import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { z } from "zod";
import { Switch } from "./ui/switch";

import { useNavigate } from "react-router";

import { api } from "@/services/api";

const formSchema = z.object({
  name: z.string().min(3, "O nome é obrigatório."),
  price: z.number(),
  avaliable: z.boolean(),
});


export function FormScreem() {

    const navigate = useNavigate()

  const form = useForm({
    resolver: zodResolver(
      formSchema.extend({
        price: z
          .string()
          .refine(
            (val) => !isNaN(parseFloat(val)),
            "O preço deve ser um número."
          )
          .transform((val) => parseFloat(val)),
      })
    ),
    defaultValues: {
      name: "",
      price: 0,
      avaliable: true,
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data);

    try {
      await api.post("/product", data); // Envia os dados para a API
      alert("Produto cadastrado com sucesso!");
      navigate("/products")
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      alert("Ocorreu um erro ao cadastrar o produto.");
    }
  };

  return (
    <Form {...form}>
      <form className="mb-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome do produto</FormLabel>
              <FormControl>
                <Input placeholder="ex.: Feijão" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Preço:</FormLabel>
              <FormControl>
                <Input placeholder="ex.: 7.70" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="avaliable"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Disponível para venda?</FormLabel>
              <div className="flex flex-row gap-3">
                <FormDescription>Não</FormDescription>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={(value) => field.onChange(value)}
                  />
                </FormControl>
                <FormDescription>Sim</FormDescription>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Enviar</Button>
      </form>
    </Form>
  );
}
