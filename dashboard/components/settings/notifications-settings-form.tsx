"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { Avatar } from "@/components/ui/avatar"
import { AvatarImage } from "@/components/ui/avatar"

export function NotificationsSettingsForm() {
  const [notifications, setNotifications] = useState([
    { 
      id: 1,
      avatar: "/avatar1.png",
      message: "Order Complaint from Olivia Rhye @olivia",
      time: "3h ago",
      read: false
    },
    {
      id: 2,
      avatar: "/avatar2.png",
      message: "Congrats! Order delivered to Phoenix Baker @phoenix",
      time: "5h ago",
      read: false
    },
    {
      id: 3,
      avatar: "/avatar3.png",
      message: "Congrats! Order delivered to Lori Bryson @lori",
      time: "1 day ago",
      read: false
    }
  ])

  return (
    <div className="space-y-6 p-6 rounded-lg backdrop-blur-md bg-white/30 relative"
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
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-4">Notifications</h2>
          <div className="flex gap-4 mb-6">
            <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
              All
            </button>
            <button className="text-gray-600 px-4 py-1 rounded-full text-sm">
              Unread
            </button>
          </div>

          <div className="space-y-4">
            {notifications.map((notification) => (
              <div 
                key={notification.id}
                className="flex items-center gap-4 bg-white/50 p-4 rounded-lg"
              >
                <Avatar className="h-10 w-10">
                  <AvatarImage src={notification.avatar} />
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm">{notification.message}</p>
                  <p className="text-xs text-gray-500">{notification.time}</p>
                </div>
                <button className="text-purple-600 text-lg">&times;</button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Settings</h2>
          <p className="text-sm text-gray-600">Customize how you'd like to be notified about updates.</p>

          <div className="flex items-center justify-between mb-4">
            <p className="text-sm font-medium">Desktop & Web Notifications</p>
            <Switch />
          </div>

          <div className="border-t pt-4">
            <table className="w-full">
              <thead>
                <tr className="text-sm text-gray-600">
                  <th></th>
                  <th className="text-right px-4">Email</th>
                  <th className="text-right px-4">Mobile</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="py-4">Complaints</td>
                  <td className="text-right px-4"><Checkbox /></td>
                  <td className="text-right px-4"><Checkbox /></td>
                </tr>
                <tr>
                  <td className="py-4">Orders</td>
                  <td className="text-right px-4"><Checkbox /></td>
                  <td className="text-right px-4"><Checkbox /></td>
                </tr>
                <tr>
                  <td className="py-4">Updates</td>
                  <td className="text-right px-4"><Checkbox /></td>
                  <td className="text-right px-4"><Checkbox /></td>
                </tr>
                <tr>
                  <td className="py-4">Login Alert</td>
                  <td className="text-right px-4"><Checkbox /></td>
                  <td className="text-right px-4"><Checkbox /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
} 