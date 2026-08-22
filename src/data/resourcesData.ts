import { ResourceItem } from "@/types/resources";

export const resourcesData: ResourceItem[] = [
  {
    id: "salah-weekly-tracker",
    slug: "salah-weekly-tracker",
    title: "Weekly Salah Progress Chart",
    description:
      "A simple weekly prayer tracker designed for kids to check off daily prayers and build habit consistency.",
    category: "printable",
    type: "Printable Chart",
    audience: "Kids & Parents",
    status: "available",
    isPrintable: true,
    isDownloadable: false,
    webRoute: "/salah-chart-for-kids",
    icon: "📋",
    tags: ["Salah", "Habit Tracker", "Printable", "Weekly"],
    details: {
      whatIsItFor:
        "Helps children visualizes their daily prayer accomplishment and build a positive, consistent routine.",
      whoIsItFor:
        "Children starting their daily prayer journey (Ages 5–12) and parents encouraging regular habits.",
      howToUse: [
        "Print out the weekly chart or open it on your device.",
        "Hang it near the child's bedroom wall or study desk.",
        "Place a sticker or checkmark after completing each of the 5 daily prayers.",
        "Celebrate small milestones together at the end of each week.",
      ],
      features: [
        "Covers all 5 daily prayers (Fajr to Isha)",
        "Monday through Sunday weekly columns",
        "Clean, easy-to-read printable format",
        "Encourages intrinsic motivation without pressure",
      ],
    },
  },
  {
    id: "wudu-bathroom-poster",
    slug: "wudu-bathroom-poster",
    title: "Step-by-Step Wudu Bathroom Guide",
    description:
      "A visual step-by-step ablution poster with icons and clear descriptions to display near the bathroom sink.",
    category: "wudu",
    type: "Printable Chart",
    audience: "Kids & Parents",
    status: "available",
    isPrintable: true,
    isDownloadable: false,
    webRoute: "/wudu-chart-for-kids",
    icon: "💧",
    tags: ["Wudu", "Bathroom Poster", "Step-by-Step", "Printable"],
    details: {
      whatIsItFor:
        "Provides clear visual reminders for kids while performing Wudu at the sink.",
      whoIsItFor:
        "Young learners and parents building independence in daily purification routines.",
      howToUse: [
        "Print the Wudu poster page.",
        "Hang it at eye level near the bathroom washbasin.",
        "Guide your child through the 8 essential steps using the clear icons.",
      ],
      features: [
        "8 clearly numbered Wudu steps",
        "Child-friendly visual icons for each action",
        "Includes Bismillah and essential reminders",
        "Water-conscious tips included",
      ],
    },
  },
  {
    id: "parent-guide-teaching-salah",
    slug: "parent-guide-teaching-salah",
    title: "Parent's Guide: How to Teach Kids Salah",
    description:
      "Practical, loving strategies and step-by-step guidance for parents introducing prayer to young children.",
    category: "parent",
    type: "Guide",
    audience: "Parents & Teachers",
    status: "available",
    isPrintable: false,
    isDownloadable: false,
    webRoute: "/how-to-teach-kids-salah",
    icon: "🏡",
    tags: ["Parenting", "Teaching Guide", "Salah Steps", "Pedagogy"],
    details: {
      whatIsItFor:
        "Equips parents with gentle, effective, and authentic approaches to teaching Salah to children without stress.",
      whoIsItFor:
        "Parents, caregivers, and Islamic school teachers guiding children through early Islamic worship.",
      howToUse: [
        "Read through the core principles of leading by example.",
        "Use the Learn → Practice → Review → Encourage cycle.",
        "Implement short daily practice routines tailored to your child's age.",
      ],
      features: [
        "Age-appropriate developmental milestones",
        "Tips on handling mistakes with patience and positivity",
        "Framework for combining online visual lessons with physical practice",
      ],
    },
  },
  {
    id: "what-to-say-in-salah-reference",
    slug: "what-to-say-in-salah-reference",
    title: "What to Say in Salah Cheat Sheet",
    description:
      "Complete recitation guide featuring Arabic text, English transliteration, and meanings for every prayer position.",
    category: "salah",
    type: "Guide",
    audience: "Independent Learners (Ages 7+)",
    status: "available",
    isPrintable: true,
    isDownloadable: false,
    webRoute: "/what-to-say-in-salah",
    icon: "📖",
    tags: ["Recitation", "Arabic", "Transliteration", "Salah Words"],
    details: {
      whatIsItFor:
        "Helps children and beginners memorize and understand what is recited in Takbir, Ruku, Sujood, and Tashahhud.",
      whoIsItFor:
        "Children memorizing prayer recitations, converts, and parents reviewing correct pronunciation.",
      howToUse: [
        "Review step-by-step recitations during study sessions.",
        "Practice saying recitations aloud along with transliteration and translation.",
        "Use the practice cards to master one posture at a time.",
      ],
      features: [
        "Prominent Arabic font (Amiri font)",
        "Clear English phonetic transliteration",
        "Easy-to-understand English meanings",
        "Covers Takbir, Sana, Surah Al-Fatiha, Ruku, Sujood, Tashahhud, and Salam",
      ],
    },
  },
  {
    id: "salah-duas-for-kids",
    slug: "salah-duas-for-kids",
    title: "Essential Everyday Duas for Kids",
    description:
      "A curated collection of short, authentic supplications before and after Salah and Wudu.",
    category: "practice",
    type: "Guide",
    audience: "Kids & Parents",
    status: "available",
    isPrintable: true,
    isDownloadable: false,
    webRoute: "/salah-duas-for-kids",
    icon: "🤲",
    tags: ["Duas", "Supplications", "After Salah", "Wudu Dua"],
    details: {
      whatIsItFor:
        "Teaches children key sunnah duas for after Wudu and after concluding Salah.",
      whoIsItFor:
        "Kids looking to enrich their daily prayer routine with simple sunnah duas.",
      howToUse: [
        "Focus on learning one dua per week.",
        "Recite together after completing daily prayers.",
      ],
      features: [
        "Post-Wudu shahada dua",
        "Post-Salah astaghfirullah and tasbeeh",
        "Clear transliteration and meanings",
      ],
    },
  },
  {
    id: "rakat-breakdown-cheatsheet",
    slug: "rakat-breakdown-cheatsheet",
    title: "Daily Prayer Rakat Breakdown Sheet",
    description:
      "Visual guide breaking down how many Rakat are prayed in Fajr, Dhuhr, Asr, Maghrib, and Isha.",
    category: "salah",
    type: "Practice Sheet",
    audience: "Young Learners (Ages 4-7)",
    status: "available",
    isPrintable: true,
    isDownloadable: false,
    webRoute: "/2-rakat-salah",
    icon: "🔢",
    tags: ["Rakat", "2 Rakat", "3 Rakat", "4 Rakat", "Prayer Guide"],
    details: {
      whatIsItFor:
        "Helps children memorize the number of Rakat for each of the 5 daily prayers.",
      whoIsItFor:
        "Young learners mastering the structural differences between prayers.",
      howToUse: [
        "Use interactive 2-Rakat, 3-Rakat, and 4-Rakat step guides.",
        "Review before praying each prayer with children.",
      ],
      features: [
        "Clear visual units for 2, 3, and 4 Rakat prayers",
        "Interactive step-by-step position guides",
      ],
    },
  },
  {
    id: "pdf-salah-companion-pack",
    slug: "pdf-salah-companion-pack",
    title: "Printable Salah Companion Pack (PDF)",
    description:
      "High-resolution PDF bundle including colorful prayer charts, Wudu poster, and posture flashcards.",
    category: "printable",
    type: "Checklist",
    audience: "Kids & Parents",
    status: "coming-soon",
    isPrintable: true,
    isDownloadable: true,
    downloadUrl: "#",
    icon: "📦",
    tags: ["PDF Bundle", "High-Res Print", "Flashcards", "Poster"],
    details: {
      whatIsItFor:
        "A complete offline print bundle ready for high-quality home or classroom printing.",
      whoIsItFor:
        "Parents, Islamic schools, and teachers wanting ready-to-print vector materials.",
      howToUse: [
        "Download the PDF pack once released.",
        "Print on standard A4 or Letter paper.",
      ],
      features: [
        "High-definition vector graphics",
        "Includes printable badges and certificate of achievement",
      ],
    },
  },
  {
    id: "salah-reward-certificate",
    slug: "salah-reward-certificate",
    title: "Child's Salah Completion Certificate",
    description:
      "A printable encouragement certificate for children who complete learning their 5 daily prayers.",
    category: "practice",
    type: "Printable Chart",
    audience: "Kids & Parents",
    status: "coming-soon",
    isPrintable: true,
    isDownloadable: true,
    downloadUrl: "#",
    icon: "🎓",
    tags: ["Certificate", "Reward", "Encouragement", "Printable"],
    details: {
      whatIsItFor:
        "Celebrates children's milestone achievements when mastering their daily Salah steps.",
      whoIsItFor:
        "Parents and teachers rewarding child progress.",
      howToUse: [
        "Fill in child's name and date upon milestone completion.",
        "Frame or present during family family celebration.",
      ],
      features: [
        "Beautiful Islamic border styling",
        "Customizable name and date fields",
      ],
    },
  },
];
