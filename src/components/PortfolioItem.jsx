import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PortfolioItem(){
    const params = useParams
    const [item, setItem] =useState()

    useEffect(()=>{
        fetch (`http://localhost:3000/portfolios/${params.id}`)
        .then (resp)
    })
}

export default PortfolioItem