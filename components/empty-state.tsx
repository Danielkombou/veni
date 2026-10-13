"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { EmptyStateIcons } from "@/components/icons";

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

export function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
  return (
    <Empty className={cn("py-12", className)}>
      {icon ? <EmptyMedia variant="icon">{icon}</EmptyMedia> : null}
      <EmptyHeader>
        <EmptyTitle>{title}</EmptyTitle>
        {description ? <EmptyDescription>{description}</EmptyDescription> : null}
      </EmptyHeader>
      {action ? <EmptyContent>{action}</EmptyContent> : null}
    </Empty>
  );
}

function UploadTemplatesAction() {
  return (
    <Button nativeButton={false} render={<Link href="/generate" />}>
      Upload template
    </Button>
  );
}

function GenerateCertificatesAction() {
  return (
    <Button nativeButton={false} render={<Link href="/generate" />}>
      Generate certificates
    </Button>
  );
}

export function NoTemplatesState() {
  return (
    <EmptyState
      icon={<EmptyStateIcons.templates className="size-5" aria-hidden />}
      title="No templates yet"
      description="Upload your first certificate template to get started"
      action={<UploadTemplatesAction />}
    />
  );
}

export function NoCertificatesState() {
  return (
    <EmptyState
      icon={<EmptyStateIcons.certificates className="size-5" aria-hidden />}
      title="No certificates generated"
      description="Create your first batch of certificates"
      action={<GenerateCertificatesAction />}
    />
  );
}

export function NoBatchesState() {
  return (
    <EmptyState
      icon={<EmptyStateIcons.batches className="size-5" aria-hidden />}
      title="No batches yet"
      description="Generate your first certificate batch"
      action={<GenerateCertificatesAction />}
    />
  );
}

export function NoMembersState() {
  return (
    <EmptyState
      icon={<EmptyStateIcons.members className="size-5" aria-hidden />}
      title="No team members"
      description="Invite your team to collaborate"
      action={<Button>Invite members</Button>}
    />
  );
}

export function NoResultsState() {
  return (
    <EmptyState
      icon={<EmptyStateIcons.results className="size-5" aria-hidden />}
      title="No results found"
      description="Try adjusting your search or filter criteria"
    />
  );
}
