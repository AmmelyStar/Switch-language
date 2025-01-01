
import PageLayout from "../components/PageLayout";
import { useTranslations } from "next-intl";

export default function IndexPage() {
  const t = useTranslations('IndexPage');
  return (
    <PageLayout title={t("title")}>
      <p>gjdhthjjghbjty</p>
    </PageLayout>

    
  );
}




