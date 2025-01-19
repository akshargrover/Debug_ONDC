"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Upload } from "lucide-react"

export function AccountSettingsForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    shopName: "",
    phoneNumber: "",
    description: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      {/* Background blur and gradient border container */}
      <div 
        className="p-6 rounded-lg backdrop-blur-md bg-white/30 relative"
        style={{
          border: '1px solid transparent',
          backgroundClip: 'padding-box',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: '0.5rem',
            padding: '1px',
            background: 'linear-gradient(148.91deg, #96B8FA -56.52%, rgba(95, 139, 223, 0.64) -25.12%, rgba(48, 100, 199, 0.66) 1.95%, #003CAF 29.35%)',
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            pointerEvents: 'none'
          }
        }}
      >
        <div className="grid grid-cols-[200px_1fr] gap-x-8">
          {/* Left column - Profile Picture */}
          <div>
            <Label className="text-sm mb-2 block">Your Profile Picture</Label>
            <div className="w-full h-32 border-2 border-dashed rounded-lg flex flex-col items-center justify-center text-gray-400 cursor-pointer hover:border-blue-500 bg-white/50">
              <Upload className="h-6 w-6 mb-1" />
              <span className="text-xs">Upload your photo</span>
            </div>
          </div>

          {/* Right column - Form Fields */}
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label htmlFor="fullName" className="text-sm">Full name</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Enter your full name"
                  className="h-8 bg-white/50 border-0"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email" className="text-sm">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email"
                  className="h-8 bg-white/50 border-0"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <Label htmlFor="shopName" className="text-sm">Shop name</Label>
                <Input
                  id="shopName"
                  value={formData.shopName}
                  onChange={(e) => setFormData({ ...formData, shopName: e.target.value })}
                  placeholder="Enter shop name"
                  className="h-8 bg-white/50 border-0"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="phoneNumber" className="text-sm">Phone number</Label>
                <div className="flex">
                  <div className="bg-white/50 px-3 flex items-center rounded-l-md">
                    +91
                  </div>
                  <Input
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    placeholder="Enter phone number"
                    className="rounded-l-none h-8 bg-white/50 border-0"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <Label htmlFor="description" className="text-sm">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Write about yourself e.g your personal background, experience, vision ETC"
                className="h-20 bg-white/50 border-0 resize-none"
              />
            </div>

            <div className="flex gap-4 pt-2">
              <Button type="submit" className="h-8 bg-blue-600">
                Update Profile
              </Button>
              <Button type="button" variant="outline" className="h-8">
                Reset
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
} 