"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function KYCPage() {
  const router = useRouter()

  const handleNext = (e) => {
    e.preventDefault()
    // Add your logic here if needed
    router.push('/kyc/intermediate') // Redirect to the intermediate verification page
  }

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center relative overflow-hidden">
      {/* Background Circles */}
      <div className="absolute right-0 top-0 h-[800px] w-[800px] rounded-full bg-blue-600 translate-x-1/2 -translate-y-1/4" />
      <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-blue-500 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-400 translate-x-1/4 -translate-y-1/4" />
      
      {/* KYC Card */}
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 w-[500px] relative z-10">
        <h1 className="text-2xl font-bold text-center mb-6">KYC VERIFICATION</h1>
        <p className="text-center text-sm text-gray-600 mb-4">Verify your identity and get started</p>
        
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Step 1/4</h2>
          <h3 className="text-md font-semibold">Verify Your Identity</h3>
          <p className="text-sm text-gray-600">Fill in the parts inside completing the interviews personal</p>
        </div>

        <form onSubmit={handleNext} className="space-y-4">
          <Input
            type="text"
            placeholder="Full Name"
            className="w-full bg-white/90 border-none"
          />
          <Input
            type="text"
            placeholder="Last Name"
            className="w-full bg-white/90 border-none"
          />
          <Input
            type="email"
            placeholder="Email Address"
            className="w-full bg-white/90 border-none"
          />
          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            NEXT
          </Button>
        </form>

        <div className="mt-6 text-center text-sm">
          <Link href="/dashboard" className="text-blue-600 hover:underline">
            Cancel
          </Link>
        </div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute left-10 top-10 w-8 h-8 rounded-full bg-blue-200/50" />
      <div className="absolute left-20 bottom-20 w-12 h-12 rounded-full bg-blue-200/50" />
      <div className="absolute right-40 bottom-40 w-6 h-6 rounded-full bg-blue-200/50" />
    </div>
  )
} 