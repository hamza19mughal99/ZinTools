import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import MainContent from "@/components/MainContent/mainContent";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <MainContent />
      <Footer />
    </main>
  );
}
