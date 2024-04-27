import { Site_navbar } from "@/components/site/navbar/site_navbar";
import React from "react";

interface Props {
    children: React.ReactNode
}
const Site_Layout = ({children} : Props) => {
    return ( 
        <React.Fragment>
            <header>
                <Site_navbar/>
            </header>
            {children}
        </React.Fragment>
     );
}
 
export default Site_Layout;