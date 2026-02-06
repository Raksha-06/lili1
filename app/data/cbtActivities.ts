export type CBTStep = {
  id: string;
  title: string;
  description: string;
  minTimeSeconds: number; // minimum time user should spend on this step
};

export type CBTActivity = {
  id: string;
  title: string;
  description: string;
  totalMinTimeMinutes: number;
  steps: CBTStep[];
  reframeTemplate: string;
};

// export const CBT_ACTIVITIES_DATA: Record<string, CBTActivity> = {
//   emotional_journaling: {
//     id: "emotional_journaling",
//     title: "Emotional Journaling",
//     description:
//       "Understand your emotions by gently writing about what you’re experiencing without judgment.",
//     totalMinTimeMinutes: 10,

//     steps: [
//       {
//         id: "emotion",
//         title: "Identify the Emotion",
//         description:
//           "Pause for a moment and name the main emotion you’re feeling right now (e.g., sadness, anxiety, anger).",
//         minTimeSeconds: 60,
//       },
//       {
//         id: "situation",
//         title: "Describe the Situation",
//         description:
//           "Briefly describe what happened or what you were thinking about when this emotion showed up.",
//         minTimeSeconds: 120,
//       },
//       {
//         id: "body",
//         title: "Notice Body Sensations",
//         description:
//           "Where do you feel this emotion in your body? Tight chest, heavy stomach, tense shoulders?",
//         minTimeSeconds: 90,
//       },
//       {
//         id: "need",
//         title: "What Do You Need Right Now?",
//         description:
//           "Is there something you need—rest, reassurance, boundaries, kindness, or clarity?",
//         minTimeSeconds: 90,
//       },
//     ],

//     reframeTemplate:
//       "Even though I feel this emotion, it makes sense given the situation. Emotions are signals, not flaws. I can respond to myself with understanding instead of judgment.",
//   },

//   cognitive_reframing: {
//     id: "cognitive_reframing",
//     title: "Cognitive Reframing",
//     description:
//       "Challenge unhelpful thoughts and replace them with more balanced perspectives.",
//     totalMinTimeMinutes: 12,

//     steps: [
//       {
//         id: "thought",
//         title: "Identify the Thought",
//         description:
//           "Write down the exact thought that’s bothering you. Don’t soften it—capture it honestly.",
//         minTimeSeconds: 90,
//       },
//       {
//         id: "belief",
//         title: "How Strong Is This Belief?",
//         description:
//           "On a scale of 0–100%, how strongly do you believe this thought right now?",
//         minTimeSeconds: 60,
//       },
//       {
//         id: "evidence_for",
//         title: "Evidence Supporting the Thought",
//         description:
//           "List facts that genuinely support this thought (not feelings or assumptions).",
//         minTimeSeconds: 120,
//       },
//       {
//         id: "evidence_against",
//         title: "Evidence Against the Thought",
//         description:
//           "List facts that suggest this thought may not be entirely true.",
//         minTimeSeconds: 120,
//       },
//     ],

//     reframeTemplate:
//       "This thought is understandable, but it’s not the only explanation. A more balanced way to see this situation is to consider all the evidence, not just the painful parts.",
//   },

//   gratitude_reflection: {
//     id: "gratitude_reflection",
//     title: "Gratitude Reflection",
//     description:
//       "Gently shift attention toward moments of goodness, even on difficult days.",
//     totalMinTimeMinutes: 5,

//     steps: [
//       {
//         id: "moment",
//         title: "One Small Good Moment",
//         description:
//           "Recall one small moment today that felt okay, comforting, or pleasant.",
//         minTimeSeconds: 60,
//       },
//       {
//         id: "why",
//         title: "Why Did It Matter?",
//         description: "What made this moment meaningful or helpful for you?",
//         minTimeSeconds: 60,
//       },
//     ],

//     reframeTemplate:
//       "Noticing small positives doesn’t erase pain, but it reminds me that difficulty and goodness can exist together.",
//   },
// };

export const CBT_ACTIVITIES_DATA = {
  emotional_reasoning: {
    id: "emotional_reasoning",
    title: "Emotional Reasoning",
    description:
      "Learn to notice when emotions feel like facts and gently separate feelings from reality.",
    distortionType: "Emotional Reasoning",
    totalMinTimeMinutes: 15,

    steps: [
      {
        id: "situation",
        level: 1,
        title: "What happened?",
        explain:
          "Let’s begin with just the facts. No judgments, no conclusions — only what actually happened.",
        examples: [
          "My manager didn’t reply to my message today.",
          "I spoke up in a meeting and no one responded.",
          "My friend cancelled our plan at the last minute.",
          "I made a small mistake while presenting at work.",
        ],
        minTimeSeconds: 90,
      },

      {
        id: "emotions",
        level: 2,
        title: "What did you feel?",
        explain:
          "Emotions are important signals, not weaknesses. Name what you felt and how strong it was.",
        examples: [
          "Anxious (7/10), tense (6/10)",
          "Sad (8/10), disappointed (6/10)",
          "Embarrassed (7/10), nervous (5/10)",
          "Frustrated (6/10), helpless (5/10)",
        ],
        minTimeSeconds: 90,
      },

      {
        id: "automatic_thought",
        level: 3,
        title: "What went through your mind?",
        explain:
          "These are automatic thoughts. They often show up instantly and feel very convincing.",
        examples: [
          "I feel like a failure, so I must be one.",
          "This feels wrong, so something bad must be coming.",
          "I feel rejected, so I must not be important.",
          "I feel scared, so I can’t handle this.",
        ],
        minTimeSeconds: 120,
      },

      {
        id: "distortion",
        level: 4,
        title: "Notice the thinking pattern",
        explain:
          "Emotional reasoning means believing something is true because it feels true.",
        options: [
          "Because I feel this way, it must be true",
          "My emotions are proof of reality",
          "If it feels bad, it means something is wrong",
          "Strong emotions mean I’m failing",
        ],
        allowSkip: false,
        minTimeSeconds: 60,
      },

      {
        id: "challenge",
        level: 5,
        title: "Let’s slow this thought down",
        explain:
          "Take a small pause here. You’re not trying to prove yourself wrong or fix anything. Just gently look at your thought and see if there’s a wider picture.",
        examples: [
          "What do I know for sure actually happened?",
          "What part of this thought might be coming from how strong my feelings are?",
          "Could there be another way to look at this situation, even a small one?",
          "If someone I cared about felt this way, what would I say to comfort them?",
        ],
        minTimeSeconds: 180,
      },

      {
        id: "reframe",
        level: 6,
        title: "Create a balanced thought",
        explain:
          "Using what you’ve written, create a thought that separates feelings from facts.",
        examples: [
          "Even though I feel anxious, that doesn’t mean something bad will happen.",
          "Feeling like a failure doesn’t mean I actually am one.",
          "Just because this feels overwhelming doesn’t mean I can’t cope.",
          "My emotions are real, but they are not always accurate.",
        ],
        minTimeSeconds: 120,
      },
    ],

    finalSummary: {
      title: "You completed this reflection 🌱",
      insightTemplate:
        "You noticed how strong emotions made a thought feel true. By slowing down and checking the facts, you practiced separating feelings from reality — a key CBT skill that strengthens with practice.",
      highlightLabel: "Balanced Thought",
    },

    reframeExamples: [
      "Feeling anxious doesn’t mean danger is present.",
      "Feeling rejected doesn’t mean I am unimportant.",
      "Strong emotions don’t automatically equal truth.",
      "I can feel deeply and still question my conclusions.",
    ],
  },
  cognitive_restructuring: {
    id: "cognitive_restructuring",
    title: "Cognitive Restructuring",
    description:
      "Learn how to gently change unhelpful thoughts into more balanced and realistic ones.",
    distortionType: "Unhelpful Thinking",
    totalMinTimeMinutes: 18,

    steps: [
      {
        id: "situation",
        level: 1,
        title: "What happened?",
        explain:
          "Start with what actually happened. Stick to the facts, without blaming or judging yourself.",
        examples: [
          "I received critical feedback on my work.",
          "I didn’t get a reply after sending an important message.",
          "I made a mistake during an exam or presentation.",
          "Someone spoke to me in a short or cold tone.",
        ],
        minTimeSeconds: 90,
      },

      {
        id: "emotions",
        level: 2,
        title: "What did you feel?",
        explain:
          "Different situations bring different emotions. Name what you felt and how strong it was.",
        examples: [
          "Anxious (8/10), tense (6/10)",
          "Sad (7/10), discouraged (6/10)",
          "Embarrassed (7/10), nervous (5/10)",
          "Frustrated (6/10), upset (5/10)",
        ],
        minTimeSeconds: 90,
      },

      {
        id: "automatic_thought",
        level: 3,
        title: "What was your first thought?",
        explain:
          "This is the quick thought that popped into your mind before you had time to think it through.",
        examples: [
          "I’m not good enough.",
          "I always mess things up.",
          "They must think I’m incompetent.",
          "This proves I’m going to fail.",
        ],
        minTimeSeconds: 120,
      },

      {
        id: "belief_strength",
        level: 4,
        title: "How much did you believe this thought?",
        explain:
          "Notice how convincing this thought felt in the moment. There’s no right or wrong number.",
        examples: [
          "I believed it about 90%.",
          "It felt almost completely true at the time.",
          "I believed it strongly, around 80%.",
          "It felt true even though I wasn’t sure.",
        ],
        minTimeSeconds: 60,
      },

      {
        id: "challenge",
        level: 5,
        title: "Let’s look at the bigger picture",
        explain:
          "Now we gently question the thought. You’re not forcing positivity — just opening space for other possibilities.",
        examples: [
          "What facts actually support this thought?",
          "What facts don’t fully support it?",
          "Have there been times this thought wasn’t true?",
          "What would I say to a friend in this situation?",
        ],
        minTimeSeconds: 180,
      },

      {
        id: "reframe",
        level: 6,
        title: "Create a more balanced thought",
        explain:
          "Using everything you’ve written, create a thought that feels more realistic and kind.",
        examples: [
          "I made a mistake, but that doesn’t define my ability.",
          "One situation doesn’t erase my past efforts.",
          "I can learn from this without judging myself.",
          "This is uncomfortable, but it doesn’t mean I’m failing.",
        ],
        minTimeSeconds: 120,
      },
    ],

    finalSummary: {
      title: "You reshaped your thinking 🌱",
      insightTemplate:
        "You noticed an automatic thought, slowed it down, and looked at it from different angles. This helped you create a more balanced perspective — a core skill in cognitive restructuring.",
      highlightLabel: "Balanced Thought",
    },

    reframeExamples: [
      "A mistake is feedback, not a verdict.",
      "One moment doesn’t define my worth.",
      "I can struggle and still be capable.",
      "Thinking differently can change how I feel.",
    ],
  },
  behavioral_activation: {
    id: "behavioral_activation",
    title: "Behavioral Activation",
    description:
      "This activity helps you gently reconnect with actions when low mood, tiredness, or lack of motivation makes everything feel heavy.",
    distortionType: "Low Motivation / Avoidance",
    totalMinTimeMinutes: 15,

    steps: [
      {
        id: "current_state",
        level: 1,
        title: "How are things feeling right now?",
        explain:
          "Start by noticing your current state. There’s no need to fix it. Just describe how your day or mood has been recently.",
        examples: [
          "I feel tired and unmotivated most days.",
          "I’ve been staying in bed longer than usual.",
          "Everything feels like too much effort lately.",
          "I feel stuck and disconnected from things I used to enjoy.",
        ],
        minTimeSeconds: 90,
      },

      {
        id: "avoidance",
        level: 2,
        title: "What have you been avoiding?",
        explain:
          "When mood drops, we naturally pull away from activities. List things you’ve been doing less of — even small ones.",
        examples: [
          "I stopped going for short walks.",
          "I’ve been avoiding replying to messages.",
          "I don’t feel like cooking or cleaning.",
          "I’ve stopped doing hobbies I used to like.",
        ],
        minTimeSeconds: 90,
      },

      {
        id: "mood_link",
        level: 3,
        title: "How does avoidance affect your mood?",
        explain:
          "Notice the connection between avoiding activities and how you feel emotionally. This is about awareness, not blame.",
        examples: [
          "Avoiding things makes me feel more low later.",
          "The less I do, the more stuck I feel.",
          "I feel guilty after avoiding things.",
          "Staying inactive makes my mood worse over time.",
        ],
        minTimeSeconds: 120,
      },

      {
        id: "small_action",
        level: 4,
        title: "Choose one small, doable action",
        explain:
          "This is not about big goals. Choose something very small — something you could do even on a low-energy day.",
        examples: [
          "Step outside for 2 minutes.",
          "Drink a glass of water.",
          "Open the window and breathe.",
          "Send one short message to someone.",
        ],
        allowSkip: false,
        minTimeSeconds: 60,
      },

      {
        id: "action_plan",
        level: 5,
        title: "Make it easier to do",
        explain:
          "Lower the effort even more. Ask yourself how to make this action as simple and gentle as possible.",
        examples: [
          "I’ll walk only till the gate, not further.",
          "I’ll reply with just one word.",
          "I’ll set a 2-minute timer and stop after that.",
          "I’ll do it without expecting to feel better immediately.",
        ],
        minTimeSeconds: 180,
      },

      {
        id: "reflection",
        level: 6,
        title: "Notice how you feel after",
        explain:
          "After doing the action, pause and notice what changed — emotionally or physically. Even small shifts matter.",
        examples: [
          "I feel slightly lighter.",
          "I feel proud I tried.",
          "My mood didn’t change much, but I feel less stuck.",
          "I feel a small sense of movement forward.",
        ],
        minTimeSeconds: 120,
      },
    ],

    finalSummary: {
      title: "You took a step forward 🌱",
      insightTemplate:
        "You noticed how low mood can lead to avoidance, and how small actions can gently interrupt that cycle. Behavioral activation works through action first — feelings often follow later.",
      highlightLabel: "Small Action",
    },

    reframeExamples: [
      "I don’t need motivation before action — action can come first.",
      "Small steps still count.",
      "Doing something is better than doing nothing.",
      "Progress can be gentle and slow.",
    ],
  },
  thought_journaling: {
    id: "thought_journaling",
    title: "Thought Journaling",
    description:
      "This activity helps you slow down your thoughts and put them into words, so they feel less heavy and more manageable.",
    distortionType: "Unfiltered Thoughts",
    totalMinTimeMinutes: 15,

    steps: [
      {
        id: "situation",
        level: 1,
        title: "What happened?",
        explain:
          "Start with the situation that triggered the thoughts. Write only what happened, without judging yourself or others.",
        examples: [
          "I made a mistake at work.",
          "Someone didn’t reply to my message.",
          "I had an argument with a family member.",
          "I felt left out during a conversation.",
        ],
        minTimeSeconds: 90,
      },

      {
        id: "thoughts",
        level: 2,
        title: "What thoughts showed up?",
        explain:
          "These are the words or sentences that went through your mind. Don’t edit them — write them as they appeared.",
        examples: [
          "I always mess things up.",
          "They probably don’t care about me.",
          "I’m not good enough.",
          "I shouldn’t have said anything.",
        ],
        minTimeSeconds: 120,
      },

      {
        id: "emotions",
        level: 3,
        title: "How did those thoughts make you feel?",
        explain:
          "Name the emotions that came up and how strong they felt. This helps you connect thoughts and feelings.",
        examples: [
          "Sad (7/10), heavy (6/10)",
          "Anxious (8/10), tense (7/10)",
          "Embarrassed (6/10), upset (5/10)",
          "Hopeless (7/10), tired (6/10)",
        ],
        minTimeSeconds: 120,
      },

      {
        id: "body",
        level: 4,
        title: "What did you notice in your body?",
        explain:
          "Thoughts often show up in the body. Gently notice any physical sensations without trying to change them.",
        examples: [
          "Tight chest",
          "Heavy shoulders",
          "Knots in my stomach",
          "Head feeling pressured",
        ],
        allowSkip: true,
        minTimeSeconds: 60,
      },

      {
        id: "distance",
        level: 5,
        title: "Create a little distance",
        explain:
          "Now try to look at the thought instead of being inside it. Imagine the thought as something you’re observing.",
        examples: [
          "I’m noticing the thought that I’m not good enough.",
          "This is a worried thought, not a fact.",
          "My mind is telling me something scary.",
          "This thought is showing up because I’m stressed.",
        ],
        minTimeSeconds: 180,
      },

      {
        id: "gentle_response",
        level: 6,
        title: "Respond kindly to yourself",
        explain:
          "Write a gentle response to your thoughts, the way you would speak to someone you care about.",
        examples: [
          "It’s okay to make mistakes — I’m still learning.",
          "This is hard right now, and I’m allowed to feel this way.",
          "One moment doesn’t define me.",
          "I can take this one step at a time.",
        ],
        minTimeSeconds: 120,
      },
    ],

    finalSummary: {
      title: "You wrote it out 💛",
      insightTemplate:
        "By writing your thoughts down, you gave yourself space instead of carrying everything in your head. Journaling helps slow the mind and makes emotions easier to understand.",
      highlightLabel: "Kind Response",
    },

    reframeExamples: [
      "Thoughts are experiences, not commands.",
      "Writing helps me release mental pressure.",
      "I don’t have to believe every thought I have.",
      "I can be gentle with myself even when things feel messy.",
    ],
  },
  exposure: {
    id: "exposure",
    title: "Exposure / Facing Fears",
    description:
      "This activity helps you slowly and safely face fears instead of avoiding them, so your brain can learn that you can handle discomfort.",
    distortionType: "Avoidance & Fear-Based Thinking",
    totalMinTimeMinutes: 20,

    steps: [
      {
        id: "fear",
        level: 1,
        title: "What fear are you working on?",
        explain:
          "Start by naming the fear you usually avoid. This isn’t about forcing yourself — it’s about understanding what feels scary.",
        examples: [
          "Speaking up in meetings",
          "Making phone calls",
          "Going out alone",
          "Being judged by others",
        ],
        minTimeSeconds: 90,
      },

      {
        id: "avoidance",
        level: 2,
        title: "How do you usually avoid it?",
        explain:
          "Notice what you do to escape or reduce the fear. Avoidance feels helpful in the moment, but it keeps the fear strong.",
        examples: [
          "I stay quiet even when I have something to say.",
          "I delay or cancel plans.",
          "I ask others to do things for me.",
          "I distract myself to avoid thinking about it.",
        ],
        minTimeSeconds: 120,
      },

      {
        id: "prediction",
        level: 3,
        title: "What are you afraid might happen?",
        explain:
          "Write what your mind predicts will happen if you face the fear. These thoughts often feel very real.",
        examples: [
          "I’ll embarrass myself.",
          "People will judge me.",
          "I won’t be able to handle the anxiety.",
          "Something will go wrong.",
        ],
        minTimeSeconds: 120,
      },

      {
        id: "fear_scale",
        level: 4,
        title: "How intense does this fear feel?",
        explain:
          "Rate how strong the fear feels right now. This helps you choose a step that feels challenging but manageable.",
        examples: ["Fear level: 8/10", "Fear level: 7/10", "Fear level: 6/10"],
        minTimeSeconds: 60,
      },

      {
        id: "small_step",
        level: 5,
        title: "Choose a small, safe step",
        explain:
          "Exposure works best when it’s gradual. Choose a small step that feels uncomfortable but not overwhelming.",
        examples: [
          "Unmute once during a meeting.",
          "Make a short phone call.",
          "Go out alone for 10 minutes.",
          "Ask one simple question.",
        ],
        minTimeSeconds: 180,
      },

      {
        id: "reflection",
        level: 6,
        title: "What did you notice?",
        explain:
          "After facing the fear, reflect on what actually happened and how you coped. This helps your brain learn from experience.",
        examples: [
          "The fear rose, then slowly came down.",
          "It was uncomfortable, but I handled it.",
          "The outcome wasn’t as bad as I expected.",
          "I felt proud for trying.",
        ],
        minTimeSeconds: 120,
      },
    ],

    finalSummary: {
      title: "You faced something difficult 🌱",
      insightTemplate:
        "By facing your fear instead of avoiding it, you gave your brain new information. Each small exposure weakens fear and builds confidence over time.",
      highlightLabel: "What You Learned",
    },

    reframeExamples: [
      "Avoidance keeps fear alive; facing it helps it fade.",
      "I can feel afraid and still take small steps.",
      "Anxiety rises and falls on its own.",
      "I’m stronger than my fear thinks I am.",
    ],
  },
  gratitude_journaling: {
    id: "gratitude_journaling",
    title: "Gratitude Journaling",
    description:
      "This activity helps you gently shift attention toward what is supportive or meaningful in your life, even during difficult times.",
    distortionType: "Negativity Bias",
    totalMinTimeMinutes: 12,

    steps: [
      {
        id: "moment",
        level: 1,
        title: "Pause and notice this moment",
        explain:
          "Gratitude doesn’t mean everything is perfect. It starts by slowing down and noticing small moments that often go unseen.",
        examples: [
          "I’m sitting somewhere safe right now.",
          "I had a warm meal today.",
          "I took a short break when I needed it.",
          "I showed up even though it was hard.",
        ],
        minTimeSeconds: 60,
      },

      {
        id: "things",
        level: 2,
        title: "What are a few things you appreciate?",
        explain:
          "These can be very small or very simple. There is no right or wrong thing to feel grateful for.",
        examples: [
          "A message from someone I trust.",
          "A quiet moment to myself.",
          "Music that helped me calm down.",
          "My body getting me through the day.",
        ],
        minTimeSeconds: 120,
      },

      {
        id: "reason",
        level: 3,
        title: "Why does this matter to you?",
        explain:
          "Reflecting on why something feels meaningful helps deepen the feeling, instead of rushing past it.",
        examples: [
          "It reminded me that I’m not alone.",
          "It made today feel a little lighter.",
          "It gave me a sense of comfort.",
          "It helped me feel supported.",
        ],
        minTimeSeconds: 120,
      },

      {
        id: "emotion",
        level: 4,
        title: "What did you feel when you noticed this?",
        explain:
          "Gratitude can bring many emotions — calm, warmth, relief, or even sadness. All of them are okay.",
        examples: [
          "Calm (6/10)",
          "Relief (7/10)",
          "Warmth (5/10)",
          "Soft sadness mixed with appreciation",
        ],
        minTimeSeconds: 90,
      },

      {
        id: "carry_forward",
        level: 5,
        title: "How can you carry this forward?",
        explain:
          "Think about how this moment might support you later, even in a small way.",
        examples: [
          "I can remind myself of this when I feel overwhelmed.",
          "I can pause like this again tomorrow.",
          "I can thank myself for noticing.",
          "I can hold onto this feeling for a few minutes.",
        ],
        minTimeSeconds: 120,
      },
    ],

    finalSummary: {
      title: "You took a moment to appreciate 🌼",
      insightTemplate:
        "By noticing and reflecting on supportive moments, you practiced balancing your mind’s tendency to focus only on what’s wrong. This skill becomes stronger with repetition.",
      highlightLabel: "What You Appreciated",
    },

    reframeExamples: [
      "Even on hard days, small supports exist.",
      "Gratitude doesn’t erase pain — it adds balance.",
      "Noticing good moments helps steady my mind.",
      "I can hold difficulty and appreciation at the same time.",
    ],
  },
  mindfulness: {
    id: "mindfulness",
    title: "Mindfulness / Present-Moment Awareness",
    description:
      "This activity helps you gently bring attention to the present moment, noticing thoughts, feelings, and sensations without judgment.",
    distortionType: "Mind Wandering / Ruminating",
    totalMinTimeMinutes: 15,

    steps: [
      {
        id: "notice",
        level: 1,
        title: "Pause and notice your surroundings",
        explain:
          "Start by taking a moment to pause. Look around and notice what you see, hear, and feel in this exact moment.",
        examples: [
          "I see the sunlight coming through the window.",
          "I hear the hum of my computer.",
          "I feel my feet on the floor and my back against the chair.",
          "I notice the temperature of the room.",
        ],
        minTimeSeconds: 60,
      },

      {
        id: "breath",
        level: 2,
        title: "Focus on your breath",
        explain:
          "Your breath is always with you. Notice it flowing in and out without trying to change it.",
        examples: [
          "I feel air entering my nostrils and leaving.",
          "My chest rises and falls naturally.",
          "I notice the rhythm of my breathing.",
          "I feel the cool air in and warm air out.",
        ],
        minTimeSeconds: 90,
      },

      {
        id: "body_scan",
        level: 3,
        title: "Scan your body",
        explain:
          "Gently notice sensations in different parts of your body without judging them as good or bad.",
        examples: [
          "My shoulders feel tense, and I let them relax slightly.",
          "I notice tension in my jaw and allow it to soften.",
          "My hands rest on my lap, feeling the touch of my clothing.",
          "I feel energy in my legs and feet.",
        ],
        minTimeSeconds: 120,
      },

      {
        id: "thought_observation",
        level: 4,
        title: "Notice your thoughts",
        explain:
          "Thoughts may come and go. Observe them like clouds passing in the sky, without engaging or judging them.",
        examples: [
          "I notice a thought about work coming up.",
          "A memory pops into my mind — I let it pass.",
          "I feel worry arise and watch it without acting on it.",
          "I notice my mind drifting and gently return to breath.",
        ],
        minTimeSeconds: 120,
      },

      {
        id: "reflection",
        level: 5,
        title: "Reflect on this moment",
        explain:
          "Take a moment to feel what you experienced. Mindfulness isn’t about stopping thoughts, it’s about noticing without judgment.",
        examples: [
          "I felt calm noticing my surroundings.",
          "Even though a thought appeared, I stayed present.",
          "I became aware of small sensations I usually miss.",
          "I realize I can return to the present anytime.",
        ],
        minTimeSeconds: 90,
      },
    ],

    finalSummary: {
      title: "You completed this mindfulness exercise 🌿",
      insightTemplate:
        "By noticing your breath, body, and thoughts, you practiced being fully present. This helps reduce stress and strengthens awareness over time.",
      highlightLabel: "Moment Noticed",
    },

    reframeExamples: [
      "Thoughts can come and go — I don’t have to follow them.",
      "I can return to the present whenever I notice I’m distracted.",
      "Even small moments of awareness help me feel calmer.",
      "Being present doesn’t mean ignoring reality, it means noticing it clearly.",
    ],
  },
};
