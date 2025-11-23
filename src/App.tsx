import React, { Suspense } from "react";
import { Calendar } from "@/components/calendar/calendar";
import { CalendarSkeleton } from "@/components/calendar/skeletons/calendar-skeleton";
import { AuthProvider } from "@/contexts/auth-context";
import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <Suspense fallback={<CalendarSkeleton />}>
      <AuthProvider>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem storageKey="vite-ui-theme">
          <div className="h-screen w-screen p-4 overflow-hidden bg-background">
            <Calendar />
          </div>
        </ThemeProvider>
      </AuthProvider>
    </Suspense>
  )
}

export default App