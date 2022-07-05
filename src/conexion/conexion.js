import React, {useState, useEffect} from 'react';

export const Conexion = (url) =>{
    const [resultado,setResultado]=useState({cargando:true, dato:null});

    useEffect( ()=>{
        getDatos(url)
    },[url]); 
    
    async function getDatos (url){
        try{
        setResultado({cargando:true,dato:null}); 
        const respuesta=await fetch(url);
        const dato=await respuesta.json();
        setResultado({cargando:false,dato});
        }
        catch (e){
            console.log(e);
        }
    }

    return resultado;

}