import { format } from "date-fns";
import type { IEvent } from "@/components/calendar/interfaces";

export function generateGoogleCalendarLink(event: IEvent): string {
    const startDate = format(new Date(event.startDate), "yyyyMMdd'T'HHmmss");
    const endDate = format(new Date(event.endDate), "yyyyMMdd'T'HHmmss");
    const details = encodeURIComponent(event.description || "");
    const location = encodeURIComponent(""); // Add location if available in IEvent

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        event.title,
    )}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
}

export function generateOutlookCalendarLink(event: IEvent): string {
    const startDate = new Date(event.startDate).toISOString();
    const endDate = new Date(event.endDate).toISOString();
    const details = encodeURIComponent(event.description || "");
    const location = encodeURIComponent("");

    return `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(
        event.title,
    )}&body=${details}&startdt=${startDate}&enddt=${endDate}&location=${location}`;
}

export function generateICalendarLink(event: IEvent): string {
    const startDate = format(new Date(event.startDate), "yyyyMMdd'T'HHmmss");
    const endDate = format(new Date(event.endDate), "yyyyMMdd'T'HHmmss");
    const now = format(new Date(), "yyyyMMdd'T'HHmmss");

    const icsContent = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//rerivalley//Calendar//EN",
        "BEGIN:VEVENT",
        `UID:${event.id}@rerivalley.com`,
        `DTSTAMP:${now}`,
        `DTSTART:${startDate}`,
        `DTEND:${endDate}`,
        `SUMMARY:${event.title}`,
        `DESCRIPTION:${event.description || ""}`,
        "END:VEVENT",
        "END:VCALENDAR",
    ].join("\r\n");

    return `data:text/calendar;charset=utf8,${encodeURIComponent(icsContent)}`;
}
