const questions = [
    {
        id: "vocab_detestable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDETESTABLE",
        options: ["A) Repulsive", "B) Commendable", "C) Despicable", "D) Offensive"],
        correct: "C",
        explanation: "• Main Word Meaning: 'DETESTABLE' describes someone or something that provokes intense hatred, disgust, or moral revulsion (घृणास्पद / नफ़रत के क़ाबिल).\n\n• A) Repulsive: Refers to causing strong dislike or physical aversion. While very close, 'despicable' is the more precise moral equivalent required in standard exam keys.\n\n• B) Commendable: Describes something that is highly praiseworthy or worthy of formal approval, directly opposing a hated trait.\n\n• C) Despicable (Correct Answer): Refers to someone or something deserving of intense hatred and moral outrage. It serves as the exact synonym for 'DETESTABLE'.\n\n• D) Offensive: Means causing resentment, anger, or annoyance. It is a broader and milder term compared to the extreme moral disgust of detestable."
    },
    {
        id: "vocab_louche_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nLOUCHE",
        options: ["A) Eccentric", "B) Disreputable", "C) Mysterious", "D) Admirable"],
        correct: "B",
        explanation: "• Main Word Meaning: 'LOUCHE' describes a character, place, or action that is of questionable respectability, shady, or morally dubious (संदिग्ध / चरित्रहीन).\n\n• A) Eccentric: Describes unconventional or slightly strange behavior, which lacks the inherent moral dubiousness of louche.\n\n• B) Disreputable (Correct Answer): Refers to having a bad reputation, being shady, or lacking social respectability, serving as an exact synonym for 'LOUCHE'.\n\n• C) Mysterious: Refers to something difficult or impossible to understand, which does not automatically imply poor character or shady morals.\n\n• D) Admirable: Denotes qualities that inspire approval or affection, contextually opposite to dubious behavior."
    },
    {
        id: "vocab_ignominious_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nIGNOMINIOUS",
        options: ["A) Triumphant", "B) Shameful", "C) Honorable", "D) Prestigious"],
        correct: "C",
        explanation: "• Main Word Meaning: 'IGNOMINIOUS' describes actions or outcomes that cause public disgrace, humiliation, or dishonor (कलंकपूर्ण / अपमानजनक).\n\n• A) Triumphant: Means experiencing a significant victory, focusing on success rather than moral standing or social honor.\n\n• B) Shameful: Refers to bringing dishonor or public disgrace, making it a direct synonym rather than an antonym.\n\n• C) Honorable (Correct Answer): Refers to possessing or bringing high moral respect, integrity, and prestige. It acts as the direct antonym for 'IGNOMINIOUS'.\n\n• D) Prestigious: Denotes having high status or reputation, but focuses more on distinction and success rather than core moral uprightness."
    },
    {
        id: "vocab_earthly_fitb",
        type: "Fill in the Blank",
        question: "Select the most appropriate option to fill in the blank:\n'His earthly desires often distracted him from __________ pursuits.'",
        options: ["A) intellectual", "B) mundane", "C) spiritual", "D) academic"],
        correct: "C",
        explanation: "• Main Word Meaning: 'EARTHLY' relates to the physical world and material human desires as opposed to heavenly or soul-driven matters (सांसारिक / भौतिक).\n\n• A) intellectual: Pertains to the intellect and logical thinking. While plausible, it does not form the classic philosophical antonym pairing with 'earthly'.\n\n• B) mundane: Means lacking interest or excitement; dull or worldly, making it a near-synonym to earthly rather than a contrast.\n\n• C) spiritual (Correct Answer): Pertains to the human soul or sacred matters, providing the exact thematic contrast needed against 'earthly' desires.\n\n• D) academic: Relates to education and scholarship, which fails to capture the soul-versus-material dichotomy."
    },
    {
        id: "vocab_thief_error",
        type: "Spotting the Error",
        question: "Identify the segment which contains a vocabulary mismatch/error:\n'The thief's (A) / commendable actions (B) / made the community (C) / lose trust in him. (D)'",
        options: ["A) Segment A", "B) Segment B", "C) Segment C", "D) Segment D"],
        correct: "B",
        explanation: "• Main Word Meaning: In vocabulary error spotting, context dictates that adjectives must logically match the subject's behavior and the outcome.\n\n• A) Segment A: 'The thief's' properly sets up the subject in possessive noun form.\n\n• B) Segment B (Correct Answer): Contains a clear vocabulary mismatch. 'Commendable' means praiseworthy. A community loses trust due to 'despicable' or 'disreputable' actions, not commendable ones.\n\n• C) Segment C: 'made the community' is grammatically sound as a causative verb phrase.\n\n• D) Segment D: 'lose trust in him' provides the logical result of negative actions, making it correct."
    },
    {
        id: "vocab_set1_1",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nEMBELLISH",
        options: ["A) Exaggerate", "B) Elaborate", "C) Caparison", "D) Modulate"],
        correct: "C",
        explanation: "• Main Word Meaning: 'EMBELLISH' means to make something more attractive by adding decorative details or ornamentation (सजाना / संवारना).\n\n• A) Exaggerate: Means to represent something as larger or greater than it is, which is a figurative sense of embellishing stories, not literal ornamentation.\n\n• B) Elaborate: Means to develop or present an idea in detail, which is related to explanation rather than decorative enhancement.\n\n• C) Caparison (Correct Answer): Means to deck out in rich, ornamental attire or decorate sumptuously, serving as a high-level synonym for 'EMBELLISH'.\n\n• D) Modulate: Means to exert a modifying or controlling influence on something, contextually unrelated."
    },
    {
        id: "vocab_set1_2",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nEMBELLISH",
        options: ["A) Simplify", "B) Strip", "C) Disfigure", "D) Deface"],
        correct: "D",
        explanation: "• Main Word Meaning: 'EMBELLISH' means to decorate, adorn, or enhance visual appeal (सजाना).\n\n• A) Simplify: Means to make something easier or plain, which opposes complex embellishment in design, but lacks the destructive opposition of defacing.\n\n• B) Strip: Means to remove covering or decoration, acting as a contextual antonym, though 'deface' is the exact dictionary match in SSC key sets.\n\n• C) Disfigure: Means to spoil the appearance of, which is very close, but 'deface' specifically denotes spoiling decorative/visible surfaces intentionally.\n\n• D) Deface (Correct Answer): Means to damage, disfigure, or spoil the external appearance of something. It acts as the exact antonym for 'EMBELLISH'."
    },
    {
        id: "vocab_set1_3",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPRODIGAL",
        options: ["A) Generous", "B) Profligate", "C) Abundant", "D) Imprudent"],
        correct: "B",
        explanation: "• Main Word Meaning: 'PRODIGAL' describes a person who spends money or resources recklessly and wastefully (फ़िज़ूलख़र्च / अपव्ययी).\n\n• A) Generous: Describes showing a readiness to give more of something than is expected, which carries a noble context unlike wasteful spending.\n\n• B) Profligate (Correct Answer): Refers to an individual recklessly extravagant in financial resources, acting as the precise synonym for 'PRODIGAL'.\n\n• C) Abundant: Refers to existing or available in large quantities, describing supply rather than spending behavior.\n\n• D) Imprudent: Means lacking care or thought for consequences, describing general recklessness rather than strictly wasteful spending."
    },
    {
        id: "vocab_set1_4",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nPRODIGAL",
        options: ["A) Moderate", "B) Prudent", "C) Parsimonious", "D) Cautious"],
        correct: "C",
        explanation: "• Main Word Meaning: 'PRODIGAL' refers to spendthrift, recklessly wasteful financial behavior (फ़िज़ूलख़र्च).\n\n• A) Moderate: Describes avoiding extremes in behavior or expression, serving as a mild contrast.\n\n• B) Prudent: Describes acting with or showing care and thought for the future, which is a general antonym to recklessness.\n\n• C) Parsimonious (Correct Answer): Describes an extreme reluctance to spend even small amounts of money (miserly). It serves as the direct financial antonym for 'PRODIGAL'.\n\n• D) Cautious: Describes avoiding potential hazards, lacking a direct financial spending focus."
    },
    {
        id: "vocab_set1_5",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nREPUDIATE",
        options: ["A) Dismiss", "B) Disavow", "C) Contradict", "D) Renounce"],
        correct: "B",
        explanation: "• Main Word Meaning: 'REPUDIATE' means to refuse to accept, acknowledge, or be associated with an idea, claim, or person (अस्वीकार करना / परित्याग करना).\n\n• A) Dismiss: Means to decide that something is not important enough to consider, which is milder than formal repudiation.\n\n• B) Disavow (Correct Answer): Means to deny any responsibility, connection, or support for something, functioning as an exact synonym for 'REPUDIATE'.\n\n• C) Contradict: Means to deny the truth of a statement by asserting the opposite, focusing on truth rather than allegiance.\n\n• D) Renounce: Means to formally give up a claim or right, which is very close but disavow directly matches denying connection or responsibility."
    },
    {
        id: "vocab_set1_6",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nREPUDIATE",
        options: ["A) Endorse", "B) Sanction", "C) Corroborate", "D) Validate"],
        correct: "C",
        explanation: "• Main Word Meaning: 'REPUDIATE' means to reject, disown, or deny the truth or validity of something (खंडन करना / त्यागना).\n\n• A) Endorse: Means to declare public approval or support of something, acting as a general antonym.\n\n• B) Sanction: Means to give official permission or approval for an action.\n\n• C) Corroborate (Correct Answer): Means to support, validate, or confirm an assertion with concrete proof. It acts as the precise, high-level antonym for 'REPUDIATE'.\n\n• D) Validate: Means to check or prove the validity or accuracy of something, close but less direct in formal opposition."
    },
    {
        id: "vocab_set1_7",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSQUANDERER",
        options: ["A) Hedonist", "B) Libertine", "C) Wastrel", "D) Spendthrift"],
        correct: "D",
        explanation: "• Main Word Meaning: A 'SQUANDERER' is a person who wastes money, time, or resources in a reckless and foolish manner (गँवाने वाला / फ़िज़ूलख़र्च आदमी).\n\n• A) Hedonist: Refers to a person who believes that the pursuit of pleasure is the most important thing in life.\n\n• B) Libertine: Describes a person who rejects accepted opinions in matters of religion or morality.\n\n• C) Wastrel: Refers to a wasteful or good-for-nothing person, which is very close, but spendthrift specifically targets financial squandering.\n\n• D) Spendthrift (Correct Answer): Refers to a person who wastes money in an extravagant, irresponsible manner. It serves as the exact noun synonym for 'SQUANDERER'."
    },
    {
        id: "vocab_set1_8",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPENURIOUS",
        options: ["A) Stingy", "B) Destitute", "C) Impoverished", "D) Needy"],
        correct: "B",
        explanation: "• Main Word Meaning: 'PENURIOUS' primary meaning describes living in extreme poverty or hardship, as well as being excessively stingy (दरिद्र / कंजूस).\n\n• A) Stingy: Describes being unwilling to give or spend money. While 'penurious' can mean stingy, its primary vocabulary sense in standard testing aligns with extreme poverty.\n\n• B) Destitute (Correct Answer): Refers to being extremely poor, lacking the basic necessities of life. It serves as the precise synonym for 'PENURIOUS'.\n\n• C) Impoverished: Means made poor, which describes a state of poverty but lacks the complete destitution implied by penurious.\n\n• D) Needy: Describes lacking the necessities of life, functioning as a milder term."
    },
    {
        id: "vocab_set1_9",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nBELITTLE",
        options: ["A) Praise", "B) Amplify", "C) Aggrandize", "D) Overstate"],
        correct: "B",
        explanation: "• Main Word Meaning: 'BELITTLE' means to make an action, person, or achievement seem small, dismissible, or unimportant (कम आँकना / नीचा दिखाना).\n\n• A) Praise: Means to express warm approval or admiration of, which is a general antonym.\n\n• B) Amplify (Correct Answer): Means to increase the strength, importance, size, or value of something. It acts as the precise antonym for 'BELITTLE'.\n\n• C) Aggrandize: Means to increase the power, status, or wealth of an individual, focusing on power rather than scope/value.\n\n• D) Overstate: Means to state something too strongly or exaggerate, which is not a direct structural antonym."
    },
    {
        id: "vocab_set1_10",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nABDICATE",
        options: ["A) Relinquish", "B) Renounce", "C) Surrender", "D) Resign"],
        correct: "B",
        explanation: "• Main Word Meaning: 'ABDICATE' means to formally give up, renounce, or step down from a position of power or responsibility (त्यागना / पद छोड़ना).\n\n• A) Relinquish: Means to voluntarily cease to keep or claim an item or right.\n\n• B) Renounce (Correct Answer): Means to formally declare one's abandonment of a position, claim, or right, serving as the exact synonym for 'ABDICATE'.\n\n• C) Surrender: Means to stop resisting an enemy and submit to authority, implying defeat.\n\n• D) Resign: Means to voluntarily leave a job or office, which applies to general jobs rather than formal high thrones or supreme duties."
    },
    {
        id: "vocab_set1_11",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nRECANT",
        options: ["A) Repudiate", "B) Disown", "C) Retract", "D) Revoke"],
        correct: "C",
        explanation: "• Main Word Meaning: 'RECANT' means to formally withdraw, disavow, or take back a previously held belief, opinion, or statement (बयान वापस लेना).\n\n• A) Repudiate: Means to refuse to accept or be associated with, focusing on rejection.\n\n• B) Disown: Means to refuse to acknowledge connection with a person or claim.\n\n• C) Retract (Correct Answer): Means to draw back or withdraw a statement, belief, or accusation, functioning as the exact synonym for 'RECANT'.\n\n• D) Revoke: Means to officially cancel an order, decree, or decision."
    },
    {
        id: "vocab_set1_12",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nIMPRUDENT",
        options: ["A) Discrete", "B) Cautious", "C) Wise", "D) Sensible"],
        correct: "C",
        explanation: "• Main Word Meaning: 'IMPRUDENT' describes acting without care, thought, or wisdom regarding future consequences (बेवकूफ़ / लापरवाही).\n\n• A) Discrete: Means individually separate and distinct.\n\n• B) Cautious: Means careful to avoid potential problems or dangers, describing an action style.\n\n• C) Wise (Correct Answer): Describes showing sound judgment, deep understanding, and careful decision-making. It serves as the exact antonym for 'IMPRUDENT'.\n\n• D) Sensible: Describes possessing or showing good sense or judgment, very close but 'Wise' is the direct high-level counterpart."
    },
    {
        id: "vocab_set1_13",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nNIGGARDLY",
        options: ["A) Parsimonious", "B) Miserly", "C) Stingy", "D) Frugal"],
        correct: "C",
        explanation: "• Main Word Meaning: 'NIGGARDLY' describes an ungenerous or miserly approach to spending money or sharing resources (कंजूस / नीच).\n\n• A) Parsimonious: Describes extreme reluctance to spend money, acting as a high-level literary synonym.\n\n• B) Miserly: Describes characteristic of a miser, living poorly to save money.\n\n• C) Stingy (Correct Answer): Refers to being unwilling to give or spend money. It serves as the standard core synonym for 'NIGGARDLY'.\n\n• D) Frugal: Describes being economical and careful with money without the negative connotation of ungenerous greed."
    },
    {
        id: "vocab_set1_14",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAVOW",
        options: ["A) Proclaim", "B) Declare", "C) Confess", "D) Assert"],
        correct: "B",
        explanation: "• Main Word Meaning: 'AVOW' means to assert, confess, or declare openly and emphatically (स्वीकार करना / दावा करना).\n\n• A) Proclaim: Means to announce officially or publicly.\n\n• B) Declare (Correct Answer): Means to assert, confess, or state openly. It acts as the direct exact synonym for 'AVOW'.\n\n• C) Confess: Means to admit that one has committed a crime or done something wrong.\n\n• D) Assert: Means to state a fact or belief confidently and forcefully."
    },
    {
        id: "vocab_set1_15",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nPROFUSE",
        options: ["A) Sparse", "B) Scant", "C) Meager", "D) Deficient"],
        correct: "C",
        explanation: "• Main Word Meaning: 'PROFUSE' describes something offered or available in extravagant abundance or huge quantities (प्रचुर / अत्यधिक).\n\n• A) Sparse: Describes thinly dispersed or scattered, focusing on distribution.\n\n• B) Scant: Describes barely sufficient or adequate, focusing on amount.\n\n• C) Meager (Correct Answer): Describes something lacking in quantity, quality, or fullness. It acts as the direct antonym for 'PROFUSE'.\n\n• D) Deficient: Describes not having enough of a specified quality or ingredient."
    },
    {
        id: "vocab_set1_16",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSCRIMPING",
        options: ["A) Curtailing", "B) Pinching", "C) Retrenching", "D) Economizing"],
        correct: "D",
        explanation: "• Main Word Meaning: 'SCRIMPING' refers to spending money or using resources very carefully and frugally to cut down expenses (किफ़ायत करना / कसर निकालना).\n\n• A) Curtailing: Means reducing in extent or quantity; imposing a restriction on.\n\n• B) Pinching: Slang/informal for spending minimal amounts or stealing.\n\n• C) Retrenching: Means reducing costs or spending in response to economic difficulty, usually corporate.\n\n• D) Economizing (Correct Answer): Refers to spending money carefully and reducing unnecessary expenditure. It acts as the exact synonym for 'SCRIMPING'."
    },
    {
        id: "vocab_set1_17",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nESPOUSE",
        options: ["A) Discard", "B) Renounce", "C) Reject", "D) Repudiate"],
        correct: "C",
        explanation: "• Main Word Meaning: 'ESPOUSE' means to adopt, support, or embrace an idea, cause, or belief (समर्थन करना / अपनाना).\n\n• A) Discard: Means to get rid of something as no longer useful or desirable.\n\n• B) Renounce: Means to formally declare one's abandonment of a claim or right.\n\n• C) Reject (Correct Answer): Means to refuse to accept, agree with, or support something. It acts as the direct antonym for 'ESPOUSE'.\n\n• D) Repudiate: Means to deny the truth or validity of something firmly."
    },
    {
        id: "vocab_set1_18",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nREFUTE",
        options: ["A) Rebut", "B) Disprove", "C) Counter", "D) Contradict"],
        correct: "B",
        explanation: "• Main Word Meaning: 'REFUTE' means to prove a statement, theory, or accusation to be wrong or false using evidence (खंडन करना / झूठा साबित करना).\n\n• A) Rebut: Means to claim or prove that evidence is false, which is close but refuting guarantees successful disproof.\n\n• B) Disprove (Correct Answer): Means to prove a statement or accusation to be false. It is the exact synonym for 'REFUTE'.\n\n• C) Counter: Means to speak or act in opposition to something.\n\n• D) Contradict: Means to assert the opposite of a statement without necessarily providing proof."
    },
    {
        id: "vocab_set1_19",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDISOWN",
        options: ["A) Acknowledge", "B) Adopt", "C) Claim", "D) Retain"],
        correct: "A",
        explanation: "• Main Word Meaning: 'DISOWN' means to refuse to acknowledge any connection with or responsibility for someone or something (त्यागना / संबंध तोड़ना).\n\n• A) Acknowledge (Correct Answer): Means to accept, admit, or formally recognize the truth or connection with an entity. It serves as the exact antonym for 'DISOWN'.\n\n• B) Adopt: Means to legally take another's child or choose to follow a cause.\n\n• C) Claim: Means to state or assert that something is the case or belongs to oneself.\n\n• D) Retain: Means to continue to have or keep possession of something."
    },
    {
        id: "vocab_set1_20",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nBLEMISH",
        options: ["A) Defect", "B) Flaw", "C) Stain", "D) Scar"],
        correct: "B",
        explanation: "• Main Word Meaning: 'BLEMISH' refers to a mark, fault, defect, or imperfection that spoils the visual appearance or quality of something (दाग / धब्बा / दोष).\n\n• A) Defect: Refers to a shortcoming or imperfection in a system or structure.\n\n• B) Flaw (Correct Answer): Refers to a mark, fault, or imperfection that spoils perfection. It serves as the exact synonym for 'BLEMISH'.\n\n• C) Stain: Refers to a colored mark that is difficult to remove.\n\n• D) Scar: Refers to a mark left on the skin after a wound has healed."
    },
    {
        id: "vocab_dawdle_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDAWDLE",
        options: ["A) Linger", "B) Loiter", "C) Procrastinate", "D) Dally"],
        correct: "C",
        explanation: "• Main Word Meaning: 'DAWDLE' means to waste time, move slowly, or linger aimlessly without purpose (समय गँवाना / सुस्ती करना).\n\n• A) Linger: Means to stay in a place longer than necessary because of a reluctance to leave.\n\n• B) Loiter: Means to stand or wait around idly without apparent purpose.\n\n• C) Procrastinate (Correct Answer): Means to delay action, put off tasks, or waste time aimlessly. It serves as the precise synonym for 'DAWDLE'.\n\n• D) Dally: Means to act or move slowly or frivolously."
    },
    {
        id: "vocab_fiddle_around_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nFIDDLE AROUND",
        options: ["A) Loiter", "B) Tamper", "C) Meddle", "D) Trifle"],
        correct: "A",
        explanation: "• Main Word Meaning: 'FIDDLE AROUND' means to spend time doing aimless, unproductive things or wasting time lazily (समय बर्बाद करना / टालमटोल करना).\n\n• A) Loiter (Correct Answer): Means to stand or wait around idly without apparent purpose. It functions as an exact synonym for 'FIDDLE AROUND'.\n\n• B) Tamper: Means to interfere with something in order to cause damage.\n\n• C) Meddle: Means to interfere in something that is not one's concern.\n\n• D) Trifle: Means to treat something without seriousness or respect."
    },
    {
        id: "vocab_amble_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAMBLE",
        options: ["A) Saunter", "B) Wander", "C) Meander", "D) Stroll"],
        correct: "D",
        explanation: "• Main Word Meaning: 'AMBLE' means to walk or move at a slow, relaxed, and unhurried pace (मंथर गति से चलना / टहलना).\n\n• A) Saunter: Means to walk in a slow, relaxed manner, very close but stroll is the primary testing key match.\n\n• B) Wander: Means to walk or move in a leisurely or aimless way without a fixed destination.\n\n• C) Meander: Means to follow a winding course, describing path shape rather than pace.\n\n• D) Stroll (Correct Answer): Means to walk in a leisurely, relaxed manner, acting as the exact synonym for 'AMBLE'."
    },
    {
        id: "vocab_trifle_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nTRIFLE",
        options: ["A) Hesitate", "B) Dally", "C) Flirt", "D) Ignore"],
        correct: "B",
        explanation: "• Main Word Meaning: 'TRIFLE' means to treat a serious matter casually or waste time foolishly (हलके में लेना / खिलवाड़ करना).\n\n• A) Hesitate: Means to pause before saying or doing something.\n\n• B) Dally (Correct Answer): Means to act or move slowly, or treat a serious matter casually and frivolously. It serves as an exact synonym for 'TRIFLE'.\n\n• C) Flirt: Means to behave as though attracted to someone, but playfully.\n\n• D) Ignore: Means to refuse to take notice of or acknowledge."
    },
    {
        id: "vocab_stagger_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSTAGGER",
        options: ["A) Stumble", "B) Totter", "C) Lurch", "D) Waver"],
        correct: "C",
        explanation: "• Main Word Meaning: 'STAGGER' means to walk or move unsteadily, as if about to fall or lose balance (लड़खड़ाना).\n\n• A) Stumble: Means to trip or momentarily lose one's balance while walking.\n\n• B) Totter: Means to move in a feeble or unsteady way, usually due to old age or weakness.\n\n• C) Lurch (Correct Answer): Means to make an abrupt, unsteady, or uncontrolled movement. It serves as an exact synonym for 'STAGGER'.\n\n• D) Waver: Means to shake or tremble, or become unsteady in decision-making."
    },
    {
        id: "vocab_decelerate_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDECELERATE",
        options: ["A) Retard", "B) Slacken", "C) Delay", "D) Impede"],
        correct: "B",
        explanation: "• Main Word Meaning: 'DECELERATE' means to slow down or reduce speed (गति कम करना).\n\n• A) Retard: Means to delay or hold back progress, usually applied to growth or processes.\n\n• B) Slacken (Correct Answer): Means to reduce speed, tightness, or intensity. It serves as the precise synonym for 'DECELERATE'.\n\n• C) Delay: Means to make something happen later than expected.\n\n• D) Impede: Means to delay or obstruct the progress or movement of."
    },
    {
        id: "vocab_dawdle_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDAWDLE",
        options: ["A) Hasten", "B) Hurry", "C) Rush", "D) Barrel"],
        correct: "D",
        explanation: "• Main Word Meaning: 'DAWDLE' means to move slowly or waste time lingering aimlessly (समय गँवाना).\n\n• A) Hasten: Means to be quick to do something, which is a general antonym.\n\n• B) Hurry: Means to move or act with speed, a standard contrast.\n\n• C) Rush: Means to deal with urgently or move with speed.\n\n• D) Barrel (Correct Answer): Means to move or travel at high speed in an urgent, powerful manner. It acts as the high-level vocabulary antonym for 'DAWDLE'."
    },
    {
        id: "vocab_exert_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nEXERT",
        options: ["A) Apply", "B) Strive", "C) Endeavor", "D) Strain"],
        correct: "B",
        explanation: "• Main Word Meaning: 'EXERT' means to apply oneself greatly or put forth intense physical or mental effort (ज़ोर लगाना / प्रयास करना).\n\n• A) Apply: Means to bring something into operation or use force.\n\n• B) Strive (Correct Answer): Means to make great efforts or push hard to achieve something. It functions as the precise synonym for 'EXERT'.\n\n• C) Endeavor: Means to try hard to do or achieve something.\n\n• D) Strain: Means to make a strenuous and painful effort."
    },
    {
        id: "vocab_travail_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nTRAVAIL",
        options: ["A) Labor", "B) Toil", "C) Drudgery", "D) Exertion"],
        correct: "C",
        explanation: "• Main Word Meaning: 'TRAVAIL' refers to painful, laborious effort or arduous work (कठिन परिश्रम / कष्ट).\n\n• A) Labor: Refers to work, especially hard physical work.\n\n• B) Toil: Refers to working extremely hard or incessantly.\n\n• C) Drudgery (Correct Answer): Refers to hard, menial, painful, or dull labor. It serves as an exact synonym for 'TRAVAIL'.\n\n• D) Exertion: Refers to physical or mental effort."
    },
    {
        id: "vocab_gregarious_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nGREGARIOUS",
        options: ["A) Social", "B) Friendly", "C) Companionable", "D) Outgoing"],
        correct: "C",
        explanation: "• Main Word Meaning: 'GREGARIOUS' describes a person who is fond of company, social, and outgoing (मिलनसार / सुसामाजिक).\n\n• A) Social: Describes relating to society or its organization, a broader general term.\n\n• B) Friendly: Describes behaving in a pleasant and kindly way toward someone.\n\n• C) Companionable (Correct Answer): Describes being friendly, welcoming, and fond of social company. It serves as an exact high-level synonym for 'GREGARIOUS'.\n\n• D) Outgoing: Describes socially confident and atmosphere-focused."
    },
    {
        id: "vocab_gregarious_ant_1",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nGREGARIOUS",
        options: ["A) Solitary", "B) Introverted", "C) Reclusive", "D) Reserved"],
        correct: "C",
        explanation: "• Main Word Meaning: 'GREGARIOUS' describes someone who thrives in social gatherings and loves company (मिलनसार).\n\n• A) Solitary: Describes done or existing alone, focusing on physical state rather than preference.\n\n• B) Introverted: Describes inward-looking temperament, a general psychological contrast.\n\n• C) Reclusive (Correct Answer): Refers to deliberately avoiding social interaction and living in seclusion. It acts as the direct antonym for 'GREGARIOUS'.\n\n• D) Reserved: Describes slow to reveal emotion or opinion."
    },
    {
        id: "vocab_gregarious_ant_2",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nGREGARIOUS",
        options: ["A) Detached", "B) Aloof", "C) Distant", "D) Unapproachable"],
        correct: "B",
        explanation: "• Main Word Meaning: 'GREGARIOUS' refers to being socially warm, friendly, and outgoing (मिलनसार).\n\n• A) Detached: Describes separate or disconnected, lacking social emotion.\n\n• B) Aloof (Correct Answer): Describes being emotionally cool, distant, and detached from others. It acts as a strong antonym for 'GREGARIOUS'.\n\n• C) Distant: Describes far away in space or time, or cool in manner.\n\n• D) Unapproachable: Describes difficult or intimidating to meet."
    },
    {
        id: "vocab_reticent_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nRETICENT",
        options: ["A) Hesitant", "B) Shy", "C) Taciturn", "D) Reserved"],
        correct: "D",
        explanation: "• Main Word Meaning: 'RETICENT' describes someone who is disinclined to speak or reveal their thoughts easily (अल्पभाषी / संकोची).\n\n• A) Hesitant: Describes tentative, slow, or unwilling to act.\n\n• B) Shy: Describes nervous or timid in the company of others.\n\n• C) Taciturn: Describes habitually saying little, very close but reserved directly matches reticent in restraint.\n\n• D) Reserved (Correct Answer): Refers to being quiet, hesitant, or disinclined to reveal personal opinions readily. It acts as the exact synonym for 'RETICENT'."
    },
    {
        id: "vocab_taciturn_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nTACITURN",
        options: ["A) Uncommunicative", "B) Silent", "C) Quiet", "D) Secretive"],
        correct: "A",
        explanation: "• Main Word Meaning: 'TACITURN' describes a person who is habitually reserved and says very little (कम बोलने वाला / मौन रहना पसंद करने वाला).\n\n• A) Uncommunicative (Correct Answer): Refers to a habitual disinclination to talk or engage in casual conversation. It serves as the exact synonym for 'TACITURN'.\n\n• B) Silent: Describes not making or accompanied by any sound.\n\n• C) Quiet: Describes making little or no noise.\n\n• D) Secretive: Describes inclined to conceal feelings or information."
    },
    {
        id: "vocab_engender_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nENGENDER",
        options: ["A) Create", "B) Generate", "C) Instigate", "D) Induce"],
        correct: "B",
        explanation: "• Main Word Meaning: 'ENGENDER' means to produce, cause, or give rise to a feeling, situation, or condition (उत्पन्न करना / पैदा करना).\n\n• A) Create: Means to bring something into existence as a result of one's own actions.\n\n• B) Generate (Correct Answer): Means to produce, cause, or bring about a specific outcome. It acts as the precise synonym for 'ENGENDER'.\n\n• C) Instigate: Means to bring about or initiate an action or event, especially negative ones.\n\n• D) Induce: Means to succeed in persuading or leading someone to do something."
    },
    {
        id: "vocab_reprove_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nREPROVE",
        options: ["A) Scold", "B) Rebut", "C) Admonish", "D) Criticize"],
        correct: "C",
        explanation: "• Main Word Meaning: 'REPROVE' means to scold, reprimand, or express disapproval of someone's bad behavior gently to firmly (डाँटना / फटकारना).\n\n• A) Scold: Means to構 reprimand someone angrily, which is informal compared to reprove.\n\n• B) Rebut: Means to claim or prove that evidence or an accusation is false.\n\n• C) Admonish (Correct Answer): Means to scold, reprimand, or express disapproval of someone's behavior firmly. It serves as the exact synonym for 'REPROVE'.\n\n• D) Criticize: Means to indicate the faults of someone or something in a disapproval manner."
    },
    {
        id: "vocab_reprove_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nREPROVE",
        options: ["A) Praise", "B) Commend", "C) Applaud", "D) Laud"],
        correct: "D",
        explanation: "• Main Word Meaning: 'REPROVE' means to reprimand or express disapproval of someone's actions (फटकारना).\n\n• A) Praise: Means to express warm approval or admiration, a general contrast.\n\n• B) Commend: Means to praise formally or officially.\n\n• C) Applaud: Means to show approval by clapping hands or expressing enthusiasm.\n\n• D) Laud (Correct Answer): Means to praise, honor, or commend highly. It acts as the direct high-level vocabulary antonym for 'REPROVE'."
    },
    {
        id: "vocab_venerate_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nVENERATE",
        options: ["A) Respect", "B) Revere", "C) Worship", "D) Honor"],
        correct: "B",
        explanation: "• Main Word Meaning: 'VENERATE' means to regard with profound respect, high honor, or deep devotion (आदर करना / पूजा करना).\n\n• A) Respect: Refers to due regard for feelings or rights, which is milder than venerate.\n\n• B) Revere (Correct Answer): Means to regard someone or something with profound respect and devotion. It functions as the exact synonym for 'VENERATE'.\n\n• C) Worship: Refers to showing religious devotion to a deity.\n\n• D) Honor: Means to regard with great respect, very close but revere captures profound sacred awe."
    },
    {
        id: "vocab_extol_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nEXTOL",
        options: ["A) Acclaim", "B) Glorify", "C) Exalt", "D) Eulogize"],
        correct: "C",
        explanation: "• Main Word Meaning: 'EXTOL' means to praise enthusiastically and highly in public or formal settings (प्रशंसा करना / सराहना करना).\n\n• A) Acclaim: Means to praise enthusiastically and publicly.\n\n• B) Glorify: Means to praise worshipfully or make something seem better than it is.\n\n• C) Exalt (Correct Answer): Means to hold in high regard or praise enthusiastically. It acts as an exact synonym for 'EXTOL'.\n\n• D) Eulogize: Means to praise highly in speech or writing, especially in a funeral tribute."
    },
    {
        id: "vocab_deify_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEIFY",
        options: ["A) Elevate", "B) Sanctify", "C) Exalt", "D) Idolize"],
        correct: "D",
        explanation: "• Main Word Meaning: 'DEIFY' means to treat, worship, or revere someone or something as if they were a god (देवता समान मानना / पूजना).\n\n• A) Elevate: Means to raise to a higher position or level.\n\n• B) Sanctify: Means to set apart as or declare holy.\n\n• C) Exalt: Means to hold in very high regard or raise in rank.\n\n• D) Idolize (Correct Answer): Means to admire or worship someone as if they were divine. It serves as the exact synonym for 'DEIFY'."
    },
    {
        id: "vocab_venerate_ant_1",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nVENERATE",
        options: ["A) Despise", "B) Disdain", "C) Blaspheme", "D) Execrate"],
        correct: "C",
        explanation: "• Main Word Meaning: 'VENERATE' means to show deep respect and sacred honor toward an entity (श्रद्धा रखना).\n\n• A) Despise: Means to feel contempt or deep repugnance for.\n\n• B) Disdain: Means to consider to be unworthy of one's consideration.\n\n• C) Blaspheme (Correct Answer): Means to speak disrespectfully or offensively toward sacred or revered entities. It acts as the exact antonym for 'VENERATE'.\n\n• D) Execrate: Means to feel or express great loathing for."
    },
    {
        id: "vocab_scorn_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSCORN",
        options: ["A) Contempt", "B) Disdain", "C) Derision", "D) Mockery"],
        correct: "B",
        explanation: "• Main Word Meaning: 'SCORN' refers to the feeling, attitude, or expression of open contempt and disgust toward someone or something (घृणा / नफ़रत / तिरस्कार).\n\n• A) Contempt: Refers to the feeling that a person or thing is beneath consideration.\n\n• B) Disdain (Correct Answer): Refers to the feeling that someone is unworthy of respect or consideration. It stands as an exact synonym for 'SCORN'.\n\n• C) Derision: Refers to contemptuous ridicule or mockery.\n\n• D) Mockery: Refers to teasing and contemptuous language or behavior."
    },
    {
        id: "vocab_desecrate_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDESECRATE",
        options: ["A) Defile", "B) Violate", "C) Corrupt", "D) Profane"],
        correct: "D",
        explanation: "• Main Word Meaning: 'DESECRATE' means to violate, ruin, or treat a sacred place, object, or belief with violent disrespect (अपवित्र करना).\n\n• A) Defile: Means to damage or spoil the purity or appearance of.\n\n• B) Violate: Means to break or fail to comply with a rule or formal agreement.\n\n• C) Corrupt: Means to cause to act dishonestly in return for money or personal gain.\n\n• D) Profane (Correct Answer): Means to treat a sacred place or belief with disrespect or abuse. It functions as the exact synonym for 'DESECRATE'."
    },
    {
        id: "vocab_affront_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAFFRONT",
        options: ["A) Offense", "B) Insult", "C) Sland", "D) Provocation"],
        correct: "B",
        explanation: "• Main Word Meaning: 'AFFRONT' refers to an intentional act, remark, or display of disrespect that offends someone's dignity (अपमान / अनादर).\n\n• A) Offense: Refers to annoyance or resentment brought about by a perceived insult.\n\n• B) Insult (Correct Answer): Refers to an intentional remark or action that causes offense or humiliation. It serves as an exact synonym for 'AFFRONT'.\n\n• C) Slander: Refers to the action or crime of making a false spoken statement damaging to reputation.\n\n• D) Provocation: Refers to action or speech that makes someone annoyed or angry."
    },
    {
        id: "vocab_quell_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nQUELL",
        options: ["A) Subdue", "B) Crush", "C) Suppress", "D) Extinguish"],
        correct: "C",
        explanation: "• Main Word Meaning: 'QUELL' means to forcibly put an end to, subdue, or extinguish a rebellion, disorder, or strong emotion (शांत करना / दबाना).\n\n• A) Subdue: Means to overcome, quiet, or bring under control by force.\n\n• B) Crush: Means to compress or squeeze forceful until ruined.\n\n• C) Suppress (Correct Answer): Means to forcibly put an end to or subdue a disturbance or emotional outbreak. It acts as an exact synonym for 'QUELL'.\n\n• D) Extinguish: Means to cause a fire or light to cease burning."
    },
    {
        id: "vocab_castigate_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCASTIGATE",
        options: ["A) Reprimand", "B) Chastise", "C) Rebuked", "D) Censure"],
        correct: "B",
        explanation: "• Main Word Meaning: 'CASTIGATE' means to criticize, reprimand, or scold someone with extreme severity (कड़ी निंदा करना / सज़ा देना).\n\n• A) Reprimand: Refers to expressing official disapproval.\n\n• B) Chastise (Correct Answer): Means to reprimand or scold someone with extreme severity. It functions as the precise synonym for 'CASTIGATE'.\n\n• C) Rebuke: Means to express sharp, stern disapproval.\n\n• D) Censure: Means to express formal disapproval of someone or something."
    },
    {
        id: "vocab_depravity_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEPRAVITY",
        options: ["A) Corruption", "B) Vice", "C) Wickedness", "D) Immorality"],
        correct: "C",
        explanation: "• Main Word Meaning: 'DEPRAVITY' refers to moral corruption, wickedness, and perversion of character or behavior (भ्रष्टता / दुष्टता).\n\n• A) Corruption: Refers to dishonest or fraudulent conduct by those in power.\n\n• B) Vice: Refers to immoral or wicked behavior, broader term.\n\n• C) Wickedness (Correct Answer): Refers to the state of being morally corrupt or evil in character. It stands as an exact synonym for 'DEPRAVITY'.\n\n• D) Immorality: Refers to the state or quality of being immoral."
    },
    {
        id: "vocab_abjection_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nABJECTION",
        options: ["A) Wretchedness", "B) Servitude", "C) Misery", "D) Degradation"],
        correct: "D",
        explanation: "• Main Word Meaning: 'ABJECTION' refers to a state of extreme misery, wretchedness, degradation, or self-humiliation (अधोगति / नीचता).\n\n• A) Wretchedness: Refers to the state of being very unhappy, ill, or in miserable condition.\n\n• B) Servitude: Refers to the state of being a slave or completely subject to someone powerful.\n\n• C) Misery: Refers to a state or feeling of great distress or discomfort.\n\n• D) Degradation (Correct Answer): Refers to the state of being lowered in status or character to a wretched level. It serves as the exact synonym for 'ABJECTION'."
    },
    {
        id: "vocab_dissipation_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDISSIPATION",
        options: ["A) Squandering", "B) Profligacy", "C) Excess", "D) Dissoluteness"],
        correct: "B",
        explanation: "• Main Word Meaning: 'DISSIPATION' refers to overindulgence in sensual pleasures, wasteful living, or squandering of wealth (फ़िजूलख़र्ची / व्यभिचार).\n\n• A) Squandering: Refers to wasting something in a reckless manner.\n\n• B) Profligacy (Correct Answer): Refers to reckless extravagance or immoral, overindulgent living. It acts as an exact synonym for 'DISSIPATION'.\n\n• C) Excess: Refers to an amount of something that is more than necessary.\n\n• D) Dissoluteness: Refers to laxity in morals, close but profligacy encompasses both moral and financial dissipation."
    },
    {
        id: "vocab_perversion_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPERVERSION",
        options: ["A) Corruption", "B) Distortion", "C) Deviation", "D) Debasement"],
        correct: "B",
        explanation: "• Main Word Meaning: 'PERVERSION' refers to corrupting, twisting, or altering something away from its original or correct state (विकृति / भ्रष्टता).\n\n• A) Corruption: Refers to dishonest behavior, a general term.\n\n• B) Distortion (Correct Answer): Refers to altering or corrupting something away from its natural state. It serves as an exact synonym for 'PERVERSION'.\n\n• C) Deviation: Refers to departing from an established course or accepted standard.\n\n• D) Debasement: Refers to reducing the quality or value of something."
    },
    {
        id: "vocab_depravity_ant_1",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDEPRAVITY",
        options: ["A) Morality", "B) Integrity", "C) Rectitude", "D) Virtue"],
        correct: "C",
        explanation: "• Main Word Meaning: 'DEPRAVITY' refers to moral wickedness, corruption, and evil conduct (दुष्टता / भ्रष्टता).\n\n• A) Morality: Refers to principles concerning right and wrong.\n\n• B) Integrity: Refers to the quality of being honest and having strong moral principles.\n\n• C) Rectitude (Correct Answer): Refers to morally correct behavior and uncompromising integrity. It serves as the precise antonym for 'DEPRAVITY'.\n\n• D) Virtue: Refers to behavior showing high moral standards."
    },
    {
        id: "vocab_depravity_ant_2",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDEPRAVITY",
        options: ["A) Probity", "B) Uprightness", "C) Goodness", "D) Scrupulosity"],
        correct: "D",
        explanation: "• Main Word Meaning: 'DEPRAVITY' refers to moral wickedness and perversion (भ्रष्टता).\n\n• A) Probity: Refers to the quality of having strong moral principles; honesty.\n\n• B) Uprightness: Refers to the quality of being honest and morally correct.\n\n• C) Goodness: Refers to the quality of being morally good.\n\n• D) Scrupulosity (Correct Answer): Refers to strict, rigorous care to avoid any moral wrongdoing. It acts as a direct antonym for 'DEPRAVITY'."
    },
    {
        id: "vocab_incorrigible_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nINCORRIGIBLE",
        options: ["A) Intractable", "B) Hardened", "C) Irreformable", "D) Unrepentant"],
        correct: "C",
        explanation: "• Main Word Meaning: 'INCORRIGIBLE' describes a person or habit that cannot be corrected, improved, or reformed due to deep-seated tendencies (असंसोधनीय / जिसे सुधारा न जा सके).\n\n• A) Intractable: Describes hard to control or deal with.\n\n• B) Hardened: Describes possessing fixed or established bad habits.\n\n• C) Irreformable (Correct Answer): Describes someone or something impossible to reform or improve. It serves as the exact synonym for 'INCORRIGIBLE'.\n\n• D) Unrepentant: Describes showing no regret for wrongdoings."
    },
    {
        id: "vocab_impenitent_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nIMPENITENT",
        options: ["A) Obdurate", "B) Remorseless", "C) Callous", "D) Unrepentant"],
        correct: "B",
        explanation: "• Main Word Meaning: 'IMPENITENT' describes feeling no guilt, regret, or repentance for bad actions (पश्चात्तापहीन / बेशर्म).\n\n• A) Obdurate: Describes stubbornly refusing to change one's opinion or course of action.\n\n• B) Remorseless (Correct Answer): Describes feeling no regret, guilt, or repentance for wrongdoings. It acts as the exact synonym for 'IMPENITENT'.\n\n• C) Callous: Describes showing or having an insensitive and cruel disregard for others.\n\n• D) Unrepentant: Describes showing no regret for one's wrongdoings, very close but remorseless is the primary test key."
    },
    {
        id: "vocab_incorrigible_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nINCORRIGIBLE",
        options: ["A) Amenable", "B) Compliant", "C) Reformable", "D) Docile"],
        correct: "C",
        explanation: "• Main Word Meaning: 'INCORRIGIBLE' describes bad habits or character that cannot be corrected or reformed (असुधार्य).\n\n• A) Amenable: Describes open and responsive to suggestion or advice.\n\n• B) Compliant: Describes inclined to agree with others or obey rules.\n\n• C) Reformable (Correct Answer): Means capable of being improved or changed for the better. It acts as the direct antonym for 'INCORRIGIBLE'.\n\n• D) Docile: Describes ready to accept control or instruction; submissive."
    },
    {
        id: "vocab_servile_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSERVILE",
        options: ["A) Obsequious", "B) Submissive", "C) Sycophantic", "D) Fawning"],
        correct: "B",
        explanation: "• Main Word Meaning: 'SERVILE' describes displaying an excessive willingness to serve, obey, or flatter others (जी-हुज़ूरी करने वाला / दासवत).\n\n• A) Obsequious: Describes obedient or attentive to an excessive or servile degree, focusing on flattery.\n\n• B) Submissive (Correct Answer): Describes an excessive willingness to obey or submit to authority. It stands as an exact synonym for 'SERVILE'.\n\n• C) Sycophantic: Describes behaving in an obsequious way in order to gain advantage.\n\n• D) Fawning: Describes displaying exaggerated flattery or affection."
    },
    {
        id: "vocab_slavish_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSLAVISH",
        options: ["A) Subservient", "B) Imitative", "C) Uncritical", "D) Obsequious"],
        correct: "D",
        explanation: "• Main Word Meaning: 'SLAVISH' describes showing blind, submissive obedience or fawning imitation without independent thought (अंधभक्त / चापलूसी से भरा).\n\n• A) Subservient: Describes prepared to obey others unquestioningly.\n\n• B) Imitative: Describes copying or following a model.\n\n• C) Uncritical: Describes not expressing criticism or judgment.\n\n• D) Obsequious (Correct Answer): Describes being excessively obedient or flattering to win favor. It serves as an exact synonym for 'SLAVISH'."
    },
    {
        id: "vocab_abject_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nABJECT",
        options: ["A) Ignoble", "B) Miserable", "C) Wretched", "D) Degrading"],
        correct: "A",
        explanation: "• Main Word Meaning: 'ABJECT' describes a condition, status, or behavior that is completely wretched, hopeless, or lacking self-respect (अधम / नीच / दयनीय).\n\n• A) Ignoble (Correct Answer): Describes character or conditions that are wretched, degraded, or lacking honor. It acts as the precise synonym for 'ABJECT'.\n\n• B) Miserable: Describes wretchedly unhappy or uncomfortable.\n\n• C) Wretched: Describes in a very unhappy or unfortunate state.\n\n• D) Degrading: Describes causing a loss of self-respect; humiliating."
    },
    {
        id: "vocab_menial_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nMENIAL",
        options: ["A) Subservient", "B) Lowly", "C) Dignified", "D) Eminent"],
        correct: "B",
        explanation: "• Main Word Meaning: 'MENIAL' describes work, status, or tasks that are humble, degraded, and requiring little skill (तुच्छ / छोटा काम).\n\n• A) Subservient: Describes prepared to obey others unquestioningly, focusing on attitude rather than work status.\n\n• B) Lowly (Correct Answer): Describes work or status that is humble and requiring little skill. It functions as the exact synonym for 'MENIAL'.\n\n• C) Dignified: Describes having or showing a composed or serious manner that is worthy of respect.\n\n• D) Eminent: Describes famous and respected within a particular sphere or profession."
    },
    {
        id: "vocab_sycophant_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSYCOPHANT",
        options: ["A) Opportunist", "B) Parasite", "C) Flatterer", "D) Henchman"],
        correct: "C",
        explanation: "• Main Word Meaning: 'SYCOPHANT' refers to a person who acts obsequiously toward powerful people to gain personal advantage (चापलूसी करने वाला / चाटुकार).\n\n• A) Opportunist: Refers to a person who takes advantage of opportunities as they arise, regardless of planning.\n\n• B) Parasite: Refers to an organism or person living off others; while negative, it is not an exact synonym for insincere praise.\n\n• C) Flatterer (Correct Answer): Refers to someone who praises others insincerely for personal gain, acting as the exact synonym for 'SYCOPHANT'.\n\n• D) Henchman: Refers to a faithful follower or political supporter, especially one prepared to engage in crime."
    },
    {
        id: "vocab_toadyish_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nTOADYISH",
        options: ["A) Servile", "B) Fawning", "C) Crawling", "D) Sycophantic"],
        correct: "B",
        explanation: "• Main Word Meaning: 'TOADYISH' describes displaying exaggerated flattery and servility to gain favor from superiors (चापलूसी भरा).\n\n• A) Servile: Describes displaying excessive willingness to serve.\n\n• B) Fawning (Correct Answer): Describes displaying exaggerated flattery or servility to win favor. It serves as the exact synonym for 'TOADYISH'.\n\n• C) Crawling: Describes behaving in a servile or groveling manner.\n\n• D) Sycophantic: Describes behaving in an obsequious way."
    },
    {
        id: "vocab_subservient_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSUBSERVIENT",
        options: ["A) Subordinate", "B) Obedient", "C) Compliant", "D) Deferential"],
        correct: "C",
        explanation: "• Main Word Meaning: 'SUBSERVIENT' describes being prepared to obey others unquestioningly or acting in a subordinate role (आज्ञाकारी / अधीन).\n\n• A) Subordinate: Describes lower in rank or position.\n\n• B) Obedient: Describes complying or willing to comply with orders or requests.\n\n• C) Compliant (Correct Answer): Describes yielding easily to authority or obeying unquestioningly. It functions as the exact synonym for 'SUBSERVIENT'.\n\n• D) Deferential: Describes showing respect and esteem due to a superior."
    },
    {
        id: "vocab_demure_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEMURE",
        options: ["A) Reserved", "B) Modest", "C) Coy", "D) Bashful"],
        correct: "B",
        explanation: "• Main Word Meaning: 'DEMURE' describes someone (especially a woman) who is quiet, reserved, modest, or shy (शांत / शर्मीला / गंभीर).\n\n• A) Reserved: Describes slow to reveal emotion or opinion.\n\n• B) Modest (Correct Answer): Describes being reserved, quiet, or unassuming in behavior. It serves as the exact synonym for 'DEMURE'.\n\n• C) Coy: Describes making a pretense of shyness or modesty that is intended to be alluring.\n\n• D) Bashful: Describes reluctant to draw attention to oneself; shy."
    },
    {
        id: "vocab_servile_ant_1",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nSERVILE",
        options: ["A) Assertive", "B) Domineering", "C) Imperious", "D) Authoritative"],
        correct: "C",
        explanation: "• Main Word Meaning: 'SERVILE' describes showing an excessive willingness to obey and serve others (जी-हुज़ूरी करने वाला).\n\n• A) Assertive: Describes having or showing a confident and forceful personality.\n\n• B) Domineering: Describes asserting one's will over another in an arrogant way.\n\n• C) Imperious (Correct Answer): Describes assuming power and authority in an arrogant, domineering manner. It acts as the precise antonym for 'SERVILE'.\n\n• D) Authoritative: Describes commanding and self-confident."
    },
    {
        id: "vocab_supercilious_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSUPERCILIOUS",
        options: ["A) Arrogant", "B) Disdainful", "C) Patronizing", "D) Haughty"],
        correct: "D",
        explanation: "• Main Word Meaning: 'SUPERCILIOUS' describes behaving as though one thinks one is superior to others; arrogant and disdainful (घमंडी / घृणात्मक).\n\n• A) Arrogant: Describes having an exaggerated sense of self-importance.\n\n• B) Disdainful: Describes showing contempt or lack of respect.\n\n• C) Patronizing: Describes displaying an offensively condescending manner.\n\n• D) Haughty (Correct Answer): Refers to behaving in an arrogantly superior and disdainful manner. It serves as an exact synonym for 'SUPERCILIOUS'."
    },
    {
        id: "vocab_ominous_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nOMINOUS",
        options: ["A) Threatening", "B) Foreboding", "C) Menacing", "D) Portentous"],
        correct: "C",
        explanation: "• Main Word Meaning: 'OMINOUS' describes giving the impression that something bad, harmful, or unpleasant is about to happen (अशुभ / डरावना).\n\n• A) Threatening: Describes having a hostile or deliberately frightening quality.\n\n• B) Foreboding: Describes implying that something bad is going to happen.\n\n• C) Menacing (Correct Answer): Describes suggesting the presence of danger or indicating evil is ahead. It acts as the exact synonym for 'OMINOUS'.\n\n• D) Portentous: Describes done in a pompous or overly solemn manner, or ominous."
    },
    {
        id: "vocab_baleful_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nBALEFUL",
        options: ["A) Harmful", "B) Sinister", "C) Malign", "D) Hostile"],
        correct: "B",
        explanation: "• Main Word Meaning: 'BALEFUL' describes threatening harm, evil, or foreboding destructive consequences (हानिकारक / विनाशकारी).\n\n• A) Harmful: Describes causing or likely to cause harm.\n\n• B) Sinister (Correct Answer): Describes threatening harm, destruction, or evil fortune. It serves as an exact synonym for 'BALEFUL'.\n\n• C) Malign: Describes evil in nature or effect; malevolent.\n\n• D) Hostile: Describes showing or feeling opposition or dislike; unfriendly."
    },
    {
        id: "vocab_inauspicious_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nINAUSPICIOUS",
        options: ["A) Unfortunate", "B) Unfavorable", "C) Ominous", "D) Unpromising"],
        correct: "B",
        explanation: "• Main Word Meaning: 'INAUSPICIOUS' describes showing signs that warn of future difficulty, bad luck, or failure (अशुभ / अवांछनीय).\n\n• A) Unfortunate: Describes having or marked by bad fortune.\n\n• B) Unfavorable (Correct Answer): Describes showing signs that warn of difficulty or bad luck. It functions as the exact synonym for 'INAUSPICIOUS'.\n\n• C) Ominous: Describes giving the impression that something bad is going to happen.\n\n• D) Unpromising: Describes not giving hope of future success."
    },
    {
        id: "vocab_sinister_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSINISTER",
        options: ["A) Malevolent", "B) Evil", "C) Threatening", "D) Ominous"],
        correct: "C",
        explanation: "• Main Word Meaning: 'SINISTER' describes giving the impression that something harmful, evil, or dangerous is about to happen (अशुभ / भयावह).\n\n• A) Malevolent: Describes having or showing a wish to do evil to others.\n\n• B) Evil: Describes profoundly immoral and wicked.\n\n• C) Threatening (Correct Answer): Describes giving the impression that something harmful or dangerous is near. It serves as the exact synonym for 'SINISTER'.\n\n• D) Ominous: Describes giving the impression that something bad is going to happen."
    },
    {
        id: "vocab_ominous_ant_1",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nOMINOUS",
        options: ["A) Encouraging", "B) Auspicious", "C) Promising", "D) Hopeful"],
        correct: "B",
        explanation: "• Main Word Meaning: 'OMINOUS' describes giving an impression of impending evil or danger (अशुभ).\n\n• A) Encouraging: Describes giving someone support or confidence.\n\n• B) Auspicious (Correct Answer): Describes showing that future success or good fortune is likely. It serves as the precise antonym for 'OMINOUS'.\n\n• C) Promising: Describes showing signs of future success.\n\n• D) Hopeful: Describes feeling or inspiring optimism."
    },
    {
        id: "vocab_propitious_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPROPITIOUS",
        options: ["A) Auspicious", "B) Opportunistic", "C) Advantageous", "D) Favorable"],
        correct: "D",
        explanation: "• Main Word Meaning: 'PROPITIOUS' describes giving or indicating a good chance of success; favorable (शुभ / अनुकूल).\n\n• A) Auspicious: Describes conducive to success; favorable.\n\n• B) Opportunistic: Describes taking immediate advantage of opportunities.\n\n• C) Advantageous: Describes involving or creating favorable circumstances.\n\n• D) Favorable (Correct Answer): Describes giving or indicating a good chance of success. It serves as the exact synonym for 'PROPITIOUS'."
    },
    {
        id: "vocab_corruption_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCORRUPTION",
        options: ["A) Dishonesty", "B) Depravity", "C) Bribery", "D) Fraud"],
        correct: "B",
        explanation: "• Main Word Meaning: 'CORRUPTION' refers to dishonest, fraudulent, or morally bad conduct by those in power (भ्रष्टाचार / अनैतिकता).\n\n• A) Dishonesty: Refers to deceitfulness or lack of integrity.\n\n• B) Depravity (Correct Answer): Refers to moral corruption, wickedness, or perversion. It acts as the exact synonym for 'CORRUPTION'.\n\n• C) Bribery: Refers to giving or receiving unapproved money for favor.\n\n• D) Fraud: Refers to wrongful or criminal deception."
    },
    {
        id: "vocab_debasement_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEBASEMENT",
        options: ["A) Deterioration", "B) Devaluation", "C) Degradation", "D) Corruption"],
        correct: "C",
        explanation: "• Main Word Meaning: 'DEBASEMENT' refers to the action of reducing the quality, value, status, or moral dignity of something (अवनति / मूल्य में कमी).\n\n• A) Deterioration: Refers to the process of becoming progressively worse.\n\n• B) Devaluation: Refers to the reduction in the official value of a currency.\n\n• C) Degradation (Correct Answer): Refers to the process of lowering in quality, value, status, or moral dignity. It acts as an exact synonym for 'DEBASEMENT'.\n\n• D) Corruption: Refers to dishonest conduct."
    },
    {
        id: "vocab_decadency_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDECADENCY",
        options: ["A) Decay", "B) Degeneration", "C) Dissolution", "D) Decline"],
        correct: "D",
        explanation: "• Main Word Meaning: 'DECADENCY' refers to moral, cultural, or physical deterioration and decay over time (पतन / क्षय).\n\n• A) Decay: Refers to rotting or decomposing.\n\n• B) Degeneration: Refers to the state or process of decline.\n\n• C) Dissolution: Refers to the closing down or dismissal of an assembly.\n\n• D) Decline (Correct Answer): Refers to moral, cultural, or physical deterioration. It functions as the exact synonym for 'DECADENCY'."
    },
    {
        id: "vocab_degeneracy_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEGENERACY",
        options: ["A) Depravity", "B) Deterioration", "C) Decadence", "D) Regression"],
        correct: "B",
        explanation: "• Main Word Meaning: 'DEGENERACY' refers to the state or process of declining to a lower, worse, or corrupted moral condition (भ्रष्टता / गिरावट).\n\n• A) Depravity: Refers to moral corruption.\n\n• B) Deterioration (Correct Answer): Refers to the process of becoming progressively worse in quality or health. It functions as the exact synonym for 'DEGENERACY'.\n\n• C) Decadence: Refers to moral decline.\n\n• D) Regression: Refers to a return to a former or less developed state."
    },
    {
        id: "vocab_degradation_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEGRADATION",
        options: ["A) Shame", "B) Disgrace", "C) Humiliation", "D) Dishonor"],
        correct: "C",
        explanation: "• Main Word Meaning: 'DEGRADATION' refers to a reduction in dignity, rank, self-respect, or moral condition (अपमान / बदनामी).\n\n• A) Shame: Refers to a painful feeling of humiliation.\n\n• B) Disgrace: Refers to loss of reputation or respect.\n\n• C) Humiliation (Correct Answer): Refers to a reduction in dignity, respect, or self-esteem. It acts as a precise synonym for 'DEGRADATION'.\n\n• D) Dishonor: Refers to state of shame or disgrace."
    },
    {
        id: "vocab_goodness_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nGOODNESS",
        options: ["A) Wickedness", "B) Depravity", "C) Evil", "D) Sinfulness"],
        correct: "B",
        explanation: "• Main Word Meaning: 'GOODNESS' refers to the quality of being morally good, virtuous, or beneficial (सज्जनता / भलाई).\n\n• A) Wickedness: Refers to the quality of being evil or morally wrong.\n\n• B) Depravity (Correct Answer): Refers to moral corruption, wickedness, and evil character. It serves as the precise high-level vocabulary antonym for 'GOODNESS'.\n\n• C) Evil: Refers to profound immorality.\n\n• D) Sinfulness: Refers to state of committing sins."
    },
    {
        id: "vocab_virtue_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nVIRTUE",
        options: ["A) Vice", "B) Sin", "C) Dishonor", "D) Depravity"],
        correct: "D",
        explanation: "• Main Word Meaning: 'VIRTUE' refers to behavior showing high moral standards and purity of character (गुण / नैतिक श्रेष्ठता).\n\n• A) Vice: Refers to immoral behavior, standard broad antonym.\n\n• B) Sin: Refers to an immoral act against divine law.\n\n• C) Dishonor: Refers to state of shame or loss of respect.\n\n• D) Depravity (Correct Answer): Refers to moral corruption, wickedness, and perversion. It acts as the exact antonym for 'VIRTUE'."
    },
    {
        id: "vocab_morality_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nMORALITY",
        options: ["A) Corruption", "B) Immorality", "C) Wickedness", "D) Dissoluteness"],
        correct: "A",
        explanation: "• Main Word Meaning: 'MORALITY' refers to principles concerning the distinction between right and wrong behavior (नैतिकता).\n\n• A) Corruption (Correct Answer): Refers to dishonest or immoral behavior that violates ethical codes. It serves as the direct antonym for 'MORALITY'.\n\n• B) Immorality: Refers to state of being immoral, direct general antonym.\n\n• C) Wickedness: Refers to moral evil.\n\n• D) Dissoluteness: Refers to laxity in morals."
    },
    {
        id: "vocab_righteousness_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nRIGHTEOUSNESS",
        options: ["A) Iniquity", "B) Sinfulness", "C) Depravity", "D) Unlawfulness"],
        correct: "C",
        explanation: "• Main Word Meaning: 'RIGHTEOUSNESS' refers to the quality of being morally right, justifiable, and virtuous (सदाचार / न्यायपरायणता).\n\n• A) Iniquity: Refers to immoral or grossly unfair behavior.\n\n• B) Sinfulness: Refers to state of being sinful.\n\n• C) Depravity (Correct Answer): Refers to a state of moral corruption and wickedness, acting as the direct exact antonym for 'RIGHTEOUSNESS'.\n\n• D) Unlawfulness: Refers to state of violating law."
    },
    {
        id: "vocab_hopeless_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nHOPELESS",
        options: ["A) Desperate", "B) Futile", "C) Irremediable", "D) Incorrigible"],
        correct: "D",
        explanation: "• Main Word Meaning: 'HOPELESS' describes a situation, person, or habit that cannot be fixed, improved, or saved (निराशाजनक / असहाय).\n\n• A) Desperate: Describes feeling or showing a hopeless sense that a situation is impossible.\n\n• B) Futile: Describes pointess or producing no useful result.\n\n• C) Irremediable: Describes impossible to cure or put right.\n\n• D) Incorrigible (Correct Answer): Describes someone or something impossible to change or reform, effectively rendering the situation beyond hope. It serves as the exact synonym for 'HOPELESS'."
    },
    {
        id: "vocab_irrecoverable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nIRRECOVERABLE",
        options: ["A) Lost", "B) Irretrievable", "C) Permanent", "D) Irreversible"],
        correct: "B",
        explanation: "• Main Word Meaning: 'IRRECOVERABLE' describes something that cannot be regained, retrieved, or put right again (अप्राप्य / जिसे वापस न पाया जा सके).\n\n• A) Lost: Describes unable to be found.\n\n• B) Irretrievable (Correct Answer): Describes something impossible to retrieve or recover. It serves as the exact synonym for 'IRRECOVERABLE'.\n\n• C) Permanent: Describes lasting or intended to last indefinitely.\n\n• D) Irreversible: Describes not able to be undone or altered."
    },
    {
        id: "vocab_incurable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nINCURABLE",
        options: ["A) Fatal", "B) Terminal", "C) Irremediable", "D) Untreatable"],
        correct: "C",
        explanation: "• Main Word Meaning: 'INCURABLE' describes a disease, flaw, or situation that cannot be cured or remedied (असाध्य / जो ठीक न हो सके).\n\n• A) Fatal: Describes causing death.\n\n• B) Terminal: Describes predicted to lead to death.\n\n• C) Irremediable (Correct Answer): Describes something impossible to cure, remedy, or correct, functioning as an exact synonym for 'INCURABLE'.\n\n• D) Untreatable: Describes not capable of being treated."
    },
    {
        id: "vocab_irremediable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nIRREMEDIABLE",
        options: ["A) Unfixable", "B) Incurable", "C) Irretrievable", "D) Hopeless"],
        correct: "A",
        explanation: "• Main Word Meaning: 'IRREMEDIABLE' describes a condition or mistake impossible to repair, correct, or remedy (असुधार्य).\n\n• A) Unfixable (Correct Answer): Describes something impossible to repair or remedy, serving as an exact synonym for 'IRREMEDIABLE'.\n\n• B) Incurable: Describes impossible to cure biologically.\n\n• C) Irretrievable: Describes impossible to recover.\n\n• D) Hopeless: Describes feeling without hope."
    },
    {
        id: "vocab_unredeemable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nUNREDEEMABLE",
        options: ["A) Worthless", "B) Irredeemable", "C) Lost", "D) Depraved"],
        correct: "B",
        explanation: "• Main Word Meaning: 'UNREDEEMABLE' describes someone or something impossible to save, reclaim, or improve (अपूरणीय / जिसे बचाया न जा सके).\n\n• A) Worthless: Describes having no real value.\n\n• B) Irredeemable (Correct Answer): Describes something impossible to save, correct, or improve, serving as an exact synonym for 'UNREDEEMABLE'.\n\n• C) Lost: Describes no longer possessed or retained.\n\n• D) Depraved: Describes morally corrupt."
    },
    {
        id: "vocab_savable_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nSAVABLE",
        options: ["A) Lost", "B) Doomed", "C) Incorrigible", "D) Hopeless"],
        correct: "C",
        explanation: "• Main Word Meaning: 'SAVABLE' describes something capable of being saved, rescued, or restored to safety (उद्धार योग्य).\n\n• A) Lost: Describes unable to be found.\n\n• B) Doomed: Describes ill-fated or certain to fail.\n\n• C) Incorrigible (Correct Answer): Describes someone or something impossible to reform, save, or correct. It serves as the precise antonym for 'SAVABLE'.\n\n• D) Hopeless: Describes feeling beyond hope."
    },
    {
        id: "vocab_curable_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nCURABLE",
        options: ["A) Fatal", "B) Incurable", "C) Terminal", "D) Deadly"],
        correct: "B",
        explanation: "• Main Word Meaning: 'CURABLE' describes a medical condition, disease, or flaw capable of being healed or corrected (साध्य).\n\n• A) Fatal: Describes causing death.\n\n• B) Incurable (Correct Answer): Describes a disease or flaw that cannot be cured. It acts as the exact antonym for 'CURABLE'.\n\n• C) Terminal: Describes leading to death.\n\n• D) Deadly: Describes causing death."
    },
    {
        id: "vocab_arrogant_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nARROGANT",
        options: ["A) Humble", "B) Servile", "C) Modest", "D) Meek"],
        correct: "B",
        explanation: "• Main Word Meaning: 'ARROGANT' describes having or revealing an exaggerated sense of one's own importance or abilities (अभिमानी / घमंडी).\n\n• A) Humble: Describes having or showing a modest view of one's importance, broad antonym.\n\n• B) Servile (Correct Answer): Describes showing an excessive, humble, or submissive willingness to serve others. It acts as the direct high-level antonym for 'ARROGANT'.\n\n• C) Modest: Describes unassuming in estimation of abilities.\n\n• D) Meek: Describes quiet, gentle, and easily imposed upon."
    },
    {
        id: "vocab_haughty_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nHAUGHTY",
        options: ["A) Modest", "B) Humble", "C) Unassuming", "D) Subservient"],
        correct: "D",
        explanation: "• Main Word Meaning: 'HAUGHTY' describes behaving in an arrogantly superior and disdainful manner toward others (घमंडी / मग़रूर).\n\n• A) Modest: Describes reserved in estimation.\n\n• B) Humble: Describes modest in importance.\n\n• C) Unassuming: Describes not pretentious or arrogant.\n\n• D) Subservient (Correct Answer): Describes being prepared to obey others unquestioningly or yielding submissively. It acts as the direct antonym for 'HAUGHTY'."
    },
    {
        id: "vocab_lordly_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nLORDLY",
        options: ["A) Lowly", "B) Humble", "C) Abject", "D) Modest"],
        correct: "C",
        explanation: "• Main Word Meaning: 'LORDLY' describes behaving in a grand, arrogant, or domineering manner suited to a lord (सामंती / रोबीला).\n\n• A) Lowly: Describes low in status or importance.\n\n• B) Humble: Describes modest view.\n\n• C) Abject (Correct Answer): Describes being wretched, degraded, humble, and completely lacking self-pride. It acts as the direct antonym for 'LORDLY'.\n\n• D) Modest: Describes unassuming."
    },
    {
        id: "vocab_portentous_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPORTENTOUS",
        options: ["A) Pompous", "B) Ominous", "C) Solemn", "D) Momentous"],
        correct: "B",
        explanation: "• Main Word Meaning: 'PORTENTOUS' describes serving as a sign or warning that something momentous or calamitous is about to happen (अशुभ / चेतावनीभरा).\n\n• A) Pompous: Describes affectively grand, solemn, or self-important.\n\n• B) Ominous (Correct Answer): Describes serving as a warning of something evil or disastrous about to happen. It serves as the exact synonym for 'PORTENTOUS'.\n\n• C) Solemn: Describes formal and dignified.\n\n• D) Momentous: Describes of great importance."
    },
    {
        id: "vocab_unthreatening_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nUNTHREATENING",
        options: ["A) Hostile", "B) Aggressive", "C) Menacing", "D) Dangerous"],
        correct: "C",
        explanation: "• Main Word Meaning: 'UNTHREATENING' describes someone or something safe, calm, and unlikely to cause harm or danger (भयरहित).\n\n• A) Hostile: Describes showing ill will.\n\n• B) Aggressive: Describes ready or likely to attack.\n\n• C) Menacing (Correct Answer): Describes suggesting danger or threatening harm. It acts as the exact antonym for 'UNTHREATENING'.\n\n• D) Dangerous: Describes able to cause harm."
    },
    {
        id: "vocab_bright_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nBRIGHT",
        options: ["A) Gloomy", "B) Dismal", "C) Bleak", "D) Ominous"],
        correct: "D",
        explanation: "• Main Word Meaning: In context of future prospects, 'BRIGHT' describes promising good fortune, success, and optimism (आशाजनक).\n\n• A) Gloomy: Describes dark or poorly lit.\n\n• B) Dismal: Describes depressing or dreary.\n\n• C) Bleak: Describes lacking vegetation or hope.\n\n• D) Ominous (Correct Answer): Describes giving the impression that something bad or threatening is going to happen. It acts as the exact antonym for 'BRIGHT' prospects."
    },
    {
        id: "vocab_prosperous_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPROSPEROUS",
        options: ["A) Wealthy", "B) Thriving", "C) Successful", "D) Flourishing"],
        correct: "B",
        explanation: "• Main Word Meaning: 'PROSPEROUS' describes successful, flourishing, and financially booming conditions (समृद्ध / संपन्न).\n\n• A) Wealthy: Describes having a great deal of money.\n\n• B) Thriving (Correct Answer): Describes flourishing and gaining financial or material success. It acts as the precise synonym for 'PROSPEROUS'.\n\n• C) Successful: Describes achieving aim or popularity.\n\n• D) Flourishing: Describes developing rapidly and successfully."
    },
    {
        id: "vocab_garnish_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nGARNISH",
        options: ["A) Trim", "B) Decorate", "C) Adorn", "D) Ornament"],
        correct: "C",
        explanation: "• Main Word Meaning: 'GARNISH' means to decorate or embellish something (especially food or items) to enhance appearance (सजाना).\n\n• A) Trim: Means to make neat or decorate along edges.\n\n• B) Decorate: Means to make something look more attractive.\n\n• C) Adorn (Correct Answer): Means to decorate, embellish, or enhance the visual appeal of something. It acts as the exact synonym for 'GARNISH'.\n\n• D) Ornament: Means to make more attractive by adding decorative items."
    },
    {
        id: "vocab_amplify_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAMPLIFY",
        options: ["A) Expand", "B) Intensify", "C) Increase", "D) Magnify"],
        correct: "D",
        explanation: "• Main Word Meaning: 'AMPLIFY' means to increase the volume, size, strength, or scope of something (बढ़ाना / विस्तार करना).\n\n• A) Expand: Means to become larger in size.\n\n• B) Intensify: Means to become or make more intense.\n\n• C) Increase: Means to become or make greater in amount.\n\n• D) Magnify (Correct Answer): Means to make something larger, louder, or more intense. It serves as the exact synonym for 'AMPLIFY'."
    },
    {
        id: "vocab_deck_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDECK",
        options: ["A) Decorate", "B) Array", "C) Attire", "D) Embellish"],
        correct: "A",
        explanation: "• Main Word Meaning: 'DECK' means to decorate, furnish, or adorn something visually to make it look attractive (सजाना).\n\n• A) Decorate (Correct Answer): Means to adorn or embellish something visually. It serves as an exact synonym for 'DECK'.\n\n• B) Array: Means to display or range in a particular order.\n\n• C) Attire: Means to clothe in formal garments.\n\n• D) Embellish: Means to make more attractive."
    },
    {
        id: "vocab_adorn_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nADORN",
        options: ["A) Beautify", "B) Embellish", "C) Grace", "D) Deck"],
        correct: "B",
        explanation: "• Main Word Meaning: 'ADORN' means to make more beautiful or attractive by adding decorative items or ornaments (सजाना / अलंकृत करना).\n\n• A) Beautify: Means to improve appearance.\n\n• B) Embellish (Correct Answer): Means to make something more beautiful by adding decorative elements. It acts as an exact synonym for 'ADORN'.\n\n• C) Grace: Means to bring honor to by presence.\n\n• D) Deck: Means to decorate."
    },
    {
        id: "vocab_ornament_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nORNAMENT",
        options: ["A) Decorate", "B) Garnish", "C) Beautify", "D) Adorn"],
        correct: "C",
        explanation: "• Main Word Meaning: 'ORNAMENT' means to enhance the visual appeal or aesthetic quality of an object by adding decorations (अलंकृत करना).\n\n• A) Decorate: Means to make attractive.\n\n• B) Garnish: Means to decorate food.\n\n• C) Beautify (Correct Answer): Means to enhance visual appeal by adding pleasing features. It acts as the exact synonym for 'ORNAMENT'.\n\n• D) Adorn: Means to add beauty."
    },
    {
        id: "vocab_spoil_ant_ext",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nSPOIL",
        options: ["A) Repair", "B) Improve", "C) Restore", "D) Decorate"],
        correct: "D",
        explanation: "• Main Word Meaning: 'SPOIL' means to diminish the quality, beauty, or value of something, or to disfigure it (खराब करना / बिगाड़ना).\n\n• A) Repair: Means to restore something damaged to good condition.\n\n• B) Improve: Means to make or become better.\n\n• C) Restore: Means to bring back to original state.\n\n• D) Decorate (Correct Answer): Means to enhance the appearance and aesthetic beauty of something. It serves as the precise antonym for 'SPOIL'."
    },
    {
        id: "vocab_understate_ant_ext",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nUNDERSTATE",
        options: ["A) Amplify", "B) Exaggerate", "C) Overestimate", "D) Maximize"],
        correct: "A",
        explanation: "• Main Word Meaning: 'UNDERSTATE' means to describe or present something as smaller, less important, or less intense than it really is (कम करके बताना).\n\n• A) Amplify (Correct Answer): Means to enlarge, increase, or emphasize the magnitude or significance of a statement. It acts as the direct antonym for 'UNDERSTATE'.\n\n• B) Exaggerate: Means to represent as greater than it is.\n\n• C) Overestimate: Means to estimate at too high a value.\n\n• D) Maximize: Means to make as large as possible."
    },
    {
        id: "vocab_lavish_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nLAVISH",
        options: ["A) Profuse", "B) Extravagant", "C) Bounteous", "D) Sumptuous"],
        correct: "B",
        explanation: "• Main Word Meaning: 'LAVISH' describes spending money, using resources, or giving items in huge, luxurious, or unrestrained quantities (फ़िज़ूलख़र्च / अतिव्ययी).\n\n• A) Profuse: Describes existing in large amounts.\n\n• B) Extravagant (Correct Answer): Describes spending money far beyond necessity. It serves as an exact synonym for 'LAVISH'.\n\n• C) Bounteous: Describes generously given.\n\n• D) Sumptuous: Describes splendid and expensive-looking."
    },
    {
        id: "vocab_extravagant_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nEXTRAVAGANT",
        options: ["A) Excessive", "B) Wasteful", "C) Spendthrift", "D) Imprudent"],
        correct: "C",
        explanation: "• Main Word Meaning: 'EXTRAVAGANT' describes spending money or using resources far beyond what is necessary or reasonable (अपव्ययी).\n\n• A) Excessive: Describes more than necessary.\n\n• B) Wasteful: Describes using resources carelessly.\n\n• C) Spendthrift (Correct Answer): Refers to someone who spends money in an irresponsible, wasteful manner. It acts as an exact synonym for 'EXTRAVAGANT'.\n\n• D) Imprudent: Describes lacking care or thought."
    },
    {
        id: "vocab_unthrifty_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nUNTHRIFTY",
        options: ["A) Prodigal", "B) Wasteful", "C) Reckless", "D) Imprudent"],
        correct: "B",
        explanation: "• Main Word Meaning: 'UNTHRIFTY' describes being careless, irresponsible, or wasteful with money and resources (लापरवाह / फ़िज़ूलख़र्च).\n\n• A) Prodigal: Describes spending recklessly.\n\n• B) Wasteful (Correct Answer): Describes using money or resources carelessly. It functions as the exact synonym for 'UNTHRIFTY'.\n\n• C) Reckless: Describes without thought of consequences.\n\n• D) Imprudent: Describes lacking wisdom."
    },
    {
        id: "vocab_frugal_ant_ext",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nFRUGAL",
        options: ["A) Wasteful", "B) Prodigal", "C) Extravagant", "D) Lavish"],
        correct: "C",
        explanation: "• Main Word Meaning: 'FRUGAL' describes being simple, economical, and careful with money and resources (मितव्ययी).\n\n• A) Wasteful: Describes using carelessly.\n\n• B) Prodigal: Describes recklessly wasteful.\n\n• C) Extravagant (Correct Answer): Describes spending money recklessly or in excessive amounts. It serves as the precise antonym for 'FRUGAL'.\n\n• D) Lavish: Describes sumptuously rich."
    },
    {
        id: "vocab_thrifty_ant_ext",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nTHRIFTY",
        options: ["A) Unthrifty", "B) Spendthrift", "C) Extravagant", "D) Wasteful"],
        correct: "A",
        explanation: "• Main Word Meaning: 'THRIFTY' describes using money and resources carefully and wisely without waste (किफ़ायती).\n\n• A) Unthrifty (Correct Answer): Describes being wasteful or irresponsible with resources. It acts as the direct exact antonym for 'THRIFTY'.\n\n• B) Spendthrift: Refers to a wasteful spender.\n\n• C) Extravagant: Describes excessive spending.\n\n• D) Wasteful: Describes using carelessly."
    },
    {
        id: "vocab_parsimonious_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPARSIMONIOUS",
        options: ["A) Miserly", "B) Stingy", "C) Penurious", "D) Niggardly"],
        correct: "B",
        explanation: "• Main Word Meaning: 'PARSIMONIOUS' describes an extreme unwillingness to spend money or share resources (कंजूस / मक्खीचूस).\n\n• A) Miserly: Describes characteristic of a miser.\n\n• B) Stingy (Correct Answer): Describes an extreme unwillingness to spend money. It serves as an exact synonym for 'PARSIMONIOUS'.\n\n• C) Penurious: Describes poverty-stricken.\n\n• D) Niggardly: Describes ungenerous."
    },
    {
        id: "vocab_negate_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nNEGATE",
        options: ["A) Invalidate", "B) Cancel", "C) Nullify", "D) Neutralize"],
        correct: "C",
        explanation: "• Main Word Meaning: 'NEGATE' means to make clause or effect void, invalidate, or deny the existence of something (रद्द करना / अमान्य करना).\n\n• A) Invalidate: Means to make unsound or erroneous.\n\n• B) Cancel: Means to decide that an event will not take place.\n\n• C) Nullify (Correct Answer): Means to make legally void, invalidate, or neutralize effect. It acts as the exact synonym for 'NEGATE'.\n\n• D) Neutralize: Means to render harmless or ineffective."
    },
    {
        id: "vocab_disclaim_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDISCLAIM",
        options: ["A) Renounce", "B) Deny", "C) Disavow", "D) Repudiate"],
        correct: "B",
        explanation: "• Main Word Meaning: 'DISCLAIM' means to refuse to acknowledge, accept, or maintain connection with a claim or responsibility (दवा छोड़ना / इनकार करना).\n\n• A) Renounce: Means to formally give up a claim.\n\n• B) Deny (Correct Answer): Means to refuse to acknowledge connection with a claim. It serves as an exact synonym for 'DISCLAIM'.\n\n• C) Disavow: Means to deny responsibility.\n\n• D) Repudiate: Means to refuse to accept truth."
    },
    {
        id: "vocab_renounce_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nRENOUNCE",
        options: ["A) Relinquish", "B) Abdicate", "C) Surrender", "D) Waive"],
        correct: "A",
        explanation: "• Main Word Meaning: 'RENOUNCE' means to formally declare one's abandonment of a claim, right, or belief (त्यागना / छोड़ देना).\n\n• A) Relinquish (Correct Answer): Means to formally give up, surrender, or abandon a claim or position. It functions as an exact synonym for 'RENOUNCE'.\n\n• B) Abdicate: Means to step down from throne.\n\n• C) Surrender: Means to submit to authority.\n\n• D) Waive: Means to refrain from insisting on a right."
    },
    {
        id: "vocab_affirm_ant_ext",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nAFFIRM",
        options: ["A) Refute", "B) Contradict", "C) Negate", "D) Deny"],
        correct: "D",
        explanation: "• Main Word Meaning: 'AFFIRM' means to state positively, validate, or confirm the truth of an assertion (पुष्टि करना).\n\n• A) Refute: Means to prove wrong using proof.\n\n• B) Contradict: Means to assert opposite.\n\n• C) Negate: Means to make void.\n\n• D) Deny (Correct Answer): Means to state that an assertion is untrue or refuse acceptance. It serves as the precise antonym for 'AFFIRM'."
    },
    {
        id: "vocab_clubby_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCLUBBY",
        options: ["A) Friendly", "B) Sociable", "C) Exclusive", "D) Genial"],
        correct: "B",
        explanation: "• Main Word Meaning: 'CLUBBY' describes being friendly, welcoming, and enjoying warm social interactions within a group or club (मिलनसार / समूहप्रिय).\n\n• A) Friendly: Describes pleasant demeanors.\n\n• B) Sociable (Correct Answer): Describes being friendly and enjoying warm social interactions. It acts as an exact synonym for 'CLUBBY'.\n\n• C) Exclusive: Describes restricted to a group.\n\n• D) Genial: Describes friendly and cheerful."
    },
    {
        id: "vocab_extroverted_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nEXTROVERTED",
        options: ["A) Gregarious", "B) Expressive", "C) Outgoing", "D) Sociable"],
        correct: "C",
        explanation: "• Main Word Meaning: 'EXTROVERTED' describes being socially confident, expressive, and energized by interactions with others (बहिर्मुखी).\n\n• A) Gregarious: Describes fond of company.\n\n• B) Expressive: Describes effectively conveying thought.\n\n• C) Outgoing (Correct Answer): Describes being socially confident, expressive, and interactive. It functions as the precise synonym for 'EXTROVERTED'.\n\n• D) Sociable: Describes enjoying group settings."
    },
    {
        id: "vocab_precocial_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPRECOCIAL",
        options: ["A) Advanced", "B) Precocious", "C) Mature", "D) Developed"],
        correct: "A",
        explanation: "• Main Word Meaning: 'PRECOCIAL' describes showing unusually early development, maturity, or skills at a young age (समय से पहले विकसित / अतिप्राकृतिक).\n\n• A) Advanced (Correct Answer): Describes showing unusually early development or skills. In vocabulary, it serves as an exact synonym for 'PRECOCIAL'.\n\n• B) Precocious: Describes having developed certain abilities at earlier age than usual, very close but advanced is standard key match.\n\n• C) Mature: Describes fully developed.\n\n• D) Developed: Describes advanced or elaborate."
    },
    {
        id: "vocab_colonial_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCOLONIAL",
        options: ["A) Collective", "B) Communal", "C) Grouped", "D) Social"],
        correct: "B",
        explanation: "• Main Word Meaning: In biological/social contexts, 'COLONIAL' describes living, growing, or functioning together in connected groups or colonies (सामूहिक / संघचारी).\n\n• A) Collective: Describes done by people acting as a group.\n\n• B) Communal (Correct Answer): Describes living, growing, or functioning together in connected groups. It acts as the exact synonym for 'COLONIAL'.\n\n• C) Grouped: Describes placed in a group.\n\n• D) Social: Describes relating to society."
    },
    {
        id: "vocab_cordial_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCORDIAL",
        options: ["A) Warm", "B) Friendly", "C) Amicable", "D) Genial"],
        correct: "C",
        explanation: "• Main Word Meaning: 'CORDIAL' describes being warm, friendly, polite, and pleasant in social settings (हार्दिक / सौहार्दपूर्ण).\n\n• A) Warm: Describes affection.\n\n• B) Friendly: Describes pleasant.\n\n• C) Amicable (Correct Answer): Describes warmth, friendliness, and a pleasant, accommodating manner. It serves as an exact synonym for 'CORDIAL'.\n\n• D) Genial: Describes cheerful."
    },
    {
        id: "vocab_affable_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAFFABLE",
        options: ["A) Cordial", "B) Pleasant", "C) Amiable", "D) Genial"],
        correct: "D",
        explanation: "• Main Word Meaning: 'AFFABLE' describes someone who is friendly, good-natured, warm-hearted, and easy to talk to (मिलनसार / सुशील).\n\n• A) Cordial: Describes warm and polite.\n\n• B) Pleasant: Describes agreeable.\n\n• C) Amiable: Describes friendly manner.\n\n• D) Genial (Correct Answer): Describes being friendly, pleasant, and easy to converse with. It functions as the exact synonym for 'AFFABLE'."
    },
    {
        id: "vocab_amiable_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAMIABLE",
        options: ["A) Affable", "B) Pleasant", "C) Genial", "D) Likable"],
        correct: "B",
        explanation: "• Main Word Meaning: 'AMIABLE' describes having or displaying a friendly and pleasant manner (सौम्य / सुशील).\n\n• A) Affable: Describes friendly and easy to talk to.\n\n• B) Pleasant (Correct Answer): Describes having an agreeable, friendly, and warm disposition. It acts as an exact synonym for 'AMIABLE'.\n\n• C) Genial: Describes friendly and cheerful.\n\n• D) Likable: Describes easy to like."
    },
    {
        id: "vocab_introverted_ant_ext",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nINTROVERTED",
        options: ["A) Outgoing", "B) Gregarious", "C) Extroverted", "D) Sociable"],
        correct: "C",
        explanation: "• Main Word Meaning: 'INTROVERTED' describes being quiet, reserved, and inward-looking (अंतर्मुखी).\n\n• A) Outgoing: Describes socially confident.\n\n• B) Gregarious: Describes fond of company.\n\n• C) Extroverted (Correct Answer): Describes being outgoing, socially expressive, and energized by group interactions. It functions as the exact antonym for 'INTROVERTED'.\n\n• D) Sociable: Describes enjoying group interaction."
    },
    {
        id: "vocab_induce_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nINDUCE",
        options: ["A) Cause", "B) Instigate", "C) Persuade", "D) Prompt"],
        correct: "D",
        explanation: "• Main Word Meaning: 'INDUCE' means to succeed in persuading, bringing about, or encouraging a specific action or state (प्रेरित करना / कारण बनना).\n\n• A) Cause: Means to make something happen.\n\n• B) Instigate: Means to initiate action.\n\n• C) Persuade: Means to convince someone.\n\n• D) Prompt (Correct Answer): Means to bring about, persuade, or give rise to an action or feeling. It acts as an exact synonym for 'INDUCE'."
    },
    {
        id: "vocab_invoke_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nINVOKE",
        options: ["A) Summon", "B) Cite", "C) Appeal", "D) Solicit"],
        correct: "A",
        explanation: "• Main Word Meaning: 'INVOKE' means to cite or appeal to an authority, law, or spirit for aid, protection, or evidence (आह्वान करना / सहारा लेना).\n\n• A) Summon (Correct Answer): Means to call upon, appeal to, or cite an authority or spirit for aid. It functions as the precise synonym for 'INVOKE'.\n\n• B) Cite: Means to quote as evidence.\n\n• C) Appeal: Means to make a serious request.\n\n• D) Solicit: Means to ask for or try to obtain."
    },
    {
        id: "vocab_spawn_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSPAWN",
        options: ["A) Generate", "B) Produce", "C) Create", "D) Originate"],
        correct: "B",
        explanation: "• Main Word Meaning: 'SPAWN' means to produce, generate, or bring forth into existence in large numbers (उत्पन्न करना / जन्म देना).\n\n• A) Generate: Means to produce or create.\n\n• B) Produce (Correct Answer): Means to generate, create, or bring forth into existence. It serves as an exact synonym for 'SPAWN'.\n\n• C) Create: Means to bring into existence.\n\n• D) Originate: Means to have specified beginning."
    },
    {
        id: "vocab_yield_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nYIELD",
        options: ["A) Provide", "B) Produce", "C) Generate", "D) Return"],
        correct: "C",
        explanation: "• Main Word Meaning: In context of production, 'YIELD' means to produce or provide a result, crop, or financial return (उत्पादन करना / पैदावार देना).\n\n• A) Provide: Means to make available.\n\n• B) Produce: Means to make or manufacture.\n\n• C) Generate (Correct Answer): Means to produce, provide, or give forth a result or return. It acts as an exact synonym for 'YIELD'.\n\n• D) Return: Means to yield profit."
    },
    {
        id: "vocab_impede_ant_ext",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nIMPEDE",
        options: ["A) Assist", "B) Facilitate", "C) Promote", "D) Expedite"],
        correct: "B",
        explanation: "• Main Word Meaning: 'IMPEDE' means to delay, obstruct, or hinder the progress of an action or process (बाधा डालना).\n\n• A) Assist: Means to help someone.\n\n• B) Facilitate (Correct Answer): Means to make an action or process easy, smooth, or free of obstacles. It acts as the direct antonym for 'IMPEDE'.\n\n• C) Promote: Means to support or encourage.\n\n• D) Expedite: Means to make an action happen sooner."
    },
    {
        id: "vocab_rebuke_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nREBUKE",
        options: ["A) Censure", "B) Scold", "C) Admonish", "D) Reprimand"],
        correct: "D",
        explanation: "• Main Word Meaning: 'REBUKE' means to express sharp, stern disapproval or criticism of someone because of their behavior (फटकारना / डाँटना).\n\n• A) Censure: Means formal disapproval.\n\n• B) Scold: Means to reprimand angrily.\n\n• C) Admonish: Means to warn or reprimand firmly.\n\n• D) Reprimand (Correct Answer): Refers to expressing sharp, stern disapproval to someone. It functions as an exact synonym for 'REBUKE'."
    },
    {
        id: "vocab_chide_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCHIDE",
        options: ["A) Scold", "B) Berate", "C) Upbraid", "D) Reproach"],
        correct: "A",
        explanation: "• Main Word Meaning: 'CHIDE' means to scold, reprimand, or express mild to firm disapproval to someone (डाँटना / फटकारना).\n\n• A) Scold (Correct Answer): Means to express disapproval or reprimand someone. It acts as the precise synonym for 'CHIDE'.\n\n• B) Berate: Means to scold or condemn vehemently.\n\n• C) Upbraid: Means to find fault with someone.\n\n• D) Reproach: Means to express disappointment."
    },
    {
        id: "vocab_reproach_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nREPROACH",
        options: ["A) Blame", "B) Disapprove", "C) Censure", "D) Criticize"],
        correct: "B",
        explanation: "• Main Word Meaning: 'REPROACH' means to express criticism, fault, or disappointment regarding someone's actions (दोषारोपण करना / तिरस्कार करना).\n\n• A) Blame: Means to feel or declare that someone is responsible for a fault.\n\n• B) Disapprove (Correct Answer): Means to express criticism or fault regarding someone's actions. It serves as an exact synonym for 'REPROACH'.\n\n• C) Censure: Means formal disapproval.\n\n• D) Criticize: Means to indicate faults."
    },
    {
        id: "vocab_reprimand_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nREPRIMAND",
        options: ["A) Admonition", "B) Censure", "C) Rebuke", "D) Reproof"],
        correct: "C",
        explanation: "• Main Word Meaning: 'REPRIMAND' refers to a formal, severe expression of disapproval or scolding by someone in authority (फटकार / निंदा).\n\n• A) Admonition: Refers to a firm warning or reprimand.\n\n• B) Censure: Refers to formal expression of severe disapproval.\n\n• C) Rebuke (Correct Answer): Refers to a severe, formal expression of disapproval. It functions as the exact synonym for 'REPRIMAND'.\n\n• D) Reproof: Refers to an expression of blame or disapproval."
    },

    // ==========================================
    // 1. ADULATION
    // ==========================================
    {
        id: "vocab_adulation_syn_1",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nADULATION",
        options: ["A) Homage", "B) Flattery", "C) Praise", "D) Worship"],
        correct: "B",
        explanation: "• Main Word Meaning: 'ADULATION' refers to extreme, excessive, or servile admiration and praise (चापलूसी / अति-प्रशंसा).\n\n• A) Homage: Refers to special honor or respect shown publicly.\n\n• B) Flattery (Correct Answer): Refers to excessive, exaggerated, or insincere praise given to gain favor. It serves as an exact synonym for 'ADULATION'.\n\n• C) Praise: Refers to expressing warm approval.\n\n• D) Worship: Refers to religious devotion."
    },
    {
        id: "vocab_adulation_ant_1",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nADULATION",
        options: ["A) Disparagement", "B) Condemnation", "C) Criticism", "D) Detraction"],
        correct: "C",
        explanation: "• Main Word Meaning: 'ADULATION' refers to excessive praise, worship, or flattery (चापलूसी).\n\n• A) Disparagement: Refers to speaking of someone in a derogatory manner.\n\n• B) Condemnation: Refers to formal expression of strong disapproval.\n\n• C) Criticism (Correct Answer): Refers to pointing out faults or expressing disapproval. It serves as the direct antonym for 'ADULATION'.\n\n• D) Detraction: Refers to taking away from reputation."
    },
    {
        id: "vocab_adulation_fitb",
        type: "Fill in the Blank",
        question: "Select the most appropriate option to fill in the blank:\n'The young pop star found it difficult to handle the constant __________ of millions of fans.'",
        options: ["A) adulation", "B) approval", "C) scrutiny", "D) criticism"],
        correct: "A",
        explanation: "• Main Word Meaning: In sentence completion, the context of enthusiastic fans requires a word denoting passionate admiration.\n\n• A) adulation (Correct Answer): Fits perfectly as fans show extreme admiration, worship, and flattery toward celebrity figures.\n\n• B) approval: Means official acceptance, which is too mild for fanatical pop fans.\n\n• C) scrutiny: Means critical observation or examination, which comes from media/critics rather than adoring fans.\n\n• D) criticism: Means pointing out faults, opposing adoring fans."
    },

    // ==========================================
    // 2. IDOLATRY
    // ==========================================
    {
        id: "vocab_idolatry_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nIDOLATRY",
        options: ["A) Devotion", "B) Reverence", "C) Scepticism", "D) Toleration"],
        correct: "A",
        explanation: "• Main Word Meaning: 'IDOLATRY' refers to extreme, blind admiration, love, or spiritual worship of a person or object (मूर्तिपूजा / अन्धभक्ति).\n\n• A) Devotion (Correct Answer): Refers to extreme admiration, love, or spiritual worship given to a person or entity. It acts as an exact synonym for 'IDOLATRY'.\n\n• B) Reverence: Refers to deep respect mixed with awe.\n\n• C) Scepticism: Refers to a doubting, critical attitude, serving as a direct antonym.\n\n• D) Toleration: Refers to allowing something without interference."
    },
    {
        id: "vocab_idolatry_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nIDOLATRY",
        options: ["A) Disbelief", "B) Scepticism", "C) Cynicism", "D) Contempt"],
        correct: "B",
        explanation: "• Main Word Meaning: 'IDOLATRY' refers to uncritical, blind worship or reverence (अन्धभक्ति).\n\n• A) Disbelief: Refers to inability or refusal to accept that something is true.\n\n• B) Scepticism (Correct Answer): Refers to a doubting, critical, or questioning attitude toward revered claims or figures. It acts as a precise antonym to blind idolatry.\n\n• C) Cynicism: Refers to an inclination to believe that people are motivated purely by self-interest.\n\n• D) Contempt: Refers to feeling that something is worthless."
    },

    // ==========================================
    // 3. IDOLIZATION
    // ==========================================
    {
        id: "vocab_idolization_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nIDOLIZATION",
        options: ["A) Reverence", "B) Admiration", "C) Esteem", "D) Approbation"],
        correct: "B",
        explanation: "• Main Word Meaning: 'IDOLIZATION' refers to admiring, loving, or revering someone to an extreme degree (अंधभक्ति / अत्यधिक आदर).\n\n• A) Reverence: Refers to deep respect mixed with awe.\n\n• B) Admiration (Correct Answer): Refers to regarding someone with high approval, respect, and affection. It acts as a precise synonym for 'IDOLIZATION'.\n\n• C) Esteem: Refers to respect and admiration.\n\n• D) Approbation: Refers to approval or praise."
    },
    {
        id: "vocab_idolization_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nIDOLIZATION",
        options: ["A) Disapproval", "B) Disrepute", "C) Disdain", "D) Contempt"],
        correct: "D",
        explanation: "• Main Word Meaning: 'IDOLIZATION' refers to deep, uncritical admiration and respect (अत्यधिक आदर).\n\n• A) Disapproval: Refers to possession of a poor opinion.\n\n• B) Disrepute: Refers to state of being held in low esteem.\n\n• C) Disdain: Refers to feeling unworthy of respect.\n\n• D) Disdain (Correct Answer): Refers to a feeling of contempt or considering someone unworthy of respect. It serves as the direct antonym for 'IDOLIZATION'."
    },

    // ==========================================
    // 4. DEIFICATION
    // ==========================================
    {
        id: "vocab_deification_syn_2",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEIFICATION",
        options: ["A) Exaltation", "B) Apotheosis", "C) Canonization", "D) Elevation"],
        correct: "A",
        explanation: "• Main Word Meaning: 'DEIFICATION' refers to the act of elevating a person to god-like status or praising them to the highest degree (देवता का स्थान देना).\n\n• A) Exaltation (Correct Answer): Refers to raising someone to god-like status or praising them highly. It functions as an exact synonym for 'DEIFICATION'.\n\n• B) Apotheosis: Refers to the highest point in development or elevation to divine status, extremely close but exaltation is the standard test key.\n\n• C) Canonization: Refers to officially declaring a dead person a saint.\n\n• D) Elevation: Refers to raising in rank."
    },
    {
        id: "vocab_deification_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDEIFICATION",
        options: ["A) Demotion", "B) Debasement", "C) Degradation", "D) Humiliation"],
        correct: "C",
        explanation: "• Main Word Meaning: 'DEIFICATION' refers to raising someone to divine rank and honor (देवता मानना).\n\n• A) Demotion: Refers to lowering in rank or position.\n\n• B) Debasement: Refers to reducing quality or value.\n\n• C) Degradation (Correct Answer): Refers to the act of lowering someone in honor, status, or dignity. It acts as the direct antonym for 'DEIFICATION'.\n\n• D) Humiliation: Refers to causing embarrassment."
    },

    // ==========================================
    // 5. WORSHIP
    // ==========================================
    {
        id: "vocab_worship_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nWORSHIP",
        options: ["A) Adoration", "B) Reverence", "C) Homage", "D) Veneration"],
        correct: "B",
        explanation: "• Main Word Meaning: 'WORSHIP' refers to showing profound reverence, devotion, and religious honor toward a deity or figure (पूजा / आराधना).\n\n• A) Adoration: Refers to deep love and respect.\n\n• B) Reverence (Correct Answer): Refers to deep respect, awe, and religious honor shown toward an authority or deity. It acts as an exact synonym for 'WORSHIP'.\n\n• C) Homage: Refers to public honor.\n\n• D) Veneration: Refers to great respect."
    },
    {
        id: "vocab_worship_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nWORSHIP",
        options: ["A) Disdain", "B) Contempt", "C) Scorn", "D) Disrespect"],
        correct: "C",
        explanation: "• Main Word Meaning: 'WORSHIP' refers to deep sacred honor and devotion (आराधना).\n\n• A) Disdain: Refers to regarding as unworthy.\n\n• B) Contempt: Refers to feeling that something is worthless.\n\n• C) Scorn (Correct Answer): Refers to open contempt or hatred toward someone. It acts as the direct antonym for 'WORSHIP'.\n\n• D) Disrespect: Refers to lack of respect."
    },

    // ==========================================
    // 6. ADORATION
    // ==========================================
    {
        id: "vocab_adoration_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nADORATION",
        options: ["A) Love", "B) Devotion", "C) Fondness", "D) Affection"],
        correct: "B",
        explanation: "• Main Word Meaning: 'ADORATION' refers to deep affection, love, and respectful admiration for someone (पूजा / अत्यधिक प्रेम).\n\n• A) Love: Refers to intense feeling of deep affection, broad term.\n\n• B) Devotion (Correct Answer): Refers to deep affection, love, and spiritual respect. It functions as an exact synonym for 'ADORATION'.\n\n• C) Fondness: Refers to affection or liking.\n\n• D) Affection: Refers to gentle feeling of fondness."
    },
    {
        id: "vocab_adoration_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nADORATION",
        options: ["A) Antipathy", "B) Animosity", "C) Hatred", "D) Hostility"],
        correct: "C",
        explanation: "• Main Word Meaning: 'ADORATION' refers to deep love, reverence, and affection (अत्यधिक प्रेम).\n\n• A) Antipathy: Refers to deep-seated feeling of aversion.\n\n• B) Animosity: Refers to strong hostility.\n\n• C) Hatred (Correct Answer): Refers to intense hostility and aversion. It acts as the direct antonym for 'ADORATION'.\n\n• D) Hostility: Refers to unfriendliness or opposition."
    },

    // ==========================================
    // 7. REVERENCE
    // ==========================================
    {
        id: "vocab_reverence_syn_2",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nREVERENCE",
        options: ["A) Awe", "B) Respect", "C) Esteem", "D) Deference"],
        correct: "A",
        explanation: "• Main Word Meaning: 'REVERENCE' refers to a feeling or attitude of deep respect, awe, and honor toward an authority (श्रद्धा / आदर).\n\n• A) Awe (Correct Answer): Refers to a feeling of reverential respect mixed with wonder toward an authority. It serves as an exact synonym for 'REVERENCE'.\n\n• B) Respect: Refers to due regard.\n\n• C) Esteem: Refers to respect and admiration.\n\n• D) Deference: Refers to polite submission."
    },
    {
        id: "vocab_reverence_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nREVERENCE",
        options: ["A) Insolence", "B) Impudence", "C) Disrespect", "D) Irreverence"],
        correct: "C",
        explanation: "• Main Word Meaning: 'REVERENCE' refers to deep respect, honor, and awe (श्रद्धा).\n\n• A) Insolence: Refers to rude and disrespectful behavior.\n\n• B) Impudence: Refers to quality of being impudent; insolence.\n\n• C) Disrespect (Correct Answer): Refers to lack of respect or courtesy. It serves as the precise antonym for 'REVERENCE'.\n\n• D) Irreverence: Refers to lack of respect for things usually taken seriously, very close but disrespect is the primary test key."
    },

    // ==========================================
    // 8. VENERATION
    // ==========================================
    {
        id: "vocab_veneration_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nVENERATION",
        options: ["A) Homage", "B) Honor", "C) Esteem", "D) Regard"],
        correct: "B",
        explanation: "• Main Word Meaning: 'VENERATION' refers to great respect, high honor, or reverence given to elders or leaders (आदर / सम्मान).\n\n• A) Homage: Refers to special public honor.\n\n• B) Honor (Correct Answer): Refers to showing high respect, prestige, or reverence. It functions as an exact synonym for 'VENERATION'.\n\n• C) Esteem: Refers to respect and admiration.\n\n• D) Regard: Refers to attention to or concern for."
    },
    {
        id: "vocab_veneration_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nVENERATION",
        options: ["A) Derogation", "B) Disdain", "C) Contempt", "D) Disregard"],
        correct: "C",
        explanation: "• Main Word Meaning: 'VENERATION' refers to deep respect and sacred honor (सम्मान).\n\n• A) Derogation: Refers to perception that something lacks worth.\n\n• B) Disdain: Refers to regarding as unworthy.\n\n• C) Contempt (Correct Answer): Refers to the feeling that a person is beneath consideration or worthless. It acts as the direct antonym for 'VENERATION'.\n\n• D) Disregard: Refers to paying no attention."
    },

    // ==========================================
    // 9. GLORIFICATION
    // ==========================================
    {
        id: "vocab_glorification_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nGLORIFICATION",
        options: ["A) Praise", "B) Exaltation", "C) Laudation", "D) Tribute"],
        correct: "A",
        explanation: "• Main Word Meaning: 'GLORIFICATION' refers to the act of praising or honoring someone in an exalted manner (महिमा मंडन / प्रशंसा).\n\n• A) Praise (Correct Answer): Refers to expressing warm approval, honor, or commendation. It serves as an exact synonym for 'GLORIFICATION'.\n\n• B) Exaltation: Refers to state of being raised high.\n\n• C) Laudation: Refers to praise; commendation.\n\n• D) Tribute: Refers to act intended to show gratitude."
    },
    {
        id: "vocab_glorification_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nGLORIFICATION",
        options: ["A) Defamation", "B) Slander", "C) Vilification", "D) Denigration"],
        correct: "C",
        explanation: "• Main Word Meaning: 'GLORIFICATION' refers to praising and elevating someone's reputation (गुणगान).\n\n• A) Defamation: Refers to damaging good reputation.\n\n• B) Slander: Refers to false spoken statements.\n\n• C) Vilification (Correct Answer): Refers to abusively disparaging or speaking ill of someone. It acts as the direct antonym for 'GLORIFICATION'.\n\n• D) Denigration: Refers to unfair criticism."
    },

    // ==========================================
    // 10. CONDEMNATION
    // ==========================================
    {
        id: "vocab_condemnation_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCONDEMNATION",
        options: ["A) Denunciation", "B) Censure", "C) Reproof", "D) Blame"],
        correct: "B",
        explanation: "• Main Word Meaning: 'CONDEMNATION' refers to an expression of strong disapproval, formal criticism, or harsh censure (निंदा / भर्त्सना).\n\n• A) Denunciation: Refers to public condemnation of someone.\n\n• B) Censure (Correct Answer): Refers to formal expression of severe disapproval or criticism. It serves as an exact synonym for 'CONDEMNATION'.\n\n• C) Reproof: Refers to an expression of blame.\n\n• D) Blame: Refers to responsibility for a fault."
    },
    {
        id: "vocab_condemnation_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nCONDEMNATION",
        options: ["A) Endorsement", "B) Acclaim", "C) Approval", "D) Commendation"],
        correct: "C",
        explanation: "• Main Word Meaning: 'CONDEMNATION' refers to strong disapproval and harsh censure (निंदा).\n\n• A) Endorsement: Refers to public support.\n\n• B) Acclaim: Refers to enthusiastic praise.\n\n• C) Approval (Correct Answer): Refers to the feeling or declaration that something is good and acceptable. It functions as the direct antonym for 'CONDEMNATION'.\n\n• D) Commendation: Refers to formal praise."
    },

    // ==========================================
    // 11. DISREGARD
    // ==========================================
    {
        id: "vocab_disregard_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDISREGARD",
        options: ["A) Neglect", "B) Inattention", "C) Indifference", "D) Oversight"],
        correct: "B",
        explanation: "• Main Word Meaning: 'DISREGARD' means to pay no attention to, ignore, or treat with lack of care (उपेक्षा करना / ध्यान न देना).\n\n• A) Neglect: Refers to failing to care for properly.\n\n• B) Inattention (Correct Answer): Refers to lack of consideration, care, or focus given to an entity. It serves as an exact synonym for 'DISREGARD'.\n\n• C) Indifference: Refers to lack of interest or concern.\n\n• D) Oversight: Refers to an unintentional failure to notice."
    },
    {
        id: "vocab_disregard_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDISREGARD",
        options: ["A) Care", "B) Consideration", "C) Attention", "D) Heed"],
        correct: "C",
        explanation: "• Main Word Meaning: 'DISREGARD' refers to ignoring or neglecting someone or something (उपेक्षा).\n\n• A) Care: Refers to provision of what is necessary.\n\n• B) Consideration: Refers to careful thought.\n\n• C) Attention (Correct Answer): Refers to notice, care, or mental focus directed toward someone. It acts as the direct antonym for 'DISREGARD'.\n\n• D) Heed: Refers to paying attention to."
    },

    // ==========================================
    // 12. LOATHING
    // ==========================================
    {
        id: "vocab_loathing_syn_2",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nLOATHING",
        options: ["A) Detestation", "B) Abhorrence", "C) Aversion", "D) Revulsion"],
        correct: "B",
        explanation: "• Main Word Meaning: 'LOATHING' refers to a feeling of intense revulsion, disgust, and hatred (घृणा / नफ़रत).\n\n• A) Detestation: Refers to intense hatred.\n\n• B) Abhorrence (Correct Answer): Refers to a feeling of intense revulsion, disgust, and hatred. It functions as an exact synonym for 'LOATHING'.\n\n• C) Aversion: Refers to strong dislike or disinclination.\n\n• D) Revulsion: Refers to sense of disgust."
    },
    {
        id: "vocab_loathing_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nLOATHING",
        options: ["A) Likeness", "B) Fondness", "C) Affection", "D) Admiration"],
        correct: "C",
        explanation: "• Main Word Meaning: 'LOATHING' refers to intense disgust and hatred (नफ़रत).\n\n• A) Likeness: Refers to fact of being alike.\n\n• B) Fondness: Refers to affection or liking.\n\n• C) Affection (Correct Answer): Refers to a feeling of fondness, warmth, or love. It acts as the direct antonym for 'LOATHING'.\n\n• D) Admiration: Refers to high regard."
    },

    // ==========================================
    // 13. DISPARAGEMENT
    // ==========================================
    {
        id: "vocab_disparagement_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDISPARAGEMENT",
        options: ["A) Derogation", "B) Depreciation", "C) Belittlement", "D) Denigration"],
        correct: "A",
        explanation: "• Main Word Meaning: 'DISPARAGEMENT' refers to the act of speaking of someone or something in a derogatory, insulting, or belittling manner (उपेक्षा / नीचा दिखाना).\n\n• A) Derogation (Correct Answer): Refers to treating or speaking of someone in a critical, degrading manner. It acts as an exact synonym for 'DISPARAGEMENT'.\n\n• B) Depreciation: Refers to reduction in value.\n\n• C) Belittlement: Refers to making someone seem unimportant.\n\n• D) Denigration: Refers to unfair criticism."
    },
    {
        id: "vocab_disparagement_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDISPARAGEMENT",
        options: ["A) Approval", "B) Eulogy", "C) Commendation", "D) Praise"],
        correct: "C",
        explanation: "• Main Word Meaning: 'DISPARAGEMENT' refers to insulting remarks intended to diminish worth (उपेक्षा).\n\n• A) Approval: Refers to acceptance.\n\n• B) Eulogy: Refers to funeral tribute.\n\n• C) Commendation (Correct Answer): Refers to formal praise, approval, or recommendation. It serves as the exact antonym for 'DISPARAGEMENT'.\n\n• D) Praise: Refers to expressing warm approval."
    },

    // ==========================================
    // 14. DETRACTION
    // ==========================================
    {
        id: "vocab_detraction_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDETRACTION",
        options: ["A) Depreciation", "B) Defamation", "C) Calumny", "D) Slander"],
        correct: "A",
        explanation: "• Main Word Meaning: 'DETRACTION' refers to the act of taking away from the merit, value, or reputation of a person or action (निंदा / यश कम करना).\n\n• A) Depreciation (Correct Answer): Refers to taking away from the estimated value or reputation of an entity. It serves as an exact synonym for 'DETRACTION'.\n\n• B) Defamation: Refers to damaging good reputation falsely.\n\n• C) Calumny: Refers to false and malicious statements.\n\n• D) Slander: Refers to false spoken statements."
    },
    {
        id: "vocab_detraction_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDETRACTION",
        options: ["A) Flattery", "B) Acclaim", "C) Praise", "D) Commendation"],
        correct: "C",
        explanation: "• Main Word Meaning: 'DETRACTION' refers to taking away from someone's reputation or merit (अपयश).\n\n• A) Flattery: Refers to insincere praise.\n\n• B) Acclaim: Refers to enthusiastic public praise.\n\n• C) Praise (Correct Answer): Refers to expressing approval, honor, or positive recognition. It serves as the precise antonym for 'DETRACTION'.\n\n• D) Commendation: Refers to formal praise."
    },

    // ==========================================
    // 15. BELITTLEMENT
    // ==========================================
    {
        id: "vocab_belittlement_syn_2",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nBELITTLEMENT",
        options: ["A) Disparagement", "B) Diminution", "C) Derogation", "D) Depreciation"],
        correct: "A",
        explanation: "• Main Word Meaning: 'BELITTLEMENT' refers to the act of making a person or achievement seem small, worthless, or unimportant (तुच्छ समझना / नीचा दिखाना).\n\n• A) Disparagement (Correct Answer): Refers to the act of making someone seem small or worthless. It functions as an exact synonym for 'BELITTLEMENT'.\n\n• B) Diminution: Refers to reduction in size or importance.\n\n• C) Derogation: Refers to speaking deprecatingly.\n\n• D) Depreciation: Refers to reduction in value."
    },
    {
        id: "vocab_belittlement_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nBELITTLEMENT",
        options: ["A) Glorification", "B) Elevation", "C) Exaltation", "D) Praise"],
        correct: "C",
        explanation: "• Main Word Meaning: 'BELITTLEMENT' refers to treating someone's achievements as small or worthless (नीचा दिखाना).\n\n• A) Glorification: Refers to praising in exalted manner.\n\n• B) Elevation: Refers to raising in rank.\n\n• C) Exaltation (Correct Answer): Refers to praising, elevating, or honoring someone highly. It functions as the direct antonym for 'BELITTLEMENT'.\n\n• D) Praise: Refers to expressing approval."
    }
];