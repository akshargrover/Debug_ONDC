"use client"

import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Mic, Image, Send, Bell, MessageSquare } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import styles from '@/styles/queries.module.css'

export default function QueriesPage() {
  return (
    <div className="flex min-h-screen bg-blue-50/30">
      <DashboardSidebar />
      <div className="flex-1 pl-24">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <span>HOME</span>
                <span>/</span>
                <span className="text-foreground">ORDER AND COMPLAINT</span>
              </div>
              <h1 className="text-2xl font-bold">ORDER AND COMPLAINT</h1>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Avatar className="h-8 w-8">
                <AvatarImage src="/avatar.png" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <Button variant="outline" className="rounded-full">
                All chats
              </Button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative w-96 mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search here..."
              className="pl-10 bg-white/90 border-none h-10 rounded-full"
            />
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-[1fr_1.5fr] gap-6">
            {/* Left Panel */}
            <div className={`backdrop-blur-md bg-white/30 rounded-3xl p-4 relative ${styles.gradientBorder}`}>
              <Tabs defaultValue="user" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-4 bg-blue-500">
                  <TabsTrigger 
                    value="user" 
                    className="data-[state=active]:bg-blue-600 rounded-full"
                  >
                    USER
                  </TabsTrigger>
                  <TabsTrigger 
                    value="business" 
                    className="data-[state=active]:bg-blue-600 rounded-full"
                  >
                    BUSINESS
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="user" className="h-[calc(100vh-280px)] overflow-auto">
                  {/* Add user list here */}
                </TabsContent>
                <TabsContent value="business" className="h-[calc(100vh-280px)] overflow-auto">
                  {/* Add business list here */}
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Panel - Chat Area */}
            <div className={`backdrop-blur-md bg-white/30 rounded-3xl flex flex-col relative ${styles.gradientBorder}`}>
              {/* Chat Header */}
              <div className="bg-blue-600 rounded-t-3xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-white/20 p-2 rounded-full">
                    <MessageSquare className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-white font-medium">Chat</span>
                </div>
                <div className="relative flex-1 max-w-md mx-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/70 h-4 w-4" />
                  <Input
                    placeholder="Search here..."
                    className="pl-10 bg-white/20 border-none text-white placeholder:text-white/70 rounded-full"
                  />
                </div>
              </div>

              {/* Chat Content */}
              <div className="flex-1 overflow-auto p-4">
                {/* Chat messages will go here */}
              </div>

              {/* Message Input */}
              <div className="m-4 flex items-center gap-2 bg-blue-600 rounded-xl p-2">
                <Input
                  placeholder="Type a message...."
                  className="flex-1 border-none bg-transparent text-white placeholder:text-white/70"
                />
                <div className="flex gap-2">
                  <Button size="icon" variant="ghost" className="text-white hover:bg-white/10">
                    <Mic className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="ghost" className="text-white hover:bg-white/10">
                    <Image className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="ghost" className="text-white hover:bg-white/10">
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 