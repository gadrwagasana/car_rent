import { Cars_aside } from "@/components/site/navbar/aside/cars_aside";
import React from "react";

interface Props {
    children : React.ReactNode
}

const All_cars_layout = ({children} : Props) => {
    return ( 
        <main className=" flex">
            <Cars_aside/>
            <div className=" ml-80">
                {children}
            </div>
        </main>
     );
}
 
export default All_cars_layout;