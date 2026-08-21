import { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ArabicTextBlock } from "@/components/learning/ArabicTextBlock";
import { TransliterationBlock } from "@/components/learning/TransliterationBlock";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Salah Duas for Kids — Important Prayers Before & After Prayer",
  description:
    "Essential Islamic duas for children before, during, and after Salah with Arabic text, transliteration, and child-friendly meanings.",
  path: "/salah-duas-for-kids",
});

export default function SalahDuasForKidsPage() {
  return (
    <PageContainer>
      <Section className="py-8 bg-teal-50/50">
        <Breadcrumbs items={[{ label: "Salah Duas for Kids" }]} />
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Salah Duas for Kids
          </h1>
          <p className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed">
            Beautiful and simple supplications (duas) to memorize when learning Salah.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-2">
              Dua After Wudu
            </h2>
            <ArabicTextBlock arabicText="أَشْهَدُ أَنْ لَا إِلٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ" />
            <TransliterationBlock
              transliteration="Ash-hadu an la ilaha illallahu wahdahu la sharika lahu wa ash-hadu anna Muhammadan 'abduhu wa rasuluh"
              translation="I bear witness that there is no deity worthy of worship except Allah alone, with no partner, and I bear witness that Muhammad is His servant and Messenger."
            />
          </div>
        </div>
      </Section>
    </PageContainer>
  );
}
