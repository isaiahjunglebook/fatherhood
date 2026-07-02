import type { Chapter, ChapterSlug, LifeStage } from "@/lib/quiz/types";

/** Fixed entry chapter per life stage; the other five are sorted by need. */
export const entryChapter: Record<LifeStage, ChapterSlug> = {
  single: "the-man",
  trying: "conception",
  expecting: "the-pregnancy",
  newDad: "the-arrival",
};

export const chapters: Chapter[] = [
  {
    slug: "the-man",
    number: 1,
    title: "The Man",
    stage: "Before everything",
    tagline: "The father your child gets is the man you are under pressure. Start there.",
    dimension: "selfAwareness",
    lifeStageRelevance: { single: 1.0, trying: 0.9, expecting: 0.8, newDad: 0.7 },
    overview: [
      "Every man walks into fatherhood running someone else's software. The way your father handled anger, absence, affection, and apology got installed in you before you could consent to it — and under stress, installed patterns run automatically. Chapter one is the audit: what did you inherit, what do you keep, what do you consciously replace?",
      "This is not therapy cosplay. Attachment research is blunt about the mechanism: it isn't a painful childhood that predicts how you'll parent — it's an unexamined one. Men who have made sense of their own story parent as securely as men who were handed an easy one. The work is tractable, and it has a name: earned security.",
      "The Man also covers the machinery you'll run on: emotional regulation under sleep deprivation, the fear inventory (repeating him, losing yourself, failing as a provider), and the honest reckoning with how you handle anger — because your child will meet that version of you, and you decide now who he is.",
    ],
    whoItsFor: [
      "Men whose fathers left a model they don't want to repeat — or no model at all",
      "Men who go quiet, go cold, or go loud under pressure and want to understand why",
      "Men getting ahead of fatherhood years before it happens — the smartest time to do this work",
    ],
    lesson: {
      title: "First lesson: The Inherited Model",
      html: `
<p>Here is the uncomfortable math of fatherhood: you will spend roughly eighteen years improvising under pressure, and improvisation always falls back on training data. Your training data is your father. Not the father you'd describe at his funeral — the one who lived in your house. How he walked in the door after work. What his silence meant. What happened in the five seconds after you spilled something.</p>
<p>Psychologists who study attachment across generations found something that should change how every expectant father spends his energy. When they interviewed adults about their childhoods and then watched them parent, the strongest predictor of secure parenting wasn't a happy history. It was a <strong>coherent</strong> one — the ability to tell the story of where you came from, including the painful parts, without minimizing it into "it was fine" or drowning in it. Researchers call the result <em>earned security</em>: men from hard childhoods who did the work of making sense of them parented just as well as men from easy ones.</p>
<p>Read that again, because it's the whole game: <strong>the risk isn't a difficult past. The risk is an unexamined one.</strong></p>
<h3>The audit</h3>
<p>Take thirty minutes this week — alone, phone elsewhere — and write answers to these five questions. Longhand works better than typing; don't edit.</p>
<ol>
<li><strong>Five words.</strong> Choose five adjectives that describe your relationship with your father growing up. Then, for each one, write the specific memory that proves it. (This is the exercise researchers use — the adjectives are easy; the evidence is where men discover the "fine" childhood wasn't, or the "bad" one had something worth keeping.)</li>
<li><strong>The door.</strong> What did the atmosphere in the house do when he came home? Rise or drop?</li>
<li><strong>Repair.</strong> When he got it wrong — lost his temper, missed the game, broke a promise — what happened next? Did he ever apologize to you? A father who repairs teaches that rupture isn't fatal. A father who never does teaches that mistakes are hidden.</li>
<li><strong>The keep pile.</strong> Name two things he did that you want your child to experience from you. If he was absent, name two things his absence taught you to value. This step is mandatory — an inheritance audit that's all grievance produces a father who only knows what he's against.</li>
<li><strong>The one sentence.</strong> Finish this: "When my child is fifteen and describes me to a friend, I want the sentence to be ______." Write it down. That sentence is your specification. Everything else in this program is engineering toward it.</li>
</ol>
<h3>Why this comes first</h3>
<p>Because pressure doesn't build character — it reveals settings. At 3 a.m., with a baby who won't stop crying and a partner who's beyond empty, you will not have the resources to be thoughtful. You will do what was done. Unless you've examined what was done, decided what to keep, and practiced the replacement — which is precisely the work of this chapter.</p>
<blockquote>You can't choose the model you were handed. You choose the one you hand down.</blockquote>
`,
    },
    research: [
      {
        finding:
          "Adults who can tell a coherent story about a difficult childhood parent as securely as those with easy histories — 'earned security' is real and achievable.",
        source:
          "Roisman, Padrón, Sroufe & Egeland (2002), Child Development; Main & Goldwyn, Adult Attachment Interview research",
      },
      {
        finding:
          "About 1 in 10 fathers experiences depression before or after a birth — peaking three to six months postpartum. Self-awareness beforehand is protective; struggling dads who see it coming get help sooner.",
        source: "Paulson & Bazemore (2010), JAMA meta-analysis of 43 studies",
      },
      {
        finding:
          "A father's untreated postnatal depression independently predicts his child's emotional and behavioral problems years later — dads' inner lives measurably reach their kids.",
        source: "Ramchandani et al. (2005), The Lancet",
      },
    ],
  },
  {
    slug: "conception",
    number: 2,
    title: "Conception",
    stage: "Deciding & trying",
    tagline: "Trying for a baby is a joint project with a 90-day runway. Most men show up on day zero.",
    dimension: "relationship",
    lifeStageRelevance: { single: 0.8, trying: 1.0, expecting: 0.2, newDad: 0.1 },
    overview: [
      "Conception is treated as her project and your moment — a division that's biologically wrong and relationally corrosive. Half the genetic material is yours, sperm take about ninety days to mature, and the habits of those ninety days (sleep, alcohol, heat, stress) are measurably in the material. There is a real runway, and it belongs to you too.",
      "But the deeper work of this chapter is the partnership. The strongest predictor of how your relationship survives a baby isn't romance — it's whether you can operate as a team under a shared project before the project can cry. Trying to conceive, with its calendars, its two-week waits, and its possible disappointments, is the dress rehearsal most couples never realize they're in.",
      "Conception covers the man's preconception health checklist, the conversations to have before the test is positive (money, roles, in-laws, what happens if it's hard), and how to be a partner rather than a bystander through the trying months — including when they stretch longer than anyone planned.",
    ],
    whoItsFor: [
      "Men whose partners are 'ready to start trying' while they're privately still deciding",
      "Couples in the trying months who want the wait to build the team rather than strain it",
      "Men who want the concrete preconception checklist nobody gives fathers",
    ],
    lesson: {
      title: "First lesson: The 90-Day Runway",
      html: `
<p>Sperm are not made on demand. The cells that will be in play three months from now are being manufactured today, and the factory conditions matter: sperm take roughly <strong>72 to 90 days</strong> to fully mature. Which means a man gets a concrete, non-mystical runway — whatever you do in the next three months is, quite literally, in the material.</p>
<h3>The physical checklist</h3>
<ul>
<li><strong>Heat.</strong> Sperm production wants to run a couple of degrees below body temperature. Hot tubs, laptops on laps, and long daily sauna habits measurably suppress counts. Cheap fix, real effect.</li>
<li><strong>Alcohol and smoking.</strong> Both degrade sperm count, motility, and DNA integrity. You don't have to become a monk — but the runway is ninety days, not nine hundred. Cut hard while it counts.</li>
<li><strong>Sleep and lifting.</strong> Testosterone — and the sperm production it drives — is manufactured disproportionately during sleep. Seven hours minimum, plus resistance training, is an evidence-backed fertility protocol that costs nothing.</li>
<li><strong>The checkup.</strong> Book a physical. Tell the doctor you're trying to conceive. Medications (including testosterone supplementation, which shuts sperm production down), varicoceles, and metabolic issues are all things you want discovered now, not after eighteen months of trying.</li>
</ul>
<h3>The partnership checklist</h3>
<p>Now the part that predicts more than any supplement. Researchers who followed couples across the transition to parenthood found the fault lines were visible <em>before conception</em> — in couples who had never aligned on what they were actually signing up for. Have these four conversations before the test is positive. On a walk, not over screens; one per week is a fine pace.</p>
<ol>
<li><strong>The division of labor, in hours.</strong> Not "we'll share everything" — that sentence has ruined more couples than infidelity. Who gets up at night on workdays? Who tracks appointments, buys the diapers, notices they're running out? Vague equality becomes silent scorekeeping by month three.</li>
<li><strong>Money, out loud.</strong> What does the first year cost, what's the childcare plan, does anyone's work change, and how do you both feel — not think, feel — about the answer?</li>
<li><strong>The families.</strong> How much grandparent access, whose traditions, and who manages his own parents. (Rule of thumb that saves marriages: each partner runs interference with their own family.)</li>
<li><strong>The hard branch.</strong> What if it takes two years? What if it takes intervention? Couples who've said out loud "here's how we'll handle it if it's hard" experience the two-week waits as teammates. Couples who haven't experience them alone, in the same bed.</li>
</ol>
<blockquote>The baby arrives in nine months. The parents are built beforehand.</blockquote>
`,
    },
    research: [
      {
        finding:
          "Roughly two-thirds of couples experience a significant drop in relationship satisfaction in the first three years after a first baby — and the couples who don't are distinguishable before the birth.",
        source: "Gottman & Gottman (2007), And Baby Makes Three; Shapiro & Gottman longitudinal studies",
      },
      {
        finding:
          "Sperm take ~72–90 days to mature; paternal smoking, alcohol, heat exposure, and metabolic health measurably affect count, motility, and DNA fragmentation in that window.",
        source: "Frey, Navarro, Kotelchuck & Lu (2008), AJOG — preconception care for men",
      },
      {
        finding:
          "Couples who prepared for the transition to parenthood together — roles, expectations, conflict plans — showed significantly smaller declines in satisfaction after the birth.",
        source: "Cowan & Cowan (2000), When Partners Become Parents",
      },
    ],
  },
  {
    slug: "the-pregnancy",
    number: 3,
    title: "The Pregnancy",
    stage: "Nine months",
    tagline: "She's building the baby. You're building the world the baby lands in.",
    dimension: "knowledge",
    lifeStageRelevance: { single: 0.5, trying: 0.9, expecting: 1.0, newDad: 0.2 },
    overview: [
      "Pregnancy is the stretch where most men feel most useless — everything important seems to be happening inside someone else. The research says the opposite: father involvement during pregnancy moves real outcomes, from her health behaviors to birth outcomes to how likely you are to be an engaged dad years later. The nine months are not a waiting room. They're your first shift.",
      "Your body knows it before you do. Studies of expectant fathers find measurable hormonal shifts — testosterone easing down, prolactin rising — as the birth approaches, especially in men who are physically close to the pregnancy. Biology is trying to prepare you. This chapter makes sure your knowledge keeps up with your chemistry.",
      "The Pregnancy walks the trimester map from a father's seat: what's happening in there, what she's experiencing (including what she may not say), what your specific jobs are each trimester, how to be genuinely useful in the delivery room, and the warning signs — hers and yours — that should trigger a call for help.",
    ],
    whoItsFor: [
      "Expecting fathers who feel like spectators and suspect they shouldn't be",
      "Men who want an actual job description for the delivery room",
      "Partners of women having a hard pregnancy — physically or emotionally",
    ],
    lesson: {
      title: "First lesson: Her Nine Months, Your Nine Months",
      html: `
<p>There is a version of pregnancy where your role is driving to appointments and assembling furniture. It's the default version, and it wastes the nine most useful preparation months you will ever get. Here is the father's trimester map — what's happening, and what your job is.</p>
<h3>First trimester (weeks 1–13): the invisible hard part</h3>
<p>From the outside, nothing has changed. From the inside, she may be exhausted at a cellular level, nauseated for weeks (all day — "morning" sickness is a lie), and riding hormone swings larger than anything in adult life. Meanwhile the risk of miscarriage makes many couples keep it secret, so she's doing the hardest trimester without her support network.</p>
<p><strong>Your job:</strong> logistics and cover. Take over the cooking (nausea often makes cooking smells unbearable), guard her sleep, and be the one who says no to obligations. Learn the appointment schedule and go to every one you can — the men in the room at the first ultrasound rate the whole pregnancy as more real from that day.</p>
<h3>Second trimester (weeks 14–27): the window</h3>
<p>Energy returns, nausea usually lifts, and the bump goes public. This is the good stretch — which makes it the working stretch. The baby's hearing comes online around week 25; talk to the bump. It isn't sentimental — newborns show recognition of voices they heard in the womb, and yours can be one of them.</p>
<p><strong>Your job:</strong> decisions and logistics while bandwidth is high. Tour the hospital, choose the pediatrician, sort the leave plans (yours included — and take every day you're offered; paternity leave length correlates with father involvement <em>years</em> later), and install the car seat before the third trimester makes everything urgent.</p>
<h3>Third trimester (weeks 28–40+): the descent</h3>
<p>Sleep breaks down, the body is heavy and uncomfortable, and the mind turns to the birth. Anxiety — hers and yours — is normal and worth saying out loud.</p>
<p><strong>Your job:</strong> become the birth's project manager. Write the birth-preferences sheet together and know it cold, because on the day you are its voice. Pack the bag by week 36. Learn the difference between Braxton-Hicks and labor, when to go in (a common protocol is contractions 5 minutes apart, lasting 1 minute, for 1 hour — ask your provider), and the route to the hospital at 3 a.m.</p>
<h3>In the room</h3>
<p>Your delivery-room job description in one line: <strong>advocate, anchor, and errand-runner — in that order.</strong> Continuous support during labor is one of the best-evidenced interventions in all of childbirth — shorter labors, fewer interventions, better experiences. You are not a bystander; you're part of the intervention. Counter-pressure on the low back, water after every contraction cycle, relaying her preferences when she can't — small jobs, done steadily, are the whole role.</p>
<blockquote>She is building the baby. You are building the conditions — and the man — the baby lands on.</blockquote>
`,
    },
    research: [
      {
        finding:
          "Continuous support during labor shortens labor, reduces cesarean and instrumental delivery rates, and improves birth experience — one of the strongest findings in maternity care.",
        source: "Bohren et al. (2017), Cochrane Systematic Review: Continuous support for women during childbirth",
      },
      {
        finding:
          "Expectant fathers show measurable hormonal changes — lower testosterone, higher prolactin — in the weeks around birth, especially with close contact; men's biology actively prepares for caregiving.",
        source: "Storey, Walsh, Quinton & Wynne-Edwards (2000), Evolution and Human Behavior; Gettler et al. (2011), PNAS",
      },
      {
        finding:
          "Father involvement during pregnancy is associated with better maternal health behaviors and reduced adverse birth outcomes, including lower rates of preterm birth and low birth weight.",
        source: "Alio et al. (2010), Journal of Community Health",
      },
    ],
  },
  {
    slug: "the-arrival",
    number: 4,
    title: "The Arrival",
    stage: "Birth to age one",
    tagline: "The year that breaks the unprepared — and builds the initiated.",
    dimension: "knowledge",
    lifeStageRelevance: { single: 0.5, trying: 0.7, expecting: 1.0, newDad: 0.6 },
    overview: [
      "The first year is where preparation stops being theoretical. Sleep arrives in fragments, the crying has no manual, and the relationship runs on fumes — this is the stretch that produces both the worst statistics (relationship satisfaction, paternal depression) and the deepest bonds, depending almost entirely on what the father knows and does.",
      "The good news is unusually concrete. Fathers are not backup mothers; a father's body responds to his infant with its own oxytocin surge through his own style of interaction. Skin-to-skin works on your chest too. The crying follows a known curve with a name and an end date. The sleep can be systematized. Competence in this year is learnable, and it's the fastest antidote to the uselessness that makes new fathers drift.",
      "The Arrival covers the first ten minutes (and your jobs in them), newborn operations — soothing, feeding support, the crying curve — protecting the partnership on no sleep, watching for postpartum depression in both of you, and building the father-infant bond that the research says starts with time on task, not talent.",
    ],
    whoItsFor: [
      "Expecting fathers who want to walk into the hospital knowing their jobs",
      "New dads in the fog of months one through six",
      "Fathers who feel benched while feeding is happening and want their own lane",
    ],
    lesson: {
      title: "First lesson: The First Ten Weeks, by the Numbers",
      html: `
<p>The first ten weeks run on three systems: crying, sleep, and the two adults. Learn the numbers now, while you can still hold a thought.</p>
<h3>1. The crying has a curve</h3>
<p>Infant crying is not a readout of your competence. It follows a documented developmental curve: it climbs from about two weeks, <strong>peaks around week six to eight</strong>, and falls away by month three or four. At the peak, perfectly healthy babies can cry for hours a day, some of it unsoothable. Pediatricians call it the PURPLE period — P for Peak, U for Unexpected, R for Resists soothing — precisely because parents who don't know the curve conclude something is wrong with the baby or with them.</p>
<p>Your toolkit, in escalating order: the five S's — <strong>swaddle, side/stomach hold (in your arms, never for sleep), shush (loud, near the ear), swing (small rhythmic sway), suck (pacifier or clean finger)</strong>. Stack them; they recreate the womb. Some crying will defeat all five. That's the curve, not you.</p>
<p>And the line that must be said plainly: if the crying floods you with rage — and it does this to good men, sleep-deprived at 3 a.m. — <strong>put the baby down safely in the crib and leave the room.</strong> A crying baby in a crib is safe. Ten minutes of crying hurts nothing; a shaken baby is a catastrophe. Walking away at your limit isn't failure. It's the job, done right.</p>
<h3>2. The sleep is a system</h3>
<p>Newborns sleep 14–17 hours a day in 2–4 hour fragments, and so will you. Two rules carry most of the weight. <strong>Safe sleep is non-negotiable:</strong> alone, on the back, in a bare crib — every sleep, no exceptions, no matter how tired anyone is. <strong>Shifts beat solidarity:</strong> two parents half-awake at every feed is romance-driven engineering failure. Split the night (say, one covers until 2 a.m., the other after), and if bottles are in play, own your shift completely. One parent getting a protected 4–5 hour block beats both getting fragments — alternate who.</p>
<h3>3. The adults are the load-bearing system</h3>
<p>This is the stretch where roughly two-thirds of couples' satisfaction drops hard — and where about one father in ten develops actual depression, peaking <strong>three to six months in</strong>, when the visitors have stopped and the sleep debt has compounded. Know the male presentation: it often isn't sadness. It's irritability, anger, withdrawal into work or screens, drinking more. If that's you for more than two weeks, it has a name and it's treatable — Postpartum Support International runs a helpline (1-800-944-4773) that takes fathers' calls too.</p>
<p>Daily maintenance that fits in fragments: a real kiss when anyone leaves or arrives, one specific appreciation out loud per day ("you handled that 4 a.m. feed and I noticed"), and a ten-minute check-in after the baby's down — her state, your state, tomorrow's logistics. Small, boring, and it is the wall that holds the roof.</p>
<blockquote>Nobody rises to the occasion at 3 a.m. You sink to the level of your preparation.</blockquote>
`,
    },
    research: [
      {
        finding:
          "Infant crying follows a universal curve peaking around 6–8 weeks and resolving by months 3–4; parents who know the curve are far less likely to interpret normal crying as failure — knowledge is the protection.",
        source: "Barr (2006), The Period of PURPLE Crying; National Center on Shaken Baby Syndrome",
      },
      {
        finding:
          "Fathers' testosterone drops significantly after a baby arrives — most in the most involved fathers — and father–infant interaction raises paternal oxytocin. Men are biologically wired for direct infant care.",
        source: "Gettler et al. (2011), PNAS; Feldman et al. (2010), Biological Psychiatry",
      },
      {
        finding:
          "Newborns placed skin-to-skin with their fathers cried less and settled faster than those in a cot — the father's chest is an evidence-backed intervention in its own right.",
        source: "Erlandsson et al. (2007), Birth",
      },
    ],
  },
  {
    slug: "the-bond",
    number: 5,
    title: "The Bond",
    stage: "Ages one to three",
    tagline: "The toddler years are where fathers become irreplaceable — through play.",
    dimension: "relationship",
    lifeStageRelevance: { single: 0.4, trying: 0.5, expecting: 0.6, newDad: 1.0 },
    overview: [
      "Somewhere after the first birthday, a switch flips: the baby becomes a person, and the person starts looking for you specifically. The research on father-child interaction in the toddler years is some of the most encouraging in the field — fathers tend to play differently than mothers, more physical, more unpredictable, more challenging, and that difference isn't a deficiency. It's a curriculum.",
      "Rough-and-tumble play — done well, with the father reading the child and letting the child win about half the time — is associated with better self-regulation and social competence. The wrestling match on the living-room floor is teaching the nervous system where the line is between excitement and aggression, and how to come back down. Nobody else teaches that class quite like a father.",
      "The Bond covers the father's native language (play, and how to do it well), tantrums as nervous-system events rather than discipline problems, the toddler's drive for autonomy and how to channel it, language-building in the daily routine, and keeping the partnership fed now that the survival year is over and the negotiation years begin.",
    ],
    whoItsFor: [
      "Fathers of one-to-three-year-olds who want more than the entertainer role",
      "Men unsure what to actually do with a toddler for an afternoon",
      "Parents hitting the tantrum era and diverging on how to respond",
    ],
    lesson: {
      title: "First lesson: Fifteen Minutes on the Floor",
      html: `
<p>If the first year asked you to be a logistics machine, the toddler years ask for something harder and better: presence. The single highest-leverage practice in this stage costs fifteen minutes a day and requires you to get on the floor.</p>
<h3>The protocol</h3>
<p>Fifteen minutes. Phone in another room — not silenced, <em>elsewhere</em>, because a toddler can read where your attention is with unsettling accuracy. And one rule that changes everything: <strong>the child leads.</strong> You don't direct the play, improve the tower, or turn it educational. You narrate ("you're putting the red one on top"), you take the roles you're assigned, you're all the way there. Child-led play is the clinical backbone of parent-child therapy programs for a reason: it's the fastest known way to make a small person feel that they matter to a big one.</p>
<h3>The father's specialty: rough-and-tumble</h3>
<p>Fathers everywhere, across cultures, gravitate to physical play — chasing, wrestling, airplane, throw-them-on-the-couch. For decades this was treated as dads being unserious. The research flipped it: high-quality rough-and-tumble play with fathers is linked to better emotional regulation and social skill, because it's a live seminar in arousal management. The child gets thrillingly wound up, reads your face to check it's still safe, learns where the line is, crosses it, feels the game pause, and comes back down. That loop — <strong>up, check, over, repair, down</strong> — is the regulation curriculum, and the floor is the classroom.</p>
<p>Doing it well has rules: you're big, so calibrate; the child should win about half the time (winning teaches confidence, losing teaches recovery — the ratio is the lesson); "stop means stop" is instant and absolute, because that's consent training years before anyone calls it that; and you end on a down-regulation ramp — slower, softer, a landing — not mid-peak.</p>
<h3>Tantrums: the other side of the same coin</h3>
<p>The toddler who delights you on the floor will also, possibly the same afternoon, come apart in a grocery aisle. Hold one fact: a tantrum is a nervous system exceeding its capacity, not a discipline failure and not manipulation. The prefrontal machinery for self-control is <em>years</em> from installed — your child regulates by borrowing your calm, a process the literature calls co-regulation. So the protocol is the opposite of instinct: get low, get quiet, stay. Name the thing ("you wanted the red cup — you're really mad"). Hold whatever line caused the storm — calm and the limit are not opposites; the combination is the entire art. The storm passes faster with a regulated father in the room, and every storm you weather this way is a rep for their future capacity to do it alone.</p>
<blockquote>You are not entertaining a toddler. You are training a nervous system — including yours.</blockquote>
`,
    },
    research: [
      {
        finding:
          "Father engagement in the early years independently predicts fewer behavioral problems and better cognitive and social development — the effect survives controlling for the mother's involvement.",
        source: "Sarkadi, Kristiansson, Oberklaid & Bremberg (2008), Acta Paediatrica systematic review",
      },
      {
        finding:
          "High-quality father-child rough-and-tumble play — challenging but warm, with clear limits — is associated with better child self-regulation and lower aggression.",
        source: "Fletcher, StGeorge & Freeman (2013), Early Child Development and Care; Paquette (2004), Human Development",
      },
      {
        finding:
          "Fathers' sensitive, supportive interaction with toddlers independently predicts children's language and cognitive outcomes at ages 2–3.",
        source: "Tamis-LeMonda, Shannon, Cabrera & Lamb (2004), Child Development",
      },
    ],
  },
  {
    slug: "the-guide",
    number: 6,
    title: "The Guide",
    stage: "Ages four to seven",
    tagline: "The age of questions. The father becomes the interpreter of the world.",
    dimension: "selfAwareness",
    lifeStageRelevance: { single: 0.3, trying: 0.4, expecting: 0.4, newDad: 0.9 },
    overview: [
      "Between four and seven, the job changes shape again. The child can talk, reason, negotiate, and watch — above all, watch. This is the age when they stop merely needing you and start studying you: how you treat their mother, what you do when you're wrong, whether your apology matches your sermon. The curriculum is no longer what you provide. It's who you are, observed at close range.",
      "It's also the age of feelings too big for the vocabulary, and the research here is precise: children whose parents coach emotions — name them, accept them, set limits on behavior rather than on the feeling itself — regulate better, do better socially, even get sick less. Emotion coaching is a learnable five-step skill, and fathers who learn it break generational patterns in a single move.",
      "The Guide covers emotion coaching, discipline that teaches rather than merely stops, the questions years (including the ones about death, fairness, and why you said a bad word), screens and the modern childhood, and the long game: father involvement at this exact age shows up in the data decades later.",
    ],
    whoItsFor: [
      "Fathers of four-to-sevens hitting big feelings, big questions, and big negotiations",
      "Men who got the compliance-first discipline model and want a better one to hand down",
      "Fathers thinking about the decades-long arc, not just the bedtime battle",
    ],
    lesson: {
      title: "First lesson: The Five Steps When the Feelings Are Too Big",
      html: `
<p>Somewhere around age four, the meltdowns stop being purely about tiredness and start being about <em>life</em> — the friend who said the cruel thing, the game that was lost, the dog that died in the movie. What you do in those moments, repeated a few hundred times between now and seven, is one of the most-studied levers in parenting science.</p>
<p>Researchers following families found parents fell into camps. Some dismissed feelings ("you're fine, it's not a big deal"), some disapproved of them ("stop crying or I'll give you something to cry about"), some accepted everything and set no limits. And some did a specific thing the researchers called <strong>emotion coaching</strong> — and their kids, tracked for years, regulated their emotions better, handled peers better, performed better in school, and were physically healthier. The effect held for fathers specifically: an emotion-coaching dad measurably changes his child's trajectory.</p>
<h3>The five steps</h3>
<ol>
<li><strong>Notice the feeling early</strong> — catch it at simmer, not boil. This requires the skill from Chapter 1: you can't spot a feeling in your kid that you refuse to spot in yourself.</li>
<li><strong>Treat it as the opportunity, not the interruption.</strong> The meltdown over the broken toy is not in the way of your evening. For the next ten minutes it is the most important meeting on your calendar.</li>
<li><strong>Listen and validate.</strong> Get low, get curious, don't fix yet. "You really wanted to win. Losing feels terrible." Validation is not agreement — it's accuracy.</li>
<li><strong>Name it.</strong> Help them label the thing: disappointed, jealous, embarrassed, furious. Affect labeling isn't soft — naming an emotion measurably reduces its grip on the nervous system. A child with the word has a handle on the thing.</li>
<li><strong>Set limits and solve.</strong> All feelings allowed; not all behavior. "You're furious at your brother. You can't hit him. What could you do instead?" The feeling is honored, the line is held, and the child does the solving with you as scaffolding.</li>
</ol>
<h3>Why fathers specifically</h3>
<p>Because this is the age of watching, and most of us are running inherited code here — chances are decent nobody did the five steps for the feelings of a small boy who became you. "Stop crying" came down a generational wire. When you kneel down instead and say "that really hurt, huh" — the wire is cut, in one generation, in your living room. And when you blow it — you will; everyone does — the repair is the advanced lesson: <em>"I yelled. That was about my frustration, not about you. I'm sorry."</em> A father who apologizes teaches that strength and accountability are the same thing. That lesson, at this age, is watched very, very closely.</p>
<blockquote>From here on, they learn less from what you say to them — and more from what they see you be.</blockquote>
`,
    },
    research: [
      {
        finding:
          "Children of 'emotion-coaching' parents show better emotional regulation, peer relationships, academic outcomes, and even physical health — and fathers' coaching carries independent weight.",
        source: "Gottman, Katz & Hooven (1996), Journal of Family Psychology; Meta-Emotion research program",
      },
      {
        finding:
          "Father involvement measured at age 7 predicts lower psychological distress and better outcomes decades later, into adulthood — this window is in the long-term data.",
        source: "Flouri & Buchanan (2004), British Journal of Educational Psychology, National Child Development Study",
      },
      {
        finding:
          "Putting feelings into words ('affect labeling') dampens amygdala response — the mechanism behind step four of emotion coaching is visible on brain scans.",
        source: "Lieberman et al. (2007), Psychological Science",
      },
    ],
  },
];

export const chapterBySlug = new Map(chapters.map((c) => [c.slug, c]));
