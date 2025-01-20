"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

export default function SignUpPage() {
  const router = useRouter()

  const handleSignUp = (e) => {
    e.preventDefault()
    // Add your signup logic here
    router.push('/kyc')
  }

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center relative overflow-hidden">
      {/* Background Circles */}
      <div className="absolute right-0 top-0 h-[800px] w-[800px] rounded-full bg-blue-600 translate-x-1/2 -translate-y-1/4" />
      <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-blue-500 translate-x-1/3 -translate-y-1/4" />
      <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-blue-400 translate-x-1/4 -translate-y-1/4" />
      
      {/* Signup Card */}
      <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 w-[400px] relative z-10">
        <h1 className="text-2xl font-bold text-center mb-6">Sign Up Now</h1>
        
        <form onSubmit={handleSignUp} className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            className="w-full bg-white/90 border-none"
          />
          <Input
            type="text"
            placeholder="Username"
            className="w-full bg-white/90 border-none"
          />
          <Input
            type="password"
            placeholder="Password"
            className="w-full bg-white/90 border-none"
          />
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
            SIGN UP
          </Button>
        </form>

        <div className="mt-4">
          <p className="text-center text-sm text-gray-600">Or sign up with</p>
          <div className="flex gap-4 mt-2">
            <Button variant="outline" className="flex-1 gap-2">
              <FacebookIcon />
              Facebook
            </Button>
            <Button variant="outline" className="flex-1 gap-2">
              <GoogleIcon />
              Google
            </Button>
          </div>
        </div>

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-600">Already have an account? </span>
          <Link href="/login" className="text-blue-600 hover:underline">
            Login now
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