import { Award, FileQuestion, Inbox } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Icon } from "@/components/icons";
import { NoBatchesState, NoCertificatesState, NoTemplatesState } from "@/components/empty-state";
import { SkeletonCard, SkeletonListItem, SkeletonText } from "@/components/skeleton";
import { ToastDemo } from "./toast-demo";

function Section({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-10">
      <h2 className="font-heading text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{intro}</p>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export default function StyleGuidePage() {
  return (
    <main className="flex flex-1 flex-col pb-20">
      <div className="mx-auto w-full max-w-5xl px-4 pt-12">
        <p className="font-mono text-xs text-primary">STYLE GUIDE</p>
        <h1 className="mt-2 font-heading text-3xl font-semibold">Veni visual language</h1>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
          One place to see the tokens, components, and patterns every pilot screen uses.
        </p>
      </div>

      <Section
        title="Color and type"
        intro="Theme tokens only. Primary green carries actions, muted tones carry help text."
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Primary</CardTitle>
              <CardDescription>Actions and focus</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-16 rounded-lg bg-primary" />
              <p className="mt-3 font-mono text-xs text-muted-foreground">bg-primary</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Muted</CardTitle>
              <CardDescription>Help and empty states</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-16 rounded-lg bg-muted" />
              <p className="mt-3 font-mono text-xs text-muted-foreground">bg-muted</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Type</CardTitle>
              <CardDescription>Outfit, Nunito, JetBrains Mono</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="font-heading text-lg font-semibold">Heading sample</p>
              <p className="font-serif text-sm">Serif sample for soft notes</p>
              <p className="font-mono text-xs">mono sample for ids</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="Icons" intro="Lucide only, one stroke width, five sizes.">
        <Card>
          <CardContent className="flex items-center gap-6 pt-6">
            <Icon icon={FileQuestion} size="sm" label="Template icon" />
            <Icon icon={Award} size="md" label="Certificate icon" />
            <Icon icon={Inbox} size="lg" label="Batch icon" />
            <span className="font-mono text-xs text-muted-foreground">stroke width 2</span>
          </CardContent>
        </Card>
      </Section>

      <Section title="Buttons and badges" intro="Default carries the action. Outline and ghost carry the rest.">
        <div className="flex flex-wrap items-center gap-2">
          <Button>Generate</Button>
          <Button variant="secondary">Preview</Button>
          <Button variant="outline">Back</Button>
          <Button variant="ghost">Skip</Button>
          <Button variant="destructive">Delete</Button>
          <Badge>Free pilot</Badge>
          <Badge variant="secondary">Monthly</Badge>
        </div>
      </Section>

      <Section title="Forms" intro="One input style, clear labels, inline errors where needed.">
        <Card>
          <CardContent className="grid gap-4 pt-6 sm:grid-cols-2">
            <label className="grid gap-2 text-sm">
              Organization name
              <Input placeholder="Acme Studios" />
            </label>
            <label className="grid gap-2 text-sm">
              Website
              <Input placeholder="https://example.com" inputMode="url" />
            </label>
          </CardContent>
        </Card>
      </Section>

      <Section title="Tables" intro="One table pattern for batches, members, and payments.">
        <Card>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Batch</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Recipients</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Graduation 2026</TableCell>
                  <TableCell>
                    <Badge>Ready</Badge>
                  </TableCell>
                  <TableCell>128</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Bootcamp cohort 4</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Processing</Badge>
                  </TableCell>
                  <TableCell>312</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Section>

      <Section title="Toasts" intro="Top right, short text, one clear action at most.">
        <Card>
          <CardContent className="pt-6">
            <ToastDemo />
            <p className="mt-4 text-xs text-muted-foreground">
              Success and info close on their own. Errors stay until dismissed.
            </p>
          </CardContent>
        </Card>
      </Section>

      <Section title="Empty states" intro="Icon plus title plus help text plus one action.">
        <div className="grid gap-4 lg:grid-cols-3">
          <Card>
            <CardContent>
              <NoTemplatesState />
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <NoCertificatesState />
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <NoBatchesState />
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section title="Loading" intro="Skeletons match the shape of the content that is coming.">
        <div className="grid gap-4 lg:grid-cols-2">
          <SkeletonCard />
          <div className="rounded-lg border border-border bg-card">
            <SkeletonListItem />
            <SkeletonListItem />
            <div className="p-4">
              <SkeletonText lines={2} />
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Layout"
        intro="Centered container, generous spacing, three breakpoints."
      >
        <Card>
          <CardContent className="pt-6 font-mono text-xs text-muted-foreground">
            <p>Container: max width 1280, padding 16</p>
            <p className="mt-2">Mobile: below 640. Tablet: 640 to 1024. Desktop: above 1024.</p>
          </CardContent>
        </Card>
      </Section>
    </main>
  );
}
