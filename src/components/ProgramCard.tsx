import Image from "next/image";
import Link from "next/link";
import { withLocale } from "@/lib/content";
import type { Locale, Program } from "@/lib/types";

export function ProgramCard({ locale, program }: { locale: Locale; program: Program }) {
  return (
    <article className="card">
      <Link href={withLocale(locale, `/programs/${program.slug}`)}>
        <div className="card-media">
          <Image src={program.thumbnail} alt={program.title} width={520} height={325} />
        </div>
        <div className="card-body">
          <span className="tag">{program.category}</span>
          <h3>{program.title}</h3>
          <p>{program.description}</p>
        </div>
      </Link>
    </article>
  );
}
