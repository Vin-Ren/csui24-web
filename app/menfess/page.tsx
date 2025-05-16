import Menfess from "./Menfess";
import { MenfessInterface } from "./Menfess";

const MenfessPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/menfess`, {
    cache: "no-store",
  });
  const resJson: {
    success: boolean;
    message: string;
    data: MenfessInterface[];
  } = await res.json();

  return <Menfess menfess={resJson.data} />;
};
export default MenfessPage;
