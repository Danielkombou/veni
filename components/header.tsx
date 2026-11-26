"use client";

import { Menu, Scroll } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { signOut, useSession } from "@/lib/auth-client";

export function Header() {
  const router = useRouter();
  const { data: session, isPending } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSignOut = async () => {
    setMobileMenuOpen(false);
    await signOut();
    router.refresh();
  };

  const handleComingSoon = (message: string) => {
    setMobileMenuOpen(false);
    alert(message);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background px-4 py-4 sm:px-6 sm:py-5 lg:px-12">
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 text-xl font-bold text-foreground"
        >
          <Scroll className="size-6 text-primary" aria-hidden="true" />
          Veni
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <nav
            aria-label="Primary"
            className="hidden items-center gap-6 sm:flex"
          >
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
                <span className="hidden text-sm text-muted-foreground lg:inline">
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
          </nav>

          <ThemeToggle />

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="sm:hidden"
                  aria-label="Open menu"
                >
                  <Menu aria-hidden="true" />
                </Button>
              }
            />
            <SheetContent side="right" className="w-72 max-w-full">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav
                aria-label="Mobile"
                className="flex flex-col gap-2 px-8 pb-8"
              >
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleComingSoon("Pricing plans coming soon!");
                  }}
                  className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  Pricing
                </a>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleComingSoon("Documentation coming soon!");
                  }}
                  className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  Docs
                </a>
                <div className="my-2 border-t border-border" />
                {isPending ? (
                  <div className="h-10 w-full animate-pulse rounded-none bg-muted" />
                ) : session?.user ? (
                  <div className="flex flex-col gap-3">
                    <p className="px-3 text-sm text-muted-foreground">
                      {session.user.name || session.user.email}
                    </p>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={handleSignOut}
                    >
                      Sign out
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="outline"
                    className="w-full"
                    render={<Link href="/sign-in" />}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Button>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
