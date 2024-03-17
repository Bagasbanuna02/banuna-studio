
import { SplashMain } from "@/app_modules/splash";
import { useShallowEffect, useTimeout } from "@mantine/hooks";
import { useRouter } from "next/navigation";

export default async function PageSplash() {
 
  return (
    <>
      <SplashMain />
    </>
  );
}
