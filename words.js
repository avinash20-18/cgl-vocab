const questions = [
    {
        id: "vocab_detestable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDETESTABLE",
        options: ["A) Honorable", "B) Commendable", "C) Despicable", "D) Decent"],
        correct: "C",
        explanation: "• A) Honorable: Refers to an individual, action, or principle that brings or deserves high respect, moral integrity, and public distinction. In the context of the question, this word carries a strongly positive moral connotation, which directly contradicts the target word 'DETESTABLE' that denotes something worthy of intense hatred or disgust.\n\n• B) Commendable: Describes something that is highly praiseworthy, admirable, or worthy of formal approval and reward. While it is a positive quality, it stands in complete opposition to 'DETESTABLE', which represents an action or trait that provokes immediate revulsion and harsh condemnation rather than praise.\n\n• C) Despicable (Correct Answer): Refers to someone or something that is deserving of intense hatred, contempt, and moral revulsion. It serves as the precise, high-level synonym for 'DETESTABLE', as both terms describe actions, behaviors, or entities that trigger severe moral outrage and loathing.\n\n• D) Decent: Denotes conforming to recognized standards of propriety, morality, good taste, or respectability. While it represents an acceptable moral state, it fails to match the intense negative tone required for 'DETESTABLE' and instead functions as a mild contrasting term."
    },
    {
        id: "vocab_louche_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nLOUCHE",
        options: ["A) Ethical", "B) Disreputable", "C) Reputable", "D) Admirable"],
        correct: "B",
        explanation: "• A) Ethical: Pertains to conduct that strictly adheres to professional or moral principles of right and wrong. It represents a commendable quality, directly opposing the untrustworthy and morally questionable nature of 'LOUCHE'.\n\n• B) Disreputable (Correct Answer): Refers to having a bad reputation, being shady, or lacking respectability in society. 'LOUCHE' specifically describes a character, place, or action that is morally suspicious, shady, or improper, making 'Disreputable' its exact synonym.\n\n• C) Reputable: Describes an individual or entity that is widely held in high esteem and trusted by the public. This acts as the direct, exact antonym to 'LOUCHE'.\n\n• D) Admirable: Denotes qualities that inspire approval, high regard, or affection. It is contextually opposite to a term describing shady or dubious behavior."
    },
    {
        id: "vocab_ignominious_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nIGNOMINIOUS",
        options: ["A) Triumphant", "B) Shameful", "C) Honorable", "D) Transparent"],
        correct: "C",
        explanation: "• A) Triumphant: Means experiencing or celebrating a significant victory or success. While a defeat can be ignominious, 'triumphant' focuses on victory rather than moral standing or social honor, making it less precise as a direct antonym.\n\n• B) Shameful: Refers to bringing dishonor, guilt, or public disgrace upon oneself. Because 'IGNOMINIOUS' means deserving or causing public disgrace, 'Shameful' functions as its synonym rather than its antonym.\n\n• C) Honorable (Correct Answer): Refers to possessing or bringing high moral respect, integrity, and prestige. Since 'IGNOMINIOUS' describes disgraceful and humiliating actions, 'Honorable' serves as its precise, direct antonym.\n\n• D) Transparent: Describes something that is easy to perceive, clear, or honest in communication. It has no logical connection to social honor, public humiliation, or moral reputation."
    },
    {
        id: "vocab_earthly_fitb",
        type: "Fill in the Blank",
        question: "Select the most appropriate option to fill in the blank:\n'His earthly desires often distracted him from __________ pursuits.'",
        options: ["A) louche", "B) ignominious", "C) spiritual", "D) despicable"],
        correct: "C",
        explanation: "• A) louche: Refers to disreputable or shady habits. Inserting 'louche' here would mean physical desires distracted him from shady pursuits, which destroys the sentence's intended philosophical contrast between worldly and noble ideas.\n\n• B) ignominious: Refers to disgraceful or humiliating outcomes. This fails to establish the classic conceptual duality required between physical/material worldly desires and higher soul-driven pursuits.\n\n• C) spiritual (Correct Answer): Pertains to the human spirit, soul, or sacred matters as opposed to physical or material things. It provides the exact thematic contrast needed against 'earthly' (worldly/material) desires.\n\n• D) despicable: Describes detestable or hateful actions. It creates an illogical context because worldly desires would not distract someone from pursuing detestable things."
    },
    {
        id: "vocab_thief_error",
        type: "Spotting the Error",
        question: "Identify the segment which contains a vocabulary mismatch/error:\n'The thief's (A) / commendable actions (B) / made the community (C) / lose trust in him. (D)'",
        options: ["A) Segment A", "B) Segment B", "C) Segment C", "D) Segment D"],
        correct: "B",
        explanation: "• A) Segment A: 'The thief's' properly sets up the subject in the possessive noun form, correctly indicating ownership of actions.\n\n• B) Segment B (Correct Answer): Contains a clear vocabulary mismatch. 'Commendable' means praiseworthy and admirable. A community loses trust due to 'despicable', 'louche', or 'dishonorable' actions, not commendable ones. The adjective contradicts the outcome.\n\n• C) Segment C: 'made the community' is grammatically sound, correctly functioning as the causative verb phrase following the noun phrase.\n\n• D) Segment D: 'lose trust in him' provides the logical result of a thief's negative actions, making the segment grammatically and contextually correct."
    },
    {
        id: "vocab_set1_1",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nEMBELLISH",
        options: ["A) Deface", "B) Blemish", "C) Caparison", "D) Belittle"],
        correct: "C",
        explanation: "• A) Deface: Means to intentionally spoil, mar, or damage the visible appearance or surface of an object. This acts as a direct antonym to decoration or enhancement.\n\n• B) Blemish: Refers to a flaw, stain, or defect that spoils the perfection or appearance of something. It is opposite in function to beautifying or embellishing.\n\n• C) Caparison (Correct Answer): Means to deck out in rich, ornamental attire or to decorate sumptuously. In high-level literary vocabulary, it serves as an exact synonym for 'EMBELLISH'.\n\n• D) Belittle: Refers to dismissing someone or something as unimportant or small. It addresses conceptual value rather than visual decoration."
    },
    {
        id: "vocab_set1_2",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nEMBELLISH",
        options: ["A) Deck", "B) Adorn", "C) Ornament", "D) Deface"],
        correct: "D",
        explanation: "• A) Deck: Means to decorate or furnish with adornments, serving as an exact synonym of 'EMBELLISH'.\n\n• B) Adorn: Means to make more beautiful or attractive by adding decorative elements, functioning as a direct synonym.\n\n• C) Ornament: Refers to enhancing appearance by adding decorative items, serving as another direct synonym.\n\n• D) Deface (Correct Answer): Means to damage, disfigure, or spoil the external appearance of something. Since 'EMBELLISH' means to decorate and beautify, 'Deface' acts as its exact antonym."
    },
    {
        id: "vocab_set1_3",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPRODIGAL",
        options: ["A) Frugal", "B) Profligate", "C) Economical", "D) Parsimonious"],
        correct: "B",
        explanation: "• A) Frugal: Describes a person who is extremely careful, modest, and economical with money and resources, making it a direct antonym of prodigal spending.\n\n• B) Profligate (Correct Answer): Refers to an individual who is recklessly extravagant or wasteful in financial and material resources. It serves as the precise synonym for 'PRODIGAL'.\n\n• C) Economical: Refers to practicing careful management to avoid waste and get maximum value, directly opposing squandering.\n\n• D) Parsimonious: Describes someone who is excessively unwilling to spend money; miserly. This represents the extreme opposite of prodigality."
    },
    {
        id: "vocab_set1_4",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nPRODIGAL",
        options: ["A) Lavish", "B) Extravagant", "C) Parsimonious", "D) Imprudent"],
        correct: "C",
        explanation: "• A) Lavish: Means sumptuously rich, elaborate, or spending without restraint, functioning as a strong synonym for PRODIGAL.\n\n• B) Extravagant: Denotes spending money or using resources far beyond what is necessary, serving as a direct synonym.\n\n• C) Parsimonious (Correct Answer): Describes an extreme reluctance to spend even small amounts of money; extremely stingy. It serves as the exact antonym for the recklessly wasteful 'PRODIGAL'.\n\n• D) Imprudent: Means lacking care or thought for future consequences. While it describes reckless behavior, it is not a direct financial antonym like parsimonious."
    },
    {
        id: "vocab_set1_5",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nREPUDIATE",
        options: ["A) Espouse", "B) Disavow", "C) Corroborate", "D) Affirm"],
        correct: "B",
        explanation: "• A) Espouse: Means to adopt, support, or embrace a cause, belief, or opinion. This is the exact conceptual antonym of rejecting or repudiating something.\n\n• B) Disavow (Correct Answer): Means to deny any responsibility, connection, or support for something. It stands as an exact, high-level synonym for 'REPUDIATE'.\n\n• C) Corroborate: Refers to confirming or giving supporting evidence for a statement or theory, opposing the act of rejection.\n\n• D) Affirm: Means to state emphatically, validate, or publicly confirm a fact, acting as an antonym to repudiation."
    },
    {
        id: "vocab_set1_6",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nREPUDIATE",
        options: ["A) Recant", "B) Abdicate", "C) Corroborate", "D) Negate"],
        correct: "C",
        explanation: "• A) Recant: Means to publicly withdraw or take back a former statement or belief, aligning closely with the spirit of repudiation.\n\n• B) Abdicate: Means to formally give up a position of power, throne, or duty, sharing the sense of abandonment rather than support.\n\n• C) Corroborate (Correct Answer): Means to support, validate, or confirm an assertion with concrete proof. Because 'REPUDIATE' means to reject or deny validity, 'Corroborate' acts as its direct antonym.\n\n• D) Negate: Means to render something null, void, or ineffective, which functions similarly to repudiation."
    },
    {
        id: "vocab_set1_7",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSQUANDERER",
        options: ["A) Niggardly", "B) Thrifty", "C) Economical", "D) Spendthrift"],
        correct: "D",
        explanation: "• A) Niggardly: Describes an adjective meaning ungenerous or stingy, which is opposite to the character of someone who wastes money.\n\n• B) Thrifty: Describes someone who manages money and resources with wisdom and care, acting as an antonym.\n\n• C) Economical: Refers to practicing prudence and avoiding unnecessary expense, direct opposite of squandering.\n\n• D) Spendthrift (Correct Answer): Refers to a person who wastes money in an extravagant, irresponsible manner. It serves as the exact noun synonym for a 'SQUANDERER'."
    },
    {
        id: "vocab_set1_8",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPENURIOUS",
        options: ["A) Profuse", "B) Destitute", "C) Extravagant", "D) Lavish"],
        correct: "B",
        explanation: "• A) Profuse: Describes something offered or available in extravagant abundance, directly opposing poverty or stinginess.\n\n• B) Destitute (Correct Answer): Refers to being extremely poor, lacking the basic necessities of life. 'PENURIOUS' primary definition describes extreme poverty and destitution, making 'Destitute' its proper synonym.\n\n• C) Extravagant: Refers to spending money excessively without restraint, acting as a direct antonym.\n\n• D) Lavish: Denotes spending or giving in huge, luxurious quantities, opposite to penurious living."
    },
    {
        id: "vocab_set1_9",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nBELITTLE",
        options: ["A) Understate", "B) Amplify", "C) Disparage", "D) Blemish"],
        correct: "B",
        explanation: "• A) Understate: Means to present or describe something as smaller or less important than it really is, serving as a contextual synonym.\n\n• B) Amplify (Correct Answer): Means to increase the strength, importance, size, or value of something. Since 'BELITTLE' means to make something seem small and insignificant, 'Amplify' serves as its precise antonym.\n\n• C) Disparage: Means to regard or represent as being of little worth, acting as a direct synonym for belittling.\n\n• D) Blemish: Means to spoil the perfection or appearance of something, which does not mean increasing value."
    },
    {
        id: "vocab_set1_10",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nABDICATE",
        options: ["A) Adopt", "B) Renounce", "C) Avow", "D) Espouse"],
        correct: "B",
        explanation: "• A) Adopt: Means to formally take up, choose, or follow a course of action or belief, which is opposite to stepping down.\n\n• B) Renounce (Correct Answer): Means to formally declare one's abandonment of a position, right, or claim. It functions as the exact synonym for 'ABDICATE'.\n\n• C) Avow: Means to assert, confess, or declare openly, which does not carry the meaning of relinquishing power.\n\n• D) Espouse: Means to give support to or adopt a cause, directly opposing abandonment."
    },
    {
        id: "vocab_set1_11",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nRECANT",
        options: ["A) Affirm", "B) Decorate", "C) Retract", "D) Amplify"],
        correct: "C",
        explanation: "• A) Affirm: Means to state strongly or publicly validate a statement, acting as a direct antonym to taking back a belief.\n\n• B) Decorate: Means to add decorative details to make an object look appealing, contextually irrelevant.\n\n• C) Retract (Correct Answer): Means to draw back or withdraw a statement, accusation, or public belief. It serves as an exact synonym for 'RECANT'.\n\n• D) Amplify: Means to enlarge or make more intense, opposite of taking back a statement."
    },
    {
        id: "vocab_set1_12",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nIMPRUDENT",
        options: ["A) Profligate", "B) Rash", "C) Wise", "D) Unthrifty"],
        correct: "C",
        explanation: "• A) Profligate: Describes someone who is recklessly wasteful, sharing the careless nature of an imprudent person.\n\n• B) Rash: Means acting hastily without careful consideration, functioning as a direct synonym for IMPRUDENT.\n\n• C) Wise (Correct Answer): Describes having or showing good judgment, deep understanding, and sound decisions. Since 'IMPRUDENT' means foolishly careless, 'Wise' acts as its exact antonym.\n\n• D) Unthrifty: Describes someone who is careless with financial management, acting as a contextual synonym."
    },
    {
        id: "vocab_set1_13",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nNIGGARDLY",
        options: ["A) Profuse", "B) Generous", "C) Stingy", "D) Unthrifty"],
        correct: "C",
        explanation: "• A) Profuse: Describes abundance or extravagant giving, acting as a direct antonym to miserly behavior.\n\n• B) Generous: Describes someone willing to give money, help, or time freely, acting as a direct antonym.\n\n• C) Stingy (Correct Answer): Refers to being unwilling to give or spend money; extremely ungenerous. It serves as an exact synonym for 'NIGGARDLY'.\n\n• D) Unthrifty: Refers to wasteful spending habits, contradicting stinginess."
    },
    {
        id: "vocab_set1_14",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAVOW",
        options: ["A) Disclaim", "B) Declare", "C) Refute", "D) Deface"],
        correct: "B",
        explanation: "• A) Disclaim: Means to deny responsibility for or connection with something, acting as a direct antonym.\n\n• B) Declare (Correct Answer): Means to assert, confess, or state openly and emphatically. It acts as an exact synonym for 'AVOW'.\n\n• C) Refute: Means to prove a statement or opinion to be wrong or false, opposing open declaration.\n\n• D) Deface: Means to ruin or spoil the surface appearance of something, contextually irrelevant."
    },
    {
        id: "vocab_set1_15",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nPROFUSE",
        options: ["A) Abundant", "B) Lavish", "C) Meager", "D) Copious"],
        correct: "C",
        explanation: "• A) Abundant: Means existing or available in large quantities, functioning as a direct synonym for PROFUSE.\n\n• B) Lavish: Means sumptuously rich or elaborate in quantity, serving as a synonym.\n\n• C) Meager (Correct Answer): Describes something that is lacking in quantity, quality, or fullness; deficient. It acts as the direct antonym for 'PROFUSE'.\n\n• D) Copious: Means abundant in supply or quantity, functioning as a synonym."
    },
    {
        id: "vocab_set1_16",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSCRIMPING",
        options: ["A) Squandering", "B) Embellishing", "C) Decking", "D) Economizing"],
        correct: "D",
        explanation: "• A) Squandering: Means spending money or resources recklessly, acting as the direct antonym of saving carefully.\n\n• B) Embellishing: Refers to decorating or visually enhancing something, irrelevant to budget management.\n\n• C) Decking: Refers to adorning or dressing up, contextually irrelevant.\n\n• D) Economizing (Correct Answer): Refers to spending money very carefully and cutting down expenses. It serves as the exact synonym for 'SCRIMPING'."
    },
    {
        id: "vocab_set1_17",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nESPOUSE",
        options: ["A) Adopt", "B) Support", "C) Reject", "D) Affirm"],
        correct: "C",
        explanation: "• A) Adopt: Means to take up, support, or follow an idea or cause, functioning as a synonym for ESPOUSE.\n\n• B) Support: Means to give approval, comfort, or assistance to a cause, serving as a direct synonym.\n\n• C) Reject (Correct Answer): Means to refuse to accept, agree with, or support something. It acts as the direct antonym for 'ESPOUSE'.\n\n• D) Affirm: Means to state as a fact or validate, functioning as a contextual synonym."
    },
    {
        id: "vocab_set1_18",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nREFUTE",
        options: ["A) Validate", "B) Disprove", "C) Endorse", "D) Support"],
        correct: "B",
        explanation: "• A) Validate: Means to prove or declare the accuracy or legal truth of something, acting as an antonym.\n\n• B) Disprove (Correct Answer): Means to prove a statement, theory, or accusation to be wrong or false. It is the exact synonym for 'REFUTE'.\n\n• C) Endorse: Means to declare public approval or backing for something, acting as an antonym.\n\n• D) Support: Means to give assistance or backing to an argument, opposite of refuting it."
    },
    {
        id: "vocab_set1_19",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDISOWN",
        options: ["A) Acknowledge", "B) Reject", "C) Deny", "D) Disclaim"],
        correct: "A",
        explanation: "• A) Acknowledge (Correct Answer): Means to accept, admit, or formally recognize the truth or existence of a connection. It serves as the exact antonym for 'DISOWN'.\n\n• B) Reject: Means to refuse to accept or acknowledge, functioning as a synonym.\n\n• C) Deny: Means to refuse to admit truth or connection, functioning as a synonym.\n\n• D) Disclaim: Means to deny any association with, functioning as a direct synonym."
    },
    {
        id: "vocab_set1_20",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nBLEMISH",
        options: ["A) Adornment", "B) Flaw", "C) Ornament", "D) Enhancement"],
        correct: "B",
        explanation: "• A) Adornment: Refers to a decorative feature that improves appearance, acting as an antonym.\n\n• B) Flaw (Correct Answer): Refers to a mark, fault, defect, or imperfection that spoils something. It serves as the exact synonym for 'BLEMISH'.\n\n• C) Ornament: Refers to an object added to make something look attractive, opposite of a flaw.\n\n• D) Enhancement: Refers to an action or feature that increases quality or value, acting as an antonym."
    },
    {
        id: "vocab_dawdle_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDAWDLE",
        options: ["A) Rush", "B) Barrel", "C) Procrastinate", "D) Hasten"],
        correct: "C",
        explanation: "• A) Rush: Means to move or act with urgent speed, serving as a direct antonym.\n\n• B) Barrel: Means to move very fast in an uncontrolled direction, direct antonym.\n\n• C) Procrastinate (Correct Answer): Means to delay action, put off tasks, or waste time aimlessly. It serves as the precise synonym for 'DAWDLE'.\n\n• D) Hasten: Means to be quick to do something, acting as a direct antonym."
    },
    {
        id: "vocab_fiddle_around_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nFIDDLE AROUND",
        options: ["A) Loiter", "B) Work", "C) Hasten", "D) Accelerate"],
        correct: "A",
        explanation: "• A) Loiter (Correct Answer): Means to stand or wait around idly without apparent purpose, wasting time. It functions as an exact synonym for 'FIDDLE AROUND'.\n\n• B) Work: Refers to engaging in purposeful physical or mental effort, direct antonym.\n\n• C) Hasten: Means to hurry or act quickly, opposite of wasting time.\n\n• D) Accelerate: Means to increase speed, opposite of aimless idling."
    },
    {
        id: "vocab_amble_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAMBLE",
        options: ["A) Sprint", "B) Stagger", "C) Rush", "D) Stroll"],
        correct: "D",
        explanation: "• A) Sprint: Means to run at full speed over a short distance, direct antonym to slow walking.\n\n• B) Stagger: Means to walk unsteadily as if losing balance, which implies physical weakness rather than a relaxed pace.\n\n• C) Rush: Means to move with urgent haste, direct antonym.\n\n• D) Stroll (Correct Answer): Means to walk in a leisurely, relaxed, and unhurried manner, acting as the exact synonym for 'AMBLE'."
    },
    {
        id: "vocab_trifle_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nTRIFLE",
        options: ["A) Focus", "B) Dally", "C) Accelerate", "D) Extol"],
        correct: "B",
        explanation: "• A) Focus: Means to pay close and disciplined attention to a task, direct antonym.\n\n• B) Dally (Correct Answer): Means to act or move slowly, or treat a serious matter casually and frivolously. It serves as an exact synonym for 'TRIFLE'.\n\n• C) Accelerate: Means to speed up, contextually irrelevant.\n\n• D) Extol: Means to praise highly, contextually irrelevant."
    },
    {
        id: "vocab_stagger_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSTAGGER",
        options: ["A) Sprint", "B) Halt", "C) Lurch", "D) Accelerate"],
        correct: "C",
        explanation: "• A) Sprint: Means to run fast and purposefully, opposite of losing physical balance.\n\n• B) Halt: Means to come to a complete stop, contradicting motion.\n\n• C) Lurch (Correct Answer): Means to make an abrupt, unsteady, or uncontrolled movement. It serves as an exact synonym for 'STAGGER'.\n\n• D) Accelerate: Means to increase rate of movement, irrelevant to physical balance."
    },
    {
        id: "vocab_decelerate_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDECELERATE",
        options: ["A) Expedite", "B) Slacken", "C) Barrel", "D) Hasten"],
        correct: "B",
        explanation: "• A) Expedite: Means to make an action or process happen faster, serving as an antonym.\n\n• B) Slacken (Correct Answer): Means to reduce speed, tightness, or intensity. It serves as the precise synonym for 'DECELERATE'.\n\n• C) Barrel: Means to move forward extremely fast, direct antonym.\n\n• D) Hasten: Means to hurry or speed up, direct antonym."
    },
    {
        id: "vocab_dawdle_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDAWDLE",
        options: ["A) Procrastinate", "B) Amble", "C) Trifle", "D) Barrel"],
        correct: "D",
        explanation: "• A) Procrastinate: Means to delay action, functioning as a direct synonym.\n\n• B) Amble: Means to walk at a slow, relaxed pace, sharing the slow nature of dawdling.\n\n• C) Trifle: Means to treat time casually, functioning as a contextual synonym.\n\n• D) Barrel (Correct Answer): Means to move or travel at high speed in an urgent manner, acting as the direct antonym for 'DAWDLE'."
    },
    {
        id: "vocab_exert_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nEXERT",
        options: ["A) Idle", "B) Strive", "C) Relax", "D) Defer"],
        correct: "B",
        explanation: "• A) Idle: Means to spend time doing nothing, acting as a direct antonym.\n\n• B) Strive (Correct Answer): Means to make great efforts or push hard to achieve something. It functions as the precise synonym for 'EXERT'.\n\n• C) Relax: Means to rest or become less tense, direct antonym.\n\n• D) Defer: Means to postpone an action to a future time, contextually irrelevant."
    },
    {
        id: "vocab_travail_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nTRAVAIL",
        options: ["A) Repose", "B) Leisure", "C) Drudgery", "D) Trifle"],
        correct: "C",
        explanation: "• A) Repose: Refers to a state of rest, sleep, or tranquility, acting as a direct antonym.\n\n• B) Leisure: Refers to free time spent in relaxation and enjoyment, opposite of agonizing work.\n\n• C) Drudgery (Correct Answer): Refers to hard, menial, painful, or dull labor. It serves as an exact synonym for 'TRAVAIL'.\n\n• D) Trifle: Refers to something of trivial or little importance, contextually inaccurate."
    },
    {
        id: "vocab_gregarious_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nGREGARIOUS",
        options: ["A) Reclusive", "B) Aloof", "C) Companionable", "D) Taciturn"],
        correct: "C",
        explanation: "• A) Reclusive: Describes avoiding the company of other people, direct antonym.\n\n• B) Aloof: Means cool, distant, or unconcerned, direct antonym.\n\n• C) Companionable (Correct Answer): Describes being friendly, welcoming, and fond of social company. It serves as an exact synonym for 'GREGARIOUS'.\n\n• D) Taciturn: Describes being reserved or uncommunicative in speech, opposite of social."
    },
    {
        id: "vocab_gregarious_ant_1",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nGREGARIOUS",
        options: ["A) Reclusive", "B) Affable", "C) Amiable", "D) Cordial"],
        correct: "A",
        explanation: "• A) Reclusive (Correct Answer): Refers to deliberately avoiding social interaction and living in seclusion. It acts as the direct antonym for 'GREGARIOUS'.\n\n• B) Affable: Means friendly, good-natured, and easy to talk to, functioning as a synonym.\n\n• C) Amiable: Means displaying a friendly and pleasant manner, serving as a synonym.\n\n• D) Cordial: Means warm and friendly in social settings, serving as a synonym."
    },
    {
        id: "vocab_gregarious_ant_2",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nGREGARIOUS",
        options: ["A) Extroverted", "B) Aloof", "C) Companionable", "D) Clubby"],
        correct: "B",
        explanation: "• A) Extroverted: Describes being outgoing and socially confident, functioning as a synonym.\n\n• B) Aloof (Correct Answer): Describes being emotionally cool, distant, and detached from others. It acts as a strong antonym for 'GREGARIOUS'.\n\n• C) Companionable: Means friendly and fond of company, serving as a synonym.\n\n• D) Clubby: Describes being friendly and social within a group, serving as a synonym."
    },
    {
        id: "vocab_reticent_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nRETICENT",
        options: ["A) Extroverted", "B) Talkative", "C) Affable", "D) Reserved"],
        correct: "D",
        explanation: "• A) Extroverted: Describes a person who is highly outgoing, expressive, and energized by social interactions. This represents a bold and open personality trait, directly opposing the quiet nature of reticence.\n\n• B) Talkative: Refers to an individual inclined to speak frequently and at length in conversation. Because reticence involves holding back speech, 'Talkative' serves as a direct antonym.\n\n• C) Affable: Describes someone who is friendly, warm, and easy to converse with. While an affable person may be pleasant, the word emphasizes warmth rather than holding back thoughts.\n\n• D) Reserved (Correct Answer): Refers to being quiet, hesitant, or disinclined to reveal one's thoughts, feelings, or personal opinions readily. It acts as the exact synonym for 'RETICENT'."
    },
    {
        id: "vocab_taciturn_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nTACITURN",
        options: ["A) Uncommunicative", "B) Voluble", "C) Outgoing", "D) Sociable"],
        correct: "A",
        explanation: "• A) Uncommunicative (Correct Answer): Refers to a habitual disinclination to talk, share information, or engage in casual conversation. It serves as the exact synonym for 'TACITURN', which specifically describes a reserved, quiet temperament.\n\n• B) Voluble: Describes a person who speaks fluidly, incessantly, and in large quantities. It serves as a strong, direct antonym to taciturnity.\n\n• C) Outgoing: Refers to being socially confident, enthusiastic, and eager to interact with others, opposing a quiet demeanor.\n\n• D) Sociable: Describes someone who enjoys the company of others and engages freely in group settings, which directly contrasts with taciturn behavior."
    },
    {
        id: "vocab_engender_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nENGENDER",
        options: ["A) Quell", "B) Generate", "C) Repress", "D) Stifle"],
        correct: "B",
        explanation: "• A) Quell: Means to forcibly put an end to, suppress, or extinguish a feeling, rebellion, or condition. This represents the complete opposite of bringing something into existence.\n\n• B) Generate (Correct Answer): Means to produce, cause, bring about, or give rise to a specific feeling, situation, or condition. It acts as the precise synonym for 'ENGENDER'.\n\n• C) Repress: Refers to subduing, restraining, or holding back an emotion, impulse, or action by force, acting as an antonym to creating or initiating.\n\n• D) Stifle: Means to smother, suffocate, or prevent something from developing or expressing itself, which directly opposes the concept of engendering."
    },
    {
        id: "vocab_reprove_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nREPROVE",
        options: ["A) Laud", "B) Approve", "C) Admonish", "D) Sanction"],
        correct: "C",
        explanation: "• A) Laud: Means to praise, extol, or applaud someone highly in a public or formal context. This represents a strongly positive action, directly opposing verbal censure.\n\n• B) Approve: Refers to accepting, endorsing, or regarding something as good or satisfactory, which stands in direct contrast to expressing disapproval.\n\n• C) Admonish (Correct Answer): Means to firm, gently, or officially scold, reprimand, or express disapproval of someone's bad behavior. It serves as the exact synonym for 'REPROVE'.\n\n• D) Sanction: Means to give official authorization or permission for an action, which contradicts scolding or reprimanding."
    },
    {
        id: "vocab_reprove_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nREPROVE",
        options: ["A) Chide", "B) Reproach", "C) Castigate", "D) Laud"],
        correct: "D",
        explanation: "• A) Chide: Means to scold, rebuke, or express mild disapproval to someone, acting as a direct synonym for REPROVE.\n\n• B) Reproach: Refers to expressing disappointment or disapproval regarding someone's actions, serving as a functional synonym.\n\n• C) Castigate: Means to reprimand, criticize, or punish someone with extreme severity, acting as an intense synonym.\n\n• D) Laud (Correct Answer): Means to praise, honor, or commend highly. Because 'REPROVE' means to scold or express stern disapproval, 'Laud' acts as its direct, exact antonym."
    },
    {
        id: "vocab_venerate_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nVENERATE",
        options: ["A) Defame", "B) Revere", "C) Scorn", "D) Profane"],
        correct: "B",
        explanation: "• A) Defame: Means to damage the good reputation of a person or institution by making false, malicious statements. This acts as a direct antonym to showing deep respect.\n\n• B) Revere (Correct Answer): Means to regard someone or something with profound respect, high honor, and deep devotion. It functions as the exact synonym for 'VENERATE'.\n\n• C) Scorn: Refers to treating or regarding someone with open contempt, disdain, or disgust, acting as an antonym to veneration.\n\n• D) Profane: Means to treat a sacred entity or institution with disrespect or irreverence, opposing deep reverence."
    },
    {
        id: "vocab_extol_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nEXTOL",
        options: ["A) Castigate", "B) Reproach", "C) Exalt", "D) Affront"],
        correct: "C",
        explanation: "• A) Castigate: Means to reprimand, criticize, or punish someone severely, acting as a strong antonym to high praise.\n\n• B) Reproach: Refers to expressing disappointment, fault, or disapproval, directly opposing praising someone's achievements.\n\n• C) Exalt (Correct Answer): Means to hold someone or something in extremely high regard, raise in status, or praise enthusiastically. It acts as an exact synonym for 'EXTOL'.\n\n• D) Affront: Refers to an open, intentional insult or offense to someone's dignity, directly opposing praise."
    },
    {
        id: "vocab_deify_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEIFY",
        options: ["A) Desecrate", "B) Blaspheme", "C) Insult", "D) Idolize"],
        correct: "D",
        explanation: "• A) Desecrate: Means to treat a sacred place, object, or tradition with violent disrespect or damage, serving as a direct antonym.\n\n• B) Blaspheme: Refers to speaking sacrilegiously or irreverently about sacred entities, directly opposing worshipping something.\n\n• C) Insult: Means to treat or address someone with disrespect or offense, opposing god-like reverence.\n\n• D) Idolize (Correct Answer): Means to admire, revere, or worship someone or something as if they were a god. It serves as the exact, high-level synonym for 'DEIFY'."
    },
    {
        id: "vocab_venerate_ant_1",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nVENERATE",
        options: ["A) Exalt", "B) Revere", "C) Blaspheme", "D) Adore"],
        correct: "C",
        explanation: "• A) Exalt: Means to praise highly or hold in extreme esteem, functioning as a direct synonym for VENERATE.\n\n• B) Revere: Means to feel and express deep respect for someone or something, serving as a direct synonym.\n\n• C) Blaspheme (Correct Answer): Means to speak disrespectfully, sacrilegiously, or offensively toward sacred or highly revered entities. It acts as the exact antonym for 'VENERATE'.\n\n• D) Adore: Means to love, respect, and admire someone deeply, functioning as a synonym."
    },
    {
        id: "vocab_scorn_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSCORN",
        options: ["A) Exalt", "B) Disdain", "C) Deify", "D) Glorify"],
        correct: "B",
        explanation: "• A) Exalt: Means to hold someone in high regard or praise enthusiastically, serving as a direct antonym to showing contempt.\n\n• B) Disdain (Correct Answer): Refers to the feeling or attitude that someone or something is unworthy of respect or consideration. It stands as an exact synonym for 'SCORN'.\n\n• C) Deify: Means to worship or treat someone like a god, acting as a complete opposite to contemptuous rejection.\n\n• D) Glorify: Means to praise worshipfully or present something as far superior, directly opposing scornful treatment."
    },
    {
        id: "vocab_desecrate_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDESECRATE",
        options: ["A) Revere", "B) Sanctify", "C) Exalt", "D) Profane"],
        correct: "D",
        explanation: "• A) Revere: Means to regard with deep respect and religious devotion, acting as a direct antonym to violating sacred entities.\n\n• B) Sanctify: Means to set apart as holy, purify, or consecrate officially, acting as the precise opposite of desecration.\n\n• C) Exalt: Means to praise highly or elevate in dignity, which contradicts treating sacred items with contempt.\n\n• D) Profane (Correct Answer): Means to treat a sacred place, object, or belief with irreverence, disrespect, or abuse. It functions as the exact synonym for 'DESECRATE'."
    },
    {
        id: "vocab_affront_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAFFRONT",
        options: ["A) Respect", "B) Insult", "C) Adore", "D) Honor"],
        correct: "B",
        explanation: "• A) Respect: Refers to showing due regard for the feelings, wishes, rights, or traditions of others, acting as a direct antonym.\n\n• B) Insult (Correct Answer): Refers to an intentional remark or action that causes offense, disrespect, or humiliation. It serves as an exact synonym for 'AFFRONT'.\n\n• C) Adore: Means to love deeply or respect worshipfully, which stands in complete opposition to causing public offense.\n\n• D) Honor: Refers to high respect, public distinction, or formal praise, acting as a direct antonym."
    },
    {
        id: "vocab_quell_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nQUELL",
        options: ["A) Engender", "B) Induce", "C) Suppress", "D) Invoke"],
        correct: "C",
        explanation: "• A) Engender: Means to produce, cause, or give rise to a feeling or situation, directly opposing the act of stopping or suppressing something.\n\n• B) Induce: Means to persuade, bring about, or stimulate an action, which contrasts with suppressing or ending it.\n\n• C) Suppress (Correct Answer): Means to forcibly put an end to, subdue, or extinguish a rebellion, disturbance, or emotional outbreak. It acts as an exact synonym for 'QUELL'.\n\n• D) Invoke: Means to cite, appeal to, or call upon an authority or power, which is contextually unrelated to subduing disturbances."
    },
    {
        id: "vocab_castigate_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCASTIGATE",
        options: ["A) Extol", "B) Chastise", "C) Exalt", "D) Laud"],
        correct: "B",
        explanation: "• A) Extol: Means to praise enthusiastically and publicly, acting as a direct antonym to harsh verbal punishment.\n\n• B) Chastise (Correct Answer): Means to reprimand, scold, or punish someone with extreme severity. It functions as the precise synonym for 'CASTIGATE'.\n\n• C) Exalt: Means to hold in high regard or raise in rank, directly opposing severe criticism.\n\n• D) Laud: Means to praise highly in a formal manner, serving as a direct antonym."
    },
    {
        id: "vocab_depravity_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEPRAVITY",
        options: ["A) Rectitude", "B) Scrupulosity", "C) Wickedness", "D) Virtue"],
        correct: "C",
        explanation: "• A) Rectitude: Refers to morally correct behavior or thinking, serving as a direct antonym to moral corruption.\n\n• B) Scrupulosity: Refers to extreme care and strict regard for avoiding moral wrong, directly opposing corrupt behavior.\n\n• C) Wickedness (Correct Answer): Refers to the state of being morally corrupt, evil, or perverted in character and actions. It stands as an exact synonym for 'DEPRAVITY'.\n\n• D) Virtue: Refers to behavior showing high moral standards, functioning as a direct antonym."
    },
    {
        id: "vocab_abjection_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nABJECTION",
        options: ["A) Goodness", "B) Righteousness", "C) Morality", "D) Degradation"],
        correct: "D",
        explanation: "• A) Goodness: Refers to high moral quality and virtue, which directly opposes a degraded, wretched condition.\n\n• B) Righteousness: Refers to being morally upright and justifiable, acting as a direct antonym to abject degradation.\n\n• C) Morality: Refers to conformity to recognized rules of right conduct, opposing moral or physical degradation.\n\n• D) Degradation (Correct Answer): Refers to the state of being lowered in status, condition, or character to a wretched level. It serves as the exact synonym for 'ABJECTION'."
    },
    {
        id: "vocab_dissipation_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDISSIPATION",
        options: ["A) Rectitude", "B) Profligacy", "C) Scrupulosity", "D) Preservation"],
        correct: "B",
        explanation: "• A) Rectitude: Refers to moral uprightness and disciplined living, serving as a direct antonym to wasteful living.\n\n• B) Profligacy (Correct Answer): Refers to reckless extravagance, squandering of resources, or immoral, overindulgent living. It acts as an exact synonym for 'DISSIPATION'.\n\n• C) Scrupulosity: Refers to strict adherence to moral rules and self-restraint, directly opposing dissolute behavior.\n\n• D) Preservation: Refers to keeping something safe or intact, opposing the idea of squandering or dissolving."
    },
    {
        id: "vocab_perversion_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPERVERSION",
        options: ["A) Distortion", "B) Virtue", "C) Goodness", "D) Righteousness"],
        correct: "A",
        explanation: "• A) Distortion (Correct Answer): Refers to altering, twisting, or corrupting something away from its original, natural, or correct state. It serves as an exact synonym for 'PERVERSION'.\n\n• B) Virtue: Refers to high moral excellence and purity, acting as a direct antonym to moral perversion.\n\n• C) Goodness: Refers to wholesome moral quality, directly opposing corrupted states.\n\n• D) Righteousness: Refers to moral uprightness and adherence to duty, acting as a direct antonym."
    },
    {
        id: "vocab_depravity_ant_1",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDEPRAVITY",
        options: ["A) Corruption", "B) Decadency", "C) Rectitude", "D) Degeneracy"],
        correct: "C",
        explanation: "• A) Corruption: Refers to dishonest or fraudulent conduct, serving as a direct synonym for DEPRAVITY.\n\n• B) Decadency: Refers to moral or cultural decline, functioning as a contextual synonym.\n\n• C) Rectitude (Correct Answer): Refers to morally correct behavior and uncompromising integrity. Since 'DEPRAVITY' means wickedness and moral corruption, 'Rectitude' serves as its precise antonym.\n\n• D) Degeneracy: Refers to the state of having declined to a morally corrupt level, serving as a synonym."
    },
    {
        id: "vocab_depravity_ant_2",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDEPRAVITY",
        options: ["A) Abjection", "B) Debasement", "C) Degradation", "D) Scrupulosity"],
        correct: "D",
        explanation: "• A) Abjection: Refers to a state of moral or physical wretchedness, serving as a contextual synonym.\n\n• B) Debasement: Refers to the process of lowering in quality or value, functioning as a synonym.\n\n• C) Degradation: Refers to moral decline or loss of honor, functioning as a synonym.\n\n• D) Scrupulosity (Correct Answer): Refers to extreme, strict care to avoid any moral wrongdoing. It acts as a direct, precise antonym for 'DEPRAVITY'."
    },
    {
        id: "vocab_incorrigible_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nINCORRIGIBLE",
        options: ["A) Reformable", "B) Curable", "C) Irreformable", "D) Redeemable"],
        correct: "C",
        explanation: "• A) Reformable: Describes a habit, character, or system that is capable of being improved or corrected, acting as a direct antonym.\n\n• B) Curable: Describes a condition or illness that can be healed or put right, directly opposing incorrigibility.\n\n• C) Irreformable (Correct Answer): Describes someone or something that cannot be reformed, corrected, or improved due to deep-seated habits. It serves as the exact synonym for 'INCORRIGIBLE'.\n\n• D) Redeemable: Describes something capable of being saved or brought back to a good state, acting as an antonym."
    },
    {
        id: "vocab_impenitent_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nIMPENITENT",
        options: ["A) Reformable", "B) Remorseless", "C) Curable", "D) Savable"],
        correct: "B",
        explanation: "• A) Reformable: Describes the capability for moral or behavioral improvement, which fails to address emotional regret.\n\n• B) Remorseless (Correct Answer): Describes feeling no regret, guilt, or repentance for bad actions. It acts as the exact synonym for 'IMPENITENT'.\n\n• C) Curable: Describes medical or practical fixability, which is contextually irrelevant to feelings of guilt.\n\n• D) Savable: Describes the potential for rescue, failing to address feelings of remorse."
    },
    {
        id: "vocab_incorrigible_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nINCORRIGIBLE",
        options: ["A) Irremediable", "B) Incurable", "C) Reformable", "D) Irrecoverable"],
        correct: "C",
        explanation: "• A) Irremediable: Means impossible to cure or put right, functioning as a direct synonym for INCORRIGIBLE.\n\n• B) Incurable: Means incapable of being cured or corrected, serving as a synonym.\n\n• C) Reformable (Correct Answer): Means capable of being improved, educated, or changed for the better. It acts as the direct, exact antonym for 'INCORRIGIBLE'.\n\n• D) Irrecoverable: Means impossible to regain or retrieve, functioning as a contextual synonym."
    },
    {
        id: "vocab_servile_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSERVILE",
        options: ["A) Imperious", "B) Submissive", "C) Supercilious", "D) Arrogant"],
        correct: "B",
        explanation: "• A) Imperious: Describes assuming power or authority in a domineering, arrogant manner, acting as a direct antonym.\n\n• B) Submissive (Correct Answer): Describes an excessive willingness to obey, conform, or submit to the authority of others. It stands as an exact synonym for 'SERVILE'.\n\n• C) Supercilious: Describes behaving as though one thinks one is superior to others, serving as an antonym.\n\n• D) Arrogant: Describes having an exaggerated sense of one's importance, directly opposing servility."
    },
    {
        id: "vocab_slavish_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSLAVISH",
        options: ["A) Haughty", "B) Lordly", "C) Imperious", "D) Obsequious"],
        correct: "D",
        explanation: "• A) Haughty: Describes being arrogantly superior and disdainful, acting as a direct antonym to slavish devotion.\n\n• B) Lordly: Describes a grand, arrogant, or domineering manner, opposing humble submissiveness.\n\n• C) Imperious: Describes overbearing, command-driven behavior, directly opposing slavish compliance.\n\n• D) Obsequious (Correct Answer): Describes being excessively obedient, attentive, or flattering to a servile degree. It serves as an exact synonym for 'SLAVISH'."
    },
    {
        id: "vocab_abject_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nABJECT",
        options: ["A) Ignoble", "B) Supercilious", "C) Arrogant", "D) Lordly"],
        correct: "A",
        explanation: "• A) Ignoble (Correct Answer): Describes character, conditions, or status that are wretched, degraded, or lacking honor. It acts as the precise synonym for 'ABJECT'.\n\n• B) Supercilious: Describes haughty, arrogant behavior toward others, acting as a direct antonym.\n\n• C) Arrogant: Describes having an unpleasantly high opinion of oneself, opposing abject humbleness.\n\n• D) Lordly: Describes domineering or grand behavior, acting as a direct antonym."
    },
    {
        id: "vocab_menial_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nMENIAL",
        options: ["A) Haughty", "B) Lowly", "C) Imperious", "D) Superior"],
        correct: "B",
        explanation: "• A) Haughty: Describes arrogant pride, which is contextually opposite to humble tasks.\n\n• B) Lowly (Correct Answer): Describes work, status, or position that is humble, degraded, or requiring little skill. It functions as the exact synonym for 'MENIAL'.\n\n• C) Imperious: Describes domineering authority, opposite of humble work.\n\n• D) Superior: Describes higher rank, quality, or status, acting as the direct antonym for menial."
    },
    {
        id: "vocab_sycophant_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSYCOPHANT",
        options: ["A) Leader", "B) Prince", "C) Flatterer", "D) Critic"],
        correct: "C",
        explanation: "• A) Leader: Refers to a person who commands or directs a group, which is opposite to an obsequious follower.\n\n• B) Prince: Refers to a male monarch or noble figure, contextually irrelevant.\n\n• C) Flatterer (Correct Answer): Refers to a person who acts obsequiously toward powerful people to gain personal advantage. It acts as an exact synonym for 'SYCOPHANT'.\n\n• D) Critic: Refers to someone who expresses unfavorable opinions or analytical judgment, opposite of a blind flatterer."
    },
    {
        id: "vocab_toadyish_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nTOADYISH",
        options: ["A) Supercilious", "B) Fawning", "C) Arrogant", "D) Lordly"],
        correct: "B",
        explanation: "• A) Supercilious: Describes haughty superiority, acting as a direct antonym to kissing up to others.\n\n• B) Fawning (Correct Answer): Describes displaying exaggerated flattery, affection, or servility to win favor. It serves as the exact synonym for 'TOADYISH'.\n\n• C) Arrogant: Describes conceited, overbearing pride, directly opposing toadyish submission.\n\n• D) Lordly: Describes domineering behavior, acting as a direct antonym."
    },
    {
        id: "vocab_subservient_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSUBSERVIENT",
        options: ["A) Imperious", "B) Haughty", "C) Compliant", "D) Dominant"],
        correct: "C",
        explanation: "• A) Imperious: Describes domineering, command-oriented behavior, acting as a direct antonym.\n\n• B) Haughty: Describes arrogantly superior behavior, directly opposing submissive traits.\n\n• C) Compliant (Correct Answer): Describes being prepared to obey others unquestioningly or yielding easily to authority. It functions as the exact synonym for 'SUBSERVIENT'.\n\n• D) Dominant: Describes wielding power and influence over others, acting as a direct antonym."
    },
    {
        id: "vocab_demure_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEMURE",
        options: ["A) Arrogant", "B) Modest", "C) Supercilious", "D) Imperious"],
        correct: "B",
        explanation: "• A) Arrogant: Describes conceited self-importance, acting as a direct antonym to quiet modesty.\n\n• B) Modest (Correct Answer): Describes being reserved, quiet, shy, or unassuming in appearance and behavior. It serves as the exact synonym for 'DEMURE'.\n\n• C) Supercilious: Describes haughty behavior, acting as a direct antonym.\n\n• D) Imperious: Describes domineering overbearingness, directly opposing demure quietness."
    },
    {
        id: "vocab_servile_ant_1",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nSERVILE",
        options: ["A) Subservient", "B) Toadyish", "C) Imperious", "D) Abject"],
        correct: "C",
        explanation: "• A) Subservient: Means overly obedient, functioning as a direct synonym for SERVILE.\n\n• B) Toadyish: Means fawning and obsequious, functioning as a synonym.\n\n• C) Imperious (Correct Answer): Describes assuming power and authority in an arrogant, domineering manner. Since 'SERVILE' means slavelike and submissive, 'Imperious' acts as its precise antonym.\n\n• D) Abject: Means wretched and humble, functioning as a contextual synonym."
    },
    {
        id: "vocab_supercilious_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSUPERCILIOUS",
        options: ["A) Servile", "B) Demure", "C) Subservient", "D) Haughty"],
        correct: "D",
        explanation: "• A) Servile: Describes an excessive willingness to serve or please others, acting as a direct antonym to arrogant superiority.\n\n• B) Demure: Describes being reserved, modest, and shy, which stands in complete contrast to a haughty and dismissive attitude.\n\n• C) Subservient: Describes being compliant and obedient to authority, directly opposing supercilious behavior.\n\n• D) Haughty (Correct Answer): Refers to behaving in an arrogantly superior and disdainful manner toward others. It serves as an exact synonym for 'SUPERCILIOUS'."
    },
    {
        id: "vocab_ominous_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nOMINOUS",
        options: ["A) Auspicious", "B) Propitious", "C) Menacing", "D) Prosperous"],
        correct: "C",
        explanation: "• A) Auspicious: Describes a favorable sign that indicates future success or good fortune, acting as a direct antonym.\n\n• B) Propitious: Describes favorable circumstances or promising good results, directly opposing an ill-omened sign.\n\n• C) Menacing (Correct Answer): Describes suggesting the presence of danger or indicating that something evil or harmful is about to happen. It acts as the exact synonym for 'OMINOUS'.\n\n• D) Prosperous: Describes flourishing, successful, or financially booming conditions, contextually unrelated to foreboding signs."
    },
    {
        id: "vocab_baleful_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nBALEFUL",
        options: ["A) Propitious", "B) Sinister", "C) Bright", "D) Hopeful"],
        correct: "B",
        explanation: "• A) Propitious: Describes favorable or promising circumstances, serving as a direct antonym to harmful foreboding.\n\n• B) Sinister (Correct Answer): Describes threatening harm, destruction, evil, or bad fortune. It serves as an exact synonym for 'BALEFUL'.\n\n• C) Bright: Describes something full of light or promising a positive future, directly opposing a harmful nature.\n\n• D) Hopeful: Describes feeling or inspiring optimism, acting as a direct antonym to ominous or baleful signals."
    },
    {
        id: "vocab_inauspicious_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nINAUSPICIOUS",
        options: ["A) Auspicious", "B) Unfavorable", "C) Propitious", "D) Prosperous"],
        correct: "B",
        explanation: "• A) Auspicious: Describes giving or showing a sign of future success, acting as the direct antonym.\n\n• B) Unfavorable (Correct Answer): Describes showing signs that warn of failure, difficulty, or bad luck. It functions as the exact synonym for 'INAUSPICIOUS'.\n\n• C) Propitious: Describes presenting favorable conditions, acting as a direct antonym.\n\n• D) Prosperous: Describes flourishing or successful states, contextually opposing inauspicious beginnings."
    },
    {
        id: "vocab_sinister_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSINISTER",
        options: ["A) Hopeful", "B) Bright", "C) Threatening", "D) Auspicious"],
        correct: "C",
        explanation: "• A) Hopeful: Describes inspiring optimism and bright prospects, acting as a direct antonym to malevolent threats.\n\n• B) Bright: Describes cheerful, favorable, or promising conditions, directly opposing sinister intentions.\n\n• C) Threatening (Correct Answer): Describes giving the impression that something harmful, evil, or dangerous is about to happen. It serves as the exact synonym for 'SINISTER'.\n\n• D) Auspicious: Describes indicating good fortune and success, acting as a direct antonym."
    },
    {
        id: "vocab_ominous_ant_1",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nOMINOUS",
        options: ["A) Menacing", "B) Auspicious", "C) Portentous", "D) Baleful"],
        correct: "B",
        explanation: "• A) Menacing: Means threatening or suggesting danger, functioning as a direct synonym for OMINOUS.\n\n• B) Auspicious (Correct Answer): Describes showing or suggesting that future success, good fortune, or happiness is likely. Since 'OMINOUS' means giving an impression of impending evil, 'Auspicious' serves as its precise antonym.\n\n• C) Portentous: Means ominous or serving as a warning of evil, functioning as a synonym.\n\n• D) Baleful: Means threatening harm or foreboding evil, serving as a direct synonym."
    },
    {
        id: "vocab_propitious_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPROPITIOUS",
        options: ["A) Baleful", "B) Sinister", "C) Inauspicious", "D) Favorable"],
        correct: "D",
        explanation: "• A) Baleful: Describes threatening harm or evil, serving as a direct antonym.\n\n• B) Sinister: Describes giving an impression of evil or danger, serving as a direct antonym.\n\n• C) Inauspicious: Describes showing signs of bad luck or failure, serving as an exact antonym.\n\n• D) Favorable (Correct Answer): Describes giving or indicating a good chance of success, luck, or progress. It serves as the exact synonym for 'PROPITIOUS'."
    },
    {
        id: "vocab_corruption_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCORRUPTION",
        options: ["A) Rectitude", "B) Depravity", "C) Scrupulosity", "D) Virtue"],
        correct: "B",
        explanation: "• A) Rectitude: Refers to moral integrity, honesty, and correctness, functioning as a direct antonym.\n\n• B) Depravity (Correct Answer): Refers to moral corruption, wickedness, or perversion of standards. It acts as the exact synonym for 'CORRUPTION'.\n\n• C) Scrupulosity: Refers to strict adherence to moral rules and extreme care in doing right, directly opposing corruption.\n\n• D) Virtue: Refers to behavior showing high moral standards, acting as a direct antonym."
    },
    {
        id: "vocab_debasement_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEBASEMENT",
        options: ["A) Goodness", "B) Excellence", "C) Degradation", "D) Elevation"],
        correct: "C",
        explanation: "• A) Goodness: Refers to high moral character or quality, directly opposing the act of lowering value.\n\n• B) Excellence: Refers to the state of being outstanding or superior, acting as a direct antonym.\n\n• C) Degradation (Correct Answer): Refers to the act or process of lowering in quality, value, status, or moral dignity. It acts as an exact synonym for 'DEBASEMENT'.\n\n• D) Elevation: Refers to raising someone or something to a higher position or standard, serving as an antonym."
    },
    {
        id: "vocab_decadency_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDECADENCY",
        options: ["A) Integrity", "B) Righteousness", "C) Scrupulosity", "D) Decline"],
        correct: "D",
        explanation: "• A) Integrity: Refers to unwavering adherence to strong moral principles and honesty, acting as a direct antonym.\n\n• B) Righteousness: Refers to the quality of being morally upright and justifiable, directly opposing decadence.\n\n• C) Scrupulosity: Refers to rigorous concern for moral standards, acting as a direct antonym.\n\n• D) Decline (Correct Answer): Refers to moral, cultural, or physical deterioration and decay over time. It functions as the exact synonym for 'DECADENCY'."
    },
    {
        id: "vocab_degeneracy_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEGENERACY",
        options: ["A) Rectitude", "B) Deterioration", "C) Morality", "D) Righteousness"],
        correct: "B",
        explanation: "• A) Rectitude: Refers to moral correctness and honorable behavior, serving as a direct antonym.\n\n• B) Deterioration (Correct Answer): Refers to the process of becoming progressively worse in moral quality, health, or strength. It functions as the exact synonym for 'DEGENERACY'.\n\n• C) Morality: Refers to conformity to rules of right conduct, opposing degenerate states.\n\n• D) Righteousness: Refers to moral purity and upright conduct, acting as a direct antonym."
    },
    {
        id: "vocab_degradation_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEGRADATION",
        options: ["A) Virtue", "B) Goodness", "C) Humiliation", "D) Scrupulosity"],
        correct: "C",
        explanation: "• A) Virtue: Refers to high moral standards and righteousness, serving as a direct antonym.\n\n• B) Goodness: Refers to wholesome moral quality, directly opposing degradation.\n\n• C) Humiliation (Correct Answer): Refers to a reduction in dignity, status, respect, or self-esteem, leading to a degraded state. It acts as a precise synonym for 'DEGRADATION'.\n\n• D) Scrupulosity: Refers to extreme care for moral rightness, directly opposing loss of moral standards."
    },
    {
        id: "vocab_goodness_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nGOODNESS",
        options: ["A) Rectitude", "B) Depravity", "C) Scrupulosity", "D) Morality"],
        correct: "B",
        explanation: "• A) Rectitude: Refers to moral correctness and integrity, serving as a direct synonym for GOODNESS.\n\n• B) Depravity (Correct Answer): Refers to moral corruption, wickedness, and evil character. Since 'GOODNESS' denotes high moral excellence, 'Depravity' serves as its precise antonym.\n\n• C) Scrupulosity: Refers to strict ethical care, functioning as a contextual synonym.\n\n• D) Morality: Refers to ethical principles and good conduct, functioning as a synonym."
    },
    {
        id: "vocab_virtue_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nVIRTUE",
        options: ["A) Righteousness", "B) Scrupulosity", "C) Rectitude", "D) Depravity"],
        correct: "D",
        explanation: "• A) Righteousness: Refers to moral uprightness, functioning as a direct synonym for VIRTUE.\n\n• B) Scrupulosity: Refers to rigorous adherence to morality, serving as a synonym.\n\n• C) Rectitude: Refers to moral integrity, serving as a direct synonym.\n\n• D) Depravity (Correct Answer): Refers to moral corruption, wickedness, and perversion. It acts as the exact antonym for 'VIRTUE'."
    },
    {
        id: "vocab_morality_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nMORALITY",
        options: ["A) Corruption", "B) Scrupulosity", "C) Rectitude", "D) Righteousness"],
        correct: "A",
        explanation: "• A) Corruption (Correct Answer): Refers to dishonest, illegal, or immoral behavior that violates ethical codes. It serves as the direct, exact antonym for 'MORALITY'.\n\n• B) Scrupulosity: Refers to strict adherence to moral principles, serving as a synonym.\n\n• C) Rectitude: Refers to moral uprightness, serving as a direct synonym.\n\n• D) Righteousness: Refers to moral justification and virtue, serving as a synonym."
    },
    {
        id: "vocab_righteousness_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nRIGHTEOUSNESS",
        options: ["A) Goodness", "B) Virtue", "C) Depravity", "D) Scrupulosity"],
        correct: "C",
        explanation: "• A) Goodness: Refers to moral excellence, functioning as a direct synonym for RIGHTEOUSNESS.\n\n• B) Virtue: Refers to high moral standards, serving as a direct synonym.\n\n• C) Depravity (Correct Answer): Refers to state of moral corruption and wickedness, acting as the direct, exact antonym for 'RIGHTEOUSNESS'.\n\n• D) Scrupulosity: Refers to careful regard for moral rules, functioning as a synonym."
    },
    {
        id: "vocab_hopeless_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nHOPELESS",
        options: ["A) Savable", "B) Curable", "C) Reformable", "D) Incorrigible"],
        correct: "D",
        explanation: "• A) Savable: Describes something capable of being rescued or preserved, serving as a direct antonym.\n\n• B) Curable: Describes a condition capable of medical or practical remedy, acting as a direct antonym.\n\n• C) Reformable: Describes behavior capable of moral or operational improvement, serving as an antonym.\n\n• D) Incorrigible (Correct Answer): Describes someone or something that cannot be changed, reformed, or improved, effectively rendering the situation beyond hope. It serves as the exact synonym for 'HOPELESS'."
    },
    {
        id: "vocab_irrecoverable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nIRRECOVERABLE",
        options: ["A) Retrievable", "B) Irretrievable", "C) Savable", "D) Curable"],
        correct: "B",
        explanation: "• A) Retrievable: Describes something that can be regained, recovered, or corrected, acting as a direct antonym.\n\n• B) Irretrievable (Correct Answer): Describes something impossible to retrieve, recover, or put right again. It serves as the exact synonym for 'IRRECOVERABLE'.\n\n• C) Savable: Describes something that can be rescued, acting as a direct antonym.\n\n• D) Curable: Describes something capable of being healed or fixed, acting as an antonym."
    },
    {
        id: "vocab_incurable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nINCURABLE",
        options: ["A) Curable", "B) Reformable", "C) Irremediable", "D) Savable"],
        correct: "C",
        explanation: "• A) Curable: Describes something capable of being healed, acting as the direct antonym.\n\n• B) Reformable: Describes habits or characters capable of improvement, acting as an antonym.\n\n• C) Irremediable (Correct Answer): Describes something impossible to cure, remedy, or correct, functioning as an exact synonym for 'INCURABLE'.\n\n• D) Savable: Describes something capable of being rescued, acting as a direct antonym."
    },
    {
        id: "vocab_irremediable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nIRREMEDIABLE",
        options: ["A) Unfixable", "B) Curable", "C) Savable", "D) Reformable"],
        correct: "A",
        explanation: "• A) Unfixable (Correct Answer): Describes something impossible to repair, correct, or remedy, serving as an exact synonym for 'IRREMEDIABLE'.\n\n• B) Curable: Describes something capable of being healed, acting as a direct antonym.\n\n• C) Savable: Describes something that can be rescued, acting as a direct antonym.\n\n• D) Reformable: Describes behavior capable of being corrected, serving as an antonym."
    },
    {
        id: "vocab_unredeemable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nUNREDEEMABLE",
        options: ["A) Redeemable", "B) Irredeemable", "C) Reformable", "D) Curable"],
        correct: "B",
        explanation: "• A) Redeemable: Describes something capable of being saved, improved, or reclaimed, serving as the direct antonym.\n\n• B) Irredeemable (Correct Answer): Describes something impossible to save, correct, or improve, serving as an exact synonym for 'UNREDEEMABLE'.\n\n• C) Reformable: Describes something capable of behavioral improvement, acting as an antonym.\n\n• D) Curable: Describes something capable of medical or structural fix, serving as an antonym."
    },
    {
        id: "vocab_savable_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nSAVABLE",
        options: ["A) Reformable", "B) Curable", "C) Incorrigible", "D) Redeemable"],
        correct: "C",
        explanation: "• A) Reformable: Means capable of being improved or reformed, functioning as a synonym.\n\n• B) Curable: Means capable of being healed or fixed, serving as a functional synonym.\n\n• C) Incorrigible (Correct Answer): Describes someone or something impossible to reform, save, or correct. Since 'SAVABLE' means capable of rescue or fix, 'Incorrigible' serves as its precise antonym.\n\n• D) Redeemable: Means capable of being saved or brought back, functioning as a synonym."
    },
    {
        id: "vocab_curable_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nCURABLE",
        options: ["A) Savable", "B) Incurable", "C) Reformable", "D) Retrievable"],
        correct: "B",
        explanation: "• A) Savable: Means rescueable, functioning as a synonym.\n\n• B) Incurable (Correct Answer): Describes a disease, condition, or flaw that cannot be cured or healed. It acts as the exact antonym for 'CURABLE'.\n\n• C) Reformable: Means changeable for the better, serving as a functional synonym.\n\n• D) Retrievable: Means capable of being recovered, functioning as a contextual synonym."
    },
    {
        id: "vocab_arrogant_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nARROGANT",
        options: ["A) Supercilious", "B) Servile", "C) Imperious", "D) Haughty"],
        correct: "B",
        explanation: "• A) Supercilious: Means haughty and disdainful, functioning as a direct synonym for ARROGANT.\n\n• B) Servile (Correct Answer): Describes showing an excessive, humble, or submissive willingness to serve and obey others. Since 'ARROGANT' denotes conceited self-importance, 'Servile' acts as its direct antonym.\n\n• C) Imperious: Means domineering and command-driven, serving as a direct synonym.\n\n• D) Haughty: Means arrogantly superior, functioning as a direct synonym."
    },
    {
        id: "vocab_haughty_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nHAUGHTY",
        options: ["A) Supercilious", "B) Imperious", "C) Arrogant", "D) Subservient"],
        correct: "D",
        explanation: "• A) Supercilious: Means haughty, functioning as a direct synonym.\n\n• B) Imperious: Means overbearing and bossy, serving as a direct synonym.\n\n• C) Arrogant: Means conceited, functioning as a direct synonym.\n\n• D) Subservient (Correct Answer): Describes being prepared to obey others unquestioningly or yielding submissively. It acts as the direct antonym for 'HAUGHTY'."
    },
    {
        id: "vocab_lordly_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nLORDLY",
        options: ["A) Supercilious", "B) Imperious", "C) Abject", "D) Arrogant"],
        correct: "C",
        explanation: "• A) Supercilious: Means proud and disdainful, serving as a synonym.\n\n• B) Imperious: Means domineering, functioning as a direct synonym.\n\n• C) Abject (Correct Answer): Describes being wretched, degraded, humble, and completely lacking self-pride. It acts as the direct antonym for 'LORDLY' (grand/domineering).\n\n• D) Arrogant: Means conceited, functioning as a direct synonym."
    },
    {
        id: "vocab_portentous_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPORTENTOUS",
        options: ["A) Auspicious", "B) Ominous", "C) Bright", "D) Propitious"],
        correct: "B",
        explanation: "• A) Auspicious: Describes showing signs of future success, acting as a direct antonym.\n\n• B) Ominous (Correct Answer): Describes serving as a warning of something evil, bad, or disastrous about to happen. It serves as the exact synonym for 'PORTENTOUS'.\n\n• C) Bright: Describes promising a favorable future, directly opposing foreboding signs.\n\n• D) Propitious: Describes favorable conditions, serving as a direct antonym."
    },
    {
        id: "vocab_unthreatening_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nUNTHREATENING",
        options: ["A) Auspicious", "B) Bright", "C) Menacing", "D) Propitious"],
        correct: "C",
        explanation: "• A) Auspicious: Means favorable, functioning as a contextual synonym for unthreatening situations.\n\n• B) Bright: Means promising, functioning as a contextual synonym.\n\n• C) Menacing (Correct Answer): Describes suggesting danger or threatening harm. Since 'UNTHREATENING' means safe and non-dangerous, 'Menacing' acts as its exact antonym.\n\n• D) Propitious: Means promising success, functioning as a contextual synonym."
    },
    {
        id: "vocab_bright_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nBRIGHT",
        options: ["A) Auspicious", "B) Propitious", "C) Prosperous", "D) Ominous"],
        correct: "D",
        explanation: "• A) Auspicious: Means promising, functioning as a direct synonym in the context of future prospects.\n\n• B) Propitious: Means favorable, serving as a direct synonym.\n\n• C) Prosperous: Means flourishing, functioning as a contextual synonym.\n\n• D) Ominous (Correct Answer): Describes giving the impression that something bad or threatening is going to happen. It acts as the exact antonym for 'BRIGHT' prospects."
    },
    {
        id: "vocab_prosperous_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPROSPEROUS",
        options: ["A) Baleful", "B) Thriving", "C) Sinister", "D) Inauspicious"],
        correct: "B",
        explanation: "• A) Baleful: Describes threatening harm or evil, serving as an antonym.\n\n• B) Thriving (Correct Answer): Describes flourishing, successful, and gaining financial or material success. It acts as the precise synonym for 'PROSPEROUS'.\n\n• C) Sinister: Describes suggesting evil or danger, acting as an antonym.\n\n• D) Inauspicious: Describes showing signs of failure, acting as a direct antonym."
    },
    {
        id: "vocab_garnish_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nGARNISH",
        options: ["A) Understate", "B) Blemish", "C) Adorn", "D) Spoil"],
        correct: "C",
        explanation: "• A) Understate: Means to describe something as smaller or less important, contextually unrelated to decorating.\n\n• B) Blemish: Means to spoil the perfection or appearance of something, acting as an antonym.\n\n• C) Adorn (Correct Answer): Means to decorate, embellish, or enhance the visual appeal of something. It acts as the exact synonym for 'GARNISH'.\n\n• D) Spoil: Means to ruin or damage quality, directly opposing ornamentation."
    },
    {
        id: "vocab_amplify_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAMPLIFY",
        options: ["A) Understate", "B) Belittle", "C) Blemish", "D) Magnify"],
        correct: "D",
        explanation: "• A) Understate: Means to present something as lesser in degree or size, serving as a direct antonym.\n\n• B) Belittle: Means to make something seem small or unimportant, acting as a direct antonym.\n\n• C) Blemish: Refers to a defect or flaw, contextually irrelevant to increasing volume or scope.\n\n• D) Magnify (Correct Answer): Means to make something larger, louder, or more intense in degree or size. It serves as the exact synonym for 'AMPLIFY'."
    },
    {
        id: "vocab_deck_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDECK",
        options: ["A) Decorate", "B) Deface", "C) Spoil", "D) Belittle"],
        correct: "A",
        explanation: "• A) Decorate (Correct Answer): Means to adorn, furnish, or embellish something visually to make it look attractive. It serves as an exact synonym for 'DECK' when used in the context of decoration.\n\n• B) Deface: Means to spoil, disfigure, or intentionally mar the external appearance of an object, acting as a direct antonym.\n\n• C) Spoil: Means to ruin the quality, value, or beauty of something, directly opposing the act of decorating.\n\n• D) Belittle: Means to make an individual or idea seem small, dismissable, or unimportant, which is contextually unrelated to visual embellishment."
    },
    {
        id: "vocab_adorn_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nADORN",
        options: ["A) Deface", "B) Embellish", "C) Blemish", "D) Understate"],
        correct: "B",
        explanation: "• A) Deface: Means to damage or spoil the external appearance of something, serving as a direct antonym to beautification.\n\n• B) Embellish (Correct Answer): Means to make something more beautiful or appealing by adding decorative elements or ornaments. It acts as an exact synonym for 'ADORN'.\n\n• C) Blemish: Refers to marking or spoiling the perfection of a surface with a flaw, directly opposing decoration.\n\n• D) Understate: Means to represent or state something as less prominent or important than it truly is, contextually irrelevant."
    },
    {
        id: "vocab_ornament_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nORNAMENT",
        options: ["A) Spoil", "B) Blemish", "C) Beautify", "D) Belittle"],
        correct: "C",
        explanation: "• A) Spoil: Means to diminish the quality or ruin the appearance of something, serving as a direct antonym.\n\n• B) Blemish: Means to introduce a defect or mark that ruins visual harmony, acting as an antonym to ornamentation.\n\n• C) Beautify (Correct Answer): Means to enhance the visual appeal or aesthetic quality of an object by adding pleasing features. It acts as the exact synonym for 'ORNAMENT'.\n\n• D) Belittle: Means to disparage or speak dismissively of something's value, which is contextually unrelated to aesthetic visual additions."
    },
    {
        id: "vocab_spoil_ant_ext",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nSPOIL",
        options: ["A) Deface", "B) Blemish", "C) Understate", "D) Decorate"],
        correct: "D",
        explanation: "• A) Deface: Means to mar or damage the visible surface of an object, functioning as a synonym for SPOIL.\n\n• B) Blemish: Means to ruin or mark with a defect, serving as a contextual synonym.\n\n• C) Understate: Means to present something in a understated or minimized manner, contextually irrelevant.\n\n• D) Decorate (Correct Answer): Means to enhance the appearance and aesthetic beauty of something. Because 'SPOIL' means to ruin or disfigure, 'Decorate' serves as its precise, direct antonym."
    },
    {
        id: "vocab_understate_ant_ext",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nUNDERSTATE",
        options: ["A) Amplify", "B) Belittle", "C) Deface", "D) Blemish"],
        correct: "A",
        explanation: "• A) Amplify (Correct Answer): Means to enlarge, increase, or emphasize the magnitude, scale, or significance of a statement or situation. It acts as the direct antonym for 'UNDERSTATE'.\n\n• B) Belittle: Means to represent something as small or insignificant, functioning as a contextual synonym.\n\n• C) Deface: Means to physically ruin or disfigure an surface, contextually irrelevant.\n\n• D) Blemish: Refers to introducing a physical or moral flaw, contextually irrelevant."
    },
    {
        id: "vocab_lavish_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nLAVISH",
        options: ["A) Frugal", "B) Extravagant", "C) Niggardly", "D) Penurious"],
        correct: "B",
        explanation: "• A) Frugal: Describes someone who is careful and economical with money, serving as a direct antonym to lavish spending.\n\n• B) Extravagant (Correct Answer): Describes spending money, using resources, or bestowing items far beyond reasonable necessity. It serves as an exact synonym for 'LAVISH'.\n\n• C) Niggardly: Describes being excessively stingy or ungenerous, directly opposing lavish behavior.\n\n• D) Penurious: Describes living in severe poverty or being extremely miserly, serving as a direct antonym."
    },
    {
        id: "vocab_extravagant_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nEXTRAVAGANT",
        options: ["A) Economical", "B) Frugal", "C) Spendthrift", "D) Thrifty"],
        correct: "C",
        explanation: "• A) Economical: Describes practicing careful expenditure to avoid waste, serving as a direct antonym.\n\n• B) Frugal: Describes living modestly and avoiding unnecessary costs, acting as a direct antonym.\n\n• C) Spendthrift (Correct Answer): Refers to someone who spends money in an irresponsible, wasteful, or unchecked manner. It acts as an exact synonym for 'EXTRAVAGANT'.\n\n• D) Thrifty: Describes managing financial resources with wisdom and care, acting as a direct antonym."
    },
    {
        id: "vocab_unthrifty_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nUNTHRIFTY",
        options: ["A) Economical", "B) Wasteful", "C) Frugal", "D) Parsimonious"],
        correct: "B",
        explanation: "• A) Economical: Describes being prudent and avoiding wasteful financial habits, direct antonym.\n\n• B) Wasteful (Correct Answer): Describes using money, time, or resources carelessly and without thought for future needs. It functions as the exact synonym for 'UNTHRIFTY'.\n\n• C) Frugal: Describes exercising thrift and careful management, acting as a direct antonym.\n\n• D) Parsimonious: Describes extreme reluctance to spend money, acting as an antonym to careless spending."
    },
    {
        id: "vocab_frugal_ant_ext",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nFRUGAL",
        options: ["A) Thrifty", "B) Conserving", "C) Extravagant", "D) Parsimonious"],
        correct: "C",
        explanation: "• A) Thrifty: Describes practicing financial wisdom and moderation, serving as a direct synonym for FRUGAL.\n\n• B) Conserving: Describes saving and avoiding waste of resources, functioning as a contextual synonym.\n\n• C) Extravagant (Correct Answer): Describes spending money recklessly or in excessive amounts. Since 'FRUGAL' means economical and careful with expenses, 'Extravagant' serves as its precise antonym.\n\n• D) Parsimonious: Describes extreme stinginess, which represents an exaggerated form of frugal behavior rather than an opposite."
    },
    {
        id: "vocab_thrifty_ant_ext",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nTHRIFTY",
        options: ["A) Unthrifty", "B) Frugal", "C) Economical", "D) Conserving"],
        correct: "A",
        explanation: "• A) Unthrifty (Correct Answer): Describes being wasteful, careless, or irresponsible with financial and material resources. It acts as the direct, precise antonym for 'THRIFTY'.\n\n• B) Frugal: Describes avoiding unnecessary spending, functioning as a synonym.\n\n• C) Economical: Describes practicing prudent management, functioning as a direct synonym.\n\n• D) Conserving: Describes protecting and saving resources, serving as a synonym."
    },
    {
        id: "vocab_parsimonious_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPARSIMONIOUS",
        options: ["A) Extravagant", "B) Stingy", "C) Lavish", "D) Profuse"],
        correct: "B",
        explanation: "• A) Extravagant: Describes spending excessively and carelessly, serving as a direct antonym.\n\n• B) Stingy (Correct Answer): Describes an extreme unwillingness to spend money or share resources. It serves as an exact synonym for 'PARSIMONIOUS'.\n\n• C) Lavish: Describes giving or spending in huge, luxurious amounts, direct antonym.\n\n• D) Profuse: Describes existing or offered in generous abundance, directly opposing miserly restraint."
    },
    {
        id: "vocab_negate_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nNEGATE",
        options: ["A) Affirm", "B) Corroborate", "C) Nullify", "D) Confirm"],
        correct: "C",
        explanation: "• A) Affirm: Means to state strongly or confirm the truth of a statement, serving as a direct antonym.\n\n• B) Corroborate: Means to support or validate an assertion with evidence, directly opposing cancellation.\n\n• C) Nullify (Correct Answer): Means to make legally void, invalidate, or neutralize the effect of something. It acts as the exact synonym for 'NEGATE'.\n\n• D) Confirm: Means to establish the truth or validity of something, serving as an antonym."
    },
    {
        id: "vocab_disclaim_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDISCLAIM",
        options: ["A) Claim", "B) Deny", "C) Accept", "D) Espouse"],
        correct: "B",
        explanation: "• A) Claim: Means to state ownership or responsibility for something, acting as a direct antonym.\n\n• B) Deny (Correct Answer): Means to refuse to acknowledge, accept, or maintain connection with a claim or responsibility. It serves as an exact synonym for 'DISCLAIM'.\n\n• C) Accept: Means to take or receive something willingly, directly opposing disclaiming.\n\n• D) Espouse: Means to embrace or support a cause or belief, acting as an antonym."
    },
    {
        id: "vocab_renounce_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nRENOUNCE",
        options: ["A) Relinquish", "B) Espouse", "C) Accept", "D) Adopt"],
        correct: "A",
        explanation: "• A) Relinquish (Correct Answer): Means to formally give up, surrender, or abandon a claim, right, or position. It functions as an exact synonym for 'RENOUNCE'.\n\n• B) Espouse: Means to support or adopt a cause or belief, acting as a direct antonym.\n\n• C) Accept: Means to receive or agree to something willingly, opposing relinquishment.\n\n• D) Adopt: Means to take up or follow an idea or position, serving as an antonym."
    },
    {
        id: "vocab_affirm_ant_ext",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nAFFIRM",
        options: ["A) Corroborate", "B) Avow", "C) Support", "D) Deny"],
        correct: "D",
        explanation: "• A) Corroborate: Means to support with evidence, functioning as a synonym for AFFIRM.\n\n• B) Avow: Means to assert or declare openly, serving as a synonym.\n\n• C) Support: Means to give backing or approval to an assertion, functioning as a synonym.\n\n• D) Deny (Correct Answer): Means to state that an assertion is untrue or to refuse to accept responsibility. Because 'AFFIRM' means to declare positively as true, 'Deny' serves as its precise antonym."
    },
    {
        id: "vocab_clubby_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCLUBBY",
        options: ["A) Aloof", "B) Sociable", "C) Reticent", "D) Solitary"],
        correct: "B",
        explanation: "• A) Aloof: Describes being distant, emotionally cold, or detached, serving as a direct antonym.\n\n• B) Sociable (Correct Answer): Describes being friendly, welcoming, and enjoying warm social interactions within a group. It acts as an exact synonym for 'CLUBBY'.\n\n• C) Reticent: Describes being quiet and hesitant to share thoughts, opposing a friendly group-oriented demeanor.\n\n• D) Solitary: Describes existing or doing things completely alone, directly opposing clubby behavior."
    },
    {
        id: "vocab_extroverted_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nEXTROVERTED",
        options: ["A) Introverted", "B) Taciturn", "C) Outgoing", "D) Reticent"],
        correct: "C",
        explanation: "• A) Introverted: Describes being inward-looking, quiet, and reserved, serving as the direct antonym.\n\n• B) Taciturn: Describes being habitually silent and uncommunicative, directly opposing extroversion.\n\n• C) Outgoing (Correct Answer): Describes being socially confident, expressive, and energized by interactions with others. It functions as the precise synonym for 'EXTROVERTED'.\n\n• D) Reticent: Describes holding back speech and thoughts, serving as an antonym."
    },
    {
        id: "vocab_precocial_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPRECOCIAL",
        options: ["A) Advanced", "B) Retarded", "C) Slow", "D) Aloof"],
        correct: "A",
        explanation: "• A) Advanced (Correct Answer): Describes showing unusually early development, maturity, or skills at a young age. In biological and general vocabulary, it serves as an exact synonym for 'PRECOCIAL'.\n\n• B) Retarded: Describes delayed or slowed development, functioning as a direct antonym.\n\n• C) Slow: Describes lacking speed or rapid mental/physical growth, serving as an antonym.\n\n• D) Aloof: Describes emotional distance or detachment, contextually irrelevant."
    },
    {
        id: "vocab_colonial_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCOLONIAL",
        options: ["A) Solitary", "B) Communal", "C) Reclusive", "D) Taciturn"],
        correct: "B",
        explanation: "• A) Solitary: Describes living or acting entirely alone, serving as a direct antonym in biological contexts.\n\n• B) Communal (Correct Answer): Describes living, growing, or functioning together in connected groups or colonies. It acts as the exact synonym for 'COLONIAL'.\n\n• C) Reclusive: Describes intentionally avoiding company and living in isolation, serving as an antonym.\n\n• D) Taciturn: Describes being quiet and uncommunicative, contextually irrelevant."
    },
    {
        id: "vocab_cordial_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCORDIAL",
        options: ["A) Hostile", "B) Aloof", "C) Amicable", "D) Cold"],
        correct: "C",
        explanation: "• A) Hostile: Describes aggressive, unfriendly, or antagonistic behavior, serving as a direct antonym.\n\n• B) Aloof: Describes being cool, distant, and unapproachable, serving as an antonym.\n\n• C) Amicable (Correct Answer): Describes warmth, friendliness, and a pleasant, accommodating manner. It serves as an exact synonym for 'CORDIAL'.\n\n• D) Cold: Describes lacking affection, warmth, or emotion, acting as a direct antonym."
    },
    {
        id: "vocab_affable_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAFFABLE",
        options: ["A) Unapproachable", "B) Aloof", "C) Reticent", "D) Genial"],
        correct: "D",
        explanation: "• A) Unapproachable: Describes being intimidating or difficult to talk to, serving as a direct antonym.\n\n• B) Aloof: Describes emotional distance and detachment, directly opposing an inviting personality.\n\n• C) Reticent: Describes being quiet and reserved in speech, contextually distinct from warmth.\n\n• D) Genial (Correct Answer): Describes being friendly, pleasant, warm-hearted, and easy to converse with. It functions as the exact synonym for 'AFFABLE'."
    },
    {
        id: "vocab_amiable_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAMIABLE",
        options: ["A) Hostile", "B) Pleasant", "C) Taciturn", "D) Antisocial"],
        correct: "B",
        explanation: "• A) Hostile: Describes showing ill will or aggressive opposition, serving as a direct antonym.\n\n• B) Pleasant (Correct Answer): Describes having an agreeable, friendly, and warm-hearted disposition. It acts as an exact synonym for 'AMIABLE'.\n\n• C) Taciturn: Describes being quiet and uncommunicative, contextually distinct from friendliness.\n\n• D) Antisocial: Describes actively avoiding or opposing social interaction, acting as a direct antonym."
    },
    {
        id: "vocab_introverted_ant_ext",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nINTROVERTED",
        options: ["A) Reticent", "B) Taciturn", "C) Extroverted", "D) Aloof"],
        correct: "C",
        explanation: "• A) Reticent: Describes being reserved and hesitant to speak, serving as a synonym.\n\n• B) Taciturn: Describes being quiet and disinclined to talk, functioning as a contextual synonym.\n\n• C) Extroverted (Correct Answer): Describes being outgoing, socially expressive, and energized by group interactions. It functions as the direct, exact antonym for 'INTROVERTED'.\n\n• D) Aloof: Describes emotional detachment, functioning as a contextual synonym."
    },
    {
        id: "vocab_induce_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nINDUCE",
        options: ["A) Prevent", "B) Stop", "C) Quell", "D) Prompt"],
        correct: "D",
        explanation: "• A) Prevent: Means to keep an event from occurring, serving as a direct antonym.\n\n• B) Stop: Means to halt or put an end to an action, acting as a direct antonym.\n\n• C) Quell: Means to suppress or quiet a disturbance, serving as an antonym.\n\n• D) Prompt (Correct Answer): Means to bring about, persuade, encourage, or give rise to an action or feeling. It acts as an exact synonym for 'INDUCE'."
    },
    {
        id: "vocab_invoke_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nINVOKE",
        options: ["A) Summon", "B) Suppress", "C) Quell", "D) Restrict"],
        correct: "A",
        explanation: "• A) Summon (Correct Answer): Means to call upon, appeal to, or cite an authority, spirit, or law for aid or evidence. It functions as the precise synonym for 'INVOKE'.\n\n• B) Suppress: Means to forcibly subdue or keep down, directly opposing calling forth.\n\n• C) Quell: Means to put an end to or quiet down, serving as an antonym.\n\n• D) Restrict: Means to place boundaries or limits on something, contextually distinct."
    },
    {
        id: "vocab_spawn_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSPAWN",
        options: ["A) Destroy", "B) Produce", "C) Suppress", "D) Halt"],
        correct: "B",
        explanation: "• A) Destroy: Means to ruin or completely eliminate something, acting as a direct antonym.\n\n• B) Produce (Correct Answer): Means to generate, create, or bring forth into existence in large numbers. It serves as an exact synonym for 'SPAWN'.\n\n• C) Suppress: Means to crush or hold back growth, acting as a direct antonym.\n\n• D) Halt: Means to bring to an immediate stop, directly opposing creation."
    },
    {
        id: "vocab_yield_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nYIELD",
        options: ["A) Restrict", "B) Impede", "C) Generate", "D) Suppress"],
        correct: "C",
        explanation: "• A) Restrict: Means to confine or limit within boundaries, contextually unrelated to production.\n\n• B) Impede: Means to obstruct or delay progress, serving as an antonym to yielding results.\n\n• C) Generate (Correct Answer): Means to produce, provide, or give forth a result, crop, or financial return. It acts as an exact synonym for 'YIELD'.\n\n• D) Suppress: Means to forcibly hold back or extinguish, directly opposing production."
    },
    {
        id: "vocab_impede_ant_ext",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nIMPEDE",
        options: ["A) Restrict", "B) Facilitate", "C) Quell", "D) Crush"],
        correct: "B",
        explanation: "• A) Restrict: Means to put limits on an action, functioning as a contextual synonym for IMPEDE.\n\n• B) Facilitate (Correct Answer): Means to make an action or process easy, smooth, or free of obstacles. Since 'IMPEDE' means to delay or obstruct, 'Facilitate' acts as its direct antonym.\n\n• C) Quell: Means to suppress or quiet down, contextually distinct.\n\n• D) Crush: Means to compress or smash with force, contextually irrelevant."
    },
    {
        id: "vocab_rebuke_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nREBUKE",
        options: ["A) Compliment", "B) Praise", "C) Honor", "D) Reprimand"],
        correct: "D",
        explanation: "• A) Compliment: Refers to expressing praise, admiration, or approval, serving as a direct antonym.\n\n• B) Praise: Refers to expressing formal approval or commendation, acting as an antonym.\n\n• C) Honor: Means to treat with high respect and distinction, directly opposing scolding.\n\n• D) Reprimand (Correct Answer): Refers to expressing sharp, stern disapproval or criticism to someone for their behavior. It functions as an exact synonym for 'REBUKE'."
    },
    {
        id: "vocab_chide_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCHIDE",
        options: ["A) Scold", "B) Praise", "C) Extol", "D) Commend"],
        correct: "A",
        explanation: "• A) Scold (Correct Answer): Means to express disapproval, reprimand, or scold someone gently to firmly. It acts as the precise synonym for 'CHIDE'.\n\n• B) Praise: Means to express approval or admiration, functioning as a direct antonym.\n\n• C) Extol: Means to praise enthusiastically or glorify, serving as an antonym.\n\n• D) Commend: Means to praise formally or officially, directly opposing scolding."
    },
    {
        id: "vocab_reproach_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nREPROACH",
        options: ["A) Praise", "B) Disapprove", "C) Honor", "D) Applaud"],
        correct: "B",
        explanation: "• A) Praise: Means to express approval or admiration, functioning as a direct antonym.\n\n• B) Disapprove (Correct Answer): Means to express criticism, fault, or disappointment regarding someone's actions. It serves as an exact synonym for 'REPROACH'.\n\n• C) Honor: Means to accord high respect and distinction, serving as a direct antonym.\n\n• D) Applaud: Means to cheer or commend publicly, acting as an antonym."
    },
    {
        id: "vocab_reprimand_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nREPRIMAND",
        options: ["A) Commendation", "B) Praise", "C) Rebuke", "D) Honor"],
        correct: "C",
        explanation: "• A) Commendation: Refers to a formal statement of praise or award, serving as a direct antonym.\n\n• B) Praise: Refers to approval and commendation, directly opposing criticism.\n\n• C) Rebuke (Correct Answer): Refers to a severe, formal expression of disapproval or scolding. It functions as the exact synonym for 'REPRIMAND'.\n\n• D) Honor: Refers to high respect, prestige, or distinction, acting as a direct antonym."
    },
    // ==========================================
    // 1. ADULATION (Main Word)
    // ==========================================
    {
        id: "vocab_adulation_syn_1",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nADULATION",
        options: ["A) Condemnation", "B) Flattery", "C) Disregard", "D) Detraction"],
        correct: "B",
        explanation: "• A) Condemnation: Refers to an expression of strong disapproval, formal criticism, or harsh censure. It acts as a direct antonym to praising someone excessively.\n\n• B) Flattery (Correct Answer): Refers to excessive, exaggerated, or insincere praise given to someone to gain favor. It serves as an exact synonym for 'ADULATION'.\n\n• C) Disregard: Refers to paying no attention to or ignoring someone's feelings or presence, acting as an antonym to admiration.\n\n• D) Detraction: Refers to the act of taking away from a person's reputation or merit, standing in direct contrast to excessive praise."
    },
    {
        id: "vocab_adulation_ant_1",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nADULATION",
        options: ["A) Glorification", "B) Veneration", "C) Criticism", "D) Adoration"],
        correct: "C",
        explanation: "• A) Glorification: Refers to the act of praising or honoring someone in an exaggerated way, functioning as a direct synonym for ADULATION.\n\n• B) Veneration: Refers to treating someone with profound respect and reverence, functioning as a synonym.\n\n• C) Criticism (Correct Answer): Refers to the expression of disapproval or pointing out faults. Since 'ADULATION' means excessive praise, 'Criticism' serves as its direct antonym.\n\n• D) Adoration: Refers to deep love, respect, and admiration for an individual, serving as a synonym."
    },
    {
        id: "vocab_adulation_fitb",
        type: "Fill in the Blank",
        question: "Select the most appropriate option to fill in the blank:\n'The young pop star found it difficult to handle the constant __________ of millions of fans.'",
        options: ["A) adulation", "B) loathing", "C) disparagement", "D) belittlement"],
        correct: "A",
        explanation: "• A) adulation (Correct Answer): Fits the context perfectly as fans show extreme admiration, worship, and flattery toward celebrity figures.\n\n• B) loathing: Means intense hatred or disgust, which contradicts the supportive nature of passionate fans.\n\n• C) disparagement: Means derogatory criticism or speaking ill of someone, contextually inappropriate for celebrity fans.\n\n• D) belittlement: Means making someone feel unimportant or worthless, opposing fan admiration."
    },

    // ==========================================
    // 2. IDOLATRY
    // ==========================================
    {
        id: "vocab_idolatry_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nIDOLATRY",
        options: ["A) Devotion", "B) Contempt", "C) Scorn", "D) Disdain"],
        correct: "A",
        explanation: "• A) Devotion (Correct Answer): Refers to extreme admiration, love, or spiritual worship given to a person or object. It acts as an exact synonym for 'IDOLATRY'.\n\n• B) Contempt: Refers to the feeling that a person or entity is beneath consideration or worthless, acting as a direct antonym.\n\n• C) Scorn: Refers to expressing open hatred or contempt toward someone, serving as an antonym.\n\n• D) Disdain: Refers to regarding someone with disgust or disrespect, directly opposing worshipful admiration."
    },
    {
        id: "vocab_idolatry_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nIDOLATRY",
        options: ["A) Idolization", "B) Scepticism", "C) Worship", "D) Deification"],
        correct: "B",
        explanation: "• A) Idolization: Refers to treating someone with blind admiration and worship, serving as a direct synonym for IDOLATRY.\n\n• B) Scepticism (Correct Answer): Refers to a doubting, critical, or questioning attitude toward claims or revered figures. It acts as a precise antonym to blind worship or idolatry.\n\n• C) Worship: Refers to showing deep reverence or devotion, functioning as a direct synonym.\n\n• D) Deification: Refers to elevating a human to god-like status, serving as a synonym."
    },

    // ==========================================
    // 3. IDOLIZATION
    // ==========================================
    {
        id: "vocab_idolization_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nIDOLIZATION",
        options: ["A) Disparagement", "B) Admiration", "C) Condemnation", "D) Detraction"],
        correct: "B",
        explanation: "• A) Disparagement: Refers to speaking insultingly to diminish someone's merit, acting as a direct antonym.\n\n• B) Admiration (Correct Answer): Refers to regarding someone with high approval, respect, and affection. It acts as a precise synonym for 'IDOLIZATION'.\n\n• C) Condemnation: Refers to public expression of harsh judgment or disapproval, directly opposing idolization.\n\n• D) Detraction: Refers to taking away value or reputation from someone's standing, acting as an antonym."
    },
    {
        id: "vocab_idolization_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nIDOLIZATION",
        options: ["A) Adoration", "B) Worship", "C) Reverence", "D) Disdain"],
        correct: "D",
        explanation: "• A) Adoration: Refers to deep love and respect, functioning as a direct synonym for IDOLIZATION.\n\n• B) Worship: Refers to showing deep reverence or religious devotion, functioning as a synonym.\n\n• C) Reverence: Refers to deep respect and awe, functioning as a synonym.\n\n• D) Disdain (Correct Answer): Refers to a feeling of contempt or considering someone unworthy of respect, serving as the direct antonym for IDOLIZATION."
    },

    // ==========================================
    // 4. DEIFICATION
    // ==========================================
    {
        id: "vocab_deification_syn_2",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEIFICATION",
        options: ["A) Exaltation", "B) Degradation", "C) Humiliation", "D) Disregard"],
        correct: "A",
        explanation: "• A) Exaltation (Correct Answer): Refers to raising someone to a god-like status or praising them to the highest degree. It functions as an exact synonym for 'DEIFICATION'.\n\n• B) Degradation: Refers to lowering someone's rank, character, or moral dignity, acting as a direct antonym.\n\n• C) Humiliation: Refers to causing someone public embarrassment or loss of self-respect, directly opposing god-like elevation.\n\n• D) Disregard: Refers to paying no attention or respect to someone, serving as an antonym."
    },
    {
        id: "vocab_deification_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDEIFICATION",
        options: ["A) Glorification", "B) Elevation", "C) Degradation", "D) Worship"],
        correct: "C",
        explanation: "• A) Glorification: Refers to praising or honoring someone excessively, functioning as a synonym for DEIFICATION.\n\n• B) Elevation: Refers to raising someone in status or rank, functioning as a synonym.\n\n• C) Degradation (Correct Answer): Refers to the act of lowering someone in honor, status, or dignity. Since 'DEIFICATION' means raising someone to divine status, 'Degradation' acts as its direct antonym.\n\n• D) Worship: Refers to reverence given to a divine figure, serving as a synonym."
    },

    // ==========================================
    // 5. WORSHIP
    // ==========================================
    {
        id: "vocab_worship_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nWORSHIP",
        options: ["A) Scorn", "B) Reverence", "C) Mockery", "D) Insult"],
        correct: "B",
        explanation: "• A) Scorn: Refers to expressing contempt or disgust toward an entity, acting as a direct antonym.\n\n• B) Reverence (Correct Answer): Refers to deep respect, awe, and religious honor shown toward an authority or deity. It acts as an exact synonym for 'WORSHIP'.\n\n• C) Mockery: Refers to ridiculing or making fun of someone, opposing sacred devotion.\n\n• D) Insult: Refers to speaking disrespectfully to cause offense, serving as an antonym."
    },
    {
        id: "vocab_worship_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nWORSHIP",
        options: ["A) Veneration", "B) Homage", "C) Scorn", "D) Adoration"],
        correct: "C",
        explanation: "• A) Veneration: Refers to profound respect and honor, functioning as a synonym for WORSHIP.\n\n• B) Homage: Refers to special honor or respect shown publicly, serving as a synonym.\n\n• C) Scorn (Correct Answer): Refers to open contempt or hatred toward someone. It acts as the direct antonym for 'WORSHIP'.\n\n• D) Adoration: Refers to deep love and devotion, functioning as a synonym."
    },

    // ==========================================
    // 6. ADORATION
    // ==========================================
    {
        id: "vocab_adoration_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nADORATION",
        options: ["A) Hatred", "B) Devotion", "C) Antipathy", "D) Animosity"],
        correct: "B",
        explanation: "• A) Hatred: Refers to intense dislike or ill will, acting as a direct antonym to deep affection.\n\n• B) Devotion (Correct Answer): Refers to deep affection, love, and spiritual respect for someone. It functions as an exact synonym for 'ADORATION'.\n\n• C) Antipathy: Refers to a deep-seated feeling of aversion or dislike, serving as an antonym.\n\n• D) Animosity: Refers to strong hostility or active hatred, opposing loving affection."
    },
    {
        id: "vocab_adoration_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nADORATION",
        options: ["A) Affection", "B) Devotion", "C) Hatred", "D) Veneration"],
        correct: "C",
        explanation: "• A) Affection: Refers to a feeling of liking or fondness, functioning as a synonym for ADORATION.\n\n• B) Devotion: Refers to strong love and loyalty, serving as a synonym.\n\n• C) Hatred (Correct Answer): Refers to intense hostility and aversion. Since 'ADORATION' means deep love and reverence, 'Hatred' acts as its direct antonym.\n\n• D) Veneration: Refers to deep respect, functioning as a synonym."
    },

    // ==========================================
    // 7. REVERENCE
    // ==========================================
    {
        id: "vocab_reverence_syn_2",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nREVERENCE",
        options: ["A) Awe", "B) Disrespect", "C) Contempt", "D) Impudence"],
        correct: "A",
        explanation: "• A) Awe (Correct Answer): Refers to a feeling of reverential respect mixed with fear or wonder toward an authority. It serves as an exact synonym for 'REVERENCE'.\n\n• B) Disrespect: Refers to a lack of respect or polite behavior, acting as a direct antonym.\n\n• C) Contempt: Refers to regarding someone as worthless or beneath notice, direct antonym.\n\n• D) Impudence: Refers to insolent or disrespectful behavior, serving as an antonym."
    },
    {
        id: "vocab_reverence_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nREVERENCE",
        options: ["A) Esteem", "B) Honor", "C) Disrespect", "D) Deference"],
        correct: "C",
        explanation: "• A) Esteem: Refers to high respect and admiration, functioning as a synonym for REVERENCE.\n\n• B) Honor: Refers to high respect and distinction, serving as a synonym.\n\n• C) Disrespect (Correct Answer): Refers to lack of respect or courtesy. Since 'REVERENCE' means deep awe and respect, 'Disrespect' serves as its precise antonym.\n\n• D) Deference: Refers to polite submission and respect, functioning as a synonym."
    },

    // ==========================================
    // 8. VENERATION
    // ==========================================
    {
        id: "vocab_veneration_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nVENERATION",
        options: ["A) Disregard", "B) Honor", "C) Vilification", "D) Derogation"],
        correct: "B",
        explanation: "• A) Disregard: Refers to ignoring or treating someone with indifference, acting as a direct antonym.\n\n• B) Honor (Correct Answer): Refers to showing high respect, prestige, or reverence to an elder or noble leader. It functions as an exact synonym for 'VENERATION'.\n\n• C) Vilification: Refers to speaking ill of or defaming someone maliciously, directly opposing honor.\n\n• D) Derogation: Refers to the perception that someone lacks worth, acting as an antonym."
    },
    {
        id: "vocab_veneration_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nVENERATION",
        options: ["A) Homage", "B) Respect", "C) Contempt", "D) Reverence"],
        correct: "C",
        explanation: "• A) Homage: Refers to formal respect or honor shown publicly, functioning as a synonym for VENERATION.\n\n• B) Respect: Refers to due regard for feelings or rights, serving as a synonym.\n\n• C) Contempt (Correct Answer): Refers to the feeling that a person is beneath consideration or worthless. It acts as the direct antonym for 'VENERATION'.\n\n• D) Reverence: Refers to deep awe and honor, functioning as a synonym."
    },

    // ==========================================
    // 9. GLORIFICATION
    // ==========================================
    {
        id: "vocab_glorification_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nGLORIFICATION",
        options: ["A) Praise", "B) Disparagement", "C) Condemnation", "D) Slander"],
        correct: "A",
        explanation: "• A) Praise (Correct Answer): Refers to expressing warm approval, honor, or commendation for someone's achievements. It serves as an exact synonym for 'GLORIFICATION'.\n\n• B) Disparagement: Refers to speaking deprecatingly about someone, serving as a direct antonym.\n\n• C) Condemnation: Refers to harsh criticism or censure, directly opposing glorification.\n\n• D) Slander: Refers to making false spoken statements damaging to a reputation, acting as an antonym."
    },
    {
        id: "vocab_glorification_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nGLORIFICATION",
        options: ["A) Exaltation", "B) Tribute", "C) Vilification", "D) Commendation"],
        correct: "C",
        explanation: "• A) Exaltation: Refers to raising high in honor or praise, functioning as a synonym for GLORIFICATION.\n\n• B) Tribute: Refers to an act or statement intended to show gratitude or respect, functioning as a synonym.\n\n• C) Vilification (Correct Answer): Refers to abusively disparaging or speaking ill of someone. Since 'GLORIFICATION' means praising and honoring, 'Vilification' acts as its direct antonym.\n\n• D) Commendation: Refers to formal praise, serving as a synonym."
    },

    // ==========================================
    // 10. CONDEMNATION
    // ==========================================
    {
        id: "vocab_condemnation_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCONDEMNATION",
        options: ["A) Approval", "B) Censure", "C) Endorsement", "D) Acclaim"],
        correct: "B",
        explanation: "• A) Approval: Refers to regarding something as acceptable or good, acting as a direct antonym.\n\n• B) Censure (Correct Answer): Refers to the formal expression of severe disapproval or criticism. It serves as an exact synonym for 'CONDEMNATION'.\n\n• C) Endorsement: Refers to publicly declaring support or approval for an action, acting as an antonym.\n\n• D) Acclaim: Refers to enthusiastic public praise, directly opposing condemnation."
    },
    {
        id: "vocab_condemnation_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nCONDEMNATION",
        options: ["A) Denunciation", "B) Reproof", "C) Approval", "D) Criticism"],
        correct: "C",
        explanation: "• A) Denunciation: Refers to public condemnation of someone or something, serving as a direct synonym for CONDEMNATION.\n\n• B) Reproof: Refers to an expression of blame or disapproval, functioning as a synonym.\n\n• C) Approval (Correct Answer): Refers to the feeling or declaration that something is good and acceptable. It functions as the direct antonym for 'CONDEMNATION'.\n\n• D) Criticism: Refers to pointing out faults or disapproval, serving as a synonym."
    },

    // ==========================================
    // 11. DISREGARD
    // ==========================================
    {
        id: "vocab_disregard_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDISREGARD",
        options: ["A) Attention", "B) Inattention", "C) Consideration", "D) Mindfulness"],
        correct: "B",
        explanation: "• A) Attention: Refers to directing thoughts or presence toward an object, serving as a direct antonym.\n\n• B) Inattention (Correct Answer): Refers to lack of consideration, care, or focus given to an entity. It serves as an exact synonym for 'DISREGARD'.\n\n• C) Consideration: Refers to careful thought and respect for others, acting as a direct antonym.\n\n• D) Mindfulness: Refers to being conscious or aware of something, directly opposing ignoring it."
    },
    {
        id: "vocab_disregard_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDISREGARD",
        options: ["A) Neglect", "B) Indifference", "C) Attention", "D) Omission"],
        correct: "C",
        explanation: "• A) Neglect: Refers to failing to care for or pay attention to something, functioning as a synonym for DISREGARD.\n\n• B) Indifference: Refers to lack of interest or concern, serving as a contextual synonym.\n\n• C) Attention (Correct Answer): Refers to notice, care, or mental focus directed toward someone. It acts as the direct antonym for 'DISREGARD'.\n\n• D) Omission: Refers to leaving something out, functioning as a contextual synonym."
    },

    // ==========================================
    // 12. LOATHING
    // ==========================================
    {
        id: "vocab_loathing_syn_2",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nLOATHING",
        options: ["A) Affection", "B) Abhorrence", "C) Fondness", "D) Admiration"],
        correct: "B",
        explanation: "• A) Affection: Refers to a gentle feeling of fondness or liking, serving as a direct antonym.\n\n• B) Abhorrence (Correct Answer): Refers to a feeling of intense revulsion, disgust, and hatred. It functions as an exact synonym for 'LOATHING'.\n\n• C) Fondness: Refers to affection or liking for someone, directly opposing hatred.\n\n• D) Admiration: Refers to high regard and respect, acting as a direct antonym."
    },
    {
        id: "vocab_loathing_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nLOATHING",
        options: ["A) Aversion", "B) Detestation", "C) Affection", "D) Revulsion"],
        correct: "C",
        explanation: "• A) Aversion: Refers to a strong dislike or disinclination, serving as a synonym for LOATHING.\n\n• B) Detestation: Refers to intense hatred, functioning as a direct synonym.\n\n• C) Affection (Correct Answer): Refers to a feeling of fondness, warmth, or love. Since 'LOATHING' denotes extreme disgust and hatred, 'Affection' acts as its direct antonym.\n\n• D) Revulsion: Refers to a sense of disgust and loathing, serving as a synonym."
    },

    // ==========================================
    // 13. DISPARAGEMENT
    // ==========================================
    {
        id: "vocab_disparagement_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDISPARAGEMENT",
        options: ["A) Derogation", "B) Praise", "C) Commendation", "D) Praise"],
        correct: "A",
        explanation: "• A) Derogation (Correct Answer): Refers to the act of treating or speaking of someone in a critical, degrading manner. It acts as an exact synonym for 'DISPARAGEMENT'.\n\n• B) Praise: Refers to expressing warm approval, serving as a direct antonym.\n\n• C) Commendation: Refers to formal praise or award, directly opposing disparagement.\n\n• D) Eulogy: Refers to high praise written for someone, serving as a direct antonym."
    },
    {
        id: "vocab_disparagement_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDISPARAGEMENT",
        options: ["A) Depreciation", "B) Belittlement", "C) Commendation", "D) Denigration"],
        correct: "C",
        explanation: "• A) Depreciation: Refers to a reduction in value or disparaging statements, serving as a synonym.\n\n• B) Belittlement: Refers to making someone seem small, functioning as a direct synonym for DISPARAGEMENT.\n\n• C) Commendation (Correct Answer): Refers to formal praise, approval, or recommendation. It serves as the exact antonym for 'DISPARAGEMENT'.\n\n• D) Denigration: Refers to unfairly criticizing or belittling, serving as a synonym."
    },

    // ==========================================
    // 14. DETRACTION
    // ==========================================
    {
        id: "vocab_detraction_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDETRACTION",
        options: ["A) Depreciation", "B) Elevation", "C) Enhancement", "D) Praise"],
        correct: "A",
        explanation: "• A) Depreciation (Correct Answer): Refers to taking away from the estimated value, merit, or reputation of an entity. It serves as an exact synonym for 'DETRACTION'.\n\n• B) Elevation: Refers to raising someone in rank or reputation, serving as a direct antonym.\n\n• C) Enhancement: Refers to improving the quality or value of something, acting as an antonym.\n\n• D) Praise: Refers to expressing approval, directly opposing taking away merit."
    },
    {
        id: "vocab_detraction_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDETRACTION",
        options: ["A) Defamation", "B) Slander", "C) Praise", "D) Calumny"],
        correct: "C",
        explanation: "• A) Defamation: Refers to damaging a good reputation falsely, serving as a synonym for DETRACTION.\n\n• B) Slander: Refers to making false spoken statements damaging to reputation, functioning as a synonym.\n\n• C) Praise (Correct Answer): Refers to expressing approval, honor, or positive recognition. Because 'DETRACTION' means reducing reputation or merit, 'Praise' serves as its precise antonym.\n\n• D) Calumny: Refers to false and malicious statements, serving as a synonym."
    },

    // ==========================================
    // 15. BELITTLEMENT
    // ==========================================
    {
        id: "vocab_belittlement_syn_2",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nBELITTLEMENT",
        options: ["A) Disparagement", "B) Glorification", "C) Exaltation", "D) Veneration"],
        correct: "A",
        explanation: "• A) Disparagement (Correct Answer): Refers to the act of making someone or something seem small, unimportant, or worthless. It functions as an exact synonym for 'BELITTLEMENT'.\n\n• B) Glorification: Refers to praising or honoring someone in an exalted manner, acting as a direct antonym.\n\n• C) Exaltation: Refers to raising someone to a higher rank or praising them highly, direct antonym.\n\n• D) Veneration: Refers to showing deep respect and awe, directly opposing insults."
    },
    {
        id: "vocab_belittlement_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nBELITTLEMENT",
        options: ["A) Derogation", "B) Disparagement", "C) Exaltation", "D) Detraction"],
        correct: "C",
        explanation: "• A) Derogation: Refers to speaking deprecatingly about someone, functioning as a synonym for BELITTLEMENT.\n\n• B) Disparagement: Refers to belittling actions, functioning as a direct synonym.\n\n• C) Exaltation (Correct Answer): Refers to the act of praising, elevating, or honoring someone highly. It functions as the direct antonym for 'BELITTLEMENT'.\n\n• D) Detraction: Refers to taking away merit or reputation, functioning as a synonym."
    }
];
