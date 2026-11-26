"use client";

import { Scroll } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "@/lib/auth-client";

export function Header() {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  const handleSignOut = async () => {
    await signOut();
    router.refresh();
  };

  return (
    <header className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-b border-border bg-background px-4 py-4 sm:px-6 sm:py-5 lg:px-12">
      <Link
        href="/"
        className="flex items-center gap-3 text-xl font-bold text-foreground"
      >
        <Scroll className="size-6 text-primary" aria-hidden="true" />
        Veni
      </Link>

      <nav className="flex w-full flex-wrap items-center justify-end gap-3 sm:ml-auto sm:w-auto sm:gap-6">
        {/*
          Pricing and Docs stay anchors with the default prevented, matching the
          reference app. Their href is `/` rather than the reference's `#pricing`
          and `#docs` fragments, because those point at nothing on this page and
          Biome's useValidAnchor rule rejects a bare fragment. Nothing navigates
          either way, since the default is always prevented.
        */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            alert("Pricing plans coming soon!");
          }}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Pricing
        </a>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            alert("Documentation coming soon!");
          }}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Docs
        </a>
        {isPending ? (
          <div className="h-10 w-20 animate-pulse rounded-none bg-muted" />
        ) : session?.user ? (
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-muted-foreground sm:inline">
              {session.user.name || session.user.email}
            </span>
            <Button variant="outline" onClick={handleSignOut}>
              Sign out
            </Button>
          </div>
        ) : (
          <Button variant="outline" render={<Link href="/sign-in" />}>
            Login
          </Button>
        )}
        <ThemeToggle />
      </nav>
    </header>
  );
}
