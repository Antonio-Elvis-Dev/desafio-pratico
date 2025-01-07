import React from "react";
import { AppSidebar } from "./components/app-sidebar";
import { ThemeProvider } from "./components/theme-provider";
import { SidebarProvider } from "./components/ui/sidebar";

import { List } from "./components/List.tsx";
import { FormScreem } from "./components/Form.tsx";

import { Routes, Route } from "react-router";
import { Header } from "./components/Header.tsx";

export function App({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider className="">
        <div className="flex w-full h-screen">

        <AppSidebar />

        <div className="flex flex-col flex-1 ">

        <Header />
       
        <main className="flex-1  overflow-auto p-4 ">
          
          {children}

          <Routes>
            <Route index path="/listProduct" element={<List />} />
            <Route path="/formProduct" element={<FormScreem />} />
          </Routes>

        </main>
        </div>

        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}
