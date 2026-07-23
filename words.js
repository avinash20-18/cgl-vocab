const questions = [
    {
        id: "vocab_detestable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDETESTABLE",
        options: ["A) Despicable", "B) Commendable", "C) Taciturn", "D) Disparate"],
        correct: "A",
        explanation: "• Main Word Meaning: 'DETESTABLE' describes someone or something that provokes intense hatred, disgust, or moral revulsion (घृणास्पद / नफ़रत के क़ाबिल).\n\n• Despicable (Correct Answer): Refers to someone or something deserving of intense hatred and moral outrage (घृणास्पद).\n\n• Commendable: Means deserving praise or approval (सराहनीय). This is the exact opposite of DETESTABLE.\n\n• Taciturn: Describes a person who is habitually reserved or says very little (कम बोलने वाला).\n\n• Disparate: Describes things that are essentially different in kind and impossible to compare (भिन्न / असमान)."
    },
    {
        id: "vocab_louche_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nLOUCHE",
        options: ["A) Admirable", "B) Disreputable", "C) Precocial", "D) Ponderous"],
        correct: "B",
        explanation: "• Main Word Meaning: 'LOUCHE' describes a character, place, or action that is of questionable respectability, shady, or morally dubious (संदिग्ध / चरित्रहीन).\n\n• Disreputable (Correct Answer): Means having a bad reputation, being shady, or lacking social respectability (बदनाम / संदिग्ध).\n\n• Admirable: Means inspiring respect, approval, or affection (प्रशंसनीय). This is the exact opposite of LOUCHE.\n\n• Precocial: Describes showing unusually early development or maturity (समय से पहले विकसित).\n\n• Ponderous: Describes something slow and clumsy because of great weight or dullness (भारी-भरकम / अस्वाभाविक)."
    },
    {
        id: "vocab_ignominious_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nIGNOMINIOUS",
        options: ["A) Shameful", "B) Honorable", "C) Discursive", "D) Incorporeal"],
        correct: "B",
        explanation: "• Main Word Meaning: 'IGNOMINIOUS' describes actions or outcomes that cause public disgrace, humiliation, or dishonor (कलंकपूर्ण / अपमानजनक).\n\n• Honorable (Correct Answer): Means possessing or bringing high moral respect, integrity, and prestige (आदरणीय / सम्मानजनक).\n\n• Shameful: Means bringing dishonor or public disgrace (शर्मनाक). This is a synonym of IGNOMINIOUS.\n\n• Discursive: Describes talking or writing that digresses from subject to subject without focus (असंगत / इधर-उधर की बात करने वाला).\n\n• Incorporeal: Means lacking material form, physical body, or substance (अशरीरी / निराकार)."
    },
    {
        id: "vocab_earthly_fitb",
        type: "Fill in the Blank",
        question: "Select the most appropriate option to fill in the blank:\n'His earthly desires often distracted him from __________ pursuits.'",
        options: ["A) Mundane", "B) Fastidious", "C) Spiritual", "D) Academic"],
        correct: "C",
        explanation: "• Main Word Meaning: 'EARTHLY' relates to the physical world, material human desires, and worldly matters (सांसारिक / भौतिक).\n\n• Spiritual (Correct Answer): Pertains to the human soul, sacred matters, or higher consciousness, providing the exact thematic contrast against 'earthly' desires (आध्यात्मिक).\n\n• Mundane: Means lacking interest, dull, or belonging to the ordinary world (सांसारिक / नीरस). This is synonymous with EARTHLY.\n\n• Fastidious: Describes someone who is very attentive to accuracy, cleanliness, and detail (नुकताचीं / बारीकबीन).\n\n• Academic: Relates strictly to education, scholarship, and formal learning (शैक्षणिक)."
    },
    {
        id: "vocab_thief_error",
        type: "Spotting the Error",
        question: "Identify the segment which contains a vocabulary mismatch/error:\n'The thief's (A) / commendable actions (B) / made the community (C) / lose trust in him. (D)'",
        options: ["A) Segment A", "B) Segment B", "C) Segment C", "D) Segment D"],
        correct: "B",
        explanation: "• Main Word Meaning: In vocabulary error spotting, the context dictates that adjectives must logically align with the subject's actions and public outcome.\n\n• Segment B (Correct Answer): Contains a clear context mismatch. 'Commendable' means deserving praise or admiration (प्रशंसनीय). A community loses trust due to 'despicable' or 'ignominious' actions, not commendable ones."
    },
    {
        id: "vocab_set1_1",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nEMBELLISH",
        options: ["A) Deface", "B) Caparison", "C) Soporific", "D) Imperious"],
        correct: "B",
        explanation: "• Main Word Meaning: 'EMBELLISH' means to make something more attractive by adding decorative details or ornamentation (सजाना / संवारना).\n\n• Caparison (Correct Answer): Means to deck out in rich, ornamental attire or decorate sumptuously (सजाना / अलंकृत करना).\n\n• Deface: Means to damage or spoil the external appearance of something (विरूपित करना). This is the exact opposite of EMBELLISH.\n\n• Soporific: Describes something that tends to induce drowsiness or sleep (निद्राजनक).\n\n• Imperious: Describes an arrogant, domineering demeanor that assumes power without justification (शाही / घमंडी)."
    },
    {
        id: "vocab_set1_2",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nEMBELLISH",
        options: ["A) Adorn", "B) Deface", "C) Ephemeral", "D) Fastidious"],
        correct: "B",
        explanation: "• Main Word Meaning: 'EMBELLISH' means to decorate, adorn, or enhance the visual appeal of something (सजाना).\n\n• Deface (Correct Answer): Means to damage, disfigure, or spoil the external appearance of something (बिगाड़ना / विरूपित करना).\n\n• Adorn: Means to make more beautiful or attractive by adding decoration (अलंकृत करना). This is a synonym of EMBELLISH.\n\n• Ephemeral: Describes something lasting for a very short time (क्षणिक / अल्पकालिक).\n\n• Fastidious: Describes someone who is extremely meticulous and difficult to please (नुकताचीं)."
    },
    {
        id: "vocab_set1_3",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPRODIGAL",
        options: ["A) Parsimonious", "B) Profligate", "C) Reclusive", "D) Coherent"],
        correct: "B",
        explanation: "• Main Word Meaning: 'PRODIGAL' describes a person who spends money, time, or resources recklessly and extravagantly (फ़िज़ूलख़र्च / अपव्ययी).\n\n• Profligate (Correct Answer): Means recklessly extravagant or wasteful in financial and material resources (फ़िज़ूलख़र्च / व्यभिचारी).\n\n• Parsimonious: Describes someone who is extremely stingy or unwilling to spend money (कंजूस). This is the exact opposite of PRODIGAL.\n\n• Reclusive: Describes someone who avoids the company of other people and lives in solitude (एकांतवासी).\n\n• Coherent: Describes an argument or speech that is logical, well-organized, and consistent (सुसंगत)."
    },
    {
        id: "vocab_set1_4",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nPRODIGAL",
        options: ["A) Squandering", "B) Parsimonious", "C) Obfuscate", "D) Pernicious"],
        correct: "B",
        explanation: "• Main Word Meaning: 'PRODIGAL' refers to spendthrift, recklessly wasteful financial behavior (फ़िज़ूलख़र्च).\n\n• Parsimonious (Correct Answer): Describes someone showing extreme reluctance to spend even small amounts of money (कंजूस / किफ़ायती).\n\n• Squandering: Means wasting money, time, or opportunities recklessly (गँवाना). This is synonymous with PRODIGAL.\n\n• Obfuscate: Means to deliberately make something obscure, unclear, or confusing (अस्पष्ट करना / उलझाना).\n\n• Pernicious: Describes something having a subtle, gradual, or destructive harmful effect (घातक / हानिकारक)."
    },
    {
        id: "vocab_set1_5",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nREPUDIATE",
        options: ["A) Disavow", "B) Corroborate", "C) Loquacious", "D) Exigent"],
        correct: "A",
        explanation: "• Main Word Meaning: 'REPUDIATE' means to refuse to accept, acknowledge, or be associated with an idea, claim, or person (अस्वीकार करना / परित्याग करना).\n\n• Disavow (Correct Answer): Means to deny any responsibility, connection, or support for something (अस्वीकार करना / खंडन करना).\n\n• Corroborate: Means to support, validate, or confirm a statement with concrete proof (पुष्टि करना). This is the opposite of REPUDIATE.\n\n• Loquacious: Describes someone who tends to talk a great deal or is excessively talkative (बातूनी).\n\n• Exigent: Describes a situation that is pressing, urgent, or demanding immediate attention (अत्यावश्यक)."
    },
    {
        id: "vocab_set1_6",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nREPUDIATE",
        options: ["A) Disown", "B) Corroborate", "C) Gregarious", "D) Ubiquitous"],
        correct: "B",
        explanation: "• Main Word Meaning: 'REPUDIATE' means to reject, disown, or deny the validity of an assertion or claim (खंडन करना / त्यागना).\n\n• Corroborate (Correct Answer): Means to support, validate, or confirm an assertion using clear evidence (प्रमाणित करना / पुष्टि करना).\n\n• Disown: Means refusing to acknowledge connection with or responsibility for something (त्यागना). This is a synonym of REPUDIATE.\n\n• Gregarious: Describes someone who is fond of company and highly sociable (मिलनसार).\n\n• Ubiquitous: Describes something present, appearing, or found everywhere at once (सर्वव्यापी)."
    },
    {
        id: "vocab_set1_7",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSQUANDERER",
        options: ["A) Frugal", "B) Spendthrift", "C) Sycophant", "D) Audacious"],
        correct: "B",
        explanation: "• Main Word Meaning: A 'SQUANDERER' is a person who wastes money, time, or resources carelessly and recklessly (गँवाने वाला / फ़िज़ूलख़र्च आदमी).\n\n• Spendthrift (Correct Answer): Refers to a person who spends money in an extravagant and irresponsible manner (फ़िज़ूलख़र्च).\n\n• Frugal: Describes someone who is economical and careful regarding money or food (मितव्ययी). This is the exact opposite of SQUANDERER.\n\n• Sycophant: Refers to a person who acts obsequiously toward powerful people to gain advantage (चाटुकार).\n\n• Audacious: Describes showing a willingness to take surprisingly bold or reckless risks (साहसी / दुस्साहसी)."
    },
    {
        id: "vocab_set1_8",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPENURIOUS",
        options: ["A) Opulent", "B) Destitute", "C) Garrulous", "D) Obstinate"],
        correct: "B",
        explanation: "• Main Word Meaning: 'PENURIOUS' primarily describes living in extreme poverty, hardship, or severe lack of resources (दरिद्र / कफ़नचोर).\n\n• Destitute (Correct Answer): Describes being extremely poor and lacking the basic necessities of life (निराश्रित / कंगाल).\n\n• Opulent: Describes ostentatiously rich, luxurious, or lavish surroundings (धनी / संपन्न). This is the exact opposite of PENURIOUS.\n\n• Garrulous: Describes someone who is excessively talkative, especially on trivial matters (बातूनी).\n\n• Obstinate: Describes someone stubbornly refusing to change one's opinion or chosen course of action (हठी / ज़िद्दी)."
    },
    {
        id: "vocab_set1_9",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nBELITTLE",
        options: ["A) Disparage", "B) Amplify", "C) Voracious", "D) Lethargic"],
        correct: "B",
        explanation: "• Main Word Meaning: 'BELITTLE' means to make an action, person, or achievement seem small, trivial, or unimportant (कम आँकना / नीचा दिखाना).\n\n• Amplify (Correct Answer): Means to increase the strength, importance, size, or scope of something (बढ़ाना / विस्तार करना).\n\n• Disparage: Means to belittle or represent something as being of little worth (उपेक्षा करना). This is a synonym of BELITTLE.\n\n• Voracious: Describes wanting or devouring great quantities of food or possessing an insatiable appetite (पेटू / लालायित).\n\n• Lethargic: Describes feeling apathetic, sluggish, and lacking energy (सुस्त / आलसी)."
    },
    {
        id: "vocab_set1_10",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nABDICATE",
        options: ["A) Usurp", "B) Renounce", "C) Trepidation", "D) Pragmatic"],
        correct: "B",
        explanation: "• Main Word Meaning: 'ABDICATE' means to formally give up, renounce, or step down from a throne, power, or responsibility (त्यागना / पद छोड़ना).\n\n• Renounce (Correct Answer): Means to formally declare one's abandonment of a position, claim, or right (त्याग देना).\n\n• Usurp: Means to take a position of power or importance illegally or by force (हड़पना). This is the opposite of ABDICATE.\n\n• Trepidation: Refers to a feeling of fear, alarm, or agitation about something that may happen (घबराहट).\n\n• Pragmatic: Describes dealing with things sensibly and realistically based on practical considerations (व्यावहारिक)."
    },
    {
        id: "vocab_set1_11",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nRECANT",
        options: ["A) Affirm", "B) Retract", "C) Indefatigable", "D) Superfluous"],
        correct: "B",
        explanation: "• Main Word Meaning: 'RECANT' means to formally withdraw, disavow, or take back a formerly held opinion, belief, or statement (बयान वापस लेना / मुकर जाना).\n\n• Retract (Correct Answer): Means to draw back or withdraw a statement, opinion, or accusation (वापस लेना).\n\n• Affirm: Means to state positively, validate, or confirm the truth of something (पुष्टि करना). This is the opposite of RECANT.\n\n• Indefatigable: Describes a person persisting tirelessly without showing fatigue (अथक).\n\n• Superfluous: Describes something unnecessary through being more than enough (अनावश्यक / ज़रूरत से ज़्यादा)."
    },
    {
        id: "vocab_set1_12",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nIMPRUDENT",
        options: ["A) Rash", "B) Wise", "C) Equivocal", "D) Altruistic"],
        correct: "B",
        explanation: "• Main Word Meaning: 'IMPRUDENT' describes acting without due care, thought, or practical wisdom (बेवकूफ़ / लापरवाही से भरा).\n\n• Wise (Correct Answer): Describes showing sound judgment, deep understanding, and careful decision-making (बुद्धिमान / समझदार).\n\n• Rash: Describes acting or done without careful consideration of consequences (उतावला). This is synonymous with IMPRUDENT.\n\n• Equivocal: Describes something open to more than one interpretation or deliberately ambiguous (अस्पष्ट / दोअर्थी).\n\n• Altruistic: Describes showing selfless concern for the well-being of others (परोपकारी)."
    },
    {
        id: "vocab_set1_13",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nNIGGARDLY",
        options: ["A) Generous", "B) Stingy", "C) Omnipresent", "D) Imperious"],
        correct: "B",
        explanation: "• Main Word Meaning: 'NIGGARDLY' describes an ungenerous, reluctant, or miserly approach to spending money or resources (कंजूस / मक्खीचूस).\n\n• Stingy (Correct Answer): Means unwilling to give or spend money, resources, or praise (कंजूस).\n\n• Generous: Describes showing a readiness to give more of something than is strictly necessary (उदार). This is the exact opposite of NIGGARDLY.\n\n• Omnipresent: Describes widely or constantly encountered entities present everywhere (सर्वव्यापी).\n\n• Imperious: Describes assuming power or authority in an arrogant manner (अहंकारी)."
    },
    {
        id: "vocab_set1_14",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAVOW",
        options: ["A) Deny", "B) Declare", "C) Obfuscate", "D) Soporific"],
        correct: "B",
        explanation: "• Main Word Meaning: 'AVOW' means to assert, confess, or declare openly and firmly (स्वीकार करना / सार्वजनिक रूप से घोषणा करना).\n\n• Declare (Correct Answer): Means to assert, confess, or state openly and emphatically (घोषणा करना).\n\n• Deny: Means to state that one does not admit the truth or existence of something (इन्कार करना). This is the exact opposite of AVOW.\n\n• Obfuscate: Means to make obscure, unclear, or confusing (उलझाना).\n\n• Soporific: Describes something that tends to cause sleepiness or drowsiness (निद्राजनक)."
    },
    {
        id: "vocab_set1_15",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nPROFUSE",
        options: ["A) Abundant", "B) Meager", "C) Persistent", "D) Taciturn"],
        correct: "B",
        explanation: "• Main Word Meaning: 'PROFUSE' describes something available or given in extravagant, generous abundance (प्रचुर / अत्यधिक).\n\n• Meager (Correct Answer): Describes something lacking in quantity, quality, or fullness (अल्प / अल्पमात्र).\n\n• Abundant: Describes existing or available in large quantities (प्रचुर). This is a synonym of PROFUSE.\n\n• Persistent: Describes continuing firmly or obstinately in a course of action despite difficulty (लगातार).\n\n• Taciturn: Describes a person reserved or saying very little (कम बोलने वाला)."
    },
    {
        id: "vocab_set1_16",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSCRIMPING",
        options: ["A) Squandering", "B) Economizing", "C) Gregarious", "D) Ponderous"],
        correct: "B",
        explanation: "• Main Word Meaning: 'SCRIMPING' refers to spending money or using resources very carefully, frugally, or restrictively (किफ़ायत करना / बचत करना).\n\n• Economizing (Correct Answer): Means spending money carefully and reducing unnecessary expenditure (बचत करना / मितव्ययिता).\n\n• Squandering: Means wasting money, time, or resources recklessly (गँवाना). This is the exact opposite of SCRIMPING.\n\n• Gregarious: Describes someone who is fond of company and sociable (मिलनसार).\n\n• Ponderous: Describes something slow, heavy, and clumsy due to weight (भारी-भरकम)."
    },
    {
        id: "vocab_set1_17",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nESPOUSE",
        options: ["A) Adopt", "B) Reject", "C) Audacious", "D) Meticulous"],
        correct: "B",
        explanation: "• Main Word Meaning: 'ESPOUSE' means to adopt, support, or embrace an idea, cause, or belief (समर्थन करना / अपनाना).\n\n• Reject (Correct Answer): Means to refuse to accept, agree with, or support something (अस्वीकार करना).\n\n• Adopt: Means to choose to follow, support, or accept a cause or belief (अपनाना). This is a synonym of ESPOUSE.\n\n• Audacious: Describes showing a willingness to take bold risks (साहसी).\n\n• Meticulous: Describes showing great attention to detail and careful precision (सूक्ष्म / अति-सावधान)."
    },
    {
        id: "vocab_set1_18",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nREFUTE",
        options: ["A) Confirm", "B) Disprove", "C) Loquacious", "D) Fastidious"],
        correct: "B",
        explanation: "• Main Word Meaning: 'REFUTE' means to prove a statement, theory, or accusation to be false or incorrect using evidence (खंडन करना / झूठा साबित करना).\n\n• Disprove (Correct Answer): Means to prove a statement or claim to be false using proof (गलत साबित करना).\n\n• Confirm: Means to establish the truth or correctness of something (पुष्टि करना). This is the exact opposite of REFUTE.\n\n• Loquacious: Describes someone who tends to talk a great deal (बातूनी).\n\n• Fastidious: Describes someone who is very attentive to accuracy and detail (नुकताचीं)."
    },
    {
        id: "vocab_set1_19",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDISOWN",
        options: ["A) Repudiate", "B) Acknowledge", "C) Disparate", "D) Precocial"],
        correct: "B",
        explanation: "• Main Word Meaning: 'DISOWN' means to refuse to acknowledge connection with or responsibility for a person or object (त्यागना / संबंध तोड़ना).\n\n• Acknowledge (Correct Answer): Means to accept, admit, or formally recognize connection with something (स्वीकार करना / मान्यता देना).\n\n• Repudiate: Means to refuse to accept or be associated with something (अस्वीकार करना). This is a synonym of DISOWN.\n\n• Disparate: Describes things essentially different in kind and impossible to compare (भिन्न).\n\n• Precocial: Describes showing unusually early development (समय से पहले विकसित)."
    },
    {
        id: "vocab_set1_20",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nBLEMISH",
        options: ["A) Perfection", "B) Flaw", "C) Cogent", "D) Resilient"],
        correct: "B",
        explanation: "• Main Word Meaning: 'BLEMISH' refers to a mark, fault, or defect that spoils the appearance or moral purity of something (दाग / धब्बा / दोष).\n\n• Flaw (Correct Answer): Refers to a mark, fault, or imperfection that spoils perfection (दोष / त्रुटि).\n\n• Perfection: Refers to the state of being free from faults or defects (पूर्णता). This is the exact opposite of BLEMISH.\n\n• Cogent: Describes an argument or case that is clear, logical, and convincing (प्रभावशाली).\n\n• Resilient: Describes the ability to withstand or recover quickly from difficult conditions (लचीला / जुझारू)."
    },
    {
        id: "vocab_dawdle_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDAWDLE",
        options: ["A) Hasten", "B) Procrastinate", "C) Fastidious", "D) Intrepid"],
        correct: "B",
        explanation: "• Main Word Meaning: 'DAWDLE' means to waste time or move slowly and aimlessly (समय गँवाना / सुस्ती करना).\n\n• Procrastinate (Correct Answer): Means to delay action, put off tasks, or waste time aimlessly (टालमटोल करना / विलंब करना).\n\n• Hasten: Means to move or act quickly (जल्दी करना). This is the exact opposite of DAWDLE.\n\n• Fastidious: Describes someone very attentive to accuracy and details (नुकताचीं).\n\n• Intrepid: Describes someone who is fearless and adventurous (निडर)."
    },
    {
        id: "vocab_fiddle_around_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nFIDDLE AROUND",
        options: ["A) Loiter", "B) Expedite", "C) Pragmatic", "D) Superfluous"],
        correct: "A",
        explanation: "• Main Word Meaning: 'FIDDLE AROUND' means to spend time doing aimless, unproductive, or trivial things (समय बर्बाद करना / टालमटोल करना).\n\n• Loiter (Correct Answer): Means to stand or wait around idly without apparent purpose (समय गँवाना / बेकार घूमना).\n\n• Expedite: Means to make an action or process happen sooner or accomplish faster (जल्दी करना / तेज़ी लाना). This is the opposite of FIDDLE AROUND.\n\n• Pragmatic: Describes dealing with things sensibly and realistically (व्यावहारिक).\n\n• Superfluous: Describes something unnecessary or more than needed (अनावश्यक)."
    },
    {
        id: "vocab_amble_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAMBLE",
        options: ["A) Sprint", "B) Stroll", "C) Soporific", "D) Tenacious"],
        correct: "B",
        explanation: "• Main Word Meaning: 'AMBLE' means to walk or move at a slow, relaxed, and unhurried pace (मंथर गति से चलना / टहलना).\n\n• Stroll (Correct Answer): Means to walk in a leisurely, relaxed manner (टहलना).\n\n• Sprint: Means to run at full speed over a short distance (तेज़ दौड़ना). This is the opposite of AMBLE.\n\n• Soporific: Describes something that induces drowsiness (निद्राजनक).\n\n• Tenacious: Describes holding firm to a position or purpose with great persistence (दृढ़ / हठी)."
    },
    {
        id: "vocab_trifle_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nTRIFLE",
        options: ["A) Dally", "B) Deliberate", "C) Audacious", "D) Altruistic"],
        correct: "A",
        explanation: "• Main Word Meaning: 'TRIFLE' means to treat a serious matter casually or waste time foolishly (हलके में लेना / खिलवाड़ करना).\n\n• Dally (Correct Answer): Means to act or move slowly, or treat a serious matter casually (समय गँवाना / खिलवाड़ करना).\n\n• Deliberate: Means done consciously and intentionally with careful thought (विचारपूर्वक). This is the opposite of TRIFLE.\n\n• Audacious: Describes showing bold or reckless risks (साहसी).\n\n• Altruistic: Describes showing selfless concern for the welfare of others (परोपकारी)."
    },
    {
        id: "vocab_stagger_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSTAGGER",
        options: ["A) Lurch", "B) Steady", "C) Loquacious", "D) Fastidious"],
        correct: "A",
        explanation: "• Main Word Meaning: 'STAGGER' means to walk or move unsteadily as if about to fall (लड़खड़ाना).\n\n• Lurch (Correct Answer): Means to make an abrupt, unsteady, or uncontrolled movement (लड़खड़ाना).\n\n• Steady: Means firmly fixed, supported, or balanced (स्थिर / संतुलित). This is the exact opposite of STAGGER.\n\n• Loquacious: Describes someone who tends to talk a great deal (बातूनी).\n\n• Fastidious: Describes someone attentive to detail and accuracy (सूक्ष्मदर्शी)."
    },
    {
        id: "vocab_decelerate_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDECELERATE",
        options: ["A) Accelerate", "B) Slacken", "C) Ubiquitous", "D) Equanimity"],
        correct: "B",
        explanation: "• Main Word Meaning: 'DECELERATE' means to slow down or reduce speed (गति कम करना).\n\n• Slacken (Correct Answer): Means to reduce speed, tightness, or intensity (धीमा होना / सुस्त पड़ना).\n\n• Accelerate: Means to increase speed or rate of movement (गति बढ़ाना). This is the exact opposite of DECELERATE.\n\n• Ubiquitous: Describes something present everywhere simultaneously (सर्वव्यापी).\n\n• Equanimity: Refers to mental calmness, composure, and evenness of temper (समता / मानसिक शांति)."
    },
    {
        id: "vocab_dawdle_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDAWDLE",
        options: ["A) Loiter", "B) Barrel", "C) Taciturn", "D) Ponderous"],
        correct: "B",
        explanation: "• Main Word Meaning: 'DAWDLE' means to move slowly or waste time lingering aimlessly (समय गँवाना / विलंब करना).\n\n• Barrel (Correct Answer): Means to move or travel at high speed in an urgent, powerful manner (तेज़ी से दौड़ना / झपट्टा मारना).\n\n• Loiter: Means to stand around idly without purpose (बेकार घूमना). This is a synonym of DAWDLE.\n\n• Taciturn: Describes a person who is reserved in speech (कम बोलने वाला).\n\n• Ponderous: Describes something slow and clumsy due to great weight (भारी-भरकम)."
    },
    {
        id: "vocab_exert_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nEXERT",
        options: ["A) Slack", "B) Strive", "C) Disparate", "D) Precocial"],
        correct: "B",
        explanation: "• Main Word Meaning: 'EXERT' means to apply oneself greatly or put forth intense effort (ज़ोर लगाना / प्रयास करना).\n\n• Strive (Correct Answer): Means to make great efforts or push hard to achieve something (कठिन प्रयास करना).\n\n• Slack: Means to decrease effort or work slowly (सुस्ती बरतना). This is the opposite of EXERT.\n\n• Disparate: Describes things essentially different in kind (भिन्न).\n\n• Precocial: Describes showing unusually early development (समय से पहले विकसित)."
    },
    {
        id: "vocab_travail_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nTRAVAIL",
        options: ["A) Ease", "B) Drudgery", "C) Soporific", "D) Resilient"],
        correct: "B",
        explanation: "• Main Word Meaning: 'TRAVAIL' refers to painful, laborious effort or arduous work (कठिन परिश्रम / कष्ट).\n\n• Drudgery (Correct Answer): Refers to hard, menial, painful, or dull labor (कठिन और नीरस काम).\n\n• Ease: Refers to the absence of difficulty or effort (आसानी / आराम). This is the exact opposite of TRAVAIL.\n\n• Soporific: Describes something that induces drowsiness (निद्राजनक).\n\n• Resilient: Describes the ability to recover quickly from difficult conditions (लचीला)."
    },
    {
        id: "vocab_gregarious_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nGREGARIOUS",
        options: ["A) Reclusive", "B) Companionable", "C) Insolent", "D) Dilatory"],
        correct: "B",
        explanation: "• Main Word Meaning: 'GREGARIOUS' describes a person who is fond of company, social, and outgoing (मिलनसार / सुसामाजिक).\n\n• Companionable (Correct Answer): Describes someone who is friendly, welcoming, and fond of social company (मिलनसार).\n\n• Reclusive: Describes someone avoiding social interaction (एकांतवासी). This is the exact opposite of GREGARIOUS.\n\n• Insolent: Describes showing a rude and arrogant lack of respect (अपमानजनक / बदतमीज़).\n\n• Dilatory: Describes being slow to act or intended to cause delay (टालने वाला)."
    },
    {
        id: "vocab_gregarious_ant_1",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nGREGARIOUS",
        options: ["A) Companionable", "B) Reclusive", "C) Audacious", "D) Fastidious"],
        correct: "B",
        explanation: "• Main Word Meaning: 'GREGARIOUS' describes someone who thrives in social gatherings and loves company (मिलनसार).\n\n• Reclusive (Correct Answer): Describes someone deliberately avoiding social interaction and living in seclusion (एकांतप्रिय / वैरागी).\n\n• Companionable: Describes someone fond of social company (मिलनसार). This is a synonym of GREGARIOUS.\n\n• Audacious: Describes taking bold or reckless risks (साहसी).\n\n• Fastidious: Describes someone attentive to detail and hard to please (नुकताचीं)."
    },
    {
        id: "vocab_gregarious_ant_2",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nGREGARIOUS",
        options: ["A) Cordial", "B) Aloof", "C) Pragmatic", "D) Exigent"],
        correct: "B",
        explanation: "• Main Word Meaning: 'GREGARIOUS' refers to being socially warm, friendly, and outgoing (मिलनसार).\n\n• Aloof (Correct Answer): Describes someone who is emotionally cool, distant, and detached from others (अलग-थलग / उदासीन).\n\n• Cordial: Describes someone warm and friendly (सौहार्दपूर्ण). This is synonymous with GREGARIOUS.\n\n• Pragmatic: Describes dealing with things sensibly (व्यावहारिक).\n\n• Exigent: Describes demanding immediate attention or urgent action (अत्यावश्यक)."
    },
    {
        id: "vocab_reticent_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nRETICENT",
        options: ["A) Talkative", "B) Reserved", "C) Equanimous", "D) Tenacious"],
        correct: "B",
        explanation: "• Main Word Meaning: 'RETICENT' describes someone who is disinclined to speak or reveal thoughts easily (अल्पभाषी / संकोची).\n\n• Reserved (Correct Answer): Describes someone quiet, hesitant, or disinclined to reveal personal opinions readily (शांत / संकोची).\n\n• Talkative: Describes someone fond of talking (बातूनी). This is the exact opposite of RETICENT.\n\n• Equanimous: Describes being calm and composed under pressure (शांत / समचित्त).\n\n• Tenacious: Describes holding firm to a purpose or position (दृढ़)."
    },
    {
        id: "vocab_taciturn_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nTACITURN",
        options: ["A) Loquacious", "B) Uncommunicative", "C) Soporific", "D) Audacious"],
        correct: "B",
        explanation: "• Main Word Meaning: 'TACITURN' describes a person who is habitually reserved and says very little (कम बोलने वाला / मौन रहने वाला).\n\n• Uncommunicative (Correct Answer): Describes a habitual disinclination to talk or engage in conversation (अल्पभाषी).\n\n• Loquacious: Describes someone who tends to talk a great deal (बातूनी). This is the exact opposite of TACITURN.\n\n• Soporific: Describes something that induces sleepiness (निद्राजनक).\n\n• Audacious: Describes showing bold or reckless risks (साहसी)."
    },
    {
        id: "vocab_engender_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nENGENDER",
        options: ["A) Quell", "B) Generate", "C) Ponderous", "D) Fastidious"],
        correct: "B",
        explanation: "• Main Word Meaning: 'ENGENDER' means to produce, cause, or give rise to a feeling, situation, or condition (उत्पन्न करना / पैदा करना).\n\n• Generate (Correct Answer): Means to produce, cause, or bring about a specific outcome (उत्पन्न करना).\n\n• Quell: Means to suppress or forcibly put an end to something (शांत करना / दबाना). This is the opposite of ENGENDER.\n\n• Ponderous: Describes something slow and clumsy due to weight (भारी-भरकम).\n\n• Fastidious: Describes someone very attentive to accuracy and detail (सूक्ष्मदर्शी)."
    },
    {
        id: "vocab_reprove_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nREPROVE",
        options: ["A) Laud", "B) Admonish", "C) Transient", "D) Cogent"],
        correct: "B",
        explanation: "• Main Word Meaning: 'REPROVE' means to scold, reprimand, or express firm disapproval of someone's actions (डाँटना / फटकारना).\n\n• Admonish (Correct Answer): Means to scold, reprimand, or express disapproval firmly (चेतावनी देना / फटकारना).\n\n• Laud: Means to praise highly (सराहना करना). This is the exact opposite of REPROVE.\n\n• Transient: Describes lasting only for a short time (क्षणिक).\n\n• Cogent: Describes an argument that is clear, logical, and convincing (प्रभावशाली)."
    },
    {
        id: "vocab_reprove_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nREPROVE",
        options: ["A) Castigate", "B) Laud", "C) Reticent", "D) Disparate"],
        correct: "B",
        explanation: "• Main Word Meaning: 'REPROVE' means to reprimand or express disapproval of actions (फटकारना).\n\n• Laud (Correct Answer): Means to praise, honor, or commend highly (प्रशंसा करना / सराहना).\n\n• Castigate: Means to severely reprimand or criticize someone (कड़ी निंदा करना). This is a synonym of REPROVE.\n\n• Reticent: Describes someone reserved or quiet in speech (संकोची).\n\n• Disparate: Describes things essentially different in kind (भिन्न)."
    },
    {
        id: "vocab_venerate_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nVENERATE",
        options: ["A) Blaspheme", "B) Revere", "C) Discursive", "D) Ubiquitous"],
        correct: "B",
        explanation: "• Main Word Meaning: 'VENERATE' means to regard with profound respect or deep devotion (आदर करना / सम्मान करना).\n\n• Revere (Correct Answer): Means to regard someone or something with profound respect and devotion (श्रद्धा रखना).\n\n• Blaspheme: Means to speak disrespectfully or offensively toward sacred entities (अनादर करना). This is the opposite of VENERATE.\n\n• Discursive: Describes speech or writing digressing from subject to subject (असंगत).\n\n• Ubiquitous: Describes something present everywhere (सर्वव्यापी)."
    },
    {
        id: "vocab_extol_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nEXTOL",
        options: ["A) Disparage", "B) Exalt", "C) Soporific", "D) Taciturn"],
        correct: "B",
        explanation: "• Main Word Meaning: 'EXTOL' means to praise enthusiastically and highly in public (प्रशंसा करना / सराहना करना).\n\n• Exalt (Correct Answer): Means to hold in high regard or praise enthusiastically (गुणगान करना).\n\n• Disparage: Means to belittle or represent as being of little worth (उपेक्षा करना). This is the exact opposite of EXTOL.\n\n• Soporific: Describes something that induces sleepiness (निद्राजनक).\n\n• Taciturn: Describes a person who is reserved in speech (कम बोलने वाला)."
    },
    {
        id: "vocab_deify_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEIFY",
        options: ["A) Vilify", "B) Idolize", "C) Precocial", "D) Fastidious"],
        correct: "B",
        explanation: "• Main Word Meaning: 'DEIFY' means to treat, worship, or revere someone as if they were a god (देवता समान मानना / पूजना).\n\n• Idolize (Correct Answer): Means to admire or worship someone to an extreme degree (अंधभक्ति करना).\n\n• Vilify: Means to speak or write about someone in an abusively disparaging manner (बदनाम करना). This is the opposite of DEIFY.\n\n• Precocial: Describes showing unusually early development (समय से पहले विकसित).\n\n• Fastidious: Describes someone very attentive to accuracy (नुकताचीं)."
    },
    {
        id: "vocab_venerate_ant_1",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nVENERATE",
        options: ["A) Revere", "B) Blaspheme", "C) Resilient", "D) Pragmatic"],
        correct: "B",
        explanation: "• Main Word Meaning: 'VENERATE' means to show deep respect and sacred honor (श्रद्धा रखना / सम्मान करना).\n\n• Blaspheme (Correct Answer): Means to speak disrespectfully or offensively toward sacred entities or ideas (ईश-निंदा करना / अपमान करना).\n\n• Revere: Means to regard with profound respect (आदर करना). This is a synonym of VENERATE.\n\n• Resilient: Describes the ability to recover quickly from difficulties (लचीला).\n\n• Pragmatic: Describes dealing with things sensibly (व्यावहारिक)."
    },
    {
        id: "vocab_scorn_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSCORN",
        options: ["A) Adoration", "B) Disdain", "C) Audacious", "D) Soporific"],
        correct: "B",
        explanation: "• Main Word Meaning: 'SCORN' refers to the expression of open contempt, disgust, or disdain (घृणा / तिरस्कार).\n\n• Disdain (Correct Answer): Refers to the feeling that someone or something is unworthy of respect (अवहेलना / घृणा).\n\n• Adoration: Refers to deep love and respectful admiration (पूजा / अत्यधिक प्रेम). This is the exact opposite of SCORN.\n\n• Audacious: Describes taking bold risks (साहसी).\n\n• Soporific: Describes something that induces drowsiness (निद्राजनक)."
    },
    {
        id: "vocab_desecrate_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDESECRATE",
        options: ["A) Sanctify", "B) Profane", "C) Equanimous", "D) Loquacious"],
        correct: "B",
        explanation: "• Main Word Meaning: 'DESECRATE' means to treat a sacred place or object with violent disrespect or outrage (अपवित्र करना).\n\n• Profane (Correct Answer): Means to treat a sacred place or belief with disrespect or abuse (अपवित्र करना).\n\n• Sanctify: Means to set apart as holy or declare sacred (पवित्र करना). This is the exact opposite of DESECRATE.\n\n• Equanimous: Describes being calm and composed (शांत).\n\n• Loquacious: Describes someone who is talkative (बातूनी)."
    },
    {
        id: "vocab_affront_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAFFRONT",
        options: ["A) Compliment", "B) Insult", "C) Ubiquitous", "D) Ponderous"],
        correct: "B",
        explanation: "• Main Word Meaning: 'AFFRONT' refers to an intentional act or remark that offends someone's dignity (अपमान / अनादर).\n\n• Insult (Correct Answer): Refers to an intentional remark or action that causes offense or humiliation (अपमान).\n\n• Compliment: Refers to a polite expression of praise or admiration (प्रशंसा). This is the exact opposite of AFFRONT.\n\n• Ubiquitous: Describes something present everywhere (सर्वव्यापी).\n\n• Ponderous: Describes something slow and clumsy due to weight (भारी-भरकम)."
    },
    {
        id: "vocab_quell_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nQUELL",
        options: ["A) Instigate", "B) Suppress", "C) Fastidious", "D) Precocial"],
        correct: "B",
        explanation: "• Main Word Meaning: 'QUELL' means to forcibly put an end to or subdue a rebellion, disorder, or fear (शांत करना / दबाना).\n\n• Suppress (Correct Answer): Means to forcibly put an end to or subdue a disturbance (दबाना / कुचलना).\n\n• Instigate: Means to bring about or initiate an action or disturbance (भड़काना). This is the opposite of QUELL.\n\n• Fastidious: Describes someone very attentive to detail (नुकताचीं).\n\n• Precocial: Describes showing unusually early development (समय से पहले विकसित)."
    },
    {
        id: "vocab_castigate_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCASTIGATE",
        options: ["A) Extol", "B) Chastise", "C) Pragmatic", "D) Disparate"],
        correct: "B",
        explanation: "• Main Word Meaning: 'CASTIGATE' means to criticize, reprimand, or punish someone with extreme severity (कड़ी निंदा करना / दंड देना).\n\n• Chastise (Correct Answer): Means to reprimand or scold someone with extreme severity (फटकारना).\n\n• Extol: Means to praise enthusiastically (प्रशंसा करना). This is the exact opposite of CASTIGATE.\n\n• Pragmatic: Describes dealing with things sensibly (व्यावहारिक).\n\n• Disparate: Describes things essentially different in kind (भिन्न)."
    },
    {
        id: "vocab_depravity_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEPRAVITY",
        options: ["A) Rectitude", "B) Wickedness", "C) Exuberant", "D) Equanimity"],
        correct: "B",
        explanation: "• Main Word Meaning: 'DEPRAVITY' refers to moral corruption, wickedness, and evil conduct (भ्रष्टता / दुष्टता).\n\n• Wickedness (Correct Answer): Refers to the state or quality of being morally corrupt or evil (दुष्टता).\n\n• Rectitude: Refers to morally correct behavior and righteousness (ईमानदारी / सदाचार). This is the exact opposite of DEPRAVITY.\n\n• Exuberant: Describes being full of energy, excitement, and cheerfulness (उल्लासपूर्ण).\n\n• Equanimity: Refers to mental calmness and composure (समता)."
    },
    {
        id: "vocab_abjection_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nABJECTION",
        options: ["A) Exaltation", "B) Degradation", "C) Audacious", "D) Taciturn"],
        correct: "B",
        explanation: "• Main Word Meaning: 'ABJECTION' refers to a state of extreme misery, degradation, or self-humiliation (अधोगति / नीचता).\n\n• Degradation (Correct Answer): Refers to the state of being lowered in status, character, or dignity (पतन / अवनति).\n\n• Exaltation: Refers to the state of being raised high in rank, honor, or praise (उन्नति). This is the exact opposite of ABJECTION.\n\n• Audacious: Describes taking bold risks (साहसी).\n\n• Taciturn: Describes a person who is reserved in speech (कम बोलने वाला)."
    },
    {
        id: "vocab_dissipation_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDISSIPATION",
        options: ["A) Frugality", "B) Profligacy", "C) Soporific", "D) Resilient"],
        correct: "B",
        explanation: "• Main Word Meaning: 'DISSIPATION' refers to overindulgence in sensual pleasures or wasteful living (फ़िज़ूलख़र्ची / व्यभिचार).\n\n• Profligacy (Correct Answer): Refers to reckless extravagance or immoral, overindulgent living (फ़िज़ूलख़र्ची / बदचलन).\n\n• Frugality: Refers to the quality of being economical and careful with money (मितव्ययिता). This is the exact opposite of DISSIPATION.\n\n• Soporific: Describes something that induces sleepiness (निद्राजनक).\n\n• Resilient: Describes the ability to recover quickly from hardship (लचीला)."
    },
    {
        id: "vocab_perversion_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPERVERSION",
        options: ["A) Rectitude", "B) Distortion", "C) Ubiquitous", "D) Fastidious"],
        correct: "B",
        explanation: "• Main Word Meaning: 'PERVERSION' refers to corrupting, twisting, or altering something away from its correct state (विकृति / भ्रष्टता).\n\n• Distortion (Correct Answer): Refers to altering or corrupting something away from its natural or true state (विकृति).\n\n• Rectitude: Refers to morally correct behavior and righteousness (ईमानदारी). This is the exact opposite of PERVERSION.\n\n• Ubiquitous: Describes something present everywhere (सर्वव्यापी).\n\n• Fastidious: Describes someone very attentive to accuracy (नुकताचीं)."
    },
    {
        id: "vocab_depravity_ant_1",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDEPRAVITY",
        options: ["A) Wickedness", "B) Rectitude", "C) Discursive", "D) Ponderous"],
        correct: "B",
        explanation: "• Main Word Meaning: 'DEPRAVITY' refers to moral wickedness and corruption (दुष्टता / भ्रष्टता).\n\n• Rectitude (Correct Answer): Refers to morally correct behavior and uncompromising integrity (सदाचार / ईमानदारी).\n\n• Wickedness: Refers to being morally corrupt (दुष्टता). This is a synonym of DEPRAVITY.\n\n• Discursive: Describes digressing from subject to subject without focus (असंगत).\n\n• Ponderous: Describes something slow and clumsy due to weight (भारी-भरकम)."
    },
    {
        id: "vocab_depravity_ant_2",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDEPRAVITY",
        options: ["A) Profligacy", "B) Scrupulosity", "C) Loquacious", "D) Audacious"],
        correct: "B",
        explanation: "• Main Word Meaning: 'DEPRAVITY' refers to moral wickedness and perversion (भ्रष्टता).\n\n• Scrupulosity (Correct Answer): Refers to strict, rigorous care to avoid any moral wrongdoing (सत्यनिष्ठा / धर्मपरायणता).\n\n• Profligacy: Refers to reckless extravagance or immorality (व्यभिचार). This is synonymous with DEPRAVITY.\n\n• Loquacious: Describes someone who is talkative (बातूनी).\n\n• Audacious: Describes taking bold risks (साहसी)."
    },
    {
        id: "vocab_incorrigible_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nINCORRIGIBLE",
        options: ["A) Reformable", "B) Irreformable", "C) Pragmatic", "D) Equanimous"],
        correct: "B",
        explanation: "• Main Word Meaning: 'INCORRIGIBLE' describes a person or habit that cannot be corrected, improved, or reformed (असुधार्य).\n\n• Irreformable (Correct Answer): Describes someone or something impossible to reform or improve (असुधार्य).\n\n• Reformable: Describes something capable of being improved or corrected (सुधार योग्य). This is the exact opposite of INCORRIGIBLE.\n\n• Pragmatic: Describes dealing with things sensibly (व्यावहारिक).\n\n• Equanimous: Describes being calm and composed (शांत)."
    },
    {
        id: "vocab_impenitent_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nIMPENITENT",
        options: ["A) Remorseful", "B) Remorseless", "C) Taciturn", "D) Soporific"],
        correct: "B",
        explanation: "• Main Word Meaning: 'IMPENITENT' describes feeling no guilt, regret, or repentance for bad actions (पश्चात्तापहीन / बेशर्म).\n\n• Remorseless (Correct Answer): Describes feeling no regret, guilt, or repentance for wrongdoings (निर्दयी / बेपरवाह).\n\n• Remorseful: Describes feeling filled with remorse and regret (पश्चात्तापी). This is the exact opposite of IMPENITENT.\n\n• Taciturn: Describes a person reserved in speech (कम बोलने वाला).\n\n• Soporific: Describes something that induces sleepiness (निद्राजनक)."
    },
    {
        id: "vocab_incorrigible_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nINCORRIGIBLE",
        options: ["A) Irreformable", "B) Reformable", "C) Ubiquitous", "D) Fastidious"],
        correct: "B",
        explanation: "• Main Word Meaning: 'INCORRIGIBLE' describes bad habits that cannot be corrected or reformed (असुधार्य).\n\n• Reformable (Correct Answer): Describes something capable of being improved or changed for the better (सुधार योग्य).\n\n• Irreformable: Describes something impossible to reform (असुधार्य). This is a synonym of INCORRIGIBLE.\n\n• Ubiquitous: Describes something present everywhere (सर्वव्यापी).\n\n• Fastidious: Describes someone attentive to detail (नुकताचीं)."
    },
    {
        id: "vocab_servile_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSERVILE",
        options: ["A) Imperious", "B) Submissive", "C) Disparate", "D) Precocial"],
        correct: "B",
        explanation: "• Main Word Meaning: 'SERVILE' describes displaying an excessive willingness to serve, obey, or please others (जी-हुज़ूरी करने वाला / चाटुकार).\n\n• Submissive (Correct Answer): Describes an excessive willingness to obey or submit to authority (आज्ञाकारी / दब्बू).\n\n• Imperious: Describes assuming power in an arrogant or domineering manner (घमंडी). This is the exact opposite of SERVILE.\n\n• Disparate: Describes things essentially different in kind (भिन्न).\n\n• Precocial: Describes showing unusually early development (समय से पहले विकसित)."
    },
    {
        id: "vocab_slavish_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSLAVISH",
        options: ["A) Assertive", "B) Obsequious", "C) Ponderous", "D) Resilient"],
        correct: "B",
        explanation: "• Main Word Meaning: 'SLAVISH' describes showing blind, submissive obedience or fawning imitation (चापलूसी से भरा / अंधभक्त).\n\n• Obsequious (Correct Answer): Describes being excessively obedient or flattering to win favor (चाटुकार).\n\n• Assertive: Describes having a confident, forceful, and self-assured personality (आत्मविश्वासी). This is the opposite of SLAVISH.\n\n• Ponderous: Describes something slow and clumsy due to weight (भारी-भरकम).\n\n• Resilient: Describes the ability to recover quickly from hardship (लचीला)."
    },
    {
        id: "vocab_abject_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nABJECT",
        options: ["A) Noble", "B) Ignoble", "C) Loquacious", "D) Fastidious"],
        correct: "B",
        explanation: "• Main Word Meaning: 'ABJECT' describes a condition or behavior that is wretched, degraded, or lacking self-respect (अधम / नीच).\n\n• Ignoble (Correct Answer): Describes character or conditions that are degraded, dishonorable, or wretched (नीच / अधम).\n\n• Noble: Describes having fine personal qualities or high moral principles (महान / कुलीन). This is the exact opposite of ABJECT.\n\n• Loquacious: Describes someone who is talkative (बातूनी).\n\n• Fastidious: Describes someone attentive to detail (नुकताचीं)."
    },
    {
        id: "vocab_menial_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nMENIAL",
        options: ["A) Elevated", "B) Lowly", "C) Audacious", "D) Pragmatic"],
        correct: "B",
        explanation: "• Main Word Meaning: 'MENIAL' describes work or tasks that are humble, degraded, and requiring little skill (तुच्छ / छोटा काम).\n\n• Lowly (Correct Answer): Describes work, status, or rank that is humble and simple (मामूली / नीचा).\n\n• Elevated: Describes something situated at a high level or dignified in rank (उच्च / प्रतिष्ठित). This is the opposite of MENIAL.\n\n• Audacious: Describes taking bold risks (साहसी).\n\n• Pragmatic: Describes dealing with things sensibly (व्यावहारिक)."
    },
    {
        id: "vocab_sycophant_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSYCOPHANT",
        options: ["A) Detractor", "B) Flatterer", "C) Taciturn", "D) Soporific"],
        correct: "B",
        explanation: "• Main Word Meaning: 'SYCOPHANT' refers to a person who acts obsequiously toward powerful people to gain personal favor (चाटुकार).\n\n• Flatterer (Correct Answer): Refers to someone who praises others insincerely for personal gain (चाटुकार).\n\n• Detractor: Refers to a person who disparages or criticizes someone (निंदक). This is the opposite of SYCOPHANT.\n\n• Taciturn: Describes a person reserved in speech (कम बोलने वाला).\n\n• Soporific: Describes something that induces sleepiness (निद्राजनक)."
    },
    {
        id: "vocab_toadyish_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nTOADYISH",
        options: ["A) Imperious", "B) Fawning", "C) Ubiquitous", "D) Equanimous"],
        correct: "B",
        explanation: "• Main Word Meaning: 'TOADYISH' describes displaying exaggerated flattery, subservience, or servility (चापलूसी भरा).\n\n• Fawning (Correct Answer): Describes displaying exaggerated flattery or servility to win favor (चापलूसी करने वाला).\n\n• Imperious: Describes being domineering and arrogant (शाही / घमंडी). This is the exact opposite of TOADYISH.\n\n• Ubiquitous: Describes something present everywhere (सर्वव्यापी).\n\n• Equanimous: Describes being calm and composed (शांत)."
    },
    {
        id: "vocab_subservient_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSUBSERVIENT",
        options: ["A) Domineering", "B) Compliant", "C) Disparate", "D) Precocial"],
        correct: "B",
        explanation: "• Main Word Meaning: 'SUBSERVIENT' describes being prepared to obey others unquestioningly or yielding submissively (अधीन / आज्ञाकारी).\n\n• Compliant (Correct Answer): Describes yielding easily to authority or obeying unquestioningly (आज्ञाकारी).\n\n• Domineering: Describes asserting one's will over another arrogantly (रोब जमाने वाला). This is the exact opposite of SUBSERVIENT.\n\n• Disparate: Describes things essentially different in kind (भिन्न).\n\n• Precocial: Describes showing early development (समय से पहले विकसित)."
    },
    {
        id: "vocab_demure_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEMURE",
        options: ["A) Flamboyant", "B) Modest", "C) Ponderous", "D) Fastidious"],
        correct: "B",
        explanation: "• Main Word Meaning: 'DEMURE' describes someone who is quiet, reserved, modest, or shy (शांत / विनम्र / शर्मीला).\n\n• Modest (Correct Answer): Describes being reserved, quiet, or unassuming in behavior (विनम्र).\n\n• Flamboyant: Describes tending to attract attention because of exuberance or stylishness (भड़कीला). This is the opposite of DEMURE.\n\n• Ponderous: Describes something slow and clumsy due to weight (भारी-भरकम).\n\n• Fastidious: Describes someone attentive to detail (सूक्ष्मदर्शी)."
    },
    {
        id: "vocab_servile_ant_1",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nSERVILE",
        options: ["A) Submissive", "B) Imperious", "C) Loquacious", "D) Resilient"],
        correct: "B",
        explanation: "• Main Word Meaning: 'SERVILE' describes showing an excessive willingness to obey and serve others (जी-हुज़ूरी करने वाला).\n\n• Imperious (Correct Answer): Describes assuming power and authority in an arrogant, domineering manner (शाही / घमंडी).\n\n• Submissive: Describes being willing to obey authority (दब्बू). This is a synonym of SERVILE.\n\n• Loquacious: Describes someone talkative (बातूनी).\n\n• Resilient: Describes the ability to recover quickly (लचीला)."
    },
    {
        id: "vocab_supercilious_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSUPERCILIOUS",
        options: ["A) Humble", "B) Haughty", "C) Audacious", "D) Taciturn"],
        correct: "B",
        explanation: "• Main Word Meaning: 'SUPERCILIOUS' describes behaving as though one thinks one is superior to others (घमंडी / मग़रूर).\n\n• Haughty (Correct Answer): Describes behaving in an arrogantly superior and disdainful manner (घमंडी).\n\n• Humble: Describes having a modest view of one's importance (विनम्र). This is the exact opposite of SUPERCILIOUS.\n\n• Audacious: Describes taking bold risks (साहसी).\n\n• Taciturn: Describes a person reserved in speech (कम बोलने वाला)."
    },
    {
        id: "vocab_ominous_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nOMINOUS",
        options: ["A) Auspicious", "B) Menacing", "C) Soporific", "D) Pragmatic"],
        correct: "B",
        explanation: "• Main Word Meaning: 'OMINOUS' describes giving the impression that something bad or evil is about to happen (अशुभ / डरावना).\n\n• Menacing (Correct Answer): Describes suggesting the presence of danger, evil, or threat ahead (भयावह).\n\n• Auspicious: Describes showing signs that future success is likely (शुभ). This is the exact opposite of OMINOUS.\n\n• Soporific: Describes something that induces sleepiness (निद्राजनक).\n\n• Pragmatic: Describes dealing with things sensibly (व्यावहारिक)."
    },
    {
        id: "vocab_baleful_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nBALEFUL",
        options: ["A) Benign", "B) Sinister", "C) Ubiquitous", "D) Fastidious"],
        correct: "B",
        explanation: "• Main Word Meaning: 'BALEFUL' describes threatening harm, evil, or destructive consequences (हानिकारक / घातक).\n\n• Sinister (Correct Answer): Describes threatening harm, destruction, or evil fortune (भयावह / अशुभ).\n\n• Benign: Describes being gentle and kindly; not harmful (सौम्य / सौहार्दपूर्ण). This is the exact opposite of BALEFUL.\n\n• Ubiquitous: Describes something present everywhere (सर्वव्यापी).\n\n• Fastidious: Describes someone attentive to detail (नुकताचीं)."
    },
    {
        id: "vocab_inauspicious_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nINAUSPICIOUS",
        options: ["A) Propitious", "B) Unfavorable", "C) Disparate", "D) Precocial"],
        correct: "B",
        explanation: "• Main Word Meaning: 'INAUSPICIOUS' describes showing signs that warn of future difficulty, failure, or bad luck (अशुभ).\n\n• Unfavorable (Correct Answer): Describes showing signs that warn of difficulty, opposition, or bad luck (अशुभ / प्रतिकूल).\n\n• Propitious: Describes giving a good chance of success (शुभ / अनुकूल). This is the exact opposite of INAUSPICIOUS.\n\n• Disparate: Describes things essentially different in kind (भिन्न).\n\n• Precocial: Describes showing early development (समय से पहले विकसित)."
    },
    {
        id: "vocab_sinister_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSINISTER",
        options: ["A) Auspicious", "B) Threatening", "C) Ponderous", "D) Resilient"],
        correct: "B",
        explanation: "• Main Word Meaning: 'SINISTER' describes giving the impression that something harmful or evil is about to happen (अशुभ / भयावह).\n\n• Threatening (Correct Answer): Describes giving the impression that something dangerous or harmful is near (भयावह).\n\n• Auspicious: Describes showing that future success is likely (शुभ). This is the exact opposite of SINISTER.\n\n• Ponderous: Describes something slow and clumsy due to weight (भारी-भरकम).\n\n• Resilient: Describes the ability to recover quickly (लचीला)."
    },
    {
        id: "vocab_ominous_ant_1",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nOMINOUS",
        options: ["A) Menacing", "B) Auspicious", "C) Loquacious", "D) Audacious"],
        correct: "B",
        explanation: "• Main Word Meaning: 'OMINOUS' describes giving an impression of impending evil, threat, or danger (अशुभ).\n\n• Auspicious (Correct Answer): Describes showing that future success or good fortune is likely (शुभ / अनुकूल).\n\n• Menacing: Describes suggesting danger or evil (भयावह). This is a synonym of OMINOUS.\n\n• Loquacious: Describes someone talkative (बातूनी).\n\n• Audacious: Describes taking bold risks (साहसी)."
    },
    {
        id: "vocab_propitious_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPROPITIOUS",
        options: ["A) Ominous", "B) Favorable", "C) Taciturn", "D) Soporific"],
        correct: "B",
        explanation: "• Main Word Meaning: 'PROPITIOUS' describes giving or indicating a good chance of success or good fortune (शुभ / अनुकूल).\n\n• Favorable (Correct Answer): Describes giving or indicating a good chance of success (अनुकूल).\n\n• Ominous: Describes giving an impression of bad luck or danger (अशुभ). This is the exact opposite of PROPITIOUS.\n\n• Taciturn: Describes a person reserved in speech (कम बोलने वाला).\n\n• Soporific: Describes something that induces sleepiness (निद्राजनक)."
    },
    {
        id: "vocab_corruption_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCORRUPTION",
        options: ["A) Integrity", "B) Depravity", "C) Pragmatic", "D) Equanimous"],
        correct: "B",
        explanation: "• Main Word Meaning: 'CORRUPTION' refers to dishonest, fraudulent, or morally bad conduct (भ्रष्टाचार / अनैतिकता).\n\n• Depravity (Correct Answer): Refers to moral corruption, wickedness, or perversion (भ्रष्टता / दुष्टता).\n\n• Integrity: Refers to the quality of being honest with strong moral principles (ईमानदारी / सत्यनिष्ठा). This is the exact opposite of CORRUPTION.\n\n• Pragmatic: Describes dealing with things sensibly (व्यावहारिक).\n\n• Equanimous: Describes being calm and composed (शांत)."
    },
    {
        id: "vocab_debasement_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEBASEMENT",
        options: ["A) Elevation", "B) Degradation", "C) Disparate", "D) Precocial"],
        correct: "B",
        explanation: "• Main Word Meaning: 'DEBASEMENT' refers to reducing the quality, value, or moral dignity of something (अवनति / गिरावट).\n\n• Degradation (Correct Answer): Refers to the process of lowering in quality, value, or moral dignity (पतन / अवनति).\n\n• Elevation: Refers to the action of raising to a higher position or rank (उन्नति). This is the exact opposite of DEBASEMENT.\n\n• Disparate: Describes things essentially different in kind (भिन्न).\n\n• Precocial: Describes showing early development (समय से पहले विकसित)."
    },
    {
        id: "vocab_decadency_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDECADENCY",
        options: ["A) Flourishing", "B) Decline", "C) Ponderous", "D) Resilient"],
        correct: "B",
        explanation: "• Main Word Meaning: 'DECADENCY' refers to moral, cultural, or physical deterioration over time (पतन / क्षय).\n\n• Decline (Correct Answer): Refers to moral, cultural, or physical deterioration (पतन / गिरावट).\n\n• Flourishing: Refers to developing rapidly and successfully (समृद्ध होना). This is the exact opposite of DECADENCY.\n\n• Ponderous: Describes something slow and clumsy due to weight (भारी-भरकम).\n\n• Resilient: Describes the ability to recover quickly (लचीला)."
    },
    {
        id: "vocab_degeneracy_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEGENERACY",
        options: ["A) Improvement", "B) Deterioration", "C) Loquacious", "D) Fastidious"],
        correct: "B",
        explanation: "• Main Word Meaning: 'DEGENERACY' refers to declining to a lower or corrupted moral condition (भ्रष्टता / गिरावट).\n\n• Deterioration (Correct Answer): Refers to the process of becoming progressively worse in quality (गिरावट / पतन).\n\n• Improvement: Refers to the process of making or becoming better (सुधार). This is the exact opposite of DEGENERACY.\n\n• Loquacious: Describes someone talkative (बातूनी).\n\n• Fastidious: Describes someone attentive to detail (सूक्ष्मदर्शी)."
    },
    {
        id: "vocab_degradation_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEGRADATION",
        options: ["A) Honor", "B) Humiliation", "C) Audacious", "D) Taciturn"],
        correct: "B",
        explanation: "• Main Word Meaning: 'DEGRADATION' refers to a reduction in dignity, rank, or self-respect (अपमान / बदनामी / अवनति).\n\n• Humiliation (Correct Answer): Refers to a reduction in dignity, respect, or self-esteem (अपमान).\n\n• Honor: Refers to high respect or great prestige (सम्मान). This is the exact opposite of DEGRADATION.\n\n• Audacious: Describes taking bold risks (साहसी).\n\n• Taciturn: Describes a person reserved in speech (कम बोलने वाला)."
    },
    {
        id: "vocab_goodness_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nGOODNESS",
        options: ["A) Virtue", "B) Depravity", "C) Soporific", "D) Pragmatic"],
        correct: "B",
        explanation: "• Main Word Meaning: 'GOODNESS' refers to the quality of being morally good or virtuous (सज्जनता / भलाई).\n\n• Depravity (Correct Answer): Refers to moral corruption, wickedness, and evil character (दुष्टता / भ्रष्टता).\n\n• Virtue: Refers to behavior showing high moral standards (गुण / सदाचार). This is synonymous with GOODNESS.\n\n• Soporific: Describes something that induces sleepiness (निद्राजनक).\n\n• Pragmatic: Describes dealing with things sensibly (व्यावहारिक)."
    },
    {
        id: "vocab_virtue_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nVIRTUE",
        options: ["A) Rectitude", "B) Depravity", "C) Ubiquitous", "D) Equanimous"],
        correct: "B",
        explanation: "• Main Word Meaning: 'VIRTUE' refers to behavior showing high moral standards (गुण / नैतिक श्रेष्ठता).\n\n• Depravity (Correct Answer): Refers to moral corruption, wickedness, and perversion (दुष्टता / भ्रष्टता).\n\n• Rectitude: Refers to morally correct behavior and righteousness (ईमानदारी). This is synonymous with VIRTUE.\n\n• Ubiquitous: Describes something present everywhere (सर्वव्यापी).\n\n• Equanimous: Describes being calm and composed (शांत)."
    },
    {
        id: "vocab_morality_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nMORALITY",
        options: ["A) Integrity", "B) Corruption", "C) Disparate", "D) Precocial"],
        correct: "B",
        explanation: "• Main Word Meaning: 'MORALITY' refers to principles concerning right and wrong behavior (नैतिकता).\n\n• Corruption (Correct Answer): Refers to dishonest or immoral behavior violating ethical codes (भ्रष्टाचार / अनैतिकता).\n\n• Integrity: Refers to the quality of having strong moral principles (सत्यनिष्ठा). This is synonymous with MORALITY.\n\n• Disparate: Describes things essentially different in kind (भिन्न).\n\n• Precocial: Describes showing early development (समय से पहले विकसित)."
    },
    {
        id: "vocab_righteousness_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nRIGHTEOUSNESS",
        options: ["A) Probity", "B) Depravity", "C) Ponderous", "D) Resilient"],
        correct: "B",
        explanation: "• Main Word Meaning: 'RIGHTEOUSNESS' refers to the quality of being morally right and virtuous (सदाचार).\n\n• Depravity (Correct Answer): Refers to a state of moral corruption and wickedness (भ्रष्टता / दुष्टता).\n\n• Probity: Refers to the quality of having strong moral principles (ईमानदारी). This is synonymous with RIGHTEOUSNESS.\n\n• Ponderous: Describes something slow and clumsy due to weight (भारी-भरकम).\n\n• Resilient: Describes the ability to recover quickly (लचीला)."
    },
    {
        id: "vocab_hopeless_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nHOPELESS",
        options: ["A) Promising", "B) Incorrigible", "C) Loquacious", "D) Fastidious"],
        correct: "B",
        explanation: "• Main Word Meaning: 'HOPELESS' describes a situation, flaw, or habit that cannot be fixed or improved (निराशाजनक / असहाय).\n\n• Incorrigible (Correct Answer): Describes someone or something impossible to change or reform (असुधार्य).\n\n• Promising: Describes showing signs of future success (आशाजनक). This is the exact opposite of HOPELESS.\n\n• Loquacious: Describes someone talkative (बातूनी).\n\n• Fastidious: Describes someone attentive to detail (नुकताचीं)."
    },
    {
        id: "vocab_irrecoverable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nIRRECOVERABLE",
        options: ["A) Restorable", "B) Irretrievable", "C) Audacious", "D) Taciturn"],
        correct: "B",
        explanation: "• Main Word Meaning: 'IRRECOVERABLE' describes something that cannot be regained, saved, or retrieved (अप्राप्य).\n\n• Irretrievable (Correct Answer): Describes something impossible to retrieve, recover, or save (अप्राप्य).\n\n• Restorable: Describes something able to be brought back to a former condition (पुनर्प्राप्त योग्य). This is the exact opposite of IRRECOVERABLE.\n\n• Audacious: Describes taking bold risks (साहसी).\n\n• Taciturn: Describes a person reserved in speech (कम बोलने वाला)."
    },
    {
        id: "vocab_incurable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nINCURABLE",
        options: ["A) Curable", "B) Irremediable", "C) Soporific", "D) Pragmatic"],
        correct: "B",
        explanation: "• Main Word Meaning: 'INCURABLE' describes a disease, flaw, or habit that cannot be cured or remedied (असाध्य).\n\n• Irremediable (Correct Answer): Describes something impossible to cure, remedy, or correct (असुधार्य / असाध्य).\n\n• Curable: Describes something capable of being healed (साध्य). This is the exact opposite of INCURABLE.\n\n• Soporific: Describes something inducing sleepiness (निद्राजनक).\n\n• Pragmatic: Describes dealing with things sensibly (व्यावहारिक)."
    },
    {
        id: "vocab_irremediable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nIRREMEDIABLE",
        options: ["A) Remediable", "B) Unfixable", "C) Ubiquitous", "D) Equanimous"],
        correct: "B",
        explanation: "• Main Word Meaning: 'IRREMEDIABLE' describes a condition impossible to repair, fix, or remedy (असुधार्य).\n\n• Unfixable (Correct Answer): Describes something impossible to repair or remedy (असुधार्य).\n\n• Remediable: Describes something capable of being remedied (उपचार योग्य). This is the exact opposite of IRREMEDIABLE.\n\n• Ubiquitous: Describes something present everywhere (सर्वव्यापी).\n\n• Equanimous: Describes being calm and composed (शांत)."
    },
    {
        id: "vocab_unredeemable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nUNREDEEMABLE",
        options: ["A) Redeemable", "B) Irredeemable", "C) Disparate", "D) Precocial"],
        correct: "B",
        explanation: "• Main Word Meaning: 'UNREDEEMABLE' describes someone or something impossible to save, correct, or improve (अपूरणीय).\n\n• Irredeemable (Correct Answer): Describes something impossible to save, correct, or improve (अपूरणीय).\n\n• Redeemable: Describes something able to be recovered or saved (सुधार योग्य). This is the exact opposite of UNREDEEMABLE.\n\n• Disparate: Describes things essentially different in kind (भिन्न).\n\n• Precocial: Describes showing early development (समय से पहले विकसित)."
    },
    {
        id: "vocab_savable_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nSAVABLE",
        options: ["A) Restorable", "B) Incorrigible", "C) Ponderous", "D) Resilient"],
        correct: "B",
        explanation: "• Main Word Meaning: 'SAVABLE' describes something capable of being saved, restored, or reformed (उद्धार योग्य).\n\n• Incorrigible (Correct Answer): Describes something impossible to reform, save, or correct (असुधार्य).\n\n• Restorable: Describes something capable of being restored (पुनर्प्राप्त योग्य). This is synonymous with SAVABLE.\n\n• Ponderous: Describes something slow and clumsy due to weight (भारी-भरकम).\n\n• Resilient: Describes the ability to recover quickly (लचीला)."
    },
    {
        id: "vocab_curable_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nCURABLE",
        options: ["A) Healable", "B) Incurable", "C) Loquacious", "D) Fastidious"],
        correct: "B",
        explanation: "• Main Word Meaning: 'CURABLE' describes a condition or flaw capable of being healed or corrected (साध्य).\n\n• Incurable (Correct Answer): Describes a disease or flaw that cannot be cured (असाध्य).\n\n• Healable: Describes something capable of being healed (उपचार योग्य). This is synonymous with CURABLE.\n\n• Loquacious: Describes someone talkative (बातूनी).\n\n• Fastidious: Describes someone attentive to detail (नुकताचीं)."
    },
    {
        id: "vocab_arrogant_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nARROGANT",
        options: ["A) Haughty", "B) Servile", "C) Audacious", "D) Taciturn"],
        correct: "B",
        explanation: "• Main Word Meaning: 'ARROGANT' describes having an exaggerated sense of one's own importance (अभिमानी / घमंडी).\n\n• Servile (Correct Answer): Describes showing excessive or submissive willingness to serve others (जी-हुज़ूरी करने वाला).\n\n• Haughty: Describes being arrogantly superior (घमंडी). This is synonymous with ARROGANT.\n\n• Audacious: Describes taking bold risks (साहसी).\n\n• Taciturn: Describes a person reserved in speech (कम बोलने वाला)."
    },
    {
        id: "vocab_haughty_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nHAUGHTY",
        options: ["A) Supercilious", "B) Subservient", "C) Soporific", "D) Pragmatic"],
        correct: "B",
        explanation: "• Main Word Meaning: 'HAUGHTY' describes behaving in an arrogantly superior manner (घमंडी / मग़रूर).\n\n• Subservient (Correct Answer): Describes being prepared to obey others unquestioningly or yielding submissively (अधीन / आज्ञाकारी).\n\n• Supercilious: Describes being arrogant and disdainful (घमंडी). This is synonymous with HAUGHTY.\n\n• Soporific: Describes something inducing sleepiness (निद्राजनक).\n\n• Pragmatic: Describes dealing with things sensibly (व्यावहारिक)."
    },
    {
        id: "vocab_lordly_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nLORDLY",
        options: ["A) Imperious", "B) Abject", "C) Ubiquitous", "D) Equanimous"],
        correct: "B",
        explanation: "• Main Word Meaning: 'LORDLY' describes behaving in a grand, arrogant, or domineering manner (सामंती / रोबीला).\n\n• Abject (Correct Answer): Describes being wretched, degraded, humble, and lacking self-pride (अधम / नीच).\n\n• Imperious: Describes being domineering and arrogant (शाही). This is synonymous with LORDLY.\n\n• Ubiquitous: Describes something present everywhere (सर्वव्यापी).\n\n• Equanimous: Describes being calm and composed (शांत)."
    },
    {
        id: "vocab_portentous_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPORTENTOUS",
        options: ["A) Auspicious", "B) Ominous", "C) Disparate", "D) Precocial"],
        correct: "B",
        explanation: "• Main Word Meaning: 'PORTENTOUS' describes serving as a sign that something calamitous or bad is about to happen (अशुभ / चेतावनीभरा).\n\n• Ominous (Correct Answer): Describes warning of something evil or disastrous about to happen (अशुभ).\n\n• Auspicious: Describes showing that future success is likely (शुभ). This is the exact opposite of PORTENTOUS.\n\n• Disparate: Describes things essentially different in kind (भिन्न).\n\n• Precocial: Describes showing early development (समय से पहले विकसित)."
    },
    {
        id: "vocab_unthreatening_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nUNTHREATENING",
        options: ["A) Benign", "B) Menacing", "C) Ponderous", "D) Resilient"],
        correct: "B",
        explanation: "• Main Word Meaning: 'UNTHREATENING' describes someone or something safe and unlikely to cause harm (भयरहित).\n\n• Menacing (Correct Answer): Describes suggesting danger or threatening harm (भयावह).\n\n• Benign: Describes being gentle and harmless (सौम्य). This is synonymous with UNTHREATENING.\n\n• Ponderous: Describes something slow and clumsy due to weight (भारी-भरकम).\n\n• Resilient: Describes the ability to recover quickly (लचीला)."
    },
    {
        id: "vocab_bright_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nBRIGHT",
        options: ["A) Auspicious", "B) Ominous", "C) Loquacious", "D) Fastidious"],
        correct: "B",
        explanation: "• Main Word Meaning: In context of future prospects, 'BRIGHT' describes promising good fortune and optimism (आशाजनक / उज्ज्वल).\n\n• Ominous (Correct Answer): Describes giving the impression that something bad or threatening is going to happen (अशुभ).\n\n• Auspicious: Describes being conducive to success (शुभ). This is synonymous with BRIGHT.\n\n• Loquacious: Describes someone talkative (बातूनी).\n\n• Fastidious: Describes someone attentive to detail (नुकताचीं)."
    },
    {
        id: "vocab_prosperous_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPROSPEROUS",
        options: ["A) Destitute", "B) Thriving", "C) Audacious", "D) Taciturn"],
        correct: "B",
        explanation: "• Main Word Meaning: 'PROSPEROUS' describes successful, flourishing, and financially booming conditions (समृद्ध / संपन्न).\n\n• Thriving (Correct Answer): Describes flourishing and gaining financial or material success (संपन्न).\n\n• Destitute: Describes being extremely poor (कंगाल). This is the exact opposite of PROSPEROUS.\n\n• Audacious: Describes taking bold risks (साहसी).\n\n• Taciturn: Describes a person reserved in speech (कम बोलने वाला)."
    },
    {
        id: "vocab_garnish_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nGARNISH",
        options: ["A) Deface", "B) Adorn", "C) Soporific", "D) Pragmatic"],
        correct: "B",
        explanation: "• Main Word Meaning: 'GARNISH' means to decorate or embellish something to enhance appearance (सजाना / संवारना).\n\n• Adorn (Correct Answer): Means to decorate, embellish, or enhance visual appeal (अलंकृत करना).\n\n• Deface: Means to spoil or disfigure the external appearance of something (विरूपित करना). This is the exact opposite of GARNISH.\n\n• Soporific: Describes something that induces sleepiness (निद्राजनक).\n\n• Pragmatic: Describes dealing with things sensibly (व्यावहारिक)."
    },
    {
        id: "vocab_amplify_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAMPLIFY",
        options: ["A) Belittle", "B) Magnify", "C) Ubiquitous", "D) Equanimous"],
        correct: "B",
        explanation: "• Main Word Meaning: 'AMPLIFY' means to increase the volume, size, strength, or scope of something (बढ़ाना / विस्तार करना).\n\n• Magnify (Correct Answer): Means to make something larger, louder, or more intense (बढ़ाना).\n\n• Belittle: Means to make something seem small or unimportant (कम आँकना). This is the exact opposite of AMPLIFY.\n\n• Ubiquitous: Describes something present everywhere (सर्वव्यापी).\n\n• Equanimous: Describes being calm and composed (शांत)."
    },
    {
        id: "vocab_deck_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDECK",
        options: ["A) Strip", "B) Decorate", "C) Disparate", "D) Precocial"],
        correct: "B",
        explanation: "• Main Word Meaning: 'DECK' means to decorate, furnish, or adorn something visually (सजाना / सजावट करना).\n\n• Decorate (Correct Answer): Means to adorn or embellish something visually (सजाना).\n\n• Strip: Means to remove covering or decoration from something (उतारना / नग्न करना). This is the opposite of DECK.\n\n• Disparate: Describes things essentially different in kind (भिन्न).\n\n• Precocial: Describes showing early development (समय से पहले विकसित)."
    },
    {
        id: "vocab_adorn_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nADORN",
        options: ["A) Deface", "B) Embellish", "C) Ponderous", "D) Resilient"],
        correct: "B",
        explanation: "• Main Word Meaning: 'ADORN' means to make more beautiful or attractive by adding decorative items (सजाना / अलंकृत करना).\n\n• Embellish (Correct Answer): Means to make something more beautiful by adding decorative elements (सजाना).\n\n• Deface: Means to spoil the external appearance of something (बिगाड़ना). This is the exact opposite of ADORN.\n\n• Ponderous: Describes something slow and clumsy due to weight (भारी-भरकम).\n\n• Resilient: Describes the ability to recover quickly (लचीला)."
    },
    {
        id: "vocab_ornament_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nORNAMENT",
        options: ["A) Disfigure", "B) Beautify", "C) Loquacious", "D) Fastidious"],
        correct: "B",
        explanation: "• Main Word Meaning: 'ORNAMENT' means to enhance the visual appeal of an object by decorating it (अलंकृत करना).\n\n• Beautify (Correct Answer): Means to enhance visual appeal by adding pleasing features (सुंदर बनाना).\n\n• Disfigure: Means to spoil the appearance of something (विरूपित करना). This is the exact opposite of ORNAMENT.\n\n• Loquacious: Describes someone talkative (बातूनी).\n\n• Fastidious: Describes someone attentive to detail (नुकताचीं)."
    },
    {
        id: "vocab_spoil_ant_ext",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nSPOIL",
        options: ["A) Deface", "B) Decorate", "C) Audacious", "D) Taciturn"],
        correct: "B",
        explanation: "• Main Word Meaning: 'SPOIL' means to diminish the quality, appearance, or beauty of something (खराब करना / बिगाड़ना).\n\n• Decorate (Correct Answer): Means to enhance appearance and aesthetic beauty (सजाना).\n\n• Deface: Means to spoil or disfigure appearance (बिगाड़ना). This is a synonym of SPOIL.\n\n• Audacious: Describes taking bold risks (साहसी).\n\n• Taciturn: Describes a person reserved in speech (कम बोलने वाला)."
    },
    {
        id: "vocab_understate_ant_ext",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nUNDERSTATE",
        options: ["A) Minimize", "B) Amplify", "C) Soporific", "D) Pragmatic"],
        correct: "B",
        explanation: "• Main Word Meaning: 'UNDERSTATE' means to describe or present something as smaller or less important than it actually is (कम करके बताना).\n\n• Amplify (Correct Answer): Means to enlarge, increase, or emphasize the significance of something (बढ़ाना / विस्तार करना).\n\n• Minimize: Means to represent as small or unimportant (कम करना). This is a synonym of UNDERSTATE.\n\n• Soporific: Describes something inducing sleepiness (निद्राजनक).\n\n• Pragmatic: Describes dealing with things sensibly (व्यावहारिक)."
    },
    {
        id: "vocab_lavish_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nLAVISH",
        options: ["A) Economical", "B) Extravagant", "C) Ubiquitous", "D) Equanimous"],
        correct: "B",
        explanation: "• Main Word Meaning: 'LAVISH' describes spending money or using resources in huge, extravagant quantities (फ़िज़ूलख़र्च / अति-व्ययी).\n\n• Extravagant (Correct Answer): Describes spending money far beyond necessity (फ़िज़ूलख़र्च).\n\n• Economical: Describes giving good value or being careful with money (मितव्ययी). This is the exact opposite of LAVISH.\n\n• Ubiquitous: Describes something present everywhere (सर्वव्यापी).\n\n• Equanimous: Describes being calm and composed (शांत)."
    },
    {
        id: "vocab_extravagant_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nEXTRAVAGANT",
        options: ["A) Frugal", "B) Spendthrift", "C) Disparate", "D) Precocial"],
        correct: "B",
        explanation: "• Main Word Meaning: 'EXTRAVAGANT' describes spending money or using resources far beyond necessity (अपव्ययी / फ़िज़ूलख़र्च).\n\n• Spendthrift (Correct Answer): Refers to someone who spends money in an irresponsible manner (फ़िज़ूलख़र्च).\n\n• Frugal: Describes being careful and economical with money (मितव्ययी). This is the exact opposite of EXTRAVAGANT.\n\n• Disparate: Describes things essentially different in kind (भिन्न).\n\n• Precocial: Describes showing early development (समय से पहले विकसित)."
    },
    {
        id: "vocab_unthrifty_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nUNTHRIFTY",
        options: ["A) Thrifty", "B) Wasteful", "C) Ponderous", "D) Resilient"],
        correct: "B",
        explanation: "• Main Word Meaning: 'UNTHRIFTY' describes being careless or wasteful with money and resources (लापरवाह / फ़िज़ूलख़र्च).\n\n• Wasteful (Correct Answer): Describes using money or resources carelessly without thrift (फ़िज़ूलख़र्च).\n\n• Thrifty: Describes using money and resources carefully (किफ़ायती). This is the exact opposite of UNTHRIFTY.\n\n• Ponderous: Describes something slow and clumsy due to weight (भारी-भरकम).\n\n• Resilient: Describes the ability to recover quickly (लचीला)."
    },
    {
        id: "vocab_frugal_ant_ext",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nFRUGAL",
        options: ["A) Economical", "B) Extravagant", "C) Loquacious", "D) Fastidious"],
        correct: "B",
        explanation: "• Main Word Meaning: 'FRUGAL' describes being simple and careful with money and resources (मितव्ययी / किफ़ायती).\n\n• Extravagant (Correct Answer): Describes spending money recklessly or in excessive amounts (फ़िज़ूलख़र्च).\n\n• Economical: Describes being careful and frugal with resources (बचत करने वाला). This is synonymous with FRUGAL.\n\n• Loquacious: Describes someone talkative (बातूनी).\n\n• Fastidious: Describes someone attentive to detail (नुकताचीं)."
    },
    {
        id: "vocab_thrifty_ant_ext",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nTHRIFTY",
        options: ["A) Frugal", "B) Unthrifty", "C) Audacious", "D) Taciturn"],
        correct: "B",
        explanation: "• Main Word Meaning: 'THRIFTY' describes using money and resources carefully without waste (किफ़ायती).\n\n• Unthrifty (Correct Answer): Describes being wasteful or irresponsible with resources (फ़िज़ूलख़र्च).\n\n• Frugal: Describes being economical and careful (मितव्ययी). This is synonymous with THRIFTY.\n\n• Audacious: Describes taking bold risks (साहसी).\n\n• Taciturn: Describes a person reserved in speech (कम बोलने वाला)."
    },
    {
        id: "vocab_parsimonious_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPARSIMONIOUS",
        options: ["A) Extravagant", "B) Stingy", "C) Soporific", "D) Pragmatic"],
        correct: "B",
        explanation: "• Main Word Meaning: 'PARSIMONIOUS' describes extreme unwillingness to spend money or use resources (कंजूस / मक्खीचूस).\n\n• Stingy (Correct Answer): Describes an extreme unwillingness to spend money or share (कंजूस).\n\n• Extravagant: Describes lacking restraint in spending (फ़िज़ूलख़र्च). This is the exact opposite of PARSIMONIOUS.\n\n• Soporific: Describes something inducing sleepiness (निद्राजनक).\n\n• Pragmatic: Describes dealing with things sensibly (व्यावहारिक)."
    },
    {
        id: "vocab_negate_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nNEGATE",
        options: ["A) Validate", "B) Nullify", "C) Ubiquitous", "D) Equanimous"],
        correct: "B",
        explanation: "• Main Word Meaning: 'NEGATE' means to make void, invalidate, or neutralize the effect of something (रद्द करना / अमान्य करना).\n\n• Nullify (Correct Answer): Means to make legally void, invalidate, or neutralize an effect (रद्द करना).\n\n• Validate: Means to check, prove, or declare accuracy/validity (पुष्टि करना). This is the exact opposite of NEGATE.\n\n• Ubiquitous: Describes something present everywhere (सर्वव्यापी).\n\n• Equanimous: Describes being calm and composed (शांत)."
    },
    {
        id: "vocab_disclaim_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDISCLAIM",
        options: ["A) Assert", "B) Deny", "C) Disparate", "D) Precocial"],
        correct: "B",
        explanation: "• Main Word Meaning: 'DISCLAIM' means to refuse to acknowledge or accept a claim, connection, or responsibility (इन्कार करना).\n\n• Deny (Correct Answer): Means to refuse to acknowledge connection with a claim or responsibility (खंडन करना).\n\n• Assert: Means to state a fact or belief confidently (दावा करना). This is the exact opposite of DISCLAIM.\n\n• Disparate: Describes things essentially different in kind (भिन्न).\n\n• Precocial: Describes showing early development (समय से पहले विकसित)."
    },
    {
        id: "vocab_renounce_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nRENOUNCE",
        options: ["A) Claim", "B) Relinquish", "C) Ponderous", "D) Resilient"],
        correct: "B",
        explanation: "• Main Word Meaning: 'RENOUNCE' means to formally declare abandonment of a claim, right, or position (त्यागना / छोड़ देना).\n\n• Relinquish (Correct Answer): Means to formally give up, surrender, or abandon a claim (त्यागना).\n\n• Claim: Means to state or assert that something belongs to oneself (दावा करना). This is the exact opposite of RENOUNCE.\n\n• Ponderous: Describes something slow and clumsy due to weight (भारी-भरकम).\n\n• Resilient: Describes the ability to recover quickly (लचीला)."
    },
    {
        id: "vocab_affirm_ant_ext",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nAFFIRM",
        options: ["A) Assert", "B) Deny", "C) Loquacious", "D) Fastidious"],
        correct: "B",
        explanation: "• Main Word Meaning: 'AFFIRM' means to state positively, validate, or confirm the truth of something (पुष्टि करना).\n\n• Deny (Correct Answer): Means to state that an assertion is untrue or refuse acceptance (इन्कार करना).\n\n• Assert: Means to state confidently and forcefully (दावा करना). This is synonymous with AFFIRM.\n\n• Loquacious: Describes someone talkative (बातूनी).\n\n• Fastidious: Describes someone attentive to detail (नुकताचीं)."
    },
    {
        id: "vocab_clubby_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCLUBBY",
        options: ["A) Aloof", "B) Sociable", "C) Audacious", "D) Taciturn"],
        correct: "B",
        explanation: "• Main Word Meaning: 'CLUBBY' describes being friendly, welcoming, and enjoying social interactions within a group (मिलनसार / समूहप्रिय).\n\n• Sociable (Correct Answer): Describes being friendly and enjoying warm social interactions (मिलनसार).\n\n• Aloof: Describes being cool, distant, and detached (अलग-थलग). This is the exact opposite of CLUBBY.\n\n• Audacious: Describes taking bold risks (साहसी).\n\n• Taciturn: Describes a person reserved in speech (कम बोलने वाला)."
    },
    {
        id: "vocab_extroverted_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nEXTROVERTED",
        options: ["A) Introverted", "B) Outgoing", "C) Soporific", "D) Pragmatic"],
        correct: "B",
        explanation: "• Main Word Meaning: 'EXTROVERTED' describes being socially confident, expressive, and energized by interactions (बहिर्मुखी).\n\n• Outgoing (Correct Answer): Describes being socially confident, expressive, and interactive (मिलनसार / बहिर्मुखी).\n\n• Introverted: Describes being quiet, reserved, and inward-looking (अंतर्मुखी). This is the exact opposite of EXTROVERTED.\n\n• Soporific: Describes something inducing sleepiness (निद्राजनक).\n\n• Pragmatic: Describes dealing with things sensibly (व्यावहारिक)."
    },
    {
        id: "vocab_precocial_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPRECOCIAL",
        options: ["A) Backward", "B) Advanced", "C) Ubiquitous", "D) Equanimous"],
        correct: "B",
        explanation: "• Main Word Meaning: 'PRECOCIAL' describes showing unusually early development, skills, or maturity (समय से पहले विकसित).\n\n• Advanced (Correct Answer): Describes showing unusually early development or high capability (उन्नत / विकसित).\n\n• Backward: Describes having made less progress than normal (पिछड़ा). This is the exact opposite of PRECOCIAL.\n\n• Ubiquitous: Describes something present everywhere (सर्वव्यापी).\n\n• Equanimous: Describes being calm and composed (शांत)."
    },
    {
        id: "vocab_colonial_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCOLONIAL",
        options: ["A) Solitary", "B) Communal", "C) Disparate", "D) Precocial"],
        correct: "B",
        explanation: "• Main Word Meaning: In biological and social contexts, 'COLONIAL' describes living or functioning together in connected groups or communities (सामूहिक / संघचारी).\n\n• Communal (Correct Answer): Describes living, growing, or functioning together in connected groups (सामूहिक).\n\n• Solitary: Describes existing or done alone (एकाकी / अकेला). This is the exact opposite of COLONIAL.\n\n• Disparate: Describes things essentially different in kind (भिन्न).\n\n• Precocial: Describes showing early development (समय से पहले विकसित)."
    },
    {
        id: "vocab_cordial_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCORDIAL",
        options: ["A) Hostile", "B) Amicable", "C) Ponderous", "D) Resilient"],
        correct: "B",
        explanation: "• Main Word Meaning: 'CORDIAL' describes being warm, friendly, and pleasant in social settings (हार्दिक / सौहार्दपूर्ण).\n\n• Amicable (Correct Answer): Describes displaying warmth, friendliness, and a pleasant manner (सौहार्दपूर्ण).\n\n• Hostile: Describes being unfriendly or showing opposition (शत्रुतापूर्ण). This is the exact opposite of CORDIAL.\n\n• Ponderous: Describes something slow and clumsy due to weight (भारी-भरकम).\n\n• Resilient: Describes the ability to recover quickly (लचीला)."
    },
    {
        id: "vocab_affable_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAFFABLE",
        options: ["A) Aloof", "B) Genial", "C) Loquacious", "D) Fastidious"],
        correct: "B",
        explanation: "• Main Word Meaning: 'AFFABLE' describes someone who is friendly, good-natured, and easy to talk to (मिलनसार / सुशील).\n\n• Genial (Correct Answer): Describes someone friendly, pleasant, and easy to converse with (सौम्य / मिलनसार).\n\n• Aloof: Describes being cool, distant, and detached (अलग-थलग). This is the exact opposite of AFFABLE.\n\n• Loquacious: Describes someone talkative (बातूनी).\n\n• Fastidious: Describes someone attentive to detail (नुकताचीं)."
    },
    {
        id: "vocab_amiable_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAMIABLE",
        options: ["A) Unpleasant", "B) Pleasant", "C) Audacious", "D) Taciturn"],
        correct: "B",
        explanation: "• Main Word Meaning: 'AMIABLE' describes having or displaying a friendly and pleasant manner (सौम्य / सुशील).\n\n• Pleasant (Correct Answer): Describes an agreeable, friendly, and warm disposition (सुखद / सौम्य).\n\n• Unpleasant: Describes being disagreeable or unfriendly (अप्रिय). This is the exact opposite of AMIABLE.\n\n• Audacious: Describes taking bold risks (साहसी).\n\n• Taciturn: Describes a person reserved in speech (कम बोलने वाला)."
    },
    {
        id: "vocab_introverted_ant_ext",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nINTROVERTED",
        options: ["A) Reserved", "B) Extroverted", "C) Soporific", "D) Pragmatic"],
        correct: "B",
        explanation: "• Main Word Meaning: 'INTROVERTED' describes being quiet, reserved, and inward-looking (अंतर्मुखी).\n\n• Extroverted (Correct Answer): Describes being outgoing, socially expressive, and energized by interactions (बहिर्मुखी).\n\n• Reserved: Describes being slow to reveal emotion or opinion (संकोची). This is synonymous with INTROVERTED.\n\n• Soporific: Describes something inducing sleepiness (निद्राजनक).\n\n• Pragmatic: Describes dealing with things sensibly (व्यावहारिक)."
    },
    {
        id: "vocab_induce_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nINDUCE",
        options: ["A) Prevent", "B) Prompt", "C) Ubiquitous", "D) Equanimous"],
        correct: "B",
        explanation: "• Main Word Meaning: 'INDUCE' means to succeed in persuading or bringing about an action or condition (प्रेरित करना / कारण बनना).\n\n• Prompt (Correct Answer): Means to bring about, persuade, or give rise to an action (प्रेरित करना).\n\n• Prevent: Means to keep something from happening (रोकना). This is the exact opposite of INDUCE.\n\n• Ubiquitous: Describes something present everywhere (सर्वव्यापी).\n\n• Equanimous: Describes being calm and composed (शांत)."
    },
    {
        id: "vocab_invoke_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nINVOKE",
        options: ["A) Dismiss", "B) Summon", "C) Disparate", "D) Precocial"],
        correct: "B",
        explanation: "• Main Word Meaning: 'INVOKE' means to cite or appeal to an authority, law, or spirit for assistance or validation (आह्वान करना / सहारा लेना).\n\n• Summon (Correct Answer): Means to call upon, appeal to, or cite an authority for aid (आह्वान करना / बुलाना).\n\n• Dismiss: Means to order or allow to leave, or reject consideration (खारिज करना). This is the opposite of INVOKE.\n\n• Disparate: Describes things essentially different in kind (भिन्न).\n\n• Precocial: Describes showing early development (समय से पहले विकसित)."
    },
    {
        id: "vocab_spawn_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSPAWN",
        options: ["A) Destroy", "B) Produce", "C) Ponderous", "D) Resilient"],
        correct: "B",
        explanation: "• Main Word Meaning: 'SPAWN' means to produce, generate, or bring forth into existence (उत्पन्न करना / जन्म देना).\n\n• Produce (Correct Answer): Means to generate, create, or bring forth into existence (उत्पन्न करना).\n\n• Destroy: Means to end the existence of something (नष्ट करना). This is the exact opposite of SPAWN.\n\n• Ponderous: Describes something slow and clumsy due to weight (भारी-भरकम).\n\n• Resilient: Describes the ability to recover quickly (लचीला)."
    },
    {
        id: "vocab_yield_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nYIELD",
        options: ["A) Consume", "B) Generate", "C) Loquacious", "D) Fastidious"],
        correct: "B",
        explanation: "• Main Word Meaning: In context of production, 'YIELD' means to produce or provide a result, crop, or return (उत्पादन करना / पैदावार देना).\n\n• Generate (Correct Answer): Means to produce, provide, or give forth a result or return (उत्पन्न करना).\n\n• Consume: Means to eat, drink, or use up resources (उपभोग करना). This is the opposite of YIELD.\n\n• Loquacious: Describes someone talkative (बातूनी).\n\n• Fastidious: Describes someone attentive to detail (नुकताचीं)."
    },
    {
        id: "vocab_impede_ant_ext",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nIMPEDE",
        options: ["A) Obstruct", "B) Facilitate", "C) Audacious", "D) Taciturn"],
        correct: "B",
        explanation: "• Main Word Meaning: 'IMPEDE' means to delay, obstruct, or hinder progress (बाधा डालना / रोकना).\n\n• Facilitate (Correct Answer): Means to make an action or process easy, smooth, or free of obstacles (सुगम बनाना).\n\n• Obstruct: Means to block or hinder progress (बाधा डालना). This is a synonym of IMPEDE.\n\n• Audacious: Describes taking bold risks (साहसी).\n\n• Taciturn: Describes a person reserved in speech (कम बोलने वाला)."
    },
    {
        id: "vocab_rebuke_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nREBUKE",
        options: ["A) Praise", "B) Reprimand", "C) Soporific", "D) Pragmatic"],
        correct: "B",
        explanation: "• Main Word Meaning: 'REBUKE' means to express sharp, stern disapproval or criticism (फटकारना / डाँटना).\n\n• Reprimand (Correct Answer): Means to express sharp, stern disapproval to someone (फटकारना).\n\n• Praise: Means to express warm approval or admiration (प्रशंसा करना). This is the exact opposite of REBUKE.\n\n• Soporific: Describes something inducing sleepiness (निद्राजनक).\n\n• Pragmatic: Describes dealing with things sensibly (व्यावहारिक)."
    },
    {
        id: "vocab_chide_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCHIDE",
        options: ["A) Applaud", "B) Scold", "C) Ubiquitous", "D) Equanimous"],
        correct: "B",
        explanation: "• Main Word Meaning: 'CHIDE' means to scold, reprimand, or express disapproval to someone (डाँटना / फटकारना).\n\n• Scold (Correct Answer): Means to express disapproval or reprimand someone firmly (डाँटना).\n\n• Applaud: Means to show approval or praise publicly (सराहना). This is the exact opposite of CHIDE.\n\n• Ubiquitous: Describes something present everywhere (सर्वव्यापी).\n\n• Equanimous: Describes being calm and composed (शांत)."
    },
    {
        id: "vocab_reproach_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nREPROACH",
        options: ["A) Commend", "B) Disapprove", "C) Disparate", "D) Precocial"],
        correct: "B",
        explanation: "• Main Word Meaning: 'REPROACH' means to express criticism, fault, or disappointment regarding actions (दोषारोपण करना / तिरस्कार करना).\n\n• Disapprove (Correct Answer): Means to express criticism or fault regarding actions (अस्वीकार करना / निंदा करना).\n\n• Commend: Means to praise formally or enthusiastically (सराहना). This is the exact opposite of REPROACH.\n\n• Disparate: Describes things essentially different in kind (भिन्न).\n\n• Precocial: Describes showing early development (समय से पहले विकसित)."
    },
    {
        id: "vocab_reprimand_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nREPRIMAND",
        options: ["A) Commendation", "B) Rebuke", "C) Ponderous", "D) Resilient"],
        correct: "B",
        explanation: "• Main Word Meaning: 'REPRIMAND' refers to a formal, severe expression of disapproval or criticism (फटकार / निंदा).\n\n• Rebuke (Correct Answer): Refers to a severe, formal expression of disapproval (फटकार).\n\n• Commendation: Refers to formal praise or recommendation (प्रशंसा). This is the exact opposite of REPRIMAND.\n\n• Ponderous: Describes something slow and clumsy due to weight (भारी-भरकम).\n\n• Resilient: Describes the ability to recover quickly (लचीला)."
    },
    {
        id: "vocab_adulation_syn_1",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nADULATION",
        options: ["A) Condemnation", "B) Flattery", "C) Loquacious", "D) Fastidious"],
        correct: "B",
        explanation: "• Main Word Meaning: 'ADULATION' refers to extreme, excessive, or servile praise and admiration (चापलूसी / अति-प्रशंसा).\n\n• Flattery (Correct Answer): Refers to excessive or insincere praise given to gain favor (चापलूसी).\n\n• Condemnation: Refers to an expression of strong disapproval (निंदा). This is the exact opposite of ADULATION.\n\n• Loquacious: Describes someone talkative (बातूनी).\n\n• Fastidious: Describes someone attentive to detail (नुकताचीं)."
    },
    {
        id: "vocab_adulation_ant_1",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nADULATION",
        options: ["A) Flattery", "B) Criticism", "C) Audacious", "D) Taciturn"],
        correct: "B",
        explanation: "• Main Word Meaning: 'ADULATION' refers to excessive praise or flattery (चापलूसी / अति-प्रशंसा).\n\n• Criticism (Correct Answer): Refers to pointing out faults or expressing disapproval (आलोचना / निंदा).\n\n• Flattery: Refers to excessive or insincere praise (चापलूसी). This is synonymous with ADULATION.\n\n• Audacious: Describes taking bold risks (साहसी).\n\n• Taciturn: Describes a person reserved in speech (कम बोलने वाला)."
    },
    {
        id: "vocab_adulation_fitb",
        type: "Fill in the Blank",
        question: "Select the most appropriate option to fill in the blank:\n'The young pop star found it difficult to handle the constant __________ of millions of fans.'",
        options: ["A) adulation", "B) criticism", "C) soporific", "D) pragmatic"],
        correct: "A",
        explanation: "• Main Word Meaning: In sentence completion, the context of adoring fans requires a word denoting passionate admiration.\n\n• adulation (Correct Answer): Fits perfectly as fans show extreme admiration, praise, and worship (अति-प्रशंसा).\n\n• criticism: Refers to pointing out faults or expressing disapproval (आलोचना).\n\n• soporific: Describes something inducing sleepiness (निद्राजनक).\n\n• pragmatic: Describes dealing with things sensibly (व्यावहारिक)."
    },
    {
        id: "vocab_idolatry_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nIDOLATRY",
        options: ["A) Scepticism", "B) Devotion", "C) Ubiquitous", "D) Equanimous"],
        correct: "B",
        explanation: "• Main Word Meaning: 'IDOLATRY' refers to extreme, blind admiration, reverence, or worship (मूर्तिपूजा / अन्धभक्ति).\n\n• Devotion (Correct Answer): Refers to extreme admiration, love, or spiritual worship (भक्ति / आदर).\n\n• Scepticism: Refers to a doubting or critical attitude (संदेहवाद). This is the exact opposite of IDOLATRY.\n\n• Ubiquitous: Describes something present everywhere (सर्वव्यापी).\n\n• Equanimous: Describes being calm and composed (शांत)."
    },
    {
        id: "vocab_idolatry_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nIDOLATRY",
        options: ["A) Devotion", "B) Scepticism", "C) Disparate", "D) Precocial"],
        correct: "B",
        explanation: "• Main Word Meaning: 'IDOLATRY' refers to uncritical, blind worship or reverence (अन्धभक्ति).\n\n• Scepticism (Correct Answer): Refers to a doubting or questioning attitude toward revered claims (संदेहवाद).\n\n• Devotion: Refers to extreme admiration or worship (भक्ति). This is synonymous with IDOLATRY.\n\n• Disparate: Describes things essentially different in kind (भिन्न).\n\n• Precocial: Describes showing early development (समय से पहले विकसित)."
    },
    {
        id: "vocab_idolization_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nIDOLIZATION",
        options: ["A) Contempt", "B) Admiration", "C) Ponderous", "D) Resilient"],
        correct: "B",
        explanation: "• Main Word Meaning: 'IDOLIZATION' refers to admiring or revering someone to an extreme degree (अंधभक्ति / अत्यधिक आदर).\n\n• Admiration (Correct Answer): Refers to regarding someone with high approval, respect, and devotion (प्रशंसा / आदर).\n\n• Contempt: Refers to the feeling that someone is worthless (तिरस्कार). This is the exact opposite of IDOLIZATION.\n\n• Ponderous: Describes something slow and clumsy due to weight (भारी-भरकम).\n\n• Resilient: Describes the ability to recover quickly (लचीला)."
    },
    {
        id: "vocab_idolization_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nIDOLIZATION",
        options: ["A) Admiration", "B) Contempt", "C) Loquacious", "D) Fastidious"],
        correct: "B",
        explanation: "• Main Word Meaning: 'IDOLIZATION' refers to deep, uncritical admiration and reverence (अत्यधिक आदर).\n\n• Contempt (Correct Answer): Refers to the feeling that someone is beneath consideration or worthless (तिरस्कार / अवहेलना).\n\n• Admiration: Refers to high approval and respect (आदर). This is synonymous with IDOLIZATION.\n\n• Loquacious: Describes someone talkative (बातूनी).\n\n• Fastidious: Describes someone attentive to detail (नुकताचीं)."
    },
    {
        id: "vocab_deification_syn_2",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEIFICATION",
        options: ["A) Degradation", "B) Exaltation", "C) Audacious", "D) Taciturn"],
        correct: "B",
        explanation: "• Main Word Meaning: 'DEIFICATION' refers to elevating a person to god-like status or divine rank (देवता का स्थान देना).\n\n• Exaltation (Correct Answer): Refers to raising someone to god-like status or praising highly (गुणगान / उच्च स्थान).\n\n• Degradation: Refers to lowering someone in honor or dignity (पतन). This is the exact opposite of DEIFICATION.\n\n• Audacious: Describes taking bold risks (साहसी).\n\n• Taciturn: Describes a person reserved in speech (कम बोलने वाला)."
    },
    {
        id: "vocab_deification_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDEIFICATION",
        options: ["A) Exaltation", "B) Degradation", "C) Soporific", "D) Pragmatic"],
        correct: "B",
        explanation: "• Main Word Meaning: 'DEIFICATION' refers to raising someone to divine rank and honor (देवता मानना).\n\n• Degradation (Correct Answer): Refers to the act of lowering someone in honor, status, or dignity (अवनति / पतन).\n\n• Exaltation: Refers to raising to god-like status (गुणगान). This is synonymous with DEIFICATION.\n\n• Soporific: Describes something inducing sleepiness (निद्राजनक).\n\n• Pragmatic: Describes dealing with things sensibly (व्यावहारिक)."
    },
    {
        id: "vocab_worship_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nWORSHIP",
        options: ["A) Scorn", "B) Reverence", "C) Ubiquitous", "D) Equanimous"],
        correct: "B",
        explanation: "• Main Word Meaning: 'WORSHIP' refers to showing profound reverence, honor, and devotion (पूजा / आराधना).\n\n• Reverence (Correct Answer): Refers to deep respect, awe, and honor shown toward an entity (श्रद्धा / आदर).\n\n• Scorn: Refers to open contempt or hatred (घृणा). This is the exact opposite of WORSHIP.\n\n• Ubiquitous: Describes something present everywhere (सर्वव्यापी).\n\n• Equanimous: Describes being calm and composed (शांत)."
    },
    {
        id: "vocab_worship_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nWORSHIP",
        options: ["A) Reverence", "B) Scorn", "C) Disparate", "D) Precocial"],
        correct: "B",
        explanation: "• Main Word Meaning: 'WORSHIP' refers to deep sacred honor and devotion (आराधना / पूजा).\n\n• Scorn (Correct Answer): Refers to open contempt, hatred, or disdain toward someone (घृणा / तिरस्कार).\n\n• Reverence: Refers to deep respect and awe (श्रद्धा). This is synonymous with WORSHIP.\n\n• Disparate: Describes things essentially different in kind (भिन्न).\n\n• Precocial: Describes showing early development (समय से पहले विकसित)."
    },
    {
        id: "vocab_adoration_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nADORATION",
        options: ["A) Hatred", "B) Devotion", "C) Ponderous", "D) Resilient"],
        correct: "B",
        explanation: "• Main Word Meaning: 'ADORATION' refers to deep affection, love, and respectful admiration (पूजा / अत्यधिक प्रेम).\n\n• Devotion (Correct Answer): Refers to deep affection, love, and spiritual respect (भक्ति / आदर).\n\n• Hatred: Refers to intense hostility and aversion (नफ़रत). This is the exact opposite of ADORATION.\n\n• Ponderous: Describes something slow and clumsy due to weight (भारी-भरकम).\n\n• Resilient: Describes the ability to recover quickly (लचीला)."
    },
    {
        id: "vocab_adoration_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nADORATION",
        options: ["A) Devotion", "B) Hatred", "C) Loquacious", "D) Fastidious"],
        correct: "B",
        explanation: "• Main Word Meaning: 'ADORATION' refers to deep love, reverence, and affection (अत्यधिक प्रेम).\n\n• Hatred (Correct Answer): Refers to intense hostility, aversion, and ill will (नफ़रत / घृणा).\n\n• Devotion: Refers to deep affection and love (भक्ति). This is synonymous with ADORATION.\n\n• Loquacious: Describes someone talkative (बातूनी).\n\n• Fastidious: Describes someone attentive to detail (नुकताचीं)."
    },
    {
        id: "vocab_reverence_syn_2",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nREVERENCE",
        options: ["A) Disrespect", "B) Awe", "C) Audacious", "D) Taciturn"],
        correct: "B",
        explanation: "• Main Word Meaning: 'REVERENCE' refers to a feeling of deep respect, awe, and honor (श्रद्धा / आदर).\n\n• Awe (Correct Answer): Refers to a feeling of reverential respect mixed with wonder (श्रद्धा / आश्चर्य).\n\n• Disrespect: Refers to a lack of respect or courtesy (अनादर). This is the exact opposite of REVERENCE.\n\n• Audacious: Describes taking bold risks (साहसी).\n\n• Taciturn: Describes a person reserved in speech (कम बोलने वाला)."
    },
    {
        id: "vocab_reverence_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nREVERENCE",
        options: ["A) Awe", "B) Disrespect", "C) Soporific", "D) Pragmatic"],
        correct: "B",
        explanation: "• Main Word Meaning: 'REVERENCE' refers to deep respect, honor, and awe (श्रद्धा).\n\n• Disrespect (Correct Answer): Refers to a lack of respect or courtesy (अनादर / अपमान).\n\n• Awe: Refers to reverential respect mixed with wonder (श्रद्धा). This is synonymous with REVERENCE.\n\n• Soporific: Describes something inducing sleepiness (निद्राजनक).\n\n• Pragmatic: Describes dealing with things sensibly (व्यावहारिक)."
    },
    {
        id: "vocab_veneration_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nVENERATION",
        options: ["A) Contempt", "B) Honor", "C) Ubiquitous", "D) Equanimous"],
        correct: "B",
        explanation: "• Main Word Meaning: 'VENERATION' refers to great respect, high honor, or sacred reverence (आदर / सम्मान).\n\n• Honor (Correct Answer): Refers to showing high respect, prestige, or reverence (सम्मान).\n\n• Contempt: Refers to the feeling that someone is beneath consideration (तिरस्कार). This is the exact opposite of VENERATION.\n\n• Ubiquitous: Describes something present everywhere (सर्वव्यापी).\n\n• Equanimous: Describes being calm and composed (शांत)."
    },
    {
        id: "vocab_veneration_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nVENERATION",
        options: ["A) Honor", "B) Contempt", "C) Disparate", "D) Precocial"],
        correct: "B",
        explanation: "• Main Word Meaning: 'VENERATION' refers to deep respect and sacred honor (सम्मान).\n\n• Contempt (Correct Answer): Refers to the feeling that a person or thing is worthless (तिरस्कार / अवहेलना).\n\n• Honor: Refers to showing high respect or reverence (सम्मान). This is synonymous with VENERATION.\n\n• Disparate: Describes things essentially different in kind (भिन्न).\n\n• Precocial: Describes showing early development (समय से पहले विकसित)."
    },
    {
        id: "vocab_glorification_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nGLORIFICATION",
        options: ["A) Vilification", "B) Praise", "C) Ponderous", "D) Resilient"],
        correct: "B",
        explanation: "• Main Word Meaning: 'GLORIFICATION' refers to praising or honoring someone in an exalted manner (महिमा मंडन / गुणगान).\n\n• Praise (Correct Answer): Refers to expressing warm approval, honor, or commendation (प्रशंसा).\n\n• Vilification: Refers to abusively disparaging someone (बदनामी / निंदा). This is the exact opposite of GLORIFICATION.\n\n• Ponderous: Describes something slow and clumsy due to weight (भारी-भरकम).\n\n• Resilient: Describes the ability to recover quickly (लचीला)."
    },
    {
        id: "vocab_glorification_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nGLORIFICATION",
        options: ["A) Praise", "B) Vilification", "C) Loquacious", "D) Fastidious"],
        correct: "B",
        explanation: "• Main Word Meaning: 'GLORIFICATION' refers to praising and elevating someone's reputation highly (गुणगान).\n\n• Vilification (Correct Answer): Refers to abusively disparaging or speaking ill of someone (बदनामी / निंदा).\n\n• Praise: Refers to expressing warm approval (प्रशंसा). This is synonymous with GLORIFICATION.\n\n• Loquacious: Describes someone talkative (बातूनी).\n\n• Fastidious: Describes someone attentive to detail (नुकताचीं)."
    },
    {
        id: "vocab_condemnation_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCONDEMNATION",
        options: ["A) Approval", "B) Censure", "C) Audacious", "D) Taciturn"],
        correct: "B",
        explanation: "• Main Word Meaning: 'CONDEMNATION' refers to an expression of strong disapproval or criticism (निंदा / भर्त्सना).\n\n• Censure (Correct Answer): Refers to a formal expression of severe disapproval (निंदा / कड़ा विरोध).\n\n• Approval: Refers to feeling or declaring that something is acceptable (स्वीकृति). This is the exact opposite of CONDEMNATION.\n\n• Audacious: Describes taking bold risks (साहसी).\n\n• Taciturn: Describes a person reserved in speech (कम बोलने वाला)."
    },
    {
        id: "vocab_condemnation_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nCONDEMNATION",
        options: ["A) Censure", "B) Approval", "C) Soporific", "D) Pragmatic"],
        correct: "B",
        explanation: "• Main Word Meaning: 'CONDEMNATION' refers to strong disapproval and harsh censure (निंदा).\n\n• Approval (Correct Answer): Refers to feeling or declaring that something is good and acceptable (स्वीकृति / अनुमोदन).\n\n• Censure: Refers to formal expression of severe disapproval (निंदा). This is synonymous with CONDEMNATION.\n\n• Soporific: Describes something inducing sleepiness (निद्राजनक).\n\n• Pragmatic: Describes dealing with things sensibly (व्यावहारिक)."
    },
    {
        id: "vocab_disregard_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDISREGARD",
        options: ["A) Attention", "B) Inattention", "C) Ubiquitous", "D) Equanimous"],
        correct: "B",
        explanation: "• Main Word Meaning: 'DISREGARD' means to pay no attention to or ignore someone or something (उपेक्षा करना / ध्यान न देना).\n\n• Inattention (Correct Answer): Refers to a lack of consideration, care, or mental focus (असावधानी / उपेक्षा).\n\n• Attention: Refers to notice, care, or mental focus directed toward someone (ध्यान). This is the exact opposite of DISREGARD.\n\n• Ubiquitous: Describes something present everywhere (सर्वव्यापी).\n\n• Equanimous: Describes being calm and composed (शांत)."
    },
    {
        id: "vocab_disregard_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDISREGARD",
        options: ["A) Inattention", "B) Attention", "C) Disparate", "D) Precocial"],
        correct: "B",
        explanation: "• Main Word Meaning: 'DISREGARD' refers to ignoring or neglecting someone or something (उपेक्षा).\n\n• Attention (Correct Answer): Refers to notice, care, or mental focus directed toward someone (ध्यान / परवाह).\n\n• Inattention: Refers to lack of focus or consideration (असावधानी). This is synonymous with DISREGARD.\n\n• Disparate: Describes things essentially different in kind (भिन्न).\n\n• Precocial: Describes showing early development (समय से पहले विकसित)."
    },
    {
        id: "vocab_loathing_syn_2",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nLOATHING",
        options: ["A) Affection", "B) Abhorrence", "C) Ponderous", "D) Resilient"],
        correct: "B",
        explanation: "• Main Word Meaning: 'LOATHING' refers to a feeling of intense revulsion, disgust, and hatred (घृणा / नफ़रत).\n\n• Abhorrence (Correct Answer): Refers to a feeling of intense revulsion, disgust, and hatred (घृणा).\n\n• Affection: Refers to a gentle feeling of fondness or love (स्नेह / प्रेम). This is the exact opposite of LOATHING.\n\n• Ponderous: Describes something slow and clumsy due to weight (भारी-भरकम).\n\n• Resilient: Describes the ability to recover quickly (लचीला)."
    },
    {
        id: "vocab_loathing_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nLOATHING",
        options: ["A) Abhorrence", "B) Affection", "C) Loquacious", "D) Fastidious"],
        correct: "B",
        explanation: "• Main Word Meaning: 'LOATHING' refers to intense disgust and hatred (नफ़रत).\n\n• Affection (Correct Answer): Refers to a feeling of fondness, warmth, or love (स्नेह / प्रेम).\n\n• Abhorrence: Refers to intense revulsion and disgust (घृणा). This is synonymous with LOATHING.\n\n• Loquacious: Describes someone talkative (बातूनी).\n\n• Fastidious: Describes someone attentive to detail (नुकताचीं)."
    },
    {
        id: "vocab_disparagement_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDISPARAGEMENT",
        options: ["A) Commendation", "B) Derogation", "C) Audacious", "D) Taciturn"],
        correct: "B",
        explanation: "• Main Word Meaning: 'DISPARAGEMENT' refers to speaking of someone in a derogatory or belittling manner (उपेक्षा / नीचा दिखाना).\n\n• Derogation (Correct Answer): Refers to treating or speaking of someone in a critical, degrading manner (मानहानि / नीचा दिखाना).\n\n• Commendation: Refers to formal praise or recommendation (प्रशंसा). This is the exact opposite of DISPARAGEMENT.\n\n• Audacious: Describes taking bold risks (साहसी).\n\n• Taciturn: Describes a person reserved in speech (कम बोलने वाला)."
    },
    {
        id: "vocab_disparagement_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDISPARAGEMENT",
        options: ["A) Derogation", "B) Commendation", "C) Soporific", "D) Pragmatic"],
        correct: "B",
        explanation: "• Main Word Meaning: 'DISPARAGEMENT' refers to insulting remarks intended to diminish worth (उपेक्षा / नीचा दिखाना).\n\n• Commendation (Correct Answer): Refers to formal praise, approval, or recommendation (प्रशंसा / सराहना).\n\n• Derogation: Refers to critical or degrading speech (मानहानि). This is synonymous with DISPARAGEMENT.\n\n• Soporific: Describes something inducing sleepiness (निद्राजनक).\n\n• Pragmatic: Describes dealing with things sensibly (व्यावहारिक)."
    },
    {
        id: "vocab_detraction_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDETRACTION",
        options: ["A) Praise", "B) Depreciation", "C) Ubiquitous", "D) Equanimous"],
        correct: "B",
        explanation: "• Main Word Meaning: 'DETRACTION' refers to taking away from the merit or reputation of a person (निंदा / यश कम करना).\n\n• Depreciation (Correct Answer): Refers to taking away from the estimated value, merit, or reputation of something (मूल्य ह्रास / उपेक्षा).\n\n• Praise: Refers to expressing approval or positive recognition (प्रशंसा). This is the exact opposite of DETRACTION.\n\n• Ubiquitous: Describes something present everywhere (सर्वव्यापी).\n\n• Equanimous: Describes being calm and composed (शांत)."
    },
    {
        id: "vocab_detraction_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDETRACTION",
        options: ["A) Depreciation", "B) Praise", "C) Disparate", "D) Precocial"],
        correct: "B",
        explanation: "• Main Word Meaning: 'DETRACTION' refers to taking away from someone's reputation or merit (अपयश / निंदा).\n\n• Praise (Correct Answer): Refers to expressing approval, honor, or positive recognition (प्रशंसा / सराहना).\n\n• Depreciation: Refers to taking away from reputation or value (उपेक्षा). This is synonymous with DETRACTION.\n\n• Disparate: Describes things essentially different in kind (भिन्न).\n\n• Precocial: Describes showing early development (समय से पहले विकसित)."
    },
    {
        id: "vocab_belittlement_syn_2",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nBELITTLEMENT",
        options: ["A) Exaltation", "B) Disparagement", "C) Ponderous", "D) Resilient"],
        correct: "B",
        explanation: "• Main Word Meaning: 'BELITTLEMENT' refers to making a person or achievement seem small or worthless (तुच्छ समझना / नीचा दिखाना).\n\n• Disparage (Correct Answer): Refers to the act of making someone or something seem small or worthless (नीचा दिखाना).\n\n• Exaltation: Refers to praising or elevating someone highly (गुणगान). This is the exact opposite of BELITTLEMENT.\n\n• Ponderous: Describes something slow and clumsy due to weight (भारी-भरकम).\n\n• Resilient: Describes the ability to recover quickly (लचीला)."
    },
    {
        id: "vocab_belittlement_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nBELITTLEMENT",
        options: ["A) Disparagement", "B) Exaltation", "C) Loquacious", "D) Fastidious"],
        correct: "B",
        explanation: "• Main Word Meaning: 'BELITTLEMENT' refers to treating someone's achievements as small or worthless (नीचा दिखाना).\n\n• Exaltation (Correct Answer): Refers to praising, elevating, or honoring someone highly (गुणगान / प्रशंसा).\n\n• Disparagement: Refers to making someone seem small or worthless (उपेक्षा). This is synonymous with BELITTLEMENT.\n\n• Loquacious: Describes someone talkative (बातूनी).\n\n• Fastidious: Describes someone attentive to detail (नुकताचीं)."
    }
];