import { marketingConfig } from "@/config/marketing";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import { getCurrentUser } from "@/lib/authProvider";
import { Plus } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { SendFeedback } from "@/components/send-feedback";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  const user = await getCurrentUser();

  return (
    <div className='flex px-8 min-h-screen flex-col'>
      {/* <header className='md:fixed md:inset-x-0 md:top-0 py-4 md:z-50'>
        <div className='flex w-full max-w-6xl items-center justify-between mx-auto'>
          <div>
            <MainNav items={marketingConfig.mainNav} />
          </div>
          <nav className='flex space-x-2 items-center'>
            <GitHubButton />
            {!user && (
              <Link
                href='/login'
                className={cn(
                  buttonVariants({ variant: "secondary", size: "sm" }),
                  "px-4"
                )}
              >
                Login
              </Link>
            )}
            <ModeToggle />
            <Button>
              <Plus className='mr-2 h-4 w-4 stroke' /> Add Resource
            </Button>
          </nav>
        </div>
      </header> */}
      <header className='fixed bg-foreground/1 backdrop-blur-md inset-x-0 top-0 py-4 z-50'>
        <div className='flex w-full md:max-w-6xl items-center justify-between px-4 mx-auto'>
          <div>
            <MainNav items={marketingConfig.mainNav} />
          </div>
          <nav className='flex space-x-2 items-center'>
            <div className='hidden md:block'>
              <ModeToggle />
            </div>
            <Button>
              <Plus className='mr-2 h-4 w-4 stroke' /> Add Resource
            </Button>
          </nav>
        </div>
      </header>

      <main className='md:container px-3s md:flex-1'>{children}</main>
      <SendFeedback />
      <SiteFooter />
    </div>
  );
}
