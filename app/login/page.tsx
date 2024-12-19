import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth, signIn } from "../utils/auth";
import SubmitButton from "@/components/SubmitButton";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await auth();

  if(session?.user) {
    redirect('/dashboard')
  }
  return (
    <>
      <div className="flex h-screen w-full justify-center items-center px-4">
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>Enter your email below to login in to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form 
              action={async (formData) => {
                "use server"
                await signIn("nodemailer", formData);
              }} 
              className="flex flex-col gap-y-4"
            >
              <div className="flex flex-col gap-y-2">
                <Label>Email</Label>
                <Input 
                  name="email"
                  type="email"
                  required 
                  placeholder="email@email.com" 
                />
              </div>
              <SubmitButton text="Submit" />
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  )
}