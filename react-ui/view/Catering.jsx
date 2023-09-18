import { lazy, Suspense } from "react";
const CateringForm = lazy(() => import("../components/catering/CateringForm"));
import { PostMenu } from "../components";

const Catering = () => {
  return (
    <>
      <Suspense fallback={<div>Loading ...</div>}>
        <CateringForm />
        <PostMenu />
      </Suspense>
    </>
  );
};
export default Catering;
