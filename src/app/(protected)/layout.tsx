import { ProtectedRoute } from "@/features/auth";

export default async function Layout({ children }: { children: React.ReactNode }) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}
