// SAMPLE CONTENT — placeholder copy for layout review only.
// Every client, project, outcome and team member below is fictional and is
// rendered with a visible "Sample" tag. Replace with approved facts before
// removing the tags (see PRD: no fabricated clients, metrics or team presented as real).

export interface CaseStudy {
  slug: string;
  client: string;
  sector: string;
  title: string;
  summary: string;
  challenge: string;
  idea: string;
  work: string[];
  outcome: string;
  services: string[];
  colour: "signal" | "lime" | "paper" | "ink";
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "kiln-and-co",
    client: "Kiln & Co.",
    sector: "Ceramics studio",
    title: "Making slow craft fast enough for the feed.",
    summary: "A content system that turned hours at the wheel into seconds people stop for.",
    challenge:
      "A small ceramics studio had beautiful work but a feed that looked like a product catalogue. Posts went out irregularly and rarely started conversations.",
    idea:
      "Show the making, not just the made. We built the feed around the moments in the process people never see: the wobble, the reveal, the crack that didn’t happen.",
    work: ["Content territories", "Short-form video formats", "Weekly editorial rhythm", "Caption voice guide"],
    outcome:
      "The studio now has a repeatable weekly rhythm and a recognisable look, and comments shifted from emoji to questions about the process.",
    services: ["Social strategy", "Content systems"],
    colour: "signal",
  },
  {
    slug: "tidepool-swim",
    client: "Tidepool Swim",
    sector: "Outdoor swimming club",
    title: "A cold-water club that people actually want to join.",
    summary: "A launch campaign built on honest reactions to cold water.",
    challenge:
      "A growing open-water swim club needed new members, but its social presence only spoke to people who already swam.",
    idea:
      "Lead with the first ten seconds. We captured first-timers’ honest reactions to the cold and made the shock the invitation.",
    work: ["Campaign concept", "Launch story", "Member-led content", "Community prompts"],
    outcome:
      "The launch gave the club a clear story to tell newcomers and a format members now film themselves.",
    services: ["Campaign creative", "Community & growth"],
    colour: "lime",
  },
  {
    slug: "halfmoon-records",
    client: "Halfmoon Records",
    sector: "Independent record shop",
    title: "Turning crate-digging into a weekly ritual.",
    summary: "A recurring format that made the shop’s staff the stars.",
    challenge:
      "An independent record shop competing with streaming needed a reason for people to follow along between visits.",
    idea:
      "One staff pick, one story, every Friday. We gave each staff member a recurring slot and a simple format they could own.",
    work: ["Recurring series format", "Staff voice guidelines", "Visual templates", "Response playbook"],
    outcome:
      "Friday picks became the shop’s signature, with regulars replying with their own recommendations.",
    services: ["Content systems", "Community & growth"],
    colour: "paper",
  },
  {
    slug: "brightside-bikes",
    client: "Brightside Bikes",
    sector: "Urban bike repair",
    title: "Fixing the feed one flat tyre at a time.",
    summary: "Useful repair content that made the brand the first call.",
    challenge:
      "A bike repair shop wanted to be known beyond its street, but generic promo posts were invisible.",
    idea:
      "Be useful first. We built a library of quick fixes that solved real problems and ended with a reason to visit.",
    work: ["Social strategy", "How-to format", "Seasonal content plan", "Creative direction"],
    outcome:
      "The shop now has an evergreen library of how-to content and a clear role on each platform.",
    services: ["Social strategy", "Campaign creative"],
    colour: "ink",
  },
];

export const story = [
  "ORVIO started with a simple frustration: brands were posting more than ever and being remembered less.",
  "We are a small, social-first team of strategists, writers and makers. We work in the feed every day, so we build ideas for how people actually scroll, pause, share and reply.",
  "Every project starts with the conversation a brand wants to be part of, then builds the system, the creative and the community rhythm to stay in it.",
];

export const team = [
  { initials: "AR", name: "Alex Rivera", role: "Strategy lead", bio: "Turns audience behaviour into a clear social direction." },
  { initials: "SK", name: "Sam Kaur", role: "Creative director", bio: "Shapes the formats, look and voice brands are recognised by." },
  { initials: "JM", name: "Jo Mensah", role: "Community lead", bio: "Keeps brands listening, replying and learning from what people do." },
];

export const process = [
  { number: "01", title: "Reply", text: "We read your brief and reply with questions and first thoughts." },
  { number: "02", title: "Talk", text: "A short call to understand the brand, the audience and the timeline." },
  { number: "03", title: "Propose", text: "A focused proposal with scope, approach and next steps." },
  { number: "04", title: "Start", text: "We agree the plan and start shaping the work together." },
];
