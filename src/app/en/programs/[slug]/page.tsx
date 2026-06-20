import { ProgramDetailPage } from "@/components/pages";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProgramDetailPage locale="en" slug={slug} />;
}
