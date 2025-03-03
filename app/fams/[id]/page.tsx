import { famsData } from "@/modules/fams-data";
import { notFound } from "next/navigation";
import ProfilePage from "@/components/ProfilePage";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // ✅ Await params before using it

  const personIndex = famsData.findIndex((data) => data.id === id);
  const person = famsData[personIndex];

  if (!person) return notFound();

  const prevID =
    personIndex > 0
      ? famsData[personIndex - 1].id
      : famsData[famsData.length - 1].id;
  const nextID =
    personIndex + 1 < famsData.length
      ? famsData[personIndex + 1].id
      : famsData[0].id;

  return (
    <main className="bgGrad pt-36 pb-0">
      <ProfilePage person={person} prevID={prevID} nextID={nextID} />
    </main>
  );
}
