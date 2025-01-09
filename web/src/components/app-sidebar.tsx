import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Home, Box } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export function AppSidebar() {
  const items = [
    {
      title: "Cadastrar",
      url: "/",
      icon: Home,
    },
    {
      title: "Produtos",
      url: "/listProduct",
      icon: Box,
    },
  ];

 const navigate = useNavigate()


  return (
    <Sidebar className="w-64 flex-shrink-0 bg-gray-900">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup className="">
          <SidebarGroupLabel className="text-xl font-bold mb-4 cursor-pointer "   >
            Cadastre Aqui
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    
                      <Link to={item.url} onClick={()=>console.log(`Navegação para ${item.url}`)}>
                        <item.icon className="mr-2" />
                        <span>{item.title}</span>
                      </Link>
                    
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
