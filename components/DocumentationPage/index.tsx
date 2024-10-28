import DocumentationAlbum from "./sections/DocumentationAlbum";
import DocumentationHero from "./sections/DocumentationHero";

const DocumentationPage = () => {
  return (
    <div className="bgGrad2 py-48 lg:py-24">
      <DocumentationHero />
      <DocumentationAlbum />
    </div>
  );
};

export default DocumentationPage;
