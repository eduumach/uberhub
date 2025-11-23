import { Suspense } from "react";
import { Calendar } from "@/components/calendar/calendar";
import { CalendarSkeleton } from "@/components/calendar/skeletons/calendar-skeleton";

export const Eventos = () => (
    <div className="p-8">
        <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Eventos</h1>
            <p className="text-muted-foreground">
                Calendário de eventos de tecnologia e inovação
            </p>
        </div>
        <Suspense fallback={<CalendarSkeleton />}>
            <Calendar />
        </Suspense>
    </div>
);
