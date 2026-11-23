import { ArrowLeft, Scroll } from "lucide-react";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12">
      <Link
        href="/"
        className="absolute left-4 top-4 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:left-6 sm:top-6"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back
      </Link>
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
