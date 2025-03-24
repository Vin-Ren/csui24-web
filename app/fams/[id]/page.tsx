import dynamic from 'next/dynamic';
import { famsData } from "@/modules/fams-data";

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
  const metaImage = `https://${process.env.NEXT_PUBLIC_DOMAIN}/${fam['image-filename']}`

  return {
    title: metaTitle,
    description: fam.description,
    openGraph: {
      title: metaTitle,
      description: fam.description,
      url: `https://${process.env.NEXT_PUBLIC_DOMAIN}/fams/${fam.id}`,
      type: 'article',
      images: [
        {
          url: metaImage || `https://${process.env.NEXT_PUBLIC_DOMAIN}/customBanner.png`,
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
      images: [metaImage || `https://${process.env.NEXT_PUBLIC_DOMAIN}/customBanner.png`],
    },
  };
}

// Dynamically import the client component, keeping content CSR
const FamsProfilePage = dynamic(() => import('./FamsProfilePage.client'), { ssr: false });

export default function PostPage({ params }: { params: { id: string } }) {
  return <FamsProfilePage id={params.id} />;
}
