import Link from "next/link";
import Image from "next/image";
import { auth, signOut, signIn } from "@/auth";
import { BadgePlus, LogOut } from "lucide-react";

const Navbar = async () => {
    const session = await auth();

    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="/pitch/public">
                    <Image src="/logo.png" alt="logo" width={144} height={30} />
                </Link>

                <div className="flex items-center gap-5">
                    { session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                            <span>
                                create startup
                            </span>
                            </Link>
                            <form
                                action={async () => {
                                    "use server";

                                    await signOut({redirectTo: "/"});
                                }}
                            >
                                <button type="submit">
                                    <span className="max-sm:hidden">Logout</span>
                                    {/*<LogOut className="size-6 sm:hidden text-red-500"/>*/}
                                </button>
                            </form>


                            <Link href={`/user/${session?.id}`}>
                                <span>
                                    {session?.user?.name}
                                </span>
                            </Link>
                        </>
                    ): (
                        <div className="flex gap-2">
                            {/* GitHub Login Button */}
                            <form
                                action={async () => {
                                    "use server";
                                    await signIn("github");
                                }}
                            >
                                <button type="submit">Login with GitHub</button>
                            </form>

                            {/* Google Login Button */}
                            <form
                                action={async () => {
                                    "use server";
                                    await signIn("google");
                                }}
                            >
                                <button type="submit">Login with Google</button>
                            </form>
                        </div>

                    )}
                </div>
            </nav>
        </header>
    )
}
export default Navbar
