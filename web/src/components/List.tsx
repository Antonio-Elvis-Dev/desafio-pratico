import React, { useEffect, useState } from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { api } from "@/services/api"
import { TableProduct } from "./TableProduct"



interface ProductProps{
  id: string
  name: string
  price: number
  avaliable: boolean
  createdAt: string
}

// interface TableProductProps{
//   data: ProductProps[]
// }

export const List = () => {

  const [data, setData] = useState<ProductProps[]>([])

  useEffect(() => {
    async function handleGetProducts() {
      const response = await api.get('/products')
      
      setData(response.data)

    }

    handleGetProducts()

  }, [data])

  return (
    <>
   <TableProduct data={data} />
    </>
  )

}