"use client";

import { Button } from "@/components/ui/button";
import { toastHelpers } from "@/components/ui/toast";

export function ToastDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button onClick={() => toastHelpers.success("Batch ready", "Your certificates are ready to download")}>
        Success
      </Button>
      <Button variant="outline" onClick={() => toastHelpers.info("Verification sent", "Check your inbox to verify your email")}>
        Info
      </Button>
      <Button variant="outline" onClick={() => toastHelpers.warning("Payment pending", "Complete payment to activate your plan")}>
        Warning
      </Button>
      <Button variant="destructive" onClick={() => toastHelpers.error("Generation failed", "Try again or contact support")}>
        Error
      </Button>
    </div>
  );
}
