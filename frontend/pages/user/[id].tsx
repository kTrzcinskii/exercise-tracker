import type { NextPage } from "next";
import { useRouter } from "next/router";
import useLoadSingleUser from "../../hooks/query/useLoadSingleUser";

interface SingleUserPageProps {}

const SingleUserPage: NextPage<SingleUserPageProps> = ({}) => {
  const router = useRouter();
  let userId = "";

  if (typeof router.query.id === "string") {
    userId = router.query.id;
  }

  const {} = useLoadSingleUser(userId);

  return <>User pzdr!</>;
};

export default SingleUserPage;
