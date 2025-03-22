"use client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menubar } from "@/components/ui/menubar";



export default function Dashboard () {
  const router = useRouter()
  useEffect(() => {
    if (!localStorage.getItem("jwtToken")) {
      router.push("/login")
    }
  }, [router])

  const handlelogout = () => {
    localStorage.removeItem("jwtToken")
    router.push("/login")
  }

  return (
    <div>
      <div className="flex flex-row items-start justify-items-centert h-screen space-y-4">
        <h1>Dashboard</h1>
      <Menubar
        className="bg-white shadow-lg w-24 h-9"
       />
      
      <Button
        onClick={handlelogout}
        className="w-23 h-9 bg-primary text-primary-foreground shadow-xs hover:bg-primary/90"
      >Logout
      </Button>
      </div>
    </div>
  )
}
