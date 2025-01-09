import { AppSidebar } from "./components/app-sidebar";
import { ThemeProvider } from "./components/theme-provider";
import { SidebarProvider } from "./components/ui/sidebar";

import { List } from "./components/List.tsx";
import { FormScreem } from "./components/Form.tsx";

import { Header } from "./components/Header.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <SidebarProvider className="">
          <div className="flex w-full h-screen">

            <AppSidebar />

            <div className="flex flex-col flex-1 ">

              <Header />

              <main className="flex-1  overflow-auto p-4 ">


                <Routes>
                  <Route path="/listProduct" element={<List />} />
                  <Route path="/" element={<FormScreem />} />
                </Routes>

              </main>
            </div>

          </div>
        </SidebarProvider>

      </BrowserRouter>
    </ThemeProvider>
  );
}
