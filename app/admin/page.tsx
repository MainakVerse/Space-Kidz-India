"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Lock, Loader2, RefreshCw, ShieldAlert } from "lucide-react"

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
  // Inputs
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // Data
  const [data, setData] = useState<any>(null)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/admin-dashboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      })
      const json = await res.json()

      if (!res.ok) {
        throw new Error(json.error || "Login failed")
      }

      // Success
      setData(json.data)
      setIsAuthenticated(true)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  // --- HELPER: Table Component ---
  const DataTable = ({ rows, columns }: { rows: any[]; columns: string[] }) => {
    if (!rows || rows.length === 0) return <p className="text-white/50 p-4">No records found.</p>

    return (
      <div className="rounded-md border border-white/20 overflow-x-auto">
        <table className="w-full text-sm text-left text-white">
          <thead className="text-xs text-[#ff6b35] uppercase bg-white/10">
            <tr>
              {columns.map((col) => (
                <th key={col} className="px-6 py-3 whitespace-nowrap">
                  {col.replace(/_/g, " ")}
                </th>
              ))}
              <th className="px-6 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="bg-transparent border-b border-white/10 hover:bg-white/5">
                {columns.map((col) => (
                  <td key={`${i}-${col}`} className="px-6 py-4 whitespace-nowrap text-white/80">
                    {row[col] || "-"}
                  </td>
                ))}
                <td className="px-6 py-4 text-white/60">
                  {new Date(row.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      
      {/* LOGIN SCREEN */}
      {!isAuthenticated && (
        <Card className="w-full max-w-md bg-[#0b0b0b] border-white/20 text-white shadow-2xl shadow-[#ff6b35]/10">
          <CardHeader>
            <CardTitle className="text-[#ff6b35] flex items-center gap-2">
              <Lock className="w-5 h-5" /> Admin Access
            </CardTitle>
            <CardDescription className="text-white/60">
              Enter master password to access database.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/5 border-white/20 text-white placeholder:text-white/30 focus:border-[#ff6b35]"
              />
              
              {error && (
                <div className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 p-3 rounded-md border border-red-500/20">
                  <ShieldAlert className="w-4 h-4" />
                  {error}
                </div>
              )}
              
              <Button disabled={loading} type="submit" className="w-full bg-[#ff6b35] hover:bg-[#ff8555] font-semibold">
                {loading ? <Loader2 className="animate-spin" /> : "Access Dashboard"}
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      {/* DASHBOARD SCREEN */}
      {isAuthenticated && data && (
        <div className="w-full max-w-7xl space-y-6 pt-10 h-screen overflow-y-auto pb-20 px-2 md:px-0">
          <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-6">
            <h1 className="text-3xl font-bold text-[#ff6b35]">Admin Dashboard</h1>
            <Button variant="outline" onClick={() => window.location.reload()} className="border-white/20 hover:bg-white/10">
              <RefreshCw className="w-4 h-4 mr-2" /> Logout
            </Button>
          </div>

          <Tabs defaultValue="contacts" className="w-full">
            <TabsList className="bg-white/10 w-full justify-start overflow-x-auto no-scrollbar">
              <TabsTrigger value="contacts">Contact Form</TabsTrigger>
              <TabsTrigger value="collabs">Collaborations</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="workshops">Workshops</TabsTrigger>
            </TabsList>

            <TabsContent value="contacts" className="mt-6">
              <h2 className="text-xl font-semibold mb-4 text-white/90">Contact Submissions</h2>
              <DataTable 
                rows={data.contacts} 
                columns={['name', 'email', 'phone', 'organization', 'message']} 
              />
            </TabsContent>

            <TabsContent value="collabs" className="mt-6">
              <h2 className="text-xl font-semibold mb-4 text-white/90">Collaboration Requests</h2>
              <DataTable 
                rows={data.collaborations} 
                columns={['name', 'email', 'phone', 'organization', 'collaboration_type', 'message']} 
              />
            </TabsContent>

            <TabsContent value="events" className="mt-6">
              <h2 className="text-xl font-semibold mb-4 text-white/90">Event Registrations</h2>
              <DataTable 
                rows={data.events} 
                columns={['full_name', 'email', 'phone', 'organization', 'country', 'event_name']} 
              />
            </TabsContent>

            <TabsContent value="workshops" className="mt-6">
              <h2 className="text-xl font-semibold mb-4 text-white/90">Workshop Applications</h2>
              <DataTable 
                rows={data.workshops} 
                columns={['workshop_name', 'student_name', 'student_class', 'school_name', 'parent_name', 'contact_number', 'email']} 
              />
            </TabsContent>
          </Tabs>
        </div>
      )}
    </div>
  )
}