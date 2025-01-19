"use client"

import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { SettingsTabs } from "@/components/settings/settings-tabs"
import { AccountSettingsForm } from "@/components/settings/account-settings-form"
import { SecuritySettingsForm } from "@/components/settings/security-settings-form"
import { SearchInput } from "@/components/settings/search-input"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { StorageSettingsForm } from "@/components/settings/storage-settings-form"
import { NotificationsSettingsForm } from "@/components/settings/notifications-settings-form"

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <div className="flex-1 pl-24">
        <div className="p-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <span>HOME</span>
            <span>/</span>
            <span className="text-foreground">SETTING</span>
          </div>

          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">SETTING</h1>
            <SearchInput />
          </div>
          
          <div className="space-y-6">
            <Tabs defaultValue="account" className="w-full">
              <SettingsTabs />
              <TabsContent value="account">
                <AccountSettingsForm />
              </TabsContent>
              <TabsContent value="security">
                <SecuritySettingsForm />
              </TabsContent>
              <TabsContent value="storage">
                <StorageSettingsForm />
              </TabsContent>
              <TabsContent value="notifications">
                <NotificationsSettingsForm />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
} 