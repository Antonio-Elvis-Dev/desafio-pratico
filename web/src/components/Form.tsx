import { useForm,  } from "react-hook-form";
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

import { useNavigate } from "react-router-dom";


import { api } from "@/services/api";

const formSchema = z.object({
  name: z.string().min(3, "O nome é obrigatório."),
  price: z.number(),
  description:z.string().min(3,"Insira uma descrição"),
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
      description:"",
      avaliable: true,
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      await api.post("/product", data); // Envia os dados para a API
      alert("Produto cadastrado com sucesso!");

      form.reset()

      navigate("/listProduct")
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      alert("Ocorreu um erro ao cadastrar o produto.");
    }
  };

  return (
    <Form {...form}>
      <form className="mb-4 max-w-xl " onSubmit={form.handleSubmit(onSubmit)}>
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
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Input placeholder="ex.: Feijão tipo 1, rico em ferro..." {...field} />
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
        <Button className="mt-4 bg-green-600 hover:bg-green-400" type="submit">Enviar</Button>
      </form>
    </Form>
  );
}
