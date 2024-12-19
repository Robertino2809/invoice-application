import { redirect } from "next/navigation";
import { signOut } from "../utils/auth";
import { requireUser } from "../utils/hooks";

export default async function DashboardRoute() {
  const session = await requireUser();

  if(!session?.user) {
    redirect("/")
  }
  return ( 
    <div>
      <h1>Hello from dashboard</h1>
      <form
        action={async () => {
          "use server"
          await signOut()
        }}
      >
        <button type="submit">Sign Out</button>
      </form>
    </div>
  )
}