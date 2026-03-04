import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <Card className="w-full max-w-md rounded-2xl shadow-lg">
        <CardContent className="p-6 space-y-4">
          <h1 className="text-2xl font-bold">Next.js Template</h1>
          <p className="text-muted-foreground">Next.js + TypeScript + Tailwind v3 + shadcn/ui</p>
          <Button className="w-full">Get Started</Button>
        </CardContent>
      </Card>
    </main>
  );
}
