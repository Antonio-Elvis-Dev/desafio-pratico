import { ModeToggle } from "./node-toggle";
import { SidebarTrigger } from "./ui/sidebar";


export const  Header = ()=> {
    return (
        <header className="flex items-center h-16 px-4 bg-gray-800 text-white shadow-md z-10 gap-3">
            <SidebarTrigger />
            <ModeToggle />
        </header>
        );
    };
