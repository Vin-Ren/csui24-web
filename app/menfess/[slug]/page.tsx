// Ini adalah Server Component secara default (bisa pakai async)
export default async function MenfessPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <div>
      <h1>Menfess Slug</h1>
      <p>Slug: {slug}</p>
    </div>
  );
}
