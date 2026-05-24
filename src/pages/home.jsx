import { useIsMobile } from "../utils/isMobile";
import DesktopLayout from "../layouts/desktop_layout";
import MobileLayout from "../layouts/mobile_layout";
import MainLayout from "../layouts/main_layout";

// home.jsx
export default function Home() {
  return (
    <MainLayout>
      <DesktopLayout />  {/* visible only lg+ */}
      <MobileLayout />   {/* visible only below lg */}
    </MainLayout>
  );
}
