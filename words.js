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
        options: ["A) spiritual", "B) louche", "C) ignominious", "D) despicable"],
        correct: "A",
        explanation: "Based on exam context, 'earthly' material desires are contrasted against 'spiritual' pursuits."
    },
    {
        id: "vocab_thief_error",
        type: "Spotting the Error",
        question: "Identify the segment which contains a vocabulary mismatch/error:\n'The thief's (A) / commendable actions (B) / made the community (C) / lose trust in him. (D)'",
        options: ["A", "B", "C", "D"],
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
        options: ["A) Profligate", "B) Frugal", "C) Economical", "D) Parsimonious"],
        correct: "A",
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
        options: ["A) Spendthrift", "B) Niggardly", "C) Thrifty", "D) Economical"],
        correct: "A",
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
        options: ["A) Retract", "B) Affirm", "C) Decorate", "D) Amplify"],
        correct: "A",
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
        options: ["A) Economizing", "B) Squandering", "C) Embellishing", "D) Decking"],
        correct: "A",
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
        options: ["A) Procrastinate", "B) Rush", "C) Barrel", "D) Hasten"],
        correct: "A",
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
        options: ["A) Stroll", "B) Sprint", "C) Stagger", "D) Rush"],
        correct: "A",
        explanation: "'Amble' and 'Stroll' both mean to walk at a slow, relaxed pace."
    },
    {
        id: "vocab_trifle_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nTRIFLE",
        options: ["A) Dally", "B) Focus", "C) Accelerate", "D) Extol"],
        correct: "A",
        explanation: "'Trifle' and 'Dally' both mean to act or deal with something casually or waste time."
    },
    {
        id: "vocab_stagger_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSTAGGER",
        options: ["A) Lurch", "B) Sprint", "C) Halt", "D) Accelerate"],
        correct: "A",
        explanation: "'Stagger' and 'Lurch' both mean to walk or move unsteadily."
    },
    {
        id: "vocab_decelerate_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDECELERATE",
        options: ["A) Slacken", "B) Expedite", "C) Barrel", "D) Hasten"],
        correct: "A",
        explanation: "'Decelerate' and 'Slacken' both mean to reduce speed or slow down."
    },
    {
        id: "vocab_dawdle_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDAWDLE",
        options: ["A) Barrel", "B) Procrastinate", "C) Amble", "D) Trifle"],
        correct: "A",
        explanation: "'Dawdle' means to move slowly or waste time, whereas 'Barrel' means to move or run quickly."
    },
    {
        id: "vocab_exert_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nEXERT",
        options: ["A) Strive", "B) Idle", "C) Relax", "D) Defer"],
        correct: "A",
        explanation: "'Exert' and 'Strive' both mean to make a great effort or apply force."
    },
    {
        id: "vocab_travail_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nTRAVAIL",
        options: ["A) Drudgery", "B) Repose", "C) Leisure", "D) Trifle"],
        correct: "A",
        explanation: "'Travail' and 'Drudgery' both refer to painful or laborious effort and hard work."
    },
    {
        id: "vocab_gregarious_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nGREGARIOUS",
        options: ["A) Companionable", "B) Reclusive", "C) Aloof", "D) Taciturn"],
        correct: "A",
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
        options: ["A) Aloof", "B) Extroverted", "C) Companionable", "D) Clubby"],
        correct: "A",
        explanation: "'Aloof' means cool, distant, or unapproachable, which is opposite to gregarious."
    },
    {
        id: "vocab_reticent_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nRETICENT",
        options: ["A) Reserved", "B) Extroverted", "C) Talkative", "D) Affable"],
        correct: "A",
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
        options: ["A) Generate", "B) Quell", "C) Repress", "D) Stifle"],
        correct: "A",
        explanation: "'Engender' and 'Generate' both mean to cause, produce, or give rise to something."
    },
    {
        id: "vocab_reprove_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nREPROVE",
        options: ["A) Admonish", "B) Laud", "C) Approve", "D) Sanction"],
        correct: "A",
        explanation: "'Reprove' and 'Admonish' both mean to reprimand or express disapproval to someone."
    },
    {
        id: "vocab_reprove_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nREPROVE",
        options: ["A) Laud", "B) Chide", "C) Reproach", "D) Castigate"],
        correct: "A",
        explanation: "'Reprove' means to criticize or rebuke, whereas 'Laud' means to praise highly."
    },
    {
        id: "vocab_venerate_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nVENERATE",
        options: ["A) Revere", "B) Defame", "C) Scorn", "D) Profane"],
        correct: "A",
        explanation: "'Venerate' and 'Revere' both mean to regard with great respect or admiration."
    },
    {
        id: "vocab_extol_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nEXTOL",
        options: ["A) Exalt", "B) Castigate", "C) Reproach", "D) Affront"],
        correct: "A",
        explanation: "'Extol' and 'Exalt' both mean to praise enthusiastically and publicly."
    },
    {
        id: "vocab_deify_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEIFY",
        options: ["A) Idolize", "B) Desecrate", "C) Blaspheme", "D) Insult"],
        correct: "A",
        explanation: "'Deify' and 'Idolize' both mean to treat or worship someone/something as a deity."
    },
    {
        id: "vocab_venerate_ant_1",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nVENERATE",
        options: ["A) Blaspheme", "B) Exalt", "C) Revere", "D) Adore"],
        correct: "A",
        explanation: "'Venerate' means to respect deeply, while 'Blaspheme' means to speak disrespectfully or sacrilegiously."
    },
    {
        id: "vocab_scorn_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSCORN",
        options: ["A) Disdain", "B) Exalt", "C) Deify", "D) Glorify"],
        correct: "A",
        explanation: "'Scorn' and 'Disdain' both mean to feel or express contempt or mockery."
    },
    {
        id: "vocab_desecrate_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDESECRATE",
        options: ["A) Profane", "B) Revere", "C) Sanctify", "D) Exalt"],
        correct: "A",
        explanation: "'Desecrate' and 'Profane' both mean to treat something sacred with disrespect."
    },
    {
        id: "vocab_affront_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAFFRONT",
        options: ["A) Insult", "B) Respect", "C) Adore", "D) Honor"],
        correct: "A",
        explanation: "'Affront' and 'Insult' both refer to an action or remark that causes offense."
    },
    {
        id: "vocab_quell_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nQUELL",
        options: ["A) Suppress", "B) Engender", "C) Induce", "D) Invoke"],
        correct: "A",
        explanation: "'Quell' and 'Suppress' both mean to put an end to something, typically by force."
    },
    {
        id: "vocab_castigate_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCASTIGATE",
        options: ["A) Chastise", "B) Extol", "C) Exalt", "D) Laud"],
        correct: "A",
        explanation: "'Castigate' and 'Chastise' both mean to reprimand or criticize someone severely."
    },
    {
        id: "vocab_depravity_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEPRAVITY",
        options: ["A) Wickedness", "B) Rectitude", "C) Scrupulosity", "D) Virtue"],
        correct: "A",
        explanation: "'Depravity' and 'Wickedness' both refer to moral corruption."
    },
    {
        id: "vocab_abjection_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nABJECTION",
        options: ["A) Degradation", "B) Goodness", "C) Righteousness", "D) Morality"],
        correct: "A",
        explanation: "'Abjection' and 'Degradation' refer to a low or degraded state."
    },
    {
        id: "vocab_dissipation_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDISSIPATION",
        options: ["A) Profligacy", "B) Rectitude", "C) Scrupulosity", "D) Preservation"],
        correct: "A",
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
        options: ["A) Rectitude", "B) Corruption", "C) Decadency", "D) Degeneracy"],
        correct: "A",
        explanation: "'Depravity' means moral corruption, whereas 'Rectitude' means moral integrity."
    },
    {
        id: "vocab_depravity_ant_2",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDEPRAVITY",
        options: ["A) Scrupulosity", "B) Abjection", "C) Debasement", "D) Degradation"],
        correct: "A",
        explanation: "'Scrupulosity' means high ethical standards, opposite to depravity."
    },
    {
        id: "vocab_incorrigible_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nINCORRIGIBLE",
        options: ["A) Irreformable", "B) Reformable", "C) Curable", "D) Redeemable"],
        correct: "A",
        explanation: "'Incorrigible' and 'Irreformable' both mean incapable of being corrected."
    },
    {
        id: "vocab_impenitent_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nIMPENITENT",
        options: ["A) Remorseless", "B) Reformable", "C) Curable", "D) Savable"],
        correct: "A",
        explanation: "'Impenitent' and 'Remorseless' both mean showing no regret for wrongdoings."
    },
    {
        id: "vocab_incorrigible_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nINCORRIGIBLE",
        options: ["A) Reformable", "B) Irremediable", "C) Incurable", "D) Irrecoverable"],
        correct: "A",
        explanation: "'Incorrigible' means impossible to correct, while 'Reformable' means capable of improvement."
    },
    {
        id: "vocab_servile_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSERVILE",
        options: ["A) Submissive", "B) Imperious", "C) Supercilious", "D) Arrogant"],
        correct: "A",
        explanation: "'Servile' and 'Submissive' mean showing excessive willingness to serve others."
    },
    {
        id: "vocab_slavish_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSLAVISH",
        options: ["A) Obsequious", "B) Haughty", "C) Lordly", "D) Imperious"],
        correct: "A",
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
        options: ["A) Lowly", "B) Haughty", "C) Imperious", "D) Superior"],
        correct: "A",
        explanation: "'Menial' and 'Lowly' refer to tasks requiring little skill and lacking status."
    },
    {
        id: "vocab_sycophant_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSYCOPHANT",
        options: ["A) Flatterer", "B) Leader", "C) Prince", "D) Critic"],
        correct: "A",
        explanation: "'Sycophant' and 'Flatterer' refer to a person who acts servile to gain favor."
    },
    {
        id: "vocab_toadyish_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nTOADYISH",
        options: ["A) Fawning", "B) Supercilious", "C) Arrogant", "D) Lordly"],
        correct: "A",
        explanation: "'Toadyish' and 'Fawning' both mean behaving in a servile, flattering manner."
    },
    {
        id: "vocab_subservient_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSUBSERVIENT",
        options: ["A) Compliant", "B) Imperious", "C) Haughty", "D) Dominant"],
        correct: "A",
        explanation: "'Subservient' and 'Compliant' both mean prepared to obey others unquestioningly."
    },
    {
        id: "vocab_demure_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEMURE",
        options: ["A) Modest", "B) Arrogant", "C) Supercilious", "D) Imperious"],
        correct: "A",
        explanation: "'Demure' and 'Modest' describe someone who is reserved, quiet, or shy."
    },
    {
        id: "vocab_servile_ant_1",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nSERVILE",
        options: ["A) Imperious", "B) Subservient", "C) Toadyish", "D) Abject"],
        correct: "A",
        explanation: "'Servile' means submissive, whereas 'Imperious' means domineering."
    },
    {
        id: "vocab_supercilious_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSUPERCILIOUS",
        options: ["A) Haughty", "B) Servile", "C) Demure", "D) Subservient"],
        correct: "A",
        explanation: "'Supercilious' and 'Haughty' both mean behaving as if superior to others."
    },
    {
        id: "vocab_ominous_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nOMINOUS",
        options: ["A) Menacing", "B) Auspicious", "C) Propitious", "D) Prosperous"],
        correct: "A",
        explanation: "'Ominous' and 'Menacing' both suggest that something bad is about to happen."
    },
    {
        id: "vocab_baleful_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nBALEFUL",
        options: ["A) Sinister", "B) Propitious", "C) Bright", "D) Hopeful"],
        correct: "A",
        explanation: "'Baleful' and 'Sinister' both mean threatening harm or evil."
    },
    {
        id: "vocab_inauspicious_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nINAUSPICIOUS",
        options: ["A) Unfavorable", "B) Auspicious", "C) Propitious", "D) Prosperous"],
        correct: "A",
        explanation: "'Inauspicious' and 'Unfavorable' mean unpromising or unlucky."
    },
    {
        id: "vocab_sinister_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSINISTER",
        options: ["A) Threatening", "B) Hopeful", "C) Bright", "D) Auspicious"],
        correct: "A",
        explanation: "'Sinister' and 'Threatening' both give the impression of evil or danger."
    },
    {
        id: "vocab_ominous_ant_1",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nOMINOUS",
        options: ["A) Auspicious", "B) Menacing", "C) Portentous", "D) Baleful"],
        correct: "A",
        explanation: "'Ominous' indicates a bad outcome, whereas 'Auspicious' indicates a favorable outcome."
    },
    {
        id: "vocab_propitious_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPROPITIOUS",
        options: ["A) Favorable", "B) Baleful", "C) Sinister", "D) Inauspicious"],
        correct: "A",
        explanation: "'Propitious' and 'Favorable' both mean indicating a good chance of success."
    },
    {
        id: "vocab_corruption_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCORRUPTION",
        options: ["A) Depravity", "B) Rectitude", "C) Scrupulosity", "D) Virtue"],
        correct: "A",
        explanation: "'Corruption' and 'Depravity' both refer to moral decay or dishonesty."
    },
    {
        id: "vocab_debasement_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEBASEMENT",
        options: ["A) Degradation", "B) Goodness", "C) Excellence", "D) Elevation"],
        correct: "A",
        explanation: "'Debasement' and 'Degradation' mean lowering quality or value."
    },
    {
        id: "vocab_decadency_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDECADENCY",
        options: ["A) Decline", "B) Integrity", "C) Righteousness", "D) Scrupulosity"],
        correct: "A",
        explanation: "'Decadency' and 'Decline' refer to moral or cultural decay."
    },
    {
        id: "vocab_degeneracy_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEGENERACY",
        options: ["A) Deterioration", "B) Rectitude", "C) Morality", "D) Righteousness"],
        correct: "A",
        explanation: "'Degeneracy' and 'Deterioration' refer to moral or physical decline."
    },
    {
        id: "vocab_degradation_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEGRADATION",
        options: ["A) Humiliation", "B) Virtue", "C) Goodness", "D) Scrupulosity"],
        correct: "A",
        explanation: "'Degradation' and 'Humiliation' mean lowering in dignity or status."
    },
    {
        id: "vocab_goodness_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nGOODNESS",
        options: ["A) Depravity", "B) Rectitude", "C) Scrupulosity", "D) Morality"],
        correct: "A",
        explanation: "'Goodness' represents moral excellence, opposite to 'Depravity'."
    },
    {
        id: "vocab_virtue_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nVIRTUE",
        options: ["A) Depravity", "B) Righteousness", "C) Scrupulosity", "D) Rectitude"],
        correct: "A",
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
        options: ["A) Depravity", "B) Goodness", "C) Virtue", "D) Scrupulosity"],
        correct: "A",
        explanation: "'Righteousness' means being morally right, opposite to 'Depravity'."
    },
    {
        id: "vocab_hopeless_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nHOPELESS",
        options: ["A) Incorrigible", "B) Savable", "C) Curable", "D) Reformable"],
        correct: "A",
        explanation: "'Hopeless' and 'Incorrigible' both mean beyond correction or improvement."
    },
    {
        id: "vocab_irrecoverable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nIRRECOVERABLE",
        options: ["A) Irretrievable", "B) Retrievable", "C) Savable", "D) Curable"],
        correct: "A",
        explanation: "'Irrecoverable' and 'Irretrievable' mean impossible to regain."
    },
    {
        id: "vocab_incurable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nINCURABLE",
        options: ["A) Irremediable", "B) Curable", "C) Reformable", "D) Savable"],
        correct: "A",
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
        options: ["A) Irredeemable", "B) Redeemable", "C) Reformable", "D) Curable"],
        correct: "A",
        explanation: "'Unredeemable' and 'Irredeemable' mean impossible to save or restore."
    },
    {
        id: "vocab_savable_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nSAVABLE",
        options: ["A) Incorrigible", "B) Reformable", "C) Curable", "D) Redeemable"],
        correct: "A",
        explanation: "'Savable' means capable of being saved, opposite to 'Incorrigible'."
    },
    {
        id: "vocab_curable_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nCURABLE",
        options: ["A) Incurable", "B) Savable", "C) Reformable", "D) Retrievable"],
        correct: "A",
        explanation: "'Curable' means able to be healed, opposite to 'Incurable'."
    },
    {
        id: "vocab_arrogant_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nARROGANT",
        options: ["A) Servile", "B) Supercilious", "C) Imperious", "D) Haughty"],
        correct: "A",
        explanation: "'Arrogant' means proud, whereas 'Servile' means submissive."
    },
    {
        id: "vocab_haughty_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nHAUGHTY",
        options: ["A) Subservient", "B) Supercilious", "C) Imperious", "D) Arrogant"],
        correct: "A",
        explanation: "'Haughty' means proud, opposite to 'Subservient'."
    },
    {
        id: "vocab_lordly_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nLORDLY",
        options: ["A) Abject", "B) Supercilious", "C) Imperious", "D) Arrogant"],
        correct: "A",
        explanation: "'Lordly' means grand/proud, opposite to 'Abject'."
    },
    {
        id: "vocab_portentous_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPORTENTOUS",
        options: ["A) Ominous", "B) Auspicious", "C) Bright", "D) Propitious"],
        correct: "A",
        explanation: "'Portentous' and 'Ominous' both mean warning of evil."
    },
    {
        id: "vocab_unthreatening_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nUNTHREATENING",
        options: ["A) Menacing", "B) Auspicious", "C) Bright", "D) Propitious"],
        correct: "A",
        explanation: "'Unthreatening' means harmless, whereas 'Menacing' means threatening harm."
    },
    {
        id: "vocab_bright_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nBRIGHT",
        options: ["A) Ominous", "B) Auspicious", "C) Propitious", "D) Prosperous"],
        correct: "A",
        explanation: "'Bright' indicates a promising future, opposite to 'Ominous'."
    },
    {
        id: "vocab_prosperous_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPROSPEROUS",
        options: ["A) Thriving", "B) Baleful", "C) Sinister", "D) Inauspicious"],
        correct: "A",
        explanation: "'Prosperous' and 'Thriving' both mean successful and flourishing."
    },
    {
        id: "vocab_garnish_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nGARNISH",
        options: ["A) Adorn", "B) Understate", "C) Blemish", "D) Spoil"],
        correct: "A",
        explanation: "'Garnish' and 'Adorn' both mean to decorate."
    },
    {
        id: "vocab_amplify_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAMPLIFY",
        options: ["A) Magnify", "B) Understate", "C) Belittle", "D) Blemish"],
        correct: "A",
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
        options: ["A) Embellish", "B) Deface", "C) Blemish", "D) Understate"],
        correct: "A",
        explanation: "'Adorn' and 'Embellish' both mean to make beautiful with decoration."
    },
    {
        id: "vocab_ornament_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nORNAMENT",
        options: ["A) Beautify", "B) Spoil", "C) Blemish", "D) Belittle"],
        correct: "A",
        explanation: "'Ornament' and 'Beautify' both mean to add decorative features."
    },
    {
        id: "vocab_spoil_ant_ext",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nSPOIL",
        options: ["A) Decorate", "B) Deface", "C) Blemish", "D) Understate"],
        correct: "A",
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
        options: ["A) Extravagant", "B) Frugal", "C) Niggardly", "D) Penurious"],
        correct: "A",
        explanation: "'Lavish' and 'Extravagant' both mean rich or spent in large amounts."
    },
    {
        id: "vocab_extravagant_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nEXTRAVAGANT",
        options: ["A) Spendthrift", "B) Economical", "C) Frugal", "D) Thrifty"],
        correct: "A",
        explanation: "'Extravagant' and 'Spendthrift' refer to spending excessively."
    },
    {
        id: "vocab_unthrifty_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nUNTHRIFTY",
        options: ["A) Wasteful", "B) Economical", "C) Frugal", "D) Parsimonious"],
        correct: "A",
        explanation: "'Unthrifty' and 'Wasteful' both mean careless with money."
    },
    {
        id: "vocab_frugal_ant_ext",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nFRUGAL",
        options: ["A) Extravagant", "B) Thrifty", "C) Conserving", "D) Parsimonious"],
        correct: "A",
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
        options: ["A) Stingy", "B) Extravagant", "C) Lavish", "D) Profuse"],
        correct: "A",
        explanation: "'Parsimonious' and 'Stingy' both mean unwilling to spend money."
    },
    {
        id: "vocab_negate_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nNEGATE",
        options: ["A) Nullify", "B) Affirm", "C) Corroborate", "D) Confirm"],
        correct: "A",
        explanation: "'Negate' and 'Nullify' both mean to make ineffective or invalid."
    },
    {
        id: "vocab_disclaim_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDISCLAIM",
        options: ["A) Deny", "B) Claim", "C) Accept", "D) Espouse"],
        correct: "A",
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
        options: ["A) Deny", "B) Corroborate", "C) Avow", "D) Support"],
        correct: "A",
        explanation: "'Affirm' means to state as true, opposite to 'Deny'."
    },
    {
        id: "vocab_clubby_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCLUBBY",
        options: ["A) Sociable", "B) Aloof", "C) Reticent", "D) Solitary"],
        correct: "A",
        explanation: "'Clubby' and 'Sociable' both mean friendly and social."
    },
    {
        id: "vocab_extroverted_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nEXTROVERTED",
        options: ["A) Outgoing", "B) Introverted", "C) Taciturn", "D) Reticent"],
        correct: "A",
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
        options: ["A) Communal", "B) Solitary", "C) Reclusive", "D) Taciturn"],
        correct: "A",
        explanation: "'Colonial' and 'Communal' refer to living together in groups."
    },
    {
        id: "vocab_cordial_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCORDIAL",
        options: ["A) Amicable", "B) Hostile", "C) Aloof", "D) Cold"],
        correct: "A",
        explanation: "'Cordial' and 'Amicable' both mean warm and friendly."
    },
    {
        id: "vocab_affable_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAFFABLE",
        options: ["A) Genial", "B) Unapproachable", "C) Aloof", "D) Reticent"],
        correct: "A",
        explanation: "'Affable' and 'Genial' both mean friendly and easy to talk to."
    },
    {
        id: "vocab_amiable_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAMIABLE",
        options: ["A) Pleasant", "B) Hostile", "C) Taciturn", "D) Antisocial"],
        correct: "A",
        explanation: "'Amiable' and 'Pleasant' both mean friendly and good-natured."
    },
    {
        id: "vocab_introverted_ant_ext",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nINTROVERTED",
        options: ["A) Extroverted", "B) Reticent", "C) Taciturn", "D) Aloof"],
        correct: "A",
        explanation: "'Introverted' means quiet/reserved, opposite to 'Extroverted'."
    },
    {
        id: "vocab_induce_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nINDUCE",
        options: ["A) Prompt", "B) Prevent", "C) Stop", "D) Quell"],
        correct: "A",
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
        options: ["A) Produce", "B) Destroy", "C) Suppress", "D) Halt"],
        correct: "A",
        explanation: "'Spawn' and 'Produce' both mean to generate or bring forth."
    },
    {
        id: "vocab_yield_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nYIELD",
        options: ["A) Generate", "B) Restrict", "C) Impede", "D) Suppress"],
        correct: "A",
        explanation: "'Yield' and 'Generate' both mean to produce or provide."
    },
    {
        id: "vocab_impede_ant_ext",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nIMPEDE",
        options: ["A) Facilitate", "B) Restrict", "C) Quell", "D) Crush"],
        correct: "A",
        explanation: "'Impede' means to obstruct, opposite to 'Facilitate'."
    },
    {
        id: "vocab_rebuke_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nREBUKE",
        options: ["A) Reprimand", "B) Compliment", "C) Praise", "D) Honor"],
        correct: "A",
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
        options: ["A) Disapprove", "B) Praise", "C) Honor", "D) Applaud"],
        correct: "A",
        explanation: "'Reproach' and 'Disapprove' both express criticism or disappointment."
    },
    {
        id: "vocab_reprimand_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nREPRIMAND",
        options: ["A) Rebuke", "B) Commendation", "C) Praise", "D) Honor"],
        correct: "A",
        explanation: "'Reprimand' and 'Rebuke' refer to a formal expression of disapproval."
    },
    {
        id: "vocab_laud_ant_ext",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nLAUD",
        options: ["A) Castigate", "B) Extol", "C) Praise", "D) Exalt"],
        correct: "A",
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
        options: ["A) Glorify", "B) Belittle", "C) Demote", "D) Defame"],
        correct: "A",
        explanation: "'Exalt' and 'Glorify' both mean to praise or raise high in honor."
    },
    {
        id: "vocab_blaspheme_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nBLASPHEME",
        options: ["A) Defile", "B) Revere", "C) Exalt", "D) Extol"],
        correct: "A",
        explanation: "'Blaspheme' and 'Defile' both involve speaking or acting disrespectfully toward sacred things."
    },
    {
        id: "vocab_profane_syn_ext",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPROFANE",
        options: ["A) Desecrate", "B) Exalt", "C) Extol", "D) Laud"],
        correct: "A",
        explanation: "'Profane' and 'Desecrate' both mean to treat sacred things with disrespect."
    },
    // --- ADD-ON BATCH: Discord, Amenable, Recant, Contrite, Pompous, Impervious ---
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
        options: ["A) Disaccord", "B) Accord", "C) Peace", "D) Harmony"],
        correct: "A",
        explanation: "'Dissension' and 'Disaccord' both refer to disagreement or conflict within a group."
    },
    {
        id: "vocab_contention_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCONTENTION",
        options: ["A) Dispute", "B) Concordance", "C) Agreement", "D) Harmony"],
        correct: "A",
        explanation: "'Contention' and 'Dispute' both mean heated disagreement or struggle."
    },
    {
        id: "vocab_dissonance_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDISSONANCE",
        options: ["A) Disharmony", "B) Concord", "C) Accord", "D) Peace"],
        correct: "A",
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
        options: ["A) Biddable", "B) Intractable", "C) Defiant", "D) Willful"],
        correct: "A",
        explanation: "'Docile' and 'Biddable' both mean submissive, obedient, and easy to manage."
    },
    {
        id: "vocab_placable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPLACABLE",
        options: ["A) Appeasable", "B) Recalcitrant", "C) Defiant", "D) Intractable"],
        correct: "A",
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
        options: ["A) Abjure", "B) Endorse", "C) Assert", "D) Proclaim"],
        correct: "A",
        explanation: "'Recant' and 'Abjure' both mean to formally renounce or retract a statement/belief."
    },
    {
        id: "vocab_recant_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nRECANT",
        options: ["A) Endorse", "B) Retract", "C) Renege", "D) Repeal"],
        correct: "A",
        explanation: "'Recant' means to withdraw a statement, whereas 'Endorse' means to support or confirm it publicly."
    },
    {
        id: "vocab_retract_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nRETRACT",
        options: ["A) Repeal", "B) Confirm", "C) Proclaim", "D) Assert"],
        correct: "A",
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
        options: ["A) Renounce", "B) Affirm", "C) Assert", "D) Endorse"],
        correct: "A",
        explanation: "'Abjure' and 'Renounce' both mean to formally reject or give up a belief or claim."
    },
    {
        id: "vocab_contrite_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCONTRITE",
        options: ["A) Penitent", "B) Remorseless", "C) Pitiless", "D) Ruthless"],
        correct: "A",
        explanation: "'Contrite' and 'Penitent' both mean feeling deep remorse or sorrow for wrongdoings."
    },
    {
        id: "vocab_contrite_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nCONTRITE",
        options: ["A) Impenitent", "B) Remorseful", "C) Repentant", "D) Apologetic"],
        correct: "A",
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
        options: ["A) Remorseful", "B) Shameless", "C) Ruthless", "D) Pitiless"],
        correct: "A",
        explanation: "'Rueful' and 'Remorseful' both express sorrow or regret for a past action."
    },
    {
        id: "vocab_pompous_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPOMPOUS",
        options: ["A) Supercilious", "B) Unpretentious", "C) Humble", "D) Diffident"],
        correct: "A",
        explanation: "'Pompous' and 'Supercilious' both describe someone who is arrogant, self-important, and haughty."
    },
    {
        id: "vocab_pompous_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nPOMPOUS",
        options: ["A) Unpretentious", "B) Pretentious", "C) Ostentatious", "D) Imperious"],
        correct: "A",
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
        options: ["A) Overbearing", "B) Unpretentious", "C) Timid", "D) Lowly"],
        correct: "A",
        explanation: "'Imperious' and 'Overbearing' both mean domineering and commanding arrogantly."
    },
    {
        id: "vocab_diffident_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDIFFIDENT",
        options: ["A) Arrogant", "B) Timid", "C) Shy", "D) Modest"],
        correct: "A",
        explanation: "'Diffident' means shy or lacking self-confidence, opposite to 'Arrogant'."
    },
    {
        id: "vocab_impervious_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nIMPERVIOUS",
        options: ["A) Impenetrable", "B) Permeable", "C) Pliable", "D) Pervious"],
        correct: "A",
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
        options: ["A) Impermeable", "B) Pervious", "C) Penetrable", "D) Negotiable"],
        correct: "A",
        explanation: "'Hermetic' and 'Impermeable' both mean completely sealed against gas or liquid."
    },
    {
        id: "vocab_pliable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPLIABLE",
        options: ["A) Malleable", "B) Inflexible", "C) Unyielding", "D) Impenetrable"],
        correct: "A",
        explanation: "'Pliable' and 'Malleable' both describe something easily bent, shaped, or influenced."
    },
    {
        id: "vocab_recalcitrant_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nRECALCITRANT",
        options: ["A) Defiant", "B) Docile", "C) Submissive", "D) Compliant"],
        correct: "A",
        explanation: "'Recalcitrant' and 'Defiant' both refer to an uncooperative attitude toward authority."
    },
    // --- ADD-ON BATCH: Cajole, Forbearance, Defamation, Prologue, Angular, Abstruse, Frivolous ---
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
        options: ["A) Impatience", "B) Patience", "C) Anger", "D) Agitation"],
        correct: "B",
        explanation: "'Forbearance' and 'Patience' both mean showing restraint and endurance without getting angry."
    },
    {
        id: "vocab_forbearance_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nFORBEARANCE",
        options: ["A) Lenience", "B) Clemency", "C) Impatience", "D) Acquiescence"],
        correct: "C",
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
    // --- ADD-ON BATCH: Ethereal, Infamous, Vivid, Deplete ---
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
        options: ["(A) Light-heartedness", "(B) Gravity", "(C) Soberness", "(D) Solemnity"],
        correct: "A",
        explanation: "'Levity' means treatment of a serious matter with humor; light-heartedness."
    },
    {
        id: "vocab_silliness_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSILLINESS",
        options: ["(A) Playful behavior", "(B) Gravity", "(C) Seriousness", "(D) Wisdom"],
        correct: "A",
        explanation: "'Silliness' means lacking in seriousness or engaging in playful behavior."
    },
    {
        id: "vocab_flightiness_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nFLIGHTINESS",
        options: ["(A) Stability", "(B) Fickleness", "(C) Seriousness", "(D) Focus"],
        correct: "B",
        explanation: "'Flightiness' refers to the quality of being easily distracted or excited (चंचलता)."
    },
    {
        id: "vocab_flippancy_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nFLIPPANCY",
        options: ["(A) Levity", "(B) Respect", "(C) Solemnity", "(D) Earnestness"],
        correct: "A",
        explanation: "'Flippancy' refers to a lack of seriousness or respect (हलकापन)."
    },
    {
        id: "vocab_frivolity_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nFRIVOLITY",
        options: ["(A) Triviality", "(B) Gravity", "(C) Soberness", "(D) Importance"],
        correct: "A",
        explanation: "'Frivolity' means behavior or speech that lacks seriousness or depth (तुच्छता)."
    },
    {
        id: "vocab_frothiness_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nFROTHINESS",
        options: ["(A) Depth", "(B) Lack of depth", "(C) Seriousness", "(D) Wisdom"],
        correct: "B",
        explanation: "'Frothiness' implies a lack of depth, substance, or seriousness."
    },
    {
        id: "vocab_festivity_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nFESTIVITY",
        options: ["(A) Celebration", "(B) Mourning", "(C) Sadness", "(D) Gravity"],
        correct: "A",
        explanation: "'Festivity' refers to being cheerful, celebratory, or associated with a holiday."
    },
    {
        id: "vocab_gaiety_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nGAIETY",
        options: ["(A) Cheerfulness", "(B) Gloom", "(C) Soberness", "(D) Sorrow"],
        correct: "A",
        explanation: "'Gaiety' means the state of being cheerful and full of happiness (हर्षोल्लास)."
    },
    {
        id: "vocab_seriousness_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nSERIOUSNESS",
        options: ["(A) Levity", "(B) Gravity", "(C) Solemnity", "(D) Soberness"],
        correct: "A",
        explanation: "'Seriousness' means being thoughtful/serious. Antonym is 'Levity'."
    },
    {
        id: "vocab_gravity_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nGRAVITY",
        options: ["(A) Frivolity", "(B) Importance", "(C) Seriousness", "(D) Solemnity"],
        correct: "A",
        explanation: "'Gravity' refers to seriousness or importance. Antonym is 'Frivolity'."
    },
    {
        id: "vocab_solemnness_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nSOLEMNITY",
        options: ["(A) Silliness", "(B) Dignity", "(C) Seriousness", "(D) Gravity"],
        correct: "A",
        explanation: "'Solemnity' means being formal and serious. Antonym is 'Silliness'."
    },
    {
        id: "vocab_soberness_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nSOBERNESS",
        options: ["(A) Flippancy", "(B) Restraint", "(C) Earnestness", "(D) Gravity"],
        correct: "A",
        explanation: "'Soberness' means being serious or restrained. Antonym is 'Flippancy'."
    },
    // --- 1. AMIABLE & ITS SYNONYMS/ANTONYMS ---
    {
        id: "vocab_amiable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAMIABLE",
        options: ["(A) Unfriendly", "(B) Friendly", "(C) Hostile", "(D) Rude"],
        correct: "B",
        explanation: "'Amiable' means friendly and pleasant."
    },
    {
        id: "vocab_affable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAFFABLE",
        options: ["(A) Approachable", "(B) Reserved", "(C) Strict", "(D) Proud"],
        correct: "A",
        explanation: "'Affable' means friendly and easy to talk to."
    },
    {
        id: "vocab_agreeable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAGREEABLE",
        options: ["(A) Unpleasant", "(B) Pleasant", "(C) Stubborn", "(D) Harsh"],
        correct: "B",
        explanation: "'Agreeable' means pleasant and easy to get along with."
    },
    {
        id: "vocab_genial_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nGENIAL",
        options: ["(A) Cheerful", "(B) Gloomy", "(C) Cold", "(D) Distant"],
        correct: "A",
        explanation: "'Genial' means cheerful, friendly, and warm."
    },
    {
        id: "vocab_gracious_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nGRACIOUS",
        options: ["(A) Courteous", "(B) Impolite", "(C) Arrogant", "(D) Cruel"],
        correct: "A",
        explanation: "'Gracious' means kind, courteous, and pleasant."
    },
    {
        id: "vocab_mellow_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nMELLOW",
        options: ["(A) Harsh", "(B) Relaxed", "(C) Aggressive", "(D) Loud"],
        correct: "B",
        explanation: "'Mellow' means calm, soft, and relaxed."
    },
    {
        id: "vocab_amicable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAMICABLE",
        options: ["(A) Contentious", "(B) Peaceful", "(C) Hostile", "(D) Bitter"],
        correct: "B",
        explanation: "'Amicable' means friendly and peaceful."
    },
    {
        id: "vocab_cordial_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCORDIAL",
        options: ["(A) Warm", "(B) Cold", "(C) Distant", "(D) Rude"],
        correct: "A",
        explanation: "'Cordial' means warm, friendly, and polite."
    },
    {
        id: "vocab_benign_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nBENIGN",
        options: ["(A) Harmful", "(B) Gentle", "(C) Severe", "(D) Malicious"],
        correct: "B",
        explanation: "'Benign' means gentle, kind, and not harmful."
    },
    {
        id: "vocab_sociable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nSOCIABLE",
        options: ["(A) Outgoing", "(B) Reclusive", "(C) Shy", "(D) Unfriendly"],
        correct: "A",
        explanation: "'Sociable' means friendly and enjoying company."
    },
    {
        id: "vocab_amenable_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nAMENABLE",
        options: ["(A) Cooperative", "(B) Defiant", "(C) Unwilling", "(D) Rigid"],
        correct: "A",
        explanation: "'Amenable' means willing to agree or cooperate."
    },
    {
        id: "vocab_disagreeable_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDISAGREEABLE",
        options: ["(A) Pleasant", "(B) Unpleasant", "(C) Rude", "(D) Harsh"],
        correct: "A",
        explanation: "'Disagreeable' means unpleasant; its antonym is Pleasant."
    },
    {
        id: "vocab_unamiable_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nUNAMIABLE",
        options: ["(A) Unfriendly", "(B) Amiable", "(C) Hostile", "(D) Cold"],
        correct: "B",
        explanation: "'Unamiable' means unfriendly; its antonym is Amiable."
    },
    {
        id: "vocab_ungenial_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nUNGENIAL",
        options: ["(A) Harsh", "(B) Genial", "(C) Cold", "(D) Severe"],
        correct: "B",
        explanation: "'Ungenial' means unwelcoming or harsh; its antonym is Genial."
    },
    {
        id: "vocab_unpleasant_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nUNPLEASANT",
        options: ["(A) Agreeable", "(B) Disgusting", "(C) Bitter", "(D) Harsh"],
        correct: "A",
        explanation: "'Unpleasant' means causing discomfort; its antonym is Agreeable."
    },
    {
        id: "vocab_illtempered_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nILL-TEMPERED",
        options: ["(A) Irritable", "(B) Good-natured", "(C) Angry", "(D) Sullen"],
        correct: "B",
        explanation: "'Ill-tempered' means easily angered; its antonym is Good-natured."
    },

    // --- 2. HOMOGENEOUS & ITS SYNONYMS/ANTONYMS ---
    {
        id: "vocab_homogeneous_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nHOMOGENEOUS",
        options: ["(A) Uniform", "(B) Diverse", "(C) Varied", "(D) Mixed"],
        correct: "A",
        explanation: "'Homogeneous' means composed of parts of the same kind."
    },
    {
        id: "vocab_unchanging_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nUNCHANGING",
        options: ["(A) Constant", "(B) Variable", "(C) Fickle", "(D) Unstable"],
        correct: "A",
        explanation: "'Unchanging' means remaining the same."
    },
    {
        id: "vocab_cognate_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCOGNATE",
        options: ["(A) Related", "(B) Unrelated", "(C) Foreign", "(D) Opposite"],
        correct: "A",
        explanation: "'Cognate' means having a common origin or similar nature."
    },
    {
        id: "vocab_connate_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCONNATE",
        options: ["(A) Innate", "(B) Acquired", "(C) External", "(D) Foreign"],
        correct: "A",
        explanation: "'Connate' means existing from birth or inborn."
    },
    {
        id: "vocab_resemblant_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nRESEMBLANT",
        options: ["(A) Similar", "(B) Different", "(C) Opposite", "(D) Distinct"],
        correct: "A",
        explanation: "'Resemblant' means similar in appearance or nature."
    },
    {
        id: "vocab_commensurate_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCOMMENSURATE",
        options: ["(A) Proportionate", "(B) Inadequate", "(C) Unequal", "(D) Irrelevant"],
        correct: "A",
        explanation: "'Commensurate' means corresponding in size or degree."
    },
    {
        id: "vocab_congenial_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCONGENIAL",
        options: ["(A) Compatible", "(B) Unfavorable", "(C) Hostile", "(D) Mismatched"],
        correct: "A",
        explanation: "'Congenial' means pleasant and suitable."
    },
    {
        id: "vocab_congeneric_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCONGENERIC",
        options: ["(A) Similar", "(B) Diverse", "(C) Separate", "(D) Alien"],
        correct: "A",
        explanation: "'Congeneric' means belonging to the same genus or kind."
    },
    {
        id: "vocab_disparate_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDISPARATE",
        options: ["(A) Similar", "(B) Different", "(C) Dissimilar", "(D) Varied"],
        correct: "A",
        explanation: "'Disparate' means essentially different; its antonym is Similar."
    },
    {
        id: "vocab_distinct_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDISTINCT",
        options: ["(A) Indistinct", "(B) Clear", "(C) Separate", "(D) Obvious"],
        correct: "A",
        explanation: "'Distinct' means clearly different; its antonym is Indistinct."
    },
    {
        id: "vocab_imprecise_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nIMPRECISE",
        options: ["(A) Exact", "(B) Vague", "(C) Rough", "(D) Careless"],
        correct: "A",
        explanation: "'Imprecise' means lacking exactness; its antonym is Exact."
    },
    {
        id: "vocab_diverse_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nDIVERSE",
        options: ["(A) Identical", "(B) Varied", "(C) Mixed", "(D) Broad"],
        correct: "A",
        explanation: "'Diverse' means showing variety; its antonym is Identical."
    },
    {
        id: "vocab_unlike_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nUNLIKE",
        options: ["(A) Similar", "(B) Different", "(C) Distant", "(D) Separate"],
        correct: "A",
        explanation: "'Unlike' means different from; its antonym is Similar."
    },

    // --- 3. OBLIVION & ITS SYNONYMS/ANTONYMS ---
    {
        id: "vocab_oblivion_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nOBLIVION",
        options: ["(A) Forgetfulness", "(B) Memory", "(C) Awareness", "(D) Fame"],
        correct: "A",
        explanation: "'Oblivion' means the state of being forgotten or unaware."
    },
    {
        id: "vocab_forgetfulness_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nFORGETFULNESS",
        options: ["(A) Inattention", "(B) Recollection", "(C) Remembrance", "(D) Retention"],
        correct: "A",
        explanation: "'Forgetfulness' refers to the state of forgetting things."
    },
    {
        id: "vocab_innocence_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nINNOCENCE",
        options: ["(A) Guiltlessness", "(B) Guilt", "(C) Sin", "(D) Blame"],
        correct: "A",
        explanation: "'Innocence' means freedom from guilt or unawareness of evil."
    },
    {
        id: "vocab_ignorance_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nIGNORANCE",
        options: ["(A) Unawareness", "(B) Knowledge", "(C) Wisdom", "(D) Insight"],
        correct: "A",
        explanation: "'Ignorance' means lack of knowledge or awareness."
    },
    {
        id: "vocab_insensibility_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nINSENSIBILITY",
        options: ["(A) Unconsciousness", "(B) Alertness", "(C) Sensitivity", "(D) Feeling"],
        correct: "A",
        explanation: "'Insensibility' means being unaware or unconscious."
    },
    {
        id: "vocab_unfamiliarity_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nUNFAMILIARITY",
        options: ["(A) Novelty", "(B) Acquaintance", "(C) Knowledge", "(D) Expertise"],
        correct: "A",
        explanation: "'Unfamiliarity' means the state of being unknown or unusual."
    },
    {
        id: "vocab_preoccupation_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nPREOCCUPATION",
        options: ["(A) Absorption", "(B) Indifference", "(C) Neglect", "(D) Apathy"],
        correct: "A",
        explanation: "'Preoccupation' means being engrossed or distracted by something."
    },
    {
        id: "vocab_recall_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nRECALL",
        options: ["(A) Forget", "(B) Remember", "(C) Retain", "(D) Mind"],
        correct: "A",
        explanation: "'Recall' means to remember; its antonym is Forget."
    },
    {
        id: "vocab_remembrance_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nREMEMBRANCE",
        options: ["(A) Oblivion", "(B) Memory", "(C) Tribute", "(D) Respect"],
        correct: "A",
        explanation: "'Remembrance' means memory or honoring; its antonym is Oblivion."
    },
    {
        id: "vocab_alertness_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nALERTNESS",
        options: ["(A) Inattention", "(B) Readiness", "(C) Vigilance", "(D) Quickness"],
        correct: "A",
        explanation: "'Alertness' means being attentive; its antonym is Inattention."
    },
    {
        id: "vocab_cognizance_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nCOGNIZANCE",
        options: ["(A) Ignorance", "(B) Awareness", "(C) Notice", "(D) Understanding"],
        correct: "A",
        explanation: "'Cognizance' means knowledge or awareness; its antonym is Ignorance."
    },
    {
        id: "vocab_consciousness_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nCONSCIOUSNESS",
        options: ["(A) Unconsciousness", "(B) Awareness", "(C) Mind", "(D) Perception"],
        correct: "A",
        explanation: "'Consciousness' means state of being aware; its antonym is Unconsciousness."
    },

    // --- 4. DISCURSIVE & ITS SYNONYMS/ANTONYMS ---
    {
        id: "vocab_discursive_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDISCURSIVE",
        options: ["(A) Wandering", "(B) Direct", "(C) Concise", "(D) Focused"],
        correct: "A",
        explanation: "'Discursive' means rambling or moving from topic to topic."
    },
    {
        id: "vocab_desultory_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDESULTORY",
        options: ["(A) Aimless", "(B) Systematic", "(C) Methodical", "(D) Planned"],
        correct: "A",
        explanation: "'Desultory' means lacking a clear plan or purpose."
    },
    {
        id: "vocab_rambling_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nRAMBLING",
        options: ["(A) Digressive", "(B) Short", "(C) Coherent", "(D) Compact"],
        correct: "A",
        explanation: "'Rambling' means lengthy and wandering in discourse."
    },
    {
        id: "vocab_excursive_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nEXCURSIVE",
        options: ["(A) Off-topic", "(B) Direct", "(C) Brief", "(D) Precise"],
        correct: "A",
        explanation: "'Excursive' means straying from the main subject."
    },
    {
        id: "vocab_digressional_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDIGRESSIONAL",
        options: ["(A) Wandering", "(B) Direct", "(C) Relevant", "(D) Focused"],
        correct: "A",
        explanation: "'Digressional' means straying from the main point."
    },
    {
        id: "vocab_leaping_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nLEAPING",
        options: ["(A) Jumping", "(B) Steady", "(C) Fixed", "(D) Constant"],
        correct: "A",
        explanation: "'Leaping' means jumping rapidly from topic to topic."
    },
    {
        id: "vocab_maundering_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nMAUNDERING",
        options: ["(A) Babbling", "(B) Clear", "(C) Purposeful", "(D) Precise"],
        correct: "A",
        explanation: "'Maundering' means talking in a rambling or aimless way."
    },
    {
        id: "vocab_deviating_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDEVIATING",
        options: ["(A) Straying", "(B) Conforming", "(C) Direct", "(D) Continuing"],
        correct: "A",
        explanation: "'Deviating' means departing from an intended course."
    },
    {
        id: "vocab_logical_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nLOGICAL",
        options: ["(A) Irrational", "(B) Rational", "(C) Sound", "(D) Valid"],
        correct: "A",
        explanation: "'Logical' means clear and reasoned; its antonym is Irrational."
    },
    {
        id: "vocab_coherent_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nCOHERENT",
        options: ["(A) Incoherent", "(B) Clear", "(C) Logical", "(D) Organized"],
        correct: "A",
        explanation: "'Coherent' means logical and consistent; its antonym is Incoherent."
    },
    {
        id: "vocab_consistent_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nCONSISTENT",
        options: ["(A) Inconsistent", "(B) Steady", "(C) Constant", "(D) Uniform"],
        correct: "A",
        explanation: "'Consistent' means remaining unchanged; its antonym is Inconsistent."
    },
    {
        id: "vocab_focused_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nFOCUSED",
        options: ["(A) Distracted", "(B) Attentive", "(C) Sharp", "(D) Direct"],
        correct: "A",
        explanation: "'Focused' means concentrated; its antonym is Distracted."
    },
    {
        id: "vocab_straightforward_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nSTRAIGHTFORWARD",
        options: ["(A) Complicated", "(B) Simple", "(C) Direct", "(D) Clear"],
        correct: "A",
        explanation: "'Straightforward' means direct and simple; its antonym is Complicated."
    },

    // --- 5. DUPLICITY & ITS SYNONYMS/ANTONYMS ---
    {
        id: "vocab_duplicity_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDUPLICITY",
        options: ["(A) Deceit", "(B) Honesty", "(C) Sincerity", "(D) Truth"],
        correct: "A",
        explanation: "'Duplicity' means deceitfulness or double-dealing."
    },
    {
        id: "vocab_deceitfulness_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDECEITFULNESS",
        options: ["(A) Dishonesty", "(B) Truthfulness", "(C) Candor", "(D) Trust"],
        correct: "A",
        explanation: "'Deceitfulness' refers to misleading someone intentionally."
    },
    {
        id: "vocab_cunning_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCUNNING",
        options: ["(A) Craftiness", "(B) Naivety", "(C) Innocence", "(D) Honesty"],
        correct: "A",
        explanation: "'Cunning' means skill in achieving one's ends by deceit."
    },
    {
        id: "vocab_deceptiveness_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDECEPTIVENESS",
        options: ["(A) Trickery", "(B) Openness", "(C) Frankness", "(D) Sincerity"],
        correct: "A",
        explanation: "'Deceptiveness' means quality of being misleading or dishonest."
    },
    {
        id: "vocab_dissembling_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nDISSEMBLING",
        options: ["(A) Feigning", "(B) Revealing", "(C) Exposing", "(D) Unmasking"],
        correct: "A",
        explanation: "'Dissembling' means concealing one's true motives or feelings."
    },
    {
        id: "vocab_guile_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nGUILE",
        options: ["(A) Slyness", "(B) Guilelessness", "(C) Honesty", "(D) Frankness"],
        correct: "A",
        explanation: "'Guile' means sly or cunning intelligence."
    },
    {
        id: "vocab_craftiness_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCRAFTINESS",
        options: ["(A) Trickery", "(B) Simplicity", "(C) Honesty", "(D) Candor"],
        correct: "A",
        explanation: "'Craftiness' means cleverness used in a deceptive way."
    },
    {
        id: "vocab_cozenage_syn",
        type: "Synonym",
        question: "Select the most appropriate SYNONYM of the given word:\nCOZENAGE",
        options: ["(A) Deception", "(B) Fairness", "(C) Truth", "(D) Sincerity"],
        correct: "A",
        explanation: "'Cozenage' means trickery or deception intended to cheat."
    },
    {
        id: "vocab_goodfaith_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nGOOD FAITH",
        options: ["(A) Fraud", "(B) Sincerity", "(C) Honesty", "(D) Trust"],
        correct: "A",
        explanation: "'Good faith' means honesty of intention; its antonym is Fraud."
    },
    {
        id: "vocab_guilelessness_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nGUILELESSNESS",
        options: ["(A) Deceit", "(B) Innocence", "(C) Sincerity", "(D) Honesty"],
        correct: "A",
        explanation: "'Guilelessness' means innocence; its antonym is Deceit."
    },
    {
        id: "vocab_sincerity_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nSINCERITY",
        options: ["(A) Hypocrisy", "(B) Honesty", "(C) Candor", "(D) Truthfulness"],
        correct: "A",
        explanation: "'Sincerity' means being genuine; its antonym is Hypocrisy."
    },
    {
        id: "vocab_reliability_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nRELIABILITY",
        options: ["(A) Unreliability", "(B) Trustworthiness", "(C) Dependability", "(D) Loyalty"],
        correct: "A",
        explanation: "'Reliability' means dependability; its antonym is Unreliability."
    },
    {
        id: "vocab_virtuousness_ant",
        type: "Antonym",
        question: "Select the most appropriate ANTONYM of the given word:\nVIRTUOUSNESS",
        options: ["(A) Wickedness", "(B) Morality", "(C) Goodness", "(D) Integrity"],
        correct: "A",
        explanation: "'Virtuousness' means high moral standards; its antonym is Wickedness."
    },
];