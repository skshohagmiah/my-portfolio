'use client'
import { createContext, useContext, useState } from "react";

const activeContext = createContext({
    activeSection:'',
    setActiveSection: (value:string) => {}
});

export function ActiveContextProvider({children}:{children:React.ReactNode}){
    const [activeSection, setActiveSection] = useState('home');


    return <activeContext.Provider value={{activeSection,setActiveSection}}>
        {children}
    </activeContext.Provider>
}

export function useActiveSection(){
    return useContext(activeContext)
}