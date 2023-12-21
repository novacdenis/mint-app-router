import { getAuth } from "@/features/auth";

import { LogoutButton } from "./LogoutButton";

export default async function Page() {
  const { user } = await getAuth();

  return (
    <>
      Protected {user?.email}
      <br />
      <LogoutButton />
    </>
  );
}
