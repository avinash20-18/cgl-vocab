const questions = [
    {
        id: "vocab_detestable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDETESTABLE",
        options: ["A) Honorable", "B) Commendable", "C) Despicable", "D) Decent"],
        correct: "C",
        explanation: "Detestable and Despicable both mean causing strong dislike, contempt, or hatred."
    },
    {
        id: "vocab_louche_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nLOUCHE",
        options: ["A) Ethical", "B) Disreputable", "C) Reputable", "D) Admirable"],
        correct: "B",
        explanation: "Louche means having a bad reputation or being questionable, matching 'Disreputable'."
    },
    {
        id: "vocab_ignominious_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nIGNOMINIOUS",
        options: ["A) Triumphant", "B) Shameful", "C) Honorable", "D) Transparent"],
        correct: "C",
        explanation: "Ignominious means causing public shame/disgrace, so 'Honorable' is its direct antonym."
    },
    {
        id: "vocab_earthly_fitb",
        type: "Fill in the Blank",
        question: "Select the most appropriate option to fill in the blank:\n'His earthly desires often distracted him from __________ pursuits.'",
        options: ["A) louche", "B) ignominious", "C) spiritual", "D) despicable"],
        correct: "C",
        explanation: "Based on exam context, 'earthly' material desires are contrasted against 'spiritual' pursuits."
    },
    {
        id: "vocab_thief_error",
        type: "Spotting the Error",
        question: "Identify the segment which contains a vocabulary mismatch/error:\n'The thief's (A) / commendable actions (B) / made the community (C) / lose trust in him. (D)'",
        options: ["A) Segment A", "B) Segment B", "C) Segment C", "D) Segment D"],
        correct: "B",
        explanation: "A thief's actions that break trust are 'despicable' or 'disreputable', not 'commendable' (praiseworthy)."
    },
    {
        id: "vocab_set1_1",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nEMBELLISH",
        options: ["A) Deface", "B) Blemish", "C) Caparison", "D) Belittle"],
        correct: "C",
        explanation: "'Embellish' and 'Caparison' both mean to decorate or adorn something."
    },
    {
        id: "vocab_set1_2",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nEMBELLISH",
        options: ["A) Deck", "B) Adorn", "C) Ornament", "D) Deface"],
        correct: "D",
        explanation: "'Deface' means to damage or spoil the appearance, which is opposite to embellish."
    },
    {
        id: "vocab_set1_3",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPRODIGAL",
        options: ["A) Frugal", "B) Profligate", "C) Economical", "D) Parsimonious"],
        correct: "B",
        explanation: "'Prodigal' and 'Profligate' both describe spending money or resources recklessly."
    },
    {
        id: "vocab_set1_4",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nPRODIGAL",
        options: ["A) Lavish", "B) Extravagant", "C) Parsimonious", "D) Imprudent"],
        correct: "C",
        explanation: "'Parsimonious' means extremely unwilling to spend money, opposite to prodigal."
    },
    {
        id: "vocab_set1_5",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nREPUDIATE",
        options: ["A) Espouse", "B) Disavow", "C) Corroborate", "D) Affirm"],
        correct: "B",
        explanation: "'Repudiate' and 'Disavow' both mean to reject, deny, or refuse to acknowledge."
    },
    {
        id: "vocab_set1_6",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nREPUDIATE",
        options: ["A) Recant", "B) Abdicate", "C) Corroborate", "D) Negate"],
        correct: "C",
        explanation: "'Corroborate' means to confirm or support with evidence, opposite to repudiating a claim."
    },
    {
        id: "vocab_set1_7",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSQUANDERER",
        options: ["A) Niggardly", "B) Thrifty", "C) Economical", "D) Spendthrift"],
        correct: "D",
        explanation: "Both 'Squanderer' and 'Spendthrift' refer to a person who wastes money carelessly."
    },
    {
        id: "vocab_set1_8",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPENURIOUS",
        options: ["A) Profuse", "B) Destitute", "C) Extravagant", "D) Lavish"],
        correct: "B",
        explanation: "'Penurious' means extremely poor or lacking money, matching 'Destitute'."
    },
    {
        id: "vocab_set1_9",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nBELITTLE",
        options: ["A) Understate", "B) Amplify", "C) Disparage", "D) Blemish"],
        correct: "B",
        explanation: "'Belittle' means to make something seem unimportant, whereas 'Amplify' enhances or increases it."
    },
    {
        id: "vocab_set1_10",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nABDICATE",
        options: ["A) Adopt", "B) Renounce", "C) Avow", "D) Espouse"],
        correct: "B",
        explanation: "'Abdicate' and 'Renounce' both mean to give up or formally reject a position, claim, or right."
    },
    {
        id: "vocab_set1_11",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nRECANT",
        options: ["A) Affirm", "B) Decorate", "C) Retract", "D) Amplify"],
        correct: "C",
        explanation: "'Recant' means to withdraw or retract a statement or opinion publicly."
    },
    {
        id: "vocab_set1_12",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nIMPRUDENT",
        options: ["A) Profligate", "B) Rash", "C) Wise", "D) Unthrifty"],
        correct: "C",
        explanation: "'Imprudent' means reckless or unwise; its antonym is 'Wise'."
    },
    {
        id: "vocab_set1_13",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nNIGGARDLY",
        options: ["A) Profuse", "B) Generous", "C) Stingy", "D) Unthrifty"],
        correct: "C",
        explanation: "'Niggardly' means reluctant to give or spend; stingy."
    },
    {
        id: "vocab_set1_14",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAVOW",
        options: ["A) Disclaim", "B) Declare", "C) Refute", "D) Deface"],
        correct: "B",
        explanation: "'Avow' means to openly declare, confess, or acknowledge."
    },
    {
        id: "vocab_set1_15",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nPROFUSE",
        options: ["A) Abundant", "B) Lavish", "C) Meager", "D) Copious"],
        correct: "C",
        explanation: "'Profuse' means abundant in quantity; 'Meager' means lacking in quantity."
    },
    {
        id: "vocab_set1_16",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSCRIMPING",
        options: ["A) Squandering", "B) Embellishing", "C) Decking", "D) Economizing"],
        correct: "D",
        explanation: "'Scrimping' means spending very carefully to save money, i.e., economizing."
    },
    {
        id: "vocab_set1_17",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nESPOUSE",
        options: ["A) Adopt", "B) Support", "C) Reject", "D) Affirm"],
        correct: "C",
        explanation: "'Espouse' means to adopt or support a cause/belief; 'Reject' is the antonym."
    },
    {
        id: "vocab_set1_18",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nREFUTE",
        options: ["A) Validate", "B) Disprove", "C) Endorse", "D) Support"],
        correct: "B",
        explanation: "'Refute' means to prove a statement or accusation to be wrong or false."
    },
    {
        id: "vocab_set1_19",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDISOWN",
        options: ["A) Acknowledge", "B) Reject", "C) Deny", "D) Disclaim"],
        correct: "A",
        explanation: "'Disown' means to refuse to acknowledge or accept relationship/responsibility."
    },
    {
        id: "vocab_set1_20",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nBLEMISH",
        options: ["A) Adornment", "B) Flaw", "C) Ornament", "D) Enhancement"],
        correct: "B",
        explanation: "A 'Blemish' is a mark or flaw that spoils the appearance of something."
    },
    {
        id: "vocab_dawdle_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDAWDLE",
        options: ["A) Rush", "B) Barrel", "C) Procrastinate", "D) Hasten"],
        correct: "C",
        explanation: "'Dawdle' and 'Procrastinate' both mean to waste time, delay, or move slowly."
    },
    {
        id: "vocab_fiddle_around_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nFIDDLE AROUND",
        options: ["A) Loiter", "B) Work", "C) Hasten", "D) Accelerate"],
        correct: "A",
        explanation: "'Fiddle around' and 'Loiter' both mean to spend time idly or aimlessly."
    },
    {
        id: "vocab_amble_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAMBLE",
        options: ["A) Sprint", "B) Stagger", "C) Rush", "D) Stroll"],
        correct: "D",
        explanation: "'Amble' and 'Stroll' both mean to walk at a slow, relaxed pace."
    },
    {
        id: "vocab_trifle_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nTRIFLE",
        options: ["A) Focus", "B) Dally", "C) Accelerate", "D) Extol"],
        correct: "B",
        explanation: "'Trifle' and 'Dally' both mean to act or deal with something casually or waste time."
    },
    {
        id: "vocab_stagger_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSTAGGER",
        options: ["A) Sprint", "B) Halt", "C) Lurch", "D) Accelerate"],
        correct: "C",
        explanation: "'Stagger' and 'Lurch' both mean to walk or move unsteadily."
    },
    {
        id: "vocab_decelerate_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDECELERATE",
        options: ["A) Expedite", "B) Slacken", "C) Barrel", "D) Hasten"],
        correct: "B",
        explanation: "'Decelerate' and 'Slacken' both mean to reduce speed or slow down."
    },
    {
        id: "vocab_dawdle_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDAWDLE",
        options: ["A) Procrastinate", "B) Amble", "C) Trifle", "D) Barrel"],
        correct: "D",
        explanation: "'Dawdle' means to move slowly or waste time, whereas 'Barrel' means to move or run quickly."
    },
    {
        id: "vocab_exert_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nEXERT",
        options: ["A) Idle", "B) Strive", "C) Relax", "D) Defer"],
        correct: "B",
        explanation: "'Exert' and 'Strive' both mean to make a great effort or apply force."
    },
    {
        id: "vocab_travail_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nTRAVAIL",
        options: ["A) Repose", "B) Leisure", "C) Drudgery", "D) Trifle"],
        correct: "C",
        explanation: "'Travail' and 'Drudgery' both refer to painful or laborious effort and hard work."
    },
    {
        id: "vocab_gregarious_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nGREGARIOUS",
        options: ["A) Reclusive", "B) Aloof", "C) Companionable", "D) Taciturn"],
        correct: "C",
        explanation: "'Gregarious' and 'Companionable' both mean fond of company; friendly and sociable."
    },
    {
        id: "vocab_gregarious_ant_1",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nGREGARIOUS",
        options: ["A) Reclusive", "B) Affable", "C) Amiable", "D) Cordial"],
        correct: "A",
        explanation: "'Gregarious' means sociable, while 'Reclusive' means avoiding the company of others."
    },
    {
        id: "vocab_gregarious_ant_2",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nGREGARIOUS",
        options: ["A) Extroverted", "B) Aloof", "C) Companionable", "D) Clubby"],
        correct: "B",
        explanation: "'Aloof' means cool, distant, or unapproachable, which is opposite to gregarious."
    },
    {
        id: "vocab_reticent_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nRETICENT",
        options: ["A) Extroverted", "B) Talkative", "C) Affable", "D) Reserved"],
        correct: "D",
        explanation: "'Reticent' means not revealing one's thoughts or feelings readily; silent/reserved."
    },
    {
        id: "vocab_taciturn_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nTACITURN",
        options: ["A) Uncommunicative", "B) Voluble", "C) Outgoing", "D) Sociable"],
        correct: "A",
        explanation: "'Taciturn' and 'Uncommunicative' both mean reserved or untalkative in speech."
    },
    {
        id: "vocab_engender_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nENGENDER",
        options: ["A) Quell", "B) Generate", "C) Repress", "D) Stifle"],
        correct: "B",
        explanation: "'Engender' and 'Generate' both mean to cause, produce, or give rise to something."
    },
    {
        id: "vocab_reprove_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nREPROVE",
        options: ["A) Laud", "B) Approve", "C) Admonish", "D) Sanction"],
        correct: "C",
        explanation: "'Reprove' and 'Admonish' both mean to reprimand or express disapproval to someone."
    },
    {
        id: "vocab_reprove_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nREPROVE",
        options: ["A) Chide", "B) Reproach", "C) Castigate", "D) Laud"],
        correct: "D",
        explanation: "'Reprove' means to criticize or rebuke, whereas 'Laud' means to praise highly."
    },
    {
        id: "vocab_venerate_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nVENERATE",
        options: ["A) Defame", "B) Revere", "C) Scorn", "D) Profane"],
        correct: "B",
        explanation: "'Venerate' and 'Revere' both mean to regard with great respect or admiration."
    },
    {
        id: "vocab_extol_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nEXTOL",
        options: ["A) Castigate", "B) Reproach", "C) Exalt", "D) Affront"],
        correct: "C",
        explanation: "'Extol' and 'Exalt' both mean to praise enthusiastically and publicly."
    },
    {
        id: "vocab_deify_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEIFY",
        options: ["A) Desecrate", "B) Blaspheme", "C) Insult", "D) Idolize"],
        correct: "D",
        explanation: "'Deify' and 'Idolize' both mean to treat or worship someone/something as a deity."
    },
    {
        id: "vocab_venerate_ant_1",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nVENERATE",
        options: ["A) Exalt", "B) Revere", "C) Blaspheme", "D) Adore"],
        correct: "C",
        explanation: "'Venerate' means to respect deeply, while 'Blaspheme' means to speak disrespectfully or sacrilegiously."
    },
    {
        id: "vocab_scorn_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSCORN",
        options: ["A) Exalt", "B) Disdain", "C) Deify", "D) Glorify"],
        correct: "B",
        explanation: "'Scorn' and 'Disdain' both mean to feel or express contempt or mockery."
    },
    {
        id: "vocab_desecrate_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDESECRATE",
        options: ["A) Revere", "B) Sanctify", "C) Exalt", "D) Profane"],
        correct: "D",
        explanation: "'Desecrate' and 'Profane' both mean to treat something sacred with disrespect."
    },
    {
        id: "vocab_affront_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAFFRONT",
        options: ["A) Respect", "B) Insult", "C) Adore", "D) Honor"],
        correct: "B",
        explanation: "'Affront' and 'Insult' both refer to an action or remark that causes offense."
    },
    {
        id: "vocab_quell_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nQUELL",
        options: ["A) Engender", "B) Induce", "C) Suppress", "D) Invoke"],
        correct: "C",
        explanation: "'Quell' and 'Suppress' both mean to put an end to something, typically by force."
    },
    {
        id: "vocab_castigate_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCASTIGATE",
        options: ["A) Extol", "B) Chastise", "C) Exalt", "D) Laud"],
        correct: "B",
        explanation: "'Castigate' and 'Chastise' both mean to reprimand or criticize someone severely."
    },
    {
        id: "vocab_depravity_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEPRAVITY",
        options: ["A) Rectitude", "B) Scrupulosity", "C) Wickedness", "D) Virtue"],
        correct: "C",
        explanation: "'Depravity' and 'Wickedness' both refer to moral corruption."
    },
    {
        id: "vocab_abjection_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nABJECTION",
        options: ["A) Goodness", "B) Righteousness", "C) Morality", "D) Degradation"],
        correct: "D",
        explanation: "'Abjection' and 'Degradation' refer to a low or degraded state."
    },
    {
        id: "vocab_dissipation_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDISSIPATION",
        options: ["A) Rectitude", "B) Profligacy", "C) Scrupulosity", "D) Preservation"],
        correct: "B",
        explanation: "'Dissipation' and 'Profligacy' both refer to squandering resources wastefully."
    },
    {
        id: "vocab_perversion_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPERVERSION",
        options: ["A) Distortion", "B) Virtue", "C) Goodness", "D) Righteousness"],
        correct: "A",
        explanation: "'Perversion' and 'Distortion' refer to corrupting something from its right state."
    },
    {
        id: "vocab_depravity_ant_1",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDEPRAVITY",
        options: ["A) Corruption", "B) Decadency", "C) Rectitude", "D) Degeneracy"],
        correct: "C",
        explanation: "'Depravity' means moral corruption, whereas 'Rectitude' means moral integrity."
    },
    {
        id: "vocab_depravity_ant_2",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDEPRAVITY",
        options: ["A) Abjection", "B) Debasement", "C) Degradation", "D) Scrupulosity"],
        correct: "D",
        explanation: "'Scrupulosity' means high ethical standards, opposite to depravity."
    },
    {
        id: "vocab_incorrigible_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nINCORRIGIBLE",
        options: ["A) Reformable", "B) Curable", "C) Irreformable", "D) Redeemable"],
        correct: "C",
        explanation: "'Incorrigible' and 'Irreformable' both mean incapable of being corrected."
    },
    {
        id: "vocab_impenitent_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nIMPENITENT",
        options: ["A) Reformable", "B) Remorseless", "C) Curable", "D) Savable"],
        correct: "B",
        explanation: "'Impenitent' and 'Remorseless' both mean showing no regret for wrongdoings."
    },
    {
        id: "vocab_incorrigible_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nINCORRIGIBLE",
        options: ["A) Irremediable", "B) Incurable", "C) Reformable", "D) Irrecoverable"],
        correct: "C",
        explanation: "'Incorrigible' means impossible to correct, while 'Reformable' means capable of improvement."
    },
    {
        id: "vocab_servile_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSERVILE",
        options: ["A) Imperious", "B) Submissive", "C) Supercilious", "D) Arrogant"],
        correct: "B",
        explanation: "'Servile' and 'Submissive' mean showing excessive willingness to serve others."
    },
    {
        id: "vocab_slavish_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSLAVISH",
        options: ["A) Haughty", "B) Lordly", "C) Imperious", "D) Obsequious"],
        correct: "D",
        explanation: "'Slavish' and 'Obsequious' refer to overly submissive behavior."
    },
    {
        id: "vocab_abject_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nABJECT",
        options: ["A) Ignoble", "B) Supercilious", "C) Arrogant", "D) Lordly"],
        correct: "A",
        explanation: "'Abject' and 'Ignoble' describe a completely degraded or hopeless state."
    },
    {
        id: "vocab_menial_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nMENIAL",
        options: ["A) Haughty", "B) Lowly", "C) Imperious", "D) Superior"],
        correct: "B",
        explanation: "'Menial' and 'Lowly' refer to tasks requiring little skill and lacking status."
    },
    {
        id: "vocab_sycophant_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSYCOPHANT",
        options: ["A) Leader", "B) Prince", "C) Flatterer", "D) Critic"],
        correct: "C",
        explanation: "'Sycophant' and 'Flatterer' refer to a person who acts servile to gain favor."
    },
    {
        id: "vocab_toadyish_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nTOADYISH",
        options: ["A) Supercilious", "B) Fawning", "C) Arrogant", "D) Lordly"],
        correct: "B",
        explanation: "'Toadyish' and 'Fawning' both mean behaving in a servile, flattering manner."
    },
    {
        id: "vocab_subservient_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSUBSERVIENT",
        options: ["A) Imperious", "B) Haughty", "C) Compliant", "D) Dominant"],
        correct: "C",
        explanation: "'Subservient' and 'Compliant' both mean prepared to obey others unquestioningly."
    },
    {
        id: "vocab_demure_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEMURE",
        options: ["A) Arrogant", "B) Modest", "C) Supercilious", "D) Imperious"],
        correct: "B",
        explanation: "'Demure' and 'Modest' describe someone who is reserved, quiet, or shy."
    },
    {
        id: "vocab_servile_ant_1",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nSERVILE",
        options: ["A) Subservient", "B) Toadyish", "C) Imperious", "D) Abject"],
        correct: "C",
        explanation: "'Servile' means submissive, whereas 'Imperious' means domineering."
    },
    {
        id: "vocab_supercilious_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSUPERCILIOUS",
        options: ["A) Servile", "B) Demure", "C) Subservient", "D) Haughty"],
        correct: "D",
        explanation: "'Supercilious' and 'Haughty' both mean behaving as if superior to others."
    },
    {
        id: "vocab_ominous_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nOMINOUS",
        options: ["A) Auspicious", "B) Propitious", "C) Menacing", "D) Prosperous"],
        correct: "C",
        explanation: "'Ominous' and 'Menacing' both suggest that something bad is about to happen."
    },
    {
        id: "vocab_baleful_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nBALEFUL",
        options: ["A) Propitious", "B) Sinister", "C) Bright", "D) Hopeful"],
        correct: "B",
        explanation: "'Baleful' and 'Sinister' both mean threatening harm or evil."
    },
    {
        id: "vocab_inauspicious_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nINAUSPICIOUS",
        options: ["A) Auspicious", "B) Unfavorable", "C) Propitious", "D) Prosperous"],
        correct: "B",
        explanation: "'Inauspicious' and 'Unfavorable' mean unpromising or unlucky."
    },
    {
        id: "vocab_sinister_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSINISTER",
        options: ["A) Hopeful", "B) Bright", "C) Threatening", "D) Auspicious"],
        correct: "C",
        explanation: "'Sinister' and 'Threatening' both give the impression of evil or danger."
    },
    {
        id: "vocab_ominous_ant_1",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nOMINOUS",
        options: ["A) Menacing", "B) Auspicious", "C) Portentous", "D) Baleful"],
        correct: "B",
        explanation: "'Ominous' indicates a bad outcome, whereas 'Auspicious' indicates a favorable outcome."
    },
    {
        id: "vocab_propitious_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPROPITIOUS",
        options: ["A) Baleful", "B) Sinister", "C) Inauspicious", "D) Favorable"],
        correct: "D",
        explanation: "'Propitious' and 'Favorable' both mean indicating a good chance of success."
    },
    {
        id: "vocab_corruption_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCORRUPTION",
        options: ["A) Rectitude", "B) Depravity", "C) Scrupulosity", "D) Virtue"],
        correct: "B",
        explanation: "'Corruption' and 'Depravity' both refer to moral decay or dishonesty."
    },
    {
        id: "vocab_debasement_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEBASEMENT",
        options: ["A) Goodness", "B) Excellence", "C) Degradation", "D) Elevation"],
        correct: "C",
        explanation: "'Debasement' and 'Degradation' mean lowering quality or value."
    },
    {
        id: "vocab_decadency_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDECADENCY",
        options: ["A) Integrity", "B) Righteousness", "C) Scrupulosity", "D) Decline"],
        correct: "D",
        explanation: "'Decadency' and 'Decline' refer to moral or cultural decay."
    },
    {
        id: "vocab_degeneracy_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEGENERACY",
        options: ["A) Rectitude", "B) Deterioration", "C) Morality", "D) Righteousness"],
        correct: "B",
        explanation: "'Degeneracy' and 'Deterioration' refer to moral or physical decline."
    },
    {
        id: "vocab_degradation_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEGRADATION",
        options: ["A) Virtue", "B) Goodness", "C) Humiliation", "D) Scrupulosity"],
        correct: "C",
        explanation: "'Degradation' and 'Humiliation' mean lowering in dignity or status."
    },
    {
        id: "vocab_goodness_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nGOODNESS",
        options: ["A) Rectitude", "B) Depravity", "C) Scrupulosity", "D) Morality"],
        correct: "B",
        explanation: "'Goodness' represents moral excellence, opposite to 'Depravity'."
    },
    {
        id: "vocab_virtue_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nVIRTUE",
        options: ["A) Righteousness", "B) Scrupulosity", "C) Rectitude", "D) Depravity"],
        correct: "D",
        explanation: "'Virtue' means moral excellence, whereas 'Depravity' means moral corruption."
    },
    {
        id: "vocab_morality_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nMORALITY",
        options: ["A) Corruption", "B) Scrupulosity", "C) Rectitude", "D) Righteousness"],
        correct: "A",
        explanation: "'Morality' refers to ethical behavior, whereas 'Corruption' refers to immoral behavior."
    },
    {
        id: "vocab_righteousness_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nRIGHTEOUSNESS",
        options: ["A) Goodness", "B) Virtue", "C) Depravity", "D) Scrupulosity"],
        correct: "C",
        explanation: "'Righteousness' means being morally right, opposite to 'Depravity'."
    },
    {
        id: "vocab_hopeless_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nHOPELESS",
        options: ["A) Savable", "B) Curable", "C) Reformable", "D) Incorrigible"],
        correct: "D",
        explanation: "'Hopeless' and 'Incorrigible' both mean beyond correction or improvement."
    },
    {
        id: "vocab_irrecoverable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nIRRECOVERABLE",
        options: ["A) Retrievable", "B) Irretrievable", "C) Savable", "D) Curable"],
        correct: "B",
        explanation: "'Irrecoverable' and 'Irretrievable' mean impossible to regain."
    },
    {
        id: "vocab_incurable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nINCURABLE",
        options: ["A) Curable", "B) Reformable", "C) Irremediable", "D) Savable"],
        correct: "C",
        explanation: "'Incurable' and 'Irremediable' both mean impossible to cure."
    },
    {
        id: "vocab_irremediable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nIRREMEDIABLE",
        options: ["A) Unfixable", "B) Curable", "C) Savable", "D) Reformable"],
        correct: "A",
        explanation: "'Irremediable' and 'Unfixable' mean beyond repair."
    },
    {
        id: "vocab_unredeemable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nUNREDEEMABLE",
        options: ["A) Redeemable", "B) Irredeemable", "C) Reformable", "D) Curable"],
        correct: "B",
        explanation: "'Unredeemable' and 'Irredeemable' mean impossible to save or restore."
    },
    {
        id: "vocab_savable_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nSAVABLE",
        options: ["A) Reformable", "B) Curable", "C) Incorrigible", "D) Redeemable"],
        correct: "C",
        explanation: "'Savable' means capable of being saved, opposite to 'Incorrigible'."
    },
    {
        id: "vocab_curable_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nCURABLE",
        options: ["A) Savable", "B) Incurable", "C) Reformable", "D) Retrievable"],
        correct: "B",
        explanation: "'Curable' means able to be healed, opposite to 'Incurable'."
    },
    {
        id: "vocab_arrogant_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nARROGANT",
        options: ["A) Supercilious", "B) Servile", "C) Imperious", "D) Haughty"],
        correct: "B",
        explanation: "'Arrogant' means proud, whereas 'Servile' means submissive."
    },
    {
        id: "vocab_haughty_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nHAUGHTY",
        options: ["A) Supercilious", "B) Imperious", "C) Arrogant", "D) Subservient"],
        correct: "D",
        explanation: "'Haughty' means proud, opposite to 'Subservient'."
    },
    {
        id: "vocab_lordly_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nLORDLY",
        options: ["A) Supercilious", "B) Imperious", "C) Abject", "D) Arrogant"],
        correct: "C",
        explanation: "'Lordly' means grand/proud, opposite to 'Abject'."
    },
    {
        id: "vocab_portentous_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPORTENTOUS",
        options: ["A) Auspicious", "B) Ominous", "C) Bright", "D) Propitious"],
        correct: "B",
        explanation: "'Portentous' and 'Ominous' both mean warning of evil."
    },
    {
        id: "vocab_unthreatening_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nUNTHREATENING",
        options: ["A) Auspicious", "B) Bright", "C) Menacing", "D) Propitious"],
        correct: "C",
        explanation: "'Unthreatening' means harmless, whereas 'Menacing' means threatening harm."
    },
    {
        id: "vocab_bright_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nBRIGHT",
        options: ["A) Auspicious", "B) Propitious", "C) Prosperous", "D) Ominous"],
        correct: "D",
        explanation: "'Bright' indicates a promising future, opposite to 'Ominous'."
    },
    {
        id: "vocab_prosperous_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPROSPEROUS",
        options: ["A) Baleful", "B) Thriving", "C) Sinister", "D) Inauspicious"],
        correct: "B",
        explanation: "'Prosperous' and 'Thriving' both mean successful and flourishing."
    },
    {
        id: "vocab_garnish_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nGARNISH",
        options: ["A) Understate", "B) Blemish", "C) Adorn", "D) Spoil"],
        correct: "C",
        explanation: "'Garnish' and 'Adorn' both mean to decorate."
    },
    {
        id: "vocab_amplify_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAMPLIFY",
        options: ["A) Understate", "B) Belittle", "C) Blemish", "D) Magnify"],
        correct: "D",
        explanation: "'Amplify' and 'Magnify' both mean to enlarge or increase."
    },
    {
        id: "vocab_deck_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDECK",
        options: ["A) Decorate", "B) Deface", "C) Spoil", "D) Belittle"],
        correct: "A",
        explanation: "'Deck' and 'Decorate' both mean to adorn."
    },
    {
        id: "vocab_adorn_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nADORN",
        options: ["A) Deface", "B) Embellish", "C) Blemish", "D) Understate"],
        correct: "B",
        explanation: "'Adorn' and 'Embellish' both mean to make beautiful with decoration."
    },
    {
        id: "vocab_ornament_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nORNAMENT",
        options: ["A) Spoil", "B) Blemish", "C) Beautify", "D) Belittle"],
        correct: "C",
        explanation: "'Ornament' and 'Beautify' both mean to add decorative features."
    },
    {
        id: "vocab_spoil_ant_ext",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nSPOIL",
        options: ["A) Deface", "B) Blemish", "C) Understate", "D) Decorate"],
        correct: "D",
        explanation: "'Spoil' means to ruin, opposite to 'Decorate'."
    },
    {
        id: "vocab_understate_ant_ext",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nUNDERSTATE",
        options: ["A) Amplify", "B) Belittle", "C) Deface", "D) Blemish"],
        correct: "A",
        explanation: "'Understate' means to minimize, opposite to 'Amplify'."
    },
    {
        id: "vocab_lavish_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nLAVISH",
        options: ["A) Frugal", "B) Extravagant", "C) Niggardly", "D) Penurious"],
        correct: "B",
        explanation: "'Lavish' and 'Extravagant' both mean rich or spent in large amounts."
    },
    {
        id: "vocab_extravagant_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nEXTRAVAGANT",
        options: ["A) Economical", "B) Frugal", "C) Spendthrift", "D) Thrifty"],
        correct: "C",
        explanation: "'Extravagant' and 'Spendthrift' refer to spending excessively."
    },
    {
        id: "vocab_unthrifty_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nUNTHRIFTY",
        options: ["A) Economical", "B) Wasteful", "C) Frugal", "D) Parsimonious"],
        correct: "B",
        explanation: "'Unthrifty' and 'Wasteful' both mean careless with money."
    },
    {
        id: "vocab_frugal_ant_ext",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nFRUGAL",
        options: ["A) Thrifty", "B) Conserving", "C) Extravagant", "D) Parsimonious"],
        correct: "C",
        explanation: "'Frugal' means economical, opposite to 'Extravagant'."
    },
    {
        id: "vocab_thrifty_ant_ext",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nTHRIFTY",
        options: ["A) Unthrifty", "B) Frugal", "C) Economical", "D) Conserving"],
        correct: "A",
        explanation: "'Thrifty' means careful with money, opposite to 'Unthrifty'."
    },
    {
        id: "vocab_parsimonious_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPARSIMONIOUS",
        options: ["A) Extravagant", "B) Stingy", "C) Lavish", "D) Profuse"],
        correct: "B",
        explanation: "'Parsimonious' and 'Stingy' both mean unwilling to spend money."
    },
    {
        id: "vocab_negate_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nNEGATE",
        options: ["A) Affirm", "B) Corroborate", "C) Nullify", "D) Confirm"],
        correct: "C",
        explanation: "'Negate' and 'Nullify' both mean to make ineffective or invalid."
    },
    {
        id: "vocab_disclaim_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDISCLAIM",
        options: ["A) Claim", "B) Deny", "C) Accept", "D) Espouse"],
        correct: "B",
        explanation: "'Disclaim' and 'Deny' both mean to refuse responsibility or connection."
    },
    {
        id: "vocab_renounce_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nRENOUNCE",
        options: ["A) Relinquish", "B) Espouse", "C) Accept", "D) Adopt"],
        correct: "A",
        explanation: "'Renounce' and 'Relinquish' both mean to formally give up a claim or belief."
    },
    {
        id: "vocab_affirm_ant_ext",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nAFFIRM",
        options: ["A) Corroborate", "B) Avow", "C) Support", "D) Deny"],
        correct: "D",
        explanation: "'Affirm' means to state as true, opposite to 'Deny'."
    },
    {
        id: "vocab_clubby_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCLUBBY",
        options: ["A) Aloof", "B) Sociable", "C) Reticent", "D) Solitary"],
        correct: "B",
        explanation: "'Clubby' and 'Sociable' both mean friendly and social."
    },
    {
        id: "vocab_extroverted_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nEXTROVERTED",
        options: ["A) Introverted", "B) Taciturn", "C) Outgoing", "D) Reticent"],
        correct: "C",
        explanation: "'Extroverted' and 'Outgoing' mean socially confident and expressive."
    },
    {
        id: "vocab_precocial_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPRECOCIAL",
        options: ["A) Advanced", "B) Retarded", "C) Slow", "D) Aloof"],
        correct: "A",
        explanation: "'Precocial' and 'Advanced' refer to early development."
    },
    {
        id: "vocab_colonial_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCOLONIAL",
        options: ["A) Solitary", "B) Communal", "C) Reclusive", "D) Taciturn"],
        correct: "B",
        explanation: "'Colonial' and 'Communal' refer to living together in groups."
    },
    {
        id: "vocab_cordial_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCORDIAL",
        options: ["A) Hostile", "B) Aloof", "C) Amicable", "D) Cold"],
        correct: "C",
        explanation: "'Cordial' and 'Amicable' both mean warm and friendly."
    },
    {
        id: "vocab_affable_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAFFABLE",
        options: ["A) Unapproachable", "B) Aloof", "C) Reticent", "D) Genial"],
        correct: "D",
        explanation: "'Affable' and 'Genial' both mean friendly and easy to talk to."
    },
    {
        id: "vocab_amiable_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAMIABLE",
        options: ["A) Hostile", "B) Pleasant", "C) Taciturn", "D) Antisocial"],
        correct: "B",
        explanation: "'Amiable' and 'Pleasant' both mean friendly and good-natured."
    },
    {
        id: "vocab_introverted_ant_ext",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nINTROVERTED",
        options: ["A) Reticent", "B) Taciturn", "C) Extroverted", "D) Aloof"],
        correct: "C",
        explanation: "'Introverted' means quiet/reserved, opposite to 'Extroverted'."
    },
    {
        id: "vocab_induce_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nINDUCE",
        options: ["A) Prevent", "B) Stop", "C) Quell", "D) Prompt"],
        correct: "D",
        explanation: "'Induce' and 'Prompt' both mean to bring about or persuade."
    },
    {
        id: "vocab_invoke_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nINVOKE",
        options: ["A) Summon", "B) Suppress", "C) Quell", "D) Restrict"],
        correct: "A",
        explanation: "'Invoke' and 'Summon' both mean to call upon or bring forth."
    },
    {
        id: "vocab_spawn_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSPAWN",
        options: ["A) Destroy", "B) Produce", "C) Suppress", "D) Halt"],
        correct: "B",
        explanation: "'Spawn' and 'Produce' both mean to generate or bring forth."
    },
    {
        id: "vocab_yield_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nYIELD",
        options: ["A) Restrict", "B) Impede", "C) Generate", "D) Suppress"],
        correct: "C",
        explanation: "'Yield' and 'Generate' both mean to produce or provide."
    },
    {
        id: "vocab_impede_ant_ext",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nIMPEDE",
        options: ["A) Restrict", "B) Facilitate", "C) Quell", "D) Crush"],
        correct: "B",
        explanation: "'Impede' means to obstruct, opposite to 'Facilitate'."
    },
    {
        id: "vocab_rebuke_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nREBUKE",
        options: ["A) Compliment", "B) Praise", "C) Honor", "D) Reprimand"],
        correct: "D",
        explanation: "'Rebuke' and 'Reprimand' both mean sharp disapproval."
    },
    {
        id: "vocab_chide_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCHIDE",
        options: ["A) Scold", "B) Praise", "C) Extol", "D) Commend"],
        correct: "A",
        explanation: "'Chide' and 'Scold' both mean to rebuke gently."
    },
    {
        id: "vocab_reproach_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nREPROACH",
        options: ["A) Praise", "B) Disapprove", "C) Honor", "D) Applaud"],
        correct: "B",
        explanation: "'Reproach' and 'Disapprove' both express criticism or disappointment."
    },
    {
        id: "vocab_reprimand_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nREPRIMAND",
        options: ["A) Commendation", "B) Praise", "C) Rebuke", "D) Honor"],
        correct: "C",
        explanation: "'Reprimand' and 'Rebuke' refer to a formal expression of disapproval."
    },
    {
        id: "vocab_laud_ant_ext",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nLAUD",
        options: ["A) Extol", "B) Praise", "C) Exalt", "D) Castigate"],
        correct: "D",
        explanation: "'Laud' means to praise highly, opposite to 'Castigate'."
    },
    {
        id: "vocab_sanction_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSANCTION",
        options: ["A) Authorize", "B) Reprove", "C) Chide", "D) Rebut"],
        correct: "A",
        explanation: "'Sanction' and 'Authorize' both mean to give official approval."
    },
    {
        id: "vocab_exalt_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nEXALT",
        options: ["A) Belittle", "B) Glorify", "C) Demote", "D) Defame"],
        correct: "B",
        explanation: "'Exalt' and 'Glorify' both mean to praise or raise high in honor."
    },
    {
        id: "vocab_blaspheme_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nBLASPHEME",
        options: ["A) Revere", "B) Exalt", "C) Defile", "D) Extol"],
        correct: "C",
        explanation: "'Blaspheme' and 'Defile' both involve speaking or acting disrespectfully toward sacred things."
    },
    {
        id: "vocab_profane_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPROFANE",
        options: ["A) Exalt", "B) Extol", "C) Laud", "D) Desecrate"],
        correct: "D",
        explanation: "'Profane' and 'Desecrate' both mean to treat sacred things with disrespect."
    },
    {
        id: "vocab_discord_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDISCORD",
        options: ["A) Strife", "B) Harmony", "C) Concord", "D) Peace"],
        correct: "A",
        explanation: "'Discord' and 'Strife' both mean conflict, disagreement, or friction."
    },
    {
        id: "vocab_discord_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDISCORD",
        options: ["A) Dissension", "B) Concord", "C) Contention", "D) Dissonance"],
        correct: "B",
        explanation: "'Discord' means conflict, whereas 'Concord' means agreement or harmony."
    },
    {
        id: "vocab_dissension_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDISSENSION",
        options: ["A) Accord", "B) Disaccord", "C) Peace", "D) Harmony"],
        correct: "B",
        explanation: "'Dissension' and 'Disaccord' both refer to disagreement or conflict within a group."
    },
    {
        id: "vocab_contention_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCONTENTION",
        options: ["A) Concordance", "B) Agreement", "C) Dispute", "D) Harmony"],
        correct: "C",
        explanation: "'Contention' and 'Dispute' both mean heated disagreement or struggle."
    },
    {
        id: "vocab_dissonance_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDISSONANCE",
        options: ["A) Concord", "B) Accord", "C) Peace", "D) Disharmony"],
        correct: "D",
        explanation: "'Dissonance' and 'Disharmony' both refer to lack of agreement or harsh sound."
    },
    {
        id: "vocab_amenable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAMENABLE",
        options: ["A) Tractable", "B) Defiant", "C) Recalcitrant", "D) Willful"],
        correct: "A",
        explanation: "'Amenable' and 'Tractable' both mean easily persuaded or controlled."
    },
    {
        id: "vocab_amenable_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nAMENABLE",
        options: ["A) Docile", "B) Recalcitrant", "C) Biddable", "D) Compliant"],
        correct: "B",
        explanation: "'Amenable' means submissive/obedient, whereas 'Recalcitrant' means obstinately defiant."
    },
    {
        id: "vocab_docile_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDOCILE",
        options: ["A) Intractable", "B) Defiant", "C) Biddable", "D) Willful"],
        correct: "C",
        explanation: "'Docile' and 'Biddable' both mean submissive, obedient, and easy to manage."
    },
    {
        id: "vocab_placable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPLACABLE",
        options: ["A) Recalcitrant", "B) Defiant", "C) Intractable", "D) Appeasable"],
        correct: "D",
        explanation: "'Placable' and 'Appeasable' both mean capable of being calmed or pacified."
    },
    {
        id: "vocab_intractable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nINTRACTABLE",
        options: ["A) Willful", "B) Docile", "C) Tractable", "D) Submissive"],
        correct: "A",
        explanation: "'Intractable' and 'Willful' both mean stubborn, unmanageable, or difficult to control."
    },
    {
        id: "vocab_recant_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nRECANT",
        options: ["A) Endorse", "B) Abjure", "C) Assert", "D) Proclaim"],
        correct: "B",
        explanation: "'Recant' and 'Abjure' both mean to formally renounce or retract a statement/belief."
    },
    {
        id: "vocab_recant_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nRECANT",
        options: ["A) Retract", "B) Renege", "C) Endorse", "D) Repeal"],
        correct: "C",
        explanation: "'Recant' means to withdraw a statement, whereas 'Endorse' means to support or confirm it publicly."
    },
    {
        id: "vocab_retract_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nRETRACT",
        options: ["A) Confirm", "B) Proclaim", "C) Assert", "D) Repeal"],
        correct: "D",
        explanation: "'Retract' and 'Repeal' both mean to withdraw or revoke a statement, law, or opinion."
    },
    {
        id: "vocab_renege_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nRENEGE",
        options: ["A) Default", "B) Adhere", "C) Confirm", "D) Endorse"],
        correct: "A",
        explanation: "'Renege' and 'Default' both mean to go back on a promise, contract, or commitment."
    },
    {
        id: "vocab_abjure_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nABJURE",
        options: ["A) Affirm", "B) Renounce", "C) Assert", "D) Endorse"],
        correct: "B",
        explanation: "'Abjure' and 'Renounce' both mean to formally reject or give up a belief or claim."
    },
    {
        id: "vocab_contrite_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCONTRITE",
        options: ["A) Remorseless", "B) Pitiless", "C) Penitent", "D) Ruthless"],
        correct: "C",
        explanation: "'Contrite' and 'Penitent' both mean feeling deep remorse or sorrow for wrongdoings."
    },
    {
        id: "vocab_contrite_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nCONTRITE",
        options: ["A) Remorseful", "B) Repentant", "C) Apologetic", "D) Impenitent"],
        correct: "D",
        explanation: "'Contrite' means regretful, whereas 'Impenitent' means feeling no regret or remorse."
    },
    {
        id: "vocab_compunctious_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCOMPUNCTIOUS",
        options: ["A) Rueful", "B) Shameless", "C) Pitiless", "D) Ruthless"],
        correct: "A",
        explanation: "'Compunctious' and 'Rueful' both mean feeling regret, guilt, or repentance."
    },
    {
        id: "vocab_rueful_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nRUEFUL",
        options: ["A) Shameless", "B) Remorseful", "C) Ruthless", "D) Pitiless"],
        correct: "B",
        explanation: "'Rueful' and 'Remorseful' both express sorrow or regret for a past action."
    },
    {
        id: "vocab_pompous_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPOMPOUS",
        options: ["A) Unpretentious", "B) Humble", "C) Supercilious", "D) Diffident"],
        correct: "C",
        explanation: "'Pompous' and 'Supercilious' both describe someone who is arrogant, self-important, and haughty."
    },
    {
        id: "vocab_pompous_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nPOMPOUS",
        options: ["A) Pretentious", "B) Ostentatious", "C) Imperious", "D) Unpretentious"],
        correct: "D",
        explanation: "'Pompous' means grand standing/arrogant, whereas 'Unpretentious' means simple and modest."
    },
    {
        id: "vocab_supercilious_syn_2",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSUPERCILIOUS",
        options: ["A) Arrogant", "B) Modest", "C) Humble", "D) Diffident"],
        correct: "A",
        explanation: "'Supercilious' and 'Arrogant' both describe behaving as if one is superior to others."
    },
    {
        id: "vocab_imperious_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nIMPERIOUS",
        options: ["A) Unpretentious", "B) Overbearing", "C) Timid", "D) Lowly"],
        correct: "B",
        explanation: "'Imperious' and 'Overbearing' both mean domineering and commanding arrogantly."
    },
    {
        id: "vocab_diffident_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDIFFIDENT",
        options: ["A) Timid", "B) Shy", "C) Arrogant", "D) Modest"],
        correct: "C",
        explanation: "'Diffident' means shy or lacking self-confidence, opposite to 'Arrogant'."
    },
    {
        id: "vocab_impervious_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nIMPERVIOUS",
        options: ["A) Permeable", "B) Pliable", "C) Pervious", "D) Impenetrable"],
        correct: "D",
        explanation: "'Impervious' and 'Impenetrable' both mean impossible to pass through or affect."
    },
    {
        id: "vocab_impervious_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nIMPERVIOUS",
        options: ["A) Permeable", "B) Hermetic", "C) Impassable", "D) Unyielding"],
        correct: "A",
        explanation: "'Impervious' means fluid/light cannot pass through, whereas 'Permeable' allows passage."
    },
    {
        id: "vocab_hermetic_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nHERMETIC",
        options: ["A) Pervious", "B) Impermeable", "C) Penetrable", "D) Negotiable"],
        correct: "B",
        explanation: "'Hermetic' and 'Impermeable' both mean completely sealed against gas or liquid."
    },
    {
        id: "vocab_pliable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPLIABLE",
        options: ["A) Inflexible", "B) Unyielding", "C) Malleable", "D) Impenetrable"],
        correct: "C",
        explanation: "'Pliable' and 'Malleable' both describe something easily bent, shaped, or influenced."
    },
    {
        id: "vocab_recalcitrant_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nRECALCITRANT",
        options: ["A) Docile", "B) Submissive", "C) Compliant", "D) Defiant"],
        correct: "D",
        explanation: "'Recalcitrant' and 'Defiant' both refer to an uncooperative attitude toward authority."
    },
    {
        id: "vocab_cajole_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCAJOLE",
        options: ["A) Coax", "B) Force", "C) Harass", "D) Intimidate"],
        correct: "A",
        explanation: "'Cajole' and 'Coax' both mean to persuade someone through gentle urging or flattery."
    },
    {
        id: "vocab_cajole_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nCAJOLE",
        options: ["A) Sweet-talk", "B) Coerce", "C) Beguile", "D) Wheedle"],
        correct: "B",
        explanation: "'Cajole' means to persuade gently, whereas 'Coerce' means to force someone using threats."
    },
    {
        id: "vocab_forbearance_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nFORBEARANCE",
        options: ["A) Impatience", "B) Anger", "C) Patience", "D) Agitation"],
        correct: "C",
        explanation: "'Forbearance' and 'Patience' both mean showing restraint and endurance without getting angry."
    },
    {
        id: "vocab_forbearance_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nFORBEARANCE",
        options: ["A) Lenience", "B) Clemency", "C) Acquiescence", "D) Impatience"],
        correct: "D",
        explanation: "'Forbearance' refers to patient tolerance, whereas 'Impatience' means an inability or unwillingness to wait."
    },
    {
        id: "vocab_defamation_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEFAMATION",
        options: ["A) Acclaim", "B) Slander", "C) Applause", "D) Esteem"],
        correct: "B",
        explanation: "'Defamation' and 'Slander' both refer to damaging someone's reputation through false statements."
    },
    {
        id: "vocab_defamation_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDEFAMATION",
        options: ["A) Calumny", "B) Vilification", "C) Acclaim", "D) Aspersing"],
        correct: "C",
        explanation: "'Defamation' means harming a reputation, whereas 'Acclaim' means public praise and honor."
    },
    {
        id: "vocab_prologue_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPROLOGUE",
        options: ["A) Epilogue", "B) Preamble", "C) Finale", "D) Conclusion"],
        correct: "B",
        explanation: "'Prologue' and 'Preamble' both refer to an introductory section of a literary or formal work."
    },
    {
        id: "vocab_prologue_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nPROLOGUE",
        options: ["A) Overture", "B) Preface", "C) Epilogue", "D) Prelude"],
        correct: "C",
        explanation: "'Prologue' is the introduction, whereas 'Epilogue' is the concluding section at the end."
    },
    {
        id: "vocab_angular_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nANGULAR",
        options: ["A) Bulky", "B) Lean", "C) Heavy", "D) Paunchy"],
        correct: "B",
        explanation: "'Angular' and 'Lean' both describe a person having a thin frame or prominent bone structure."
    },
    {
        id: "vocab_angular_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nANGULAR",
        options: ["A) Slender", "B) Skinny", "C) Bulky", "D) Lithe"],
        correct: "C",
        explanation: "'Angular' implies being thin and lean, whereas 'Bulky' means large and heavy."
    },
    {
        id: "vocab_abstruse_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nABSTRUSE",
        options: ["A) Lucid", "B) Recondite", "C) Apparent", "D) Evident"],
        correct: "B",
        explanation: "'Abstruse' and 'Recondite' both refer to something complex, obscure, and difficult to understand."
    },
    {
        id: "vocab_abstruse_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nABSTRUSE",
        options: ["A) Esoteric", "B) Arcane", "C) Lucid", "D) Cryptic"],
        correct: "C",
        explanation: "'Abstruse' means hard to comprehend, whereas 'Lucid' means clear, logical, and easy to understand."
    },
    {
        id: "vocab_frivolous_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nFRIVOLOUS",
        options: ["A) Trivial", "B) Decisive", "C) Prominent", "D) Illustrious"],
        correct: "A",
        explanation: "'Frivolous' and 'Trivial' both describe something lacking seriousness, depth, or importance."
    },
    {
        id: "vocab_frivolous_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nFRIVOLOUS",
        options: ["A) Futile", "B) Puerile", "C) Paltry", "D) Decisive"],
        correct: "D",
        explanation: "'Frivolous' means silly or unimportant, whereas 'Decisive' means significant, firm, and resolute."
    },
    {
        id: "vocab_ethereal_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nETHEREAL",
        options: ["A) Delicate", "B) Corporeal", "C) Substantial", "D) Ponderous"],
        correct: "A",
        explanation: "'Ethereal' and 'Delicate' both describe something extremely light, fine, airy, or spiritual."
    },
    {
        id: "vocab_ethereal_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nETHEREAL",
        options: ["A) Flimsy", "B) Substantial", "C) Impalpable", "D) Heavenly"],
        correct: "B",
        explanation: "'Ethereal' means extremely delicate and light, whereas 'Substantial' means solid, strong, and having physical substance."
    },
    {
        id: "vocab_infamous_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nINFAMOUS",
        options: ["A) Reputable", "B) Disreputable", "C) Honorable", "D) Commendable"],
        correct: "B",
        explanation: "'Infamous' and 'Disreputable' both refer to being well known for bad qualities or illegal activities."
    },
    {
        id: "vocab_infamous_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nINFAMOUS",
        options: ["A) Ignominious", "B) Louche", "C) Detestable", "D) Reputable"],
        correct: "D",
        explanation: "'Infamous' means well known for something bad, whereas 'Reputable' means having a good reputation and being respected."
    },
    {
        id: "vocab_vivid_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nVIVID",
        options: ["A) Delineated", "B) Vague", "C) Obscure", "D) Hazy"],
        correct: "A",
        explanation: "'Vivid' and 'Delineated' both describe something that is presented clearly, with strong detail and precision."
    },
    {
        id: "vocab_vivid_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nVIVID",
        options: ["A) Graphic", "B) Pictorial", "C) Vague", "D) Expressive"],
        correct: "C",
        explanation: "'Vivid' means producing clear, detailed, and bright images, whereas 'Vague' means unclear, imprecise, or indistinct."
    },
    {
        id: "vocab_deplete_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEPLETE",
        options: ["A) Augment", "B) Exhaust", "C) Renew", "D) Strengthen"],
        correct: "B",
        explanation: "'Deplete' and 'Exhaust' both mean to reduce, consume, or drain a resource until it is completely used up."
    },
    {
        id: "vocab_deplete_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDEPLETE",
        options: ["A) Drain", "B) Debilitate", "C) Augment", "D) Consume"],
        correct: "C",
        explanation: "'Deplete' means to reduce or use up resources, whereas 'Augment' means to increase, enlarge, or make something greater."
    },
    {
        id: "vocab_levity_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nLEVITY",
        options: ["A) Gravity", "B) Soberness", "C) Light-heartedness", "D) Solemnity"],
        correct: "C",
        explanation: "'Levity' means treatment of a serious matter with humor; light-heartedness."
    },
    {
        id: "vocab_silliness_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSILLINESS",
        options: ["A) Gravity", "B) Playful behavior", "C) Seriousness", "D) Wisdom"],
        correct: "B",
        explanation: "'Silliness' means lacking in seriousness or engaging in playful behavior."
    },
    {
        id: "vocab_flightiness_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nFLIGHTINESS",
        options: ["A) Stability", "B) Fickleness", "C) Seriousness", "D) Focus"],
        correct: "B",
        explanation: "'Flightiness' refers to the quality of being easily distracted or excited (चंचलता)."
    },
    {
        id: "vocab_flippancy_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nFLIPPANCY",
        options: ["A) Levity", "B) Respect", "C) Solemnity", "D) Earnestness"],
        correct: "A",
        explanation: "'Flippancy' refers to a lack of seriousness or respect (हलकापन)."
    },
    {
        id: "vocab_frivolity_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nFRIVOLITY",
        options: ["A) Triviality", "B) Gravity", "C) Soberness", "D) Importance"],
        correct: "A",
        explanation: "'Frivolity' means behavior or speech that lacks seriousness or depth (तुच्छता)."
    },
    {
        id: "vocab_frothiness_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nFROTHINESS",
        options: ["A) Depth", "B) Lack of depth", "C) Seriousness", "D) Wisdom"],
        correct: "B",
        explanation: "'Frothiness' implies a lack of depth, substance, or seriousness."
    },
    {
        id: "vocab_festivity_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nFESTIVITY",
        options: ["A) Mourning", "B) Sadness", "C) Celebration", "D) Gravity"],
        correct: "C",
        explanation: "'Festivity' refers to being cheerful, celebratory, or associated with a holiday."
    },
    {
        id: "vocab_gaiety_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nGAIETY",
        options: ["A) Gloom", "B) Soberness", "C) Sorrow", "D) Cheerfulness"],
        correct: "D",
        explanation: "'Gaiety' means the state of being cheerful and full of happiness (हर्षोल्लास)."
    },
    {
        id: "vocab_seriousness_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nSERIOUSNESS",
        options: ["A) Levity", "B) Gravity", "C) Solemnity", "D) Soberness"],
        correct: "A",
        explanation: "'Seriousness' means being thoughtful/serious. Antonym is 'Levity'."
    },
    {
        id: "vocab_gravity_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nGRAVITY",
        options: ["A) Importance", "B) Frivolity", "C) Seriousness", "D) Solemnity"],
        correct: "B",
        explanation: "'Gravity' refers to seriousness or importance. Antonym is 'Frivolity'."
    },
    {
        id: "vocab_solemnness_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nSOLEMNITY",
        options: ["A) Dignity", "B) Seriousness", "C) Silliness", "D) Gravity"],
        correct: "C",
        explanation: "'Solemnity' means being formal and serious. Antonym is 'Silliness'."
    },
    {
        id: "vocab_soberness_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nSOBERNESS",
        options: ["A) Restraint", "B) Earnestness", "C) Gravity", "D) Flippancy"],
        correct: "D",
        explanation: "'Soberness' means being serious or restrained. Antonym is 'Flippancy'."
    },
    {
        id: "vocab_amiable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAMIABLE",
        options: ["A) Unfriendly", "B) Friendly", "C) Hostile", "D) Rude"],
        correct: "B",
        explanation: "'Amiable' means friendly and pleasant."
    },
    {
        id: "vocab_affable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAFFABLE",
        options: ["A) Approachable", "B) Reserved", "C) Strict", "D) Proud"],
        correct: "A",
        explanation: "'Affable' means friendly and easy to talk to."
    },
    {
        id: "vocab_agreeable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAGREEABLE",
        options: ["A) Unpleasant", "B) Pleasant", "C) Stubborn", "D) Harsh"],
        correct: "B",
        explanation: "'Agreeable' means pleasant and easy to get along with."
    },
    {
        id: "vocab_genial_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nGENIAL",
        options: ["A) Gloomy", "B) Cold", "C) Cheerful", "D) Distant"],
        correct: "C",
        explanation: "'Genial' means cheerful, friendly, and warm."
    },
    {
        id: "vocab_gracious_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nGRACIOUS",
        options: ["A) Impolite", "B) Arrogant", "C) Cruel", "D) Courteous"],
        correct: "D",
        explanation: "'Gracious' means kind, courteous, and pleasant."
    },
    {
        id: "vocab_mellow_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nMELLOW",
        options: ["A) Relaxed", "B) Harsh", "C) Aggressive", "D) Loud"],
        correct: "A",
        explanation: "'Mellow' means calm, soft, and relaxed."
    },
    {
        id: "vocab_amicable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAMICABLE",
        options: ["A) Contentious", "B) Peaceful", "C) Hostile", "D) Bitter"],
        correct: "B",
        explanation: "'Amicable' means friendly and peaceful."
    },
    {
        id: "vocab_cordial_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCORDIAL",
        options: ["A) Cold", "B) Distant", "C) Warm", "D) Rude"],
        correct: "C",
        explanation: "'Cordial' means warm, friendly, and polite."
    },
    {
        id: "vocab_benign_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nBENIGN",
        options: ["A) Harmful", "B) Severe", "C) Malicious", "D) Gentle"],
        correct: "D",
        explanation: "'Benign' means gentle, kind, and not harmful."
    },
    {
        id: "vocab_sociable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSOCIABLE",
        options: ["A) Outgoing", "B) Reclusive", "C) Shy", "D) Unfriendly"],
        correct: "A",
        explanation: "'Sociable' means friendly and enjoying company."
    },
    {
        id: "vocab_amenable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAMENABLE",
        options: ["A) Defiant", "B) Cooperative", "C) Unwilling", "D) Rigid"],
        correct: "B",
        explanation: "'Amenable' means willing to agree or cooperate."
    },
    {
        id: "vocab_disagreeable_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDISAGREEABLE",
        options: ["A) Unpleasant", "B) Rude", "C) Pleasant", "D) Harsh"],
        correct: "C",
        explanation: "'Disagreeable' means unpleasant; its antonym is Pleasant."
    },
    {
        id: "vocab_unamiable_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nUNAMIABLE",
        options: ["A) Unfriendly", "B) Hostile", "C) Cold", "D) Amiable"],
        correct: "D",
        explanation: "'Unamiable' means unfriendly; its antonym is Amiable."
    },
    {
        id: "vocab_ungenial_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nUNGENIAL",
        options: ["A) Genial", "B) Harsh", "C) Cold", "D) Severe"],
        correct: "A",
        explanation: "'Ungenial' means unwelcoming or harsh; its antonym is Genial."
    },
    {
        id: "vocab_unpleasant_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nUNPLEASANT",
        options: ["A) Disgusting", "B) Agreeable", "C) Bitter", "D) Harsh"],
        correct: "B",
        explanation: "'Unpleasant' means causing discomfort; its antonym is Agreeable."
    },
    {
        id: "vocab_illtempered_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nILL-TEMPERED",
        options: ["A) Irritable", "B) Angry", "C) Good-natured", "D) Sullen"],
        correct: "C",
        explanation: "'Ill-tempered' means easily angered; its antonym is Good-natured."
    },
    {
        id: "vocab_homogeneous_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nHOMOGENEOUS",
        options: ["A) Diverse", "B) Varied", "C) Mixed", "D) Uniform"],
        correct: "D",
        explanation: "'Homogeneous' means composed of parts of the same kind."
    },
    {
        id: "vocab_unchanging_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nUNCHANGING",
        options: ["A) Constant", "B) Variable", "C) Fickle", "D) Unstable"],
        correct: "A",
        explanation: "'Unchanging' means remaining the same."
    },
    {
        id: "vocab_cognate_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCOGNATE",
        options: ["A) Unrelated", "B) Related", "C) Foreign", "D) Opposite"],
        correct: "B",
        explanation: "'Cognate' means having a common origin or similar nature."
    },
    {
        id: "vocab_connate_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCONNATE",
        options: ["A) Acquired", "B) External", "C) Innate", "D) Foreign"],
        correct: "C",
        explanation: "'Connate' means existing from birth or inborn."
    },
    {
        id: "vocab_resemblant_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nRESEMBLANT",
        options: ["A) Different", "B) Opposite", "C) Distinct", "D) Similar"],
        correct: "D",
        explanation: "'Resemblant' means similar in appearance or nature."
    },
    {
        id: "vocab_commensurate_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCOMMENSURATE",
        options: ["A) Proportionate", "B) Inadequate", "C) Unequal", "D) Irrelevant"],
        correct: "A",
        explanation: "'Commensurate' means corresponding in size or degree."
    },
    {
        id: "vocab_congenial_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCONGENIAL",
        options: ["A) Unfavorable", "B) Compatible", "C) Hostile", "D) Mismatched"],
        correct: "B",
        explanation: "'Congenial' means pleasant and suitable."
    },
    {
        id: "vocab_congeneric_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCONGENERIC",
        options: ["A) Diverse", "B) Separate", "C) Similar", "D) Alien"],
        correct: "C",
        explanation: "'Congeneric' means belonging to the same genus or kind."
    },
    {
        id: "vocab_disparate_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDISPARATE",
        options: ["A) Different", "B) Dissimilar", "C) Varied", "D) Similar"],
        correct: "D",
        explanation: "'Disparate' means essentially different; its antonym is Similar."
    },
    {
        id: "vocab_distinct_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDISTINCT",
        options: ["A) Indistinct", "B) Clear", "C) Separate", "D) Obvious"],
        correct: "A",
        explanation: "'Distinct' means clearly different; its antonym is Indistinct."
    },
    {
        id: "vocab_imprecise_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nIMPRECISE",
        options: ["A) Vague", "B) Exact", "C) Rough", "D) Careless"],
        correct: "B",
        explanation: "'Imprecise' means lacking exactness; its antonym is Exact."
    },
    {
        id: "vocab_diverse_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDIVERSE",
        options: ["A) Varied", "B) Mixed", "C) Identical", "D) Broad"],
        correct: "C",
        explanation: "'Diverse' means showing variety; its antonym is Identical."
    },
    {
        id: "vocab_unlike_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nUNLIKE",
        options: ["A) Different", "B) Distant", "C) Separate", "D) Similar"],
        correct: "D",
        explanation: "'Unlike' means different from; its antonym is Similar."
    },
    {
        id: "vocab_oblivion_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nOBLIVION",
        options: ["A) Forgetfulness", "B) Memory", "C) Awareness", "D) Fame"],
        correct: "A",
        explanation: "'Oblivion' means the state of being forgotten or unaware."
    },
    {
        id: "vocab_forgetfulness_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nFORGETFULNESS",
        options: ["A) Recollection", "B) Inattention", "C) Remembrance", "D) Retention"],
        correct: "B",
        explanation: "'Forgetfulness' refers to the state of forgetting things."
    },
    {
        id: "vocab_innocence_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nINNOCENCE",
        options: ["A) Guilt", "B) Sin", "C) Guiltlessness", "D) Blame"],
        correct: "C",
        explanation: "'Innocence' means freedom from guilt or unawareness of evil."
    },
    {
        id: "vocab_ignorance_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nIGNORANCE",
        options: ["A) Knowledge", "B) Wisdom", "C) Insight", "D) Unawareness"],
        correct: "D",
        explanation: "'Ignorance' means lack of knowledge or awareness."
    },
    {
        id: "vocab_insensibility_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nINSENSIBILITY",
        options: ["A) Unconsciousness", "B) Alertness", "C) Sensitivity", "D) Feeling"],
        correct: "A",
        explanation: "'Insensibility' means being unaware or unconscious."
    },
    {
        id: "vocab_unfamiliarity_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nUNFAMILIARITY",
        options: ["A) Acquaintance", "B) Novelty", "C) Knowledge", "D) Expertise"],
        correct: "B",
        explanation: "'Unfamiliarity' means the state of being unknown or unusual."
    },
    {
        id: "vocab_preoccupation_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPREOCCUPATION",
        options: ["A) Indifference", "B) Neglect", "C) Absorption", "D) Apathy"],
        correct: "C",
        explanation: "'Preoccupation' means being engrossed or distracted by something."
    },
    {
        id: "vocab_recall_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nRECALL",
        options: ["A) Remember", "B) Retain", "C) Mind", "D) Forget"],
        correct: "D",
        explanation: "'Recall' means to remember; its antonym is Forget."
    },
    {
        id: "vocab_remembrance_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nREMEMBRANCE",
        options: ["A) Oblivion", "B) Memory", "C) Tribute", "D) Respect"],
        correct: "A",
        explanation: "'Remembrance' means memory or honoring; its antonym is Oblivion."
    },
    {
        id: "vocab_alertness_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nALERTNESS",
        options: ["A) Readiness", "B) Inattention", "C) Vigilance", "D) Quickness"],
        correct: "B",
        explanation: "'Alertness' means being attentive; its antonym is Inattention."
    },
    {
        id: "vocab_cognizance_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nCOGNIZANCE",
        options: ["A) Awareness", "B) Notice", "C) Ignorance", "D) Understanding"],
        correct: "C",
        explanation: "'Cognizance' means knowledge or awareness; its antonym is Ignorance."
    },
    {
        id: "vocab_consciousness_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nCONSCIOUSNESS",
        options: ["A) Awareness", "B) Mind", "C) Perception", "D) Unconsciousness"],
        correct: "D",
        explanation: "'Consciousness' means state of being aware; its antonym is Unconsciousness."
    },
    {
        id: "vocab_discursive_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDISCURSIVE",
        options: ["A) Wandering", "B) Direct", "C) Concise", "D) Focused"],
        correct: "A",
        explanation: "'Discursive' means rambling or moving from topic to topic."
    },
    {
        id: "vocab_desultory_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDESULTORY",
        options: ["A) Systematic", "B) Aimless", "C) Methodical", "D) Planned"],
        correct: "B",
        explanation: "'Desultory' means lacking a clear plan or purpose."
    },
    {
        id: "vocab_rambling_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nRAMBLING",
        options: ["A) Short", "B) Coherent", "C) Digressive", "D) Compact"],
        correct: "C",
        explanation: "'Rambling' means lengthy and wandering in discourse."
    },
    {
        id: "vocab_excursive_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nEXCURSIVE",
        options: ["A) Direct", "B) Brief", "C) Precise", "D) Off-topic"],
        correct: "D",
        explanation: "'Excursive' means straying from the main subject."
    },
    {
        id: "vocab_digressional_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDIGRESSIONAL",
        options: ["A) Wandering", "B) Direct", "C) Relevant", "D) Focused"],
        correct: "A",
        explanation: "'Digressional' means straying from the main point."
    },
    {
        id: "vocab_leaping_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nLEAPING",
        options: ["A) Steady", "B) Jumping", "C) Fixed", "D) Constant"],
        correct: "B",
        explanation: "'Leaping' means jumping rapidly from topic to topic."
    },
    {
        id: "vocab_maundering_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nMAUNDERING",
        options: ["A) Clear", "B) Purposeful", "C) Babbling", "D) Precise"],
        correct: "C",
        explanation: "'Maundering' means talking in a rambling or aimless way."
    },
    {
        id: "vocab_deviating_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEVIATING",
        options: ["A) Conforming", "B) Direct", "C) Continuing", "D) Straying"],
        correct: "D",
        explanation: "'Deviating' means departing from an intended course."
    },
    {
        id: "vocab_logical_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nLOGICAL",
        options: ["A) Irrational", "B) Rational", "C) Sound", "D) Valid"],
        correct: "A",
        explanation: "'Logical' means clear and reasoned; its antonym is Irrational."
    },
    {
        id: "vocab_coherent_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nCOHERENT",
        options: ["A) Clear", "B) Incoherent", "C) Logical", "D) Organized"],
        correct: "B",
        explanation: "'Coherent' means logical and consistent; its antonym is Incoherent."
    },
    {
        id: "vocab_consistent_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nCONSISTENT",
        options: ["A) Steady", "B) Constant", "C) Inconsistent", "D) Uniform"],
        correct: "C",
        explanation: "'Consistent' means remaining unchanged; its antonym is Inconsistent."
    },
    {
        id: "vocab_focused_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nFOCUSED",
        options: ["A) Attentive", "B) Sharp", "C) Direct", "D) Distracted"],
        correct: "D",
        explanation: "'Focused' means concentrated; its antonym is Distracted."
    },
    {
        id: "vocab_straightforward_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nSTRAIGHTFORWARD",
        options: ["A) Complicated", "B) Simple", "C) Direct", "D) Clear"],
        correct: "A",
        explanation: "'Straightforward' means direct and simple; its antonym is Complicated."
    },
    {
        id: "vocab_duplicity_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDUPLICITY",
        options: ["A) Honesty", "B) Deceit", "C) Sincerity", "D) Truth"],
        correct: "B",
        explanation: "'Duplicity' means deceitfulness or double-dealing."
    },
    {
        id: "vocab_deceitfulness_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDECEITFULNESS",
        options: ["A) Truthfulness", "B) Candor", "C) Dishonesty", "D) Trust"],
        correct: "C",
        explanation: "'Deceitfulness' refers to misleading someone intentionally."
    },
    {
        id: "vocab_cunning_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCUNNING",
        options: ["A) Naivety", "B) Innocence", "C) Honesty", "D) Craftiness"],
        correct: "D",
        explanation: "'Cunning' means skill in achieving one's ends by deceit."
    },
    {
        id: "vocab_deceptiveness_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDECEPTIVENESS",
        options: ["A) Trickery", "B) Openness", "C) Frankness", "D) Sincerity"],
        correct: "A",
        explanation: "'Deceptiveness' means quality of being misleading or dishonest."
    },
    {
        id: "vocab_dissembling_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDISSEMBLING",
        options: ["A) Revealing", "B) Feigning", "C) Exposing", "D) Unmasking"],
        correct: "B",
        explanation: "'Dissembling' means concealing one's true motives or feelings."
    },
    {
        id: "vocab_guile_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nGUILE",
        options: ["A) Guilelessness", "B) Honesty", "C) Slyness", "D) Frankness"],
        correct: "C",
        explanation: "'Guile' means sly or cunning intelligence."
    },
    {
        id: "vocab_craftiness_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCRAFTINESS",
        options: ["A) Simplicity", "B) Honesty", "C) Candor", "D) Trickery"],
        correct: "D",
        explanation: "'Craftiness' means cleverness used in a deceptive way."
    },
    {
        id: "vocab_cozenage_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCOZENAGE",
        options: ["A) Deception", "B) Fairness", "C) Truth", "D) Sincerity"],
        correct: "A",
        explanation: "'Cozenage' means trickery or deception intended to cheat."
    },
    {
        id: "vocab_goodfaith_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nGOOD FAITH",
        options: ["A) Sincerity", "B) Fraud", "C) Honesty", "D) Trust"],
        correct: "B",
        explanation: "'Good faith' means honesty of intention; its antonym is Fraud."
    },
    {
        id: "vocab_guilelessness_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nGUILELESSNESS",
        options: ["A) Innocence", "B) Sincerity", "C) Deceit", "D) Honesty"],
        correct: "C",
        explanation: "'Guilelessness' means innocence; its antonym is Deceit."
    },
    {
        id: "vocab_sincerity_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nSINCERITY",
        options: ["A) Honesty", "B) Candor", "C) Truthfulness", "D) Hypocrisy"],
        correct: "D",
        explanation: "'Sincerity' means being genuine; its antonym is Hypocrisy."
    },
    {
        id: "vocab_reliability_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nRELIABILITY",
        options: ["A) Unreliability", "B) Trustworthiness", "C) Dependability", "D) Loyalty"],
        correct: "A",
        explanation: "'Reliability' means dependability; its antonym is Unreliability."
    },
    {
        id: "vocab_virtuousness_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nVIRTUOUSNESS",
        options: ["A) Morality", "B) Wickedness", "C) Goodness", "D) Integrity"],
        correct: "B",
        explanation: "'Virtuousness' means high moral standards; its antonym is Wickedness."
    }
];