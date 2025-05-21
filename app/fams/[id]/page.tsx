import { famsData } from "@/modules/fams-data";
import { notFound } from "next/navigation";
import ProfilePage from "@/components/ProfilePage";

// Server-side: generate metadata using local data
export async function generateMetadata({ params }: { params: { id: string } }) {
  const fam = famsData.find((p) => p.id === params.id);

  if (!fam) {
    return {
      title: 'Post Not Found',
      description: 'The requested post could not be found.',
    };
  }

  const metaTitle = `${fam['displayed-name']}'${fam['displayed-name'].toLowerCase().endsWith('s')? '' : 's'} Profile`;
  const metaImage = `${process.env.NEXT_PUBLIC_BASE_URL}/${fam['image-filename']}`

  return {
    title: metaTitle,
    description: fam.description,
    openGraph: {
      title: metaTitle,
      description: fam.description,
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/fams/${fam.id}`,
      type: 'article',
      images: [
        {
          url: metaImage || `${process.env.NEXT_PUBLIC_BASE_URL}/customBanner.png`,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: fam.description,
      images: [metaImage || `${process.env.NEXT_PUBLIC_BASE_URL}/customBanner.png`],
    },
  };
}


export default function Page({ params }: { params: {id: string} }) {
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
    <main className="bgGrad pt-36 pb-0">
      <ProfilePage person={person} prevID={prevID} nextID={nextID} />
    </main>
  );
}
