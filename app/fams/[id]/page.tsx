import { famsData } from "@/modules/fams-data";
import { notFound } from "next/navigation";
import ProfilePage from "@/components/ProfilePage";

export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const personIndex = famsData.findIndex((data) => data.id == id);
  const person = famsData[personIndex];
  const prevID =
    personIndex > 0
      ? famsData[personIndex - 1].id
      : famsData[famsData.length - 1].id;
  const nextID =
    personIndex + 1 < famsData.length
      ? famsData[personIndex + 1].id
      : famsData[0].id;

  if (person === undefined) {
    return notFound();
  }
  return (
    <main className="min-h-screen bg-black pt-36 pb-96">
      <ProfilePage person={person} prevID={prevID} nextID={nextID} />
    </main>
  );
}
