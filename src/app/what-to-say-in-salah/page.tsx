import { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ArabicTextBlock } from "@/components/learning/ArabicTextBlock";
import { TransliterationBlock } from "@/components/learning/TransliterationBlock";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "What to Say in Salah — Recitations, Arabic & Transliteration",
  description:
    "Learn what to recite in every posture of Salah with clear Arabic text, Roman transliteration, and simple English meanings for children.",
  path: "/what-to-say-in-salah",
});

const recitationsList = [
  {
    step: "1. Takbirat al-Ihram (Beginning Prayer)",
    context: "Said when raising hands to ear level at the start of prayer and when moving between postures.",
    arabic: "اللَّهُ أَكْبَرُ",
    transliteration: "Allahu Akbar",
    translation: "Allah is the Greatest.",
  },
  {
    step: "2. Opening Supplication (Thana)",
    context: "Recited quietly right after Takbir in the first Rakat while standing.",
    arabic: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَىٰ جَدُّكَ وَلَا إِلَٰهَ غَيْرُكَ",
    transliteration: "Subhanak Allahumma wa bihamdika, wa tabarakasmuka, wa ta'ala jadduka, wa la ilaha ghayruk",
    translation: "Glory and praise be to You, O Allah. Blessed is Your name, exalted is Your majesty, and there is no god worthy of worship besides You.",
  },
  {
    step: "3. Ta'awwudh & Basmalah",
    context: "Recited before reading Surah Al-Fatihah to seek Allah's protection.",
    arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ ۞ بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    transliteration: "A'udhu billahi minash-shaytanir-rajim. Bismillahir-Rahmanir-Rahim.",
    translation: "I seek refuge in Allah from Satan the outcast. In the name of Allah, the Most Gracious, the Most Merciful.",
  },
  {
    step: "4. Surah Al-Fatihah",
    context: "The essential opening chapter recited in every Rakat of prayer.",
    arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۞ الرَّحْمَٰنِ الرَّحِيمِ ۞ مَالِكِ يَوْمِ الدِّينِ ۞ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ۞ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
    transliteration: "Alhamdu lillahi Rabbil-'alamin. Ar-Rahmanir-Rahim. Maliki Yawmid-Din. Iyyaka na'budu wa iyyaka nasta'in. Ihdinas-siratal-mustaqim...",
    translation: "All praise belongs to Allah, Lord of all the worlds. The Most Gracious, the Most Merciful. Master of the Day of Judgment. You alone we worship, and You alone we ask for help. Guide us on the straight path...",
  },
  {
    step: "5. Ruku (Bowing Down)",
    context: "Recited 3 times while bowing in Ruku.",
    arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
    transliteration: "Subhana Rabbiyal 'Adheem",
    translation: "Glory be to my Lord, the Most Great.",
  },
  {
    step: "6. Rising & Standing after Ruku",
    context: "Recited while rising up from bowing and when standing upright.",
    arabic: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ ۞ رَبَّنَا وَلَكَ الْحَمْدُ",
    transliteration: "Sami'Allahu liman hamidah. Rabbana wa lakal hamd.",
    translation: "Allah listens to whoever praises Him. Our Lord, all praise belongs to You.",
  },
  {
    step: "7. Sujood (Prostration)",
    context: "Recited 3 times while in Sujood.",
    arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَىٰ",
    transliteration: "Subhana Rabbiyal A'la",
    translation: "Glory be to my Lord, the Most High.",
  },
  {
    step: "8. Sitting Between Sajdahs (Jalsah)",
    context: "Recited while sitting calmly between the two prostrations.",
    arabic: "رَبِّ اغْفِرْ لِي ۞ رَبِّ اغْفِرْ لِي",
    transliteration: "Rabbighfir li, Rabbighfir li",
    translation: "O my Lord, forgive me. O my Lord, forgive me.",
  },
  {
    step: "9. Tashahhud (Attahiyyat)",
    context: "Recited during the sitting position after 2 Rakat and in the final sitting.",
    arabic: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ ۞ السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ ۞ السَّلَامُ عَلَيْنَا وَعَلَىٰ عِبَادِ اللَّهِ الصَّالِحِينَ",
    transliteration: "At-tahiyyatu lillahi was-salawatu wat-tayyibat. As-salamu 'alayka ayyuhan-Nabiyyu wa rahmatullahi wa barakatuh. As-salamu 'alayna wa 'ala 'ibadillahis-salihin.",
    translation: "All compliments, prayers, and pure things belong to Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah.",
  },
  {
    step: "10. Salawat (Durood Ibrahim)",
    context: "Recited in the final sitting of prayer following Tashahhud.",
    arabic: "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
    transliteration: "Allahumma salli 'ala Muhammadin wa 'ala ali Muhammad, kama sallayta 'ala Ibrahima wa 'ala ali Ibrahima, innaka Hamidun Majid.",
    translation: "O Allah, send blessings upon Muhammad and the family of Muhammad, as You sent blessings upon Ibrahim and the family of Ibrahim. Indeed, You are Praiseworthy and Glorious.",
  },
  {
    step: "11. Salam (Tasleem)",
    context: "Recited while turning face right then left to finish prayer.",
    arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ",
    transliteration: "As-salamu 'alaykum wa rahmatullah",
    translation: "May the peace and mercy of Allah be upon you.",
  },
];

export default function WhatToSayInSalahPage() {
  return (
    <PageContainer>
      <Section className="py-8 bg-teal-50/50">
        <Breadcrumbs items={[{ label: "What to Say in Salah" }]} />
        <div className="max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            Recitation Guide
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            What to Say in Salah
          </h1>
          <p className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed">
            A complete reference guide for children and parents learning what to say in each posture of Salah — with Arabic text, transliteration, and English meanings.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-amber-50/80 p-5 rounded-2xl border border-amber-200 text-sm text-amber-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="font-bold">💡 Practice Tip:</span> Start by learning Takbir, Al-Fatihah, Ruku, and Sujood phrases first!
            </div>
            <Link
              href="/salah-for-kids"
              className="px-4 py-2 bg-emerald-700 text-white rounded-xl text-xs font-bold hover:bg-emerald-800 transition-colors shrink-0"
            >
              Practice in Guided Lessons →
            </Link>
          </div>

          <div className="space-y-6">
            {recitationsList.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/90 shadow-2xs space-y-4"
              >
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    {item.step}
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">{item.context}</p>
                </div>

                <ArabicTextBlock arabicText={item.arabic} />

                <TransliterationBlock
                  transliteration={item.transliteration}
                  translation={item.translation}
                />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </PageContainer>
  );
}
