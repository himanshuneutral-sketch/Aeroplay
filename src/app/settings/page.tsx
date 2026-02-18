import type { Metadata } from "next";
import SettingsPageClient from "./SettingsPageClient";

export const metadata: Metadata = {
  title: "Settings — Aeroplay Academy",
};

export default function SettingsPage() {
  return <SettingsPageClient />;
}
