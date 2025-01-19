"use client"

import { TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SettingsTabs() {
  return (
    <TabsList className="bg-blue-500 text-white w-full justify-start rounded-full h-12">
      <TabsTrigger 
        value="account" 
        className="data-[state=active]:bg-blue-600 rounded-full px-6"
      >
        Account Setting
      </TabsTrigger>
      <TabsTrigger 
        value="security" 
        className="data-[state=active]:bg-blue-600 rounded-full px-6"
      >
        Security
      </TabsTrigger>
      <TabsTrigger 
        value="storage" 
        className="data-[state=active]:bg-blue-600 rounded-full px-6"
      >
        Storage Data
      </TabsTrigger>
      <TabsTrigger 
        value="notifications" 
        className="data-[state=active]:bg-blue-600 rounded-full px-6"
      >
        Notifications
      </TabsTrigger>
    </TabsList>
  )
} 