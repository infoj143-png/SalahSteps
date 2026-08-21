import { LessonData } from "@/types/learning";

export const wuduLesson: LessonData = {
  id: "wudu-for-kids",
  title: "Wudu (Ablution) Step-by-Step Guide",
  subtitle: "Learn how to wash and prepare for prayer in 9 simple visual steps",
  description:
    "Wudu is the ritual washing before prayer. Follow this step-by-step interactive lesson with clear illustrations, Arabic recitations, transliteration, and parent tips.",
  category: "wudu",
  totalSteps: 9,
  steps: [
    {
      id: "wudu-step-1",
      stepNumber: 1,
      title: "Intention (Niyyah) & Bismillah",
      description:
        "Make intention in your heart to clean yourself for prayer, and begin by saying Bismillah (In the name of Allah).",
      iconType: "wudu-hands",
      illustrationDescription: "Child standing at tap preparing with pure intention",
      whatToSayTitle: "Recitation before Wudu",
      arabicText: "بِسْمِ اللَّهِ",
      transliteration: "Bismillah",
      translation: "In the name of Allah",
      tips: [
        "Remind children that intention (Niyyah) is quietly in the heart.",
        "Turn the tap water on gently to avoid wasting water.",
      ],
    },
    {
      id: "wudu-step-2",
      stepNumber: 2,
      title: "Washing Hands (3 Times)",
      description:
        "Wash both hands thoroughly up to the wrists 3 times. Ensure clean water reaches between all fingers and thumbs.",
      iconType: "wudu-hands",
      illustrationDescription: "Child washing both hands thoroughly under running tap water",
      tips: [
        "Interlace fingers (Khilal) to ensure water covers between each finger completely.",
      ],
    },
    {
      id: "wudu-step-3",
      stepNumber: 3,
      title: "Rinsing Mouth (3 Times)",
      description:
        "Take a small handful of water with your right hand, rinse inside your mouth gently, and spit it out cleanly 3 times.",
      iconType: "wudu-mouth",
      illustrationDescription: "Child taking clean water in right hand to rinse mouth",
      tips: [
        "Swish water gently inside the mouth to ensure cleanliness.",
      ],
    },
    {
      id: "wudu-step-4",
      stepNumber: 4,
      title: "Sniffing Water into Nose (3 Times)",
      description:
        "Sniff a small amount of water into your nostrils with your right hand, and blow it out softly using your left hand 3 times.",
      iconType: "wudu-nose",
      illustrationDescription: "Child gently sniffing water into nostrils and blowing out softly",
      tips: [
        "Sniff very gently so water doesn't go too high into the nose.",
      ],
    },
    {
      id: "wudu-step-5",
      stepNumber: 5,
      title: "Washing Face (3 Times)",
      description:
        "Wash your entire face 3 times — from the top of the forehead down to the bottom of the chin, and from earlobe to earlobe.",
      iconType: "wudu-face",
      illustrationDescription: "Child splashing clean water across face from forehead to chin",
      tips: [
        "Make sure no dry spots are left around the hairline or chin.",
      ],
    },
    {
      id: "wudu-step-6",
      stepNumber: 6,
      title: "Washing Arms up to Elbows (3 Times)",
      description:
        "Wash your right arm from fingertips up past the elbow 3 times. Then wash your left arm from fingertips up past the elbow 3 times.",
      iconType: "wudu-arms",
      illustrationDescription: "Child washing right arm up past elbow with left hand",
      tips: [
        "Always start with the right arm first, then move to the left arm.",
      ],
    },
    {
      id: "wudu-step-7",
      stepNumber: 7,
      title: "Wiping Head (Masah) (1 Time)",
      description:
        "Wipe your wet hands lightly over your hair from the front of the forehead to the back of the head, and bring them back to the front once.",
      iconType: "wudu-head",
      illustrationDescription: "Child wiping wet hands backward over hair and forward once",
      tips: [
        "Masah of the head is performed only once with wet hands.",
      ],
    },
    {
      id: "wudu-step-8",
      stepNumber: 8,
      title: "Wiping Ears (1 Time)",
      description:
        "Using your remaining wet fingers, place index fingers inside the ears and wipe thumbs around the back of ears once.",
      iconType: "wudu-ears",
      illustrationDescription: "Child wiping inner ear folds with index finger and outer ears with thumb",
      tips: [
        "This is done right after wiping the head using the same moisture.",
      ],
    },
    {
      id: "wudu-step-9",
      stepNumber: 9,
      title: "Washing Feet to Ankles (3 Times) & Dua",
      description:
        "Wash your right foot thoroughly up above the ankles 3 times, rubbing between toes. Then wash your left foot up above the ankles 3 times.",
      iconType: "wudu-feet",
      illustrationDescription: "Child washing right foot up above ankles ensuring water between toes",
      whatToSayTitle: "Dua after completing Wudu",
      arabicText: "أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
      transliteration: "Ash-hadu an la ilaha illallahu wahdahu la sharika lahu, wa ash-hadu anna Muhammadan 'abduhu wa rasuluh.",
      translation: "I bear witness that there is no god worthy of worship except Allah alone, without partner, and I bear witness that Muhammad is His servant and messenger.",
      tips: [
        "Start with the right foot, washing thoroughly including between all toes.",
        "Masha'Allah! Wudu is complete and you are now pure for Salah!",
      ],
    },
  ],
};
