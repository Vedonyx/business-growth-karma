import { imageFor } from "@/lib/content";

export default function TedxPhoto({ eager = false }: { eager?: boolean }) {
  return (
    <figure className="tedx-photo">
      <img
        src={imageFor("tedx.png")}
        alt="Shweta Shah speaking on the TEDx stage"
        width={644}
        height={653}
        loading={eager ? "eager" : "lazy"}
      />
    </figure>
  );
}
