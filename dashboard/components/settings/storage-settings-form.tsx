"use client"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileUp } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function StorageSettingsForm() {
  const [autoUploadSettings, setAutoUploadSettings] = useState({
    mobileData: false,
    wifi: false,
    roaming: false
  })

  return (
    <div className="grid grid-cols-[1fr_300px] gap-6 h-[calc(100vh-240px)]">
      <div className="space-y-4 p-6 rounded-lg backdrop-blur-md bg-white/30 relative overflow-auto"
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
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">Media Auto Upload</h2>
            <RadioGroup defaultValue="option-one" className="space-y-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="mobile-data" id="mobile-data" />
                <Label htmlFor="mobile-data">When using mobile data</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="wifi" id="wifi" />
                <Label htmlFor="wifi">When connected to Wi-Fi</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="roaming" id="roaming" />
                <Label htmlFor="roaming">When on roaming</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Google Account</Label>
              <Select>
                <SelectTrigger className="h-8">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="account1">Account 1</SelectItem>
                  <SelectItem value="account2">Account 2</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Frequency</Label>
              <Select>
                <SelectTrigger className="h-8">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h2 className="text-lg font-semibold">Backup</h2>
          <p className="text-sm text-gray-600 mb-2">
            Back up your data, analytics to your Google Account's Storage.
          </p>
          <p className="text-sm mb-2">Last Backup: 12 January 2025</p>
          <Button className="bg-blue-600 h-8">Backup</Button>
        </div>

        <div className="flex gap-4 pt-4">
          <Button variant="outline" className="text-red-500 h-8">
            Discard Change
          </Button>
          <Button className="bg-blue-600 h-8">
            Save
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-white rounded-lg p-4 flex flex-col items-center justify-center h-[180px]">
          <FileUp className="h-10 w-10 text-blue-600 mb-2" />
          <p className="text-center">Add new files</p>
        </div>

        <div className="bg-white rounded-lg p-4 space-y-4">
          <div>
            <h3 className="font-medium mb-2">Your Storage</h3>
            <Progress value={25} className="mb-1" />
            <p className="text-sm text-gray-600">75 GB are used out of 100 GB</p>
          </div>

          <div>
            <h3 className="font-medium mb-4">Your Shared Folders</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-blue-50 rounded">
                <span>Keynote Files</span>
                <span className="text-gray-500">2 GB</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-purple-50 rounded">
                <span>Vacation Photos</span>
                <span className="text-gray-500">1.5 GB</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-pink-50 rounded">
                <span>Project Report</span>
                <span className="text-gray-500">3 GB</span>
              </div>
              <Button variant="ghost" className="w-full text-gray-500">
                + Add More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 