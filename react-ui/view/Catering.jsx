import { lazy, Suspense } from "react";
const CateringForm = lazy(() => import("../components/catering/CateringForm"));


const Catering = () => {
  return (
    <>
      <Suspense fallback={<div>Loading ...</div>}>
        <CateringForm />
      </Suspense>
    </>
  );
};
export default Catering;
