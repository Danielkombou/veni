import Link from "next/link";
import { Scroll } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12">
      <Link
        href="/"
        className="mb-8 flex items-center gap-3 text-2xl font-bold text-foreground"
      >
        <Scroll className="size-7 text-primary" aria-hidden="true" />
        Veni
      </Link>
      {children}
    </div>
  );
}
