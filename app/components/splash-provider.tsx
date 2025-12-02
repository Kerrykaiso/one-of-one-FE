"use client"
import { useEffect,useState } from "react"


type ChildProps ={
    children:React.ReactNode
}
export default function SplashProvider({children}:ChildProps){
 const [loading, setLoading] = useState(true)

 useEffect(()=>{
  const timer=  setTimeout(()=>setLoading(false),3000)
   return ()=>clearTimeout(timer)
 },[])



 if (loading) {
    return (
        <>
        <div className="bg-gradient-to-l from-gray-900 to-gray-800 w-full h-screen flex justify-center items-center">
            <div><p>Welcome to one of one</p></div>
        </div>
        </>
    )
 }
 return(
    <>{children}</>
 )
}