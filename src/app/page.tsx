import Image from "next/image";
import AppLayout from "./Layouts/AppLayout/AppLayout";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <AppLayout>
      <HomeScreen></HomeScreen>
    </AppLayout>
  );
}
