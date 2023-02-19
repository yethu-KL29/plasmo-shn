import { IconButton, Tab, Tabs } from "@mui/material";
import React from "react";
import "./app.css";
import ThumbUpAltSharpIcon from '@mui/icons-material/ThumbUpAltSharp';

export default function Navbar(){
    return(
                 <div className="promofocus">
                    <IconButton>
                        <ThumbUpAltSharpIcon/>  
                    </IconButton>
                    <h1>SHN POMO</h1> 
            
          
                    </div>
            

    )
}