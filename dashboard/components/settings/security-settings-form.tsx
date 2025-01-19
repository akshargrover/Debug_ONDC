"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export function SecuritySettingsForm() {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div 
        className="space-y-6 p-6 rounded-lg backdrop-blur-md bg-white/30 relative"
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
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Reset Your Password</h2>
          <h3 className="text-md">General Security</h3>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="oldPassword">Old Password</Label>
              <Input
                id="oldPassword"
                type="password"
                placeholder="Password"
                value={formData.oldPassword}
                onChange={(e) => setFormData({ ...formData, oldPassword: e.target.value })}
                className="bg-white/50 border-0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <Input
                id="newPassword"
                type="password"
                placeholder="Password"
                value={formData.newPassword}
                onChange={(e) => setFormData({ ...formData, newPassword: e.target.value })}
                className="bg-white/50 border-0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">New Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                className="bg-white/50 border-0"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <Button type="button" variant="outline" className="bg-white/50 text-red-500 border-red-500">
              Discard Change
            </Button>
            <Button type="submit" className="bg-blue-600">
              Reset
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
} 