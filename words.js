const questions = [
    {
        id: "vocab_detestable_syn",
        word: "DETESTABLE",
        type: "Synonym",
        meaning: "provoking intense hatred, disgust, or moral revulsion (घृणास्पद / नफ़रत के क़ाबिल)",
        synonym: "Despicable",
        antonym: "Commendable"
    },
    {
        id: "vocab_louche_syn",
        word: "LOUCHE",
        type: "Synonym",
        meaning: "of questionable respectability, shady, or morally dubious (संदिग्ध / चरित्रहीन)",
        synonym: "Disreputable",
        antonym: "Admirable"
    },
    {
        id: "vocab_ignominious_ant",
        word: "IGNOMINIOUS",
        type: "Antonym",
        meaning: "causing public disgrace, humiliation, or dishonor (कलंकपूर्ण / अपमानजनक)",
        synonym: "Shameful",
        antonym: "Honorable"
    },
    {
        id: "vocab_set1_1",
        word: "EMBELLISH",
        type: "Synonym",
        meaning: "making something more attractive by adding decorative details (सजाना / संवारना)",
        synonym: "Caparison",
        antonym: "Deface"
    },
    {
        id: "vocab_set1_2",
        word: "EMBELLISH",
        type: "Antonym",
        meaning: "decorating, adorning, or enhancing visual appeal (सजाना)",
        synonym: "Adorn",
        antonym: "Deface"
    },
    {
        id: "vocab_set1_3",
        word: "PRODIGAL",
        type: "Synonym",
        meaning: "spending money, time, or resources recklessly and extravagantly (फ़िज़ूलख़र्च / अपव्ययी)",
        synonym: "Profligate",
        antonym: "Parsimonious"
    },
    {
        id: "vocab_set1_4",
        word: "PRODIGAL",
        type: "Antonym",
        meaning: "spendthrift, recklessly wasteful financial behavior (फ़िज़ूलख़र्च)",
        synonym: "Squandering",
        antonym: "Parsimonious"
    },
    {
        id: "vocab_set1_5",
        word: "REPUDIATE",
        type: "Synonym",
        meaning: "refusing to accept, acknowledge, or be associated with an idea/claim (अस्वीकार करना / परित्याग करना)",
        synonym: "Disavow",
        antonym: "Corroborate"
    },
    {
        id: "vocab_set1_6",
        word: "REPUDIATE",
        type: "Antonym",
        meaning: "rejecting, disowning, or denying the validity of a claim (खंडन करना / त्यागना)",
        synonym: "Disown",
        antonym: "Corroborate"
    },
    {
        id: "vocab_set1_7",
        word: "SQUANDERER",
        type: "Synonym",
        meaning: "wasting money, time, or resources carelessly (गँवाने वाला / फ़िज़ूलख़र्च)",
        synonym: "Spendthrift",
        antonym: "Frugal"
    },
    {
        id: "vocab_set1_8",
        word: "PENURIOUS",
        type: "Synonym",
        meaning: "living in extreme poverty or severe lack of resources (दरिद्र)",
        synonym: "Destitute",
        antonym: "Opulent"
    },
    {
        id: "vocab_set1_9",
        word: "BELITTLE",
        type: "Antonym",
        meaning: "making a person or achievement seem small or unimportant (कम आँकना / नीचा दिखाना)",
        synonym: "Disparage",
        antonym: "Amplify"
    },
    {
        id: "vocab_set1_10",
        word: "ABDICATE",
        type: "Synonym",
        meaning: "formally giving up or stepping down from power or position (त्यागना / पद छोड़ना)",
        synonym: "Renounce",
        antonym: "Usurp"
    },
    {
        id: "vocab_set1_11",
        word: "RECANT",
        type: "Synonym",
        meaning: "formally withdrawing or taking back a held opinion or statement (बयान वापस लेना / मुकर जाना)",
        synonym: "Retract",
        antonym: "Affirm"
    },
    {
        id: "vocab_set1_12",
        word: "IMPRUDENT",
        type: "Antonym",
        meaning: "acting without due care, thought, or practical wisdom (बेवकूफ़ / लापरवाही से भरा)",
        synonym: "Rash",
        antonym: "Wise"
    },
    {
        id: "vocab_set1_13",
        word: "NIGGARDLY",
        type: "Synonym",
        meaning: "an ungenerous, reluctant, or miserly approach to spending (कंजूस)",
        synonym: "Stingy",
        antonym: "Generous"
    },
    {
        id: "vocab_set1_14",
        word: "AVOW",
        type: "Synonym",
        meaning: "asserting, confessing, or declaring openly and firmly (स्वीकार करना / घोषणा करना)",
        synonym: "Declare",
        antonym: "Deny"
    },
    {
        id: "vocab_set1_15",
        word: "PROFUSE",
        type: "Antonym",
        meaning: "available or given in extravagant, generous abundance (प्रचुर / अत्यधिक)",
        synonym: "Abundant",
        antonym: "Meager"
    },
    {
        id: "vocab_set1_16",
        word: "SCRIMPING",
        type: "Synonym",
        meaning: "spending money or using resources very carefully and frugally (किफ़ायत करना / बचत करना)",
        synonym: "Economizing",
        antonym: "Squandering"
    },
    {
        id: "vocab_set1_17",
        word: "ESPOUSE",
        type: "Antonym",
        meaning: "adopting, supporting, or embracing an idea or belief (समर्थन करना / अपनाना)",
        synonym: "Adopt",
        antonym: "Reject"
    },
    {
        id: "vocab_set1_18",
        word: "REFUTE",
        type: "Synonym",
        meaning: "proving a statement or theory to be false using evidence (खंडन करना / झूठा साबित करना)",
        synonym: "Disprove",
        antonym: "Confirm"
    },
    {
        id: "vocab_set1_19",
        word: "DISOWN",
        type: "Antonym",
        meaning: "refusing to acknowledge connection or responsibility for something (त्यागना / संबंध तोड़ना)",
        synonym: "Repudiate",
        antonym: "Acknowledge"
    },
    {
        id: "vocab_set1_20",
        word: "BLEMISH",
        type: "Synonym",
        meaning: "a mark, fault, or defect that spoils the appearance or purity (दाग / धब्बा / दोष)",
        synonym: "Flaw",
        antonym: "Perfection"
    },
    {
        id: "vocab_dawdle_syn",
        word: "DAWDLE",
        type: "Synonym",
        meaning: "wasting time or moving slowly and aimlessly (समय गँवाना / सुस्ती करना)",
        synonym: "Procrastinate",
        antonym: "Hasten"
    },
    {
        id: "vocab_fiddle_around_syn",
        word: "FIDDLE AROUND",
        type: "Synonym",
        meaning: "spending time doing aimless, unproductive, or trivial things (समय बर्बाद करना)",
        synonym: "Loiter",
        antonym: "Expedite"
    },
    {
        id: "vocab_amble_syn",
        word: "AMBLE",
        type: "Synonym",
        meaning: "walking or moving at a slow, relaxed, and unhurried pace (मंथर गति से चलना / टहलना)",
        synonym: "Stroll",
        antonym: "Sprint"
    },
    {
        id: "vocab_trifle_syn",
        word: "TRIFLE",
        type: "Synonym",
        meaning: "treating a serious matter casually or wasting time foolishly (हलके में लेना / खिलवाड़ करना)",
        synonym: "Dally",
        antonym: "Deliberate"
    },
    {
        id: "vocab_stagger_syn",
        word: "STAGGER",
        type: "Synonym",
        meaning: "walking or moving unsteadily as if about to fall (लड़खड़ाना)",
        synonym: "Lurch",
        antonym: "Steady"
    },
    {
        id: "vocab_decelerate_syn",
        word: "DECELERATE",
        type: "Synonym",
        meaning: "slowing down or reducing speed (गति कम करना)",
        synonym: "Slacken",
        antonym: "Accelerate"
    },
    {
        id: "vocab_dawdle_ant",
        word: "DAWDLE",
        type: "Antonym",
        meaning: "moving slowly or wasting time lingering aimlessly (समय गँवाना / विलंब करना)",
        synonym: "Loiter",
        antonym: "Barrel"
    },
    {
        id: "vocab_exert_syn",
        word: "EXERT",
        type: "Synonym",
        meaning: "applying oneself greatly or putting forth intense effort (ज़ोर लगाना / प्रयास करना)",
        synonym: "Strive",
        antonym: "Slack"
    },
    {
        id: "vocab_travail_syn",
        word: "TRAVAIL",
        type: "Synonym",
        meaning: "painful, laborious effort or arduous work (कठिन परिश्रम / कष्ट)",
        synonym: "Drudgery",
        antonym: "Ease"
    },
    {
        id: "vocab_gregarious_syn",
        word: "GREGARIOUS",
        type: "Synonym",
        meaning: "fond of company, social, and outgoing (मिलनसार / सुसामाजिक)",
        synonym: "Companionable",
        antonym: "Reclusive"
    },
    {
        id: "vocab_gregarious_ant_1",
        word: "GREGARIOUS",
        type: "Antonym",
        meaning: "thriving in social gatherings and loving company (मिलनसार)",
        synonym: "Companionable",
        antonym: "Reclusive"
    },
    {
        id: "vocab_gregarious_ant_2",
        word: "GREGARIOUS",
        type: "Antonym",
        meaning: "being socially warm, friendly, and outgoing (मिलनसार)",
        synonym: "Cordial",
        antonym: "Aloof"
    },
    {
        id: "vocab_reticent_syn",
        word: "RETICENT",
        type: "Synonym",
        meaning: "disinclined to speak or reveal thoughts easily (अल्पभाषी / संकोची)",
        synonym: "Reserved",
        antonym: "Talkative"
    },
    {
        id: "vocab_taciturn_syn",
        word: "TACITURN",
        type: "Synonym",
        meaning: "habitually reserved and saying very little (कम बोलने वाला / मौन रहने वाला)",
        synonym: "Uncommunicative",
        antonym: "Loquacious"
    },
    {
        id: "vocab_engender_syn",
        word: "ENGENDER",
        type: "Synonym",
        meaning: "producing, causing, or giving rise to a feeling or condition (उत्पन्न करना / पैदा करना)",
        synonym: "Generate",
        antonym: "Quell"
    },
    {
        id: "vocab_reprove_syn",
        word: "REPROVE",
        type: "Synonym",
        meaning: "scolding, reprimanding, or expressing firm disapproval (डाँटना / फटकारना)",
        synonym: "Admonish",
        antonym: "Praise"
    },
    {
        id: "vocab_reprove_ant",
        word: "REPROVE",
        type: "Antonym",
        meaning: "reprimanding or expressing disapproval of actions (फटकारना)",
        synonym: "Castigate",
        antonym: "Laud"
    },
    {
        id: "vocab_venerate_syn",
        word: "VENERATE",
        type: "Synonym",
        meaning: "regarding with profound respect or deep devotion (आदर करना / सम्मान करना)",
        synonym: "Revere",
        antonym: "Blaspheme"
    },
    {
        id: "vocab_extol_syn",
        word: "EXTOL",
        type: "Synonym",
        meaning: "praising enthusiastically and highly in public (प्रशंसा करना / सराहना करना)",
        synonym: "Exalt",
        antonym: "Disparage"
    },
    {
        id: "vocab_deify_syn",
        word: "DEIFY",
        type: "Synonym",
        meaning: "treating, worshipping, or revering someone like a god (देवता समान मानना / पूजना)",
        synonym: "Idolize",
        antonym: "Vilify"
    },
    {
        id: "vocab_venerate_ant_1",
        word: "VENERATE",
        type: "Antonym",
        meaning: "showing deep respect and sacred honor (श्रद्धा रखना / सम्मान करना)",
        synonym: "Revere",
        antonym: "Blaspheme"
    },
    {
        id: "vocab_scorn_syn",
        word: "SCORN",
        type: "Synonym",
        meaning: "expressing open contempt, disgust, or disdain (घृणा / तिरस्कार)",
        synonym: "Disdain",
        antonym: "Adoration"
    },
    {
        id: "vocab_desecrate_syn",
        word: "DESECRATE",
        type: "Synonym",
        meaning: "treating a sacred place or object with violent disrespect (अपवित्र करना)",
        synonym: "Profane",
        antonym: "Sanctify"
    },
    {
        id: "vocab_affront_syn",
        word: "AFFRONT",
        type: "Synonym",
        meaning: "an intentional act or remark offending someone's dignity (अपमान / अनादर)",
        synonym: "Insult",
        antonym: "Compliment"
    },
    {
        id: "vocab_quell_syn",
        word: "QUELL",
        type: "Synonym",
        meaning: "forcibly putting an end to or subduing a rebellion or fear (शांत करना / दबाना)",
        synonym: "Suppress",
        antonym: "Instigate"
    },
    {
        id: "vocab_castigate_syn",
        word: "CASTIGATE",
        type: "Synonym",
        meaning: "criticizing, reprimanding, or punishing with extreme severity (कड़ी निंदा करना / दंड देना)",
        synonym: "Chastise",
        antonym: "Extol"
    },
    {
        id: "vocab_depravity_syn",
        word: "DEPRAVITY",
        type: "Synonym",
        meaning: "moral corruption, wickedness, and evil conduct (भ्रष्टता / दुष्टता)",
        synonym: "Wickedness",
        antonym: "Rectitude"
    },
    {
        id: "vocab_abjection_syn",
        word: "ABJECTION",
        type: "Synonym",
        meaning: "a state of extreme misery, degradation, or self-humiliation (अधोगति / नीचता)",
        synonym: "Degradation",
        antonym: "Exaltation"
    },
    {
        id: "vocab_dissipation_syn",
        word: "DISSIPATION",
        type: "Synonym",
        meaning: "overindulgence in sensual pleasures or wasteful living (फ़िज़ूलख़र्ची / व्यभिचार)",
        synonym: "Profligacy",
        antonym: "Frugality"
    },
    {
        id: "vocab_perversion_syn",
        word: "PERVERSION",
        type: "Synonym",
        meaning: "corrupting, twisting, or altering something from its true state (विकृति / भ्रष्टता)",
        synonym: "Distortion",
        antonym: "Rectitude"
    },
    {
        id: "vocab_depravity_ant_1",
        word: "DEPRAVITY",
        type: "Antonym",
        meaning: "moral wickedness and corruption (दुष्टता / भ्रष्टता)",
        synonym: "Wickedness",
        antonym: "Rectitude"
    },
    {
        id: "vocab_depravity_ant_2",
        word: "DEPRAVITY",
        type: "Antonym",
        meaning: "moral wickedness and perversion (भ्रष्टता)",
        synonym: "Profligacy",
        antonym: "Scrupulosity"
    },
    {
        id: "vocab_incorrigible_syn",
        word: "INCORRIGIBLE",
        type: "Synonym",
        meaning: "a person or habit that cannot be corrected or reformed (असुधार्य)",
        synonym: "Irreformable",
        antonym: "Reformable"
    },
    {
        id: "vocab_impenitent_syn",
        word: "IMPENITENT",
        type: "Synonym",
        meaning: "feeling no guilt, regret, or repentance for bad actions (पश्चात्तापहीन / बेशर्म)",
        synonym: "Remorseless",
        antonym: "Remorseful"
    },
    {
        id: "vocab_incorrigible_ant",
        word: "INCORRIGIBLE",
        type: "Antonym",
        meaning: "bad habits that cannot be corrected or reformed (असुधार्य)",
        synonym: "Irreformable",
        antonym: "Reformable"
    },
    {
        id: "vocab_servile_syn",
        word: "SERVILE",
        type: "Synonym",
        meaning: "displaying an excessive willingness to serve or obey others (जी-हुज़ूरी करने वाला / चाटुकार)",
        synonym: "Submissive",
        antonym: "Imperious"
    },
    {
        id: "vocab_slavish_syn",
        word: "SLAVISH",
        type: "Synonym",
        meaning: "showing blind, submissive obedience or fawning imitation (चापलूसी से भरा / अंधभक्त)",
        synonym: "Obsequious",
        antonym: "Assertive"
    },
    {
        id: "vocab_abject_syn",
        word: "ABJECT",
        type: "Synonym",
        meaning: "wretched, degraded, or lacking self-respect (अधम / नीच)",
        synonym: "Ignoble",
        antonym: "Noble"
    },
    {
        id: "vocab_menial_syn",
        word: "MENIAL",
        type: "Synonym",
        meaning: "tasks or work that are humble and require little skill (तुच्छ / छोटा काम)",
        synonym: "Lowly",
        antonym: "Elevated"
    },
    {
        id: "vocab_sycophant_syn",
        word: "SYCOPHANT",
        type: "Synonym",
        meaning: "acting obsequiously toward powerful people for personal gain (चाटुकार)",
        synonym: "Flatterer",
        antonym: "Detractor"
    },
    {
        id: "vocab_toadyish_syn",
        word: "TOADYISH",
        type: "Synonym",
        meaning: "displaying exaggerated flattery or servility (चापलूसी भरा)",
        synonym: "Fawning",
        antonym: "Imperious"
    },
    {
        id: "vocab_subservient_syn",
        word: "SUBSERVIENT",
        type: "Synonym",
        meaning: "prepared to obey others unquestioningly or yielding submissively (अधीन / आज्ञाकारी)",
        synonym: "Compliant",
        antonym: "Domineering"
    },
    {
        id: "vocab_demure_syn",
        word: "DEMURE",
        type: "Synonym",
        meaning: "quiet, reserved, modest, or shy (शांत / विनम्र / शर्मीला)",
        synonym: "Modest",
        antonym: "Flamboyant"
    },
    {
        id: "vocab_servile_ant_1",
        word: "SERVILE",
        type: "Antonym",
        meaning: "showing excessive willingness to obey and serve others (जी-हुज़ूरी करने वाला)",
        synonym: "Submissive",
        antonym: "Imperious"
    },
    {
        id: "vocab_supercilious_syn",
        word: "SUPERCILIOUS",
        type: "Synonym",
        meaning: "behaving as though one thinks one is superior to others (घमंडी / मग़रूर)",
        synonym: "Haughty",
        antonym: "Humble"
    },
    {
        id: "vocab_ominous_syn",
        word: "OMINOUS",
        type: "Synonym",
        meaning: "giving the impression that something bad is about to happen (अशुभ / डरावना)",
        synonym: "Menacing",
        antonym: "Auspicious"
    },
    {
        id: "vocab_baleful_syn",
        word: "BALEFUL",
        type: "Synonym",
        meaning: "threatening harm, evil, or destructive consequences (हानिकारक / घातक)",
        synonym: "Sinister",
        antonym: "Benign"
    },
    {
        id: "vocab_inauspicious_syn",
        word: "INAUSPICIOUS",
        type: "Synonym",
        meaning: "showing signs warning of future difficulty or failure (अशुभ)",
        synonym: "Unfavorable",
        antonym: "Propitious"
    },
    {
        id: "vocab_sinister_syn",
        word: "SINISTER",
        type: "Synonym",
        meaning: "giving the impression that something harmful is about to happen (अशुभ / भयावह)",
        synonym: "Threatening",
        antonym: "Auspicious"
    },
    {
        id: "vocab_ominous_ant_1",
        word: "OMINOUS",
        type: "Antonym",
        meaning: "giving an impression of impending evil or danger (अशुभ)",
        synonym: "Menacing",
        antonym: "Auspicious"
    },
    {
        id: "vocab_propitious_syn",
        word: "PROPITIOUS",
        type: "Synonym",
        meaning: "indicating a good chance of success or good fortune (शुभ / अनुकूल)",
        synonym: "Favorable",
        antonym: "Ominous"
    },
    {
        id: "vocab_corruption_syn",
        word: "CORRUPTION",
        type: "Synonym",
        meaning: "dishonest, fraudulent, or morally bad conduct (भ्रष्टाचार / अनैतिकता)",
        synonym: "Depravity",
        antonym: "Integrity"
    },
    {
        id: "vocab_debasement_syn",
        word: "DEBASEMENT",
        type: "Synonym",
        meaning: "reducing the quality, value, or moral dignity of something (अवनति / गिरावट)",
        synonym: "Degradation",
        antonym: "Elevation"
    },
    {
        id: "vocab_decadency_syn",
        word: "DECADENCY",
        type: "Synonym",
        meaning: "moral, cultural, or physical deterioration over time (पतन / क्षय)",
        synonym: "Decline",
        antonym: "Flourishing"
    },
    {
        id: "vocab_degeneracy_syn",
        word: "DEGENERACY",
        type: "Synonym",
        meaning: "declining to a lower or corrupted moral condition (भ्रष्टता / गिरावट)",
        synonym: "Deterioration",
        antonym: "Improvement"
    },
    {
        id: "vocab_degradation_syn",
        word: "DEGRADATION",
        type: "Synonym",
        meaning: "reduction in dignity, rank, or self-respect (अपमान / बदनामी / अवनति)",
        synonym: "Humiliation",
        antonym: "Honor"
    },
    {
        id: "vocab_goodness_ant",
        word: "GOODNESS",
        type: "Antonym",
        meaning: "the quality of being morally good or virtuous (सज्जनता / भलाई)",
        synonym: "Virtue",
        antonym: "Depravity"
    },
    {
        id: "vocab_virtue_ant",
        word: "VIRTUE",
        type: "Antonym",
        meaning: "behavior showing high moral standards (गुण / नैतिक श्रेष्ठता)",
        synonym: "Rectitude",
        antonym: "Depravity"
    },
    {
        id: "vocab_morality_ant",
        word: "MORALITY",
        type: "Antonym",
        meaning: "principles concerning right and wrong behavior (नैतिकता)",
        synonym: "Integrity",
        antonym: "Corruption"
    },
    {
        id: "vocab_righteousness_ant",
        word: "RIGHTEOUSNESS",
        type: "Antonym",
        meaning: "the quality of being morally right and virtuous (सदाचार)",
        synonym: "Probity",
        antonym: "Depravity"
    },
    {
        id: "vocab_hopeless_syn",
        word: "HOPELESS",
        type: "Synonym",
        meaning: "a situation or habit that cannot be fixed or improved (निराशाजनक / असहाय)",
        synonym: "Incorrigible",
        antonym: "Promising"
    },
    {
        id: "vocab_irrecoverable_syn",
        word: "IRRECOVERABLE",
        type: "Synonym",
        meaning: "something that cannot be regained or retrieved (अप्राप्य)",
        synonym: "Irretrievable",
        antonym: "Restorable"
    },
    {
        id: "vocab_incurable_syn",
        word: "INCURABLE",
        type: "Synonym",
        meaning: "a disease or flaw that cannot be cured or remedied (असाध्य)",
        synonym: "Irremediable",
        antonym: "Curable"
    },
    {
        id: "vocab_irremediable_syn",
        word: "IRREMEDIABLE",
        type: "Synonym",
        meaning: "a condition impossible to repair, fix, or remedy (असुधार्य)",
        synonym: "Unfixable",
        antonym: "Remediable"
    },
    {
        id: "vocab_unredeemable_syn",
        word: "UNREDEEMABLE",
        type: "Synonym",
        meaning: "impossible to save, correct, or improve (अपूरणीय)",
        synonym: "Irredeemable",
        antonym: "Redeemable"
    },
    {
        id: "vocab_savable_ant",
        word: "SAVABLE",
        type: "Antonym",
        meaning: "capable of being saved, restored, or reformed (उद्धार योग्य)",
        synonym: "Restorable",
        antonym: "Incorrigible"
    },
    {
        id: "vocab_curable_ant",
        word: "CURABLE",
        type: "Antonym",
        meaning: "capable of being healed or corrected (साध्य)",
        synonym: "Healable",
        antonym: "Incurable"
    },
    {
        id: "vocab_arrogant_ant",
        word: "ARROGANT",
        type: "Antonym",
        meaning: "exaggerated sense of one's own importance (अभिमानी / घमंडी)",
        synonym: "Haughty",
        antonym: "Servile"
    },
    {
        id: "vocab_haughty_ant",
        word: "HAUGHTY",
        type: "Antonym",
        meaning: "behaving in an arrogantly superior manner (घमंडी / मग़रूर)",
        synonym: "Supercilious",
        antonym: "Subservient"
    },
    {
        id: "vocab_lordly_ant",
        word: "LORDLY",
        type: "Antonym",
        meaning: "behaving in a grand, arrogant, or domineering manner (सामंती / रोबीला)",
        synonym: "Imperious",
        antonym: "Abject"
    },
    {
        id: "vocab_portentous_syn",
        word: "PORTENTOUS",
        type: "Synonym",
        meaning: "serving as a sign that something calamitous is about to happen (अशुभ / चेतावनीभरा)",
        synonym: "Ominous",
        antonym: "Auspicious"
    },
    {
        id: "vocab_unthreatening_ant",
        word: "UNTHREATENING",
        type: "Antonym",
        meaning: "safe and unlikely to cause harm (भयरहित)",
        synonym: "Benign",
        antonym: "Menacing"
    },
    {
        id: "vocab_bright_ant",
        word: "BRIGHT",
        type: "Antonym",
        meaning: "promising good fortune and optimism (आशाजनक / उज्ज्वल)",
        synonym: "Auspicious",
        antonym: "Ominous"
    },
    {
        id: "vocab_prosperous_syn",
        word: "PROSPEROUS",
        type: "Synonym",
        meaning: "successful, flourishing, and financially booming (समृद्ध / संपन्न)",
        synonym: "Thriving",
        antonym: "Destitute"
    },
    {
        id: "vocab_garnish_syn_ext",
        word: "GARNISH",
        type: "Synonym",
        meaning: "decorating or embellishing to enhance appearance (सजाना / संवारना)",
        synonym: "Adorn",
        antonym: "Deface"
    },
    {
        id: "vocab_amplify_syn_ext",
        word: "AMPLIFY",
        type: "Synonym",
        meaning: "increasing volume, size, strength, or scope (बढ़ाना / विस्तार करना)",
        synonym: "Magnify",
        antonym: "Belittle"
    },
    {
        id: "vocab_deck_syn_ext",
        word: "DECK",
        type: "Synonym",
        meaning: "decorating, furnishing, or adorning visually (सजाना / सजावट करना)",
        synonym: "Decorate",
        antonym: "Strip"
    },
    {
        id: "vocab_adorn_syn_ext",
        word: "ADORN",
        type: "Synonym",
        meaning: "making more beautiful by adding decorative items (सजाना / अलंकृत करना)",
        synonym: "Embellish",
        antonym: "Deface"
    },
    {
        id: "vocab_ornament_syn_ext",
        word: "ORNAMENT",
        type: "Synonym",
        meaning: "enhancing visual appeal by decorating (अलंकृत करना)",
        synonym: "Beautify",
        antonym: "Disfigure"
    },
    {
        id: "vocab_spoil_ant_ext",
        word: "SPOIL",
        type: "Antonym",
        meaning: "diminishing quality, appearance, or beauty (खराब करना / बिगाड़ना)",
        synonym: "Deface",
        antonym: "Decorate"
    },
    {
        id: "vocab_understate_ant_ext",
        word: "UNDERSTATE",
        type: "Antonym",
        meaning: "presenting something as smaller or less important (कम करके बताना)",
        synonym: "Minimize",
        antonym: "Amplify"
    },
    {
        id: "vocab_lavish_syn_ext",
        word: "LAVISH",
        type: "Synonym",
        meaning: "spending money or resources extravagantly (फ़िज़ूलख़र्च / अति-व्ययी)",
        synonym: "Extravagant",
        antonym: "Economical"
    },
    {
        id: "vocab_extravagant_syn_ext",
        word: "EXTRAVAGANT",
        type: "Synonym",
        meaning: "spending money far beyond necessity (अपव्ययी / फ़िज़ूलख़र्च)",
        synonym: "Spendthrift",
        antonym: "Frugal"
    },
    {
        id: "vocab_unthrifty_syn_ext",
        word: "UNTHRIFTY",
        type: "Synonym",
        meaning: "careless or wasteful with money and resources (लापरवाह / फ़िज़ूलख़र्च)",
        synonym: "Wasteful",
        antonym: "Thrifty"
    },
    {
        id: "vocab_frugal_ant_ext",
        word: "FRUGAL",
        type: "Antonym",
        meaning: "simple and careful with money and resources (मितव्ययी / किफ़ायती)",
        synonym: "Economical",
        antonym: "Extravagant"
    },
    {
        id: "vocab_thrifty_ant_ext",
        word: "THRIFTY",
        type: "Antonym",
        meaning: "using money and resources carefully without waste (किफ़ायती)",
        synonym: "Frugal",
        antonym: "Unthrifty"
    },
    {
        id: "vocab_parsimonious_syn_ext",
        word: "PARSIMONIOUS",
        type: "Synonym",
        meaning: "extreme unwillingness to spend money or use resources (कंजूस / मक्खीचूस)",
        synonym: "Stingy",
        antonym: "Extravagant"
    },
    {
        id: "vocab_negate_syn_ext",
        word: "NEGATE",
        type: "Synonym",
        meaning: "making void, invalidating, or neutralizing effects (रद्द करना / अमान्य करना)",
        synonym: "Nullify",
        antonym: "Validate"
    },
    {
        id: "vocab_disclaim_syn_ext",
        word: "DISCLAIM",
        type: "Synonym",
        meaning: "refusing to acknowledge or accept a claim or connection (इन्कार करना)",
        synonym: "Deny",
        antonym: "Assert"
    },
    {
        id: "vocab_renounce_syn_ext",
        word: "RENOUNCE",
        type: "Synonym",
        meaning: "formally declaring abandonment of a claim or right (त्यागना / छोड़ देना)",
        synonym: "Relinquish",
        antonym: "Claim"
    },
    {
        id: "vocab_affirm_ant_ext",
        word: "AFFIRM",
        type: "Antonym",
        meaning: "stating positively, validating, or confirming truth (पुष्टि करना)",
        synonym: "Assert",
        antonym: "Deny"
    },
    {
        id: "vocab_clubby_syn_ext",
        word: "CLUBBY",
        type: "Synonym",
        meaning: "friendly, welcoming, and enjoying social groups (मिलनसार / समूहप्रिय)",
        synonym: "Sociable",
        antonym: "Aloof"
    },
    {
        id: "vocab_extroverted_syn_ext",
        word: "EXTROVERTED",
        type: "Synonym",
        meaning: "socially confident, expressive, and interactive (बहिर्मुखी)",
        synonym: "Outgoing",
        antonym: "Introverted"
    },
    {
        id: "vocab_precocial_syn_ext",
        word: "PRECOCIAL",
        type: "Synonym",
        meaning: "showing unusually early development or skills (समय से पहले विकसित)",
        synonym: "Advanced",
        antonym: "Backward"
    },
    {
        id: "vocab_colonial_syn_ext",
        word: "COLONIAL",
        type: "Synonym",
        meaning: "living or functioning together in connected groups (सामूहिक / संघचारी)",
        synonym: "Communal",
        antonym: "Solitary"
    },
    {
        id: "vocab_cordial_syn_ext",
        word: "CORDIAL",
        type: "Synonym",
        meaning: "warm, friendly, and pleasant in social settings (हार्दिक / सौहार्दपूर्ण)",
        synonym: "Amicable",
        antonym: "Hostile"
    },
    {
        id: "vocab_affable_syn_ext",
        word: "AFFABLE",
        type: "Synonym",
        meaning: "friendly, good-natured, and easy to talk to (मिलनसार / सुशील)",
        synonym: "Genial",
        antonym: "Aloof"
    },
    {
        id: "vocab_amiable_syn_ext",
        word: "AMIABLE",
        type: "Synonym",
        meaning: "displaying a friendly and pleasant manner (सौम्य / सुशील)",
        synonym: "Pleasant",
        antonym: "Unpleasant"
    },
    {
        id: "vocab_introverted_ant_ext",
        word: "INTROVERTED",
        type: "Antonym",
        meaning: "quiet, reserved, and inward-looking (अंतर्मुखी)",
        synonym: "Reserved",
        antonym: "Extroverted"
    },
    {
        id: "vocab_induce_syn_ext",
        word: "INDUCE",
        type: "Synonym",
        meaning: "persuading or bringing about an action or condition (प्रेरित करना / कारण बनना)",
        synonym: "Prompt",
        antonym: "Prevent"
    },
    {
        id: "vocab_invoke_syn_ext",
        word: "INVOKE",
        type: "Synonym",
        meaning: "citing or appealing to an authority/law for assistance (आह्वान करना / सहारा लेना)",
        synonym: "Summon",
        antonym: "Dismiss"
    },
    {
        id: "vocab_spawn_syn_ext",
        word: "SPAWN",
        type: "Synonym",
        meaning: "producing, generating, or bringing into existence (उत्पन्न करना / जन्म देना)",
        synonym: "Produce",
        antonym: "Destroy"
    },
    {
        id: "vocab_yield_syn_ext",
        word: "YIELD",
        type: "Synonym",
        meaning: "producing or providing a result, crop, or return (उत्पादन करना / पैदावार देना)",
        synonym: "Generate",
        antonym: "Consume"
    },
    {
        id: "vocab_impede_ant_ext",
        word: "IMPEDE",
        type: "Antonym",
        meaning: "delaying, obstructing, or hindering progress (बाधा डालना / रोकना)",
        synonym: "Obstruct",
        antonym: "Facilitate"
    },
    {
        id: "vocab_rebuke_syn_ext",
        word: "REBUKE",
        type: "Synonym",
        meaning: "expressing sharp, stern disapproval or criticism (फटकारना / डाँटना)",
        synonym: "Reprimand",
        antonym: "Praise"
    },
    {
        id: "vocab_chide_syn_ext",
        word: "CHIDE",
        type: "Synonym",
        meaning: "scolding, reprimanding, or expressing disapproval (डाँटना / फटकारना)",
        synonym: "Scold",
        antonym: "Applaud"
    },
    {
        id: "vocab_reproach_syn_ext",
        word: "REPROACH",
        type: "Synonym",
        meaning: "expressing criticism or fault regarding actions (दोषारोपण करना / तिरस्कार करना)",
        synonym: "Disapprove",
        antonym: "Commend"
    },
    {
        id: "vocab_reprimand_syn_ext",
        word: "REPRIMAND",
        type: "Synonym",
        meaning: "a formal, severe expression of disapproval (फटकार / निंदा)",
        synonym: "Rebuke",
        antonym: "Commendation"
    },
    {
        id: "vocab_adulation_syn_1",
        word: "ADULATION",
        type: "Synonym",
        meaning: "extreme, excessive, or servile praise (चापलूसी / अति-प्रशंसा)",
        synonym: "Flattery",
        antonym: "Condemnation"
    },
    {
        id: "vocab_adulation_ant_1",
        word: "ADULATION",
        type: "Antonym",
        meaning: "excessive praise or flattery (चापलूसी / अति-प्रशंसा)",
        synonym: "Flattery",
        antonym: "Criticism"
    },
    {
        id: "vocab_idolatry_syn",
        word: "IDOLATRY",
        type: "Synonym",
        meaning: "extreme, blind admiration, reverence, or worship (मूर्तिपूजा / अन्धभक्ति)",
        synonym: "Devotion",
        antonym: "Scepticism"
    },
    {
        id: "vocab_idolatry_ant",
        word: "IDOLATRY",
        type: "Antonym",
        meaning: "uncritical, blind worship or reverence (अन्धभक्ति)",
        synonym: "Devotion",
        antonym: "Scepticism"
    },
    {
        id: "vocab_idolization_syn",
        word: "IDOLIZATION",
        type: "Synonym",
        meaning: "admiring or revering someone to an extreme degree (अंधभक्ति / अत्यधिक आदर)",
        synonym: "Admiration",
        antonym: "Contempt"
    },
    {
        id: "vocab_idolization_ant",
        word: "IDOLIZATION",
        type: "Antonym",
        meaning: "deep, uncritical admiration and reverence (अत्यधिक आदर)",
        synonym: "Admiration",
        antonym: "Contempt"
    },
    {
        id: "vocab_deification_syn_2",
        word: "DEIFICATION",
        type: "Synonym",
        meaning: "elevating a person to god-like status or divine rank (देवता का स्थान देना)",
        synonym: "Exaltation",
        antonym: "Degradation"
    },
    {
        id: "vocab_deification_ant",
        word: "DEIFICATION",
        type: "Antonym",
        meaning: "raising someone to divine rank and honor (देवता मानना)",
        synonym: "Exaltation",
        antonym: "Degradation"
    },
    {
        id: "vocab_worship_syn",
        word: "WORSHIP",
        type: "Synonym",
        meaning: "showing profound reverence, honor, and devotion (पूजा / आराधना)",
        synonym: "Reverence",
        antonym: "Scorn"
    },
    {
        id: "vocab_worship_ant",
        word: "WORSHIP",
        type: "Antonym",
        meaning: "deep sacred honor and devotion (आराधना / पूजा)",
        synonym: "Reverence",
        antonym: "Scorn"
    },
    {
        id: "vocab_adoration_syn",
        word: "ADORATION",
        type: "Synonym",
        meaning: "deep affection, love, and respectful admiration (पूजा / अत्यधिक प्रेम)",
        synonym: "Devotion",
        antonym: "Hatred"
    },
    {
        id: "vocab_adoration_ant",
        word: "ADORATION",
        type: "Antonym",
        meaning: "deep love, reverence, and affection (अत्यधिक प्रेम)",
        synonym: "Devotion",
        antonym: "Hatred"
    },
    {
        id: "vocab_reverence_syn_2",
        word: "REVERENCE",
        type: "Synonym",
        meaning: "a feeling of deep respect, awe, and honor (श्रद्धा / आदर)",
        synonym: "Awe",
        antonym: "Disrespect"
    },
    {
        id: "vocab_reverence_ant",
        word: "REVERENCE",
        type: "Antonym",
        meaning: "deep respect, honor, and awe (श्रद्धा)",
        synonym: "Awe",
        antonym: "Disrespect"
    },
    {
        id: "vocab_veneration_syn",
        word: "VENERATION",
        type: "Synonym",
        meaning: "great respect, high honor, or sacred reverence (आदर / सम्मान)",
        synonym: "Honor",
        antonym: "Contempt"
    },
    {
        id: "vocab_veneration_ant",
        word: "VENERATION",
        type: "Antonym",
        meaning: "deep respect and sacred honor (सम्मान)",
        synonym: "Honor",
        antonym: "Contempt"
    },
    {
        id: "vocab_glorification_syn",
        word: "GLORIFICATION",
        type: "Synonym",
        meaning: "praising or honoring someone in an exalted manner (महिमा मंडन / गुणगान)",
        synonym: "Praise",
        antonym: "Vilification"
    },
    {
        id: "vocab_glorification_ant",
        word: "GLORIFICATION",
        type: "Antonym",
        meaning: "praising and elevating someone's reputation highly (गुणगान)",
        synonym: "Praise",
        antonym: "Vilification"
    },
    {
        id: "vocab_condemnation_syn",
        word: "CONDEMNATION",
        type: "Synonym",
        meaning: "expression of strong disapproval or criticism (निंदा / भर्त्सना)",
        synonym: "Censure",
        antonym: "Approval"
    },
    {
        id: "vocab_condemnation_ant",
        word: "CONDEMNATION",
        type: "Antonym",
        meaning: "strong disapproval and harsh censure (निंदा)",
        synonym: "Censure",
        antonym: "Approval"
    },
    {
        id: "vocab_disregard_syn",
        word: "DISREGARD",
        type: "Synonym",
        meaning: "paying no attention to or ignoring someone/something (उपेक्षा करना)",
        synonym: "Inattention",
        antonym: "Attention"
    },
    {
        id: "vocab_disregard_ant",
        word: "DISREGARD",
        type: "Antonym",
        meaning: "ignoring or neglecting someone or something (उपेक्षा)",
        synonym: "Inattention",
        antonym: "Attention"
    },
    {
        id: "vocab_loathing_syn_2",
        word: "LOATHING",
        type: "Synonym",
        meaning: "feeling of intense revulsion, disgust, and hatred (घृणा / नफ़रत)",
        synonym: "Abhorrence",
        antonym: "Affection"
    },
    {
        id: "vocab_loathing_ant",
        word: "LOATHING",
        type: "Antonym",
        meaning: "intense disgust and hatred (नफ़रत)",
        synonym: "Abhorrence",
        antonym: "Affection"
    },
    {
        id: "vocab_disparagement_syn",
        word: "DISPARAGEMENT",
        type: "Synonym",
        meaning: "speaking of someone in a derogatory or belittling manner (उपेक्षा / नीचा दिखाना)",
        synonym: "Derogation",
        antonym: "Commendation"
    },
    {
        id: "vocab_disparagement_ant",
        word: "DISPARAGEMENT",
        type: "Antonym",
        meaning: "insulting remarks intended to diminish worth (उपेक्षा / नीचा दिखाना)",
        synonym: "Derogation",
        antonym: "Commendation"
    },
    {
        id: "vocab_detraction_syn",
        word: "DETRACTION",
        type: "Synonym",
        meaning: "taking away from the merit or reputation of a person (निंदा / यश कम करना)",
        synonym: "Depreciation",
        antonym: "Praise"
    },
    {
        id: "vocab_detraction_ant",
        word: "DETRACTION",
        type: "Antonym",
        meaning: "taking away from someone's reputation or merit (अपयश / निंदा)",
        synonym: "Depreciation",
        antonym: "Praise"
    },
    {
        id: "vocab_belittlement_syn_2",
        word: "BELITTLEMENT",
        type: "Synonym",
        meaning: "making a person or achievement seem small or worthless (तुच्छ समझना / नीचा दिखाना)",
        synonym: "Disparagement",
        antonym: "Exaltation"
    },
    {
        id: "vocab_belittlement_ant",
        word: "BELITTLEMENT",
        type: "Antonym",
        meaning: "treating someone's achievements as small or worthless (नीचा दिखाना)",
        synonym: "Disparagement",
        antonym: "Exaltation"
    },
    // --- AFFABLE / AMICABLE (SET-9) ---
    {
        id: "vocab_affable_syn_mellow",
        word: "MELLOW",
        type: "Synonym",
        meaning: "relaxed, calm, and easy-going in nature (सौम्य / शान्त)",
        synonym: "Easy-going",
        antonym: "Rigid"
    },
    {
        id: "vocab_affable_syn_gracious",
        word: "GRACIOUS",
        type: "Synonym",
        meaning: "courteous, kind, and pleasant in behavior (कृपालु / विनम्र)",
        synonym: "Courteous",
        antonym: "Boorish"
    },
    {
        id: "vocab_affable_syn_genial",
        word: "GENIAL",
        type: "Synonym",
        meaning: "cheerful, kind, and pleasant in demeanor (प्रसन्नचित्त / मिलनसार)",
        synonym: "Friendly",
        antonym: "Surly"
    },
    {
        id: "vocab_affable_syn_sociable",
        word: "SOCIABLE",
        type: "Synonym",
        meaning: "enjoying the company of others and meeting people (मिलनसार / सामाजिक)",
        synonym: "Outgoing",
        antonym: "Aloof"
    },
    {
        id: "vocab_affable_syn_amicable",
        word: "AMICABLE",
        type: "Synonym",
        meaning: "characterized by friendliness and goodwill (सौम्य / मित्रवत)",
        synonym: "Harmonious",
        antonym: "Hostile"
    },
    {
        id: "vocab_affable_ant_disagreeable",
        word: "DISAGREEABLE",
        type: "Antonym",
        meaning: "unpleasant or difficult to get along with (अप्रिय / असहमत)",
        synonym: "Unpleasant",
        antonym: "Agreeable"
    },
    {
        id: "vocab_affable_ant_unamiable",
        word: "UNAMIABLE",
        type: "Antonym",
        meaning: "not friendly or pleasant, hard to approach (असंवेदनशील / कठोर)",
        synonym: "Unfriendly",
        antonym: "Amiable"
    },
    {
        id: "vocab_affable_ant_surly",
        word: "SURLY",
        type: "Antonym",
        meaning: "bad-tempered, unfriendly, and churlish (रूखा / खिन्न)",
        synonym: "Sullen",
        antonym: "Genial"
    },
    {
        id: "vocab_affable_ant_boorish",
        word: "BOORISH",
        type: "Antonym",
        meaning: "rude, impolite, or insensitive in behavior (अशिष्ट / अनाड़ी)",
        synonym: "Uncouth",
        antonym: "Gracious"
    },
    {
        id: "vocab_affable_ant_choleric",
        word: "CHOLERIC",
        type: "Antonym",
        meaning: "easily angered or bad-tempered (क्रोधित / गुस्सैल)",
        synonym: "Irascible",
        antonym: "Placid"
    },

    // --- TURBULENCE (SET-9) ---
    {
        id: "vocab_turbulence_main",
        word: "TURBULENCE",
        type: "Synonym",
        meaning: "a state of confusion, disorder, or violent agitation (उथल-पुथल / अशांति)",
        synonym: "Turmoil",
        antonym: "Tranquility"
    },
    {
        id: "vocab_turbulence_syn_agitation",
        word: "AGITATION",
        type: "Synonym",
        meaning: "a state of excitement, nervousness, or violent shaking (उत्तेजना / उथल-पुथल)",
        synonym: "Turbulence",
        antonym: "Calmness"
    },
    {
        id: "vocab_turbulence_syn_turbulent",
        word: "TURBULENT",
        type: "Synonym",
        meaning: "characterized by confusion, conflict, or disorder (उथल-पुथल वाला / अशांत)",
        synonym: "Stormy",
        antonym: "Peaceful"
    },
    {
        id: "vocab_turbulence_syn_tumult",
        word: "TUMULT",
        type: "Synonym",
        meaning: "a loud, confused noise or uproar caused by a crowd (हंगामा / शोर)",
        synonym: "Uproar",
        antonym: "Stillness"
    },
    {
        id: "vocab_turbulence_syn_havoc",
        word: "HAVOC",
        type: "Synonym",
        meaning: "great destruction, devastation, or disorder (तबाही / बर्बादी)",
        synonym: "Devastation",
        antonym: "Order"
    },
    {
        id: "vocab_turbulence_syn_rampage",
        word: "RAMPAGE",
        type: "Synonym",
        meaning: "a period of violent or uncontrollable reckless behavior (उत्पात / हंगामा)",
        synonym: "Frenzy",
        antonym: "Restraint"
    },
    {
        id: "vocab_turbulence_syn_rupture",
        word: "RUPTURE",
        type: "Synonym",
        meaning: "a break or disruption in a state of harmony or object (फटना / टूटना)",
        synonym: "Breach",
        antonym: "Union"
    },
    {
        id: "vocab_turbulence_syn_revolt",
        word: "REVOLT",
        type: "Synonym",
        meaning: "a violent uprising or rebellion against authority (विद्रोह / बगावत)",
        synonym: "Rebellion",
        antonym: "Submission"
    },
    {
        id: "vocab_turbulence_ant_peace",
        word: "PEACE",
        type: "Antonym",
        meaning: "a state of tranquility, quiet, or freedom from conflict (शांति / अमन)",
        synonym: "Quietude",
        antonym: "Turbulence"
    },
    {
        id: "vocab_turbulence_ant_tranquility",
        word: "TRANQUILITY",
        type: "Antonym",
        meaning: "the quality or state of being calm and peaceful (शांति / शांतिपूर्ण स्थिति)",
        synonym: "Serenity",
        antonym: "Agitation"
    },
    {
        id: "vocab_turbulence_ant_stillness",
        word: "STILLNESS",
        type: "Antonym",
        meaning: "the absence of movement, noise, or disturbance (स्थिरता / नीरवता)",
        synonym: "Silence",
        antonym: "Tumult"
    },

    // --- DISDAIN (SET-9) ---
    {
        id: "vocab_disdain_main",
        word: "DISDAIN",
        type: "Synonym",
        meaning: "to regard or treat someone with contempt or scorn (घृणा / तिरस्कार)",
        synonym: "Contempt",
        antonym: "Admiration"
    },
    {
        id: "vocab_disdain_syn_detestation",
        word: "DETESTATION",
        type: "Synonym",
        meaning: "intense dislike or strong feeling of hatred (घृणा / घिन)",
        synonym: "Abhorrence",
        antonym: "Affection"
    },
    {
        id: "vocab_disdain_syn_hate",
        word: "HATE",
        type: "Synonym",
        meaning: "intense, passionate dislike for someone or something (नफ़रत)",
        synonym: "Hostility",
        antonym: "Love"
    },
    {
        id: "vocab_disdain_syn_execration",
        word: "EXECRATION",
        type: "Synonym",
        meaning: "the act of cursing, denounced feeling, or condemnation (शाप / निंदा)",
        synonym: "Denunciation",
        antonym: "Praise"
    },
    {
        id: "vocab_disdain_ant_regard",
        word: "REGARD",
        type: "Antonym",
        meaning: "respect, consideration, or high esteem given to someone (सम्मान / ध्यान)",
        synonym: "Esteem",
        antonym: "Disregard"
    },
    {
        id: "vocab_disdain_ant_esteem",
        word: "ESTEEM",
        type: "Antonym",
        meaning: "a high level of respect, honor, or admiration (सम्मान / आदर)",
        synonym: "Reverence",
        antonym: "Contempt"
    },
    {
        id: "vocab_disdain_ant_favor",
        word: "FAVOR",
        type: "Antonym",
        meaning: "an attitude or feeling of goodwill, approval, or support (पक्ष / सहायता)",
        synonym: "Approval",
        antonym: "Disfavor"
    },

    // --- VIRTUOSO (SET-9) ---
    {
        id: "vocab_virtuoso_main",
        word: "VIRTUOSO",
        type: "Synonym",
        meaning: "a person highly skilled or exceptionally talented in music/art (विशारद / कला में निपुण)",
        synonym: "Maestro",
        antonym: "Amateur"
    },
    {
        id: "vocab_virtuoso_syn_adroit",
        word: "ADROIT",
        type: "Synonym",
        meaning: "clever, skillful, or adept in using hands or mind (कुशल / निपुण)",
        synonym: "Nimble",
        antonym: "Clumsy"
    },
    {
        id: "vocab_virtuoso_syn_deft",
        word: "DEFT",
        type: "Synonym",
        meaning: "neatly skillful and quick in movement or actions (कुशल / चतुर)",
        synonym: "Handy",
        antonym: "Awkward"
    },
    {
        id: "vocab_virtuoso_syn_delicate",
        word: "DELICATE",
        type: "Synonym",
        meaning: "requiring or showing fine skill, subtlety, and precision (नाज़ुक / महीन)",
        synonym: "Subtle",
        antonym: "Coarse"
    },
    {
        id: "vocab_virtuoso_syn_dexterous",
        word: "DEXTEROUS",
        type: "Synonym",
        meaning: "showing or having great skill, especially with hands (दक्ष / निपुण)",
        synonym: "Deft",
        antonym: "Gauche"
    },
    {
        id: "vocab_virtuoso_syn_expert",
        word: "EXPERT",
        type: "Synonym",
        meaning: "a person who has comprehensive and authoritative knowledge (विशेषज्ञ / निपुण)",
        synonym: "Specialist",
        antonym: "Novice"
    },
    {
        id: "vocab_virtuoso_syn_facile",
        word: "FACILE",
        type: "Synonym",
        meaning: "achieved with effortless skill, ease, or fluency (सरल / सहज)",
        synonym: "Fluently",
        antonym: "Labored"
    },
    {
        id: "vocab_virtuoso_syn_adequate",
        word: "ADEQUATE",
        type: "Synonym",
        meaning: "satisfactory or acceptable in quality or quantity (पर्याप्त / उपयुक्त)",
        synonym: "Sufficient",
        antonym: "Inadequate"
    },
    {
        id: "vocab_virtuoso_ant_amateur",
        word: "AMATEUR",
        type: "Antonym",
        meaning: "a person who engages in a pursuit as a pastime rather than a profession (शौकिया)",
        synonym: "Novice",
        antonym: "Professional"
    },
    {
        id: "vocab_virtuoso_ant_artless",
        word: "ARTLESS",
        type: "Antonym",
        meaning: "lacking art, skill, or refinement; simple (कला रहित / साधारण)",
        synonym: "Unrefined",
        antonym: "Artful"
    },
    {
        id: "vocab_virtuoso_ant_unprofessional",
        word: "UNPROFESSIONAL",
        type: "Antonym",
        meaning: "lacking professional standards, skill, or experience (अव्यावसायिक / गैर-पेशेवर)",
        synonym: "Inexpert",
        antonym: "Professional"
    },
    {
        id: "vocab_virtuoso_ant_unskillful",
        word: "UNSKILLFUL",
        type: "Antonym",
        meaning: "lacking technical knowledge, dexterity, or ability (अकुशल / अशक्त)",
        synonym: "Clumsy",
        antonym: "Skillful"
    },
    // --- STOIC & IMPLACABLE (SETS) ---
    {
        id: "vocab_stoic_syn_tolerant",
        word: "TOLERANT",
        type: "Synonym",
        meaning: "willing to accept or endure beliefs or practices (सहिष्णु)",
        synonym: "Forbearing",
        antonym: "Impatient"
    },
    {
        id: "vocab_stoic_syn_patient",
        word: "PATIENT",
        type: "Synonym",
        meaning: "able to wait calmly without becoming annoyed (धैर्यवान)",
        synonym: "Tolerant",
        antonym: "Agitated"
    },
    {
        id: "vocab_stoic_syn_forbearing",
        word: "FORBEARING",
        type: "Synonym",
        meaning: "showing patience and self-control (सहनशील / सहन करने वाला)",
        synonym: "Patient",
        antonym: "Intolerant"
    },
    {
        id: "vocab_stoic_ant_lenient",
        word: "LENIENT",
        type: "Antonym",
        meaning: "willing to be merciful and not strict (उदार / सहानुभूतिपूर्ण)",
        synonym: "Merciful",
        antonym: "Strict"
    },
    {
        id: "vocab_stoic_ant_acquiescent",
        word: "ACQUIESCENT",
        type: "Antonym",
        meaning: "ready to accept or agree to something (सहमति देने वाला)",
        synonym: "Compliant",
        antonym: "Resistant"
    },
    {
        id: "vocab_stoic_ant_amenable",
        word: "AMENABLE",
        type: "Antonym",
        meaning: "open and responsive to suggestion or advice (सक्षम / उत्तरदायी)",
        synonym: "Receptive",
        antonym: "Stubborn"
    },
    {
        id: "vocab_stoic_ant_compliant",
        word: "COMPLIANT",
        type: "Antonym",
        meaning: "ready to conform or agree to a rule or demand (आज्ञाकारी / अनुकुल)",
        synonym: "Obedient",
        antonym: "Defiant"
    },
    {
        id: "vocab_stoic_ant_docile",
        word: "DOCILE",
        type: "Antonym",
        meaning: "ready to accept control or instruction (आज्ञाकारी / सरल)",
        synonym: "Submissive",
        antonym: "Rebellious"
    },
    {
        id: "vocab_stoic_ant_impatient",
        word: "IMPATIENT",
        type: "Antonym",
        meaning: "unable to wait calmly, easily annoyed (अधीर / असहिष्णु)",
        synonym: "Restless",
        antonym: "Patient"
    },
    {
        id: "vocab_stoic_ant_protesting",
        word: "PROTESTING",
        type: "Antonym",
        meaning: "expressing disagreement or objection (विरोध करने वाला)",
        synonym: "Objecting",
        antonym: "Assenting"
    },
    {
        id: "vocab_stoic_ant_complaining",
        word: "COMPLAINING",
        type: "Antonym",
        meaning: "expressing dissatisfaction or annoyance (शिकायत करने वाला)",
        synonym: "Grumbling",
        antonym: "Accepting"
    },
    {
        id: "vocab_stoic_ant_kvetching",
        word: "KVETCHING",
        type: "Antonym",
        meaning: "complaining persistently about trivial matters (शिकायत करना)",
        synonym: "Whining",
        antonym: "Enduring"
    },
    {
        id: "vocab_stoic_ant_fedup",
        word: "FED UP",
        type: "Antonym",
        meaning: "annoyed or frustrated with something (थक चुका / तंग)",
        synonym: "Disgruntled",
        antonym: "Content"
    },

    // --- IMPLACABLE (SETS) ---
    {
        id: "vocab_implacable_main",
        word: "IMPLACABLE",
        type: "Synonym",
        meaning: "impossible to appease or make less angry (अपरिवर्तनीय / उग्र)",
        synonym: "Unappeasable",
        antonym: "Placable"
    },
    {
        id: "vocab_implacable_syn_adamant",
        word: "ADAMANT",
        type: "Synonym",
        meaning: "refusing to be persuaded or to change one's mind (अडिग / कठोर)",
        synonym: "Unyielding",
        antonym: "Flexible"
    },
    {
        id: "vocab_implacable_syn_dogged",
        word: "DOGGED",
        type: "Synonym",
        meaning: "having or showing persistent determination (दृढ़ / हठी)",
        synonym: "Tenacious",
        antonym: "Halfhearted"
    },
    {
        id: "vocab_implacable_syn_inconvincible",
        word: "INCONVINCIBLE",
        type: "Synonym",
        meaning: "impossible to convince or persuade (विश्वास में नहीं लाया जा सकता)",
        synonym: "Unpersuadable",
        antonym: "Persuadable"
    },
    {
        id: "vocab_implacable_syn_obdurate",
        word: "OBDURATE",
        type: "Synonym",
        meaning: "stubbornly refusing to change one's opinion (हठी / ज़िद्दी)",
        synonym: "Obstinate",
        antonym: "Flexible"
    },
    {
        id: "vocab_implacable_syn_obstinate",
        word: "OBSTINATE",
        type: "Synonym",
        meaning: "refusing to change one's opinion or course of action (हठी / जिद्दी)",
        synonym: "Stubborn",
        antonym: "Yielding"
    },
    {
        id: "vocab_implacable_syn_perverse",
        word: "PERVERSE",
        type: "Synonym",
        meaning: "showing deliberate desire to behave unreasonably (विकृत / उल्टे स्वभाव का)",
        synonym: "Wayward",
        antonym: "Reasonable"
    },
    {
        id: "vocab_implacable_syn_stubborn",
        word: "STUBBORN",
        type: "Synonym",
        meaning: "showing determination not to change one's attitude (जिद्दी / हठी)",
        synonym: "Obstinate",
        antonym: "Docile"
    },
    {
        id: "vocab_implacable_syn_willful",
        word: "WILLFUL",
        type: "Synonym",
        meaning: "stubborn or intentional in doing what one wants (इच्छाचारी / अनियंत्रित)",
        synonym: "Headstrong",
        antonym: "Compliant"
    },
    {
        id: "vocab_implacable_ant_agreeable",
        word: "AGREEABLE",
        type: "Antonym",
        meaning: "willing to agree or accept something (सहमत / मिलनसार)",
        synonym: "Pleasant",
        antonym: "Disagreeable"
    },
    {
        id: "vocab_implacable_ant_pliant",
        word: "PLIANT",
        type: "Antonym",
        meaning: "easily influenced, flexible, and yielding (लचीला / सहायक)",
        synonym: "Flexible",
        antonym: "Rigid"
    },
    {
        id: "vocab_implacable_ant_pliable",
        word: "PLIABLE",
        type: "Antonym",
        meaning: "easily bent, influenced, or persuaded (लचीला / ढल जाने वाला)",
        synonym: "Malleable",
        antonym: "Stiff"
    },

    // --- CORDIAL (SETS) ---
    {
        id: "vocab_cordial_syn_collegial",
        word: "COLLEGIAL",
        type: "Synonym",
        meaning: "characterized by mutual respect and cooperation (सहयोगी / सहकर्मी जैसा)",
        synonym: "Cooperative",
        antonym: "Antagonistic"
    },
    {
        id: "vocab_cordial_syn_comradely",
        word: "COMRADELY",
        type: "Synonym",
        meaning: "showing the spirit of friendship and camaraderie (सखावत / मित्रवत)",
        synonym: "Friendly",
        antonym: "Hostile"
    },
    {
        id: "vocab_cordial_syn_convivial",
        word: "CONVIVIAL",
        type: "Synonym",
        meaning: "friendly, lively, and enjoyable (आनंदपूर्ण / मिलनसार)",
        synonym: "Festive",
        antonym: "Gloomy"
    },
    {
        id: "vocab_cordial_ant_antagonistic",
        word: "ANTAGONISTIC",
        type: "Antonym",
        meaning: "showing active opposition or hostility (शत्रुतापूर्ण / विरोधी)",
        synonym: "Hostile",
        antonym: "Friendly"
    },
    {
        id: "vocab_cordial_ant_hostile",
        word: "HOSTILE",
        type: "Antonym",
        meaning: "showing or feeling opposition or dislike (विरोधी / शत्रुवत)",
        synonym: "Unfriendly",
        antonym: "Cordial"
    },
    {
        id: "vocab_cordial_ant_estranged",
        word: "ESTRANGED",
        type: "Antonym",
        meaning: "no longer close or affectionate (अलग-थलग / पराया)",
        synonym: "Alienated",
        antonym: "Reconciled"
    },
    {
        id: "vocab_cordial_ant_alienated",
        word: "ALIENATED",
        type: "Antonym",
        meaning: "feeling isolated or disconnected from others (परखा हुआ / अलगाव महसूस करना)",
        synonym: "Isolated",
        antonym: "Integrated"
    },
    {
        id: "vocab_cordial_ant_frosty",
        word: "FROSTY",
        type: "Antonym",
        meaning: "cold in manner, unfriendly, or distant (ठंडा / अनमना)",
        synonym: "Chilly",
        antonym: "Warm"
    },
    {
        id: "vocab_cordial_ant_unsocial",
        word: "UNSOCIAL",
        type: "Antonym",
        meaning: "not sociable or friendly, preferring solitude (असामाजिक / निर्जन)",
        synonym: "Reclusive",
        antonym: "Sociable"
    },

    // --- ASSUAGE (SETS) ---
    {
        id: "vocab_assuage_main",
        word: "ASSUAGE",
        type: "Synonym",
        meaning: "to make an unpleasant feeling less intense (शांत करना / कम करना)",
        synonym: "Alleviate",
        antonym: "Aggravate"
    },
    {
        id: "vocab_assuage_syn_allay",
        word: "ALLAY",
        type: "Synonym",
        meaning: "to diminish or reduce fear or anxiety (शांत करना / घटाना)",
        synonym: "Calm",
        antonym: "Exacerbate"
    },
    {
        id: "vocab_assuage_syn_alleviate",
        word: "ALLEVIATE",
        type: "Synonym",
        meaning: "to make a suffering or problem less severe (कम करना / राहत देना)",
        synonym: "Relieve",
        antonym: "Worsen"
    },
    {
        id: "vocab_assuage_syn_ease",
        word: "EASE",
        type: "Synonym",
        meaning: "to make something less difficult or painful (आसान करना / कम करना)",
        synonym: "Soothe",
        antonym: "Aggravate"
    },
    {
        id: "vocab_assuage_syn_mitigate",
        word: "MITIGATE",
        type: "Synonym",
        meaning: "to make something less severe or harmful (कम करना / शांत करना)",
        synonym: "Mollify",
        antonym: "Intensify"
    },
    {
        id: "vocab_assuage_syn_mollify",
        word: "MOLLIFY",
        type: "Synonym",
        meaning: "to calm or soften someone's feelings (शांति देना / मनाना)",
        synonym: "Placated",
        antonym: "Enrage"
    },
    {
        id: "vocab_assuage_syn_palliate",
        word: "PALLIATE",
        type: "Synonym",
        meaning: "to reduce severity without curing (निवारण करना / कम करना)",
        synonym: "Relieve",
        antonym: "Exacerbate"
    },
    {
        id: "vocab_assuage_syn_relieve",
        word: "RELIEVE",
        type: "Synonym",
        meaning: "to ease pain or distress (राहत देना / आराम देना)",
        synonym: "Alleviate",
        antonym: "Intensify"
    },
    {
        id: "vocab_assuage_syn_soothe",
        word: "SOOTHE",
        type: "Synonym",
        meaning: "to gently calm or ease pain (शांत करना / राहत देना)",
        synonym: "Pacify",
        antonym: "Agitate"
    },
    {
        id: "vocab_assuage_ant_aggravate",
        word: "AGGRAVATE",
        type: "Antonym",
        meaning: "to make a situation worse or more severe (बढ़ाना / अधिक गंभीर बनाना)",
        synonym: "Worsen",
        antonym: "Assuage"
    },
    {
        id: "vocab_assuage_ant_exacerbate",
        word: "EXACERBATE",
        type: "Antonym",
        meaning: "to make a problem or feeling worse (बढ़ाना / बिगाड़ना)",
        synonym: "Aggravate",
        antonym: "Mitigate"
    },
    {
        id: "vocab_assuage_ant_impair",
        word: "IMPAIR",
        type: "Antonym",
        meaning: "to weaken or damage something (क्षति पहुँचाना / हानि करना)",
        synonym: "Damage",
        antonym: "Improve"
    },
    {
        id: "vocab_assuage_ant_intensify",
        word: "INTENSIFY",
        type: "Antonym",
        meaning: "to make something stronger or more severe (तीव्र करना / बढ़ाना)",
        synonym: "Escalate",
        antonym: "Diminish"
    },
    {
        id: "vocab_assuage_ant_hurt",
        word: "HURT",
        type: "Antonym",
        meaning: "to cause physical pain or emotional distress (चोट पहुँचाना / नुकसान करना)",
        synonym: "Harm",
        antonym: "Heal"
    },
    {
        id: "vocab_assuage_ant_injure",
        word: "INJURE",
        type: "Antonym",
        meaning: "to cause harm or damage to someone (घायल करना / नुकसान पहुँचाना)",
        synonym: "Damage",
        antonym: "Soothe"
    },

    // --- TERSE (SETS) ---
    {
        id: "vocab_terse_main",
        word: "TERSE",
        type: "Synonym",
        meaning: "brief and to the point (संक्षिप्त / संक्षेपपूर्ण)",
        synonym: "Concise",
        antonym: "Verbose"
    },
    {
        id: "vocab_terse_syn_brief",
        word: "BRIEF",
        type: "Synonym",
        meaning: "short in duration or length (संक्षिप्त / छोटा)",
        synonym: "Short",
        antonym: "Long"
    },
    {
        id: "vocab_terse_syn_aphoristic",
        word: "APHORISTIC",
        type: "Synonym",
        meaning: "containing a concise or pithy statement (सूक्तिवादी)",
        synonym: "Pithy",
        antonym: "Wordy"
    },
    {
        id: "vocab_terse_syn_elliptical",
        word: "ELLIPTICAL",
        type: "Synonym",
        meaning: "using obscure or condensed expressions (चक्रीय / गोलमाल)",
        synonym: "Obscure",
        antonym: "Direct"
    },
    {
        id: "vocab_terse_syn_compact",
        word: "COMPACT",
        type: "Synonym",
        meaning: "closely packed together or concise (संकुचित / संक्षिप्त)",
        synonym: "Dense",
        antonym: "Diffuse"
    },
    {
        id: "vocab_terse_syn_laconic",
        word: "LACONIC",
        type: "Synonym",
        meaning: "using few words, straightforward and effective (कम शब्दों में कहने वाला)",
        synonym: "Concise",
        antonym: "Verbose"
    },
    {
        id: "vocab_terse_syn_pithy",
        word: "PITHY",
        type: "Synonym",
        meaning: "concise and forcefully expressive (सारगर्भित / प्रभावी)",
        synonym: "Cogent",
        antonym: "Verbose"
    },
    {
        id: "vocab_terse_syn_succinct",
        word: "SUCCINCT",
        type: "Synonym",
        meaning: "briefly and clearly expressed (संक्षिप्त / स्पष्ट)",
        synonym: "Concise",
        antonym: "Prolix"
    },
    {
        id: "vocab_terse_syn_concise",
        word: "CONCISE",
        type: "Synonym",
        meaning: "giving much information clearly in few words (संक्षिप्त)",
        synonym: "Succinct",
        antonym: "Wordy"
    },
    {
        id: "vocab_terse_syn_summary",
        word: "SUMMARY",
        type: "Synonym",
        meaning: "a brief account or condensed version (सारांश / संक्षिप्त)",
        synonym: "Abridged",
        antonym: "Detailed"
    },
    {
        id: "vocab_terse_ant_circuitous",
        word: "CIRCUITOUS",
        type: "Antonym",
        meaning: "taking a roundabout way of saying or doing (घुमावदार / अप्रत्यक्ष)",
        synonym: "Roundabout",
        antonym: "Direct"
    },
    {
        id: "vocab_terse_ant_prolix",
        word: "PROLIX",
        type: "Antonym",
        meaning: "using too many words, lengthy and drawn out (अत्यधिक विस्तार से / लंबा)",
        synonym: "Long-winded",
        antonym: "Concise"
    },
    {
        id: "vocab_terse_ant_rambling",
        word: "RAMBLING",
        type: "Antonym",
        meaning: "continuing at length in a disorganized way (बेतुका / भ्रमित)",
        synonym: "Discursive",
        antonym: "Coherent"
    },
    {
        id: "vocab_terse_ant_verbose",
        word: "VERBOSE",
        type: "Antonym",
        meaning: "using more words than necessary (शब्दों से भरा हुआ / विस्तृत)",
        synonym: "Wordy",
        antonym: "Terse"
    },
    {
        id: "vocab_terse_ant_diffuse",
        word: "DIFFUSE",
        type: "Antonym",
        meaning: "lacking clarity or focus, spread out and lengthy (विस्तृत / फैला हुआ)",
        synonym: "Dispersed",
        antonym: "Focused"
    },
    {
        id: "vocab_terse_ant_wordy",
        word: "WORDY",
        type: "Antonym",
        meaning: "using or expressed in too many words (शब्दों से भरा हुआ)",
        synonym: "Verbose",
        antonym: "Brief"
    },
    // --- SET 11: EULOGY ---
    {
        id: "vocab_eulogy_main",
        word: "EULOGY",
        type: "Synonym",
        meaning: "speech or writing praising someone highly (प्रशंसा / शोकगीत)",
        synonym: "Panegyric",
        antonym: "Censure"
    },
    {
        id: "vocab_eulogy_syn_salutation",
        word: "SALUTATION",
        type: "Synonym",
        meaning: "greeting or expression of goodwill (अभिवादन / शुभकामनाएँ)",
        synonym: "Greeting",
        antonym: "Insult"
    },
    {
        id: "vocab_eulogy_syn_tribute",
        word: "TRIBUTE",
        type: "Synonym",
        meaning: "act, statement, or gift showing respect (श्रद्धांजलि / सम्मान)",
        synonym: "Homage",
        antonym: "Disrespect"
    },
    {
        id: "vocab_eulogy_syn_accolade",
        word: "ACCOLADE",
        type: "Synonym",
        meaning: "award or privilege granted as special honor (प्रशंसा / पुरस्कार)",
        synonym: "Award",
        antonym: "Criticism"
    },
    {
        id: "vocab_eulogy_syn_commendation",
        word: "COMMENDATION",
        type: "Synonym",
        meaning: "official praise or recognition for an achievement (सराहाना / प्रशंसा)",
        synonym: "Praise",
        antonym: "Condemnation"
    },
    {
        id: "vocab_eulogy_syn_panegyric",
        word: "PANEGYRIC",
        type: "Synonym",
        meaning: "formal speech or piece of writing that praises (प्रशंसा / स्तुति)",
        synonym: "Eulogy",
        antonym: "Denunciation"
    },
    {
        id: "vocab_eulogy_syn_citation",
        word: "CITATION",
        type: "Synonym",
        meaning: "formal mention or reference to an achievement (प्रशंसा / उद्धरण)",
        synonym: "Mention",
        antonym: "Omission"
    },
    {
        id: "vocab_eulogy_syn_acclaim",
        word: "ACCLAIM",
        type: "Synonym",
        meaning: "public praise or approval (सराहाना / प्रशंसा)",
        synonym: "Applause",
        antonym: "Disapproval"
    },
    {
        id: "vocab_eulogy_syn_laudation",
        word: "LAUDATION",
        type: "Synonym",
        meaning: "the act of praising someone highly (स्तुति / प्रशंसा)",
        synonym: "Praise",
        antonym: "Blame"
    },
    {
        id: "vocab_eulogy_ant_censure",
        word: "CENSURE",
        type: "Antonym",
        meaning: "strong expression of disapproval or criticism (आलोचना / निंदा)",
        synonym: "Criticism",
        antonym: "Praise"
    },
    {
        id: "vocab_eulogy_ant_indictment",
        word: "INDICTMENT",
        type: "Antonym",
        meaning: "formal charge or accusation of a crime (आरोप / निंदा)",
        synonym: "Accusation",
        antonym: "Exoneration"
    },
    {
        id: "vocab_eulogy_ant_condemnation",
        word: "CONDEMNATION",
        type: "Antonym",
        meaning: "expression of strong disapproval (निंदा / आलोचना)",
        synonym: "Denunciation",
        antonym: "Approval"
    },
    {
        id: "vocab_eulogy_ant_rebuke",
        word: "REBUKE",
        type: "Antonym",
        meaning: "expression of strong disapproval or criticism (फटकार / आलोचना)",
        synonym: "Reprimand",
        antonym: "Praise"
    },
    {
        id: "vocab_eulogy_ant_admonition",
        word: "ADMONITION",
        type: "Antonym",
        meaning: "firm warning given to correct behavior (चेतावनी / उपदेश)",
        synonym: "Warning",
        antonym: "Encouragement"
    },
    {
        id: "vocab_eulogy_ant_sermon",
        word: "SERMON",
        type: "Antonym",
        meaning: "religious or moral speech/talk (उपदेश / प्रवचन)",
        synonym: "Lecture",
        antonym: "Praise"
    },

    // --- SET 11: MITIGATE ---
    {
        id: "vocab_mitigate_main",
        word: "MITIGATE",
        type: "Synonym",
        meaning: "make something less severe, harmful, or painful (कम करना / शांत करना)",
        synonym: "Alleviate",
        antonym: "Aggravate"
    },
    {
        id: "vocab_mitigate_syn_allay",
        word: "ALLAY",
        type: "Synonym",
        meaning: "reduce or diminish feelings or fears (शांत करना / कम करना)",
        synonym: "Calm",
        antonym: "Exacerbate"
    },
    {
        id: "vocab_mitigate_syn_alleviate",
        word: "ALLEVIATE",
        type: "Synonym",
        meaning: "make a situation or condition less severe (कम करना / राहत देना)",
        synonym: "Relieve",
        antonym: "Worsen"
    },
    {
        id: "vocab_mitigate_syn_assuage",
        word: "ASSUAGE",
        type: "Synonym",
        meaning: "ease or lessen severity of pain or discomfort (शांत करना / कम करना)",
        synonym: "Soothe",
        antonym: "Intensify"
    },
    {
        id: "vocab_mitigate_syn_ease",
        word: "EASE",
        type: "Synonym",
        meaning: "make something less difficult or painful (आसान करना / कम करना)",
        synonym: "Lessen",
        antonym: "Aggravate"
    },
    {
        id: "vocab_mitigate_syn_mollify",
        word: "MOLLIFY",
        type: "Synonym",
        meaning: "calm or soothe someone's anger (शांत करना / कम करना)",
        synonym: "Pacify",
        antonym: "Enrage"
    },
    {
        id: "vocab_mitigate_syn_palliate",
        word: "PALLIATE",
        type: "Synonym",
        meaning: "reduce severity without curing disease (निवारण करना / राहत देना)",
        synonym: "Relieve",
        antonym: "Worsen"
    },
    {
        id: "vocab_mitigate_syn_relieve",
        word: "RELIEVE",
        type: "Synonym",
        meaning: "alleviate pain, stress, or discomfort (राहत देना / आराम देना)",
        synonym: "Ease",
        antonym: "Intensify"
    },
    {
        id: "vocab_mitigate_syn_soothe",
        word: "SOOTHE",
        type: "Synonym",
        meaning: "gently calm or ease pain/discomfort (शांत करना / आराम देना)",
        synonym: "Calm",
        antonym: "Irritate"
    },
    {
        id: "vocab_mitigate_ant_intensity",
        word: "INTENSITY",
        type: "Antonym",
        meaning: "quality of being intense or strong (तीव्रता / जोर)",
        synonym: "Strength",
        antonym: "Mildness"
    },
    {
        id: "vocab_mitigate_ant_impair",
        word: "IMPAIR",
        type: "Antonym",
        meaning: "weaken or damage something (क्षति पहुँचाना / हानि करना)",
        synonym: "Damage",
        antonym: "Improve"
    },
    {
        id: "vocab_mitigate_ant_harm",
        word: "HARM",
        type: "Antonym",
        meaning: "cause physical or emotional damage (नुकसान पहुँचाना / हानि करना)",
        synonym: "Damage",
        antonym: "Protect"
    },
    {
        id: "vocab_mitigate_ant_hurt",
        word: "HURT",
        type: "Antonym",
        meaning: "cause physical pain or distress (चोट पहुँचाना / दुख पहुँचाना)",
        synonym: "Injure",
        antonym: "Heal"
    },
    {
        id: "vocab_mitigate_ant_aggravate",
        word: "AGGRAVATE",
        type: "Antonym",
        meaning: "make a situation or condition worse (बढ़ाना / और खराब करना)",
        synonym: "Worsen",
        antonym: "Mitigate"
    },
    {
        id: "vocab_mitigate_ant_exacerbate",
        word: "EXACERBATE",
        type: "Antonym",
        meaning: "make a problem or feeling worse (और गंभीर करना / उत्तेजित करना)",
        synonym: "Aggravate",
        antonym: "Soften"
    },

    // --- SET 11: PRECLUDE ---
    {
        id: "vocab_preclude_main",
        word: "PRECLUDE",
        type: "Synonym",
        meaning: "prevent something from happening (रोकना / निषेध करना)",
        synonym: "Prevent",
        antonym: "Permit"
    },
    {
        id: "vocab_preclude_syn_avert",
        word: "AVERT",
        type: "Synonym",
        meaning: "prevent or turn away something undesirable (टालना / बचाना)",
        synonym: "Prevent",
        antonym: "Allow"
    },
    {
        id: "vocab_preclude_syn_forestall",
        word: "FORESTALL",
        type: "Synonym",
        meaning: "prevent by taking action ahead of time (पहले ही रोकना / अवरुद्ध करना)",
        synonym: "Preempt",
        antonym: "Facilitate"
    },
    {
        id: "vocab_preclude_syn_obviate",
        word: "OBVIATE",
        type: "Synonym",
        meaning: "remove a need or difficulty beforehand (निवारण करना / निष्क्रिय करना)",
        synonym: "Remove",
        antonym: "Require"
    },
    {
        id: "vocab_preclude_syn_headoff",
        word: "HEAD OFF",
        type: "Synonym",
        meaning: "prevent something from happening (रोकना / रास्ता रोकना)",
        synonym: "Interpose",
        antonym: "Allow"
    },
    {
        id: "vocab_preclude_syn_prevent",
        word: "PREVENT",
        type: "Synonym",
        meaning: "stop something from happening (रोकना / बचाव करना)",
        synonym: "Block",
        antonym: "Encourage"
    },
    {
        id: "vocab_preclude_syn_impede",
        word: "IMPEDE",
        type: "Synonym",
        meaning: "slow down or hinder progress (अवरोध डालना / रुकावट डालना)",
        synonym: "Hinder",
        antonym: "Assist"
    },
    {
        id: "vocab_preclude_syn_block",
        word: "BLOCK",
        type: "Synonym",
        meaning: "stop or prevent movement or progress (अवरुद्ध करना / रोकना)",
        synonym: "Obstruct",
        antonym: "Clear"
    },
    {
        id: "vocab_preclude_ant_aid",
        word: "AID",
        type: "Antonym",
        meaning: "help or assist in progress (मदद करना / सहायता देना)",
        synonym: "Help",
        antonym: "Hinder"
    },
    {
        id: "vocab_preclude_ant_assist",
        word: "ASSIST",
        type: "Antonym",
        meaning: "help or support in achieving something (सहायता करना / मदद करना)",
        synonym: "Support",
        antonym: "Impede"
    },
    {
        id: "vocab_preclude_ant_ease",
        word: "EASE",
        type: "Antonym",
        meaning: "make something less difficult (आसान बनाना / हल्का करना)",
        synonym: "Facilitate",
        antonym: "Complicate"
    },
    {
        id: "vocab_preclude_ant_abet",
        word: "ABET",
        type: "Antonym",
        meaning: "encourage or assist someone in doing wrong (प्रोत्साहित करना / मदद करना)",
        synonym: "Assist",
        antonym: "Deter"
    },
    {
        id: "vocab_preclude_ant_permit",
        word: "PERMIT",
        type: "Antonym",
        meaning: "allow or give permission (अनुमति देना / इजाजत देना)",
        synonym: "Allow",
        antonym: "Forbid"
    },
    {
        id: "vocab_preclude_ant_encourage",
        word: "ENCOURAGE",
        type: "Antonym",
        meaning: "support or motivate someone (प्रोत्साहित करना / उत्साहित करना)",
        synonym: "Promote",
        antonym: "Discourage"
    },

    // --- SET 11: MUTABILITY ---
    {
        id: "vocab_mutability_main",
        word: "MUTABILITY",
        type: "Synonym",
        meaning: "tendency to change frequently or unpredictably (परिवर्तनशीलता / अनिश्चितता)",
        synonym: "Fickleness",
        antonym: "Constancy"
    },
    {
        id: "vocab_mutability_syn_capricious",
        word: "CAPRICIOUS",
        type: "Synonym",
        meaning: "given to sudden changes of mood/behavior (मनमौजी / अनियमित)",
        synonym: "Whimsical",
        antonym: "Predictable"
    },
    {
        id: "vocab_mutability_syn_changeful",
        word: "CHANGEFUL",
        type: "Synonym",
        meaning: "tending to change frequently (परिवर्तनशील / बदलाव के अधीन)",
        synonym: "Variable",
        antonym: "Constant"
    },
    {
        id: "vocab_mutability_syn_fickle",
        word: "FICKLE",
        type: "Synonym",
        meaning: "changing frequently in loyalty or interests (मनमौजी / परिवर्तनीय)",
        synonym: "Inconstant",
        antonym: "Loyal"
    },
    {
        id: "vocab_mutability_syn_fluid",
        word: "FLUID",
        type: "Synonym",
        meaning: "capable of changing frequently (तरल / प्रवाहशील)",
        synonym: "Adaptable",
        antonym: "Rigid"
    },
    {
        id: "vocab_mutability_syn_mercurial",
        word: "MERCURIAL",
        type: "Synonym",
        meaning: "unpredictable changes in mood or behavior (चंचल / बदलते स्वभाव वाला)",
        synonym: "Volatile",
        antonym: "Steady"
    },
    {
        id: "vocab_mutability_syn_uncertain",
        word: "UNCERTAIN",
        type: "Synonym",
        meaning: "not definite, subject to change (अनिश्चित / अस्पष्ट)",
        synonym: "Unsure",
        antonym: "Certain"
    },
    {
        id: "vocab_mutability_syn_volatile",
        word: "VOLATILE",
        type: "Synonym",
        meaning: "likely to change or vary rapidly (अस्थिर / उतार-चढ़ाव वाला)",
        synonym: "Unstable",
        antonym: "Stable"
    },
    {
        id: "vocab_mutability_syn_unpredictable",
        word: "UNPREDICTABLE",
        type: "Synonym",
        meaning: "impossible to predict, likely to change (अनिश्चित / पूर्वानुमानित नहीं)",
        synonym: "Erratic",
        antonym: "Predictable"
    },
    {
        id: "vocab_mutability_ant_certain",
        word: "CERTAIN",
        type: "Antonym",
        meaning: "fixed or determined, not subject to change (निश्चित / पक्का)",
        synonym: "Sure",
        antonym: "Uncertain"
    },
    {
        id: "vocab_mutability_ant_constant",
        word: "CONSTANT",
        type: "Antonym",
        meaning: "unchanging, remaining the same over time (स्थिर / अपरिवर्तनीय)",
        synonym: "Continuous",
        antonym: "Variable"
    },
    {
        id: "vocab_mutability_ant_immutable",
        word: "IMMUTABLE",
        type: "Antonym",
        meaning: "unchanging over time, unable to be changed (अपरिवर्तनीय / स्थिर)",
        synonym: "Unchangeable",
        antonym: "Mutable"
    },
    {
        id: "vocab_mutability_ant_invariable",
        word: "INVARIABLE",
        type: "Antonym",
        meaning: "never changing or incapable of changing (अपरिवर्तनीय / स्थिर)",
        synonym: "Unvarying",
        antonym: "Variable"
    },
    {
        id: "vocab_mutability_ant_steady",
        word: "STEADY",
        type: "Antonym",
        meaning: "firm, stable, or constant without changes (स्थिर / दृढ़)",
        synonym: "Stable",
        antonym: "Unsteady"
    },

    // --- SET 11: EQUIVOCATE ---
    {
        id: "vocab_equivocate_main",
        word: "EQUIVOCATE",
        type: "Synonym",
        meaning: "use unclear language to avoid direct answer (टालमटोल करना / घुमा-फिरा कर बोलना)",
        synonym: "Prevaricate",
        antonym: "Confront"
    },
    {
        id: "vocab_equivocate_syn_fudge",
        word: "FUDGE",
        type: "Synonym",
        meaning: "avoid giving a clear or direct answer (घुमा-फिरा कर बोलना / झूठ बोलना)",
        synonym: "Egrade",
        antonym: "Clarify"
    },
    {
        id: "vocab_equivocate_syn_circumvent",
        word: "CIRCUMVENT",
        type: "Synonym",
        meaning: "avoid or get around something cleverely (बचना / घेर कर निकलना)",
        synonym: "Bypass",
        antonym: "Confront"
    },
    {
        id: "vocab_equivocate_syn_elude",
        word: "ELUDE",
        type: "Synonym",
        meaning: "escape or avoid something cleverly (बचना / टालना)",
        synonym: "Evade",
        antonym: "Face"
    },
    {
        id: "vocab_equivocate_syn_evade",
        word: "EVADE",
        type: "Synonym",
        meaning: "escape or avoid by cleverness or trickery (बचना / मुकरना)",
        synonym: "Avoid",
        antonym: "Confront"
    },
    {
        id: "vocab_equivocate_syn_waffle",
        word: "WAFFLE",
        type: "Synonym",
        meaning: "speak or write in an unclear manner (घुमा-फिरा कर बोलना / टालमटोल करना)",
        synonym: "Equivocate",
        antonym: "Explain"
    },
    {
        id: "vocab_equivocate_syn_palter",
        word: "PALTER",
        type: "Synonym",
        meaning: "speak or act insincerely or deceitfully (झूठ बोलना / घुमा-फिरा कर बोलना)",
        synonym: "Trifle",
        antonym: "Be Honest"
    },
    {
        id: "vocab_equivocate_syn_weasel",
        word: "WEASEL",
        type: "Synonym",
        meaning: "avoid giving a clear or straightforward answer (टालमटोल करना / बचना)",
        synonym: "Dodge",
        antonym: "Face"
    },
    {
        id: "vocab_equivocate_syn_cavil",
        word: "CAVIL",
        type: "Synonym",
        meaning: "make petty or unnecessary objections (बहस करना / नुक्ताचीनी करना)",
        synonym: "Quibble",
        antonym: "Agree"
    },
    {
        id: "vocab_equivocate_ant_behonest",
        word: "BE HONEST",
        type: "Antonym",
        meaning: "speak truthfully or without evasion (ईमानदार होना)",
        synonym: "Truthful",
        antonym: "Deceive"
    },
    {
        id: "vocab_equivocate_ant_confront",
        word: "CONFRONT",
        type: "Antonym",
        meaning: "face or deal with something directly (सामना करना / चुनौती देना)",
        synonym: "Face",
        antonym: "Avoid"
    },
    {
        id: "vocab_equivocate_ant_face",
        word: "FACE",
        type: "Antonym",
        meaning: "deal with or confront directly (सामना करना / मुंह देखना)",
        synonym: "Encounter",
        antonym: "Evade"
    },
    {
        id: "vocab_equivocate_ant_speakon",
        word: "SPEAK ON",
        type: "Antonym",
        meaning: "talk about a subject in a direct manner (बात करना / विषय पर बोलना)",
        synonym: "Discuss",
        antonym: "Silence"
    },
    {
        id: "vocab_equivocate_ant_takeon",
        word: "TAKE ON",
        type: "Antonym",
        meaning: "face or tackle a challenge (चुनौती स्वीकार करना / सामना करना)",
        synonym: "Tackle",
        antonym: "Avoid"
    },
    // --- SET: DEXTEROUS ---
    {
        id: "vocab_dexterous_main",
        word: "DEXTEROUS",
        type: "Synonym",
        meaning: "Demonstrating high physical skill, agility, or cleverness, especially when using hands or performing delicate tasks (हाथों की सफाई या काम में अत्यंत कुशल, निपुण एवं चतुर)",
        synonym: "Deft",
        antonym: "Clumsy"
    },
    {
        id: "vocab_dexterous_syn_clever",
        word: "CLEVER",
        type: "Synonym",
        meaning: "Quick to understand, learn, and devise innovative solutions to complex problems (किसी भी बात को तुरंत समझने वाला, चतुर एवं बुद्धिमान)",
        synonym: "Smart",
        antonym: "Foolish"
    },
    {
        id: "vocab_dexterous_syn_handy",
        word: "HANDY",
        type: "Synonym",
        meaning: "Skilled in using hands for practical tasks or repairs around a place, highly useful (दैनिक कार्यों व मरम्मत में उपयोगी, कुशल एवं सहज)",
        synonym: "Useful",
        antonym: "Unhandy"
    },
    {
        id: "vocab_dexterous_syn_deft",
        word: "DEFT",
        type: "Synonym",
        meaning: "Neat, swift, and skillful in movement, demonstrating effortless expertise (हाथों की गतिविधियों में बेहद तेज़, सफाई से काम करने वाला एवं निपुण)",
        synonym: "Adept",
        antonym: "Awkward"
    },
    {
        id: "vocab_dexterous_syn_agile",
        word: "AGILE",
        type: "Synonym",
        meaning: "Able to move quickly, smoothly, and with extreme ease without stumbling (शारीरिक व मानसिक रूप से तुरंत और आसानी से कदम उठाने वाला, फुर्तीला)",
        synonym: "Nimble",
        antonym: "Stiff"
    },
    {
        id: "vocab_dexterous_syn_graceful",
        word: "GRACEFUL",
        type: "Synonym",
        meaning: "Showing elegance, harmony, and beauty in posture, style, or movement (चाल-ढाल व शारीरिक गतिविधियों में आकर्षण, सुंदरता एवं भव्यता दर्शाने वाला)",
        synonym: "Elegant",
        antonym: "Graceless"
    },
    {
        id: "vocab_dexterous_syn_lithe",
        word: "LITHE",
        type: "Synonym",
        meaning: "Thin, supple, and graceful, moving or bending with remarkable flexibility (पतला, लचीला और अत्यंत सुंदरता से मुड़ने या हरकत करने वाला)",
        synonym: "Flexible",
        antonym: "Rigid"
    },
    {
        id: "vocab_dexterous_syn_spry",
        word: "SPRY",
        type: "Synonym",
        meaning: "Active, lively, and full of energy, especially when referring to an older person (उम्रदराज़ होने पर भी शारीरिक रूप से चुस्त, चपल एवं फुर्तीला)",
        synonym: "Active",
        antonym: "Lethargic"
    },
    {
        id: "vocab_dexterous_syn_flexible",
        word: "FLEXIBLE",
        type: "Synonym",
        meaning: "Capable of bending easily without breaking, or adaptable to changing conditions (आसानी से मुड़ने योग्य या परिस्थितियों के अनुसार ढल जाने वाला, लचीला)",
        synonym: "Pliant",
        antonym: "Inelastic"
    },
    {
        id: "vocab_dexterous_syn_capable",
        word: "CAPABLE",
        type: "Synonym",
        meaning: "Having the requisite ability, power, or qualifications to accomplish a given task (किसी भी दिए गए कार्य को सफलता से पूरा करने में सक्षम व योग्य)",
        synonym: "Competent",
        antonym: "Inept"
    },
    {
        id: "vocab_dexterous_syn_proficient",
        word: "PROFICIENT",
        type: "Synonym",
        meaning: "Competent, skilled, and well-advanced in an art, occupation, or branch of knowledge (किसी विशेष कला, भाषा या विद्या में पूर्ण रूप से निपुण व प्रवीण)",
        synonym: "Skilled",
        antonym: "Inexpert"
    },
    {
        id: "vocab_dexterous_ant_unhandy",
        word: "UNHANDY",
        type: "Antonym",
        meaning: "Inconvenient to handle, lacking manual dexterity or practical skill with tools (हाथ के काम में अकुशल, औजारों का प्रयोग न कर पाने वाला, अक्षम)",
        synonym: "Awkward",
        antonym: "Handy"
    },
    {
        id: "vocab_dexterous_ant_inept",
        word: "INEPT",
        type: "Antonym",
        meaning: "Having or showing no skill, utterly clumsy or awkward in executing tasks (बिना किसी कौशल या क्षमता के काम बिगाड़ने वाला, अयोग्य व अक्षम)",
        synonym: "Clumsy",
        antonym: "Proficient"
    },
    {
        id: "vocab_dexterous_ant_inexpert",
        word: "INEXPERT",
        type: "Antonym",
        meaning: "Lacking knowledge, training, or practical experience in a specific subject or task (ज्ञान व अनुभव की कमी के कारण कार्य में कच्चा या अप्रमाणित)",
        synonym: "Unskilled",
        antonym: "Expert"
    },
    {
        id: "vocab_dexterous_ant_maladroit",
        word: "MALADROIT",
        type: "Antonym",
        meaning: "Inept, clumsy, or unskillful in physical handling or social situations (शारीरिक संतुलन व सामाजिक बातचीत में अनाड़ी, बेढंगा एवं असंवेदनशील)",
        synonym: "Clumsy",
        antonym: "Adroit"
    },
    {
        id: "vocab_dexterous_ant_clumsy",
        word: "CLUMSY",
        type: "Antonym",
        meaning: "Awkward in movement or handling things, prone to causing accidents or dropping objects (चीजों को सही से न संभाल पाने वाला, भारी व बेढंगा)",
        synonym: "Awkward",
        antonym: "Dexterous"
    },
    {
        id: "vocab_dexterous_ant_graceless",
        word: "GRACELESS",
        type: "Antonym",
        meaning: "Lacking charm, elegance, or good manners, moving or acting awkwardly (चाल-ढाल, रूप या व्यवहार में आकर्षण व शिष्टाचार से रहित, असंयमित)",
        synonym: "Awkward",
        antonym: "Graceful"
    },

    // --- SET: AMASS ---
    {
        id: "vocab_amass_main",
        word: "AMASS",
        type: "Synonym",
        meaning: "To gather, collect, or pile up a large quantity of material, wealth, or data over time (समय के साथ अत्यधिक मात्रा में धन, संपत्ति या वस्तुएँ एकत्रित करना)",
        synonym: "Accumulate",
        antonym: "Disperse"
    },
    {
        id: "vocab_amass_syn_collect",
        word: "COLLECT",
        type: "Synonym",
        meaning: "To bring scattered things together from various places or sources into one group (विभिन्न स्थानों से वस्तुओं को एक जगह चुनकर एकत्र करना)",
        synonym: "Gather",
        antonym: "Distribute"
    },
    {
        id: "vocab_amass_syn_assemble",
        word: "ASSEMBLE",
        type: "Synonym",
        meaning: "To bring together people or parts into one place for a shared purpose or structure (किसी उद्देश्य के लिए लोगों या पुर्जों को एक स्थान पर इकट्ठा करना)",
        synonym: "Convene",
        antonym: "Disband"
    },
    {
        id: "vocab_amass_syn_accumulate",
        word: "ACCUMULATE",
        type: "Synonym",
        meaning: "To gradually gather or build up a heap or supply of something over a period (धीरे-धीरे मात्रा या संख्या में वृद्धि करके ढेर लगाना, जमा करना)",
        synonym: "Amass",
        antonym: "Scatter"
    },
    {
        id: "vocab_amass_syn_congregate",
        word: "CONGREGATE",
        type: "Synonym",
        meaning: "To gather together in a crowd or large mass at a particular location (एक स्थान पर भारी संख्या में लोगों का जमावड़ा होना या एकत्र होना)",
        synonym: "Flock",
        antonym: "Disperse"
    },
    {
        id: "vocab_amass_syn_corral",
        word: "CORRAL",
        type: "Synonym",
        meaning: "To gather, collect, or enclose people, animals, or items into a controlled space (लोगों, पशुओं या सामान को नियंत्रित सीमा के भीतर घेरकर इकट्ठा करना)",
        synonym: "Enclose",
        antonym: "Release"
    },
    {
        id: "vocab_amass_syn_cluster",
        word: "CLUSTER",
        type: "Synonym",
        meaning: "To position or gather closely together in a tight, compact group (पास-पास एकत्र होकर छोटा गुट या समूह बनाना)",
        synonym: "Group",
        antonym: "Scatter"
    },
    {
        id: "vocab_amass_syn_lump",
        word: "LUMP",
        type: "Synonym",
        meaning: "To put or group different things together in a single mass without categorization (बिना छांटे अलग-अलग चीजों को एक ही ढेर में मिला देना)",
        synonym: "Combine",
        antonym: "Separate"
    },
    {
        id: "vocab_amass_ant_dispel",
        word: "DISPEL",
        type: "Antonym",
        meaning: "To drive away, banish, or eliminate doubts, fears, or misunderstandings completely (संदेह, डर या भ्रम को मन से दूर करना या भगा देना)",
        synonym: "Dismiss",
        antonym: "Gather"
    },
    {
        id: "vocab_amass_ant_disperse",
        word: "DISPERSE",
        type: "Antonym",
        meaning: "To cause a crowd or gathered group to split up and go in different directions (भीड़ या एकत्रित वस्तु को अलग-अलग दिशाओं में फैलाना या बिखेरना)",
        synonym: "Scatter",
        antonym: "Assemble"
    },
    {
        id: "vocab_amass_ant_dissipate",
        word: "DISSIPATE",
        type: "Antonym",
        meaning: "To squander, waste recklessly, or cause energy/clouds to thin out and vanish (संपत्ति को व्यर्थ उड़ाना या भाप/कोहरे का धीरे-धीरे गायब होना)",
        synonym: "Squander",
        antonym: "Accumulate"
    },
    {
        id: "vocab_amass_ant_scatter",
        word: "SCATTER",
        type: "Antonym",
        meaning: "To throw or drop items randomly over a wide surface or distant area (सामान या बीजों को दूर-दूर तक अनियमित रूप से छितराना या बिखेरना)",
        synonym: "Spread",
        antonym: "Collect"
    },
    {
        id: "vocab_amass_ant_dissolve",
        word: "DISSOLVE",
        type: "Antonym",
        meaning: "To cause a solid to melt into a liquid, or to officially terminate an organization (किसी ठोस पदार्थ का द्रव में घुलना या संस्था/समूह को भंग करना)",
        synonym: "Disintegrate",
        antonym: "Form"
    },
    {
        id: "vocab_amass_ant_disband",
        word: "DISBAND",
        type: "Antonym",
        meaning: "To break up an organized group, team, or military unit permanently (किसी संगठित गिरोह, सेना या टीम को तोड़ना या समाप्त करना)",
        synonym: "Separate",
        antonym: "Assemble"
    },

    // --- SET: IMPERTURBABLE ---
    {
        id: "vocab_imperturbable_main",
        word: "IMPERTURBABLE",
        type: "Synonym",
        meaning: "Unable to be upset, excited, or panicked; remaining remarkably calm in extreme stress (अत्यधिक संकट में भी शांत, अचल, अविचलित एवं न घबराने वाला)",
        synonym: "Unflappable",
        antonym: "Perturbable"
    },
    {
        id: "vocab_imperturbable_syn_nerveless",
        word: "NERVELESS",
        type: "Synonym",
        meaning: "Showing no weakness, fear, or hesitation under immense pressure, cool-headed (बिना डरे या कांपे कठिन निर्णय लेने वाला, निश्चल एवं शांत)",
        synonym: "Cool",
        antonym: "Anxious"
    },
    {
        id: "vocab_imperturbable_syn_unflappable",
        word: "UNFLAPPABLE",
        type: "Synonym",
        meaning: "Having or showing a calm demeanour even in severe crisis or surprise situations (अचानक आई मुसीबत में भी अपना आपा न खोने वाला, शांत स्वभाव का)",
        synonym: "Imperturbable",
        antonym: "Panicky"
    },
    {
        id: "vocab_imperturbable_syn_placid",
        word: "PLACID",
        type: "Synonym",
        meaning: "Not easily irritated or disturbed, enjoying an undisturbed peace and stillness (जो आसानी से चिढ़ता न हो, शांत, स्थिर एवं सौम्य प्रकृति का)",
        synonym: "Serene",
        antonym: "Agitated"
    },
    {
        id: "vocab_imperturbable_syn_tranquil",
        word: "TRANQUIL",
        type: "Synonym",
        meaning: "Free from disturbance, noise, or agitation; profoundly calm and peaceful (शोर-शराबे व उथल-पुथल से मुक्त, अत्यंत शांत व सुखद वातावरण वाला)",
        synonym: "Peaceful",
        antonym: "Turbulent"
    },
    {
        id: "vocab_imperturbable_syn_unruffled",
        word: "UNRUFFLED",
        type: "Synonym",
        meaning: "Not agitated or disturbed despite chaotic surroundings, perfectly composed (आस-पास अराजकता होने पर भी स्थिर रहने वाला, न डगमगाने वाला)",
        synonym: "Composed",
        antonym: "Ruffled"
    },
    {
        id: "vocab_imperturbable_syn_nonchalant",
        word: "NONCHALANT",
        type: "Synonym",
        meaning: "Feeling or appearing casually calm and relaxed, displaying unconcerned attitude (बिना किसी तनाव या चिंता के सहज व उदासीन दिखने वाला)",
        synonym: "Casual",
        antonym: "Concerned"
    },
    {
        id: "vocab_imperturbable_ant_perturbable",
        word: "PERTURBABLE",
        type: "Antonym",
        meaning: "Easily thrown into confusion, worry, or anger by minor disruptions (छोटी-छोटी बातों से तुरंत परेशान, चिड़चिड़ा या विचलित होने वाला)",
        synonym: "Excitable",
        antonym: "Imperturbable"
    },
    {
        id: "vocab_imperturbable_ant_panicky",
        word: "PANICKY",
        type: "Antonym",
        meaning: "Feeling or characterized by sudden uncontrollable fear or anxiety (अचानक भयभीत होकर नियंत्रण खोने वाला, डर से भरा व घबराया हुआ)",
        synonym: "Fearful",
        antonym: "Calm"
    },
    {
        id: "vocab_imperturbable_ant_aflutter",
        word: "AFLUTTER",
        type: "Antonym",
        meaning: "In a state of nervous excitement, trembling, or anxious anticipation (उत्तेजना, डर या उत्सुकता से दिल धड़कना एवं विचलित होना)",
        synonym: "Agitated",
        antonym: "Composed"
    },
    {
        id: "vocab_imperturbable_ant_anxious",
        word: "ANXIOUS",
        type: "Antonym",
        meaning: "Feeling nervous, worried, or uneasy about an uncertain outcome or event (भविष्य या परिणाम की चिंता में मन ही मन परेशान व बेचैन रहने वाला)",
        synonym: "Apprehensive",
        antonym: "Calm"
    },
    {
        id: "vocab_imperturbable_ant_dithery",
        word: "DITHERY",
        type: "Antonym",
        meaning: "Hesitant, indecisive, and acting with nervous agitation when making decisions (निर्णय लेते समय घबराहट के कारण असमंजस में रहने वाला)",
        synonym: "Hesitant",
        antonym: "Decisive"
    },

    // --- SET: ABSTEMIOUS ---
    {
        id: "vocab_abstemious_main",
        word: "ABSTEMIOUS",
        type: "Synonym",
        meaning: "Indulging in acute self-restraint, especially regarding eating food and drinking alcohol (खान-पान व सुख-सुविधाओं में आत्म-नियंत्रण रखने वाला, संयमी)",
        synonym: "Temperate",
        antonym: "Gluttonous"
    },
    {
        id: "vocab_abstemious_syn_temperate",
        word: "TEMPERATE",
        type: "Synonym",
        meaning: "Showing moderation or self-restraint in actions, speech, or consumption of goods (अपनी आदतों व व्यवहार में संतुलन व मर्यादा बनाए रखने वाला)",
        synonym: "Moderate",
        antonym: "Excessive"
    },
    {
        id: "vocab_abstemious_syn_selfabnegating",
        word: "SELF-ABNEGATING",
        type: "Synonym",
        meaning: "Renouncing or rejecting one's personal desires, pleasures, and interests for a higher ideal (अपनी सुख-इच्छाओं का त्याग करने वाला, स्वार्थहीन)",
        synonym: "Selfless",
        antonym: "Selfish"
    },
    {
        id: "vocab_abstemious_syn_abstinent",
        word: "ABSTINENT",
        type: "Synonym",
        meaning: "Refraining voluntarily from indulging in worldly pleasures such as alcohol, food, or luxury (इंद्रिय सुखों व व्यसनों से दूरी बनाए रखने वाला, विरक्त)",
        synonym: "Restrained",
        antonym: "Indulgent"
    },
    {
        id: "vocab_abstemious_syn_abstentious",
        word: "ABSTENTIOUS",
        type: "Synonym",
        meaning: "Practicing self-denial and moderation regularly in life habits (खान-पान में परहेज़ व अनुशासन का कड़ाई से पालन करने वाला, संयमी)",
        synonym: "Moderate",
        antonym: "Greedy"
    },
    {
        id: "vocab_abstemious_syn_sober",
        word: "SOBER",
        type: "Synonym",
        meaning: "Not affected by alcohol, displaying a serious, sensible, and solemn attitude (नशे से दूर रहने वाला, गंभीर, विचारशील एवं संतुलित व्यक्ति)",
        synonym: "Serious",
        antonym: "Drunk"
    },
    {
        id: "vocab_abstemious_syn_austere",
        word: "AUSTERE",
        type: "Synonym",
        meaning: "Severe, strict, and unadorned in manner or appearance, living without luxury (बिना सजावट व भौतिक सुखों का सादा, कठोर व अनुशासित जीवन जीने वाला)",
        synonym: "Stern",
        antonym: "Lavish"
    },
    {
        id: "vocab_abstemious_syn_disciplined",
        word: "DISCIPLINED",
        type: "Synonym",
        meaning: "Showing a high degree of controlled behavior according to established standards (नियमों व आत्म-नियंत्रण के साथ कार्य करने वाला, अनुशासित)",
        synonym: "Controlled",
        antonym: "Wild"
    },
    {
        id: "vocab_abstemious_ant_gluttonous",
        word: "GLUTTONOUS",
        type: "Antonym",
        meaning: "Excessively greedy in eating and drinking way beyond normal limits (जरूरत से अधिक भोजन ठूंसने वाला, अति-खाऊ, पेटू या उधारखोर)",
        synonym: "Greedy",
        antonym: "Abstemious"
    },
    {
        id: "vocab_abstemious_ant_hedonistic",
        word: "HEDONISTIC",
        type: "Antonym",
        meaning: "Devoted to pursuing sensual pleasure and self-gratification as the main life goal (केवल शारीरिक सुख व आनंद की खोज में डूबा रहने वाला, भोगवादी)",
        synonym: "Self-indulgent",
        antonym: "Ascetic"
    },
    {
        id: "vocab_abstemious_ant_greedy",
        word: "GREEDY",
        type: "Antonym",
        meaning: "Having an intense, selfish desire for more wealth, power, or food than is needed (धन या वस्तुओं की अत्यधिक लालसा रखने वाला, स्वार्थी व लालची)",
        synonym: "Avaricious",
        antonym: "Generous"
    },
    {
        id: "vocab_abstemious_ant_sybaritic",
        word: "SYBARITIC",
        type: "Antonym",
        meaning: "Fond of or indulging in sensuous luxury and expensive pleasures (अत्यधिक ऐशो-आराम, धन-दौलत व विलासितापूर्ण जीवन शैली पसंद करने वाला)",
        synonym: "Luxurious",
        antonym: "Austere"
    },

    // --- SET: PLIABLE ---
    {
        id: "vocab_pliable_main",
        word: "PLIABLE",
        type: "Synonym",
        meaning: "Easily bent, shaped, or manipulated without breaking; easily influenced by others (जो आसानी से मुड़ सके, संकुचित हो सके या दूसरों के दबाव में आ जाए)",
        synonym: "Flexible",
        antonym: "Rigid"
    },
    {
        id: "vocab_pliable_syn_flexible",
        word: "FLEXIBLE",
        type: "Synonym",
        meaning: "Able to bend easily without snapping, or willing to change plans according to situation (आसानी से मुड़ने वाली वस्तु या परिस्थितियों के अनुसार बदलने वाला स्वभाव)",
        synonym: "Pliant",
        antonym: "Inflexible"
    },
    {
        id: "vocab_pliable_syn_pliant",
        word: "PLIANT",
        type: "Synonym",
        meaning: "Yielding readily to force or pressure; impressionable and easily persuaded (दबाव में तुरंत झुक जाने वाला, लचीला या आसानी से बहकने वाला)",
        synonym: "Adaptable",
        antonym: "Stubborn"
    },
    {
        id: "vocab_pliable_syn_limber",
        word: "LIMBER",
        type: "Synonym",
        meaning: "Warm, supple, and capable of bending the body effortlessly, especially in athletics (शरीर से अत्यधिक लचीला, जिमनास्ट या एथलीट की तरह मुड़ने वाला)",
        synonym: "Lithe",
        antonym: "Stiff"
    },
    {
        id: "vocab_pliable_syn_lithe",
        word: "LITHE",
        type: "Synonym",
        meaning: "Slim, graceful, and remarkably flexible in movement and posture (सलोना, पतला और आसानी से हरकत करने वाला लचीला शरीर)",
        synonym: "Supple",
        antonym: "Rigid"
    },
    {
        id: "vocab_pliable_syn_ductile",
        word: "DUCTILE",
        type: "Synonym",
        meaning: "Able to be drawn out into thin wire or hammered into thin sheets without breaking (धातु जिसे खींचकर तार बनाया जा सके, खिंचने योग्य व लचीला)",
        synonym: "Malleable",
        antonym: "Brittle"
    },
    {
        id: "vocab_pliable_syn_alterable",
        word: "ALTERABLE",
        type: "Synonym",
        meaning: "Capable of being changed, modified, or adjusted from its original state (जिसके रूप, नियम या आकार में बदलाव किया जाना संभव हो)",
        synonym: "Variable",
        antonym: "Immutable"
    },
    {
        id: "vocab_pliable_syn_malleable",
        word: "MALLEABLE",
        type: "Synonym",
        meaning: "Able to be shaped or extended by hammering or pressure; easily influenced (पीटकर नए आकार में ढालने योग्य या आसानी से बदला जाने वाला)",
        synonym: "Ductile",
        antonym: "Rigid"
    },
    {
        id: "vocab_pliable_syn_adaptable",
        word: "ADAPTABLE",
        type: "Synonym",
        meaning: "Able to adjust quickly to new environments, tasks, or stressful conditions (नये माहौल या कठिनाइयों में आसानी से सामंजस्य बैठाने वाला)",
        synonym: "Versatile",
        antonym: "Inflexible"
    },
    {
        id: "vocab_pliable_ant_constant",
        word: "CONSTANT",
        type: "Antonym",
        meaning: "Remaining continuous, unchanged, and unwavering over a long duration (समय के साथ न बदलने वाला, लगातार एक जैसा रहने वाला, स्थिर)",
        synonym: "Steady",
        antonym: "Variable"
    },
    {
        id: "vocab_pliable_ant_steady",
        word: "STEADY",
        type: "Antonym",
        meaning: "Firmly fixed, supported, or balanced; not shaking, swaying, or varying (अपनी जगह पर मजबूती से टिका हुआ, बिना डगमगाए चलने वाला, दृढ़)",
        synonym: "Stable",
        antonym: "Unsteady"
    },
    {
        id: "vocab_pliable_ant_brittle",
        word: "BRITTLE",
        type: "Antonym",
        meaning: "Hard but easily broken, shattered, or snapped when subjected to light pressure (कठोर परंतु हल्का सा दबाव पड़ते ही टूट कर बिखर जाने वाला, नाजुक)",
        synonym: "Fragile",
        antonym: "Ductile"
    },
    {
        id: "vocab_pliable_ant_fragile",
        word: "FRAGILE",
        type: "Antonym",
        meaning: "Easily broken, damaged, or harmed, requiring gentle handling (अत्यंत नाजुक व संवेदनशील, जो जरा सी ठेस से टूट सकता हो)",
        synonym: "Delicate",
        antonym: "Sturdy"
    },
    {
        id: "vocab_pliable_ant_inelastic",
        word: "INELASTIC",
        type: "Antonym",
        meaning: "Not capable of being stretched or expanded; unyielding and rigid (जिसमें खिंचाव न हो, जो दबाने या खींचने पर न बढ़े, कठोर)",
        synonym: "Rigid",
        antonym: "Elastic"
    },
    {
        id: "vocab_pliable_ant_unyielding",
        word: "UNYIELDING",
        type: "Antonym",
        meaning: "Completely rigid and refusing to bend under force, or stubborn in opinion (न झुकने वाला, भौतिक रूप से कठोर या अपने विचार पर अड़ा रहने वाला)",
        synonym: "Obstinate",
        antonym: "Yielding"
    },
    // --- SET: INGRATIATE ---
    {
        id: "vocab_ingratiate_main",
        word: "INGRATIATE",
        type: "Synonym",
        meaning: "To intentionally bring oneself into favor or good graces of someone, often through flattery or pleasing behavior (दूसरों का प्रिय बनने के लिए चापलूसी या अत्यधिक प्रशंसा करना)",
        synonym: "Flatter",
        antonym: "Antagonize"
    },
    {
        id: "vocab_ingratiate_syn_appease",
        word: "APPEASE",
        type: "Synonym",
        meaning: "To pacify or placate someone by acceding to their demands or giving concessions (मांगें मानकर किसी के गुस्से को शांत करना या तसल्ली देना)",
        synonym: "Pacify",
        antonym: "Provoke"
    },
    {
        id: "vocab_ingratiate_syn_flatter",
        word: "FLATTER",
        type: "Synonym",
        meaning: "To praise someone excessively or insincerely, usually to get something or gain favor (अपना काम निकालने के लिए अत्यधिक चापलूसी करना)",
        synonym: "Praise",
        antonym: "Insult"
    },
    {
        id: "vocab_ingratiate_syn_assuage",
        word: "ASSUAGE",
        type: "Synonym",
        meaning: "To make an unpleasant, intense, or painful feeling less severe or more bearable (दर्द, डर या चिंता की तीव्रता को कम या शांत करना)",
        synonym: "Soothe",
        antonym: "Intensify"
    },
    {
        id: "vocab_ingratiate_syn_conciliate",
        word: "CONCILIATE",
        type: "Synonym",
        meaning: "To stop someone from being angry or discontented, acting as a peacemaker (मध्यस्थता करके या रियायत देकर विवाद शांत करना)",
        synonym: "Reconcile",
        antonym: "Estrange"
    },
    {
        id: "vocab_ingratiate_syn_console",
        word: "CONSOLE",
        type: "Synonym",
        meaning: "To serve as a source of comfort to someone experiencing grief, disappointment, or distress (दुखी या परेशान व्यक्ति को ढांढस या सांत्वना देना)",
        synonym: "Comfort",
        antonym: "Distress"
    },
    {
        id: "vocab_ingratiate_syn_cajole",
        word: "CAJOLE",
        type: "Synonym",
        meaning: "To persuade someone to do something by sustained coaxing, flattery, or gentle urging (मीठी बातों या चापलूसी से किसी को काम के लिए मनाना)",
        synonym: "Coax",
        antonym: "Force"
    },
    {
        id: "vocab_ingratiate_syn_mollify",
        word: "MOLLIFY",
        type: "Synonym",
        meaning: "To reduce the severity or anger of a person, softening their hostility (किसी के क्रोध या कड़वाहट को कम करके शांत करना)",
        synonym: "Pacify",
        antonym: "Enrage"
    },
    {
        id: "vocab_ingratiate_syn_gratify",
        word: "GRATIFY",
        type: "Synonym",
        meaning: "To give pleasure or satisfaction to a desire, need, or expectation (किसी की इच्छा, भावना या जरूरत को संतुष्ट करना)",
        synonym: "Satisfy",
        antonym: "Displease"
    },
    {
        id: "vocab_ingratiate_syn_adulate",
        word: "ADULATE",
        type: "Synonym",
        meaning: "To praise or admire someone to an extreme, servile, and exaggerated degree (किसी की चाटुकारिता या अत्यधिक झूठी तारीफ करना)",
        synonym: "Worship",
        antonym: "Critique"
    },
    {
        id: "vocab_ingratiate_syn_quench",
        word: "QUENCH",
        type: "Synonym",
        meaning: "To satisfy one's thirst by drinking, or to extinguish a fire/strong desire (प्यास बुझाना, आग बुझाना या तीव्र इच्छा को संतुष्ट करना)",
        synonym: "Extinguish",
        antonym: "Ignite"
    },
    {
        id: "vocab_ingratiate_ant_annoy",
        word: "ANNOY",
        type: "Antonym",
        meaning: "To irritate, disturb, or make someone slightly angry, especially by repeated acts (बार-बार किसी को तंग, परेशान या गुस्सा दिलाना)",
        synonym: "Irritate",
        antonym: "Please"
    },
    {
        id: "vocab_ingratiate_ant_antagonize",
        word: "ANTAGONIZE",
        type: "Antonym",
        meaning: "To cause someone to become hostile, unfriendly, or angry through actions (अपनी हरकतों से दूसरों में दुश्मनी या विरोध पैदा करना)",
        synonym: "Provoke",
        antonym: "Conciliate"
    },
    {
        id: "vocab_ingratiate_ant_vex",
        word: "VEX",
        type: "Antonym",
        meaning: "To cause someone distress, frustration, or worry over trivial or persistent issues (छोटी-छोटी बातों से मन दुखी, चिंतित या परेशान करना)",
        synonym: "Frustrate",
        antonym: "Soothe"
    },
    {
        id: "vocab_ingratiate_ant_irritate",
        word: "IRRITATE",
        type: "Antonym",
        meaning: "To make someone feel angry, impatient, or annoyed; to inflame physically (चिढ़ पैदा करना, उकसाना या झुंझलाहट उत्पन्न करना)",
        synonym: "Agitate",
        antonym: "Calm"
    },
    {
        id: "vocab_ingratiate_ant_affront",
        word: "AFFRONT",
        type: "Antonym",
        meaning: "An action or remark that causes outrage or offense, insulting someone openly (खुलेआम किसी का अपमान करना या ठेस पहुंचाना)",
        synonym: "Insult",
        antonym: "Respect"
    },

    // --- SET: HEDONIST ---
    {
        id: "vocab_hedonist_main",
        word: "HEDONIST",
        type: "Synonym",
        meaning: "A person who believes that the pursuit of personal pleasure and self-indulgence is the highest good in life (केवल शारीरिक सुख व आनंद को ही जीवन का एकमात्र लक्ष्य मानने वाला)",
        synonym: "Sensualist",
        antonym: "Ascetic"
    },
    {
        id: "vocab_hedonist_syn_selfish",
        word: "SELFISH",
        type: "Synonym",
        meaning: "Lacking consideration for other people, concerned solely with one's personal profit or pleasure (दूसरों की परवाह किए बिना केवल अपने स्वार्थ के बारे में सोचने वाला)",
        synonym: "Egoistic",
        antonym: "Altruistic"
    },
    {
        id: "vocab_hedonist_syn_decadent",
        word: "DECADENT",
        type: "Synonym",
        meaning: "Characterized by or reflecting a state of moral, cultural, or artistic decline due to excessive self-indulgence (विलासिता के कारण चरित्र व नैतिकता के पतन की ओर अग्रसर)",
        synonym: "Corrupt",
        antonym: "Moral"
    },
    {
        id: "vocab_hedonist_syn_debauchee",
        word: "DEBAUCHEE",
        type: "Synonym",
        meaning: "A person given to excessive indulgence in sensual pleasures, often leading to moral degradation (शराब व व्यसनों के अत्यधिक सुख-उपभोग में डूबा हुआ व्यक्ति)",
        synonym: "Profligate",
        antonym: "Puritan"
    },
    {
        id: "vocab_hedonist_syn_sybarite",
        word: "SYBARITE",
        type: "Synonym",
        meaning: "A person who is devoted to luxury, comfort, and sensual pleasures (अत्यधिक ऐशो-आराम, कीमती चीजों व विलासिता का आनंद लेने वाला व्यक्ति)",
        synonym: "Pleasure-seeker",
        antonym: "Ascetic"
    },
    {
        id: "vocab_hedonist_syn_sensualist",
        word: "SENSUALIST",
        type: "Synonym",
        meaning: "A person who prioritizes physical and sensory gratification over moral or spiritual values (इंद्रिय सुखों, अच्छे भोजन व शारीरिक आनंद को प्राथमिक मानने वाला)",
        synonym: "Epicure",
        antonym: "Ascetic"
    },
    {
        id: "vocab_hedonist_syn_voluptuary",
        word: "VOLUPTUARY",
        type: "Synonym",
        meaning: "A person devoted to luxury and the gratification of refined, physical pleasures (महंगे भोजन व शारीरिक सुखों में लिप्त रहने वाला सुख-विलासी व्यक्ति)",
        synonym: "Hedonist",
        antonym: "Ascetic"
    },
    {
        id: "vocab_hedonist_syn_glutton",
        word: "GLUTTON",
        type: "Synonym",
        meaning: "An excessively greedy person who eats or consumes far more food or drink than is healthy or needed (अत्यधिक भोजन व पेय पदार्थों को ठूंसा-ठूंस कर खाने वाला, पेटू)",
        synonym: "Gorged",
        antonym: "Abstainer"
    },
    {
        id: "vocab_hedonist_ant_ascetic",
        word: "ASCETIC",
        type: "Antonym",
        meaning: "A person who practices severe self-discipline and abstains from all worldly pleasures, often for religious reasons (सांसारिक सुख-सुविधाओं का त्याग करने वाला, तपस्वी)",
        synonym: "Monk",
        antonym: "Hedonist"
    },
    {
        id: "vocab_hedonist_ant_prude",
        word: "PRUDE",
        type: "Antonym",
        meaning: "A person who is excessively shocked by or disapproves of matters relating to indulgence or propriety (शारीरिक सुखों व अनौपचारिक व्यवहार से दूरी बनाने वाला अति-रूढ़िवादी)",
        synonym: "Puritan",
        antonym: "Debauchee"
    },
    {
        id: "vocab_hedonist_ant_fuddy_duddy",
        word: "FUDDY-DUDDY",
        type: "Antonym",
        meaning: "A person who is old-fashioned, overly formal, cautious, or resistant to modern ideas and pleasures (पुराने विचारों पर अड़ा रहने वाला व नए आनंद से परहेज करने वाला व्यक्ति)",
        synonym: "Traditionalist",
        antonym: "Modernist"
    },
    {
        id: "vocab_hedonist_ant_killjoy",
        word: "KILLJOY",
        type: "Antonym",
        meaning: "A person who deliberately spoils the joy, fun, or enjoyment of others in a group (दूसरों के खेल, पार्टी या आनंद में रंग में भंग डालने वाला व्यक्ति)",
        synonym: "Spoilsport",
        antonym: "Entertainer"
    },

    // --- SET: RANCID ---
    {
        id: "vocab_rancid_main",
        word: "RANCID",
        type: "Synonym",
        meaning: "Having an extremely unpleasant, stale smell or taste due to the decomposition of fats and oils (तेलीय पदार्थों के सड़ जाने से आने वाली बदबू या बासी स्वाद)",
        synonym: "Offensive",
        antonym: "Fresh"
    },
    {
        id: "vocab_rancid_syn_abhorrent",
        word: "ABHORRENT",
        type: "Synonym",
        meaning: "Inspiring disgust, loathing, or intense hatred; morally repellant (अत्यधिक घृणा या नफरत पैदा करने वाला, निंदनीय)",
        synonym: "Detestable",
        antonym: "Admirable"
    },
    {
        id: "vocab_rancid_syn_abominable",
        word: "ABOMINABLE",
        type: "Synonym",
        meaning: "Causing moral revulsion, horrifyingly bad, or exceptionally unpleasant (अत्यंत घृणास्पद, भयंकर या खराब स्थिति पैदा करने वाला)",
        synonym: "Despicable",
        antonym: "Delightful"
    },
    {
        id: "vocab_rancid_syn_appalling",
        word: "APPALLING",
        type: "Synonym",
        meaning: "Causing shock, dismay, or horror; extremely bad or poor in quality (गहरा सदमा या भय पैदा करने वाला, बहुत ज्यादा खराब)",
        synonym: "Shocking",
        antonym: "Pleasing"
    },
    {
        id: "vocab_rancid_syn_awful",
        word: "AWFUL",
        type: "Synonym",
        meaning: "Extremely bad, unpleasant, or generating fear and discomfort (बहुत ही भयानक, खराब या अरुचिकर स्थिति)",
        synonym: "Dreadful",
        antonym: "Wonderful"
    },
    {
        id: "vocab_rancid_syn_disgusting",
        word: "DISGUSTING",
        type: "Synonym",
        meaning: "Arousing strong revulsion, distaste, or offense to the senses (देखने, सूँघने या चखने में अत्यधिक घिनौना व अप्रिय)",
        synonym: "Revolting",
        antonym: "Appealing"
    },
    {
        id: "vocab_rancid_syn_loathsome",
        word: "LOATHSOME",
        type: "Synonym",
        meaning: "Causing feelings of intense hatred or disgust; repulsive (अत्यधिक घृणित, नापसंद या अरुचिकर व्यक्ति/वस्तु)",
        synonym: "Repulsive",
        antonym: "Lovable"
    },
    {
        id: "vocab_rancid_syn_offensive",
        word: "OFFENSIVE",
        type: "Synonym",
        meaning: "Causing someone to feel deeply hurt, upset, angry, or physically disgusted (आपत्तिजनक, अपमानजनक या बदबूदार)",
        synonym: "Insulting",
        antonym: "Inoffensive"
    },
    {
        id: "vocab_rancid_syn_obnoxious",
        word: "OBNOXIOUS",
        type: "Synonym",
        meaning: "Extremely unpleasant, objectionable, or offensive to others in behavior (अत्यधिक नापसंद या गुस्सा दिलाने वाला बुरा व्यवहार)",
        synonym: "Unpleasant",
        antonym: "Charming"
    },
    {
        id: "vocab_rancid_ant_innocuous",
        word: "INNOCUOUS",
        type: "Antonym",
        meaning: "Not harmful, offensive, or dangerous; entirely safe and mild (हानिरहित, बेहतर एवं किसी को चोट या ठेस न पहुंचाने वाला)",
        synonym: "Harmless",
        antonym: "Harmful"
    },
    {
        id: "vocab_rancid_ant_inoffensive",
        word: "INOFFENSIVE",
        type: "Antonym",
        meaning: "Not causing any harm, objection, or insult to anyone; polite and safe (अनापत्तिजनक, जिससे किसी को ठेस या गुस्सा न पहुंचे)",
        synonym: "Safe",
        antonym: "Offensive"
    },
    {
        id: "vocab_rancid_ant_savory",
        word: "SAVORY",
        type: "Antonym",
        meaning: "Belonging to the category of salty or spicy food; having an appetizing smell or taste (स्वादिष्ट, चटपटा व मनभावन सुगंध वाला भोजन)",
        synonym: "Delicious",
        antonym: "Unpalatable"
    },
    {
        id: "vocab_rancid_ant_alluring",
        word: "ALLURING",
        type: "Antonym",
        meaning: "Powerfully and mysteriously attractive or tempting; drawing positive attention (अत्यंत आकर्षक, मनमोहक एवं लुभावना)",
        synonym: "Enticing",
        antonym: "Repensive"
    },
    {
        id: "vocab_rancid_ant_appealing",
        word: "APPEALING",
        type: "Antonym",
        meaning: "Attractive, interesting, or pleasing to the senses or intellect (आकर्षक, दिलचस्प व मन को भाने वाला)",
        synonym: "Attractive",
        antonym: "Unappealing"
    },
    {
        id: "vocab_rancid_ant_delicious",
        word: "DELICIOUS",
        type: "Antonym",
        meaning: "Highly pleasant to the taste or smell; savory and satisfying (बहुत ज्यादा स्वादिष्ट व जायकेदार भोजन)",
        synonym: "Tasty",
        antonym: "Distasteful"
    },

    // --- SET: RAZE ---
    {
        id: "vocab_raze_main",
        word: "RAZE",
        type: "Synonym",
        meaning: "To completely tear down, destroy, or level a building or settlement to the ground (किसी इमारत, शहर या ढांचे को गिराकर पूरी तरह समतल कर देना)",
        synonym: "Demolish",
        antonym: "Construct"
    },
    {
        id: "vocab_raze_syn_demolish",
        word: "DEMOLISH",
        type: "Synonym",
        meaning: "To pull down or tear apart a structure, or completely refute an argument (किसी भवन/ढांचे को ध्वस्त करना या पूरी तरह नष्ट करना)",
        synonym: "Destroy",
        antonym: "Build"
    },
    {
        id: "vocab_raze_syn_pulldown",
        word: "PULL DOWN",
        type: "Synonym",
        meaning: "To demolish or remove a structure, wall, or physical obstacle completely (पुराने निर्माण या दीवार को तोड़कर नीचे गिराना)",
        synonym: "Dismantle",
        antonym: "Erect"
    },
    {
        id: "vocab_raze_syn_unbuild",
        word: "UNBUILD",
        type: "Synonym",
        meaning: "To take apart or reverse the process of construction; disassemble (बने हुए ढांचे के पुर्जे खोलना या उलटा तोड़ना)",
        synonym: "Dismantle",
        antonym: "Construct"
    },
    {
        id: "vocab_raze_syn_teardown",
        word: "TEAR DOWN",
        type: "Synonym",
        meaning: "To dismantle or destroy a building or structure systematically (इमारत या निर्माण को जानबूझकर पूरी तरह ढा देना)",
        synonym: "Demolish",
        antonym: "Assemble"
    },
    {
        id: "vocab_raze_syn_abolish",
        word: "ABOLISH",
        type: "Synonym",
        meaning: "To formally put an end to a system, practice, law, or institution (किसी पुरानी प्रथा, नियम या कानून को आधिकारिक रूप से समाप्त करना)",
        synonym: "Eliminate",
        antonym: "Establish"
    },
    {
        id: "vocab_raze_syn_destroy",
        word: "DESTROY",
        type: "Synonym",
        meaning: "To end the existence or function of something by damaging or attacking it severely (किसी चीज़ को इस हद तक नुकसान पहुंचाना कि वह पूरी तरह खत्म हो जाए)",
        synonym: "Ruin",
        antonym: "Create"
    },
    {
        id: "vocab_raze_syn_eradicate",
        word: "ERADICATE",
        type: "Synonym",
        meaning: "To destroy completely, put an end to, or wipe out a disease, problem, or weed (किसी बीमारी, समस्या या बुराई को जड़ से उखाड़ फेंकना)",
        synonym: "Eliminate",
        antonym: "Foster"
    },
    {
        id: "vocab_raze_syn_obliterate",
        word: "OBLITERATE",
        type: "Synonym",
        meaning: "To wipe out completely, leaving no trace or memory behind (किसी वस्तु या निशान का नामो-निशान मिटा देना)",
        synonym: "Erase",
        antonym: "Preserve"
    },
    {
        id: "vocab_raze_syn_forge",
        word: "FORGE",
        type: "Synonym",
        meaning: "To create, shape, or produce something through effort and hard work (कड़ी मेहनत से किसी नई चीज़ या संबंध का निर्माण करना)",
        synonym: "Create",
        antonym: "Destroy"
    },
    {
        id: "vocab_raze_ant_build",
        word: "BUILD",
        type: "Antonym",
        meaning: "To construct something by putting parts or materials together over time (सामग्री जोड़कर मकान, ढांचा या आधार तैयार करना)",
        synonym: "Construct",
        antonym: "Demolish"
    },
    {
        id: "vocab_raze_ant_construct",
        word: "CONSTRUCT",
        type: "Antonym",
        meaning: "To build or erect a complex physical structure or system systematically (योजनाबद्ध तरीके से किसी बड़ी संरचना का निर्माण करना)",
        synonym: "Assemble",
        antonym: "Raze"
    },
    {
        id: "vocab_raze_ant_erect",
        word: "ERECT",
        type: "Antonym",
        meaning: "To construct and set upright a building, wall, or monument (इमारत, खंभा या स्मारक खड़ा करना)",
        synonym: "Raise",
        antonym: "Topple"
    },
    {
        id: "vocab_raze_ant_renovate",
        word: "RENOVATE",
        type: "Antonym",
        meaning: "To restore something old or damaged to a good state of repair or modern condition (पुराने या क्षतिग्रस्त मकान की मरम्मत करके उसे नया जैसा बनाना)",
        synonym: "Restore",
        antonym: "Neglect"
    },

    // --- SET: CULPABLE ---
    {
        id: "vocab_culpable_main",
        word: "CULPABLE",
        type: "Synonym",
        meaning: "Deserving blame, censure, or punishment; responsible for a specified wrongdoing or failure (गलती, अपराध या नुकसान का दोषी और जिम्मेदार ठहराया जाने योग्य)",
        synonym: "Blamable",
        antonym: "Blameless"
    },
    {
        id: "vocab_culpable_syn_blamable",
        word: "BLAMABLE",
        type: "Synonym",
        meaning: "Deserving blame, criticism, or responsibility for a fault or mistake (जिस पर आरोप या गलती की जिम्मेदारी डाली जा सके)",
        synonym: "Guilty",
        antonym: "Innocent"
    },
    {
        id: "vocab_culpable_syn_censurable",
        word: "CENSURABLE",
        type: "Synonym",
        meaning: "Deserving strong disapproval, formal reprimand, or severe criticism (कड़ी निंदा या फटकार के योग्य कार्य करने वाला)",
        synonym: "Reprehensible",
        antonym: "Praiseworthy"
    },
    {
        id: "vocab_culpable_syn_reproachable",
        word: "REPROACHABLE",
        type: "Synonym",
        meaning: "Expressing disapproval or fault; deserving censure or blame for misconduct (आरोप लगाने योग्य या निंदा के लायक आचरण)",
        synonym: "Guilty",
        antonym: "Unimpeachable"
    },
    {
        id: "vocab_culpable_syn_reprehensible",
        word: "REPREHENSIBLE",
        type: "Synonym",
        meaning: "Deserving severe condemnation, moral rebuke, or outrage (अत्यंत घृणित व निंदनीय व्यवहार करने वाला दोषी)",
        synonym: "Disgraceful",
        antonym: "Exemplary"
    },
    {
        id: "vocab_culpable_syn_reckless",
        word: "RECKLESS",
        type: "Synonym",
        meaning: "Acting without thinking about dangerous consequences; highly irresponsible (परिणामों की परवाह किए बिना लापरवाही से काम करने वाला)",
        synonym: "Careless",
        antonym: "Cautious"
    },
    {
        id: "vocab_culpable_syn_impeachable",
        word: "IMPEACHABLE",
        type: "Synonym",
        meaning: "Capable of being charged with a crime, misconduct, or severe offense in public office (पद के दुरुपयोग या गंभीर अपराध के तहत महाभियोग लगाने योग्य)",
        synonym: "Accusable",
        antonym: "Irreproachable"
    },
    {
        id: "vocab_culpable_ant_blameless",
        word: "BLAMELESS",
        type: "Antonym",
        meaning: "Free from fault or responsibility for wrongdoing; completely innocent (जिसकी कोई गलती न हो, निष्कलंक एवं निर्दोष)",
        synonym: "Innocent",
        antonym: "Culpable"
    },
    {
        id: "vocab_culpable_ant_faultless",
        word: "FAULTLESS",
        type: "Antonym",
        meaning: "Perfect, containing no flaws or errors; completely free of wrongdoing (बिना किसी त्रुटि, दोष या गलती का, एकदम परिपूर्ण)",
        synonym: "Flawless",
        antonym: "Faulty"
    },
    {
        id: "vocab_culpable_ant_impeccable",
        word: "IMPECCABLE",
        type: "Antonym",
        meaning: "In accordance with highest standards; faultless, stainless, and irreproachable (जिसमें कोई कमी या खामी न निकाली जा सके, दोषरहित)",
        synonym: "Flawless",
        antonym: "Defective"
    },
    {
        id: "vocab_culpable_ant_irreproachable",
        word: "IRREPROACHABLE",
        type: "Antonym",
        meaning: "Beyond criticism or fault; perfectly moral and honest in character or conduct (जिसकी निंदा या जिस पर संदेह न किया जा सके, निंदाहीन व निर्दोष)",
        synonym: "Exemplary",
        antonym: "Censurable"
    },
    // --- SET: OPAQUE ---
  {
    id: "vocab_opaque_main",
    word: "OPAQUE",
    type: "Synonym",
    meaning: "Not allowing light to pass through, or exceptionally difficult to understand, interpret, or see through clearly (प्रकाश को न गुज़रने देने वाला, अस्पष्ट, धुंधला या अपारदर्शी)",
    synonym: "Obscure",
    antonym: "Transparent"
  },
  {
    id: "vocab_opaque_syn_ambiguous",
    word: "AMBIGUOUS",
    type: "Synonym",
    meaning: "Open to more than one interpretation, inexact, or unclear in meaning, leaving room for confusion (दो-मतलब वाला, जिसका अर्थ अस्पष्ट या संदेहास्पद हो)",
    synonym: "Equivocal",
    antonym: "Clear"
  },
  {
    id: "vocab_opaque_syn_cryptic",
    word: "CRYPTIC",
    type: "Synonym",
    meaning: "Having a meaning that is mysterious, hidden, or obscure, making it hard to comprehend (रहस्यमय, गूढ़ व कठिनाई से समझ में आने वाला)",
    synonym: "Enigmatic",
    antonym: "Obvious"
  },
  {
    id: "vocab_opaque_syn_arcane",
    word: "ARCANE",
    type: "Synonym",
    meaning: "Understood or known by only a select few; secret, mysterious, and ancient (अत्यंत गुप्त, रहस्यमय व गिने-चुने लोगों द्वारा समझा जाने वाला)",
    synonym: "Mysterious",
    antonym: "Common"
  },
  {
    id: "vocab_opaque_syn_dark",
    word: "DARK",
    type: "Synonym",
    meaning: "Difficult to understand or interpret due to deep, hidden, or obscure meaning (गहरा, अस्पष्ट एवं गूढ़ अर्थ से भरा हुआ)",
    synonym: "Hidden",
    antonym: "Bright"
  },
  {
    id: "vocab_opaque_syn_enigmatic",
    word: "ENIGMATIC",
    type: "Synonym",
    meaning: "Mysterious, puzzling, and difficult to understand or explain fully (उलझा हुआ, रहस्यमय एवं चकित करने वाला)",
    synonym: "Mystifying",
    antonym: "Simple"
  },
  {
    id: "vocab_opaque_syn_equivocal",
    word: "EQUIVOCAL",
    type: "Synonym",
    meaning: "Open to multiple interpretations, uncertain, or intentionally misleading (द्विअर्थी, संदिग्ध एवं अनिश्चित अर्थ वाला)",
    synonym: "Ambiguous",
    antonym: "Unambiguous"
  },
  {
    id: "vocab_opaque_syn_obscure",
    word: "OBSCURE",
    type: "Synonym",
    meaning: "Not well known, hidden in dark, or difficult to understand clearly (अस्पष्ट, अनजान एवं कठिनाई से समझ आने वाला)",
    synonym: "Vague",
    antonym: "Apparent"
  },
  {
    id: "vocab_opaque_ant_clear",
    word: "CLEAR",
    type: "Antonym",
    meaning: "Easy to see, hear, perceive, or understand without any ambiguity or confusion (साफ, स्पष्ट एवं आसानी से समझ में आने वाला)",
    synonym: "Plain",
    antonym: "Opaque"
  },
  {
    id: "vocab_opaque_ant_accessible",
    word: "ACCESSIBLE",
    type: "Antonym",
    meaning: "Easy to approach, reach, enter, obtain, or understand effortlessly (आसानी से उपलब्ध, सुलभ एवं समझने में सरल)",
    synonym: "Reachable",
    antonym: "Inaccessible"
  },
  {
    id: "vocab_opaque_ant_obvious",
    word: "OBVIOUS",
    type: "Antonym",
    meaning: "Easily perceived or understood; clear, self-evident, and plain to see (प्रत्यक्ष, साफ़ तौर पर नज़र आने वाला, सहज)",
    synonym: "Evident",
    antonym: "Hidden"
  },
  {
    id: "vocab_opaque_ant_unambiguous",
    word: "UNAMBIGUOUS",
    type: "Antonym",
    meaning: "Not open to multiple interpretations; completely clear, direct, and precise (निःसंदेह, एक ही स्पष्ट अर्थ रखने वाला)",
    synonym: "Direct",
    antonym: "Ambiguous"
  },
  {
    id: "vocab_opaque_ant_certain",
    word: "CERTAIN",
    type: "Antonym",
    meaning: "Known for sure, established beyond doubt, or completely reliable (निश्चित, पक्का एवं शंका से रहित)",
    synonym: "Sure",
    antonym: "Uncertain"
  },
  {
    id: "vocab_opaque_ant_pellucid",
    word: "PELLUCID",
    type: "Antonym",
    meaning: "Extremely clear in meaning, expression, or physical style; perfectly transparent (पारदर्शी, आर-पार दिखने वाला, अत्यंत स्पष्ट)",
    synonym: "Transparent",
    antonym: "Murky"
  },
  {
    id: "vocab_opaque_ant_definite",
    word: "DEFINITE",
    type: "Antonym",
    meaning: "Clearly stated or decided; precise and leaving no room for doubt or hesitation (पक्का, निश्चित एवं सटीक)",
    synonym: "Precise",
    antonym: "Vague"
  },

  // --- SET: NUANCE ---
  {
    id: "vocab_nuance_main",
    word: "NUANCE",
    type: "Synonym",
    meaning: "A subtle difference or distinction in shade, meaning, expression, sound, or feeling (अर्थ, रंग, भाव या आवाज़ में बहुत ही बारीक या सूक्ष्म अंतर)",
    synonym: "Subtlety",
    antonym: "Coarseness"
  },
  {
    id: "vocab_nuance_syn_distinction",
    word: "DISTINCTION",
    type: "Synonym",
    meaning: "A clear difference or contrast between similar things or people (दो समान चीजों के बीच का अंतर या भेद)",
    synonym: "Difference",
    antonym: "Similarity"
  },
  {
    id: "vocab_nuance_syn_gradation",
    word: "GRADATION",
    type: "Synonym",
    meaning: "A minute, gradual change or transition from one stage, tone, or state to another (क्रमिक परिवर्तन, चरणों में होने वाला सूक्ष्म बदलाव)",
    synonym: "Transition",
    antonym: "Abruptness"
  },
  {
    id: "vocab_nuance_syn_implication",
    word: "IMPLICATION",
    type: "Synonym",
    meaning: "A conclusion or hint that can be drawn although it is not explicitly stated (निहित अर्थ, अप्रत्यक्ष रूप से दिया गया संकेत)",
    synonym: "Hint",
    antonym: "Explication"
  },
  {
    id: "vocab_nuance_syn_subtlety",
    word: "SUBTLETY",
    type: "Synonym",
    meaning: "The quality of being subtle, delicate, precise, or difficult to analyze immediately (बारीकी, सूक्ष्मता एवं निपुणता)",
    synonym: "Fineness",
    antonym: "Crudeness"
  },
  {
    id: "vocab_nuance_syn_refinement",
    word: "REFINEMENT",
    type: "Synonym",
    meaning: "The process of removing impurities or making something more elegant, precise, and sophisticated (परिष्कार, शुद्धता एवं कार्य में सफाई लाना)",
    synonym: "Polishing",
    antonym: "Roughness"
  },
  {
    id: "vocab_nuance_syn_delicacy",
    word: "DELICACY",
    type: "Synonym",
    meaning: "The quality of being delicate, fine, soft, or requiring sensitive skill (नाज़ुकता, नज़ाकत एवं शिष्टता)",
    synonym: "Tact",
    antonym: "Harshness"
  },
  {
    id: "vocab_nuance_syn_exact",
    word: "EXACT",
    type: "Synonym",
    meaning: "Strictly accurate, precise, and correct in all details without any error (सटीक, बिल्कुल सही व विशिष्ट)",
    synonym: "Precise",
    antonym: "Inexact"
  },
  {
    id: "vocab_nuance_ant_inexact",
    word: "INEXACT",
    type: "Antonym",
    meaning: "Not strictly accurate or precise; lacking detail or precision (असटीक, अस्पष्ट एवं जिसमें शुद्धता न हो)",
    synonym: "Imprecise",
    antonym: "Exact"
  },
  {
    id: "vocab_nuance_ant_coarse",
    word: "COARSE",
    type: "Antonym",
    meaning: "Lacking refinement, delicacy, or fine texture; rough and unpolished (मोटा, खुरदुरा, अशिष्ट या जिसमें बारीकी न हो)",
    synonym: "Rough",
    antonym: "Fine"
  },
  {
    id: "vocab_nuance_ant_rough",
    word: "ROUGH",
    type: "Antonym",
    meaning: "Not smooth, level, or polished; lacking exact detail or refinement (खुरदुरा, कच्चा, अधूरा या कठोर)",
    synonym: "Unrefined",
    antonym: "Smooth"
  },
  {
    id: "vocab_nuance_ant_apparent",
    word: "APPARENT",
    type: "Antonym",
    meaning: "Clearly visible, obvious, or understood directly on the surface (प्रत्यक्ष, साफ़-साफ़ दिखने वाला)",
    synonym: "Obvious",
    antonym: "Hidden"
  },
  {
    id: "vocab_nuance_ant_evident",
    word: "EVIDENT",
    type: "Antonym",
    meaning: "Plain or obvious to the sight or mind; clearly established (स्पष्ट, सिद्ध एवं स्वतः नज़र आने वाला)",
    synonym: "Manifest",
    antonym: "Unclear"
  },

  // --- SET: TAPER ---
  {
    id: "vocab_taper_main",
    word: "TAPER",
    type: "Synonym",
    meaning: "To diminish, reduce, or lessen gradually in thickness, width, intensity, or strength towards one end (धीरे-धीरे पतला होना, घटना या संकुचित होना)",
    synonym: "Dwindle",
    antonym: "Elongate"
  },
  {
    id: "vocab_taper_syn_abate",
    word: "ABATE",
    type: "Synonym",
    meaning: "To become less intense, severe, or widespread; to reduce in amount or degree (तीव्रता या मात्रा में कमी आना, शांत होना)",
    synonym: "Subside",
    antonym: "Increase"
  },
  {
    id: "vocab_taper_syn_decline",
    word: "DECLINE",
    type: "Synonym",
    meaning: "To become smaller, fewer, or weaker; to decrease in quality or health (कम होना, नीचे गिरना या स्थिति बिगड़ना)",
    synonym: "Decrease",
    antonym: "Improve"
  },
  {
    id: "vocab_taper_syn_drain",
    word: "DRAIN",
    type: "Synonym",
    meaning: "To cause water/liquid to run out, or to deplete energy, resources, or strength gradually (धीरे-धीरे खाली करना, सुखाना या ऊर्जा घटाना)",
    synonym: "Deplete",
    antonym: "Fill"
  },
  {
    id: "vocab_taper_syn_dwindle",
    word: "DWINDLE",
    type: "Synonym",
    meaning: "To diminish gradually in size, amount, or strength over a period of time (धीरे-धीरे घटते जाना, कम हो जाना)",
    synonym: "Shrink",
    antonym: "Grow"
  },
  {
    id: "vocab_taper_syn_recede",
    word: "RECEDE",
    type: "Synonym",
    meaning: "To go or move back or further away from a previous position or level (पीछे हटना, घट जाना या दूर चले जाना)",
    synonym: "Withdraw",
    antonym: "Advance"
  },
  {
    id: "vocab_taper_syn_relent",
    word: "RELENT",
    type: "Synonym",
    meaning: "To abandon a harsh intention or cruel treatment; to soften in temper or yield (दयालु होना, ढील देना या नर्म पड़ना)",
    synonym: "Yield",
    antonym: "Persist"
  },
  {
    id: "vocab_taper_syn_ease",
    word: "EASE",
    type: "Synonym",
    meaning: "To make something less serious, painful, or burdensome; to reduce tension (दर्द या कठिनाई को हल्का या सरल करना)",
    synonym: "Relieve",
    antonym: "Aggravate"
  },
  {
    id: "vocab_taper_syn_ebb",
    word: "EBB",
    type: "Synonym",
    meaning: "The movement of the tide out to sea, or the gradual decline of energy, power, or emotion (भाटा आना, शक्ति का घटना या कम होना)",
    synonym: "Wane",
    antonym: "Flow"
  },
  {
    id: "vocab_taper_ant_emerge",
    word: "EMERGE",
    type: "Antonym",
    meaning: "To move out of or away from something and come into view; to become known (उभरना, बाहर निकलना या सामने आना)",
    synonym: "Appear",
    antonym: "Disappear"
  },
  {
    id: "vocab_taper_ant_appear",
    word: "APPEAR",
    type: "Antonym",
    meaning: "To come into sight, become visible, or make a public presence (प्रकट होना, दिखाई देना या सामने आना)",
    synonym: "Surface",
    antonym: "Vanish"
  },
  {
    id: "vocab_taper_ant_lengthen",
    word: "LENGTHEN",
    type: "Antonym",
    meaning: "To make or become longer in duration, distance, or size (लंबा करना, अवधि बढ़ाना या विस्तार करना)",
    synonym: "Extend",
    antonym: "Shorten"
  },
  {
    id: "vocab_taper_ant_distend",
    word: "DISTEND",
    type: "Antonym",
    meaning: "To swell or expand out from internal pressure or bloating (अंदरूनी दबाव से फूलना या फैलना)",
    synonym: "Swell",
    antonym: "Shrink"
  },
  {
    id: "vocab_taper_ant_elongate",
    word: "ELONGATE",
    type: "Antonym",
    meaning: "To make something longer in relation to its width; stretch out (खींचकर लंबा करना)",
    synonym: "Stretch",
    antonym: "Shorten"
  },
  {
    id: "vocab_taper_ant_show_up",
    word: "SHOW UP",
    type: "Antonym",
    meaning: "To arrive or appear at a place, especially unexpectedly or late (प्रकट होना, उपस्थित होना या पहुंचना)",
    synonym: "Arrive",
    antonym: "Depart"
  },

  // --- SET: INDIGENOUS ---
  {
    id: "vocab_indigenous_main",
    word: "INDIGENOUS",
    type: "Synonym",
    meaning: "Originating or occurring naturally in a particular place or ecosystem; native (किसी विशेष स्थान या देश में ही जन्म लेने वाला, स्वदेशी या स्थानीय)",
    synonym: "Native",
    antonym: "Exotic"
  },
  {
    id: "vocab_indigenous_syn_domestic",
    word: "DOMESTIC",
    type: "Synonym",
    meaning: "Relating to the running of a home or existing within a specific country (घरेलू, देश का आंतरिक या स्थानीय)",
    synonym: "Internal",
    antonym: "Foreign"
  },
  {
    id: "vocab_indigenous_syn_aboriginal",
    word: "ABORIGINAL",
    type: "Synonym",
    meaning: "Inhabiting or existing in a land from the earliest known times; native inhabitants (मूल निवासी, आदिकालीन या स्थानीय)",
    synonym: "Native",
    antonym: "Settler"
  },
  {
    id: "vocab_indigenous_syn_autonomous",
    word: "AUTONOMOUS",
    type: "Synonym",
    meaning: "Having the freedom to govern itself or control its own affairs independently (स्वशासी, आत्मनिर्भर एवं स्वतंत्र)",
    synonym: "Independent",
    antonym: "Dependent"
  },
  {
    id: "vocab_indigenous_syn_endemic",
    word: "ENDEMIC",
    type: "Synonym",
    meaning: "Regularly found among particular people or in a certain area/ecosystem (विशेष क्षेत्र या स्थान में ही पाया जाने वाला)",
    synonym: "Local",
    antonym: "Epidemic"
  },
  {
    id: "vocab_indigenous_syn_regional",
    word: "REGIONAL",
    type: "Synonym",
    meaning: "Relating to or characteristic of a particular geographic area or territory (क्षेत्रीय, किसी विशेष इलाके से संबंधित)",
    synonym: "Local",
    antonym: "Global"
  },
  {
    id: "vocab_indigenous_ant_exotic",
    word: "EXOTIC",
    type: "Antonym",
    meaning: "Originating in or characteristic of a distant, foreign country; striking or colorful (विदेशी, बाहरी या अनोखा)",
    synonym: "Foreign",
    antonym: "Indigenous"
  },
  {
    id: "vocab_indigenous_ant_strange",
    word: "STRANGE",
    type: "Antonym",
    meaning: "Unusual, extraordinary, or not previously known/experienced; unfamiliar (अजीब, अपरिचित या अनोखा)",
    synonym: "Odd",
    antonym: "Familiar"
  },
  {
    id: "vocab_indigenous_ant_expatriate",
    word: "EXPATRIATE",
    type: "Antonym",
    meaning: "A person who lives outside their native country, voluntarily or by force (प्रवासी, अपनी मातृभूमि छोड़कर बाहर रहने वाला)",
    synonym: "Emigrant",
    antonym: "Native"
  },
  {
    id: "vocab_indigenous_ant_immigrant",
    word: "IMMIGRANT",
    type: "Antonym",
    meaning: "A person who comes to live permanently in a foreign country (दूसरे देश से आकर स्थायी रूप से बसने वाला प्रवासी)",
    synonym: "Settler",
    antonym: "Native"
  },
  {
    id: "vocab_indigenous_ant_alien",
    word: "ALIEN",
    type: "Antonym",
    meaning: "Belonging to a foreign country, race, or species; unfamiliar and unnatural (विदेशी, गैर-देशी या अपरिचित)",
    synonym: "Foreign",
    antonym: "Native"
  },

  // --- SET: GALLING ---
  {
    id: "vocab_galling_main",
    word: "GALLING",
    type: "Synonym",
    meaning: "Causing extreme annoyance, humiliation, irritation, or resentment (कष्टदायक, चिढ़ाने वाला या अपमानजनक अनुभव कराने वाला)",
    synonym: "Irksome",
    antonym: "Delightful"
  },
  {
    id: "vocab_galling_syn_abrasive",
    word: "ABRASIVE",
    type: "Synonym",
    meaning: "Rough in texture causing friction, or harsh and unpleasant in manner/behavior (खुरदुरा, चुभने वाला या कड़ा व्यवहार करने वाला)",
    synonym: "Harsh",
    antonym: "Gentle"
  },
  {
    id: "vocab_galling_syn_irksome",
    word: "IRKSOME",
    type: "Synonym",
    meaning: "Annoying, tedious, or causing irritation and boredom over time (चिढ़ाने वाला, थकाऊ व कष्टकारी)",
    synonym: "Annoying",
    antonym: "Pleasant"
  },
  {
    id: "vocab_galling_syn_carking",
    word: "CARKING",
    type: "Synonym",
    meaning: "Causing persistent distress, anxiety, or mental discomfort (कष्टदायक, मन में चिंता या दुख पैदा करने वाला)",
    synonym: "Distressing",
    antonym: "Soothing"
  },
  {
    id: "vocab_galling_syn_vexing",
    word: "VEXING",
    type: "Synonym",
    meaning: "Causing annoyance, frustration, or worry regarding unsolved issues (परेशान करने वाला, झुंझलाहट पैदा करने वाला)",
    synonym: "Frustrating",
    antonym: "Calming"
  },
  {
    id: "vocab_galling_syn_rebarbative",
    word: "REBARBATIVE",
    type: "Synonym",
    meaning: "Unattractive, repellent, or causing offense and irritation (अप्रिय, चिढ़ाने वाला या घिनौना)",
    synonym: "Repellent",
    antonym: "Attractive"
  },
  {
    id: "vocab_galling_syn_chafing",
    word: "CHAFING",
    type: "Synonym",
    meaning: "Irritating or causing bodily/mental discomfort through friction or repetition (रगड़ने वाला, खींचने वाला या तंग करने वाला)",
    synonym: "Rubbing",
    antonym: "Soothing"
  },
  {
    id: "vocab_galling_syn_aggravating",
    word: "AGGRAVATING",
    type: "Synonym",
    meaning: "Making a problem worse or causing extreme irritation and anger (उत्तेजक, स्थिति को और बिगाड़ने वाला या कष्टदायक)",
    synonym: "Exasperating",
    antonym: "Soothing"
  },
  {
    id: "vocab_galling_ant_delightful",
    word: "DELIGHTFUL",
    type: "Antonym",
    meaning: "Causing great pleasure, joy, or satisfaction; charming and agreeable (सुखद, आनंददायक एवं मन को प्रसन्न करने वाला)",
    synonym: "Charming",
    antonym: "Galling"
  },
  {
    id: "vocab_galling_ant_pleasing",
    word: "PLEASING",
    type: "Antonym",
    meaning: "Giving a feeling of satisfaction, enjoyment, or agreement (सुखद, मनभावन एवं खुशी देने वाला)",
    synonym: "Satisfying",
    antonym: "Annoying"
  },
  {
    id: "vocab_galling_ant_gratifying",
    word: "GRATIFYING",
    type: "Antonym",
    meaning: "Giving pleasure or satisfaction, especially because of achievement (संतोषजनक, आनंददायी व सुख देने वाला)",
    synonym: "Rewarding",
    antonym: "Frustrating"
  },
  {
    id: "vocab_galling_ant_endurable",
    word: "ENDURABLE",
    type: "Antonym",
    meaning: "Able to be tolerated, endured, or withstand without excessive pain (सहनीय, बर्दाश्त करने योग्य)",
    synonym: "Tolerable",
    antonym: "Unbearable"
  },
  // --- SET: ALTRUISTIC ---
  {
    id: "vocab_altruistic_main",
    word: "ALTRUISTIC",
    type: "Synonym",
    meaning: "Showing a selfless concern for the well-being and happiness of others without seeking personal gain (दूसरों के हित व कल्याण के लिए निस्वार्थ भावना से कार्य करने वाला, परोपकारी)",
    synonym: "Unselfish",
    antonym: "Selfish"
  },
  {
    id: "vocab_altruistic_syn_unselfish",
    word: "UNSELFISH",
    type: "Synonym",
    meaning: "Willing to put the needs, desires, and interests of others before one's own (स्वार्थ से रहित, दूसरों की भलाई को प्राथमिकता देने वाला)",
    synonym: "Generous",
    antonym: "Self-centered"
  },
  {
    id: "vocab_altruistic_syn_beneficent",
    word: "BENEFICENT",
    type: "Synonym",
    meaning: "Doing good, performing active acts of kindness, charity, and generosity for society (दूसरों की मदद व दान-पुण्य करने वाला, दयालु एवं परोपकारी)",
    synonym: "Kind",
    antonym: "Pitiless"
  },
  {
    id: "vocab_altruistic_syn_benevolent",
    word: "BENEVOLENT",
    type: "Synonym",
    meaning: "Well-meaning, kindly, and motivated by a sincere desire to promote others' happiness (दूसरों के प्रति मन में दया व कल्याण की भावना रखने वाला)",
    synonym: "Charitable",
    antonym: "Malevolent"
  },
  {
    id: "vocab_altruistic_syn_philanthropic",
    word: "PHILANTHROPIC",
    type: "Synonym",
    meaning: "Seeking to promote the welfare of others, especially through generous donations to good causes (मानवता की सेवा व सामाजिक कार्यों के लिए दान देने वाला)",
    synonym: "Humanitarian",
    antonym: "Misanthropic"
  },
  {
    id: "vocab_altruistic_syn_generous",
    word: "GENEROUS",
    type: "Synonym",
    meaning: "Willing to give more money, time, or help than is strictly necessary or expected (खुले दिल का, दानशील एवं विशाल हृदय वाला)",
    synonym: "Bountiful",
    antonym: "Stingy"
  },
  {
    id: "vocab_altruistic_syn_magnanimous",
    word: "MAGNANIMOUS",
    type: "Synonym",
    meaning: "Generous or forgiving, especially toward a rival, enemy, or someone less powerful (उदार हृदय वाला, जो दूसरों की गलतियों को आसानी से माफ कर दे)",
    synonym: "Forgiving",
    antonym: "Resentful"
  },
  {
    id: "vocab_altruistic_syn_munificent",
    word: "MUNIFICENT",
    type: "Synonym",
    meaning: "Extremely generous, lavish, and bountiful in giving gifts, money, or help (अत्यधिक विशाल दान देने वाला, महान दाता)",
    synonym: "Lavish",
    antonym: "Parsimonious"
  },
  {
    id: "vocab_altruistic_ant_self_centered",
    word: "SELF-CENTERED",
    type: "Antonym",
    meaning: "Preoccupied solely with one's own desires, needs, and interests to the exclusion of others (केवल अपने बारे में सोचने वाला, स्वकेंद्रित)",
    synonym: "Egoistic",
    antonym: "Altruistic"
  },
  {
    id: "vocab_altruistic_ant_niggardly",
    word: "NIGGARDLY",
    type: "Antonym",
    meaning: "Reluctant to give, spend, or share money; excessively stingy and mean (पैसे खर्च करने में कंजूसी करने वाला, संकुचित मनोवृत्ति का)",
    synonym: "Miserly",
    antonym: "Munificent"
  },
  {
    id: "vocab_altruistic_ant_parsimonious",
    word: "PARSIMONIOUS",
    type: "Antonym",
    meaning: "Extremely unwilling to spend money or use resources, excessively frugal (बेहद कंजूस, जो जरूरत पर भी पैसा न खर्च करे)",
    synonym: "Frugal",
    antonym: "Generous"
  },
  {
    id: "vocab_altruistic_ant_self_concerned",
    word: "SELF-CONCERNED",
    type: "Antonym",
    meaning: "Focused entirely on one's own personal advantage and safety without caring for others (खुद के फायदे व भलाई में ही व्यस्त रहने वाला)",
    synonym: "Self-seeking",
    antonym: "Altruistic"
  },
  {
    id: "vocab_altruistic_ant_selfish",
    word: "SELFISH",
    type: "Antonym",
    meaning: "Lacking consideration for other people, motivated purely by personal gain (दूसरों की चिंता किए बिना केवल अपने स्वार्थ के लिए काम करने वाला)",
    synonym: "Egoistic",
    antonym: "Unselfish"
  },
  {
    id: "vocab_altruistic_ant_pitiless",
    word: "PITILESS",
    type: "Antonym",
    meaning: "Showing no pity, sympathy, or mercy toward suffering people (निर्दयी, दयाहीन एवं कठोर दिल वाला)",
    synonym: "Ruthless",
    antonym: "Merciful"
  },

  // --- SET: ANTITHESIS ---
  {
    id: "vocab_antithesis_main",
    word: "ANTITHESIS",
    type: "Synonym",
    meaning: "A person or thing that is the direct opposite or reverse of someone or something else (विपरीत वस्तु, व्यक्ति या एकदम उल्टा विचार)",
    synonym: "Opposite",
    antonym: "Analogue"
  },
  {
    id: "vocab_antithesis_syn_reverse",
    word: "REVERSE",
    type: "Synonym",
    meaning: "Going in or turning toward the opposite direction, order, or condition (उल्टा, विपरीत दिशा या स्थिति)",
    synonym: "Opposite",
    antonym: "Same"
  },
  {
    id: "vocab_antithesis_syn_antipode",
    word: "ANTIPODE",
    type: "Synonym",
    meaning: "The exact opposite or contrary of something, often used for geographical positions (बिल्कुल विपरीत स्थिति, ठीक उल्टा स्थान या विचार)",
    synonym: "Direct-opposite",
    antonym: "Identical"
  },
  {
    id: "vocab_antithesis_syn_contrary",
    word: "CONTRARY",
    type: "Synonym",
    meaning: "Opposed in nature, direction, character, or purpose to something specified (विरोधी, उल्टा या एकदम विपरीत स्वभाव का)",
    synonym: "Conflicting",
    antonym: "Similar"
  },
  {
    id: "vocab_antithesis_syn_obverse",
    word: "OBVERSE",
    type: "Synonym",
    meaning: "The side of a coin or medal carrying the head, or the counterpart/opposite side of an argument (सिक्के का पहला पक्ष, पलटा हुआ या उल्टा पहलू)",
    synonym: "Counterpart",
    antonym: "Reverse"
  },
  {
    id: "vocab_antithesis_syn_inverse",
    word: "INVERSE",
    type: "Synonym",
    meaning: "Inverted or reversed in position, order, relation, or effect (उल्टा संबंध या विपरीत प्रभाव डालने वाला)",
    synonym: "Reversed",
    antonym: "Direct"
  },
  {
    id: "vocab_antithesis_syn_antonym",
    word: "ANTONYM",
    type: "Synonym",
    meaning: "A word that expresses a meaning directly opposed to the meaning of another word (विपरीतार्थक शब्द, विलोम)",
    synonym: "Opposite-word",
    antonym: "Synonym"
  },
  {
    id: "vocab_antithesis_syn_counterpoint",
    word: "COUNTERPOINT",
    type: "Synonym",
    meaning: "An argument, idea, or theme that forms a contrasting or balancing effect to another (विरोधाभास दर्शाने वाला तर्क या प्रतिउत्तर)",
    synonym: "Contrast",
    antonym: "Agreement"
  },
  {
    id: "vocab_antithesis_syn_replica",
    word: "REPLICA",
    type: "Synonym",
    meaning: "An exact copy or reproduction of a work of art, building, or object (किसी वस्तु या मूर्ति की हूबहू प्रतिकृति/नकल)",
    synonym: "Duplicate",
    antonym: "Original"
  },
  {
    id: "vocab_antithesis_syn_synonym",
    word: "SYNONYM",
    type: "Synonym",
    meaning: "A word or phrase that means exactly or nearly the same as another word (समानार्थी शब्द, पर्यायवाची)",
    synonym: "Equivalent",
    antonym: "Antonym"
  },
  {
    id: "vocab_antithesis_syn_carbon_copy",
    word: "CARBON COPY",
    type: "Synonym",
    meaning: "An exact duplicate or reproduction of something in full detail (हूबहू नकल, बिल्कुल एक जैसा रूप)",
    synonym: "Duplicate",
    antonym: "Original"
  },
  {
    id: "vocab_antithesis_syn_counterpart",
    word: "COUNTERPART",
    type: "Synonym",
    meaning: "A person or thing holding a position corresponding to that of another in a different place (समान भूमिका निभाने वाला व्यक्ति या वस्तु)",
    synonym: "Equivalent",
    antonym: "Opposite"
  },
  {
    id: "vocab_antithesis_ant_analogue",
    word: "ANALOGUE",
    type: "Antonym",
    meaning: "A person, thing, or concept that is comparable or similar to another (समान वस्तु, उपमा या तुलना करने योग्य चीज)",
    synonym: "Parallel",
    antonym: "Antithesis"
  },

  // --- SET: DORMANT ---
  {
    id: "vocab_dormant_main",
    word: "DORMANT",
    type: "Synonym",
    meaning: "In a state of rest, temporary inactivity, or sleep; not currently active or functioning (सुप्त, निष्क्रिय, अस्थायी रूप से सोया हुआ)",
    synonym: "Inactive",
    antonym: "Active"
  },
  {
    id: "vocab_dormant_syn_asleep",
    word: "ASLEEP",
    type: "Synonym",
    meaning: "In a state of sleep; completely inactive, unresponsive, or resting (सोया हुआ, बेखबर)",
    synonym: "Resting",
    antonym: "Awake"
  },
  {
    id: "vocab_dormant_syn_dozing",
    word: "DOZING",
    type: "Synonym",
    meaning: "Sleeping lightly or resting fitfully for a short period of time (ऊंगता हुआ, हल्की नींद में होना)",
    synonym: "Napping",
    antonym: "Alert"
  },
  {
    id: "vocab_dormant_syn_inactive",
    word: "INACTIVE",
    type: "Synonym",
    meaning: "Not engaging in physical activity, operation, or movement; idle (निष्क्रिय, बिना किसी कामकाज का)",
    synonym: "Idle",
    antonym: "Active"
  },
  {
    id: "vocab_dormant_syn_inert",
    word: "INERT",
    type: "Synonym",
    meaning: "Lacking the ability or strength to move or act; chemically or physically motionless (गतिहीन, अक्रिय या बिना हरकत का)",
    synonym: "Motionless",
    antonym: "Dynamic"
  },
  {
    id: "vocab_dormant_syn_latent",
    word: "LATENT",
    type: "Synonym",
    meaning: "Existing but not yet developed, manifest, or active; concealed or hidden talent (अव्यक्त, छिपा हुआ गुण जो समय आने पर सामने आए)",
    synonym: "Hidden",
    antonym: "Manifest"
  },
  {
    id: "vocab_dormant_syn_in_operating",
    word: "IN OPERATING",
    type: "Synonym",
    meaning: "Not currently functioning, performing work, or active in service (कार्यरत न होना, बंद पड़ा होना)",
    synonym: "Disabled",
    antonym: "Operational"
  },
  {
    id: "vocab_dormant_syn_napping",
    word: "NAPPING",
    type: "Synonym",
    meaning: "Sleeping lightly or briefly, especially during daylight hours (झपकी लेता हुआ, थोड़ी देर विश्राम करता हुआ)",
    synonym: "Resting",
    antonym: "Awake"
  },
  {
    id: "vocab_dormant_syn_slumbering",
    word: "SLUMBERING",
    type: "Synonym",
    meaning: "Sleeping deeply, peacefully, or quietly in a state of deep rest (गहरी नींद में सोया हुआ, शांत)",
    synonym: "Sleeping",
    antonym: "Roused"
  },
  {
    id: "vocab_dormant_ant_active",
    word: "ACTIVE",
    type: "Antonym",
    meaning: "Engaged in action or operation; moving or working continuously (सक्रिय, क्रियाशील एवं कामकाज में लगा हुआ)",
    synonym: "Energetic",
    antonym: "Dormant"
  },
  {
    id: "vocab_dormant_ant_awake",
    word: "AWAKE",
    type: "Antonym",
    meaning: "Not sleeping; conscious, alert, and aware of surroundings (जाग्रत, होश में एवं चैतन्य)",
    synonym: "Conscious",
    antonym: "Asleep"
  },
  {
    id: "vocab_dormant_ant_wakeful",
    word: "WAKEFUL",
    type: "Antonym",
    meaning: "Unable to sleep, or remaining vigilant and conscious during nighttime (जागते हुए, सतर्क एवं सचेत)",
    synonym: "Vigilant",
    antonym: "Drowsy"
  },
  {
    id: "vocab_dormant_ant_conscious",
    word: "CONSCIOUS",
    type: "Antonym",
    meaning: "Aware of and responding to one's surroundings; awake and mentally alert (सचेत, जागरूक एवं होशोहवास में रहने वाला)",
    synonym: "Aware",
    antonym: "Unconscious"
  },
  {
    id: "vocab_dormant_ant_operating",
    word: "OPERATING",
    type: "Antonym",
    meaning: "In functioning condition, working smoothly, or active in execution (कार्यरत, चालू हालत में)",
    synonym: "Working",
    antonym: "Inoperative"
  },

  // --- SET: PRECOCIOUS ---
  {
    id: "vocab_precocious_main",
    word: "PRECOCIOUS",
    type: "Synonym",
    meaning: "Having developed certain abilities, mental capacity, or talents at an earlier age than usual (कम उम्र में ही बुद्धि, प्रतिभा या परिपक्वता हासिल कर लेने वाला, समय से पहले प्रौढ़)",
    synonym: "Premature",
    antonym: "Tardy"
  },
  {
    id: "vocab_precocious_syn_premature",
    word: "PREMATURE",
    type: "Synonym",
    meaning: "Occurring, done, or developing before the proper, expected, or usual time (असमय, वक्त से पहले होने वाला)",
    synonym: "Early",
    antonym: "Late"
  },
  {
    id: "vocab_precocious_syn_unanticipated",
    word: "UNANTICIPATED",
    type: "Synonym",
    meaning: "Not expected, foreseen, or predicted in advance (अप्रत्याशित, जिसके होने की पहले से उम्मीद न हो)",
    synonym: "Unexpected",
    antonym: "Expected"
  },
  {
    id: "vocab_precocious_syn_abrupt",
    word: "ABRUPT",
    type: "Synonym",
    meaning: "Sudden, unexpected, and often brief or curt in speech or action (अचानक, बिना चेतावनी का या हड़बड़ी में हुआ)",
    synonym: "Sudden",
    antonym: "Gradual"
  },
  {
    id: "vocab_precocious_syn_unexpected",
    word: "UNEXPECTED",
    type: "Synonym",
    meaning: "Surprising, coming as a shock, or not foreseen beforehand (अचानक सामने आने वाला, अनपेक्षित)",
    synonym: "Unforeseen",
    antonym: "Predicted"
  },
  {
    id: "vocab_precocious_syn_untimely",
    word: "UNTIMELY",
    type: "Synonym",
    meaning: "Happening or done at an unsuitable, inappropriate, or premature time (समय से पहले, बेवक्त या असामयिक)",
    synonym: "Ill-timed",
    antonym: "Timely"
  },
  {
    id: "vocab_precocious_ant_late",
    word: "LATE",
    type: "Antonym",
    meaning: "Occurring, arriving, or done after the expected, proper, or usual time (देर से होने वाला, विलंबित)",
    synonym: "Delayed",
    antonym: "Early"
  },
  {
    id: "vocab_precocious_ant_anticipated",
    word: "ANTICIPATED",
    type: "Antonym",
    meaning: "Expected, foreseen, or predicted to happen at a certain moment (पूर्वानुमानित, जिसकी पहले से उम्मीद थी)",
    synonym: "Expected",
    antonym: "Unexpected"
  },
  {
    id: "vocab_precocious_ant_belated",
    word: "BELATED",
    type: "Antonym",
    meaning: "Coming or happening later than should have been the case; delayed (विलंबित, देर से मिलने वाला)",
    synonym: "Overdue",
    antonym: "Prompt"
  },
  {
    id: "vocab_precocious_ant_tardy",
    word: "TARDY",
    type: "Antonym",
    meaning: "Delaying or slow to act, move, or respond; arriving late (सुस्त, देर करने वाला या विलंबित)",
    synonym: "Slow",
    antonym: "Prompt"
  },
  {
    id: "vocab_precocious_ant_detained",
    word: "DETAINED",
    type: "Antonym",
    meaning: "Kept back, slowed down, or delayed due to unforeseen circumstances (रुकावट में फंसा हुआ, रोका गया)",
    synonym: "Delayed",
    antonym: "Released"
  },

  // --- SET: INDOLENCE ---
  {
    id: "vocab_indolence_main",
    word: "INDOLENCE",
    type: "Synonym",
    meaning: "The quality or state of avoiding work, physical activity, or effort; habitual laziness (काम करने से बचने की आदत, आलस्य या सुस्ती)",
    synonym: "Laziness",
    antonym: "Diligence"
  },
  {
    id: "vocab_indolence_syn_laziness",
    word: "LAZINESS",
    type: "Synonym",
    meaning: "The state of being unwilling to work or use energy; idleness (आलस्य, काम न करने की इच्छा)",
    synonym: "Indolence",
    antonym: "Industriousness"
  },
  {
    id: "vocab_indolence_syn_inertia",
    word: "INERTIA",
    type: "Synonym",
    meaning: "A tendency to do nothing or to remain unchanged; physical or mental motionlessness (जड़ता, अक्रियता, बदलाव न चाहने की प्रवृत्ति)",
    synonym: "Inactivity",
    antonym: "Activity"
  },
  {
    id: "vocab_indolence_syn_sloth",
    word: "SLOTH",
    type: "Synonym",
    meaning: "Reluctance to work or make an effort; extreme laziness and apathy (प्रमाद, भारी आलस्य)",
    synonym: "Sluggishness",
    antonym: "Diligence"
  },
  {
    id: "vocab_indolence_syn_apathy",
    word: "APATHY",
    type: "Synonym",
    meaning: "Lack of interest, enthusiasm, concern, or emotion regarding life or tasks (उदासीनता, निराशा व कोई उत्साह न होना)",
    synonym: "Indifference",
    antonym: "Enthusiasm"
  },
  {
    id: "vocab_indolence_syn_lethargy",
    word: "LETHARGY",
    type: "Synonym",
    meaning: "A lack of energy and enthusiasm; abnormal drowsiness or tiredness (काहिली, सुस्ती व थकावट का भाव)",
    synonym: "Torpor",
    antonym: "Vigor"
  },
  {
    id: "vocab_indolence_syn_sluggishness",
    word: "SLUGGISHNESS",
    type: "Synonym",
    meaning: "A state of moving or operating slowly, lacking energy and speed (मंदी, धीमापन व सुस्ती)",
    synonym: "Slowness",
    antonym: "Alacrity"
  },
  {
    id: "vocab_indolence_syn_dallying",
    word: "DALLYING",
    type: "Synonym",
    meaning: "Wasting time or acting slowly and indecisively in completing a task (समय गंवाना, विलंब करना)",
    synonym: "Loitering",
    antonym: "Hurrying"
  },
  {
    id: "vocab_indolence_syn_loafing",
    word: "LOAFING",
    type: "Synonym",
    meaning: "Spending time in an idle, aimless, or relaxed manner without doing useful work (आलस में समय बिताना, आवारागर्दी/निठल्ला बैठना)",
    synonym: "Idling",
    antonym: "Working"
  },
  {
    id: "vocab_indolence_ant_drive",
    word: "DRIVE",
    type: "Antonym",
    meaning: "An innate determination and motivation to achieve a specific goal or succeed (प्रेरणा, काम करने का अंदरूनी उत्साह व धुन)",
    synonym: "Motivation",
    antonym: "Indolence"
  },
  {
    id: "vocab_indolence_ant_industrious",
    word: "INDUSTRIOUS",
    type: "Antonym",
    meaning: "Hardworking, diligent, and constantly devoted to productive effort (मेहनती, परिश्रमी)",
    synonym: "Hardworking",
    antonym: "Lazy"
  },
  {
    id: "vocab_indolence_ant_ambition",
    word: "AMBITION",
    type: "Antonym",
    meaning: "A strong desire to achieve success, power, or distinction through hard work (महत्वाकांक्षा, जीवन में आगे बढ़ने की लगन)",
    synonym: "Aspiration",
    antonym: "Apathy"
  },
  {
    id: "vocab_indolence_ant_hustle",
    word: "HUSTLE",
    type: "Antonym",
    meaning: "To work energetically, rapidly, and vigorously to achieve goals (दिन-रात मेहनत करना, जी-तोड़ प्रयास करना)",
    synonym: "Strive",
    antonym: "Loaf"
  },
  {
    id: "vocab_indolence_ant_diligence",
    word: "DILIGENCE",
    type: "Antonym",
    meaning: "Careful and persistent work or effort devoted to completing tasks accurately (सतत परिश्रम, लगन व सतर्कता)",
    synonym: "Assiduity",
    antonym: "Indolence"
  },
  // --- SET: PLACID ---
  {
    id: "vocab_placid_main",
    word: "PLACID",
    type: "Synonym",
    meaning: "Calm and peaceful; not easily upset, excited, or irritated; having a tranquil demeanor (शांत, स्थिर व सौम्य स्वभाव वाला)",
    synonym: "Serene",
    antonym: "Agitated"
  },
  {
    id: "vocab_placid_syn_composed",
    word: "COMPOSED",
    type: "Synonym",
    meaning: "Calm and self-controlled, especially in stressful or challenging situations (संयमित, गंभीर एवं आपा न खोने वाला)",
    synonym: "Calm",
    antonym: "Flustered"
  },
  {
    id: "vocab_placid_syn_cool",
    word: "COOL",
    type: "Synonym",
    meaning: "Calm and unflustered under stress, displaying no sign of panic or fear (ठंडा, शांत एवं तनावमुक्त)",
    synonym: "Collected",
    antonym: "Perturbed"
  },
  {
    id: "vocab_placid_syn_limpid",
    word: "LIMPID",
    type: "Synonym",
    meaning: "Completely clear, calm, transparent, and easy to see through or understand (स्वच्छ, साफ, निर्मल एवं पारदर्शी)",
    synonym: "Clear",
    antonym: "Murky"
  },
  {
    id: "vocab_placid_syn_sedate",
    word: "SEDATE",
    type: "Synonym",
    meaning: "Calm, quiet, dignified, and unhurried in manner; not easily excited (शांत, स्थिर, गंभीर व संयमित)",
    synonym: "Dignified",
    antonym: "Excited"
  },
  {
    id: "vocab_placid_syn_serene",
    word: "SERENE",
    type: "Synonym",
    meaning: "Calm, peaceful, untroubled, and completely free from stress or noise (निर्मल, शांत एवं तनावमुक्त)",
    synonym: "Tranquil",
    antonym: "Turbulent"
  },
  {
    id: "vocab_placid_syn_tranquil",
    word: "TRANQUIL",
    type: "Synonym",
    meaning: "Free from disturbance, noise, or chaos; quiet and peaceful (शांत, शांति से भरपूर एवं सौम्य)",
    synonym: "Peaceful",
    antonym: "Disturbed"
  },
  {
    id: "vocab_placid_syn_unperturbed",
    word: "UNPERTURBED",
    type: "Synonym",
    meaning: "Not worried, upset, or distracted by unexpected events or problems (अविचलित, शांत एवं न घबराने वाला)",
    synonym: "Unbothered",
    antonym: "Discomposed"
  },
  {
    id: "vocab_placid_ant_agitated",
    word: "AGITATED",
    type: "Antonym",
    meaning: "Feeling or appearing troubled, nervous, restless, or excited (उत्तेजित, व्याकुल एवं परेशान)",
    synonym: "Restless",
    antonym: "Placid"
  },
  {
    id: "vocab_placid_ant_disturbed",
    word: "DISTURBED",
    type: "Antonym",
    meaning: "Emotionally unsettled, worried, or upset due to troublesome events (व्यथित, परेशान एवं मानसिक रूप से अशांत)",
    synonym: "Upset",
    antonym: "Composed"
  },
  {
    id: "vocab_placid_ant_perturbed",
    word: "PERTURBED",
    type: "Antonym",
    meaning: "Anxious, unsettled, or bothered in mind by an unexpected disruption (विचलित, चिंतित एवं अशांत)",
    synonym: "Anxious",
    antonym: "Unperturbed"
  },
  {
    id: "vocab_placid_ant_flustered",
    word: "FLUSTERED",
    type: "Antonym",
    meaning: "Nervous, confused, or agitated, especially due to haste or embarrassment (घबराया हुआ, हड़बड़ाया हुआ)",
    synonym: "Confused",
    antonym: "Cool"
  },
  {
    id: "vocab_placid_ant_discomposed",
    word: "DISCOMPOSED",
    type: "Antonym",
    meaning: "Disturbed or unsettled in one's calmness, poise, or self-possession (अशांत, घबराया हुआ एवं नियंत्रण खोया हुआ)",
    synonym: "Unsettled",
    antonym: "Sedate"
  },

  // --- SET: ESPOUSE ---
  {
    id: "vocab_espouse_main",
    word: "ESPOUSE",
    type: "Synonym",
    meaning: "To adopt, support, or embrace a cause, belief, or philosophy enthusiastically (किसी सिद्धांत, विचार या नीति को अपनाना व समर्थन करना)",
    synonym: "Embrace",
    antonym: "Abandon"
  },
  {
    id: "vocab_espouse_syn_adopt",
    word: "ADOPT",
    type: "Synonym",
    meaning: "To choose, take up, or accept a new idea, method, approach, or belief (ग्रहण करना, अपनाना)",
    synonym: "Accept",
    antonym: "Reject"
  },
  {
    id: "vocab_espouse_syn_embrace",
    word: "EMBRACE",
    type: "Synonym",
    meaning: "To accept or support something eagerly, enthusiastically, and fully (गले लगाना, सहर्ष स्वीकार करना)",
    synonym: "Welcome",
    antonym: "Spurn"
  },
  {
    id: "vocab_espouse_syn_absorb",
    word: "ABSORB",
    type: "Synonym",
    meaning: "To take in, assimilate, or incorporate ideas, knowledge, or culture (अवशोषित करना, समाहित करना)",
    synonym: "Assimilate",
    antonym: "Emit"
  },
  {
    id: "vocab_espouse_syn_take_on",
    word: "TAKE ON",
    type: "Synonym",
    meaning: "To undertake or assume a responsibility, role, or commitment (जिम्मेदारी स्वीकार करना, अपनाना)",
    synonym: "Undertake",
    antonym: "Relinquish"
  },
  {
    id: "vocab_espouse_syn_marry",
    word: "MARRY",
    type: "Synonym",
    meaning: "To combine or unite two concepts, ideas, or methods harmoniously (जोड़ना, मिलाना या विवाह करना)",
    synonym: "Unite",
    antonym: "Separate"
  },
  {
    id: "vocab_espouse_syn_wed",
    word: "WED",
    type: "Synonym",
    meaning: "To combine closely or commit oneself formally to a belief or partner (विवाह करना, जोड़ना या समर्पित होना)",
    synonym: "Join",
    antonym: "Divorce"
  },
  {
    id: "vocab_espouse_syn_borrow",
    word: "BORROW",
    type: "Synonym",
    meaning: "To adopt an idea, style, or method from another source for temporary or permanent use (उधार लेना, अपनाना)",
    synonym: "Adopt",
    antonym: "Return"
  },
  {
    id: "vocab_espouse_syn_assimilate",
    word: "ASSIMILATE",
    type: "Synonym",
    meaning: "To absorb and fully understand information, culture, or ideas into one's system (आत्मसात करना, समाहित करना)",
    synonym: "Incorporate",
    antonym: "Exclude"
  },
  {
    id: "vocab_espouse_syn_arrogate",
    word: "ARROGATE",
    type: "Synonym",
    meaning: "To claim, take, or assume something without justification or right (हक जमाना, जबरदस्ती अधिकार में लेना)",
    synonym: "Claim",
    antonym: "Renounce"
  },
  {
    id: "vocab_espouse_ant_abandon",
    word: "ABANDON",
    type: "Antonym",
    meaning: "To give up, desert, or leave behind a belief, cause, or responsibility (छोड़ देना, परित्याग करना)",
    synonym: "Desert",
    antonym: "Espouse"
  },
  {
    id: "vocab_espouse_ant_relinquish",
    word: "RELINQUISH",
    type: "Antonym",
    meaning: "To voluntarily cease to keep, claim, or hold something (त्याग देना, छोड़ देना)",
    synonym: "Surrender",
    antonym: "Retain"
  },
  {
    id: "vocab_espouse_ant_abnegate",
    word: "ABNEGATE",
    type: "Antonym",
    meaning: "To renounce, reject, or deny oneself a privilege, desire, or belief (त्याग करना, नकारना)",
    synonym: "Renounce",
    antonym: "Accept"
  },
  {
    id: "vocab_espouse_ant_disown",
    word: "DISOWN",
    type: "Antonym",
    meaning: "To refuse to acknowledge, support, or accept connection with someone or something (नकारना, संबंध तोड़ना, न मानना)",
    synonym: "Repudiate",
    antonym: "Acknowledge"
  },
  {
    id: "vocab_espouse_ant_discard",
    word: "DISCARD",
    type: "Antonym",
    meaning: "To get rid of something that is no longer useful or desired (त्याग देना, फेंक देना)",
    synonym: "Reject",
    antonym: "Keep"
  },
  {
    id: "vocab_espouse_ant_jettison",
    word: "JETTISON",
    type: "Antonym",
    meaning: "To drop, discard, or abandon unnecessary burden, plans, or beliefs (फेंक देना, बोझ उतारना, छोड़ देना)",
    synonym: "Discard",
    antonym: "Retain"
  },
  {
    id: "vocab_espouse_ant_spurn",
    word: "SPURN",
    type: "Antonym",
    meaning: "To reject or disdain an offer, idea, or person with contempt (ठुकराना, तिरस्कारपूर्वक नकारना)",
    synonym: "Reject",
    antonym: "Embrace"
  },

  // --- SET: UNTENABLE ---
  {
    id: "vocab_untenable_main",
    word: "UNTENABLE",
    type: "Synonym",
    meaning: "Not able to be maintained, defended, or justified against criticism or attack (असमर्थनीय, अव्यावहारिक, तर्कहीन)",
    synonym: "Indefensible",
    antonym: "Tenable"
  },
  {
    id: "vocab_untenable_syn_indefensible",
    word: "INDEFENSIBLE",
    type: "Synonym",
    meaning: "Impossible to defend or justify, often due to clear mistakes or flaws (असंरक्षित, बचाव योग्य न होना)",
    synonym: "Unjustifiable",
    antonym: "Defensible"
  },
  {
    id: "vocab_untenable_syn_implausible",
    word: "IMPLAUSIBLE",
    type: "Synonym",
    meaning: "Not seeming reasonable, probable, or believable; doubtful (अविश्वसनीय, संदेहास्पद)",
    synonym: "Unlikely",
    antonym: "Plausible"
  },
  {
    id: "vocab_untenable_syn_specious",
    word: "SPECIOUS",
    type: "Synonym",
    meaning: "Superficially plausible or correct, but actually wrong, false, or misleading (दिखावटी, भ्रम पैदा करने वाला)",
    synonym: "Misleading",
    antonym: "Genuine"
  },
  {
    id: "vocab_untenable_syn_invalid",
    word: "INVALID",
    type: "Synonym",
    meaning: "Not sound, correct, or legally binding due to errors or lack of merit (अमान्य, बेकार, गलत)",
    synonym: "Void",
    antonym: "Valid"
  },
  {
    id: "vocab_untenable_syn_fallacious",
    word: "FALLACIOUS",
    type: "Synonym",
    meaning: "Based on a mistaken belief, false premise, or unsound reasoning (भ्रांतिपूर्ण, गलत, तर्कहीन)",
    synonym: "Erroneous",
    antonym: "Sound"
  },
  {
    id: "vocab_untenable_syn_gratuitous",
    word: "GRATUITOUS",
    type: "Synonym",
    meaning: "Uncalled for, unwarranted, or given without any justification or reason (अनावश्यक, निराधार)",
    synonym: "Unwarranted",
    antonym: "Necessary"
  },
  {
    id: "vocab_untenable_syn_unnecessary",
    word: "UNNECESSARY",
    type: "Synonym",
    meaning: "Not needed, required, or essential; superfluous (अनावश्यक, फालतू)",
    synonym: "Redundant",
    antonym: "Essential"
  },
  {
    id: "vocab_untenable_syn_absurd",
    word: "ABSURD",
    type: "Synonym",
    meaning: "Wildly unreasonable, illogical, or inappropriate; ridiculous (निरर्थक, हास्यास्पद)",
    synonym: "Ridiculous",
    antonym: "Logical"
  },
  {
    id: "vocab_untenable_ant_certified",
    word: "CERTIFIED",
    type: "Antonym",
    meaning: "Officially recognized, verified, or guaranteed as true and standard (प्रमाणित, मान्य)",
    synonym: "Verified",
    antonym: "Unverified"
  },
  {
    id: "vocab_untenable_ant_validated",
    word: "VALIDATED",
    type: "Antonym",
    meaning: "Confirmed, proven, or corroborated to be logically accurate or sound (वैध, साबित किया हुआ)",
    synonym: "Confirmed",
    antonym: "Invalidated"
  },
  {
    id: "vocab_untenable_ant_corroborated",
    word: "CORROBORATED",
    type: "Antonym",
    meaning: "Supported or confirmed by additional evidence, testimony, or facts (पुष्ट किया हुआ, साक्ष्य द्वारा सही साबित)",
    synonym: "Supported",
    antonym: "Refuted"
  },
  {
    id: "vocab_untenable_ant_genuine",
    word: "GENUINE",
    type: "Antonym",
    meaning: "Authentic, real, and not fake or counterfeit (असली, वास्तविक)",
    synonym: "Authentic",
    antonym: "Fake"
  },
  {
    id: "vocab_untenable_ant_cogent",
    word: "COGENT",
    type: "Antonym",
    meaning: "Clear, logical, convincing, and well-reasoned (प्रभावशाली, तर्कसंगत)",
    synonym: "Convincing",
    antonym: "Unconvincing"
  },
  {
    id: "vocab_untenable_ant_plausible",
    word: "PLAUSIBLE",
    type: "Antonym",
    meaning: "Seeming reasonable, probable, or likely to be true (विश्वसनीय, संभावित)",
    synonym: "Credible",
    antonym: "Implausible"
  },

  // --- SET: UNGAINLY ---
  {
    id: "vocab_ungainly_main",
    word: "UNGAINLY",
    type: "Synonym",
    meaning: "Lacking grace, coordination, or elegance; awkward or clumsy in movement (अकुशल, बेढंगा, भद्दा, विघटनात्मक)",
    synonym: "Clumsy",
    antonym: "Graceful"
  },
  {
    id: "vocab_ungainly_syn_cranky",
    word: "CRANKY",
    type: "Synonym",
    meaning: "Easily irritated, strange, or difficult to manage smoothly (चिड़चिड़ा, अजीब, कठिन)",
    synonym: "Irritable",
    antonym: "Smooth"
  },
  {
    id: "vocab_ungainly_syn_cumbrous",
    word: "CUMBROUS",
    type: "Synonym",
    meaning: "Large, heavy, cumbersome, and hard to handle or move (भारी, कष्टकारी, बोझिल)",
    synonym: "Cumbersome",
    antonym: "Manageable"
  },
  {
    id: "vocab_ungainly_syn_ponderous",
    word: "PONDEROUS",
    type: "Synonym",
    meaning: "Slow and awkward due to great weight or size; lacking agility (भारी, मन्द, बोझिल)",
    synonym: "Heavy",
    antonym: "Light"
  },
  {
    id: "vocab_ungainly_syn_unwieldy",
    word: "UNWIELDY",
    type: "Synonym",
    meaning: "Difficult to carry, manage, or move due to shape, size, or weight (जटिल, कष्टप्रद, भारी)",
    synonym: "Unmanageable",
    antonym: "Handy"
  },
  {
    id: "vocab_ungainly_syn_unhandy",
    word: "UNHANDY",
    type: "Synonym",
    meaning: "Not easy to handle, manipulate, or use; awkward or clumsy (असुविधाजनक, अकुशल)",
    synonym: "Awkward",
    antonym: "Handy"
  },
  {
    id: "vocab_ungainly_syn_clumsy",
    word: "CLUMSY",
    type: "Synonym",
    meaning: "Awkward in physical movement or handling things; lacking coordination (अकुशल, बेजोड़, अनाड़ी)",
    synonym: "Awkward",
    antonym: "Agile"
  },
  {
    id: "vocab_ungainly_syn_impractical",
    word: "IMPRACTICAL",
    type: "Synonym",
    meaning: "Not sensible, realistic, or suitable for effective daily use (अप्रसंगिक, अव्यावहारिक)",
    synonym: "Unusable",
    antonym: "Practical"
  },
  {
    id: "vocab_ungainly_ant_handy",
    word: "HANDY",
    type: "Antonym",
    meaning: "Convenient, easy to handle, use, or manage effectively (सुविधाजनक, उपयोगी)",
    synonym: "Useful",
    antonym: "Unhandy"
  },
  {
    id: "vocab_ungainly_ant_useful",
    word: "USEFUL",
    type: "Antonym",
    meaning: "Able to be used for a practical purpose or benefit (उपयोगी, लाभकारी)",
    synonym: "Beneficial",
    antonym: "Useless"
  },
  {
    id: "vocab_ungainly_ant_coordinated",
    word: "COORDINATED",
    type: "Antonym",
    meaning: "Showing physical harmony, balance, and smooth movement (सुसंगत, संगठित, संतुलित)",
    synonym: "Balanced",
    antonym: "Clumsy"
  },
  {
    id: "vocab_ungainly_ant_graceful",
    word: "GRACEFUL",
    type: "Antonym",
    meaning: "Displaying beauty, smoothness, and elegance in movement or form (सुंदर, सुरुचिपूर्ण, भव्य)",
    synonym: "Elegant",
    antonym: "Ungainly"
  },
  {
    id: "vocab_ungainly_ant_lithe",
    word: "LITHE",
    type: "Antonym",
    meaning: "Thin, supple, agile, and able to move gracefully (लचीला, छरहरा, सुडौल)",
    synonym: "Supple",
    antonym: "Stiff"
  },

  // --- SET: RAUCOUS ---
  {
    id: "vocab_raucous_main",
    word: "RAUCOUS",
    type: "Synonym",
    meaning: "Making a disturbingly harsh, loud, and disorderly noise (शोरगुल वाला, गर्जनात्मक, उग्र)",
    synonym: "Boisterous",
    antonym: "Tranquil"
  },
  {
    id: "vocab_raucous_syn_boisterous",
    word: "BOISTEROUS",
    type: "Synonym",
    meaning: "Noisy, energetic, cheerful, and rowdy in an unrestrained way (शोरगुल से भरा, हर्षित, उधमी)",
    synonym: "Rowdy",
    antonym: "Quiet"
  },
  {
    id: "vocab_raucous_syn_robustious",
    word: "ROBUSTIOUS",
    type: "Synonym",
    meaning: "Boisterous, loud, vigorous, and unruly in behavior (शोरशराबा करने वाला, उग्र)",
    synonym: "Unruly",
    antonym: "Gentle"
  },
  {
    id: "vocab_raucous_syn_roisterous",
    word: "ROISTEROUS",
    type: "Synonym",
    meaning: "Loud, rowdy, and engaged in noisy, high-spirited merrymaking (शोरशराबा करने वाला, हुड़दंगी)",
    synonym: "Rowdy",
    antonym: "Sedate"
  },
  {
    id: "vocab_raucous_syn_carnival",
    word: "CARNIVAL",
    type: "Synonym",
    meaning: "Characterized by loud, festive, chaotic, and energetic celebration (मेले जैसा, धूमधाम से भरा)",
    synonym: "Festive",
    antonym: "Solemn"
  },
  {
    id: "vocab_raucous_syn_turbulent",
    word: "TURBULENT",
    type: "Synonym",
    meaning: "Characterized by conflict, disorder, noise, commotion, or violent disturbance (उथल-पुथल से भरा, अशांत)",
    synonym: "Chaotic",
    antonym: "Calm"
  },
  {
    id: "vocab_raucous_syn_strident",
    word: "STRIDENT",
    type: "Synonym",
    meaning: "Loud, harsh, grating, and commanding in sound (तीव्र, करकश, शोरशराबा करने वाला)",
    synonym: "Harsh",
    antonym: "Soft"
  },
  {
    id: "vocab_raucous_syn_stentorian",
    word: "STENTORIAN",
    type: "Synonym",
    meaning: "Extremely loud, powerful, and booming in voice (बहुत जोर की आवाज़ वाला, गर्जनात्मक)",
    synonym: "Booming",
    antonym: "Whispered"
  },
  {
    id: "vocab_raucous_ant_sober",
    word: "SOBER",
    type: "Antonym",
    meaning: "Calm, serious, quiet, and showing no signs of wild excitement (गंभीर, शांत, संयमित)",
    synonym: "Serious",
    antonym: "Wild"
  },
  {
    id: "vocab_raucous_ant_decorous",
    word: "DECOROUS",
    type: "Antonym",
    meaning: "Polite, dignified, proper, and keeping with good taste and propriety (शिष्ट, सुसंस्कृत)",
    synonym: "Proper",
    antonym: "Indecorous"
  },
  {
    id: "vocab_raucous_ant_dignified",
    word: "DIGNIFIED",
    type: "Antonym",
    meaning: "Having or showing a composed, serious, and respectful manner (गरिमापूर्ण, शिष्ट, गंभीर)",
    synonym: "Noble",
    antonym: "Rowdy"
  },
  {
    id: "vocab_raucous_ant_serene",
    word: "SERENE",
    type: "Antonym",
    meaning: "Calm, peaceful, quiet, and completely untroubled by noise (शांत, निर्विकार)",
    synonym: "Tranquil",
    antonym: "Raucous"
  },
  {
    id: "vocab_raucous_ant_tranquil",
    word: "TRANQUIL",
    type: "Antonym",
    meaning: "Free from disturbance or harsh noise; peaceful (शांत, शांतिपूर्ण)",
    synonym: "Peaceful",
    antonym: "Turbulent"
  },
  // --- SET: ILLUSTRIOUS ---
  {
    id: "vocab_illustrious_main",
    word: "ILLUSTRIOUS",
    type: "Synonym",
    meaning: "Well-known, respected, and admired for past achievements or qualities; famous and distinguished (प्रसिद्ध, प्रतिष्ठित, गौरवमयी एवं प्रख्यात)",
    synonym: "Eminent",
    antonym: "Uncelebrated"
  },
  {
    id: "vocab_illustrious_syn_eminent",
    word: "EMINENT",
    type: "Synonym",
    meaning: "Famous, respected, and distinguished within a particular field or profession (प्रतिष्ठित, प्रसिद्ध एवं जाने-माने)",
    synonym: "Prestigious",
    antonym: "Obscure"
  },
  {
    id: "vocab_illustrious_syn_luminous",
    word: "LUMINOUS",
    type: "Synonym",
    meaning: "Giving off light, bright, or radiant; metaphorically referring to something intellectually or morally brilliant (प्रकाशमान, चमकदार, तेजस्वी)",
    synonym: "Radiant",
    antonym: "Dim"
  },
  {
    id: "vocab_illustrious_syn_prestigious",
    word: "PRESTIGIOUS",
    type: "Synonym",
    meaning: "Having high status, respect, or distinction, especially in an academic or professional domain (प्रतिष्ठित, मान्य एवं प्रतिष्ठित दर्जा प्राप्त)",
    synonym: "Reputable",
    antonym: "Ordinary"
  },
  {
    id: "vocab_illustrious_syn_astral",
    word: "ASTRAL",
    type: "Synonym",
    meaning: "Relating to or resembling stars; celestial, often used metaphorically to describe extraordinary presence (तारामंडल से संबंधित, दिव्य, अद्भुत)",
    synonym: "Celestial",
    antonym: "Terrestrial"
  },
  {
    id: "vocab_illustrious_syn_preeminent",
    word: "PREEMINENT",
    type: "Synonym",
    meaning: "Surpassing all others in quality, importance, or achievement; supreme in a particular field (सर्वोत्तम, सर्वोपरि, प्रमुख)",
    synonym: "Supreme",
    antonym: "Inferior"
  },
  {
    id: "vocab_illustrious_syn_distinguished",
    word: "DISTINGUISHED",
    type: "Synonym",
    meaning: "Successful, authoritative, and commanding great respect through excellence (प्रतिष्ठित, विशिष्ट एवं सम्मानित)",
    synonym: "Renowned",
    antonym: "Unremarkable"
  },
  {
    id: "vocab_illustrious_syn_reputable",
    word: "REPUTABLE",
    type: "Synonym",
    meaning: "Having a good reputation; considered trustworthy, respectable, and reliable (प्रतिष्ठित, सम्माननीय, विश्वसनीय)",
    synonym: "Trustworthy",
    antonym: "Disreputable"
  },
  {
    id: "vocab_illustrious_syn_exalted",
    word: "EXALTED",
    type: "Synonym",
    meaning: "Placed at a high level or position; held in extremely high regard, honor, or esteem (उच्च, सम्मानित, महान दर्जा प्राप्त)",
    synonym: "Elevated",
    antonym: "Lowly"
  },
  {
    id: "vocab_illustrious_ant_average",
    word: "AVERAGE",
    type: "Antonym",
    meaning: "Not special, remarkable, or distinguished; typical or ordinary in quality (सामान्य, औसत दर्जा)",
    synonym: "Ordinary",
    antonym: "Illustrious"
  },
  {
    id: "vocab_illustrious_ant_mediocre",
    word: "MEDIOCRE",
    type: "Antonym",
    meaning: "Of only moderate or ordinary quality; not very good and lacking depth or excellence (साधारण, मामूली, औसत दर्जे का)",
    synonym: "Ordinary",
    antonym: "Exceptional"
  },
  {
    id: "vocab_illustrious_ant_inferior",
    word: "INFERIOR",
    type: "Antonym",
    meaning: "Lower in rank, status, or quality compared to others (निम्न, घटिया, कमतर)",
    synonym: "Substandard",
    antonym: "Superior"
  },
  {
    id: "vocab_illustrious_ant_uncelebrated",
    word: "UNCELEBRATED",
    type: "Antonym",
    meaning: "Not famous, recognized, or widely acknowledged despite talents or efforts (अज्ञात, अप्रसिद्ध, गुमनाम)",
    synonym: "Unknown",
    antonym: "Illustrious"
  },

  // --- SET: MOLLIFY ---
  {
    id: "vocab_mollify_main",
    word: "MOLLIFY",
    type: "Synonym",
    meaning: "To calm someone down or make them less angry, upset, or hostile; to soothe or pacify (शांत करना, गुस्सा ठंडा करना, शांति प्रदान करना)",
    synonym: "Pacify",
    antonym: "Enrage"
  },
  {
    id: "vocab_mollify_syn_appease",
    word: "APPEASE",
    type: "Synonym",
    meaning: "To bring peace or calm to someone, often by yielding to their demands or giving concessions (शांत करना, प्रसन्न करना, तुष्टिकरण करना)",
    synonym: "Pacify",
    antonym: "Provoke"
  },
  {
    id: "vocab_mollify_syn_assuage",
    word: "ASSUAGE",
    type: "Synonym",
    meaning: "To make an unpleasant or painful feeling less intense, severe, or burdensome (शांति देना, पीड़ा या डर कम करना)",
    synonym: "Soothe",
    antonym: "Intensify"
  },
  {
    id: "vocab_mollify_syn_conciliate",
    word: "CONCILIATE",
    type: "Synonym",
    meaning: "To stop someone from being angry or discontented by showing understanding or reaching a compromise (सुलह करना, मेल-मिलाप करना)",
    synonym: "Reconcile",
    antonym: "Antagonize"
  },
  {
    id: "vocab_mollify_syn_gentle",
    word: "GENTLE",
    type: "Synonym",
    meaning: "To make someone less harsh, severe, or angry through a soft, mild, and kind approach (कोमल बनाना, शांत या नरम करना)",
    synonym: "Soothe",
    antonym: "Roughen"
  },
  {
    id: "vocab_mollify_syn_pacify",
    word: "PACIFY",
    type: "Synonym",
    meaning: "To quell the anger, agitation, or excitement of someone; to restore peace (शांत करना, शांति स्थापित करना)",
    synonym: "Calm",
    antonym: "Agitate"
  },
  {
    id: "vocab_mollify_syn_placate",
    word: "PLACATE",
    type: "Synonym",
    meaning: "To make someone less angry or hostile by making concessions or doing something pleasing (संतुष्ट करना, शांत करना)",
    synonym: "Appease",
    antonym: "Enrage"
  },
  {
    id: "vocab_mollify_syn_console",
    word: "CONSOLE",
    type: "Synonym",
    meaning: "To give comfort, emotional support, or sympathy to someone experiencing grief or distress (सांत्वना देना, ढाढ़स बंधाना)",
    synonym: "Comfort",
    antonym: "Upset"
  },
  {
    id: "vocab_mollify_syn_soothe",
    word: "SOOTHE",
    type: "Synonym",
    meaning: "To gently calm, relieve, or ease pain, anxiety, or distress (शांति देना, दर्द या घबराहट कम करना)",
    synonym: "Relieve",
    antonym: "Irritate"
  },
  {
    id: "vocab_mollify_syn_propitiate",
    word: "PROPITIATE",
    type: "Synonym",
    meaning: "To win or regain the favor of a god, spirit, or person by doing something pleasing (प्रसन्न करना, मनाना, तुष्ट करना)",
    synonym: "Appease",
    antonym: "Offend"
  },
  {
    id: "vocab_mollify_ant_anger",
    word: "ANGER",
    type: "Antonym",
    meaning: "To make someone feel very upset, displeased, or enraged (गुस्सा दिलाना, क्रोधित करना)",
    synonym: "Enrage",
    antonym: "Mollify"
  },
  {
    id: "vocab_mollify_ant_enrage",
    word: "ENRAGE",
    type: "Antonym",
    meaning: "To make someone intensely angry, furious, or outraged (गुस्से में डालना, अत्यधिक क्रोधित करना)",
    synonym: "Infuriate",
    antonym: "Pacify"
  },
  {
    id: "vocab_mollify_ant_incense",
    word: "INCENSE",
    type: "Antonym",
    meaning: "To make someone extremely angry or furious with a provocative action or statement (क्रोधित करना, भड़काना)",
    synonym: "Enrage",
    antonym: "Placate"
  },
  {
    id: "vocab_mollify_ant_inflame",
    word: "INFLAME",
    type: "Antonym",
    meaning: "To make a situation or emotion worse by provoking anger, passion, or agitation (भड़काना, स्थिति को और गंभीर बनाना)",
    synonym: "Provoke",
    antonym: "Soothe"
  },
  {
    id: "vocab_mollify_ant_infuriate",
    word: "INFURIATE",
    type: "Antonym",
    meaning: "To fill someone with extreme rage, anger, or impatience (चिढ़ाना, आपे से बाहर करना)",
    synonym: "Enrage",
    antonym: "Appease"
  },
  {
    id: "vocab_mollify_ant_ire",
    word: "IRE",
    type: "Antonym",
    meaning: "Intense anger, wrath, or indignation toward a person or act (क्रोध, गुस्सा, तीव्र नाराजगी)",
    synonym: "Wrath",
    antonym: "Calmness"
  },
  {
    id: "vocab_mollify_ant_madden",
    word: "MADDEN",
    type: "Antonym",
    meaning: "To drive someone extremely angry, annoyed, or distracted (पागल करना, अत्यधिक क्रोधित कर देना)",
    synonym: "Infuriate",
    antonym: "Console"
  },

  // --- SET: VOLUMINOUS ---
  {
    id: "vocab_voluminous_main",
    word: "VOLUMINOUS",
    type: "Synonym",
    meaning: "Having great volume, size, space, or quantity; large, expansive, and loose (विशाल, विस्तृत, बड़े आकार का, बहुखंडीय)",
    synonym: "Gigantic",
    antonym: "Puny"
  },
  {
    id: "vocab_voluminous_syn_big",
    word: "BIG",
    type: "Synonym",
    meaning: "Of considerable size, extent, or intensity (बड़ा, विशाल)",
    synonym: "Large",
    antonym: "Small"
  },
  {
    id: "vocab_voluminous_syn_hefty",
    word: "HEFTY",
    type: "Synonym",
    meaning: "Large, heavy, sturdy, or substantial in size or weight (भारी, मजबूत, बड़ा)",
    synonym: "Heavy",
    antonym: "Light"
  },
  {
    id: "vocab_voluminous_syn_tidy",
    word: "TIDY",
    type: "Synonym",
    meaning: "Neat and organized; metaphorically used to mean a sum or amount that is large and substantial (सुव्यवस्थित, पर्याप्त/बड़ी मात्रा)",
    synonym: "Substantial",
    antonym: "Messy"
  },
  {
    id: "vocab_voluminous_syn_cavernous",
    word: "CAVERNOUS",
    type: "Synonym",
    meaning: "Vast, deep, and empty like a cavern or large cave (गुफा जैसा, विशाल, गहरा)",
    synonym: "Vast",
    antonym: "Compact"
  },
  {
    id: "vocab_voluminous_syn_colossal",
    word: "COLOSSAL",
    type: "Synonym",
    meaning: "Extremely large, massive, or immense in scale or extent (अत्यंत विशाल, महाकाय)",
    synonym: "Immense",
    antonym: "Tiny"
  },
  {
    id: "vocab_voluminous_syn_gigantic",
    word: "GIGANTIC",
    type: "Synonym",
    meaning: "Of extraordinary size, stature, or proportion; huge (दैत्याकार, अति विशाल)",
    synonym: "Huge",
    antonym: "Miniature"
  },
  {
    id: "vocab_voluminous_syn_heroic",
    word: "HEROIC",
    type: "Synonym",
    meaning: "Large in scale, effort, or impact; monumental in ambition or execution (वीरतापूर्ण, महान, बहुत बड़ा प्रयास)",
    synonym: "Monumental",
    antonym: "Unimpressive"
  },
  {
    id: "vocab_voluminous_syn_ample",
    word: "AMPLE",
    type: "Synonym",
    meaning: "More than enough in space, quantity, or capacity; plentiful (पर्याप्त, प्रचुर, भरपूर)",
    synonym: "Abundant",
    antonym: "Meager"
  },
  {
    id: "vocab_voluminous_syn_excessive",
    word: "EXCESSIVE",
    type: "Synonym",
    meaning: "More than is necessary, normal, or desirable; immoderate (अत्यधिक, जरूरत से ज्यादा)",
    synonym: "Extreme",
    antonym: "Moderate"
  },
  {
    id: "vocab_voluminous_ant_dwarf",
    word: "DWARF",
    type: "Antonym",
    meaning: "To cause to appear small or insignificant by comparison; tiny (बौना बनाना, छोटा कर देना)",
    synonym: "Diminish",
    antonym: "Magnify"
  },
  {
    id: "vocab_voluminous_ant_dinky",
    word: "DINKY",
    type: "Antonym",
    meaning: "Small, unimportant, or insignificant in size or appearance (छोटा, नगण्य, मामूली)",
    synonym: "Tiny",
    antonym: "Huge"
  },
  {
    id: "vocab_voluminous_ant_puny",
    word: "PUNY",
    type: "Antonym",
    meaning: "Small, weak, frail, or insignificant in size or strength (कमजोर, छोटा, तुच्छ)",
    synonym: "Weak",
    antonym: "Voluminous"
  },
  {
    id: "vocab_voluminous_ant_shrimpy",
    word: "SHRIMPY",
    type: "Antonym",
    meaning: "Small and weak in stature; puny (छोटा, दुबला-पतला, कमजोर)",
    synonym: "Tiny",
    antonym: "Gigantic"
  },
  {
    id: "vocab_voluminous_ant_bantam",
    word: "BANTAM",
    type: "Antonym",
    meaning: "Small or miniature in size, often spirited or aggressive despite small stature (छोटा, बौना पर फुर्तीला)",
    synonym: "Miniature",
    antonym: "Large"
  },

  // --- SET: DISCREPANT ---
  {
    id: "vocab_discrepant_main",
    word: "DISCREPANT",
    type: "Synonym",
    meaning: "Differing, inconsistent, or showing a lack of agreement or harmony between facts or statements (असंगत, परस्पर विरोधी, बेमेल)",
    synonym: "Conflicting",
    antonym: "Consistent"
  },
  {
    id: "vocab_discrepant_syn_conflicting",
    word: "CONFLICTING",
    type: "Synonym",
    meaning: "In disagreement, opposition, or contradiction with another statement or evidence (विरोधाभासी, संघर्षशील)",
    synonym: "Inconsistent",
    antonym: "Harmonious"
  },
  {
    id: "vocab_discrepant_syn_discordant",
    word: "DISCORDANT",
    type: "Synonym",
    meaning: "Harsh or harsh-sounding; disagreeing, incongruous, or lacking harmony (असंगत, कर्कश, बेसुरा)",
    synonym: "Inharmonious",
    antonym: "Harmonious"
  },
  {
    id: "vocab_discrepant_syn_incompatible",
    word: "INCOMPATIBLE",
    type: "Synonym",
    meaning: "Not able to exist, work, or combine together without conflict or disagreement (असंगत, मेल न खाने वाला)",
    synonym: "Mismatched",
    antonym: "Compatible"
  },
  {
    id: "vocab_discrepant_syn_incongruous",
    word: "INCONGRUOUS",
    type: "Synonym",
    meaning: "Not in harmony or keeping with the surroundings, expectations, or context (असंगत, बेमेल, अनुपयुक्त)",
    synonym: "Inappropriate",
    antonym: "Congruous"
  },
  {
    id: "vocab_discrepant_syn_inconsonant",
    word: "INCONSONANT",
    type: "Synonym",
    meaning: "Not in agreement or harmony with something else; clashing (असंगत, अप्रासंगिक, मेल न खाने वाला)",
    synonym: "Clashing",
    antonym: "Consonant"
  },
  {
    id: "vocab_discrepant_syn_inharmonious",
    word: "INHARMONIOUS",
    type: "Synonym",
    meaning: "Not forming a pleasing or consistent whole; full of conflict or discord (अप्रिय, बेमेल, असंगत)",
    synonym: "Discordant",
    antonym: "Harmonious"
  },
  {
    id: "vocab_discrepant_syn_repugnant",
    word: "REPUGNANT",
    type: "Synonym",
    meaning: "Extremely distasteful, unacceptable, or logically contradictory to a principle (घृणास्पद, असहनीय, विरोधाभासी)",
    synonym: "Offensive",
    antonym: "Agreeable"
  },
  {
    id: "vocab_discrepant_ant_accordant",
    word: "ACCORDANT",
    type: "Antonym",
    meaning: "In agreement, conformity, or harmony with something else (सामंजस्यपूर्ण, सहमत)",
    synonym: "Agreeing",
    antonym: "Discrepant"
  },
  {
    id: "vocab_discrepant_ant_agreeing",
    word: "AGREEING",
    type: "Antonym",
    meaning: "In harmony, consensus, or accordance with facts or opinions (सहमत, मेल खाने वाला)",
    synonym: "Concurring",
    antonym: "Differing"
  },
  {
    id: "vocab_discrepant_ant_compatible",
    word: "COMPATIBLE",
    type: "Antonym",
    meaning: "Able to exist, live, or work together smoothly without conflict (संगत, मेल खाने वाला)",
    synonym: "Harmonious",
    antonym: "Incompatible"
  },
  {
    id: "vocab_discrepant_ant_concordant",
    word: "CONCORDANT",
    type: "Antonym",
    meaning: "In agreement or harmony; consistent and matching in facts or tone (सामंजस्यपूर्ण, एकमत)",
    synonym: "Consistent",
    antonym: "Discordant"
  },
  {
    id: "vocab_discrepant_ant_congruous",
    word: "CONGRUOUS",
    type: "Antonym",
    meaning: "In agreement, appropriate, or suitable in relation to surroundings or facts (संगत, उपयुक्त, बेमेल न होना)",
    synonym: "Appropriate",
    antonym: "Incongruous"
  },
  {
    id: "vocab_discrepant_ant_consistent",
    word: "CONSISTENT",
    type: "Antonym",
    meaning: "Unchanging, reliable, or agreeing in principles and facts over time (सुसंगत, समान, सुदृढ़)",
    synonym: "Steady",
    antonym: "Inconsistent"
  },

  // --- SET: STATIC ---
  {
    id: "vocab_static_main",
    word: "STATIC",
    type: "Synonym",
    meaning: "Lacking movement, development, or change; staying in a fixed position or state (स्थिर, गतिहीन, अपरिवर्तनीय)",
    synonym: "Stationary",
    antonym: "Mobile"
  },
  {
    id: "vocab_static_syn_immobile",
    word: "IMMOBILE",
    type: "Synonym",
    meaning: "Incapable of moving or being moved; completely motionless (गतिहीन, अचल, न हिलने वाला)",
    synonym: "Motionless",
    antonym: "Mobile"
  },
  {
    id: "vocab_static_syn_stationary",
    word: "STATIONARY",
    type: "Synonym",
    meaning: "Not moving or changing position; staying fixed in one place (स्थिर, अविचल, एक जगह स्थित)",
    synonym: "Fixed",
    antonym: "Movable"
  },
  {
    id: "vocab_static_syn_immotile",
    word: "IMMOTILE",
    type: "Synonym",
    meaning: "Not capable of spontaneous movement, especially in biological contexts (गतिहीन, अचल, हरकत न करने वाला)",
    synonym: "Motionless",
    antonym: "Motile"
  },
  {
    id: "vocab_static_syn_immovable",
    word: "IMMOVABLE",
    type: "Synonym",
    meaning: "Firmly fixed in place; unable to be moved or persuaded to change (अडिग, अपरिवर्तनीय, न डिगने वाला)",
    synonym: "Fixed",
    antonym: "Movable"
  },
  {
    id: "vocab_static_syn_stagnant",
    word: "STAGNANT",
    type: "Synonym",
    meaning: "Showing no activity, flow, development, or progress; foul from standing still (रुका हुआ, स्थिर, विकासहीन)",
    synonym: "Inactive",
    antonym: "Flowing"
  },
  {
    id: "vocab_static_syn_motionless",
    word: "MOTIONLESS",
    type: "Synonym",
    meaning: "Without any movement; completely still and quiet (गतिहीन, बिना हरकत के)",
    synonym: "Still",
    antonym: "Active"
  },
  {
    id: "vocab_static_syn_frozen",
    word: "FROZEN",
    type: "Synonym",
    meaning: "Completely still, rigid, or turned into ice; incapable of motion (जमा हुआ, अचल, स्थिर)",
    synonym: "Rigid",
    antonym: "Fluid"
  },
  {
    id: "vocab_static_ant_mobile",
    word: "MOBILE",
    type: "Antonym",
    meaning: "Able to move or be moved freely and easily from place to place (गतिशील, चालू, चलने-फिरने योग्य)",
    synonym: "Movable",
    antonym: "Static"
  },
  {
    id: "vocab_static_ant_movable",
    word: "MOVABLE",
    type: "Antonym",
    meaning: "Capable of being moved, relocated, or adjusted (स्थानांतरित करने योग्य, जिसे हिलाया जा सके)",
    synonym: "Transferable",
    antonym: "Fixed"
  },
  {
    id: "vocab_static_ant_motile",
    word: "MOTILE",
    type: "Antonym",
    meaning: "Capable of independent movement or locomotion (गतिमान, गति करने में सक्षम)",
    synonym: "Active",
    antonym: "Immotile"
  },
  {
    id: "vocab_static_ant_flexible",
    word: "FLEXIBLE",
    type: "Antonym",
    meaning: "Able to bend, change, or adapt easily without breaking or causing conflict (लचीला, परिवर्तनीय, अनुकूलनशील)",
    synonym: "Adaptable",
    antonym: "Rigid"
  },
  {
    id: "vocab_static_ant_modular",
    word: "MODULAR",
    type: "Antonym",
    meaning: "Consisting of separate, independent units that can be rearranged or modified (मॉड्यूलर, भागों में बांटा हुआ/बदलने योग्य)",
    synonym: "Adaptable",
    antonym: "Fixed"
  },
  {
    id: "vocab_static_ant_portable",
    word: "PORTABLE",
    type: "Antonym",
    meaning: "Lightweight and easy to carry or transport from one location to another (पोर्टेबल, हल्का, आसानी से ले जाने योग्य)",
    synonym: "Transportable",
    antonym: "Stationary"
  },
  // --- SET: PROFUSE ---
  {
    id: "vocab_profuse_main",
    word: "PROFUSE",
    type: "Synonym",
    meaning: "Given, produced, or existing in large amounts; abundant, lavish, or overflowing (अत्यधिक, प्रचुर, भरपूर मात्रा में उपलब्ध)",
    synonym: "Copious",
    antonym: "Meager"
  },
  {
    id: "vocab_profuse_syn_copious",
    word: "COPIOUS",
    type: "Synonym",
    meaning: "Large in quantity or number; abundant and plentiful in supply (प्रचुर, अत्यधिक, प्रचुर मात्रा में)",
    synonym: "Abundant",
    antonym: "Sparse"
  },
  {
    id: "vocab_profuse_syn_lavish",
    word: "LAVISH",
    type: "Synonym",
    meaning: "Expended or produced in abundance; extravagant, generous, or luxurious in amount (शानदार, अत्यधिक, फिजूलखर्च/उदार)",
    synonym: "Extravagant",
    antonym: "Sparing"
  },
  {
    id: "vocab_profuse_syn_riotous",
    word: "RIOTOUS",
    type: "Synonym",
    meaning: "Characterized by uncontrolled, excessive, or wild behavior; abundant in an extravagant way (उथल-पुथल भरा, अत्यधिक, बेकाबू)",
    synonym: "Wild",
    antonym: "Restrained"
  },
  {
    id: "vocab_profuse_syn_galore",
    word: "GALORE",
    type: "Synonym",
    meaning: "In abundance; plentiful and existing in large quantities (प्रचुर मात्रा में, बहुतायत से)",
    synonym: "Plentiful",
    antonym: "Scarce"
  },
  {
    id: "vocab_profuse_syn_ample",
    word: "AMPLE",
    type: "Synonym",
    meaning: "More than enough in space, size, or quantity; plentiful and sufficient (पर्याप्त, प्रचुर, भरपूर)",
    synonym: "Sufficient",
    antonym: "Inadequate"
  },
  {
    id: "vocab_profuse_syn_abundant",
    word: "ABUNDANT",
    type: "Synonym",
    meaning: "Existing or available in large quantities; rich and plentiful (प्रचुर, प्रचुर मात्रा में, भरपूर)",
    synonym: "Plentiful",
    antonym: "Deficient"
  },
  {
    id: "vocab_profuse_syn_plenteous",
    word: "PLENTEOUS",
    type: "Synonym",
    meaning: "More than enough; existing in large, fruitful, or abundant amounts (प्रचुर, भरपूर, समृद्ध)",
    synonym: "Bountiful",
    antonym: "Scanty"
  },
  {
    id: "vocab_profuse_syn_extravagant",
    word: "EXTRAVAGANT",
    type: "Synonym",
    meaning: "Lacking restraint in spending or using resources; excessive and wasteful (अत्यधिक, खर्चीला, बेहिसाब)",
    synonym: "Lavish",
    antonym: "Frugal"
  },
  {
    id: "vocab_profuse_syn_fecund",
    word: "FECUND",
    type: "Synonym",
    meaning: "Producing or capable of producing an abundance of offspring, growth, or creative work; fertile (उपजाऊ, प्रचुर, उपजाऊ क्षमता वाला)",
    synonym: "Fertile",
    antonym: "Barren"
  },
  {
    id: "vocab_profuse_ant_dribbling",
    word: "DRIBBLING",
    type: "Antonym",
    meaning: "Flowing or coming down in very small, weak, and slow amounts or drops (धीरे-धीरे गिरना, रिसना, नगण्य मात्रा)",
    synonym: "Trickling",
    antonym: "Gushing"
  },
  {
    id: "vocab_profuse_ant_trickling",
    word: "TRICKLING",
    type: "Antonym",
    meaning: "Flowing in small amounts in a steady, slow stream (धीरे-धीरे बहना, बूंद-बूंद टपकना)",
    synonym: "Dribbling",
    antonym: "Pouring"
  },
  {
    id: "vocab_profuse_ant_meager",
    word: "MEAGER",
    type: "Antonym",
    meaning: "Lacking in quantity, quality, or substance; insufficient and sparse (थोड़ा, न्यूनतम, कमतर)",
    synonym: "Scanty",
    antonym: "Profuse"
  },
  {
    id: "vocab_profuse_ant_niggardly",
    word: "NIGGARDLY",
    type: "Antonym",
    meaning: "Extremely stingy, mean, or reluctant to give; very limited in amount (कंजूस, संकुचित, बहुत कम)",
    synonym: "Stingy",
    antonym: "Generous"
  },
  {
    id: "vocab_profuse_ant_slant",
    word: "SLANT",
    type: "Antonym",
    meaning: "A particular perspective or angle that causes bias, making an account partial or insufficient (झुकाव, पक्षपातपूर्ण दृष्टिकोण, असंतुलन)",
    synonym: "Bias",
    antonym: "Objectivity"
  },
  {
    id: "vocab_profuse_ant_deficient",
    word: "DEFICIENT",
    type: "Antonym",
    meaning: "Lacking or insufficient in some essential quality, ingredient, or quantity (अपर्याप्त, कमी वाला, अधूरा)",
    synonym: "Lacking",
    antonym: "Abundant"
  },

  // --- SET: LETHARGIC ---
  {
    id: "vocab_lethargic_main",
    word: "LETHARGIC",
    type: "Synonym",
    meaning: "Lacking energy, enthusiasm, or physical alertness; sluggish, inactive, or dull (आलसी, सुस्त, ऊर्जाहीन)",
    synonym: "Sluggish",
    antonym: "Energetic"
  },
  {
    id: "vocab_lethargic_syn_dull",
    word: "DULL",
    type: "Synonym",
    meaning: "Lacking energy, liveliness, sharp intellect, or interest; boring and uninspiring (सुस्त, नीरस, मंद)",
    synonym: "Boring",
    antonym: "Lively"
  },
  {
    id: "vocab_lethargic_syn_inactive",
    word: "INACTIVE",
    type: "Synonym",
    meaning: "Not participating in any activity or physical movement; motionless or dormant (निष्क्रिय, आलसी, बंद पड़ा हुआ)",
    synonym: "Idle",
    antonym: "Active"
  },
  {
    id: "vocab_lethargic_syn_inert",
    word: "INERT",
    type: "Synonym",
    meaning: "Lacking the ability, strength, or motivation to move or act; completely motionless (निष्क्रिय, सुस्त, अक्रिय)",
    synonym: "Motionless",
    antonym: "Dynamic"
  },
  {
    id: "vocab_lethargic_syn_quiescent",
    word: "QUIESCENT",
    type: "Synonym",
    meaning: "In a state or period of temporary inactivity, rest, or quietness (शांत, निष्क्रिय, सुप्त)",
    synonym: "Dormant",
    antonym: "Active"
  },
  {
    id: "vocab_lethargic_syn_sluggish",
    word: "SLUGGISH",
    type: "Synonym",
    meaning: "Moving, acting, or responding slowly; lacking energy, speed, or alertness (सुस्त, धीमा, काहिल)",
    synonym: "Slow",
    antonym: "Brisk"
  },
  {
    id: "vocab_lethargic_syn_torpid",
    word: "TORPID",
    type: "Synonym",
    meaning: "Mentally or physically sluggish, inactive, or numb, often due to cold or tiredness (मन्द, सुस्त, निश्चेश्त)",
    synonym: "Inactive",
    antonym: "Active"
  },
  {
    id: "vocab_lethargic_syn_apathetic",
    word: "APATHETIC",
    type: "Synonym",
    meaning: "Showing or feeling little to no interest, emotion, or enthusiasm; indifferent (उदासीन, निष्क्रिय, भावनाहीन)",
    synonym: "Indifferent",
    antonym: "Passionate"
  },
  {
    id: "vocab_lethargic_syn_dormant",
    word: "DORMANT",
    type: "Synonym",
    meaning: "Temporarily inactive, sleeping, or in a state of rest, though capable of future activity (सुप्त, निष्क्रिय, सोया हुआ)",
    synonym: "Inactive",
    antonym: "Active"
  },
  {
    id: "vocab_lethargic_ant_active",
    word: "ACTIVE",
    type: "Antonym",
    meaning: "Engaged in action, physical movement, or work; full of life and operation (सक्रिय, क्रियाशील, तत्पर)",
    synonym: "Operational",
    antonym: "Inactive"
  },
  {
    id: "vocab_lethargic_ant_energetic",
    word: "ENERGETIC",
    type: "Antonym",
    meaning: "Full of energy, enthusiasm, vigor, and vitality (ऊर्जावान, सक्रिय, स्फूर्तिदायक)",
    synonym: "Vigorous",
    antonym: "Lethargic"
  },
  {
    id: "vocab_lethargic_ant_vivacious",
    word: "VIVACIOUS",
    type: "Antonym",
    meaning: "Attractively lively, animated, high-spirited, and full of life (चंचल, जीवंत, खुशमिजाज)",
    synonym: "Lively",
    antonym: "Dull"
  },
  {
    id: "vocab_lethargic_ant_assiduous",
    word: "ASSIDUOUS",
    type: "Antonym",
    meaning: "Showing great care, persistent attention, and effort in completing tasks (मेहनती, सतर्क, लगनशील)",
    synonym: "Diligent",
    antonym: "Lazy"
  },
  {
    id: "vocab_lethargic_ant_diligent",
    word: "DILIGENT",
    type: "Antonym",
    meaning: "Showing steady, careful, and hardworking effort in work or duties (परिश्रमी, मेहनती, निष्ठावान)",
    synonym: "Hardworking",
    antonym: "Sluggish"
  },
  {
    id: "vocab_lethargic_ant_industrious",
    word: "INDUSTRIOUS",
    type: "Antonym",
    meaning: "Hardworking, persistent, and constantly engaged in productive activities (मेहनती, श्रमिक, कार्यकुशल)",
    synonym: "Productive",
    antonym: "Idle"
  },
  {
    id: "vocab_lethargic_ant_sedulous",
    word: "SEDULOUS",
    type: "Antonym",
    meaning: "Showing dedication, constant attention, and persistent effort in pursuit of a goal (कठिन श्रम करने वाला, परिश्रमशील)",
    synonym: "Dedicated",
    antonym: "Careless"
  },

  // --- SET: DEARTH ---
  {
    id: "vocab_dearth_main",
    word: "DEARTH",
    type: "Synonym",
    meaning: "A scarcity or lack of something essential, needed, or desirable (कमी, अभाव, तंगी)",
    synonym: "Scarcity",
    antonym: "Abundance"
  },
  {
    id: "vocab_dearth_syn_deficit",
    word: "DEFICIT",
    type: "Synonym",
    meaning: "The amount by which something, especially a sum of money, is too small or short (घाटा, कमी, न्यूनता)",
    synonym: "Shortage",
    antonym: "Surplus"
  },
  {
    id: "vocab_dearth_syn_crunch",
    word: "CRUNCH",
    type: "Synonym",
    meaning: "A severe shortage or restriction of crucial resources, especially money or time (संकट, तंगी, कमी)",
    synonym: "Crisis",
    antonym: "Plenty"
  },
  {
    id: "vocab_dearth_syn_drought",
    word: "DROUGHT",
    type: "Synonym",
    meaning: "A prolonged period of abnormally low rainfall leading to severe water shortage (सूखा, पानी की कमी, अकाल)",
    synonym: "Shortage",
    antonym: "Flood"
  },
  {
    id: "vocab_dearth_syn_lack",
    word: "LACK",
    type: "Synonym",
    meaning: "The state of not having enough or being entirely without something necessary (कमी, अभाव, अनुपलब्धता)",
    synonym: "Absence",
    antonym: "Presence"
  },
  {
    id: "vocab_dearth_syn_paucity",
    word: "PAUCITY",
    type: "Synonym",
    meaning: "The presence of something in only small, insufficient, or sparse quantities (कमी, दुर्लभता, अल्पता)",
    synonym: "Scarcity",
    antonym: "Abundance"
  },
  {
    id: "vocab_dearth_syn_scarcity",
    word: "SCARCITY",
    type: "Synonym",
    meaning: "A state of being in short supply or difficult to find; severe insufficiency (कमी, अभाव, किल्लत)",
    synonym: "Shortage",
    antonym: "Abundance"
  },
  {
    id: "vocab_dearth_syn_omission",
    word: "OMISSION",
    type: "Synonym",
    meaning: "The act of leaving someone or something out, resulting in a lack or gap (अनदेखी, छोड़ देना, चूक)",
    synonym: "Exclusion",
    antonym: "Inclusion"
  },
  {
    id: "vocab_dearth_syn_lacuna",
    word: "LACUNA",
    type: "Synonym",
    meaning: "An unfilled space, gap, or missing part in a book, manuscript, or argument (अभाव, रिक्त स्थान, अंतराल)",
    synonym: "Gap",
    antonym: "Completeness"
  },
  {
    id: "vocab_dearth_ant_abundance",
    word: "ABUNDANCE",
    type: "Antonym",
    meaning: "A very large, plentiful, or overflowing quantity of something (प्रचुरता, अधिकता, बहुतायत)",
    synonym: "Plenty",
    antonym: "Dearth"
  },
  {
    id: "vocab_dearth_ant_amplitude",
    word: "AMPLITUDE",
    type: "Antonym",
    meaning: "Greatness of size, magnitude, scope, or capacity; abundance or fullness (प्रचुरता, विस्तार, विशालता)",
    synonym: "Breadth",
    antonym: "Narrowness"
  },
  {
    id: "vocab_dearth_ant_plenty",
    word: "PLENTY",
    type: "Antonym",
    meaning: "A situation in which there is more than enough of something needed (पर्याप्तता, बहुतायत, समृद्धि)",
    synonym: "Abundance",
    antonym: "Lack"
  },
  {
    id: "vocab_dearth_ant_opulence",
    word: "OPULENCE",
    type: "Antonym",
    meaning: "Great wealth, luxuriousness, or lavish abundance (ऐश्वर्य, समृद्धि, ठाठ-बाठ)",
    synonym: "Luxury",
    antonym: "Poverty"
  },
  {
    id: "vocab_dearth_ant_adequacy",
    word: "ADEQUACY",
    type: "Antonym",
    meaning: "The state or quality of being sufficient, acceptable, or enough in quantity (पर्याप्तता, संतोषजनक स्थिति)",
    synonym: "Sufficiency",
    antonym: "Inadequacy"
  },

  // --- SET: AVARICE ---
  {
    id: "vocab_avarice_main",
    word: "AVARICE",
    type: "Synonym",
    meaning: "Extreme greed for wealth, material gain, or possessions (लोभ, लालच, धन-लिप्सा)",
    synonym: "Greed",
    antonym: "Generosity"
  },
  {
    id: "vocab_avarice_syn_avidity",
    word: "AVIDITY",
    type: "Synonym",
    meaning: "Extreme eagerness, enthusiasm, or strong desire/craving for something (लालच, इच्छाशक्ति, उत्सुकता)",
    synonym: "Eagerness",
    antonym: "Indifference"
  },
  {
    id: "vocab_avarice_syn_greed",
    word: "GREED",
    type: "Synonym",
    meaning: "An intense and selfish desire for wealth, power, or food beyond necessity (लालच, हवस, लोभ)",
    synonym: "Avarice",
    antonym: "Generosity"
  },
  {
    id: "vocab_avarice_syn_rapacity",
    word: "RAPACITY",
    type: "Synonym",
    meaning: "Aggressive greed or the quality of taking things by force or predatory means (लूटपाट, हिंसक लोभ, जबरी छीनना)",
    synonym: "Predatoriness",
    antonym: "Generosity"
  },
  {
    id: "vocab_avarice_syn_acquisitiveness",
    word: "ACQUISITIVENESS",
    type: "Synonym",
    meaning: "Excessive eagerness or strong tendency to acquire and hoard money or material possessions (संग्रह करने की प्रवृत्ति, धन-संचय लालच)",
    synonym: "Greed",
    antonym: "Selflessness"
  },
  {
    id: "vocab_avarice_syn_cupidity",
    word: "CUPIDITY",
    type: "Synonym",
    meaning: "Greed or excessive desire, particularly for money, status, or material property (लोभ, धन की हवस)",
    synonym: "Avarice",
    antonym: "Altruism"
  },
  {
    id: "vocab_avarice_syn_appetite",
    word: "APPETITE",
    type: "Synonym",
    meaning: "A strong desire, inclination, or craving for something, such as wealth, power, or luxury (भूख, तीव्र इच्छा, ललक)",
    synonym: "Craving",
    antonym: "Aversion"
  },
  {
    id: "vocab_avarice_syn_voracity",
    word: "VORACITY",
    type: "Synonym",
    meaning: "An insatiable, extreme hunger or eagerness for acquiring wealth or food (अत्यधिक भूख, हवस, पेटूपन)",
    synonym: "Greed",
    antonym: "Satisfaction"
  },
  {
    id: "vocab_avarice_ant_contentment",
    word: "CONTENTMENT",
    type: "Antonym",
    meaning: "A state of happiness, peace of mind, and satisfaction with what one possesses (संतोष, तसल्ली, सुखद संतुष्टि)",
    synonym: "Satisfaction",
    antonym: "Avarice"
  },
  {
    id: "vocab_avarice_ant_satisfaction",
    word: "SATISFACTION",
    type: "Antonym",
    meaning: "Fulfillment of one's wishes, expectations, or needs; peace of mind (संतोष, तसल्ली, पूर्ति)",
    synonym: "Fulfillment",
    antonym: "Greed"
  },
  {
    id: "vocab_avarice_ant_generosity",
    word: "GENEROSITY",
    type: "Antonym",
    meaning: "The quality of being kind, noble, and willing to share or give money freely (उदारता, दानशीलता, दरियादिली)",
    synonym: "Charity",
    antonym: "Avarice"
  },
  {
    id: "vocab_avarice_ant_magnanimity",
    word: "MAGNANIMITY",
    type: "Antonym",
    meaning: "The quality of being generous, noble-minded, and forgiving toward rivals or the needy (उदारता, महानता, विशाल हृदयता)",
    synonym: "Nobility",
    antonym: "Meanness"
  },
  {
    id: "vocab_avarice_ant_altruism",
    word: "ALTRUISM",
    type: "Antonym",
    meaning: "Disinterested and selfless concern for the well-being and happiness of others (परोपकार, निस्वार्थता, दूसरों की भलाई)",
    synonym: "Selflessness",
    antonym: "Egoism"
  },

  // --- SET: EXALT ---
  {
    id: "vocab_exalt_main",
    word: "EXALT",
    type: "Synonym",
    meaning: "To raise someone or something to a higher rank, status, or dignity; to praise highly (गौरव देना, उचाइयों तक उठाना, प्रशंसा करना)",
    synonym: "Elevate",
    antonym: "Degrade"
  },
  {
    id: "vocab_exalt_syn_elevate",
    word: "ELEVATE",
    type: "Synonym",
    meaning: "To raise, lift up, or promote someone or something to a higher position or rank (उठाना, ऊँचा करना, पद बढ़ाना)",
    synonym: "Promote",
    antonym: "Lower"
  },
  {
    id: "vocab_exalt_syn_glorify",
    word: "GLORIFY",
    type: "Synonym",
    meaning: "To praise or honor highly, or to make something seem far more impressive than it is (महिमा मंडित करना, सम्मानित करना)",
    synonym: "Praise",
    antonym: "Demonize"
  },
  {
    id: "vocab_exalt_syn_aggrandize",
    word: "AGGRANDIZE",
    type: "Synonym",
    meaning: "To increase or enhance the power, status, reputation, or wealth of a person or nation (महिमाखंडित करना, पद या प्रतिष्ठा बढ़ाना)",
    synonym: "Enhance",
    antonym: "Belittle"
  },
  {
    id: "vocab_exalt_syn_canonize",
    word: "CANONIZE",
    type: "Synonym",
    meaning: "To officially declare a deceased person to be a saint, or to regard someone as a model of excellence (पवित्र घोषित करना, संत घोषित करना)",
    synonym: "Sanctify",
    antonym: "Condemn"
  },
  {
    id: "vocab_exalt_syn_deify",
    word: "DEIFY",
    type: "Synonym",
    meaning: "To treat, worship, or regard someone or something as a god (देवता का रूप देना, पूजनीय बनाना)",
    synonym: "Worship",
    antonym: "Despise"
  },
  {
    id: "vocab_exalt_syn_ennoble",
    word: "ENNOBLE",
    type: "Synonym",
    meaning: "To elevate someone to a noble rank or make them morally superior and honorable (आदर्श बनाना, श्रेष्ठ बनाना)",
    synonym: "Dignify",
    antonym: "Degrade"
  },
  {
    id: "vocab_exalt_syn_magnify",
    word: "MAGNIFY",
    type: "Synonym",
    meaning: "To make something seem larger, more important, or more impressive than it actually is (बड़ा चढ़ा कर दिखाना, महिमामंडित करना)",
    synonym: "Exaggerate",
    antonym: "Minimize"
  },
  {
    id: "vocab_exalt_syn_extol",
    word: "EXTOL",
    type: "Synonym",
    meaning: "To praise someone or something enthusiastically and publicly (सराहना करना, प्रशंसा करना)",
    synonym: "Praise",
    antonym: "Criticize"
  },
  {
    id: "vocab_exalt_syn_laud",
    word: "LAUD",
    type: "Synonym",
    meaning: "To praise, applaud, or commend someone or something highly in public (सराहना करना, प्रशंसा करना)",
    synonym: "Praise",
    antonym: "Condemn"
  },
  {
    id: "vocab_exalt_ant_abase",
    word: "ABASE",
    type: "Antonym",
    meaning: "To behave in a way that belittles, degrades, or lowers someone's rank, dignity, or status (नीचा दिखाना, अपमानित करना)",
    synonym: "Humiliate",
    antonym: "Exalt"
  },
  {
    id: "vocab_exalt_ant_degrade",
    word: "DEGRADE",
    type: "Antonym",
    meaning: "To lower in dignity, honor, or social standing; to treat with disrespect (गिराना, अपमानित करना)",
    synonym: "Demean",
    antonym: "Elevate"
  },
  {
    id: "vocab_exalt_ant_demean",
    word: "DEMEAN",
    type: "Antonym",
    meaning: "To cause a severe loss in the dignity of or respect for someone; humiliate (अपमानित करना, नीचा दिखाना)",
    synonym: "Belittle",
    antonym: "Honour"
  },
  {
    id: "vocab_exalt_ant_humiliate",
    word: "HUMILIATE",
    type: "Antonym",
    meaning: "To make someone feel foolish, ashamed, or embarrassed by lowering their dignity publicly (अपमानित करना, लज्जित करना)",
    synonym: "Embarrass",
    antonym: "Praise"
  },
  {
    id: "vocab_exalt_ant_censure",
    word: "CENSURE",
    type: "Antonym",
    meaning: "To express severe disapproval or harsh criticism of someone in an official manner (आलोचना करना, निंदा करना)",
    synonym: "Condemn",
    antonym: "Laud"
  },
  {
    id: "vocab_exalt_ant_admonish",
    word: "ADMONISH",
    type: "Antonym",
    meaning: "To warn, reprimand, or scold someone firmly for a fault or error (चेतावनी देना, उपदेश देना/डांटना)",
    synonym: "Reprimand",
    antonym: "Praise"
  },
  // --- SET: PETULANCE ---
  {
    id: "vocab_petulance_main",
    word: "PETULANCE",
    type: "Synonym",
    meaning: "The quality of being easily irritated or annoyed, especially in a childish or sulky way (चिड़चिड़ापन, बालसुलभ झुंझलाहट या क्रोध)",
    synonym: "Irritableness",
    antonym: "Patience"
  },
  {
    id: "vocab_petulance_syn_irritableness",
    word: "IRRITABLENESS",
    type: "Synonym",
    meaning: "The tendency to be easily annoyed, angered, or provoked by minor issues (चिड़चिड़ापन, आसानी से नाराज होने का स्वभाव)",
    synonym: "Peevishness",
    antonym: "Forbearance"
  },
  {
    id: "vocab_petulance_syn_biliousness",
    word: "BILIOUSNESS",
    type: "Synonym",
    meaning: "The quality of being irritable, bad-tempered, or angry, often associated with a bad mood (पित्त-सुलभ चिड़चिड़ापन, बदमिजाजी)",
    synonym: "Bad-temper",
    antonym: "Affability"
  },
  {
    id: "vocab_petulance_syn_grouchiness",
    word: "GROUCHINESS",
    type: "Synonym",
    meaning: "A state of being irritable, complaining, or grumpy over small matters (खीझ, चिड़चिड़ापन, झल्लाहट)",
    synonym: "Grumpiness",
    antonym: "Cordiality"
  },
  {
    id: "vocab_petulance_syn_perversity",
    word: "PERVERSITY",
    type: "Synonym",
    meaning: "The quality of being deliberately difficult, stubborn, or contrary in an unreasonable way (उदंडता, हठधर्मिता, विपरीतता)",
    synonym: "Obstinacy",
    antonym: "Compliance"
  },
  {
    id: "vocab_petulance_syn_peevishness",
    word: "PEEVISHNESS",
    type: "Synonym",
    meaning: "A state of being easily annoyed or difficult to please regarding tiny inconveniences (चिड़चिड़ापन, छोटी बातों पर चिढ़ना)",
    synonym: "Irritability",
    antonym: "Amiability"
  },
  {
    id: "vocab_petulance_syn_surliness",
    word: "SURLINESS",
    type: "Synonym",
    meaning: "A bad-tempered, unfriendly, or gruff attitude marked by rudeness (कर्कशता, रूखापन, अशिष्ट व्यवहार)",
    synonym: "Gruffness",
    antonym: "Friendliness"
  },
  {
    id: "vocab_petulance_ant_forbearance",
    word: "FORBEARANCE",
    type: "Antonym",
    meaning: "Patient self-control and restraint; the ability to endure difficult situations peacefully (सहनशीलता, संयम, आत्मनियंत्रण)",
    synonym: "Restraint",
    antonym: "Petulance"
  },
  {
    id: "vocab_petulance_ant_patience",
    word: "PATIENCE",
    type: "Antonym",
    meaning: "The capacity to accept or tolerate delay, trouble, or suffering without getting angry (धैर्य, सहनशीलता, सब्र)",
    synonym: "Endurance",
    antonym: "Impatience"
  },
  {
    id: "vocab_petulance_ant_affability",
    word: "AFFABILITY",
    type: "Antonym",
    meaning: "The quality of being friendly, good-natured, warm, and easy to talk to (मिलनसारिता, दोस्ताना व्यवहार)",
    synonym: "Warmth",
    antonym: "Surliness"
  },
  {
    id: "vocab_petulance_ant_amenity",
    word: "AMENITY",
    type: "Antonym",
    meaning: "Pleasantness, friendliness, or a agreeable feature that adds comfort to interactions (सुख-सुविधाएं, सौम्यता, सुखद व्यवहार)",
    synonym: "Pleasantness",
    antonym: "Harshness"
  },
  {
    id: "vocab_petulance_ant_cordiality",
    word: "CORDIALITY",
    type: "Antonym",
    meaning: "The quality of being warm, friendly, polite, and sincere in greeting or behavior (सौहार्दता, मित्रवत व्यवहार)",
    synonym: "Friendliness",
    antonym: "Hostility"
  },

  // --- SET: SACCHARINE ---
  {
    id: "vocab_saccharine_main",
    word: "SACCHARINE",
    type: "Synonym",
    meaning: "Excessively sweet, sentimental, or affectionate, often in a way that feels insincere or fake (अत्यधिक मीठा, चापलूसी भरा, बनावटी प्रेमपूर्ण)",
    synonym: "Cloying",
    antonym: "Unsentimental"
  },
  {
    id: "vocab_saccharine_syn_cloying",
    word: "CLOYING",
    type: "Synonym",
    meaning: "Overly sweet, rich, or sentimental to the point of being unpleasant or sickening (अत्यधिक मीठा, घिसा-पिटा, उबाऊ)",
    synonym: "Excessive",
    antonym: "Mild"
  },
  {
    id: "vocab_saccharine_syn_corny",
    word: "CORNY",
    type: "Synonym",
    meaning: "Overly sentimental, cheesy, or trite, often feeling forced or insincere (घिसा-पिटा, पुराना, अति-भावुक)",
    synonym: "Cheesy",
    antonym: "Original"
  },
  {
    id: "vocab_saccharine_syn_drippy",
    word: "DRIPPY",
    type: "Synonym",
    meaning: "Excessively sentimental or emotional in an exaggerated, dramatic way (नाटक-सा भावुक, अति-संवेदनशील)",
    synonym: "Mawkish",
    antonym: "Pragmatic"
  },
  {
    id: "vocab_saccharine_syn_flattery",
    word: "FLATTERY",
    type: "Synonym",
    meaning: "Excessive and insincere praise given to someone, usually to gain favor or advantage (चापलूसी, झूठी प्रशंसा)",
    synonym: "Praise",
    antonym: "Criticism"
  },
  {
    id: "vocab_saccharine_syn_sugary",
    word: "SUGARY",
    type: "Synonym",
    meaning: "Excessively sweet, flattering, or sentimental in a manner that feels forced or fake (मीठा, सुखद लेकिन बनावटी)",
    synonym: "Sweet",
    antonym: "Bitter"
  },
  {
    id: "vocab_saccharine_syn_nostalgic",
    word: "NOSTALGIC",
    type: "Synonym",
    meaning: "A sentimental longing or affection for the past, often with exaggerated warmth (पुरानी यादों में खो जाने वाला, स्मृतिप्रिय)",
    synonym: "Wistful",
    antonym: "Unsentimental"
  },
  {
    id: "vocab_saccharine_syn_sloppy",
    word: "SLOPPY",
    type: "Synonym",
    meaning: "Careless or overly emotional and foolishly sentimental without restraint (अस्तव्यस्त, अव्यवस्थित, अति-भावुक)",
    synonym: "Careless",
    antonym: "Meticulous"
  },
  {
    id: "vocab_saccharine_syn_sentimental",
    word: "SENTIMENTAL",
    type: "Synonym",
    meaning: "Expressing or influenced by feelings of tenderness, nostalgia, or emotion (भावुक, संवेगात्मक)",
    synonym: "Emotional",
    antonym: "Callous"
  },
  {
    id: "vocab_saccharine_ant_unsentimental",
    word: "UNSENTIMENTAL",
    type: "Antonym",
    meaning: "Lacking or not influenced by sentimental feelings; pragmatic and rational (संवेदनहीन, व्यवहारिक, भावुकता-रहित)",
    synonym: "Pragmatic",
    antonym: "Sentimental"
  },
  {
    id: "vocab_saccharine_ant_unadulterated",
    word: "UNADULTERATED",
    type: "Antonym",
    meaning: "Not altered, tainted, or exaggerated in any way; pure, plain, and honest (शुद्ध, अप्रभावित, बिना मिलावट का)",
    synonym: "Pure",
    antonym: "Tainted"
  },
  {
    id: "vocab_saccharine_ant_cynical",
    word: "CYNICAL",
    type: "Antonym",
    meaning: "Believing that people are motivated purely by self-interest; distrustful of sincerity (निराशावादी, व्यंग्यपूर्ण, शंकालू)",
    synonym: "Skeptical",
    antonym: "Trusting"
  },
  {
    id: "vocab_saccharine_ant_unvarnished",
    word: "UNVARNISHED",
    type: "Antonym",
    meaning: "Plain, straightforward, and direct; expressed without embellishment or sugarcoating (सादा, बिना सजावट के, स्पष्ट सच)",
    synonym: "Direct",
    antonym: "Embellished"
  },

  // --- SET: PUGNACIOUS ---
  {
    id: "vocab_pugnacious_main",
    word: "PUGNACIOUS",
    type: "Synonym",
    meaning: "Eager or quick to argue, quarrel, or fight; combative and aggressive in nature (माारक, झगड़ालू, युद्धप्रिय)",
    synonym: "Bellicose",
    antonym: "Pacific"
  },
  {
    id: "vocab_pugnacious_syn_bellicose",
    word: "BELLICOSE",
    type: "Synonym",
    meaning: "Demonstrating a aggressive willingness to fight or wage war; warlike (युद्धप्रिय, युद्ध के लिए उकसाने वाला)",
    synonym: "Warlike",
    antonym: "Peaceful"
  },
  {
    id: "vocab_pugnacious_syn_aggressive",
    word: "AGGRESSIVE",
    type: "Synonym",
    meaning: "Ready or likely to attack or confront; forcefully assertive or competitive (आक्रामक, आक्रोशपूर्ण)",
    synonym: "Hostile",
    antonym: "Submissive"
  },
  {
    id: "vocab_pugnacious_syn_assaultive",
    word: "ASSAULTIVE",
    type: "Synonym",
    meaning: "Inclined to attack, assault, or confront others physically or verbally (आक्रमणकारी, हमलावर)",
    synonym: "Violent",
    antonym: "Gentle"
  },
  {
    id: "vocab_pugnacious_syn_belligerent",
    word: "BELLIGERENT",
    type: "Synonym",
    meaning: "Hostile and aggressive; engaged in or inclined toward fighting (युद्धप्रिय, आक्रामक)",
    synonym: "Combative",
    antonym: "Peaceful"
  },
  {
    id: "vocab_pugnacious_syn_combative",
    word: "COMBATIVE",
    type: "Synonym",
    meaning: "Ready or eager to fight, argue, or contest everything strongly (संघर्षशील, लड़ाई का इच्छुक)",
    synonym: "Feisty",
    antonym: "Conciliatory"
  },
  {
    id: "vocab_pugnacious_syn_disputatious",
    word: "DISPUTATIOUS",
    type: "Synonym",
    meaning: "Fond of or given to heated arguments, disputes, and debates (विवादास्पद, बहस करने वाला)",
    synonym: "Argumentative",
    antonym: "Agreeable"
  },
  {
    id: "vocab_pugnacious_syn_cranky",
    word: "CRANKY",
    type: "Synonym",
    meaning: "Bad-tempered, irritable, and prone to angry outbursts or arguments (चिड़चिड़ा, गुस्सैल)",
    synonym: "Irritable",
    antonym: "Calm"
  },
  {
    id: "vocab_pugnacious_ant_pacific",
    word: "PACIFIC",
    type: "Antonym",
    meaning: "Peaceful in character or intent; inclined to avoid conflict or war (शांतिपूर्ण, शांतिप्रिय)",
    synonym: "Peaceful",
    antonym: "Pugnacious"
  },
  {
    id: "vocab_pugnacious_ant_nonbelligerent",
    word: "NONBELLIGERENT",
    type: "Antonym",
    meaning: "Not aggressive or inclined to fight or engage in conflict; peaceful (संघर्षहीन, युद्ध से अनिच्छुक)",
    synonym: "Neutral",
    antonym: "Belligerent"
  },
  {
    id: "vocab_pugnacious_ant_uncontentious",
    word: "UNCONTENTIOUS",
    type: "Antonym",
    meaning: "Not likely to cause or engage in argument, debate, or dispute (गैर-विवादात्मक, विवाद से दूर)",
    synonym: "Peaceable",
    antonym: "Contentious"
  },
  {
    id: "vocab_pugnacious_ant_uncombative",
    word: "UNCOMBATIVE",
    type: "Antonym",
    meaning: "Not eager to fight, quarrel, or engage in active confrontation (असंघर्षशील, गैर-लड़ाकू)",
    synonym: "Gentle",
    antonym: "Combative"
  },
  {
    id: "vocab_pugnacious_ant_peaceful",
    word: "PEACEFUL",
    type: "Antonym",
    meaning: "Free from disturbance, conflict, or violence; calm and tranquil (शांतिपूर्ण, अमनपसंद)",
    synonym: "Calm",
    antonym: "Violent"
  },

  // --- SET: BANTER ---
  {
    id: "vocab_banter_main",
    word: "BANTER",
    type: "Synonym",
    meaning: "Light, playful, and good-humored teasing conversation or remarks (मजाक, हंसी-मजाक, छेड़छाड़)",
    synonym: "Badinage",
    antonym: "Flattery"
  },
  {
    id: "vocab_banter_syn_chaff",
    word: "CHAFF",
    type: "Synonym",
    meaning: "Light-hearted, teasing conversation or good-natured mocking remarks (मजाक, हंसी-मजाक करना)",
    synonym: "Teasing",
    antonym: "Seriousness"
  },
  {
    id: "vocab_banter_syn_badinage",
    word: "BADINAGE",
    type: "Synonym",
    meaning: "Playful, witty, and light teasing conversation intended to amuse (हंसी-मजाक, शरारत भरी बातचीत)",
    synonym: "Banter",
    antonym: "Argument"
  },
  {
    id: "vocab_banter_syn_jesting",
    word: "JESTING",
    type: "Synonym",
    meaning: "The act of making playful, humorous remarks or jokes (मजाक, चिढ़ाना, दिल्लगी)",
    synonym: "Joking",
    antonym: "Gravity"
  },
  {
    id: "vocab_banter_syn_sally",
    word: "SALLY",
    type: "Synonym",
    meaning: "A witty, clever, or sharp quick remark made during a conversation (ताना, तीखा या चतुर मजाक)",
    synonym: "Wisecrack",
    antonym: "Platitude"
  },
  {
    id: "vocab_banter_syn_laugh",
    word: "LAUGH",
    type: "Synonym",
    meaning: "An expression of joy, amusement, or light-hearted jesting (हंसी, मजाक करना)",
    synonym: "Giggle",
    antonym: "Frown"
  },
  {
    id: "vocab_banter_syn_humorousness",
    word: "HUMOROUSNESS",
    type: "Synonym",
    meaning: "The quality of being funny, amusing, or entertaining in talk (हास्यपूर्णता, विनोदी स्वभाव)",
    synonym: "Wit",
    antonym: "Solemnity"
  },
  {
    id: "vocab_banter_syn_chatter",
    word: "CHATTER",
    type: "Synonym",
    meaning: "Continuous, light-hearted, informal, and casual conversation (बड़बड़ाना, बक-बक करना, गपशप)",
    synonym: "Gossip",
    antonym: "Silence"
  },
  {
    id: "vocab_banter_ant_flattery",
    word: "FLATTERY",
    type: "Antonym",
    meaning: "Excessive or insincere praise given to please someone rather than teasing them (चापलूसी, झूठी तारीफ)",
    synonym: "Adulation",
    antonym: "Banter"
  },
  {
    id: "vocab_banter_ant_praise",
    word: "PRAISE",
    type: "Antonym",
    meaning: "An expression of warm approval, admiration, or commendation in a formal tone (सराहा, प्रशंसा करना)",
    synonym: "Commendation",
    antonym: "Teasing"
  },
  {
    id: "vocab_banter_ant_laud",
    word: "LAUD",
    type: "Antonym",
    meaning: "To highly praise or glorify someone in a formal or public manner (प्रशंसा करना, गुणगान करना)",
    synonym: "Extol",
    antonym: "Mock"
  },
  {
    id: "vocab_banter_ant_extol",
    word: "EXTOL",
    type: "Antonym",
    meaning: "To glorify or praise someone enthusiastically without playful banter (महिमा मंडित करना, प्रशंसा करना)",
    synonym: "Praise",
    antonym: "Deride"
  },
  {
    id: "vocab_banter_ant_discussion",
    word: "DISCUSSION",
    type: "Antonym",
    meaning: "A serious, formal exchange of ideas or analysis without light jokes (चर्चा, गंभीर बातचीत)",
    synonym: "Debate",
    antonym: "Banter"
  },

  // --- SET: CLANDESTINE ---
  {
    id: "vocab_clandestine_main",
    word: "CLANDESTINE",
    type: "Synonym",
    meaning: "Kept secret or done secretly, especially because it is illicit or unauthorized (गुप्त, छिपा हुआ, गैर-कानूनी)",
    synonym: "Covert",
    antonym: "Overt"
  },
  {
    id: "vocab_clandestine_syn_covert",
    word: "COVERT",
    type: "Synonym",
    meaning: "Not openly acknowledged or displayed; hidden, secret, or stealthy (गुप्त, छिपा हुआ)",
    synonym: "Secret",
    antonym: "Overt"
  },
  {
    id: "vocab_clandestine_syn_furtive",
    word: "FURTIVE",
    type: "Synonym",
    meaning: "Attempting to avoid notice or attention, typically because of guilt or fear of discovery (चुपके से, गुप्त)",
    synonym: "Sneaky",
    antonym: "Open"
  },
  {
    id: "vocab_clandestine_syn_stealthy",
    word: "STEALTHY",
    type: "Synonym",
    meaning: "Behaving, proceeding, or done in a cautious, quiet, and secret manner to avoid detection (चुपके से, गुप्त)",
    synonym: "Furtive",
    antonym: "Brazen"
  },
  {
    id: "vocab_clandestine_syn_undercover",
    word: "UNDERCOVER",
    type: "Synonym",
    meaning: "Involving secret work for investigation or intelligence gathering (गुप्त रूप से काम करने वाला)",
    synonym: "Surreptitious",
    antonym: "Public"
  },
  {
    id: "vocab_clandestine_syn_surreptitious",
    word: "SURREPTITIOUS",
    type: "Synonym",
    meaning: "Kept secret, especially because it would not be approved of (छिपा हुआ, गुप्त, छद्म)",
    synonym: "Covert",
    antonym: "Open"
  },
  {
    id: "vocab_clandestine_syn_concealed",
    word: "CONCEALED",
    type: "Synonym",
    meaning: "Kept out of sight or hidden intentionally behind something (छिपा हुआ, गुप्त)",
    synonym: "Hidden",
    antonym: "Exposed"
  },
  {
    id: "vocab_clandestine_syn_underhanded",
    word: "UNDERHANDED",
    type: "Synonym",
    meaning: "Done secretly, dishonestly, or deceitfully to manipulate a situation (कपटी, गुप्त, छलपूर्ण)",
    synonym: "Deceitful",
    antonym: "Honest"
  },
  {
    id: "vocab_clandestine_ant_avowed",
    word: "AVOWED",
    type: "Antonym",
    meaning: "Declared openly and without any attempt to hide; publicly acknowledged (घोषित, स्वीकार किया हुआ)",
    synonym: "Declared",
    antonym: "Secret"
  },
  {
    id: "vocab_clandestine_ant_acknowledged",
    word: "ACKNOWLEDGED",
    type: "Antonym",
    meaning: "Accepted, recognized, or admitted openly and publicly (स्वीकार किया हुआ, माना हुआ)",
    synonym: "Recognized",
    antonym: "Denied"
  },
  {
    id: "vocab_clandestine_ant_obvious",
    word: "OBVIOUS",
    type: "Antonym",
    meaning: "Easily perceived, seen, or understood; clear to everyone (स्पष्ट, जाहिर)",
    synonym: "Clear",
    antonym: "Hidden"
  },
  {
    id: "vocab_clandestine_ant_overt",
    word: "OVERT",
    type: "Antonym",
    meaning: "Done or shown openly; plainly apparent and not secret or hidden (स्पष्ट, प्रकट, खुला)",
    synonym: "Open",
    antonym: "Covert"
  },
  {
    id: "vocab_clandestine_ant_evident",
    word: "EVIDENT",
    type: "Antonym",
    meaning: "Plain or obvious; clearly visible and understood without doubt (स्पष्ट, प्रकट)",
    synonym: "Apparent",
    antonym: "Concealed"
  },
  // --- SET: LACONIC ---
  {
    id: "vocab_laconic_main",
    word: "LACONIC",
    type: "Synonym",
    meaning: "Using very few words to express something; brief, concise, and to the point in speech or writing (संक्षिप्त, संक्षेप में कहने वाला, कम शब्दों का प्रयोग करने वाला)",
    synonym: "Concise",
    antonym: "Verbose"
  },
  {
    id: "vocab_laconic_syn_compact",
    word: "COMPACT",
    type: "Synonym",
    meaning: "Brief and condensed in expression; taking up little space or time (संकुचित, संक्षिप्त)",
    synonym: "Condensed",
    antonym: "Diffuse"
  },
  {
    id: "vocab_laconic_syn_concise",
    word: "CONCISE",
    type: "Synonym",
    meaning: "Giving much information clearly and in a few words without unnecessary details (संक्षिप्त, संक्षेप में)",
    synonym: "Brief",
    antonym: "Wordy"
  },
  {
    id: "vocab_laconic_syn_brief",
    word: "BRIEF",
    type: "Synonym",
    meaning: "Short in duration or length; not taking up much time or space (संक्षिप्त, छोटा)",
    synonym: "Short",
    antonym: "Long"
  },
  {
    id: "vocab_laconic_syn_terse",
    word: "TERSE",
    type: "Synonym",
    meaning: "Abruptly concise, often perceived as blunt or curt in expression (संक्षिप्त, संक्षेप में कठोर)",
    synonym: "Abrupt",
    antonym: "Polite"
  },
  {
    id: "vocab_laconic_syn_pithy",
    word: "PITHY",
    type: "Synonym",
    meaning: "Brief but full of meaning and substance; expressing much effectively in few words (सारगर्भित, संक्षिप्त और प्रभावी)",
    synonym: "Meaningful",
    antonym: "Empty"
  },
  {
    id: "vocab_laconic_syn_succinct",
    word: "SUCCINCT",
    type: "Synonym",
    meaning: "Clearly and briefly expressed without using unnecessary words or details (संक्षिप्त, संक्षेप में)",
    synonym: "Clear",
    antonym: "Rambling"
  },
  {
    id: "vocab_laconic_syn_curt",
    word: "CURT",
    type: "Synonym",
    meaning: "Rudely brief or abrupt in speech or manner (संक्षिप्त, चिढ़े हुए, रूखा)",
    synonym: "Blunt",
    antonym: "Civil"
  },
  {
    id: "vocab_laconic_syn_aphoristic",
    word: "APHORISTIC",
    type: "Synonym",
    meaning: "Expressing a general truth or principle in a brief, concise, and witty manner (सूक्तिवादी, संक्षिप्त और विचारपूर्ण)",
    synonym: "Pithy",
    antonym: "Wordy"
  },
  {
    id: "vocab_laconic_syn_abrupt",
    word: "ABRUPT",
    type: "Synonym",
    meaning: "Sudden and unexpected; brief in a way that seems impolite or blunt (अचानक, झट से, रूखा)",
    synonym: "Sudden",
    antonym: "Gradual"
  },
  {
    id: "vocab_laconic_ant_diffuse",
    word: "DIFFUSE",
    type: "Antonym",
    meaning: "Spread out over a large area or using too many words; not brief or concise (विस्तृत, फैला हुआ, अस्पष्ट)",
    synonym: "Scattered",
    antonym: "Concise"
  },
  {
    id: "vocab_laconic_ant_wordy",
    word: "WORDY",
    type: "Antonym",
    meaning: "Using more words than necessary to express an idea; overly verbose (शब्दों से भरा हुआ, अधिक शब्दों वाला)",
    synonym: "Verbose",
    antonym: "Laconic"
  },
  {
    id: "vocab_laconic_ant_verbose",
    word: "VERBOSE",
    type: "Antonym",
    meaning: "Using or expressed in more words than are needed; long-winded and repetitive (लंबा, अधिक शब्दों वाला)",
    synonym: "Wordy",
    antonym: "Brief"
  },
  {
    id: "vocab_laconic_ant_circuitous",
    word: "CIRCUITOUS",
    type: "Antonym",
    meaning: "Indirect or roundabout; taking a longer route or using more words than necessary (घुमावदार, लंबा रास्ता अपनाने वाला)",
    synonym: "Roundabout",
    antonym: "Direct"
  },
  {
    id: "vocab_laconic_ant_rambling",
    word: "RAMBLING",
    type: "Antonym",
    meaning: "Continuing for too long with a lack of focus, structure, or clarity in talk or writing (लंबी और अनावश्यक बातें करने वाला)",
    synonym: "Unfocused",
    antonym: "Direct"
  },

  // --- SET: PROFANE ---
  {
    id: "vocab_profane_main",
    word: "PROFANE",
    type: "Synonym",
    meaning: "Showing disrespect or irreverence toward something sacred or holy; secular or non-religious (अपवित्र, अशोभनीय, धर्म-विरोधी)",
    synonym: "Irreverent",
    antonym: "Sacred"
  },
  {
    id: "vocab_profane_syn_secular",
    word: "SECULAR",
    type: "Synonym",
    meaning: "Not connected with religious or spiritual matters; worldly or temporal (धर्मनिरपेक्ष, सांसारिक)",
    synonym: "Nonreligious",
    antonym: "Religious"
  },
  {
    id: "vocab_profane_syn_temporal",
    word: "TEMPORAL",
    type: "Synonym",
    meaning: "Relating to worldly or physical affairs as opposed to spiritual matters (सांसारिक, भौतिक)",
    synonym: "Worldly",
    antonym: "Spiritual"
  },
  {
    id: "vocab_profane_syn_nonreligious",
    word: "NONRELIGIOUS",
    type: "Synonym",
    meaning: "Not related to, belonging to, or concerned with religion or faith (धर्मनिरपेक्ष, धार्मिक न होने वाला)",
    synonym: "Secular",
    antonym: "Devout"
  },
  {
    id: "vocab_profane_syn_atheistic",
    word: "ATHEISTIC",
    type: "Synonym",
    meaning: "Denying or rejecting the existence of God or gods (नास्तिक, ईश्वर का इनकार करने वाला)",
    synonym: "Irreligious",
    antonym: "Pious"
  },
  {
    id: "vocab_profane_syn_earthly",
    word: "EARTHLY",
    type: "Synonym",
    meaning: "Relating to the physical world rather than the spiritual or divine realm (भौतिक, सांसारिक)",
    synonym: "Physical",
    antonym: "Heavenly"
  },
  {
    id: "vocab_profane_syn_terrene",
    word: "TERRENE",
    type: "Synonym",
    meaning: "Relating to the earth or the material world as opposed to the celestial sphere (पृथ्वी से संबंधित, भौतिक)",
    synonym: "Mundane",
    antonym: "Divine"
  },
  {
    id: "vocab_profane_syn_blasphemous",
    word: "BLASPHEMOUS",
    type: "Synonym",
    meaning: "Showing disrespect or lack of reverence for God or sacred religious figures (अपवित्र, धर्म विरोधी)",
    synonym: "Sacrilegious",
    antonym: "Reverent"
  },
  {
    id: "vocab_profane_syn_irreverent",
    word: "IRREVERENT",
    type: "Synonym",
    meaning: "Showing a lack of respect or reverence, particularly for sacred or venerated things (अपमानजनक, धार्मिक भावनाओं का उल्लंघन करने वाला)",
    synonym: "Disrespectful",
    antonym: "Respectful"
  },
  {
    id: "vocab_profane_ant_religious",
    word: "RELIGIOUS",
    type: "Antonym",
    meaning: "Relating to religion or religious practices; devout, faithful, or sacred (धार्मिक, आस्थावान)",
    synonym: "Devout",
    antonym: "Profane"
  },
  {
    id: "vocab_profane_ant_sacred",
    word: "SACRED",
    type: "Antonym",
    meaning: "Regarded with great respect and reverence, especially in relation to religion (पवित्र, धार्मिक)",
    synonym: "Holy",
    antonym: "Profane"
  },
  {
    id: "vocab_profane_ant_divine",
    word: "DIVINE",
    type: "Antonym",
    meaning: "Relating to God, a deity, or sacred celestial nature (दिव्य, ईश्वर से संबंधित)",
    synonym: "Heavenly",
    antonym: "Earthly"
  },
  {
    id: "vocab_profane_ant_spiritual",
    word: "SPIRITUAL",
    type: "Antonym",
    meaning: "Relating to the human spirit or soul as opposed to material or physical things (आध्यात्मिक, धार्मिक)",
    synonym: "Sacred",
    antonym: "Temporal"
  },
  {
    id: "vocab_profane_ant_pious",
    word: "PIOUS",
    type: "Antonym",
    meaning: "Devoutly religious; showing deep reverence for God or religious practices (धार्मिक, भक्तिपूर्ण)",
    synonym: "Devout",
    antonym: "Atheistic"
  },
  {
    id: "vocab_profane_ant_reverent",
    word: "REVERENT",
    type: "Antonym",
    meaning: "Showing deep respect or admiration, especially in a sacred context (आदरपूर्ण, श्रद्धापूर्वक)",
    synonym: "Respectful",
    antonym: "Irreverent"
  },

  // --- SET: CYNICAL ---
  {
    id: "vocab_cynical_main",
    word: "CYNICAL",
    type: "Synonym",
    meaning: "Believing that people are motivated purely by self-interest; distrustful of human sincerity or integrity (निराशावादी, संशयी, स्वार्थ-मानने वाला)",
    synonym: "Pessimistic",
    antonym: "Trusting"
  },
  {
    id: "vocab_cynical_syn_pessimistic",
    word: "PESSIMISTIC",
    type: "Synonym",
    meaning: "Tending to see the worst aspect of things or believe that the worst will happen (निराशावादी)",
    synonym: "Gloomy",
    antonym: "Optimistic"
  },
  {
    id: "vocab_cynical_syn_misanthropic",
    word: "MISANTHROPIC",
    type: "Synonym",
    meaning: "Having or showing a dislike, hatred, or distrust of humanity and human nature (मानवद्वेषी, सबसे नफरत करने वाला)",
    synonym: "Antisocial",
    antonym: "Philanthropic"
  },
  {
    id: "vocab_cynical_syn_suspicious",
    word: "SUSPICIOUS",
    type: "Synonym",
    meaning: "Distrusting or doubting others' intentions; believing something may be wrong (संदिग्ध, शक करने वाला)",
    synonym: "Doubtful",
    antonym: "Trusting"
  },
  {
    id: "vocab_cynical_syn_distrustful",
    word: "DISTRUSTFUL",
    type: "Synonym",
    meaning: "Lacking trust or confidence in someone or something; skeptical (अविश्वासी, शंकालू)",
    synonym: "Skeptical",
    antonym: "Confident"
  },
  {
    id: "vocab_cynical_syn_sardonic",
    word: "SARDONIC",
    type: "Synonym",
    meaning: "Grimly mocking, cynical, or sneering; showing disrespect in a bitter way (व्यंग्यपूर्ण, ताने मारने वाला)",
    synonym: "Scornful",
    antonym: "Gentle"
  },
  {
    id: "vocab_cynical_syn_scornful",
    word: "SCORNFUL",
    type: "Synonym",
    meaning: "Showing contempt, derision, or disrespect toward someone or something (अपमानजनक, तिरस्कारपूर्ण)",
    synonym: "Contemptuous",
    antonym: "Respectful"
  },
  {
    id: "vocab_cynical_syn_ironic",
    word: "IRONIC",
    type: "Synonym",
    meaning: "Using irony to express the opposite of what is expected, often highlighting absurdities (व्यंग्यात्मक, विरोधाभासी)",
    synonym: "Sarcastic",
    antonym: "Direct"
  },
  {
    id: "vocab_cynical_ant_uncynical",
    word: "UNCYNICAL",
    type: "Antonym",
    meaning: "Not cynical; having a positive, trusting, and believing outlook on human motives (निराशावादी नहीं, निष्कलंक)",
    synonym: "Trusting",
    antonym: "Cynical"
  },
  {
    id: "vocab_cynical_ant_unsuspicious",
    word: "UNSUSPICIOUS",
    type: "Antonym",
    meaning: "Not suspicious; having full trust and confidence in others' good intentions (बिना संदेह वाला, विश्वासी)",
    synonym: "Trustful",
    antonym: "Suspicious"
  },
  {
    id: "vocab_cynical_ant_naive",
    word: "NAIVE",
    type: "Antonym",
    meaning: "Innocent, inexperienced, and easily trusting without suspecting evil or harm (भोला, मासूम, सीधा-सादा)",
    synonym: "Innocent",
    antonym: "Cynical"
  },
  {
    id: "vocab_cynical_ant_innocent",
    word: "INNOCENT",
    type: "Antonym",
    meaning: "Free from guilt, corruption, or malice; untainted by cynical experience (निर्दोष, मासूम)",
    synonym: "Pure",
    antonym: "Guilty"
  },
  {
    id: "vocab_cynical_ant_optimistic",
    word: "OPTIMISTIC",
    type: "Antonym",
    meaning: "Expecting the best possible outcome or viewing situations in a positive light (आशावादी)",
    synonym: "Hopeful",
    antonym: "Pessimistic"
  },

  // --- SET: MERCURIAL ---
  {
    id: "vocab_mercurial_main",
    word: "MERCURIAL",
    type: "Synonym",
    meaning: "Subject to sudden and unpredictable changes of mood, mind, or behavior; volatile (चंचल, परिवर्तनशील, अस्थिर)",
    synonym: "Capricious",
    antonym: "Stable"
  },
  {
    id: "vocab_mercurial_syn_capricious",
    word: "CAPRICIOUS",
    type: "Synonym",
    meaning: "Given to sudden and unaccountable changes of mood or behavior (उतावला, चंचल, सनकी)",
    synonym: "Fickle",
    antonym: "Predictable"
  },
  {
    id: "vocab_mercurial_syn_fickle",
    word: "FICKLE",
    type: "Synonym",
    meaning: "Changing frequently, especially regarding one's loyalty, interests, or affection (अप्रत्याशित, उतार-चढ़ाव वाला)",
    synonym: "Unstable",
    antonym: "Loyal"
  },
  {
    id: "vocab_mercurial_syn_inconsistent",
    word: "INCONSISTENT",
    type: "Synonym",
    meaning: "Not staying the same throughout; lacking uniformity, stability, or reliability (असंगत, परिवर्तनीय)",
    synonym: "Variable",
    antonym: "Consistent"
  },
  {
    id: "vocab_mercurial_syn_mutable",
    word: "MUTABLE",
    type: "Synonym",
    meaning: "Liable or capable of change or being altered easily (परिवर्तनशील, बदलने योग्य)",
    synonym: "Changeable",
    antonym: "Immutable"
  },
  {
    id: "vocab_mercurial_syn_uncertain",
    word: "UNCERTAIN",
    type: "Synonym",
    meaning: "Not completely sure, reliable, or fixed; subject to doubt or sudden shift (अनिश्चित, असुरक्षित)",
    synonym: "Unsure",
    antonym: "Certain"
  },
  {
    id: "vocab_mercurial_syn_volatile",
    word: "VOLATILE",
    type: "Synonym",
    meaning: "Liable to change rapidly and unpredictably, often for the worse; unstable (अस्थिर, परिवर्तनशील)",
    synonym: "Unstable",
    antonym: "Calm"
  },
  {
    id: "vocab_mercurial_syn_desultory",
    word: "DESULTORY",
    type: "Synonym",
    meaning: "Lacking a clear plan, purpose, or enthusiasm; jumping erratically from one thing to another (निरर्थक, अराजक, बिना योजना का)",
    synonym: "Erratic",
    antonym: "Methodical"
  },
  {
    id: "vocab_mercurial_ant_certain",
    word: "CERTAIN",
    type: "Antonym",
    meaning: "Sure, fixed, and free from doubt or unexpected changes; established (निश्चित, प्रामाणिक)",
    synonym: "Sure",
    antonym: "Uncertain"
  },
  {
    id: "vocab_mercurial_ant_immutable",
    word: "IMMUTABLE",
    type: "Antonym",
    meaning: "Unchanging over time or unable to be changed; fixed and permanent (अपरिवर्तनीय, स्थिर)",
    synonym: "Unchangeable",
    antonym: "Mutable"
  },
  {
    id: "vocab_mercurial_ant_stable",
    word: "STABLE",
    type: "Antonym",
    meaning: "Not likely to change, fail, or fluctuate; consistent and firmly fixed (स्थिर, दृढ़)",
    synonym: "Steady",
    antonym: "Volatile"
  },
  {
    id: "vocab_mercurial_ant_invariable",
    word: "INVARIABLE",
    type: "Antonym",
    meaning: "Never changing; constantly remaining the same in all circumstances (अपरिवर्तनीय, समान)",
    synonym: "Constant",
    antonym: "Variable"
  },
  {
    id: "vocab_mercurial_ant_settled",
    word: "SETTLED",
    type: "Antonym",
    meaning: "Fixed, established, or resolved; not subject to sudden disturbance or change (स्थिर, तय)",
    synonym: "Fixed",
    antonym: "Unsettled"
  },
  {
    id: "vocab_mercurial_ant_predictable",
    word: "PREDICTABLE",
    type: "Antonym",
    meaning: "Able to be foretold or declared in advance with certainty; consistent (पूर्वानुमेय, जो अनुमानित हो)",
    synonym: "Expected",
    antonym: "Capricious"
  },

  // --- SET: STEALTHY ---
  {
    id: "vocab_stealthy_main",
    word: "STEALTHY",
    type: "Synonym",
    meaning: "Moving, acting, or done in a secret, quiet, or sneaky manner to avoid detection (छिपा हुआ, गुप्त, दबे पाँव)",
    synonym: "Furtive",
    antonym: "Overt"
  },
  {
    id: "vocab_stealthy_syn_furtive",
    word: "FURTIVE",
    type: "Synonym",
    meaning: "Attempting to avoid notice or attention, typically because of guilt or fear (चुपके से, गुप्त)",
    synonym: "Sneaky",
    antonym: "Open"
  },
  {
    id: "vocab_stealthy_syn_sly",
    word: "SLY",
    type: "Synonym",
    meaning: "Having or showing a cunning, sneaky, and deceitful nature (चालाक, धूर्त, गुप्त)",
    synonym: "Cunning",
    antonym: "Frank"
  },
  {
    id: "vocab_stealthy_syn_crafty",
    word: "CRAFTY",
    type: "Synonym",
    meaning: "Skilled at achieving goals through clever, indirect, or deceitful methods (चालाक, चतुर)",
    synonym: "Clever",
    antonym: "Honest"
  },
  {
    id: "vocab_stealthy_syn_devious",
    word: "DEVIOUS",
    type: "Synonym",
    meaning: "Showing a willingness to use secret or dishonest tactics to achieve a goal (धोखेबाज़, कपटी)",
    synonym: "Deceitful",
    antonym: "Direct"
  },
  {
    id: "vocab_stealthy_syn_covert",
    word: "COVERT",
    type: "Synonym",
    meaning: "Not openly acknowledged, displayed, or done; hidden and secret (गुप्त, छिपा हुआ)",
    synonym: "Secret",
    antonym: "Overt"
  },
  {
    id: "vocab_stealthy_syn_clandestine",
    word: "CLANDESTINE",
    type: "Synonym",
    meaning: "Kept secret or done stealthily, especially because it is illicit or unauthorized (गुप्त, छिपा हुआ)",
    synonym: "Covert",
    antonym: "Public"
  },
  {
    id: "vocab_stealthy_syn_surreptitious",
    word: "SURREPTITIOUS",
    type: "Synonym",
    meaning: "Obtained, done, or made by stealth or secret unauthorized ways (गुप्त, चुपके से किया गया)",
    synonym: "Furtive",
    antonym: "Open"
  },
  {
    id: "vocab_stealthy_syn_crooked",
    word: "CROOKED",
    type: "Synonym",
    meaning: "Dishonest, corrupt, or deceitful; involving unethical tactics (टेढ़ा, बेईमानी करने वाला)",
    synonym: "Dishonest",
    antonym: "Straightforward"
  },
  {
    id: "vocab_stealthy_ant_aboveboard",
    word: "ABOVEBOARD",
    type: "Antonym",
    meaning: "Legitimate, honest, open, and without any deception or concealment (खुले तौर पर, स्पष्ट, ईमानदार)",
    synonym: "Honest",
    antonym: "Underhanded"
  },
  {
    id: "vocab_stealthy_ant_candid",
    word: "CANDID",
    type: "Antonym",
    meaning: "Truthful, straightforward, and frank in speech or expression (ईमानदार, स्पष्ट, निष्कपट)",
    synonym: "Frank",
    antonym: "Devious"
  },
  {
    id: "vocab_stealthy_ant_open",
    word: "OPEN",
    type: "Antonym",
    meaning: "Not secret, hidden, or concealed; accessible and observable to all (खुला, स्पष्ट)",
    synonym: "Public",
    antonym: "Secret"
  },
  {
    id: "vocab_stealthy_ant_overt",
    word: "OVERT",
    type: "Antonym",
    meaning: "Done or shown openly; plainly apparent and not secret or hidden (स्पष्ट, प्रत्यक्ष, प्रकट)",
    synonym: "Apparent",
    antonym: "Covert"
  },
  {
    id: "vocab_stealthy_ant_evident",
    word: "EVIDENT",
    type: "Antonym",
    meaning: "Clearly visible, understood, or obvious to everyone (स्पष्ट, सिद्ध)",
    synonym: "Obvious",
    antonym: "Hidden"
  },
  {
    id: "vocab_stealthy_ant_patent",
    word: "PATENT",
    type: "Antonym",
    meaning: "Easily visible, plain, or obvious to see; undisputed (स्पष्ट, प्रत्यक्ष)",
    synonym: "Clear",
    antonym: "Concealed"
  },
  {
    id: "vocab_stealthy_ant_avowed",
    word: "AVOWED",
    type: "Antonym",
    meaning: "Declared openly and publicly; acknowledged without attempt to hide (घोषित, प्रतिज्ञापित)",
    synonym: "Declared",
    antonym: "Secret"
  },
  // --- SET: GUILELESS ---
  {
    id: "vocab_guileless_main",
    word: "GUILELESS",
    type: "Synonym",
    meaning: "Free from deceit, cunning, or trickery; sincere, honest, straightforward, and innocent (निर्दोष, सरल, निष्कपट, बिना छल वाला)",
    synonym: "Innocent",
    antonym: "Dishonest"
  },
  {
    id: "vocab_guileless_syn_genuine",
    word: "GENUINE",
    type: "Synonym",
    meaning: "Authentic, real, and sincere; free from pretence, affectation, or deception (असली, वास्तविक, सच्चा)",
    synonym: "Authentic",
    antonym: "Fake"
  },
  {
    id: "vocab_guileless_syn_innocent",
    word: "INNOCENT",
    type: "Synonym",
    meaning: "Free from moral wrong, corruption, or harm; pure and simple in thought (निर्दोष, मासूम, बेगुनाह)",
    synonym: "Pure",
    antonym: "Guilty"
  },
  {
    id: "vocab_guileless_syn_naive",
    word: "NAIVE",
    type: "Synonym",
    meaning: "Lacking experience, wisdom, or sophistication; easily trusting others without suspicion (भोला, मासूम, सीधा-सादा)",
    synonym: "Trusting",
    antonym: "Skeptical"
  },
  {
    id: "vocab_guileless_syn_malleable",
    word: "MALLEABLE",
    type: "Synonym",
    meaning: "Easily influenced, trained, or shaped by external advice or pressure; pliable (लचीला, नम्र, आसानी से ढलने वाला)",
    synonym: "Pliable",
    antonym: "Rigid"
  },
  {
    id: "vocab_guileless_syn_spontaneous",
    word: "SPONTANEOUS",
    type: "Synonym",
    meaning: "Arising naturally without premeditation, force, or artificial planning (स्वाभाविक, स्वतः उत्पन्न, सहज)",
    synonym: "Natural",
    antonym: "Planned"
  },
  {
    id: "vocab_guileless_syn_candid",
    word: "CANDID",
    type: "Synonym",
    meaning: "Truthful, straightforward, and frank in expression without hiding anything (ईमानदार, स्पष्ट, निष्कपट)",
    synonym: "Frank",
    antonym: "Evasive"
  },
  {
    id: "vocab_guileless_syn_unpretentious",
    word: "UNPRETENTIOUS",
    type: "Synonym",
    meaning: "Not attempting to impress others with false importance, talent, or status; modest (बिना आडंबर के, सरल, विनम्र)",
    synonym: "Modest",
    antonym: "Pretentious"
  },
  {
    id: "vocab_guileless_ant_affected",
    word: "AFFECTED",
    type: "Antonym",
    meaning: "Pretending to be something one is not; artificial, insincere, or assumed for effect (आडंबरपूर्ण, बनावटी, दिखावटी)",
    synonym: "Artificial",
    antonym: "Natural"
  },
  {
    id: "vocab_guileless_ant_take",
    word: "TAKE",
    type: "Antonym",
    meaning: "To deceive, trick, or take unfair advantage of someone for personal benefit (धोखा देना, छलना)",
    synonym: "Deceive",
    antonym: "Protect"
  },
  {
    id: "vocab_guileless_ant_insincere",
    word: "INSINCERE",
    type: "Antonym",
    meaning: "Not expressing genuine feelings, intentions, or thoughts; fake and hypocritical (असत्य, धोखेबाज़, बनावटी)",
    synonym: "Deceitful",
    antonym: "Sincere"
  },
  {
    id: "vocab_guileless_ant_pretentious",
    word: "PRETENTIOUS",
    type: "Antonym",
    meaning: "Attempting to impress others by affecting greater importance, talent, or culture than possessed (आडंबरपूर्ण, दिखावा करने वाला)",
    synonym: "Showy",
    antonym: "Modest"
  },
  {
    id: "vocab_guileless_ant_dishonest",
    word: "DISHONEST",
    type: "Antonym",
    meaning: "Not truthful or fair; inclined to lie, cheat, deceive, or manipulate (बेईमान, कपटी, झूठा)",
    synonym: "Untruthful",
    antonym: "Honest"
  },
  {
    id: "vocab_guileless_ant_dissembling",
    word: "DISSEMBLING",
    type: "Antonym",
    meaning: "Concealing one's true motives, feelings, or beliefs under a false appearance (छिपाना, झूठ बोलना, छद्म रूप धारण करना)",
    synonym: "Feigning",
    antonym: "Genuine"
  },

  // --- SET: PRECIPITATE ---
  {
    id: "vocab_precipitate_main",
    word: "PRECIPITATE",
    type: "Synonym",
    meaning: "To cause an event or situation to happen suddenly, unexpectedly, or prematurely without careful thought (शीघ्र करना, झोंकना, अचानक उकसाना)",
    synonym: "Trigger",
    antonym: "Delay"
  },
  {
    id: "vocab_precipitate_syn_cursory",
    word: "CURSORY",
    type: "Synonym",
    meaning: "Hasty and not thorough or detailed; carried out rapidly with minimum attention (संक्षिप्त, सतही, जल्दबाज़ी का)",
    synonym: "Superficial",
    antonym: "Thorough"
  },
  {
    id: "vocab_precipitate_syn_hasty",
    word: "HASTY",
    type: "Synonym",
    meaning: "Done or acting with excessive speed or urgency without sufficient deliberation (जल्दी का, जल्दबाज़ी में किया गया)",
    synonym: "Hurried",
    antonym: "Slow"
  },
  {
    id: "vocab_precipitate_syn_precipitous",
    word: "PRECIPITOUS",
    type: "Synonym",
    meaning: "Dangerously steep, or done with extreme haste and lack of proper consideration (तीव्र, अचानक, जल्दबाज़)",
    synonym: "Sudden",
    antonym: "Gradual"
  },
  {
    id: "vocab_precipitate_syn_rash",
    word: "RASH",
    type: "Synonym",
    meaning: "Acting or done without due consideration of possible consequences; reckless (अविचारपूर्ण, जल्दबाज़ी में, बेपरवाह)",
    synonym: "Reckless",
    antonym: "Cautious"
  },
  {
    id: "vocab_precipitate_syn_impatient",
    word: "IMPATIENT",
    type: "Synonym",
    meaning: "Eager to act quickly; unable or unwilling to wait or endure delay (अधीर, जल्दबाज़)",
    synonym: "Eager",
    antonym: "Patient"
  },
  {
    id: "vocab_precipitate_syn_impetuous",
    word: "IMPETUOUS",
    type: "Synonym",
    meaning: "Acting or done quickly and rashly without thinking through the results; impulsive (आवेगपूर्ण, बिना सोचे-समझे कार्य करने वाला)",
    synonym: "Impulsive",
    antonym: "Prudent"
  },
  {
    id: "vocab_precipitate_syn_impulsive",
    word: "IMPULSIVE",
    type: "Synonym",
    meaning: "Acting on instinct or a sudden urge rather than careful planning or thought (आवेगपूर्ण, स्वेच्छुक)",
    synonym: "Spontaneous",
    antonym: "Deliberate"
  },
  {
    id: "vocab_precipitate_syn_reckless",
    word: "RECKLESS",
    type: "Synonym",
    meaning: "Heedless of danger or consequences; rash and careless in action (लापरवाह, निराधार, बेपरवाह)",
    synonym: "Careless",
    antonym: "Careful"
  },
  {
    id: "vocab_precipitate_ant_deliberate",
    word: "DELIBERATE",
    type: "Antonym",
    meaning: "Done consciously, intentionally, and with careful thought and planning (सोचा-समझा, जानबूझकर)",
    synonym: "Intentional",
    antonym: "Precipitate"
  },
  {
    id: "vocab_precipitate_ant_unhurried",
    word: "UNHURRIED",
    type: "Antonym",
    meaning: "Moving, acting, or taking place slowly and calmly without rushing (निश्चिंत, आराम से)",
    synonym: "Leisurely",
    antonym: "Hasty"
  },
  {
    id: "vocab_precipitate_ant_hesitant",
    word: "HESITANT",
    type: "Antonym",
    meaning: "Uncertain, slow, or reluctant to act immediately due to doubt or indecision (संकोची, झिझकने वाला)",
    synonym: "Indecisive",
    antonym: "Rash"
  },
  {
    id: "vocab_precipitate_ant_circumspect",
    word: "CIRCUMSPECT",
    type: "Antonym",
    meaning: "Wary, cautious, and considering all circumstances and risks before acting (सतर्क, सावधान, विचारशील)",
    synonym: "Cautious",
    antonym: "Impetuous"
  },
  {
    id: "vocab_precipitate_ant_tentative",
    word: "TENTATIVE",
    type: "Antonym",
    meaning: "Not certain or fixed; hesitant, provisional, or done experimentally (संकोचपूर्ण, प्रारंभिक, अनिश्चित)",
    synonym: "Uncertain",
    antonym: "Definite"
  },

  // --- SET: TERRESTRIAL ---
  {
    id: "vocab_terrestrial_main",
    word: "TERRESTRIAL",
    type: "Synonym",
    meaning: "Relating to or existing on the Earth or land, as opposed to water, sky, or spiritual realm (पृथ्वी-संबंधी, पृथ्वी पर आधारित, सांसारिक)",
    synonym: "Earthly",
    antonym: "Celestial"
  },
  {
    id: "vocab_terrestrial_syn_earthborn",
    word: "EARTHBORN",
    type: "Synonym",
    meaning: "Mortal; originating from or relating to the Earth rather than divine origins (पृथ्वी से उत्पन्न, पृथ्वी का)",
    synonym: "Mortal",
    antonym: "Heavenly"
  },
  {
    id: "vocab_terrestrial_syn_carnal",
    word: "CARNAL",
    type: "Synonym",
    meaning: "Relating to physical or material needs and desires rather than spiritual matters (शारीरिक, भौतिक, कामुक)",
    synonym: "Physical",
    antonym: "Spiritual"
  },
  {
    id: "vocab_terrestrial_syn_mundane",
    word: "MUNDANE",
    type: "Synonym",
    meaning: "Lacking interest or excitement; dull, ordinary, or belonging to the earthly world (सांसारिक, नीरस, साधारण)",
    synonym: "Ordinary",
    antonym: "Extraordinary"
  },
  {
    id: "vocab_terrestrial_syn_corporal",
    word: "CORPORAL",
    type: "Synonym",
    meaning: "Relating to the physical body rather than the mind or spirit (शारीरिक, भौतिक)",
    synonym: "Bodily",
    antonym: "Spiritual"
  },
  {
    id: "vocab_terrestrial_syn_temporal",
    word: "TEMPORAL",
    type: "Synonym",
    meaning: "Relating to worldly or material time and life rather than eternal or spiritual existence (भौतिक, सांसारिक, नश्वर)",
    synonym: "Worldly",
    antonym: "Eternal"
  },
  {
    id: "vocab_terrestrial_syn_material",
    word: "MATERIAL",
    type: "Synonym",
    meaning: "Concerned with physical matter or tangible wealth rather than spiritual values (भौतिक, सामग्री संबंधी)",
    synonym: "Tangible",
    antonym: "Spiritual"
  },
  {
    id: "vocab_terrestrial_ant_heavenly",
    word: "HEAVENLY",
    type: "Antonym",
    meaning: "Relating to the sky, heavens, or divine spiritual realm (स्वर्गीय, आकाशीय)",
    synonym: "Divine",
    antonym: "Terrestrial"
  },
  {
    id: "vocab_terrestrial_ant_celestial",
    word: "CELESTIAL",
    type: "Antonym",
    meaning: "Positioned in or relating to the sky, outer space, or divine heavenly bodies (आकाशीय, दिव्य)",
    synonym: "Heavenly",
    antonym: "Earthly"
  },
  {
    id: "vocab_terrestrial_ant_nontemporal",
    word: "NONTEMPORAL",
    type: "Antonym",
    meaning: "Not restricted by worldly time or physical existence; eternal or spiritual (अतिसंवेदी, निराकार, शाश्वत)",
    synonym: "Eternal",
    antonym: "Temporal"
  },
  {
    id: "vocab_terrestrial_ant_empyreal",
    word: "EMPYREAL",
    type: "Antonym",
    meaning: "Relating to the highest heaven, sky, or pure sublime sphere (स्वर्गीय, आकाशीय, दिव्य)",
    synonym: "Sublime",
    antonym: "Earthly"
  },
  {
    id: "vocab_terrestrial_ant_spiritual",
    word: "SPIRITUAL",
    type: "Antonym",
    meaning: "Relating to the human spirit, soul, or religion rather than physical things (आध्यात्मिक, आत्मिक)",
    synonym: "Sacred",
    antonym: "Material"
  },

  // --- SET: AUGMENT ---
  {
    id: "vocab_augment_main",
    word: "AUGMENT",
    type: "Synonym",
    meaning: "To make something greater, larger, or more intense by adding to it; to increase (बढ़ाना, वृद्धि करना, इजाफा करना)",
    synonym: "Amplify",
    antonym: "Curtail"
  },
  {
    id: "vocab_augment_syn_accelerate",
    word: "ACCELERATE",
    type: "Synonym",
    meaning: "To increase the rate, speed, or progress of an action or object (तेज करना, गति बढ़ाना)",
    synonym: "Speedup",
    antonym: "Slowdown"
  },
  {
    id: "vocab_augment_syn_amplify",
    word: "AMPLIFY",
    type: "Synonym",
    meaning: "To increase volume, strength, intensity, or scope of something (बढ़ाना, विस्तारित करना)",
    synonym: "Boost",
    antonym: "Reduce"
  },
  {
    id: "vocab_augment_syn_enlarge",
    word: "ENLARGE",
    type: "Synonym",
    meaning: "To make bigger or more expansive in size, capacity, or scope (बढ़ाना, विस्तारित करना)",
    synonym: "Expand",
    antonym: "Shrink"
  },
  {
    id: "vocab_augment_syn_escalate",
    word: "ESCALATE",
    type: "Synonym",
    meaning: "To increase rapidly in intensity, scale, seriousness, or volume (बढ़ाना, तीव्र करना)",
    synonym: "Intensify",
    antonym: "Diminish"
  },
  {
    id: "vocab_augment_syn_expand",
    word: "EXPAND",
    type: "Synonym",
    meaning: "To become or make larger or more extensive in footprint or coverage (विस्तार करना, फैलाना)",
    synonym: "Broaden",
    antonym: "Contract"
  },
  {
    id: "vocab_augment_syn_extend",
    word: "EXTEND",
    type: "Synonym",
    meaning: "To cause to cover a larger area, duration, or range (बढ़ाना, फैलाना)",
    synonym: "Lengthen",
    antonym: "Shorten"
  },
  {
    id: "vocab_augment_syn_dilate",
    word: "DILATE",
    type: "Synonym",
    meaning: "To make or become wider, larger, or more open (फैलना, चौड़ा करना)",
    synonym: "Widen",
    antonym: "Constrict"
  },
  {
    id: "vocab_augment_ant_abridge",
    word: "ABRIDGE",
    type: "Antonym",
    meaning: "To shorten or condense a text, speech, or right while maintaining core substance (संक्षिप्त करना, छांटना)",
    synonym: "Condense",
    antonym: "Expand"
  },
  {
    id: "vocab_augment_ant_curtail",
    word: "CURTAIL",
    type: "Antonym",
    meaning: "To reduce in extent or quantity; to impose a restriction on something (घटाना, सीमित करना, कटौती करना)",
    synonym: "Reduce",
    antonym: "Augment"
  },
  {
    id: "vocab_augment_ant_abbreviate",
    word: "ABBREVIATE",
    type: "Antonym",
    meaning: "To shorten a word, phrase, or passage for brevity (संक्षेप करना, छोटा करना)",
    synonym: "Shorten",
    antonym: "Extend"
  },
  {
    id: "vocab_augment_ant_compress",
    word: "COMPRESS",
    type: "Antonym",
    meaning: "To flatten, squeeze, or reduce in size or volume by pressure (संकुचित करना, दबाना)",
    synonym: "Squeeze",
    antonym: "Expand"
  },
  {
    id: "vocab_augment_ant_constrict",
    word: "CONSTRICT",
    type: "Antonym",
    meaning: "To make narrower or tighter; to compress or limit freedom/volume (संकुचित करना, तंग करना)",
    synonym: "Tighten",
    antonym: "Dilate"
  },
  {
    id: "vocab_augment_ant_condense",
    word: "CONDENSE",
    type: "Antonym",
    meaning: "To make denser, more compact, or shorter by removing extra bulk (संक्षिप्त करना, गाढ़ा करना)",
    synonym: "Compact",
    antonym: "Amplify"
  },

  // --- SET: RUPTURE ---
  {
    id: "vocab_rupture_main",
    word: "RUPTURE",
    type: "Synonym",
    meaning: "To break or burst suddenly, resulting in a tear, crack, or breach of structure/relations (फटना, टूटना, छलन करना, संबंध तोड़ना)",
    synonym: "Breach",
    antonym: "Repair"
  },
  {
    id: "vocab_rupture_syn_burst",
    word: "BURST",
    type: "Synonym",
    meaning: "To break open or apart suddenly and violently due to internal pressure (फटना, फट जाना)",
    synonym: "Explode",
    antonym: "Seal"
  },
  {
    id: "vocab_rupture_syn_fissure",
    word: "FISSURE",
    type: "Synonym",
    meaning: "A long, narrow opening, crack, or line of breakage made by cracking (दरार, शगाफ)",
    synonym: "Crack",
    antonym: "Closure"
  },
  {
    id: "vocab_rupture_syn_tear",
    word: "TEAR",
    type: "Synonym",
    meaning: "To pull or rip apart by force, causing a hole or split (फटना, छलन करना)",
    synonym: "Rip",
    antonym: "Mend"
  },
  {
    id: "vocab_rupture_syn_incision",
    word: "INCISION",
    type: "Synonym",
    meaning: "A precise surgical cut or slit made into a tissue or surface (चीरा, कट)",
    synonym: "Cut",
    antonym: "Suturing"
  },
  {
    id: "vocab_rupture_syn_breach",
    word: "BREACH",
    type: "Synonym",
    meaning: "An act of breaking or failing to observe a law, agreement, or wall; a gap (उल्लंघन, दरार, तोड़ना)",
    synonym: "Gap",
    antonym: "Union"
  },
  {
    id: "vocab_rupture_syn_cranny",
    word: "CRANNY",
    type: "Synonym",
    meaning: "A small narrow crack, opening, or crevice in a wall or rock (दरार, छिद्र)",
    synonym: "Crevice",
    antonym: "Solid"
  },
  {
    id: "vocab_rupture_syn_groove",
    word: "GROOVE",
    type: "Synonym",
    meaning: "A long narrow cut, track, or channel in a hard material (खांचा, रेखा, नाली)",
    synonym: "Channel",
    antonym: "Ridge"
  },
  {
    id: "vocab_rupture_syn_trench",
    word: "TRENCH",
    type: "Synonym",
    meaning: "A long, narrow ditch or deep excavation in the ground (खड्डा, गहरी खाई)",
    synonym: "Ditch",
    antonym: "Mound"
  },
  {
    id: "vocab_rupture_ant_repair",
    word: "REPAIR",
    type: "Antonym",
    meaning: "To fix, restore, or mend something that is damaged, broken, or ruptured (मरम्मत करना, सुधारना)",
    synonym: "Restore",
    antonym: "Rupture"
  },
  {
    id: "vocab_rupture_ant_mend",
    word: "MEND",
    type: "Antonym",
    meaning: "To fix, sew up, or restore something torn or broken back to working order (ठीक करना, जोड़ना)",
    synonym: "Fix",
    antonym: "Tear"
  },
  {
    id: "vocab_rupture_ant_union",
    word: "UNION",
    type: "Antonym",
    meaning: "The act or state of joining or uniting two or more separate parts into one (संघ, एकता, जुड़ाव)",
    synonym: "Unity",
    antonym: "Separation"
  },
  {
    id: "vocab_rupture_ant_integration",
    word: "INTEGRATION",
    type: "Antonym",
    meaning: "The act or process of combining separate elements into an undivided whole (एकीकरण, समाकलन)",
    synonym: "Blending",
    antonym: "Division"
  },
  {
    id: "vocab_rupture_ant_merger",
    word: "MERGER",
    type: "Antonym",
    meaning: "The combination of two or more entities/organizations into a single entity (विलय, समागम)",
    synonym: "Amalgamation",
    antonym: "Split"
  },
  // --- SET: SATIRICAL ---
  {
    id: "vocab_satirical_main",
    word: "SATIRICAL",
    type: "Synonym",
    meaning: "Containing or using satire; mocking, ridiculing, or criticizing human vices, folly, or institutions through irony (व्यंग्यात्मक, उपहासात्मक)",
    synonym: "Sarcastic",
    antonym: "Mild"
  },
  {
    id: "vocab_satirical_syn_biting",
    word: "BITING",
    type: "Synonym",
    meaning: "Sharp and direct, often causing emotional hurt or severe criticism in speech or tone (तीखा, चुभने वाला)",
    synonym: "Sharp",
    antonym: "Gentle"
  },
  {
    id: "vocab_satirical_syn_sarcastic",
    word: "SARCASTIC",
    type: "Synonym",
    meaning: "Using irony or sharp mockery to convey contempt, insult, or ridicule (व्यंग्यात्मक, तंज कसने वाला)",
    synonym: "Mocking",
    antonym: "Complimentary"
  },
  {
    id: "vocab_satirical_syn_incisive",
    word: "INCISIVE",
    type: "Synonym",
    meaning: "Clear, sharp, and direct in expression, penetrating deeply into the core subject matter (तीव्र, पैना, सटीक)",
    synonym: "Penetrating",
    antonym: "Vague"
  },
  {
    id: "vocab_satirical_syn_sardonic",
    word: "SARDONIC",
    type: "Synonym",
    meaning: "Grimly mocking or cynical; characterized by bitter or scornful humor (उपहासात्मक, मज़ाकिया, तानेदार)",
    synonym: "Scornful",
    antonym: "Kind"
  },
  {
    id: "vocab_satirical_syn_satiric",
    word: "SATIRIC",
    type: "Synonym",
    meaning: "Relating to or characterized by satire; using humor or irony to expose and criticize flaws (व्यंग्यात्मक)",
    synonym: "Ironical",
    antonym: "Praising"
  },
  {
    id: "vocab_satirical_syn_mordant",
    word: "MORDANT",
    type: "Synonym",
    meaning: "Having a sharp, biting, or caustic quality, especially in humor or critical remarks (तीव्र, कटु, चुभता हुआ)",
    synonym: "Caustic",
    antonym: "Pleasant"
  },
  {
    id: "vocab_satirical_syn_abusive",
    word: "ABUSIVE",
    type: "Synonym",
    meaning: "Using harsh, offensive, insulting, or disrespectful language or behavior (अपमानजनक, गालियाँ देने वाला)",
    synonym: "Insulting",
    antonym: "Respectful"
  },
  {
    id: "vocab_satirical_ant_mild",
    word: "MILD",
    type: "Antonym",
    meaning: "Gentle, not harsh, severe, or extreme; lacking intensity or malice (सौम्य, हल्का, मृदु)",
    synonym: "Gentle",
    antonym: "Harsh"
  },
  {
    id: "vocab_satirical_ant_nice",
    word: "NICE",
    type: "Antonym",
    meaning: "Pleasant, agreeable, kind, or polite in nature and demeanor (अच्छा, प्यारा, सुखद)",
    synonym: "Pleasant",
    antonym: "Nasty"
  },
  {
    id: "vocab_satirical_ant_calm",
    word: "CALM",
    type: "Antonym",
    meaning: "Free from agitation, excitement, anger, or harshness; peaceful and steady (शांत, स्थिर)",
    synonym: "Peaceful",
    antonym: "Agitated"
  },
  {
    id: "vocab_satirical_ant_kind",
    word: "KIND",
    type: "Antonym",
    meaning: "Considerate, generous, friendly, and gentle in nature toward others (दयालु, कृपालु)",
    synonym: "Caring",
    antonym: "Cruel"
  },

  // --- SET: ESTRANGE ---
  {
    id: "vocab_estrange_main",
    word: "ESTRANGE",
    type: "Synonym",
    meaning: "To cause someone to feel isolated, distant, or alienated, leading to a loss of affection or closeness (परयापन महसूस कराना, अलग करना, दूरी बनाना)",
    synonym: "Alienate",
    antonym: "Reconcile"
  },
  {
    id: "vocab_estrange_syn_alienate",
    word: "ALIENATE",
    type: "Synonym",
    meaning: "To make someone feel disconnected, hostile, or isolated from a group or relationship (परायापन करना, अकेला करना)",
    synonym: "Estrange",
    antonym: "Unite"
  },
  {
    id: "vocab_estrange_syn_alien",
    word: "ALIEN",
    type: "Synonym",
    meaning: "Strange, unfamiliar, or hostile; not belonging to the specific group or environment (पराया, बाहरी, अजनबी)",
    synonym: "Foreign",
    antonym: "Native"
  },
  {
    id: "vocab_estrange_syn_enrage",
    word: "ENRAGE",
    type: "Synonym",
    meaning: "To make someone extremely angry, furious, or incensed (क्रोधित करना, नाराज करना)",
    synonym: "Infuriate",
    antonym: "Pacify"
  },
  {
    id: "vocab_estrange_syn_incense",
    word: "INCENSE",
    type: "Synonym",
    meaning: "To make someone extremely angry or deeply outrage them (गुस्से में आना, क्रोधित करना)",
    synonym: "Outrage",
    antonym: "Soothe"
  },
  {
    id: "vocab_estrange_syn_inflame",
    word: "INFLAME",
    type: "Synonym",
    meaning: "To provoke intense emotions, especially anger, passion, or hostility (उत्तेजित करना, भड़काना)",
    synonym: "Provoke",
    antonym: "Calm"
  },
  {
    id: "vocab_estrange_syn_disaffect",
    word: "DISAFFECT",
    type: "Synonym",
    meaning: "To make someone feel dissatisfied, alienated, or disconnected from a cause or group (अप्रसन्न करना, असंतुष्ट करना)",
    synonym: "Disillusion",
    antonym: "Enthuse"
  },
  {
    id: "vocab_estrange_syn_separate",
    word: "SEPARATE",
    type: "Synonym",
    meaning: "To cause to move apart, disconnect, or sever bonds between people or things (अलग करना, विभाजित करना)",
    synonym: "Disconnect",
    antonym: "Combine"
  },
  {
    id: "vocab_estrange_ant_reconcile",
    word: "RECONCILE",
    type: "Antonym",
    meaning: "To restore friendly relations, resolve disputes, or bring harmony back to a relationship (सुलाह करना, मेलजोल करना)",
    synonym: "Harmonize",
    antonym: "Estrange"
  },
  {
    id: "vocab_estrange_ant_ingratiate",
    word: "INGRATIATE",
    type: "Antonym",
    meaning: "To bring oneself into someone's favor by flattering or pleasing them (खुश करना, प्रभावित करना)",
    synonym: "Flatter",
    antonym: "Alienate"
  },
  {
    id: "vocab_estrange_ant_mollify",
    word: "MOLLIFY",
    type: "Antonym",
    meaning: "To calm, appease, or soothe someone's anger or hurt feelings (शांति देना, शांत करना)",
    synonym: "Appease",
    antonym: "Enrage"
  },
  {
    id: "vocab_estrange_ant_pacify",
    word: "PACIFY",
    type: "Antonym",
    meaning: "To bring peace or calm to a tense situation; to soothe anger or agitation (शांति बनाना, शांत करना)",
    synonym: "Soothe",
    antonym: "Inflame"
  },
  {
    id: "vocab_estrange_ant_placate",
    word: "PLACATE",
    type: "Antonym",
    meaning: "To make someone less angry or hostile by making concessions or offering peace (शांत करना, मनाना)",
    synonym: "Propitiate",
    antonym: "Incense"
  },

  // --- SET: VOLUBLE ---
  {
    id: "vocab_voluble_main",
    word: "VOLUBLE",
    type: "Synonym",
    meaning: "Speaking or expressed with ease, fluency, rapid speech, and enthusiasm (बातूनी, प्रवाहही, धाराप्रवाह)",
    synonym: "Loquacious",
    antonym: "Reticent"
  },
  {
    id: "vocab_voluble_syn_fluent",
    word: "FLUENT",
    type: "Synonym",
    meaning: "Able to express oneself easily, smoothly, confidently, and accurately in speech or writing (प्रवाही, सहज)",
    synonym: "Articulate",
    antonym: "Inarticulate"
  },
  {
    id: "vocab_voluble_syn_glib",
    word: "GLIB",
    type: "Synonym",
    meaning: "Speaking in a fluent, smooth, and easy manner, often without deep thought or sincerity (आडंबरपूर्ण, बिना सोचे-समझे बोलने वाला)",
    synonym: "Slick",
    antonym: "Profound"
  },
  {
    id: "vocab_voluble_syn_gabby",
    word: "GABBY",
    type: "Synonym",
    meaning: "Talkative, often excessively so, in a way that is considered trivial or chatter-filled (बातूनी, लंबी-लंबी बात करने वाला)",
    synonym: "Chatty",
    antonym: "Silent"
  },
  {
    id: "vocab_voluble_syn_loquacious",
    word: "LOQUACIOUS",
    type: "Synonym",
    meaning: "Extremely talkative, tending to talk a great deal or chatter continuously (शब्दों से भरा हुआ, बातूनी)",
    synonym: "Garrulous",
    antonym: "Taciturn"
  },
  {
    id: "vocab_voluble_syn_garrulous",
    word: "GARRULOUS",
    type: "Synonym",
    meaning: "Excessively talkative, especially on trivial or unimportant matters (बड़बोला, बातों से भरा हुआ)",
    synonym: "Talkative",
    antonym: "Brief"
  },
  {
    id: "vocab_voluble_syn_expansive",
    word: "EXPANSIVE",
    type: "Synonym",
    meaning: "Willing to talk freely, openly, and warmly; communicative and outgoing (विस्तृत, खुला, सामाजिक)",
    synonym: "Outgoing",
    antonym: "Reserved"
  },
  {
    id: "vocab_voluble_syn_effusive",
    word: "EFFUSIVE",
    type: "Synonym",
    meaning: "Expressing feelings of gratitude, pleasure, or approval in an unrestrained or heartfelt manner (अत्यधिक उत्साही, भावुक)",
    synonym: "Gushing",
    antonym: "Restrained"
  },
  {
    id: "vocab_voluble_ant_laconic",
    word: "LACONIC",
    type: "Antonym",
    meaning: "Using very few words in speech or writing; concise and directly to the point (संक्षिप्त, चुपचाप, कम बोलने वाला)",
    synonym: "Concise",
    antonym: "Voluble"
  },
  {
    id: "vocab_voluble_ant_shy",
    word: "SHY",
    type: "Antonym",
    meaning: "Feeling uncomfortable, nervous, or reserved in the presence of others; quiet (शर्मीला, संकोची)",
    synonym: "Timid",
    antonym: "Bold"
  },
  {
    id: "vocab_voluble_ant_reserved",
    word: "RESERVED",
    type: "Antonym",
    meaning: "Slow to reveal emotions or thoughts; kept private, quiet, or restrained (संकोची, चुप रहने वाला)",
    synonym: "Restrained",
    antonym: "Outgoing"
  },
  {
    id: "vocab_voluble_ant_reticent",
    word: "RETICENT",
    type: "Antonym",
    meaning: "Not revealing one's thoughts or feelings readily; naturally inclined to be silent (मौन, चुप, अल्पभाषी)",
    synonym: "Taciturn",
    antonym: "Garrulous"
  },
  {
    id: "vocab_voluble_ant_evasive",
    word: "EVASIVE",
    type: "Antonym",
    meaning: "Tending to avoid or escape direct answers; ambiguous or secretive (बचाव करने वाला, अस्पष्ट)",
    synonym: "Ambiguous",
    antonym: "Direct"
  },
  {
    id: "vocab_voluble_ant_introverted",
    word: "INTROVERTED",
    type: "Antonym",
    meaning: "Preferring to focus inward on one's own thoughts rather than seeking external interaction (अंतर्मुखी, अपने आप में खोया हुआ)",
    synonym: "Quiet",
    antonym: "Extroverted"
  },

  // --- SET: MOROSE ---
  {
    id: "vocab_morose_main",
    word: "MOROSE",
    type: "Synonym",
    meaning: "Sullen, gloomy, ill-tempered, and feeling or showing a sense of deep sadness or depression (उदासीन, मायूस, चिड़चिड़ा)",
    synonym: "Gloomy",
    antonym: "Blithe"
  },
  {
    id: "vocab_morose_syn_gloomy",
    word: "GLOOMY",
    type: "Synonym",
    meaning: "Dark, shadowy, or filled with sadness, despair, or pessimism (उदास, नीरस)",
    synonym: "Melancholy",
    antonym: "Bright"
  },
  {
    id: "vocab_morose_syn_depressive",
    word: "DEPRESSIVE",
    type: "Synonym",
    meaning: "Characterized by severe sadness, low spirits, hopelessness, or emotional gloom (अवसादपूर्ण)",
    synonym: "Dismal",
    antonym: "Cheerful"
  },
  {
    id: "vocab_morose_syn_dreary",
    word: "DREARY",
    type: "Synonym",
    meaning: "Dull, bleak, and lifeless; causing sadness or boredom due to lack of cheer (उदास, निराशाजनक)",
    synonym: "Bleak",
    antonym: "Lively"
  },
  {
    id: "vocab_morose_syn_morbid",
    word: "MORBID",
    type: "Synonym",
    meaning: "Relating to unhealthy or disturbing subjects like death, disease, or extreme gloom (अस्वस्थ, बीमार मानसिकता वाला)",
    synonym: "Unhealthy",
    antonym: "Wholesome"
  },
  {
    id: "vocab_morose_syn_dejected",
    word: "DEJECTED",
    type: "Synonym",
    meaning: "Feeling sad, disheartened, downcast, or in low spirits after a disappointment (उदास, निराश)",
    synonym: "Downcast",
    antonym: "Elated"
  },
  {
    id: "vocab_morose_syn_melancholy",
    word: "MELANCHOLY",
    type: "Synonym",
    meaning: "A deep, pensive, and persistent sadness or grief, often without a clear immediate cause (विषादपूर्ण, शोकपूर्ण)",
    synonym: "Sorrowful",
    antonym: "Joyful"
  },
  {
    id: "vocab_morose_ant_blithe",
    word: "BLITHE",
    type: "Antonym",
    meaning: "Showing a casual and cheerful indifference; happy, carefree, and lighthearted (प्रसन्नचित्त, खुशमिजाज़)",
    synonym: "Carefree",
    antonym: "Morose"
  },
  {
    id: "vocab_morose_ant_buoyant",
    word: "BUOYANT",
    type: "Antonym",
    meaning: "Cheerful, optimistic, and resilient; capable of keeping high spirits (उत्साही, उन्नत)",
    synonym: "Cheerful",
    antonym: "Depressed"
  },
  {
    id: "vocab_morose_ant_merry",
    word: "MERRY",
    type: "Antonym",
    meaning: "Full of high-spirited joy, laughter, and cheerfulness (खुश, उल्लसित)",
    synonym: "Joyful",
    antonym: "Gloomy"
  },
  {
    id: "vocab_morose_ant_hopeful",
    word: "HOPEFUL",
    type: "Antonym",
    meaning: "Feeling or inspiring optimism about a positive future outcome (आशान्वित, आशावादी)",
    synonym: "Optimistic",
    antonym: "Desperate"
  },
  {
    id: "vocab_morose_ant_optimistic",
    word: "OPTIMISTIC",
    type: "Antonym",
    meaning: "Expecting favorable outcomes and looking on the bright side of situations (आशावादी)",
    synonym: "Confident",
    antonym: "Pessimistic"
  },

  // --- SET: DOGMATIC ---
  {
    id: "vocab_dogmatic_main",
    word: "DOGMATIC",
    type: "Synonym",
    meaning: "Asserting opinions in an arrogant, stubborn, or inflexible way as indisputable truth without considering others (कठोर, आस्थावादी, हठी)",
    synonym: "Opinionated",
    antonym: "Broadminded"
  },
  {
    id: "vocab_dogmatic_syn_opinionated",
    word: "OPINIONATED",
    type: "Synonym",
    meaning: "Holding strong, unreasoned beliefs and asserting them stubbornness without hearing alternatives (अभिपानी, हठी)",
    synonym: "Obstinate",
    antonym: "Open-minded"
  },
  {
    id: "vocab_dogmatic_syn_doctrinaire",
    word: "DOCTRINAIRE",
    type: "Synonym",
    meaning: "Stubbornly seeking to impose a doctrine or theory without regard to practical considerations (सिद्धांतवादी, कठोर विचार वाला)",
    synonym: "Dogmatic",
    antonym: "Pragmatic"
  },
  {
    id: "vocab_dogmatic_syn_adamant",
    word: "ADAMANT",
    type: "Synonym",
    meaning: "Refusing to be persuaded or to change one's mind despite evidence or argument (अडिग, दृढ़)",
    synonym: "Unyielding",
    antonym: "Flexible"
  },
  {
    id: "vocab_dogmatic_syn_inflexible",
    word: "INFLEXIBLE",
    type: "Synonym",
    meaning: "Unwilling to change or compromise one's stance, decisions, or beliefs (कठोर, ज़िद्दी)",
    synonym: "Rigid",
    antonym: "Adaptable"
  },
  {
    id: "vocab_dogmatic_syn_perverse",
    word: "PERVERSE",
    type: "Synonym",
    meaning: "Willfully determined to go against what is expected, reasonable, or accepted (विपरीत, ज़िद्दी)",
    synonym: "Contrary",
    antonym: "Cooperative"
  },
  {
    id: "vocab_dogmatic_syn_pontifical",
    word: "PONTIFICAL",
    type: "Synonym",
    meaning: "Characterized by an air of pompous, infallible authority or dogmatic superiority (धर्मगुरु जैसा, अभिमानी)",
    synonym: "Dogmatic",
    antonym: "Humble"
  },
  {
    id: "vocab_dogmatic_ant_receptive",
    word: "RECEPTIVE",
    type: "Antonym",
    meaning: "Willing to consider, accept, or listen to new ideas, suggestions, or feedback (ग्रहणशील, समायोग्य)",
    synonym: "Open",
    antonym: "Dogmatic"
  },
  {
    id: "vocab_dogmatic_ant_broadminded",
    word: "BROADMINDED",
    type: "Antonym",
    meaning: "Having an open mind, tolerant, and willing to accept different opinions and beliefs (उदारमना, खुले विचार वाला)",
    synonym: "Tolerant",
    antonym: "Narrow-minded"
  },
  {
    id: "vocab_dogmatic_ant_undoctrinaire",
    word: "UNDOCTRINAIRE",
    type: "Antonym",
    meaning: "Not committed to or bound by rigid doctrines, theories, or set beliefs (सिद्धांतविहीन, लचीला)",
    synonym: "Flexible",
    antonym: "Doctrinaire"
  },
  // --- SET: AFFLUENT ---
  {
    id: "vocab_affluent_main",
    word: "AFFLUENT",
    type: "Synonym",
    meaning: "Having a lot of wealth, property, or resources; prosperous, rich, and financially well-off (समृद्ध, धनवान, संपन्न)",
    synonym: "Prosperous",
    antonym: "Bankrupt"
  },
  {
    id: "vocab_affluent_syn_opulent",
    word: "OPULENT",
    type: "Synonym",
    meaning: "Having great wealth, luxury, and grand abundance; rich in resources (ऐश्वर्यपूर्ण, संपन्न, भव्य)",
    synonym: "Luxurious",
    antonym: "Deprived"
  },
  {
    id: "vocab_affluent_syn_rich",
    word: "RICH",
    type: "Synonym",
    meaning: "Having a lot of money or valuable possessions and assets; wealthy (अमीर, संपन्न)",
    synonym: "Wealthy",
    antonym: "Poor"
  },
  {
    id: "vocab_affluent_syn_wealthy",
    word: "WEALTHY",
    type: "Synonym",
    meaning: "Having a large amount of money, property, or valuable financial assets (संपन्न, धनवान)",
    synonym: "Prosperous",
    antonym: "Insolvent"
  },
  {
    id: "vocab_affluent_syn_well_to_do",
    word: "WELL-TO-DO",
    type: "Synonym",
    meaning: "Wealthy and in a comfortable, secure financial position (संपन्न, खुशहाल)",
    synonym: "Prosperous",
    antonym: "Needy"
  },
  {
    id: "vocab_affluent_syn_flourishing",
    word: "FLOURISHING",
    type: "Synonym",
    meaning: "Growing or developing successfully, rapidly, and healthily; thriving (समृद्ध, फला-फूला)",
    synonym: "Thriving",
    antonym: "Failing"
  },
  {
    id: "vocab_affluent_syn_propertied",
    word: "PROPERTIED",
    type: "Synonym",
    meaning: "Owning real estate property or having significant financial assets (संपत्ति वाला, मालदार)",
    synonym: "Wealthy",
    antonym: "Propertyless"
  },
  {
    id: "vocab_affluent_syn_privileged",
    word: "PRIVILEGED",
    type: "Synonym",
    meaning: "Having special rights, social advantages, or opportunities, often due to wealth or high status (विशेषाधिकार प्राप्त)",
    synonym: "Advantaged",
    antonym: "Deprived"
  },
  {
    id: "vocab_affluent_ant_unaffluent",
    word: "UNAFFLUENT",
    type: "Antonym",
    meaning: "Lacking wealth, financial resources, or material prosperity (गरीब, निर्धन)",
    synonym: "Poor",
    antonym: "Affluent"
  },
  {
    id: "vocab_affluent_ant_deprived",
    word: "DEPRIVED",
    type: "Antonym",
    meaning: "Lacking basic necessities of life, such as food, shelter, or money (वंचित, अभावग्रस्त)",
    synonym: "Needy",
    antonym: "Privileged"
  },
  {
    id: "vocab_affluent_ant_bankrupt",
    word: "BANKRUPT",
    type: "Antonym",
    meaning: "Unable to pay one's debts; legally declared financially ruined (दिवालिया, कंगाल)",
    synonym: "Insolvent",
    antonym: "Solvent"
  },
  {
    id: "vocab_affluent_ant_insolvent",
    word: "INSOLVENT",
    type: "Antonym",
    meaning: "Lacking the financial ability to pay debts as they become due (दिवालिया, कंगाल)",
    synonym: "Bankrupt",
    antonym: "Wealthy"
  },

  // --- SET: UTILITY ---
  {
    id: "vocab_utility_main",
    word: "UTILITY",
    type: "Synonym",
    meaning: "The state of being useful, beneficial, or serving a practical purpose; usefulness or fitness (उपयोगिता, कार्यक्षमता, लाभ)",
    synonym: "Usefulness",
    antonym: "Uselessness"
  },
  {
    id: "vocab_utility_syn_avail",
    word: "AVAIL",
    type: "Synonym",
    meaning: "The use, advantage, or benefit derived from taking action or using resources (लाभ, उपयोग)",
    synonym: "Benefit",
    antonym: "Futile"
  },
  {
    id: "vocab_utility_syn_account",
    word: "ACCOUNT",
    type: "Synonym",
    meaning: "A consideration or reckoning of something's importance, value, or usefulness (महत्व, मामला, मूल्य)",
    synonym: "Importance",
    antonym: "Insignificance"
  },
  {
    id: "vocab_utility_syn_aid",
    word: "AID",
    type: "Synonym",
    meaning: "Assistance or practical support given to help accomplish a task or objective (सहायता, मदद)",
    synonym: "Help",
    antonym: "Obstacle"
  },
  {
    id: "vocab_utility_syn_relevance",
    word: "RELEVANCE",
    type: "Synonym",
    meaning: "The quality of being directly connected, applicable, or important to the matter at hand (प्रासंगिकता, उपयुक्तता)",
    synonym: "Applicability",
    antonym: "Irrelevance"
  },
  {
    id: "vocab_utility_syn_worth",
    word: "WORTH",
    type: "Synonym",
    meaning: "The value, merit, or usefulness of something in practical terms (मूल्य, महत्व, गुण)",
    synonym: "Value",
    antonym: "Worthlessness"
  },
  {
    id: "vocab_utility_syn_mileage",
    word: "MILEAGE",
    type: "Synonym",
    meaning: "The extent of practical usefulness, gain, or efficiency obtained from something (ईंधन दक्षता, लाभ, उपयोग क्षमता)",
    synonym: "Efficiency",
    antonym: "Waste"
  },
  {
    id: "vocab_utility_syn_serviceability",
    word: "SERVICEABILITY",
    type: "Synonym",
    meaning: "The capability of being used effectively or standing up to wear and tear over time (सेवा योग्य, कार्यत्मकता)",
    synonym: "Durability",
    antonym: "Unfitness"
  },
  {
    id: "vocab_utility_ant_inapplicability",
    word: "INAPPLICABILITY",
    type: "Antonym",
    meaning: "The state of not being applicable, suitable, or relevant to a particular situation or purpose (अनुपयुक्तता)",
    synonym: "Irrelevance",
    antonym: "Relevance"
  },
  {
    id: "vocab_utility_ant_worthlessness",
    word: "WORTHLESSNESS",
    type: "Antonym",
    meaning: "The quality of having no value, utility, or practical usefulness (निरर्थकता, मूल्यहीनता)",
    synonym: "Futility",
    antonym: "Worth"
  },
  {
    id: "vocab_utility_ant_uselessness",
    word: "USELESSNESS",
    type: "Antonym",
    meaning: "The state of having no practical use, value, or ability to achieve results (बेकारपन, अनुपयोगिता)",
    synonym: "Inefficacy",
    antonym: "Utility"
  },

  // --- SET: NAIVE ---
  {
    id: "vocab_naive_main",
    word: "NAIVE",
    type: "Synonym",
    meaning: "Showing a lack of experience, wisdom, or judgment; innocent, trusting, and easily misled (भोला, सरल, मासूम)",
    synonym: "Innocent",
    antonym: "Cynical"
  },
  {
    id: "vocab_naive_syn_innocent",
    word: "INNOCENT",
    type: "Synonym",
    meaning: "Free from moral guilt, deception, or wrongdoing; having a pure and unspoiled nature (मासूम, निर्दोष)",
    synonym: "Pure",
    antonym: "Guilty"
  },
  {
    id: "vocab_naive_syn_ingenuous",
    word: "INGENUOUS",
    type: "Synonym",
    meaning: "Free from deceit or cunning; straightforward, sincere, and openly trusting (सरल, मासूम, निष्कपट)",
    synonym: "Frank",
    antonym: "Disingenuous"
  },
  {
    id: "vocab_naive_syn_primitive",
    word: "PRIMITIVE",
    type: "Synonym",
    meaning: "Relating to a simple, unrefined, or early stage of development; lacking sophistication (आदिम, अपरिमार्जित)",
    synonym: "Unrefined",
    antonym: "Advanced"
  },
  {
    id: "vocab_naive_syn_unsophisticated",
    word: "UNSOPHISTICATED",
    type: "Synonym",
    meaning: "Lacking worldly experience, complexity, refinement, or deceptive tricks (सरल, नादान, सीधा)",
    synonym: "Simple",
    antonym: "Sophisticated"
  },
  {
    id: "vocab_naive_syn_uncritical",
    word: "UNCRITICAL",
    type: "Synonym",
    meaning: "Not inclined to judge, question, or find fault; accepting things blindly without evaluation (आलोचनात्मक नहीं, बिना विचार किए मानने वाला)",
    synonym: "Trusting",
    antonym: "Critical"
  },
  {
    id: "vocab_naive_syn_dewy",
    word: "DEWY",
    type: "Synonym",
    meaning: "Fresh, youthful, or innocent; untainted by harsh worldly wisdom (आर्द्र, ताजगी से भरा, मासूम)",
    synonym: "Fresh",
    antonym: "Jaded"
  },
  {
    id: "vocab_naive_ant_cynical",
    word: "CYNICAL",
    type: "Antonym",
    meaning: "Believing that people are motivated purely by self-interest; distrustful and skeptical (निराशावादी, संशयी)",
    synonym: "Skeptical",
    antonym: "Naive"
  },
  {
    id: "vocab_naive_ant_suspicious",
    word: "SUSPICIOUS",
    type: "Antonym",
    meaning: "Having doubts or mistrust about something or someone; questioning motives (संदिग्ध, शक करने वाला)",
    synonym: "Distrustful",
    antonym: "Trusting"
  },
  {
    id: "vocab_naive_ant_critical",
    word: "CRITICAL",
    type: "Antonym",
    meaning: "Inclined to judge harshly or find fault; evaluating with a keen, analytical eye (आलोचनात्मक, परखने वाला)",
    synonym: "Analytical",
    antonym: "Uncritical"
  },
  {
    id: "vocab_naive_ant_wary",
    word: "WARY",
    type: "Antonym",
    meaning: "Feeling cautious and watchful about potential dangers, tricks, or deceit (सतर्क, सावधान)",
    synonym: "Cautious",
    antonym: "Careless"
  },
  {
    id: "vocab_naive_ant_pragmatic",
    word: "PRAGMATIC",
    type: "Antonym",
    meaning: "Dealing with things sensibly and realistically based on practical experience rather than theory (व्यावहारिक, कार्यदक्ष)",
    synonym: "Practical",
    antonym: "Idealistic"
  },

  // --- SET: PROTRACT ---
  {
    id: "vocab_protract_main",
    word: "PROTRACT",
    type: "Synonym",
    meaning: "To extend or prolong something in time; to make something last longer than necessary (लंबा करना, बढ़ाना, खींचना)",
    synonym: "Prolong",
    antonym: "Curtail"
  },
  {
    id: "vocab_protract_syn_extend",
    word: "EXTEND",
    type: "Synonym",
    meaning: "To make something longer in duration, distance, or reach; to enlarge scope (विस्तार करना, बढ़ाना)",
    synonym: "Lengthen",
    antonym: "Shorten"
  },
  {
    id: "vocab_protract_syn_lengthen",
    word: "LENGTHEN",
    type: "Synonym",
    meaning: "To make or become longer in extent, duration, or physical size (लंबा करना)",
    synonym: "Extend",
    antonym: "Shorten"
  },
  {
    id: "vocab_protract_syn_prolong",
    word: "PROLONG",
    type: "Synonym",
    meaning: "To cause an event, process, or state to continue for a longer time than expected (लंबा करना, खींचना)",
    synonym: "Delay",
    antonym: "Abbreviate"
  },
  {
    id: "vocab_protract_syn_stretch",
    word: "STRETCH",
    type: "Synonym",
    meaning: "To make something longer or wider by pulling; to extend duration or limit (खींचना, फैलाना)",
    synonym: "Expand",
    antonym: "Shrink"
  },
  {
    id: "vocab_protract_syn_enlarge",
    word: "ENLARGE",
    type: "Synonym",
    meaning: "To make something bigger, wider, or more extensive in footprint or scale (बढ़ाना, विशाल करना)",
    synonym: "Expand",
    antonym: "Reduce"
  },
  {
    id: "vocab_protract_syn_attenuate",
    word: "ATTENUATE",
    type: "Synonym",
    meaning: "To reduce the force, intensity, effect, or thickness of something; to stretch thin (कम करना, घटाना, पतला करना)",
    synonym: "Weaken",
    antonym: "Strengthen"
  },
  {
    id: "vocab_protract_syn_expand",
    word: "EXPAND",
    type: "Synonym",
    meaning: "To become or make larger or more extensive in coverage, space, or duration (विस्तारित करना)",
    synonym: "Broaden",
    antonym: "Contract"
  },
  {
    id: "vocab_protract_ant_reduce",
    word: "REDUCE",
    type: "Antonym",
    meaning: "To make smaller or shorter in size, amount, degree, or duration (घटाना, कम करना)",
    synonym: "Decrease",
    antonym: "Increase"
  },
  {
    id: "vocab_protract_ant_diminish",
    word: "DIMINISH",
    type: "Antonym",
    meaning: "To make or become less, smaller, or less significant (घटाना, कम करना)",
    synonym: "Lessen",
    antonym: "Enhance"
  },
  {
    id: "vocab_protract_ant_abridge",
    word: "ABRIDGE",
    type: "Antonym",
    meaning: "To shorten or condense a piece of writing, speech, or process without losing main sense (संक्षिप्त करना)",
    synonym: "Condense",
    antonym: "Prolong"
  },
  {
    id: "vocab_protract_ant_curtail",
    word: "CURTAIL",
    type: "Antonym",
    meaning: "To reduce or cut short in extent, duration, or scope (कम करना, संक्षिप्त करना)",
    synonym: "Shorten",
    antonym: "Extend"
  },
  {
    id: "vocab_protract_ant_abbreviate",
    word: "ABBREVIATE",
    type: "Antonym",
    meaning: "To shorten a word, phrase, or passage by omitting parts of it (संक्षेप करना)",
    synonym: "Shorten",
    antonym: "Protract"
  },

  // --- SET: TORPID ---
  {
    id: "vocab_torpid_main",
    word: "TORPID",
    type: "Synonym",
    meaning: "Mentally or physically inactive; lethargic, sluggish, and lacking energy or movement (सुस्त, निष्क्रया, आलसी)",
    synonym: "Lethargic",
    antonym: "Dynamic"
  },
  {
    id: "vocab_torpid_syn_inactive",
    word: "INACTIVE",
    type: "Synonym",
    meaning: "Not engaged in physical or mental activity; dormant, passive, or motionless (निष्क्रिय, जो सक्रिय न हो)",
    synonym: "Dormant",
    antonym: "Active"
  },
  {
    id: "vocab_torpid_syn_inert",
    word: "INERT",
    type: "Synonym",
    meaning: "Lacking the strength, ability, or impulse to move or act; motionless and slow (निष्क्रिय, अलस)",
    synonym: "Motionless",
    antonym: "Active"
  },
  {
    id: "vocab_torpid_syn_lethargic",
    word: "LETHARGIC",
    type: "Synonym",
    meaning: "Feeling sluggish, drowsy, or lacking energy and enthusiasm (सुस्त, आलसी)",
    synonym: "Sluggish",
    antonym: "Energetic"
  },
  {
    id: "vocab_torpid_syn_quiescent",
    word: "QUIESCENT",
    type: "Synonym",
    meaning: "In a state or period of temporary inactivity, quietness, or rest (शांत, निष्क्रिय)",
    synonym: "Dormant",
    antonym: "Active"
  },
  {
    id: "vocab_torpid_syn_sluggish",
    word: "SLUGGISH",
    type: "Synonym",
    meaning: "Moving slowly or responding with little energy, alertness, or speed (सुस्त, धीमा)",
    synonym: "Slow",
    antonym: "Fast"
  },
  {
    id: "vocab_torpid_syn_apathetic",
    word: "APATHETIC",
    type: "Synonym",
    meaning: "Showing or feeling no interest, enthusiasm, emotion, or concern (उदासीन, नीरस)",
    synonym: "Indifferent",
    antonym: "Enthusiastic"
  },
  {
    id: "vocab_torpid_syn_indolent",
    word: "INDOLENT",
    type: "Synonym",
    meaning: "Habitually lazy; wanting to avoid exertion, work, or physical activity (आलसी, प्रमत्त)",
    synonym: "Lazy",
    antonym: "Diligent"
  },
  {
    id: "vocab_torpid_ant_engaged",
    word: "ENGAGED",
    type: "Antonym",
    meaning: "Actively involved, occupied, or participating attentively in an activity (व्यस्त, संलग्न)",
    synonym: "Involved",
    antonym: "Disengaged"
  },
  {
    id: "vocab_torpid_ant_dynamic",
    word: "DYNAMIC",
    type: "Antonym",
    meaning: "Full of energy, force, and constant movement or progress; active (गतिशील, सक्रिय)",
    synonym: "Vigorous",
    antonym: "Inert"
  },
  {
    id: "vocab_torpid_ant_energetic",
    word: "ENERGETIC",
    type: "Antonym",
    meaning: "Showing or possessing great physical energy, vitality, or vigor (ऊर्जावान, सक्रिय)",
    synonym: "Vigorous",
    antonym: "Lethargic"
  },
  {
    id: "vocab_torpid_ant_vital",
    word: "VITAL",
    type: "Antonym",
    meaning: "Full of life and energy; essential and lively for life or functioning (अत्यंत आवश्यक, जीवन से जुड़ा)",
    synonym: "Lively",
    antonym: "Dull"
  },
  {
    id: "vocab_torpid_ant_vivacious",
    word: "VIVACIOUS",
    type: "Antonym",
    meaning: "Attractively lively, animated, spirited, and full of high energy (जीवंत, उत्साही)",
    synonym: "Lively",
    antonym: "Torpid"
  },
  // --- SET: ACCLAIM ---
  {
    id: "vocab_acclaim_main",
    word: "ACCLAIM",
    type: "Synonym",
    meaning: "To praise enthusiastically and publicly; to approve or commend something highly (सराहना करना, प्रशंसा करना)",
    synonym: "Praise",
    antonym: "Belittle"
  },
  {
    id: "vocab_acclaim_syn_accolade",
    word: "ACCOLADE",
    type: "Synonym",
    meaning: "An award, honor, or expression of praise and admiration for achievement (प्रशंसा, सम्मान, पुरस्कार)",
    synonym: "Honor",
    antonym: "Criticism"
  },
  {
    id: "vocab_acclaim_syn_applause",
    word: "APPLAUSE",
    type: "Synonym",
    meaning: "Approval or praise expressed by clapping hands or vocal appreciation (तालियाँ, प्रशंसा)",
    synonym: "Praise",
    antonym: "Booing"
  },
  {
    id: "vocab_acclaim_syn_glory",
    word: "GLORY",
    type: "Synonym",
    meaning: "High praise, honor, distinction, or fame achieved through notable success (गौरव, महिमा, प्रसिद्धि)",
    synonym: "Fame",
    antonym: "Disgrace"
  },
  {
    id: "vocab_acclaim_syn_homage",
    word: "HOMAGE",
    type: "Synonym",
    meaning: "Publicly expressed respect, honor, or admiration in a formal or ceremonial manner (श्रद्धांजलि, सम्मान)",
    synonym: "Tribute",
    antonym: "Disrespect"
  },
  {
    id: "vocab_acclaim_syn_reclame",
    word: "RECLAME",
    type: "Synonym",
    meaning: "Public praise, recognition, or publicity given through advertisement or public acknowledgment (प्रचार, प्रसार, सार्वजनिक प्रशंसा)",
    synonym: "Publicity",
    antonym: "Obscurity"
  },
  {
    id: "vocab_acclaim_syn_distinction",
    word: "DISTINCTION",
    type: "Synonym",
    meaning: "A mark of honor, excellence, or high achievement earned through effort or talent (विशिष्टता, सम्मान)",
    synonym: "Excellence",
    antonym: "Mediocrity"
  },
  {
    id: "vocab_acclaim_syn_eulogy",
    word: "EULOGY",
    type: "Synonym",
    meaning: "A speech or piece of writing in high praise of someone, often delivered at a funeral (शोकगीत, प्रशंसा का भाषण)",
    synonym: "Tribute",
    antonym: "Condemnation"
  },
  {
    id: "vocab_acclaim_ant_belittle",
    word: "BELITTLE",
    type: "Antonym",
    meaning: "To make someone or something seem less important, valuable, or talented; downplay (कम करना, तुच्छ दिखाना)",
    synonym: "Disparage",
    antonym: "Praise"
  },
  {
    id: "vocab_acclaim_ant_disparage",
    word: "DISPARAGE",
    type: "Antonym",
    meaning: "To speak about someone or something in a derogatory or disrespectful manner (निंदा करना, घटिया दिखाना)",
    synonym: "Belittle",
    antonym: "Commend"
  },
  {
    id: "vocab_acclaim_ant_discommend",
    word: "DISCOMMEND",
    type: "Antonym",
    meaning: "To express disapproval or an unfavorable opinion about something (आलोचना करना, नापसंद करना)",
    synonym: "Disapprove",
    antonym: "Approve"
  },
  {
    id: "vocab_acclaim_ant_admonish",
    word: "ADMONISH",
    type: "Antonym",
    meaning: "To warn or reprimand someone firmly; to advise against a behavior or action (चेतावनी देना, उपदेश देना, डांटना)",
    synonym: "Reprimand",
    antonym: "Praise"
  },
  {
    id: "vocab_acclaim_ant_rebuke",
    word: "REBUKE",
    type: "Antonym",
    meaning: "To express sharp, stern disapproval or criticism of someone because of their actions (फटकार लगाना, आलोचना करना)",
    synonym: "Scold",
    antonym: "Commend"
  },

  // --- SET: SUPERCILIOUS ---
  {
    id: "vocab_supercilious_main",
    word: "SUPERCILIOUS",
    type: "Synonym",
    meaning: "Behaving or looking as though one thinks they are superior to others; arrogantly haughty (घमंडी, घमंड से भरा)",
    synonym: "Arrogant",
    antonym: "Modest"
  },
  {
    id: "vocab_supercilious_syn_cavalier",
    word: "CAVALIER",
    type: "Synonym",
    meaning: "Showing a lack of proper concern, seriousness, or respect; dismissive and haughty (उग्र, लापरवाही से भरा, बेपरवाह)",
    synonym: "Dismissive",
    antonym: "Careful"
  },
  {
    id: "vocab_supercilious_syn_haughty",
    word: "HAUGHTY",
    type: "Synonym",
    meaning: "Arrogantly superior, disdainful, and condescending toward others (घमंडी, अभिमानी)",
    synonym: "Arrogant",
    antonym: "Humble"
  },
  {
    id: "vocab_supercilious_syn_imperious",
    word: "IMPERIOUS",
    type: "Synonym",
    meaning: "Assuming power or authority without justification; arrogant and domineering (प्रभुत्वशाली, तानाशाही)",
    synonym: "Domineering",
    antonym: "Submissive"
  },
  {
    id: "vocab_supercilious_syn_lofty",
    word: "LOFTY",
    type: "Synonym",
    meaning: "Acting with an air of superiority or arrogance; showing pride or disdain (ऊँचा, अभिमानी)",
    synonym: "Proud",
    antonym: "Modest"
  },
  {
    id: "vocab_supercilious_syn_peremptory",
    word: "PEREMPTORY",
    type: "Synonym",
    meaning: "Insisting on immediate attention or obedience in an imperious, arrogant manner (आदेशात्मक, निरकरण करने वाला)",
    synonym: "Imperious",
    antonym: "Lenient"
  },
  {
    id: "vocab_supercilious_syn_pompous",
    word: "POMPOUS",
    type: "Synonym",
    meaning: "Displaying an exaggerated sense of self-importance, dignity, or arrogance (घमंडी, दिखावा करने वाला)",
    synonym: "Arrogant",
    antonym: "Humble"
  },
  {
    id: "vocab_supercilious_syn_pretentious",
    word: "PRETENTIOUS",
    type: "Synonym",
    meaning: "Attempting to impress others by affecting greater importance, talent, or merit than possessed (दिखावा करने वाला, कृत्रिम)",
    synonym: "Showy",
    antonym: "Unpretentious"
  },
  {
    id: "vocab_supercilious_ant_unpretentious",
    word: "UNPRETENTIOUS",
    type: "Antonym",
    meaning: "Not attempting to impress others with an appearance of greater importance or status; modest (साधारण, विनम्र)",
    synonym: "Modest",
    antonym: "Pretentious"
  },
  {
    id: "vocab_supercilious_ant_modest",
    word: "MODEST",
    type: "Antonym",
    meaning: "Not boasting or showing off one's abilities, achievements, or wealth; humble (विनम्र, साधारण)",
    synonym: "Humble",
    antonym: "Arrogant"
  },
  {
    id: "vocab_supercilious_ant_lowly",
    word: "LOWLY",
    type: "Antonym",
    meaning: "Humble, unpretentious, or of low rank; not arrogant or self-important (नीच, साधारण, नम्र)",
    synonym: "Humble",
    antonym: "Haughty"
  },
  {
    id: "vocab_supercilious_ant_demure",
    word: "DEMURE",
    type: "Antonym",
    meaning: "Reserved, modest, and shy in manner, behavior, or attire (संकोची, लज्जाशील, शांत)",
    synonym: "Reserved",
    antonym: "Bold"
  },
  {
    id: "vocab_supercilious_ant_timid",
    word: "TIMID",
    type: "Antonym",
    meaning: "Showing a lack of courage, confidence, or boldness; shy and easily frightened (संकोची, डरपोक)",
    synonym: "Shy",
    antonym: "Bold"
  },
  {
    id: "vocab_supercilious_ant_introverted",
    word: "INTROVERTED",
    type: "Antonym",
    meaning: "Reserved or shy, preferring solitude or quiet over social interaction (अंतर्मुखी, आत्मकेंद्रित)",
    synonym: "Quiet",
    antonym: "Extroverted"
  },

  // --- SET: RECONCILE ---
  {
    id: "vocab_reconcile_main",
    word: "RECONCILE",
    type: "Synonym",
    meaning: "To restore friendly relations between parties; to bring into agreement or settle differences (सुलह करना, मेल-मिलाप करना)",
    synonym: "Harmonize",
    antonym: "Estrange"
  },
  {
    id: "vocab_reconcile_syn_coordinate",
    word: "COORDINATE",
    type: "Synonym",
    meaning: "To organize or bring different elements or groups into a harmonious, efficient relationship (समन्वय करना)",
    synonym: "Organize",
    antonym: "Disorganize"
  },
  {
    id: "vocab_reconcile_syn_harmonize",
    word: "HARMONIZE",
    type: "Synonym",
    meaning: "To bring into agreement, balance, or consistency; to eliminate conflict (सामंजस्य बैठाना)",
    synonym: "Balance",
    antonym: "Conflict"
  },
  {
    id: "vocab_reconcile_syn_conciliate",
    word: "CONCILIATE",
    type: "Synonym",
    meaning: "To stop someone from being angry or discontented; to placate or bring peace (सुलह करना, शांति स्थापित करना)",
    synonym: "Placate",
    antonym: "Provoke"
  },
  {
    id: "vocab_reconcile_syn_accommodate",
    word: "ACCOMMODATE",
    type: "Synonym",
    meaning: "To make adjustments or compromises to fit needs and bring harmony or agreement (समायोजित करना, स्वीकार करना)",
    synonym: "Adjust",
    antonym: "Reject"
  },
  {
    id: "vocab_reconcile_syn_combine",
    word: "COMBINE",
    type: "Synonym",
    meaning: "To unite or join different elements together to form a coherent whole (जोड़ना, मिलाना)",
    synonym: "Unite",
    antonym: "Separate"
  },
  {
    id: "vocab_reconcile_syn_integrate",
    word: "INTEGRATE",
    type: "Synonym",
    meaning: "To bring together different components to work unified as a single whole (एकीकृत करना, सम्मिलित करना)",
    synonym: "Unify",
    antonym: "Divide"
  },
  {
    id: "vocab_reconcile_ant_disharmonize",
    word: "DISHARMONIZE",
    type: "Antonym",
    meaning: "To cause a lack of harmony, agreement, or peace; to create conflict (अशांत करना, अनसंगत करना)",
    synonym: "Disrupt",
    antonym: "Harmonize"
  },
  {
    id: "vocab_reconcile_ant_disrupt",
    word: "DISRUPT",
    type: "Antonym",
    meaning: "To interrupt, disturb, or throw into disorder the normal course or harmony of something (व्यवधान डालना, बाधित करना)",
    synonym: "Disturb",
    antonym: "Restore"
  },
  {
    id: "vocab_reconcile_ant_estrange",
    word: "ESTRANGE",
    type: "Antonym",
    meaning: "To cause someone to feel distant, isolated, or alienated from friends or family (पारायापन लाना, अलग करना)",
    synonym: "Alienate",
    antonym: "Reconcile"
  },
  {
    id: "vocab_reconcile_ant_alienate",
    word: "ALIENATE",
    type: "Antonym",
    meaning: "To make someone feel isolated, rejected, or hostiled from a group (पराया बना देना, बाहर कर देना)",
    synonym: "Estrange",
    antonym: "Unite"
  },

  // --- SET: RATIFY ---
  {
    id: "vocab_ratify_main",
    word: "RATIFY",
    type: "Synonym",
    meaning: "To formally approve or confirm an agreement, treaty, decision, or law by official vote or consent (स्वीकृत करना, पुष्टि करना)",
    synonym: "Confirm",
    antonym: "Reject"
  },
  {
    id: "vocab_ratify_syn_approve",
    word: "APPROVE",
    type: "Synonym",
    meaning: "To officially accept, agree to, or sanction something as valid or satisfactory (मंजूरी देना)",
    synonym: "Accept",
    antonym: "Deny"
  },
  {
    id: "vocab_ratify_syn_accredit",
    word: "ACCREDIT",
    type: "Synonym",
    meaning: "To officially recognize, license, or certify something as meeting a required standard (प्रमाणित करना)",
    synonym: "Certify",
    antonym: "Discredit"
  },
  {
    id: "vocab_ratify_syn_confirm",
    word: "CONFIRM",
    type: "Synonym",
    meaning: "To establish the truth, validity, or accuracy of something officially (पुष्टि करना)",
    synonym: "Verify",
    antonym: "Refute"
  },
  {
    id: "vocab_ratify_syn_sanction",
    word: "SANCTION",
    type: "Synonym",
    meaning: "To give official authorization, approval, or permission to an action or rule (अनुमोदित करना)",
    synonym: "Authorize",
    antonym: "Prohibit"
  },
  {
    id: "vocab_ratify_syn_affirm",
    word: "AFFIRM",
    type: "Synonym",
    meaning: "To state or declare positively and strongly that something is true or valid (पुष्टि करना, बल देना)",
    synonym: "Assert",
    antonym: "Deny"
  },
  {
    id: "vocab_ratify_syn_endorse",
    word: "ENDORSE",
    type: "Synonym",
    meaning: "To publicly declare approval or support for a product, policy, or person (समर्थन करना)",
    synonym: "Support",
    antonym: "Oppose"
  },
  {
    id: "vocab_ratify_syn_acknowledge",
    word: "ACKNOWLEDGE",
    type: "Synonym",
    meaning: "To accept, admit, or recognize the existence or truth of something (स्वीकार करना, मान्यता देना)",
    synonym: "Admit",
    antonym: "Ignore"
  },
  {
    id: "vocab_ratify_ant_deny",
    word: "DENY",
    type: "Antonym",
    meaning: "To refuse to accept, acknowledge, allow, or grant something (नकारना, इंकार करना)",
    synonym: "Refuse",
    antonym: "Confirm"
  },
  {
    id: "vocab_ratify_ant_disallow",
    word: "DISALLOW",
    type: "Antonym",
    meaning: "To refuse to permit, accept, or approve something officially (अनुमति न देना, खारिज करना)",
    synonym: "Reject",
    antonym: "Allow"
  },
  {
    id: "vocab_ratify_ant_reject",
    word: "REJECT",
    type: "Antonym",
    meaning: "To dismiss or refuse to accept, approve, or consider a proposal or idea (अस्वीकृत करना)",
    synonym: "Dismiss",
    antonym: "Accept"
  },
  {
    id: "vocab_ratify_ant_decline",
    word: "DECLINE",
    type: "Antonym",
    meaning: "To politely refuse or turn down an invitation, offer, or proposal (मना करना, अस्वीकार करना)",
    synonym: "Refuse",
    antonym: "Accept"
  },
  {
    id: "vocab_ratify_ant_veto",
    word: "VETO",
    type: "Antonym",
    meaning: "To exercise authoritative power to reject or prohibit a decision, bill, or proposal (अस्वीकृति देना, वीटो करना)",
    synonym: "Prohibit",
    antonym: "Sanction"
  },

  // --- SET: ICONOCLAST ---
  {
    id: "vocab_iconoclast_main",
    word: "ICONOCLAST",
    type: "Synonym",
    meaning: "A person who attacks or criticizes cherished beliefs, traditional institutions, or established social norms (देव प्रतिमा भंजक, परंपरावादी विरोधी)",
    synonym: "Rebel",
    antonym: "Conformist"
  },
  {
    id: "vocab_iconoclast_syn_bohemian",
    word: "BOHEMIAN",
    type: "Synonym",
    meaning: "A person with unconventional artistic habits or social beliefs that contrast with societal norms (स्वतंत्र सोच वाला, बेमिसाल)",
    synonym: "Unconventional",
    antonym: "Conventional"
  },
  {
    id: "vocab_iconoclast_syn_deviant",
    word: "DEVIANT",
    type: "Synonym",
    meaning: "A person whose behavior or beliefs deviate noticeably from accepted social standards (अपरंपरागत, विचलित)",
    synonym: "Nonconformist",
    antonym: "Normal"
  },
  {
    id: "vocab_iconoclast_syn_heretic",
    word: "HERETIC",
    type: "Synonym",
    meaning: "A person holding religious or philosophical opinions that are contrary to orthodox doctrines (विश्वासघाती, पंथ विरोधी)",
    synonym: "Dissident",
    antonym: "Believer"
  },
  {
    id: "vocab_iconoclast_syn_maverick",
    word: "MAVERICK",
    type: "Synonym",
    meaning: "An independent-minded person who refuses to follow the rules, conventions, or guidelines of a group (स्वतंत्र सोच वाला व्यक्ति)",
    synonym: "Individualist",
    antonym: "Follower"
  },
  {
    id: "vocab_iconoclast_syn_individualist",
    word: "INDIVIDUALIST",
    type: "Synonym",
    meaning: "A person who prioritizes personal freedom, independence, and self-reliance over societal conformity (व्यक्तिवादी)",
    synonym: "Independent",
    antonym: "Conformist"
  },
  {
    id: "vocab_iconoclast_syn_free_spirit",
    word: "FREE SPIRIT",
    type: "Synonym",
    meaning: "A person who is unconventional, independent, and uninhibited by social rules or expectations (स्वतंत्र विचार वाला व्यक्ति)",
    synonym: "Nonconformist",
    antonym: "Traditionalist"
  },
  {
    id: "vocab_iconoclast_ant_adherent",
    word: "ADHERENT",
    type: "Antonym",
    meaning: "A person who strongly supports, follows, or holds allegiance to a particular belief, party, or leader (अनुयायी, समर्थक)",
    synonym: "Follower",
    antonym: "Opponent"
  },
  {
    id: "vocab_iconoclast_ant_supporter",
    word: "SUPPORTER",
    type: "Antonym",
    meaning: "A person who advocates, backs, or defends a particular cause, policy, or person (समर्थक, पक्षधर)",
    synonym: "Advocate",
    antonym: "Critic"
  },
  {
    id: "vocab_iconoclast_ant_conformist",
    word: "CONFORMIST",
    type: "Antonym",
    meaning: "A person who strictly adheres to established norms, conventional practices, and societal rules (परंपरा का पालन करने वाला व्यक्ति)",
    synonym: "Traditionalist",
    antonym: "Iconoclast"
  },
  {
    id: "vocab_iconoclast_ant_follower",
    word: "FOLLOWER",
    type: "Antonym",
    meaning: "A person who imitates or accepts the leadership, beliefs, and ideology of another (अनुयायी, चेला)",
    synonym: "Disciple",
    antonym: "Leader"
  },
  // --- SET: AFFINITY ---
  {
    id: "vocab_affinity_main",
    word: "AFFINITY",
    type: "Synonym",
    meaning: "A natural liking, attraction, or sympathy for someone or something; a similarity or connection between things (लगाव, समानता, स्नेह)",
    synonym: "Liking",
    antonym: "Aversion"
  },
  {
    id: "vocab_affinity_syn_affection",
    word: "AFFECTION",
    type: "Synonym",
    meaning: "A feeling of liking, warmth, or fondness towards someone or something (स्नेह, प्रेम)",
    synonym: "Fondness",
    antonym: "Hatred"
  },
  {
    id: "vocab_affinity_syn_aptitude",
    word: "APTITUDE",
    type: "Synonym",
    meaning: "A natural ability, talent, or capacity for learning something (योग्यता, क्षमता)",
    synonym: "Talent",
    antonym: "Inability"
  },
  {
    id: "vocab_affinity_syn_inclination",
    word: "INCLINATION",
    type: "Synonym",
    meaning: "A natural tendency, preference, or urge towards a particular action or thing (झुकाव, प्रवृत्ति)",
    synonym: "Tendency",
    antonym: "Disinclination"
  },
  {
    id: "vocab_affinity_syn_learning",
    word: "LEARNING",
    type: "Synonym",
    meaning: "The acquisition of knowledge, skills, or understanding through study, experience, or instruction (अध्ययन, ज्ञान)",
    synonym: "Knowledge",
    antonym: "Ignorance"
  },
  {
    id: "vocab_affinity_syn_penchant",
    word: "PENCHANT",
    type: "Synonym",
    meaning: "A strong or habitual liking or preference for something (प्रवृत्ति, झुकाव)",
    synonym: "Liking",
    antonym: "Dislike"
  },
  {
    id: "vocab_affinity_syn_predilection",
    word: "PREDILECTION",
    type: "Synonym",
    meaning: "A special preference or strong liking for something (झुकाव, रुचि)",
    synonym: "Preference",
    antonym: "Aversion"
  },
  {
    id: "vocab_affinity_syn_proclivity",
    word: "PROCLIVITY",
    type: "Synonym",
    meaning: "A natural tendency or inclination to choose or do something, often something bad (प्रवृत्ति, स्वाभाविक झुकाव)",
    synonym: "Tendency",
    antonym: "Aversion"
  },
  {
    id: "vocab_affinity_ant_allergy",
    word: "ALLERGY",
    type: "Antonym",
    meaning: "A strong physical or psychological reaction causing discomfort, aversion, or dislike (एलर्जी, प्रतिकूलता)",
    synonym: "Aversion",
    antonym: "Affinity"
  },
  {
    id: "vocab_affinity_ant_apathy",
    word: "APATHY",
    type: "Antonym",
    meaning: "Lack of interest, enthusiasm, emotion, or concern about things (उदासीनता, बेपरवाही)",
    synonym: "Indifference",
    antonym: "Interest"
  },
  {
    id: "vocab_affinity_ant_unconcern",
    word: "UNCONCERN",
    type: "Antonym",
    meaning: "Lack of interest, care, or anxiety about something (उदासीनता, चिंता न होना)",
    synonym: "Indifference",
    antonym: "Concern"
  },
  {
    id: "vocab_affinity_ant_aversion",
    word: "AVERSION",
    type: "Antonym",
    meaning: "A strong feeling of dislike, opposition, or repulsion towards something (अरुचि, घृणा)",
    synonym: "Dislike",
    antonym: "Affinity"
  },
  {
    id: "vocab_affinity_ant_impartiality",
    word: "IMPARTIALITY",
    type: "Antonym",
    meaning: "The principle of treating all people or options equally without bias or personal preference (निष्पक्षता, भेदभाव न करना)",
    synonym: "Fairness",
    antonym: "Bias"
  },

  // --- SET: CRASS ---
  {
    id: "vocab_crass_main",
    word: "CRASS",
    type: "Synonym",
    meaning: "Lacking sensitivity, refinement, or intelligence; rude, insensitive, and coarse in behavior or speech (गंदा, स्थूल, अमानवीय)",
    synonym: "Rude",
    antonym: "Refined"
  },
  {
    id: "vocab_crass_syn_coarse",
    word: "COARSE",
    type: "Synonym",
    meaning: "Rough, harsh, or lacking refinement and manners; rude or vulgar (मोटा, कच्चा, अशिष्ट)",
    synonym: "Rough",
    antonym: "Smooth"
  },
  {
    id: "vocab_crass_syn_crude",
    word: "CRUDE",
    type: "Synonym",
    meaning: "Lacking sophistication, tact, or refinement; often rude, unpolished, or vulgar (कच्चा, अशिष्ट)",
    synonym: "Unrefined",
    antonym: "Polished"
  },
  {
    id: "vocab_crass_syn_gross",
    word: "GROSS",
    type: "Synonym",
    meaning: "Very obvious, unrefined, and lacking delicacy; offensive or vulgar (स्थूल, भारी, अशिष्ट)",
    synonym: "Offensive",
    antonym: "Delicate"
  },
  {
    id: "vocab_crass_syn_insensible",
    word: "INSENSIBLE",
    type: "Synonym",
    meaning: "Lacking awareness, feeling, or sensitivity to others' feelings (बेखबर, अविवेकी)",
    synonym: "Unaware",
    antonym: "Aware"
  },
  {
    id: "vocab_crass_syn_rude",
    word: "RUDE",
    type: "Synonym",
    meaning: "Lacking courtesy, good manners, or respect for others; offensive (अशिष्ट, गंदा)",
    synonym: "Impolite",
    antonym: "Polite"
  },
  {
    id: "vocab_crass_syn_rugged",
    word: "RUGGED",
    type: "Synonym",
    meaning: "Rough or harsh in nature; unrefined and tough in mannerism or appearance (खुरदुरा, कठोर)",
    synonym: "Rough",
    antonym: "Gentle"
  },
  {
    id: "vocab_crass_syn_boorish",
    word: "BOORISH",
    type: "Synonym",
    meaning: "Lacking social grace, manners, or refinement; ill-mannered and crude (गंवार, अशिष्ट)",
    synonym: "Crude",
    antonym: "Polite"
  },
  {
    id: "vocab_crass_syn_cloddish",
    word: "CLODDISH",
    type: "Synonym",
    meaning: "Lacking refinement, grace, or intelligence; awkward and clumsy (भारी, मूर्ख, अनाड़ी)",
    synonym: "Awkward",
    antonym: "Graceful"
  },
  {
    id: "vocab_crass_syn_lumpish",
    word: "LUMPISH",
    type: "Synonym",
    meaning: "Awkward, ungraceful, heavy, or lacking mental sharpness and finesse (अव्यवस्थित, भारी)",
    synonym: "Clumsy",
    antonym: "Graceful"
  },
  {
    id: "vocab_crass_ant_patrician",
    word: "PATRICIAN",
    type: "Antonym",
    meaning: "Belonging to or characteristic of the aristocracy; refined, noble, and dignified (कुलीन, उच्च वर्ग का)",
    synonym: "Noble",
    antonym: "Plebeian"
  },
  {
    id: "vocab_crass_ant_elegant",
    word: "ELEGANT",
    type: "Antonym",
    meaning: "Graceful, stylish, and refined in appearance, speech, or manner (आकर्षक, सुरुचिपूर्ण)",
    synonym: "Graceful",
    antonym: "Inelegant"
  },
  {
    id: "vocab_crass_ant_aristocratic",
    word: "ARISTOCRATIC",
    type: "Antonym",
    meaning: "Belonging to nobility; refined, dignified, and socially distinguished (शाही, कुलीन)",
    synonym: "Noble",
    antonym: "Common"
  },
  {
    id: "vocab_crass_ant_citified",
    word: "CITIFIED",
    type: "Antonym",
    meaning: "Sophisticated, cultured, or refined in ways characteristic of city dwellers (शहरी, संस्कृतिपूर्ण)",
    synonym: "Sophisticated",
    antonym: "Rustic"
  },
  {
    id: "vocab_crass_ant_gracious",
    word: "GRACIOUS",
    type: "Antonym",
    meaning: "Courteous, kind, polite, and pleasant in social behavior (दयालु, उदार)",
    synonym: "Courteous",
    antonym: "Rude"
  },

  // --- SET: SUMMON ---
  {
    id: "vocab_summon_main",
    word: "SUMMON",
    type: "Synonym",
    meaning: "To call someone to be present or to request someone's presence, often in an authoritative or formal manner (बुलाना, आदेश देना)",
    synonym: "Call",
    antonym: "Dismiss"
  },
  {
    id: "vocab_summon_syn_hail",
    word: "HAIL",
    type: "Synonym",
    meaning: "To call out to or greet someone enthusiastically or publicly (पुकारना, अभिवादन करना)",
    synonym: "Greet",
    antonym: "Ignore"
  },
  {
    id: "vocab_summon_syn_assemble",
    word: "ASSEMBLE",
    type: "Synonym",
    meaning: "To gather together or bring people together into one place for a common purpose (इकट्ठा करना, एकत्र करना)",
    synonym: "Gather",
    antonym: "Disperse"
  },
  {
    id: "vocab_summon_syn_convene",
    word: "CONVENE",
    type: "Synonym",
    meaning: "To call people together for an official meeting, council, or gathering (बुलाना, सम्मेलन करना)",
    synonym: "Gather",
    antonym: "Adjourn"
  },
  {
    id: "vocab_summon_syn_convoke",
    word: "CONVOKE",
    type: "Synonym",
    meaning: "To call together a formal or official meeting or assembly (बुलाना, बैठक आयोजित करना)",
    synonym: "Convene",
    antonym: "Dismiss"
  },
  {
    id: "vocab_summon_syn_invite",
    word: "INVITE",
    type: "Synonym",
    meaning: "To request politely someone's presence or participation in an event or task (आमंत्रित करना)",
    synonym: "Request",
    antonym: "Exclude"
  },
  {
    id: "vocab_summon_syn_invoke",
    word: "INVOKE",
    type: "Synonym",
    meaning: "To call upon a higher power, law, or authority for help, support, or inspiration (पुकारना, आह्वान करना)",
    synonym: "Appeal",
    antonym: "Ignore"
  },
  {
    id: "vocab_summon_syn_requisition",
    word: "REQUISITION",
    type: "Synonym",
    meaning: "To formally demand or request supplies, services, or presence for an official purpose (आदेश देना, मांग करना)",
    synonym: "Demand",
    antonym: "Relinquish"
  },
  {
    id: "vocab_summon_syn_call_out",
    word: "CALL OUT",
    type: "Synonym",
    meaning: "To summon, call upon loudly, or request someone's immediate attention (पुकारना, आवाज देना)",
    synonym: "Summon",
    antonym: "Silence"
  },
  {
    id: "vocab_summon_ant_dismiss",
    word: "DISMISS",
    type: "Antonym",
    meaning: "To send someone away, allow them to leave, or remove them from a position (बर्खास्‍त करना, भेज देना)",
    synonym: "Discharge",
    antonym: "Summon"
  },
  {
    id: "vocab_summon_ant_turn_away",
    word: "TURN AWAY",
    type: "Antonym",
    meaning: "To refuse entrance, support, or access to someone; reject (मना करना, लौटाना)",
    synonym: "Reject",
    antonym: "Welcome"
  },
  {
    id: "vocab_summon_ant_banish",
    word: "BANISH",
    type: "Antonym",
    meaning: "To send someone away from a country or place as an official punishment; exile (निर्वासित करना, बाहर निकालना)",
    synonym: "Exile",
    antonym: "Welcome"
  },
  {
    id: "vocab_summon_ant_effect",
    word: "EFFECT",
    type: "Antonym",
    meaning: "To cause something to happen, bring about a result, or execute an outcome (प्रभाव डालना, परिणाम लाना)",
    synonym: "Execute",
    antonym: "Halt"
  },
  {
    id: "vocab_summon_ant_expel",
    word: "EXPEL",
    type: "Antonym",
    meaning: "To officially force someone to leave an organization, school, or place (निकालना, बाहर करना)",
    synonym: "Eject",
    antonym: "Admit"
  },

  // --- SET: HUMANE ---
  {
    id: "vocab_humane_main",
    word: "HUMANE",
    type: "Synonym",
    meaning: "Showing compassion, kindness, and consideration to alleviate suffering in humans or animals (मानवतावादी, दयालु)",
    synonym: "Compassionate",
    antonym: "Cruel"
  },
  {
    id: "vocab_humane_syn_beneficent",
    word: "BENEFICENT",
    type: "Synonym",
    meaning: "Doing good, showing active kindness, or performing charitable acts (उपकारी, कृपालु)",
    synonym: "Charitable",
    antonym: "Malevolent"
  },
  {
    id: "vocab_humane_syn_benevolent",
    word: "BENEVOLENT",
    type: "Synonym",
    meaning: "Showing goodwill, kindness, and a sincere desire to help others (दयालु, उदार)",
    synonym: "Kind",
    antonym: "Malevolent"
  },
  {
    id: "vocab_humane_syn_benignant",
    word: "BENIGNANT",
    type: "Synonym",
    meaning: "Kind, gentle, favorable, and showing deep warmth or compassion (दयालु, कृपालु)",
    synonym: "Gentle",
    antonym: "Hostile"
  },
  {
    id: "vocab_humane_syn_compassionate",
    word: "COMPASSIONATE",
    type: "Synonym",
    meaning: "Feeling or showing deep sympathy and concern for the suffering or misfortunes of others (सहानुभूतिपूर्ण, दयालु)",
    synonym: "Sympathetic",
    antonym: "Callous"
  },
  {
    id: "vocab_humane_syn_sympathetic",
    word: "SYMPATHETIC",
    type: "Synonym",
    meaning: "Showing care, understanding, and emotional support for someone in distress (सहानुभूति रखनेवाला)",
    synonym: "Caring",
    antonym: "Unfeeling"
  },
  {
    id: "vocab_humane_syn_tender",
    word: "TENDER",
    type: "Synonym",
    meaning: "Showing gentleness, kindness, affection, and emotional sensitivity (नर्म, दयालु)",
    synonym: "Gentle",
    antonym: "Harsh"
  },
  {
    id: "vocab_humane_ant_merciless",
    word: "MERCILESS",
    type: "Antonym",
    meaning: "Showing no mercy, pity, or forgiveness; extremely severe and cruel (निर्दयी, दया रहित)",
    synonym: "Cruel",
    antonym: "Merciful"
  },
  {
    id: "vocab_humane_ant_ruthless",
    word: "RUTHLESS",
    type: "Antonym",
    meaning: "Having or showing no pity or compassion; cruel and determined to reach goals without care (निर्दयी, कठोर)",
    synonym: "Pitiless",
    antonym: "Compassionate"
  },
  {
    id: "vocab_humane_ant_insensitive",
    word: "INSENSITIVE",
    type: "Antonym",
    meaning: "Lacking awareness, concern, or sympathy for the feelings of others (असंवेदनशील, बेपरवाह)",
    synonym: "Callous",
    antonym: "Sensitive"
  },
  {
    id: "vocab_humane_ant_harsh",
    word: "HARSH",
    type: "Antonym",
    meaning: "Unpleasantly severe, rough, cruel, or stern in nature or treatment (कठोर, तल्ख)",
    synonym: "Severe",
    antonym: "Gentle"
  },
  {
    id: "vocab_humane_ant_atrocious",
    word: "ATROCIOUS",
    type: "Antonym",
    meaning: "Horrifyingly wicked, brutal, extremely cruel, or appalling (घिनौना, निर्दयी)",
    synonym: "Brutal",
    antonym: "Humane"
  },
  {
    id: "vocab_humane_ant_callous",
    word: "CALLOUS",
    type: "Antonym",
    meaning: "Emotionally hardened, unfeeling, or showing a insensitive disregard for others (कठोर, निर्दयी)",
    synonym: "Unfeeling",
    antonym: "Tender"
  },
  {
    id: "vocab_humane_ant_savage",
    word: "SAVAGE",
    type: "Antonym",
    meaning: "Fierce, violent, uncontrolled, cruel, and lacking civilization or empathy (जंगली, क्रूर)",
    synonym: "Violent",
    antonym: "Gentle"
  },

  // --- SET: PIETY ---
  {
    id: "vocab_piety_main",
    word: "PIETY",
    type: "Synonym",
    meaning: "The quality of being devout, religious, or reverent toward a higher power or spiritual faith (धार्मिकता, भक्ति)",
    synonym: "Devotion",
    antonym: "Atheism"
  },
  {
    id: "vocab_piety_syn_devotion",
    word: "DEVOTION",
    type: "Synonym",
    meaning: "Love, loyalty, or strong religious faith and dedication to a cause or deity (भक्ति, समर्पण)",
    synonym: "Loyalty",
    antonym: "Disloyalty"
  },
  {
    id: "vocab_piety_syn_faith",
    word: "FAITH",
    type: "Synonym",
    meaning: "Complete trust, confidence, or strong belief in a religion, god, or spiritual principle (विश्वास, आस्था)",
    synonym: "Belief",
    antonym: "Doubt"
  },
  {
    id: "vocab_piety_syn_religion",
    word: "RELIGION",
    type: "Synonym",
    meaning: "A system of faith and worship associated with belief in a supreme power or god (धर्म)",
    synonym: "Faith",
    antonym: "Atheism"
  },
  {
    id: "vocab_piety_syn_piousness",
    word: "PIOUSNESS",
    type: "Synonym",
    meaning: "The state or quality of being deeply religious and dutiful in spiritual matters (धार्मिकता, भक्तिपूर्ण स्वभाव)",
    synonym: "Devoutness",
    antonym: "Impiety"
  },
  {
    id: "vocab_piety_syn_adoration",
    word: "ADORATION",
    type: "Synonym",
    meaning: "Deep love, worship, and profound reverence for a deity or sacred figure (पूजा, श्रद्धा)",
    synonym: "Worship",
    antonym: "Scorn"
  },
  {
    id: "vocab_piety_syn_reverence",
    word: "REVERENCE",
    type: "Synonym",
    meaning: "Deep respect, awe, and honor felt towards someone or something sacred (श्रद्धा, सम्मान)",
    synonym: "Respect",
    antonym: "Disrespect"
  },
  {
    id: "vocab_piety_syn_veneration",
    word: "VENERATION",
    type: "Synonym",
    meaning: "Great respect, honor, and awe directed toward a saint, deity, or respected elder (श्रद्धा, पूजन)",
    synonym: "Honor",
    antonym: "Contempt"
  },
  {
    id: "vocab_piety_ant_atheism",
    word: "ATHEISM",
    type: "Antonym",
    meaning: "The disbelief or lack of belief in the existence of God or divine beings (नास्तिकता)",
    synonym: "Disbelief",
    antonym: "Piety"
  },
  {
    id: "vocab_piety_ant_lapse",
    word: "LAPSE",
    type: "Antonym",
    meaning: "A temporary decline, failure, or slip in religious faith, morality, or concentration (आस्था में कमी, गिरावट)",
    synonym: "Slip",
    antonym: "Continuity"
  },
  {
    id: "vocab_piety_ant_apostasy",
    word: "APOSTASY",
    type: "Antonym",
    meaning: "The total abandonment or renunciation of one's religious or political belief (धर्मत्याग, विश्वास का त्याग)",
    synonym: "Renunciation",
    antonym: "Loyalty"
  },
  {
    id: "vocab_piety_ant_disbelief",
    word: "DISBELIEF",
    type: "Antonym",
    meaning: "Inability or refusal to accept something as true, particularly in religious contexts (अविश्वास)",
    synonym: "Skepticism",
    antonym: "Belief"
  },
  {
    id: "vocab_piety_ant_unfaith",
    word: "UNFAITH",
    type: "Antonym",
    meaning: "Absence or lack of religious faith, loyalty, or spiritual belief (विश्वासघात, विश्वास की कमी)",
    synonym: "Skepticism",
    antonym: "Faith"
  },
  // --- SET: BEQUEATH ---
  {
    id: "vocab_bequeath_main",
    word: "BEQUEATH",
    type: "Synonym",
    meaning: "To leave something to someone through a legal will, or to hand down something valuable to future generations (वसीयत करना, छोड़ जाना)",
    synonym: "Bestow",
    antonym: "Withhold"
  },
  {
    id: "vocab_bequeath_syn_leave",
    word: "LEAVE",
    type: "Synonym",
    meaning: "To give or entrust property or possessions to someone after death through a will (छोड़ना, वसीयत करना)",
    synonym: "Bequeath",
    antonym: "Keep"
  },
  {
    id: "vocab_bequeath_syn_will",
    word: "WILL",
    type: "Synonym",
    meaning: "To officially decide in writing who will receive one's property and assets after death (वसीयत करना)",
    synonym: "Bequeath",
    antonym: "Disinherit"
  },
  {
    id: "vocab_bequeath_syn_hand_down",
    word: "HAND DOWN",
    type: "Synonym",
    meaning: "To pass traditions, values, knowledge, or valuable items to the next generation (अगली पीढ़ी को देना, पारित करना)",
    synonym: "Pass down",
    antonym: "Withhold"
  },
  {
    id: "vocab_bequeath_syn_pass_down",
    word: "PASS DOWN",
    type: "Synonym",
    meaning: "To transfer property, traditions, or wisdom to descendants or younger family members (सौंपना, विरासत में देना)",
    synonym: "Hand down",
    antonym: "Keep"
  },
  {
    id: "vocab_bequeath_syn_devise",
    word: "DEVISE",
    type: "Synonym",
    meaning: "To plan carefully or to transfer real estate property to someone through a legal will (योजनाबद्ध करना, वसीयत में देना)",
    synonym: "Bequeath",
    antonym: "Withhold"
  },
  {
    id: "vocab_bequeath_syn_bestow",
    word: "BESTOW",
    type: "Synonym",
    meaning: "To give or present something valuable or honorable, especially in a formal or ceremonial way (देना, प्रदान करना)",
    synonym: "Grant",
    antonym: "Deprive"
  },
  {
    id: "vocab_bequeath_syn_grant",
    word: "GRANT",
    type: "Synonym",
    meaning: "To give or allow someone something officially, such as a legal right, privilege, or financial aid (प्रदान करना, अनुमोदन देना)",
    synonym: "Bestow",
    antonym: "Deny"
  },
  {
    id: "vocab_bequeath_syn_entrust",
    word: "ENTRUST",
    type: "Synonym",
    meaning: "To give someone responsibility for something valuable or important based on trust (सौंपना, विश्वास करना)",
    synonym: "Assign",
    antonym: "Withhold"
  },
  {
    id: "vocab_bequeath_ant_take",
    word: "TAKE",
    type: "Antonym",
    meaning: "To receive, seize, or acquire something, especially by force or action rather than giving (लेना, छीनना)",
    synonym: "Seize",
    antonym: "Give"
  },
  {
    id: "vocab_bequeath_ant_receive",
    word: "RECEIVE",
    type: "Antonym",
    meaning: "To get, accept, or be given something offered or sent by another (प्राप्त करना)",
    synonym: "Accept",
    antonym: "Bestow"
  },
  {
    id: "vocab_bequeath_ant_keep",
    word: "KEEP",
    type: "Antonym",
    meaning: "To retain possession or control of something rather than passing it on or giving it away (रखना, पास रखना)",
    synonym: "Retain",
    antonym: "Bequeath"
  },
  {
    id: "vocab_bequeath_ant_hoard",
    word: "HOARD",
    type: "Antonym",
    meaning: "To gather, accumulate, or hide away money or valuable items in large quantities greedily (जमा करना, जमा रखना)",
    synonym: "Store",
    antonym: "Distribute"
  },

  // --- SET: INIMITABLE ---
  {
    id: "vocab_inimitable_main",
    word: "INIMITABLE",
    type: "Synonym",
    meaning: "So exceptionally good, unique, or distinctive that it cannot be copied or imitated by anyone else (अद्वितीय, अप्रतिम)",
    synonym: "Matchless",
    antonym: "Common"
  },
  {
    id: "vocab_inimitable_syn_unique",
    word: "UNIQUE",
    type: "Synonym",
    meaning: "Being the only one of its kind; unlike anything else in existence (अद्वितीय, अनूठा)",
    synonym: "Distinctive",
    antonym: "Ordinary"
  },
  {
    id: "vocab_inimitable_syn_matchless",
    word: "MATCHLESS",
    type: "Synonym",
    meaning: "Having no equal, peer, or rival; incomparable in excellence or quality (अप्रतिबंध, बेजोड़)",
    synonym: "Peerless",
    antonym: "Mediocre"
  },
  {
    id: "vocab_inimitable_syn_incomparable",
    word: "INCOMPARABLE",
    type: "Synonym",
    meaning: "So superior, beautiful, or excellent that it cannot be compared to anything else (अद्वितीय, बेजोड़)",
    synonym: "Matchless",
    antonym: "Comparable"
  },
  {
    id: "vocab_inimitable_syn_unparalleled",
    word: "UNPARALLELED",
    type: "Synonym",
    meaning: "Having no equal, match, or parallel; unmatched in quality or achievement (अभूतपूर्व, बेजोड़)",
    synonym: "Unmatched",
    antonym: "Ordinary"
  },
  {
    id: "vocab_inimitable_syn_extraordinary",
    word: "EXTRAORDINARY",
    type: "Synonym",
    meaning: "Very unusual, remarkable, or exceptional; far beyond what is ordinary (असाधारण, अद्भुत)",
    synonym: "Remarkable",
    antonym: "Normal"
  },
  {
    id: "vocab_inimitable_syn_rare",
    word: "RARE",
    type: "Synonym",
    meaning: "Not occurring frequently; highly unusual, precious, and uncommon (दुर्लभ, अनूठा)",
    synonym: "Uncommon",
    antonym: "Common"
  },
  {
    id: "vocab_inimitable_syn_unsurpassed",
    word: "UNSURPASSED",
    type: "Synonym",
    meaning: "Not exceeded or surpassed by anyone or anything; supreme in quality or skill (बेजोड़, सर्वश्रेष्ठ)",
    synonym: "Supreme",
    antonym: "Inferior"
  },
  {
    id: "vocab_inimitable_ant_frequent",
    word: "FREQUENT",
    type: "Antonym",
    meaning: "Occurring or done often; common, regular, and repeated (सामान्य, बार-बार होने वाला)",
    synonym: "Regular",
    antonym: "Rare"
  },
  {
    id: "vocab_inimitable_ant_common",
    word: "COMMON",
    type: "Antonym",
    meaning: "Occurring or found frequently; ordinary, widespread, and not unique (सामान्य, साधारण)",
    synonym: "Ordinary",
    antonym: "Unique"
  },
  {
    id: "vocab_inimitable_ant_familiar",
    word: "FAMILIAR",
    type: "Antonym",
    meaning: "Well-known from long or close association; easy to recognize and not unusual (परिचित, सामान्य)",
    synonym: "Known",
    antonym: "Unfamiliar"
  },
  {
    id: "vocab_inimitable_ant_ordinary",
    word: "ORDINARY",
    type: "Antonym",
    meaning: "With no special or distinctive features; normal, average, and routine (सामान्य, साधारण)",
    synonym: "Normal",
    antonym: "Extraordinary"
  },
  {
    id: "vocab_inimitable_ant_ubiquitous",
    word: "UBIQUITOUS",
    type: "Antonym",
    meaning: "Present, appearing, or found everywhere at the same time; widespread (सर्वव्यापी)",
    synonym: "Omnipresent",
    antonym: "Rare"
  },

  // --- SET: DEPLORE ---
  {
    id: "vocab_deplore_main",
    word: "DEPLORE",
    type: "Synonym",
    meaning: "To express strong disapproval, condemnation, or deep regret about something; lament (अफ़सोस करना, निंदा करना)",
    synonym: "Lament",
    antonym: "Rejoice"
  },
  {
    id: "vocab_deplore_syn_bemoan",
    word: "BEMOAN",
    type: "Synonym",
    meaning: "To express deep sorrow, grief, or regret about a bad situation or loss (शोक करना, दुःख प्रकट करना)",
    synonym: "Lament",
    antonym: "Celebrate"
  },
  {
    id: "vocab_deplore_syn_bewail",
    word: "BEWAIL",
    type: "Synonym",
    meaning: "To express deep sadness, bitterness, or regret aloud about something (शोक करना, अफ़सोस जताना)",
    synonym: "Mourn",
    antonym: "Rejoice"
  },
  {
    id: "vocab_deplore_syn_lament",
    word: "LAMENT",
    type: "Synonym",
    meaning: "To express grief, sorrow, or disappointment openly in a vocal or visible manner (शोक करना, विलाप करना)",
    synonym: "Mourn",
    antonym: "Celebrate"
  },
  {
    id: "vocab_deplore_syn_grieve",
    word: "GRIEVE",
    type: "Synonym",
    meaning: "To feel intense sorrow or mental distress, especially after the loss of a loved one (शोक करना, दुःखित होना)",
    synonym: "Mourn",
    antonym: "Rejoice"
  },
  {
    id: "vocab_deplore_syn_mourn",
    word: "MOURN",
    type: "Synonym",
    meaning: "To feel or show deep sorrow or grief, especially over a death or tragic loss (शोक करना, विलाप करना)",
    synonym: "Grieve",
    antonym: "Celebrate"
  },
  {
    id: "vocab_deplore_syn_regret",
    word: "REGRET",
    type: "Synonym",
    meaning: "To feel sad, disappointed, or repentant over a past action or lost opportunity (पछताना, अफ़सोस करना)",
    synonym: "Repent",
    antonym: "Approve"
  },
  {
    id: "vocab_deplore_syn_rue",
    word: "RUE",
    type: "Synonym",
    meaning: "To feel bitter remorse, sorrow, or regret over an action or event (पछताना, अफ़सोस करना)",
    synonym: "Regret",
    antonym: "Rejoice"
  },
  {
    id: "vocab_deplore_ant_delight",
    word: "DELIGHT",
    type: "Antonym",
    meaning: "To make someone very happy, pleased, or filled with high joy (प्रसन्न करना, आनंदित करना)",
    synonym: "Please",
    antonym: "Displease"
  },
  {
    id: "vocab_deplore_ant_exult",
    word: "EXULT",
    type: "Antonym",
    meaning: "To feel or show triumphant joy, happiness, or elation over a victory or success (खुश होना, आनंदित होना)",
    synonym: "Rejoice",
    antonym: "Lament"
  },
  {
    id: "vocab_deplore_ant_glory",
    word: "GLORY",
    type: "Antonym",
    meaning: "To take great pride, immense satisfaction, or joy in an achievement (गर्व करना, गौरव महसूस करना)",
    synonym: "Boast",
    antonym: "Lament"
  },
  {
    id: "vocab_deplore_ant_rejoice",
    word: "REJOICE",
    type: "Antonym",
    meaning: "To feel or show great happiness, delight, or celebration in response to good news (खुश होना, आनंदित होना)",
    synonym: "Celebrate",
    antonym: "Mourn"
  },
  {
    id: "vocab_deplore_ant_cheer",
    word: "CHEER",
    type: "Antonym",
    meaning: "To shout or express joy, encouragement, and happiness during celebrations (खुश होना, उत्साह बढ़ाना)",
    synonym: "Encourage",
    antonym: "Boo"
  },
  {
    id: "vocab_deplore_ant_laugh",
    word: "LAUGH",
    type: "Antonym",
    meaning: "To make sounds showing amusement, happiness, or delight (हँसना)",
    synonym: "Chuckle",
    antonym: "Weep"
  },

  // --- SET: TACT ---
  {
    id: "vocab_tact_main",
    word: "TACT",
    type: "Synonym",
    meaning: "The ability to deal with sensitive, difficult, or delicate issues carefully without offending others; diplomacy (शिष्टाचार, समझदारी, कूटनीति)",
    synonym: "Diplomacy",
    antonym: "Clumsiness"
  },
  {
    id: "vocab_tact_syn_diplomacy",
    word: "DIPLOMACY",
    type: "Synonym",
    meaning: "The skill of managing delicate international or interpersonal relationships peacefully and effectively (कूटनीति, संतुलन)",
    synonym: "Tact",
    antonym: "Indiscretion"
  },
  {
    id: "vocab_tact_syn_courtesy",
    word: "COURTESY",
    type: "Synonym",
    meaning: "Polite behavior, respectful manners, and thoughtful consideration for others (शिष्टाचार, विनम्रता)",
    synonym: "Politeness",
    antonym: "Rudeness"
  },
  {
    id: "vocab_tact_syn_delicacy",
    word: "DELICACY",
    type: "Synonym",
    meaning: "The ability to handle fragile, sensitive, or complex situations with extreme care and finesse (नाजुकता, सूक्ष्मता)",
    synonym: "Finesse",
    antonym: "Coarseness"
  },
  {
    id: "vocab_tact_syn_graciousness",
    word: "GRACIOUSNESS",
    type: "Synonym",
    meaning: "The quality of being kind, polite, generous, and considerate in conduct (दयालुता, कृपालुता)",
    synonym: "Politeness",
    antonym: "Arrogance"
  },
  {
    id: "vocab_tact_syn_sensitivity",
    word: "SENSITIVITY",
    type: "Synonym",
    meaning: "The capacity to understand, feel, and respond thoughtfully to others' emotions or needs (संवेदनशीलता, समझ)",
    synonym: "Empathy",
    antonym: "Callousness"
  },
  {
    id: "vocab_tact_syn_civility",
    word: "CIVILITY",
    type: "Synonym",
    meaning: "Formal politeness, courtesy, and respectful conduct in human interactions (शिष्टाचार, सभ्यता)",
    synonym: "Politeness",
    antonym: "Incivility"
  },
  {
    id: "vocab_tact_syn_gentility",
    word: "GENTILITY",
    type: "Synonym",
    meaning: "High refinement, social elegance, polite manners, and good etiquette (शिष्टाचार, उच्च वर्गीय व्यवहार)",
    synonym: "Refinement",
    antonym: "Vulgarity"
  },
  {
    id: "vocab_tact_syn_deftness",
    word: "DEFTNESS",
    type: "Synonym",
    meaning: "Skill, cleverness, and precision, especially in handling difficult situations or tasks (चातुर्य, निपुणता)",
    synonym: "Skill",
    antonym: "Clumsiness"
  },
  {
    id: "vocab_tact_ant_clumsiness",
    word: "CLUMSINESS",
    type: "Antonym",
    meaning: "The quality of being awkward, uncoordinated, or lacking grace in physical or social handling (लापरवाही, अकुशलता)",
    synonym: "Awkwardness",
    antonym: "Deftness"
  },
  {
    id: "vocab_tact_ant_insensitivity",
    word: "INSENSITIVITY",
    type: "Antonym",
    meaning: "Lack of concern, awareness, or care for the feelings and feelings of others (असंवेदनशीलता)",
    synonym: "Callousness",
    antonym: "Sensitivity"
  },
  {
    id: "vocab_tact_ant_tactlessness",
    word: "TACTLESSNESS",
    type: "Antonym",
    meaning: "Lack of diplomacy, consideration, or care when dealing with sensitive matters; offending others (समझदारी की कमी, बेअदबी)",
    synonym: "Indiscretion",
    antonym: "Tact"
  },
  {
    id: "vocab_tact_ant_disregard",
    word: "DISREGARD",
    type: "Antonym",
    meaning: "Lack of attention, respect, or consideration given to someone or something (उपेक्षा, अवहेलना)",
    synonym: "Neglect",
    antonym: "Respect"
  },
  {
    id: "vocab_tact_ant_discourtesy",
    word: "DISCOURTESY",
    type: "Antonym",
    meaning: "Rude or impolite behavior; lack of respect or courtesy toward others (अशिष्टाचार, असभ्यता)",
    synonym: "Rudeness",
    antonym: "Courtesy"
  },

  // --- SET: EMPATHY ---
  {
    id: "vocab_empathy_main",
    word: "EMPATHY",
    type: "Synonym",
    meaning: "The psychological ability to understand, share, and resonate with the feelings and emotions of another person (सहानुभूति, संवेदनशीलता)",
    synonym: "Sympathy",
    antonym: "Cruelty"
  },
  {
    id: "vocab_empathy_syn_sympathy",
    word: "SYMPATHY",
    type: "Synonym",
    meaning: "Feelings of pity, sorrow, or shared compassion for someone experiencing misfortune (सहानुभूति, दर्द बाँटना)",
    synonym: "Compassion",
    antonym: "Apathy"
  },
  {
    id: "vocab_empathy_syn_forbearance",
    word: "FORBEARANCE",
    type: "Synonym",
    meaning: "Patient self-control, restraint, and tolerance, especially under provocation or difficult situations (सहनशीलता, सहन करना)",
    synonym: "Patience",
    antonym: "Impatience"
  },
  {
    id: "vocab_empathy_syn_lenience",
    word: "LENIENCE",
    type: "Synonym",
    meaning: "The quality of being merciful, tolerant, or forgiving rather than severe when judging or punishing (दया, सहनशीलता)",
    synonym: "Mercy",
    antonym: "Severity"
  },
  {
    id: "vocab_empathy_syn_lenity",
    word: "LENITY",
    type: "Synonym",
    meaning: "Gentleness, mildness, or merciful treatment shown toward someone in distress or fault (दयालुता, सहनशीलता)",
    synonym: "Mildness",
    antonym: "Harshness"
  },
  {
    id: "vocab_empathy_syn_mercy",
    word: "MERCY",
    type: "Synonym",
    meaning: "Compassion or forgiveness shown toward an offender or enemy whom it is within one's power to punish (दया, करुणा)",
    synonym: "Compassion",
    antonym: "Cruelty"
  },
  {
    id: "vocab_empathy_syn_grace",
    word: "GRACE",
    type: "Synonym",
    meaning: "Elegance of movement or behavior; also polite goodwill, divine favor, and kindness shown to others (कृपा, अनुग्रह)",
    synonym: "Kindness",
    antonym: "Harshness"
  },
  {
    id: "vocab_empathy_syn_clemency",
    word: "CLEMENCY",
    type: "Synonym",
    meaning: "Mercy, leniency, or compassion shown by someone in authority when imposing punishment (दया, उदारता)",
    synonym: "Leniency",
    antonym: "Ruthlessness"
  },
  {
    id: "vocab_empathy_syn_generosity",
    word: "GENEROSITY",
    type: "Synonym",
    meaning: "The quality of being kind, noble, and willing to give or share freely without expecting a return (उदारता, दानशीलता)",
    synonym: "Kindness",
    antonym: "Selfishness"
  },
  {
    id: "vocab_empathy_ant_mercilessness",
    word: "MERCILESSNESS",
    type: "Antonym",
    meaning: "The state of being cruel, pitiless, and showing no mercy or forgiveness (निर्दयता, दयाहीनता)",
    synonym: "Cruelty",
    antonym: "Mercy"
  },
  {
    id: "vocab_empathy_ant_requital",
    word: "REQUITAL",
    type: "Antonym",
    meaning: "The act of repaying or returning something, often in the form of retaliation, revenge, or punishment (प्रतिफल, बदला)",
    synonym: "Retaliation",
    antonym: "Forgiveness"
  },
  {
    id: "vocab_empathy_ant_retribution",
    word: "RETRIBUTION",
    type: "Antonym",
    meaning: "Severe punishment inflicted on someone as vengeance for a wrong or criminal act (प्रतिशोध, दंड)",
    synonym: "Vengeance",
    antonym: "Pardon"
  },
  {
    id: "vocab_empathy_ant_revenge",
    word: "REVENGE",
    type: "Antonym",
    meaning: "The action of hurting or punishing someone in return for an injury or grievance (बदला, प्रतिशोध)",
    synonym: "Vengeance",
    antonym: "Forgiveness"
  },
  {
    id: "vocab_empathy_ant_atrocity",
    word: "ATROCITY",
    type: "Antonym",
    meaning: "An extremely wicked, brutal, or cruel act, usually involving severe violence or injury (अत्याचार, घोर अपराध)",
    synonym: "Brutality",
    antonym: "Kindness"
  },
  // --- SET: SPORADIC ---
  {
    id: "vocab_sporadic_main",
    word: "SPORADIC",
    type: "Synonym",
    meaning: "Occurring at irregular intervals or only in a few places; scattered, isolated, and unpredictable (अस्थायी, बेतहाशा, कभी-कभी होने वाला)",
    synonym: "Irregular",
    antonym: "Constant"
  },
  {
    id: "vocab_sporadic_syn_aperiodic",
    word: "APERIODIC",
    type: "Synonym",
    meaning: "Not occurring at regular intervals or fixed cycles; irregular and unpredictable in timing (अनियमित)",
    synonym: "Irregular",
    antonym: "Periodic"
  },
  {
    id: "vocab_sporadic_syn_casual",
    word: "CASUAL",
    type: "Synonym",
    meaning: "Happening by chance or without pre-planning; informal, occasional, and irregular (आकस्मिक, अनौपचारिक)",
    synonym: "Occasional",
    antonym: "Planned"
  },
  {
    id: "vocab_sporadic_syn_episodic",
    word: "EPISODIC",
    type: "Synonym",
    meaning: "Occurring in separate, irregular episodes or isolated events; occasional (समय-समय पर होने वाला, हिस्सों में होने वाला)",
    synonym: "Sporadic",
    antonym: "Continuous"
  },
  {
    id: "vocab_sporadic_syn_erratic",
    word: "ERRATIC",
    type: "Synonym",
    meaning: "Not consistent, predictable, or regular; wandering or deviating from normal patterns (अस्थिर, अनियमित)",
    synonym: "Unpredictable",
    antonym: "Consistent"
  },
  {
    id: "vocab_sporadic_syn_fitful",
    word: "FITFUL",
    type: "Synonym",
    meaning: "Active or occurring in irregular, brief bursts or fits; starting and stopping unpredictably (विरामशील, अनियंत्रित)",
    synonym: "Spasmodic",
    antonym: "Steady"
  },
  {
    id: "vocab_sporadic_syn_irregular",
    word: "IRREGULAR",
    type: "Synonym",
    meaning: "Not following a regular, symmetrical, or predictable pattern, schedule, or routine (अनियमित, असमान)",
    synonym: "Unpredictable",
    antonym: "Regular"
  },
  {
    id: "vocab_sporadic_syn_spotty",
    word: "SPOTTY",
    type: "Synonym",
    meaning: "Occurring in uneven, patchy intervals or scattered locations; inconsistent in quality or frequency (असमान, जगह-जगह)",
    synonym: "Inconsistent",
    antonym: "Uniform"
  },
  {
    id: "vocab_sporadic_ant_constant",
    word: "CONSTANT",
    type: "Antonym",
    meaning: "Occurring continuously over a period of time without interruption or changing (निरंतर, स्थिर)",
    synonym: "Continuous",
    antonym: "Sporadic"
  },
  {
    id: "vocab_sporadic_ant_continuous",
    word: "CONTINUOUS",
    type: "Antonym",
    meaning: "Without interruption or cessation; forming an unbroken whole in time or space (निरंतर, लगातार)",
    synonym: "Unbroken",
    antonym: "Intermittent"
  },
  {
    id: "vocab_sporadic_ant_periodic",
    word: "PERIODIC",
    type: "Antonym",
    meaning: "Occurring or appearing at regular, predictable intervals or specific time cycles (आवधिक, समय-समय पर होने वाला)",
    synonym: "Regular",
    antonym: "Aperiodic"
  },
  {
    id: "vocab_sporadic_ant_steady",
    word: "STEADY",
    type: "Antonym",
    meaning: "Firmly fixed, constant, regular, or unchanging in position, movement, or pace (स्थिर, नियमित)",
    synonym: "Stable",
    antonym: "Unstable"
  },
  {
    id: "vocab_sporadic_ant_repeated",
    word: "REPEATED",
    type: "Antonym",
    meaning: "Happening or done again and again or multiple times regularly (पुनरावृत्त, बार-बार होने वाला)",
    synonym: "Frequent",
    antonym: "Rare"
  },

  // --- SET: SPITEFUL ---
  {
    id: "vocab_spiteful_main",
    word: "SPITEFUL",
    type: "Synonym",
    meaning: "Showing or motivated by a malicious desire to harm, hurt, annoy, or offend someone out of resentment (द्वेषपूर्ण, घातक, दुष्ट)",
    synonym: "Malicious",
    antonym: "Benevolent"
  },
  {
    id: "vocab_spiteful_syn_malevolent",
    word: "MALEVOLENT",
    type: "Synonym",
    meaning: "Having or showing a desire to cause harm, injury, or evil to others; malicious (द्वेषपूर्ण, शत्रुता रखने वाला)",
    synonym: "Malicious",
    antonym: "Benevolent"
  },
  {
    id: "vocab_spiteful_syn_catty",
    word: "CATTY",
    type: "Synonym",
    meaning: "Deliberately hurtful, spiteful, or untruthful, especially in a sneaky or malicious way (छिपे रूप से तीखा, चुभने वाला)",
    synonym: "Spiteful",
    antonym: "Kind"
  },
  {
    id: "vocab_spiteful_syn_cruel",
    word: "CRUEL",
    type: "Synonym",
    meaning: "Willfully causing severe pain, distress, or suffering to others without remorse (क्रूर, निर्दयी)",
    synonym: "Brutal",
    antonym: "Kind"
  },
  {
    id: "vocab_spiteful_syn_despiteful",
    word: "DESPITEFUL",
    type: "Synonym",
    meaning: "Full of spite and malice; showing an active desire to harm or hurt someone (द्वेषपूर्ण)",
    synonym: "Spiteful",
    antonym: "Kind"
  },
  {
    id: "vocab_spiteful_syn_malign",
    word: "MALIGN",
    type: "Synonym",
    meaning: "Evil or harmful in nature or influence; speaking evil of someone in a harmful way (दुष्ट, ईर्ष्यालु)",
    synonym: "Harmful",
    antonym: "Benign"
  },
  {
    id: "vocab_spiteful_syn_malignant",
    word: "MALIGNANT",
    type: "Synonym",
    meaning: "Showing intense ill will, hatred, or a desire to cause severe harm and division (घातक, शत्रुतापूर्ण)",
    synonym: "Harmful",
    antonym: "Benign"
  },
  {
    id: "vocab_spiteful_syn_nasty",
    word: "NASTY",
    type: "Synonym",
    meaning: "Highly unpleasant, mean, offensive, or unkind in manner or tone (घृणित, कटुपूर्ण)",
    synonym: "Unpleasant",
    antonym: "Pleasant"
  },
  {
    id: "vocab_spiteful_syn_vicious",
    word: "VICIOUS",
    type: "Synonym",
    meaning: "Deliberately cruel, violent, dangerous, or intending to cause severe injury or damage (क्रूर, दुष्ट)",
    synonym: "Violent",
    antonym: "Gentle"
  },
  {
    id: "vocab_spiteful_syn_virulent",
    word: "VIRULENT",
    type: "Synonym",
    meaning: "Extremely harmful, bitter, hostile, or poisonous in intention, words, or actions (विषैला, घातक)",
    synonym: "Hostile",
    antonym: "Harmless"
  },
  {
    id: "vocab_spiteful_syn_devious",
    word: "DEVIOUS",
    type: "Synonym",
    meaning: "Showing a skillful use of underhanded, dishonest, or deceitful tactics to achieve goals (कपटी, धोखेबाज)",
    synonym: "Deceitful",
    antonym: "Honest"
  },
  {
    id: "vocab_spiteful_ant_benevolent",
    word: "BENEVOLENT",
    type: "Antonym",
    meaning: "Well-meaning, kindly, charitable, and showing a sincere desire to help others (दयालु, परोपकारी)",
    synonym: "Charitable",
    antonym: "Malevolent"
  },
  {
    id: "vocab_spiteful_ant_benign",
    word: "BENIGN",
    type: "Antonym",
    meaning: "Gentle, kindly, favorable, and not harmful or malignant in nature or effect (सौम्य, उपकारी)",
    synonym: "Gentle",
    antonym: "Malignant"
  },
  {
    id: "vocab_spiteful_ant_loving",
    word: "LOVING",
    type: "Antonym",
    meaning: "Showing intense affection, warmth, care, and kindness toward others (स्नेहपूर्ण, दयालु)",
    synonym: "Affectionate",
    antonym: "Hateful"
  },
  {
    id: "vocab_spiteful_ant_unmalicious",
    word: "UNMALICIOUS",
    type: "Antonym",
    meaning: "Not intending to harm, hurt, or offend anyone; completely harmless (निर्दोष, बिना किसी दुर्भावना के)",
    synonym: "Harmless",
    antonym: "Malicious"
  },
  {
    id: "vocab_spiteful_ant_benignant",
    word: "BENIGNANT",
    type: "Antonym",
    meaning: "Kind, gentle, favorable, and showing deep compassion or warmth (दयालु, कृपालु)",
    synonym: "Kind",
    antonym: "Hostile"
  },

  // --- SET: ACCORD ---
  {
    id: "vocab_accord_main",
    word: "ACCORD",
    type: "Synonym",
    meaning: "An official agreement, harmony, or concurrence between people, groups, or nations (सहमति, संधि, तालमेल)",
    synonym: "Agreement",
    antonym: "Conflict"
  },
  {
    id: "vocab_accord_syn_agree",
    word: "AGREE",
    type: "Synonym",
    meaning: "To have the same opinion, feeling, or position on a matter; concur (सहमति बनना, मानना)",
    synonym: "Concur",
    antonym: "Disagree"
  },
  {
    id: "vocab_accord_syn_chord",
    word: "CHORD",
    type: "Synonym",
    meaning: "A harmonious combination of elements, opinions, or musical tones working together (स्वर, सामंजस्य)",
    synonym: "Harmony",
    antonym: "Discord"
  },
  {
    id: "vocab_accord_syn_coincide",
    word: "COINCIDE",
    type: "Synonym",
    meaning: "To happen at the same time or to correspond exactly in position, opinion, or timing (मेल खाना, समान होना)",
    synonym: "Match",
    antonym: "Differ"
  },
  {
    id: "vocab_accord_syn_consist",
    word: "CONSIST",
    type: "Synonym",
    meaning: "To be composed of or to exist in harmony and consistency with certain elements (बना होना, संगति होना)",
    synonym: "Match",
    antonym: "Clash"
  },
  {
    id: "vocab_accord_syn_dovetail",
    word: "DOVETAIL",
    type: "Synonym",
    meaning: "To fit together perfectly, seamlessly, or harmoniously into a unified whole (मेल खाना, सुचारू रूप से बैठना)",
    synonym: "Fit",
    antonym: "Clash"
  },
  {
    id: "vocab_accord_syn_align",
    word: "ALIGN",
    type: "Synonym",
    meaning: "To place or bring into proper, consistent, or harmonious arrangement or agreement (मेल खाना, उचित स्थिति में होना)",
    synonym: "Adjust",
    antonym: "Misalign"
  },
  {
    id: "vocab_accord_syn_parallel",
    word: "PARALLEL",
    type: "Synonym",
    meaning: "To be in a similar, matching, or comparable situation, direction, or agreement (समान होना, सामंजस्य)",
    synonym: "Match",
    antonym: "Diverge"
  },
  {
    id: "vocab_accord_syn_harmonize",
    word: "HARMONIZE",
    type: "Synonym",
    meaning: "To bring into agreement, balance, or pleasing combination; eliminate conflict (सामंजस्य बैठाना)",
    synonym: "Balance",
    antonym: "Conflict"
  },
  {
    id: "vocab_accord_ant_dispute",
    word: "DISPUTE",
    type: "Antonym",
    meaning: "A disagreement, argument, or debate over terms, facts, or opinions (विवाद, झगड़ा)",
    synonym: "Conflict",
    antonym: "Agreement"
  },
  {
    id: "vocab_accord_ant_contradict",
    word: "CONTRADICT",
    type: "Antonym",
    meaning: "To assert the direct opposite of a statement or belief; be inconsistent with (विरोध करना)",
    synonym: "Oppose",
    antonym: "Confirm"
  },
  {
    id: "vocab_accord_ant_nullify",
    word: "NULLIFY",
    type: "Antonym",
    meaning: "To make something legally invalid, ineffective, or void; cancel out (अमान्य करना, निरस्त करना)",
    synonym: "Cancel",
    antonym: "Ratify"
  },
  {
    id: "vocab_accord_ant_conflict",
    word: "CONFLICT",
    type: "Antonym",
    meaning: "A serious disagreement, clash, or argument between incompatible ideas or forces (संघर्ष, टकराव)",
    synonym: "Clash",
    antonym: "Harmony"
  },
  {
    id: "vocab_accord_ant_clash",
    word: "CLASH",
    type: "Antonym",
    meaning: "To come into violent, direct, or loud disagreement and opposition (टकराव, विरोध)",
    synonym: "Conflict",
    antonym: "Agree"
  },

  // --- SET: REPUGNANT ---
  {
    id: "vocab_repugnant_main",
    word: "REPUGNANT",
    type: "Synonym",
    meaning: "Extremely distasteful, offensive, unacceptable, or repulsive to one's principles or senses (निंदनीय, घृणास्पद, अप्रिय)",
    synonym: "Repulsive",
    antonym: "Agreeable"
  },
  {
    id: "vocab_repugnant_syn_abhorrent",
    word: "ABHORRENT",
    type: "Synonym",
    meaning: "Inspiring disgust, loathing, or moral revulsion; repugnant (घृणास्पद, घिनौना)",
    synonym: "Repulsive",
    antonym: "Attractive"
  },
  {
    id: "vocab_repugnant_syn_abominable",
    word: "ABOMINABLE",
    type: "Synonym",
    meaning: "Causing moral revulsion, intense disgust, or extreme unpleasantness (घृणास्पद, घिनौना)",
    synonym: "Detestable",
    antonym: "Delightful"
  },
  {
    id: "vocab_repugnant_syn_appalling",
    word: "APPALLING",
    type: "Synonym",
    meaning: "Causing shock, dismay, or horror; extremely bad or dreadful (भयावह, चौंकाने वाला)",
    synonym: "Shocking",
    antonym: "Pleasing"
  },
  {
    id: "vocab_repugnant_syn_awful",
    word: "AWFUL",
    type: "Synonym",
    meaning: "Extremely bad, unpleasant, appalling, or objectionable (भयावह, भयंकर)",
    synonym: "Terrible",
    antonym: "Wonderful"
  },
  {
    id: "vocab_repugnant_syn_disgusting",
    word: "DISGUSTING",
    type: "Synonym",
    meaning: "Extremely unpleasant, offensive, or revolting to the physical or moral senses (घिनौना, उबाऊ)",
    synonym: "Revolting",
    antonym: "Pleasing"
  },
  {
    id: "vocab_repugnant_syn_horrendous",
    word: "HORRENDOUS",
    type: "Synonym",
    meaning: "Extremely shocking, dreadful, terrible, or horrific in scale (भयंकर, भयावह)",
    synonym: "Dreadful",
    antonym: "Wonderful"
  },
  {
    id: "vocab_repugnant_syn_loathsome",
    word: "LOATHSOME",
    type: "Synonym",
    meaning: "Causing intense hatred, disgust, or revulsion; repulsive (घृणास्पद, घिनौना)",
    synonym: "Repulsive",
    antonym: "Delightful"
  },
  {
    id: "vocab_repugnant_ant_innocuous",
    word: "INNOCUOUS",
    type: "Antonym",
    meaning: "Not harmful, dangerous, offensive, or objectionable; harmless (हानिरहित, बेअसर)",
    synonym: "Harmless",
    antonym: "Harmful"
  },
  {
    id: "vocab_repugnant_ant_inoffensive",
    word: "INOFFENSIVE",
    type: "Antonym",
    meaning: "Not likely to offend, insult, or cause displeasure or harm (अप्रतिबंधित, बेअसर)",
    synonym: "Harmless",
    antonym: "Offensive"
  },
  {
    id: "vocab_repugnant_ant_agreeable",
    word: "AGREEABLE",
    type: "Antonym",
    meaning: "Pleasing, enjoyable, acceptable, or suited to one's personal tastes (सहमत, सुखद)",
    synonym: "Pleasing",
    antonym: "Disagreeable"
  },
  {
    id: "vocab_repugnant_ant_alluring",
    word: "ALLURING",
    type: "Antonym",
    meaning: "Powerfully attractive, charming, or enticing in a way that draws attention (आकर्षक, मोहक)",
    synonym: "Charming",
    antonym: "Repulsive"
  },
  {
    id: "vocab_repugnant_ant_appealing",
    word: "APPEALING",
    type: "Antonym",
    meaning: "Attractive, charming, inviting, or pleasing to senses or mind (आकर्षक, आकर्षणपूर्ण)",
    synonym: "Attractive",
    antonym: "Unappealing"
  },
  {
    id: "vocab_repugnant_ant_congenial",
    word: "CONGENIAL",
    type: "Antonym",
    meaning: "Pleasant, friendly, agreeable, or perfectly suited to one's tastes or nature (अनुकूल, मिलनसार)",
    synonym: "Friendly",
    antonym: "Uncongenial"
  },

  // --- SET: ABRIDGE ---
  {
    id: "vocab_abridge_main",
    word: "ABRIDGE",
    type: "Synonym",
    meaning: "To shorten or condense a written work, speech, or process while retaining the essential core meaning (संक्षिप्त करना, घटाना)",
    synonym: "Condense",
    antonym: "Extend"
  },
  {
    id: "vocab_abridge_syn_abbreviate",
    word: "ABBREVIATE",
    type: "Synonym",
    meaning: "To shorten a word, phrase, text, or statement by omitting letters or parts (संक्षिप्त करना)",
    synonym: "Shorten",
    antonym: "Expand"
  },
  {
    id: "vocab_abridge_syn_curtail",
    word: "CURTAIL",
    type: "Synonym",
    meaning: "To reduce or limit something in terms of time, quantity, duration, or scope (घटाना, सीमित करना)",
    synonym: "Reduce",
    antonym: "Extend"
  },
  {
    id: "vocab_abridge_syn_elide",
    word: "ELIDE",
    type: "Synonym",
    meaning: "To omit, strike out, or leave out words, syllables, or parts of a text or speech (छोड़ देना, हटाना)",
    synonym: "Omit",
    antonym: "Include"
  },
  {
    id: "vocab_abridge_syn_shorten",
    word: "SHORTEN",
    type: "Synonym",
    meaning: "To make or become shorter in length, duration, scope, or size (छोटा करना, संक्षिप्त करना)",
    synonym: "Reduce",
    antonym: "Lengthen"
  },
  {
    id: "vocab_abridge_syn_truncate",
    word: "TRUNCATE",
    type: "Synonym",
    meaning: "To cut off or shorten something, especially by removing the top, end, or outer parts (काटना, संक्षिप्त करना)",
    synonym: "Cut",
    antonym: "Extend"
  },
  {
    id: "vocab_abridge_syn_syncopate",
    word: "SYNCOPATE",
    type: "Synonym",
    meaning: "To shorten or modify a word or phrase by omitting middle letters, sounds, or beats (संक्षिप्त करना, ताल में परिवर्तन करना)",
    synonym: "Shorten",
    antonym: "Lengthen"
  },
  {
    id: "vocab_abridge_syn_abstract",
    word: "ABSTRACT",
    type: "Synonym",
    meaning: "To summarize, condense, or extract the main points of a longer document or work (संक्षेप में प्रस्तुत करना)",
    synonym: "Summarize",
    antonym: "Expand"
  },
  {
    id: "vocab_abridge_syn_abate",
    word: "ABATE",
    type: "Synonym",
    meaning: "To reduce, lessen, or decrease in amount, intensity, or severity (घटाना, कम करना)",
    synonym: "Lessen",
    antonym: "Increase"
  },
  {
    id: "vocab_abridge_ant_elongate",
    word: "ELONGATE",
    type: "Antonym",
    meaning: "To make something longer in space, time, or physical dimension (लंबा करना)",
    synonym: "Lengthen",
    antonym: "Shorten"
  },
  {
    id: "vocab_abridge_ant_extend",
    word: "EXTEND",
    type: "Antonym",
    meaning: "To make something larger, longer, or broader in terms of scope, deadline, or space (विस्तारित करना)",
    synonym: "Expand",
    antonym: "Abridge"
  },
  {
    id: "vocab_abridge_ant_lengthen",
    word: "LENGTHEN",
    type: "Antonym",
    meaning: "To make something longer, especially in terms of time, duration, or physical length (लंबा करना)",
    synonym: "Extend",
    antonym: "Shorten"
  },
  {
    id: "vocab_abridge_ant_prolong",
    word: "PROLONG",
    type: "Antonym",
    meaning: "To extend the duration of an event, process, or state for a longer time than expected (बढ़ाना, लंबा करना)",
    synonym: "Extend",
    antonym: "Curtail"
  },
  {
    id: "vocab_abridge_ant_protract",
    word: "PROTRACT",
    type: "Antonym",
    meaning: "To prolong or extend something, especially an event or process, in an unnecessary or excessive manner (बढ़ाना, खींचना)",
    synonym: "Prolong",
    antonym: "Abridge"
  },
  // --- SET: QUIESCENT ---
  {
    id: "vocab_quiescent_main",
    word: "QUIESCENT",
    type: "Synonym",
    meaning: "In a state or period of temporary inactivity, quietness, or rest; not active or developing (निष्क्रिय, शांत)",
    synonym: "Dormant",
    antonym: "Active"
  },
  {
    id: "vocab_quiescent_syn_inactive",
    word: "INACTIVE",
    type: "Synonym",
    meaning: "Not engaging in physical, mental, or functional activity; passive or dormant (निष्क्रिय)",
    synonym: "Passive",
    antonym: "Active"
  },
  {
    id: "vocab_quiescent_syn_lethargic",
    word: "LETHARGIC",
    type: "Synonym",
    meaning: "Feeling sluggish, drowsy, or lacking energy and enthusiasm to perform tasks (आलसी, सुस्त)",
    synonym: "Sluggish",
    antonym: "Energetic"
  },
  {
    id: "vocab_quiescent_syn_sleepy",
    word: "SLEEPY",
    type: "Synonym",
    meaning: "Feeling drowsy, inclined to sleep, or lacking activity and movement (नींद में, सोने वाला)",
    synonym: "Drowsy",
    antonym: "Alert"
  },
  {
    id: "vocab_quiescent_syn_inert",
    word: "INERT",
    type: "Synonym",
    meaning: "Lacking the ability or strength to move, act, or react; completely motionless (निष्क्रिय, गतिहीन)",
    synonym: "Motionless",
    antonym: "Active"
  },
  {
    id: "vocab_quiescent_syn_sluggish",
    word: "SLUGGISH",
    type: "Synonym",
    meaning: "Moving, operating, or responding slowly; lacking vigor, alertness, or speed (सुस्त, धीमा)",
    synonym: "Slow",
    antonym: "Fast"
  },
  {
    id: "vocab_quiescent_syn_torpid",
    word: "TORPID",
    type: "Synonym",
    meaning: "Mentally or physically inactive, lethargic, or showing reduced physiological activity (सुस्त, निष्क्रिय)",
    synonym: "Lethargic",
    antonym: "Dynamic"
  },
  {
    id: "vocab_quiescent_syn_indolent",
    word: "INDOLENT",
    type: "Synonym",
    meaning: "Habitually lazy; wanting to avoid work, exertion, or physical activity (आलसी, क्रियाहीन)",
    synonym: "Lazy",
    antonym: "Diligent"
  },
  {
    id: "vocab_quiescent_syn_dormant",
    word: "DORMANT",
    type: "Synonym",
    meaning: "In a state of temporary rest, sleep, or inactivity; not active but capable of resuming (निष्क्रिय, सुप्त)",
    synonym: "Inactive",
    antonym: "Active"
  },
  {
    id: "vocab_quiescent_syn_sluggard",
    word: "SLUGGARD",
    type: "Synonym",
    meaning: "A habitually lazy, sluggish, or slow-moving person who avoids effort or work (आलसी, सुस्त)",
    synonym: "Idler",
    antonym: "Worker"
  },
  {
    id: "vocab_quiescent_ant_active",
    word: "ACTIVE",
    type: "Antonym",
    meaning: "Engaged in action or participation; energetic, functioning, and moving constantly (सक्रिय)",
    synonym: "Energetic",
    antonym: "Inactive"
  },
  {
    id: "vocab_quiescent_ant_engaged",
    word: "ENGAGED",
    type: "Antonym",
    meaning: "Actively participating, occupied, or involved in a specific task, work, or event (संलग्न, व्यस्त)",
    synonym: "Involved",
    antonym: "Disengaged"
  },
  {
    id: "vocab_quiescent_ant_industrious",
    word: "INDUSTRIOUS",
    type: "Antonym",
    meaning: "Hard-working, diligent, and constantly devoted to work or purposeful activity (मेहनती)",
    synonym: "Diligent",
    antonym: "Lazy"
  },
  {
    id: "vocab_quiescent_ant_sedulous",
    word: "SEDULOUS",
    type: "Antonym",
    meaning: "Showing persistent dedication, care, and diligence in performing duties or tasks (कड़ी मेहनत करने वाला)",
    synonym: "Diligent",
    antonym: "Careless"
  },
  {
    id: "vocab_quiescent_ant_working",
    word: "WORKING",
    type: "Antonym",
    meaning: "Actively engaged in physical or mental labor; functional and operational (काम करने वाला)",
    synonym: "Active",
    antonym: "Idle"
  },
  {
    id: "vocab_quiescent_ant_vital",
    word: "VITAL",
    type: "Antonym",
    meaning: "Full of life, vigor, and energy; essential for life or continued existence (आवश्यक, जीवनदायिनी)",
    synonym: "Essential",
    antonym: "Dull"
  },
  {
    id: "vocab_quiescent_ant_vivacious",
    word: "VIVACIOUS",
    type: "Antonym",
    meaning: "Attractively lively, animated, spirited, and full of enthusiasm (जीवंत, उत्साही)",
    synonym: "Lively",
    antonym: "Torpid"
  },

  // --- SET: MELANCHOLY ---
  {
    id: "vocab_melancholy_main",
    word: "MELANCHOLY",
    type: "Synonym",
    meaning: "A deep, persistent feeling of sadness, gloom, or sorrow with no obvious cause (शोकपूर्ण, उदासी)",
    synonym: "Gloomy",
    antonym: "Cheerful"
  },
  {
    id: "vocab_melancholy_syn_depressing",
    word: "DEPRESSING",
    type: "Synonym",
    meaning: "Causing sadness, discouragement, or low spirits; making someone feel downhearted (उदासीपूर्ण, निराशाजनक)",
    synonym: "Gloomy",
    antonym: "Uplifting"
  },
  {
    id: "vocab_melancholy_syn_dismal",
    word: "DISMAL",
    type: "Synonym",
    meaning: "Gloomy, dreary, cheerless, or causing a sense of sadness, failure, or depression (उदासी, निराशाजनक)",
    synonym: "Dreary",
    antonym: "Bright"
  },
  {
    id: "vocab_melancholy_syn_dreary",
    word: "DREARY",
    type: "Synonym",
    meaning: "Dull, bleak, lifeless, and depressing; causing a lingering feeling of boredom or sadness (नीरस, निराशाजनक)",
    synonym: "Dull",
    antonym: "Cheerful"
  },
  {
    id: "vocab_melancholy_syn_mournful",
    word: "MOURNFUL",
    type: "Synonym",
    meaning: "Feeling, expressing, or inducing deep sadness, grief, or a sorrowful tone (शोकपूर्ण, उदास)",
    synonym: "Sorrowful",
    antonym: "Joyful"
  },
  {
    id: "vocab_melancholy_syn_pathetic",
    word: "PATHETIC",
    type: "Synonym",
    meaning: "Evoking tenderness, pity, or sorrow due to being pitiful, vulnerable, or inadequate (करुणाजनक, दुखद)",
    synonym: "Pitiful",
    antonym: "Admirable"
  },
  {
    id: "vocab_melancholy_syn_distress",
    word: "DISTRESS",
    type: "Synonym",
    meaning: "A state of extreme sorrow, suffering, pain, anxiety, or physical discomfort (संकट, दुख)",
    synonym: "Suffering",
    antonym: "Comfort"
  },
  {
    id: "vocab_melancholy_syn_lamentable",
    word: "LAMENTABLE",
    type: "Synonym",
    meaning: "Unfortunate, regrettable, or worthy of being severe mourning, grief, or sorrow (शोकपूर्ण, दुखद)",
    synonym: "Regrettable",
    antonym: "Praiseworthy"
  },
  {
    id: "vocab_melancholy_ant_glad",
    word: "GLAD",
    type: "Antonym",
    meaning: "Feeling pleasure, happiness, delight, or relief; joyful (खुश, प्रसन्न)",
    synonym: "Happy",
    antonym: "Sad"
  },
  {
    id: "vocab_melancholy_ant_happy",
    word: "HAPPY",
    type: "Antonym",
    meaning: "Feeling or showing pleasure, contentment, joy, or satisfaction (खुश, प्रसन्न)",
    synonym: "Joyful",
    antonym: "Melancholy"
  },
  {
    id: "vocab_melancholy_ant_delightful",
    word: "DELIGHTFUL",
    type: "Antonym",
    meaning: "Highly pleasing, charming, or bringing great happiness and joy (सुखद, आनंददायक)",
    synonym: "Charming",
    antonym: "Dismal"
  },
  {
    id: "vocab_melancholy_ant_inspiring",
    word: "INSPIRING",
    type: "Antonym",
    meaning: "Causing a strong feeling of encouragement, enthusiasm, hope, or motivation (प्रेरणादायक)",
    synonym: "Uplifting",
    antonym: "Depressing"
  },
  {
    id: "vocab_melancholy_ant_pleasant",
    word: "PLEASANT",
    type: "Antonym",
    meaning: "Giving a sense of happy satisfaction, enjoyment, friendliness, or comfort (सुखद, आनंदपूर्ण)",
    synonym: "Agreeable",
    antonym: "Unpleasant"
  },
  {
    id: "vocab_melancholy_ant_thrilling",
    word: "THRILLING",
    type: "Antonym",
    meaning: "Causing sudden excitement, intense suspense, or high emotional pleasure (रोमांचक, उत्तेजक)",
    synonym: "Exciting",
    antonym: "Boring"
  },
  {
    id: "vocab_melancholy_ant_stimulating",
    word: "STIMULATING",
    type: "Antonym",
    meaning: "Encouraging interest, mental alertness, or enthusiasm; exciting (उत्तेजक, प्रेरणादायक)",
    synonym: "Invigorating",
    antonym: "Dull"
  },

  // --- SET: AMBIVALENT ---
  {
    id: "vocab_ambivalent_main",
    word: "AMBIVALENT",
    type: "Synonym",
    meaning: "Having mixed, uncertain, or contradictory feelings or ideas about someone or something (दोगुना, उलझन में)",
    synonym: "Uncertain",
    antonym: "Resolute"
  },
  {
    id: "vocab_ambivalent_syn_conflicted",
    word: "CONFLICTED",
    type: "Synonym",
    meaning: "Experiencing opposing emotions or thoughts about a choice; torn between options (असमंजस, दुविधा में)",
    synonym: "Torn",
    antonym: "Certain"
  },
  {
    id: "vocab_ambivalent_syn_equivocal",
    word: "EQUIVOCAL",
    type: "Synonym",
    meaning: "Open to more than one interpretation; ambiguous, uncertain, or misleading (संदिग्ध, अनिश्चित)",
    synonym: "Ambiguous",
    antonym: "Clear"
  },
  {
    id: "vocab_ambivalent_syn_doubtful",
    word: "DOUBTFUL",
    type: "Synonym",
    meaning: "Feeling uncertain, hesitant, or lacking confidence about a fact, outcome, or truth (शंकास्पद, अनिश्चित)",
    synonym: "Skeptical",
    antonym: "Certain"
  },
  {
    id: "vocab_ambivalent_syn_uncertain",
    word: "UNCERTAIN",
    type: "Synonym",
    meaning: "Not completely sure, reliable, or decided; liable to change unpredictably (अनिश्चित, संदिग्ध)",
    synonym: "Unsure",
    antonym: "Certain"
  },
  {
    id: "vocab_ambivalent_syn_vacillating",
    word: "VACILLATING",
    type: "Synonym",
    meaning: "Wavering indecisively between different opinions, plans, or courses of action (संदेह करने वाला, असमंजस में)",
    synonym: "Wavering",
    antonym: "Firm"
  },
  {
    id: "vocab_ambivalent_syn_irresolute",
    word: "IRRESOLUTE",
    type: "Synonym",
    meaning: "Showing uncertainty or hesitancy; unable to make up one's mind (असमंजस में, अनिर्णीत)",
    synonym: "Indecisive",
    antonym: "Resolute"
  },
  {
    id: "vocab_ambivalent_syn_undecided",
    word: "UNDECIDED",
    type: "Synonym",
    meaning: "Not having made a firm decision or choice; unsettled or unresolved (अनिर्णीत, निश्चय न हुआ)",
    synonym: "Unresolved",
    antonym: "Decided"
  },
  {
    id: "vocab_ambivalent_syn_unsure",
    word: "UNSURE",
    type: "Synonym",
    meaning: "Lacking certainty or confidence about something; doubtful or hesitant (अनिश्चित, शंकापूर्ण)",
    synonym: "Hesitant",
    antonym: "Sure"
  },
  {
    id: "vocab_ambivalent_ant_certain",
    word: "CERTAIN",
    type: "Antonym",
    meaning: "Known for sure; established beyond doubt, hesitation, or ambiguity (निश्चित)",
    synonym: "Sure",
    antonym: "Doubtful"
  },
  {
    id: "vocab_ambivalent_ant_resolute",
    word: "RESOLUTE",
    type: "Antonym",
    meaning: "Admirably purposeful, determined, unwavering, and firm in intention (दृढ़ निश्चयी)",
    synonym: "Determined",
    antonym: "Irresolute"
  },
  {
    id: "vocab_ambivalent_ant_sure",
    word: "SURE",
    type: "Antonym",
    meaning: "Feeling completely confident in one's mind or knowledge; free from doubt (निश्चित, पक्का)",
    synonym: "Confident",
    antonym: "Unsure"
  },
  {
    id: "vocab_ambivalent_ant_decided",
    word: "DECIDED",
    type: "Antonym",
    meaning: "Having made a clear choice; definite, firm, and unhesitating (निश्चित, पक्का)",
    synonym: "Definite",
    antonym: "Undecided"
  },
  {
    id: "vocab_ambivalent_ant_unambivalent",
    word: "UNAMBIVALENT",
    type: "Antonym",
    meaning: "Not having mixed or contradictory feelings; completely clear and firm (स्पष्ट, अनिश्चय रहित)",
    synonym: "Clear",
    antonym: "Ambivalent"
  },

  // --- SET: DOCILE ---
  {
    id: "vocab_docile_main",
    word: "DOCILE",
    type: "Synonym",
    meaning: "Ready to accept control, instruction, or subjection; easy to manage, train, or quiet (आज्ञाकारी, विनम्र)",
    synonym: "Submissive",
    antonym: "Rebellious"
  },
  {
    id: "vocab_docile_syn_amenable",
    word: "AMENABLE",
    type: "Synonym",
    meaning: "Open and responsive to suggestion, persuasion, advice, or control; manageable (सुलभ, आज्ञाकारी)",
    synonym: "Cooperative",
    antonym: "Uncooperative"
  },
  {
    id: "vocab_docile_syn_compliant",
    word: "COMPLIANT",
    type: "Synonym",
    meaning: "Disposed or willing to comply with orders, rules, desires, or requests of others (आज्ञाकारी, मानने वाला)",
    synonym: "Obedient",
    antonym: "Defiant"
  },
  {
    id: "vocab_docile_syn_obedient",
    word: "OBEDIENT",
    type: "Synonym",
    meaning: "Complying or willing to comply with orders, commands, or instructions from authority (आज्ञाकारी, आज्ञापालक)",
    synonym: "Dutiful",
    antonym: "Disobedient"
  },
  {
    id: "vocab_docile_syn_tractable",
    word: "TRACTABLE",
    type: "Synonym",
    meaning: "Easy to control, influence, guide, or manage without resistance (काबू में आने योग्य, सीधा)",
    synonym: "Manageable",
    antonym: "Intractable"
  },
  {
    id: "vocab_docile_syn_biddable",
    word: "BIDDABLE",
    type: "Synonym",
    meaning: "Meekly ready to accept orders, commands, or guidance from others; compliant (आज्ञाकारी, बात मानने वाला)",
    synonym: "Obedient",
    antonym: "Stubborn"
  },
  {
    id: "vocab_docile_syn_obsequious",
    word: "OBSEQUIOUS",
    type: "Synonym",
    meaning: "Excessively eager to please, serve, or obey someone in an overly servile manner (चापलूस, चाटुकार)",
    synonym: "Servile",
    antonym: "Domineering"
  },
  {
    id: "vocab_docile_syn_amiable",
    word: "AMIABLE",
    type: "Synonym",
    meaning: "Having or displaying a friendly, pleasant, and easy-going nature (मित्रवत, सौम्य)",
    synonym: "Friendly",
    antonym: "Hostile"
  },
  {
    id: "vocab_docile_ant_contrary",
    word: "CONTRARY",
    type: "Antonym",
    meaning: "Inclined to disagree or do the opposite of what is expected or requested (विपरीत, जिद्दी)",
    synonym: "Opposed",
    antonym: "Agreeable"
  },
  {
    id: "vocab_docile_ant_defiant",
    word: "DEFIANT",
    type: "Antonym",
    meaning: "Showing open resistance, bold disobedience, or hostility toward authority (उद्दंड, विद्रोही)",
    synonym: "Rebellious",
    antonym: "Obedient"
  },
  {
    id: "vocab_docile_ant_incompliant",
    word: "INCOMPLIANT",
    type: "Antonym",
    meaning: "Refusing to comply, agree, or adhere to rules, requests, or instructions (असम्मत, अनुपयुक्त)",
    synonym: "Noncompliant",
    antonym: "Compliant"
  },
  {
    id: "vocab_docile_ant_recalcitrant",
    word: "RECALCITRANT",
    type: "Antonym",
    meaning: "Having an obstinately uncooperative attitude toward authority or discipline (हठी, विद्रोही)",
    synonym: "Unruly",
    antonym: "Docile"
  },
  {
    id: "vocab_docile_ant_willful",
    word: "WILLFUL",
    type: "Antonym",
    meaning: "Intentional, deliberate, or headstrong; obstinately bent on having one's own way (जिद्दी, हठी)",
    synonym: "Headstrong",
    antonym: "Yielding"
  },
  {
    id: "vocab_docile_ant_balky",
    word: "BALKY",
    type: "Antonym",
    meaning: "Refusing to proceed, act, or cooperate; stubborn and unmanageable (अनअपेक्षित, अड़ियल)",
    synonym: "Stubborn",
    antonym: "Cooperative"
  },

  // --- SET: EXTRANEOUS ---
  {
    id: "vocab_extraneous_main",
    word: "EXTRANEOUS",
    type: "Synonym",
    meaning: "Irrelevant or unrelated to the subject being dealt with; coming from the outside (अप्रासंगिक, बाहरी)",
    synonym: "Irrelevant",
    antonym: "Intrinsic"
  },
  {
    id: "vocab_extraneous_syn_external",
    word: "EXTERNAL",
    type: "Synonym",
    meaning: "Relating to or situated on the outside or exterior of something (बाहरी, बाहरी अंग)",
    synonym: "Outer",
    antonym: "Internal"
  },
  {
    id: "vocab_extraneous_syn_accidental",
    word: "ACCIDENTAL",
    type: "Synonym",
    meaning: "Happening by chance, unintentionally, or as an incidental non-essential feature (आकस्मिक, अनचाहा)",
    synonym: "Incidental",
    antonym: "Intentional"
  },
  {
    id: "vocab_extraneous_syn_alien",
    word: "ALIEN",
    type: "Synonym",
    meaning: "Foreign, unfamiliar, or not belonging naturally to the current environment or subject (विदेशी, बाहरी)",
    synonym: "Foreign",
    antonym: "Native"
  },
  {
    id: "vocab_extraneous_syn_irrelevant",
    word: "IRRELEVANT",
    type: "Synonym",
    meaning: "Not connected with or relevant to something being discussed or considered (अप्रासंगिक, अनावश्यक)",
    synonym: "Unrelated",
    antonym: "Relevant"
  },
  {
    id: "vocab_extraneous_syn_inapplicable",
    word: "INAPPLICABLE",
    type: "Synonym",
    meaning: "Not suitable, relevant, or appropriate to be applied to a particular situation (अनुपयुक्त, अप्रासंगिक)",
    synonym: "Irrelevant",
    antonym: "Applicable"
  },
  {
    id: "vocab_extraneous_syn_insignificant",
    word: "INSIGNIFICANT",
    type: "Synonym",
    meaning: "Too small, minor, or unimportant to be worth consideration or attention (अमहत्वपूर्ण, छोटा सा)",
    synonym: "Minor",
    antonym: "Significant"
  },
  {
    id: "vocab_extraneous_syn_exterior",
    word: "EXTERIOR",
    type: "Synonym",
    meaning: "Forming or situated on the outer surface or structure of something (बाहरी)",
    synonym: "Outer",
    antonym: "Interior"
  },
  {
    id: "vocab_extraneous_ant_inherent",
    word: "INHERENT",
    type: "Antonym",
    meaning: "Existing in something as a permanent, essential, or characteristic attribute (अंतर्निहित, स्वाभाविक)",
    synonym: "Intrinsic",
    antonym: "Extraneous"
  },
  {
    id: "vocab_extraneous_ant_innate",
    word: "INNATE",
    type: "Antonym",
    meaning: "Inborn, natural, or existing in a person or thing from birth (जन्मजात, स्वाभाविक)",
    synonym: "Inborn",
    antonym: "Acquired"
  },
  {
    id: "vocab_extraneous_ant_intrinsic",
    word: "INTRINSIC",
    type: "Antonym",
    meaning: "Belonging naturally to the essential nature or constitution of something (आंतरिक, वास्तविक)",
    synonym: "Essential",
    antonym: "Extraneous"
  },
  {
    id: "vocab_extraneous_ant_congenital",
    word: "CONGENITAL",
    type: "Antonym",
    meaning: "Present from birth, especially referring to a physical trait, disease, or habit (जन्मजात)",
    synonym: "Inborn",
    antonym: "Acquired"
  },
  // --- SET: ADULTERATE ---
  {
    id: "vocab_adulterate_main",
    word: "ADULTERATE",
    type: "Synonym",
    meaning: "To make something poorer in quality or impure by adding inferior, harmful, or foreign substances to it (मिलावट करना, गंदा करना, अशुद्ध करना)",
    synonym: "Contaminate",
    antonym: "Purify"
  },
  {
    id: "vocab_adulterate_syn_alloyed",
    word: "ALLOYED",
    type: "Synonym",
    meaning: "Made by mixing two or more metal elements or substances together, usually reducing purity (मिश्रित, अशुद्ध किया हुआ)",
    synonym: "Mixed",
    antonym: "Pure"
  },
  {
    id: "vocab_adulterate_syn_dilute",
    word: "DILUTE",
    type: "Synonym",
    meaning: "To weaken or reduce the concentration or force of a liquid or substance by adding water or another agent (पतला करना, घोलना)",
    synonym: "Weaken",
    antonym: "Concentrate"
  },
  {
    id: "vocab_adulterate_syn_impure",
    word: "IMPURE",
    type: "Synonym",
    meaning: "Containing unwanted, harmful, or foreign substances; not clean or morally pure (अशुद्ध, अपवित्र)",
    synonym: "Contaminated",
    antonym: "Pure"
  },
  {
    id: "vocab_adulterate_syn_polluted",
    word: "POLLUTED",
    type: "Synonym",
    meaning: "Contaminated or made unsafe with harmful, toxic, or dirty substances (प्रदूषित, गंदा)",
    synonym: "Dirty",
    antonym: "Clean"
  },
  {
    id: "vocab_adulterate_syn_weakened",
    word: "WEAKENED",
    type: "Synonym",
    meaning: "Made less strong, intense, effective, or concentrated through dilution or damage (कमजोर, घटित)",
    synonym: "Impaired",
    antonym: "Strengthened"
  },
  {
    id: "vocab_adulterate_syn_unrefined",
    word: "UNREFINED",
    type: "Synonym",
    meaning: "Not processed, purified, or cleared of unwanted elements; in a raw state (अपरिष्कृत, कच्चा)",
    synonym: "Raw",
    antonym: "Refined"
  },
  {
    id: "vocab_adulterate_syn_bemired",
    word: "BEMIRED",
    type: "Synonym",
    meaning: "Made dirty or polluted, especially with mud, dirt, or moral stains (कीचड़ में सना हुआ, गंदा)",
    synonym: "Soiled",
    antonym: "Cleaned"
  },
  {
    id: "vocab_adulterate_ant_pure",
    word: "PURE",
    type: "Antonym",
    meaning: "Not mixed with any other foreign substances; completely clean, wholesome, and unadulterated (शुद्ध)",
    synonym: "Clean",
    antonym: "Impure"
  },
  {
    id: "vocab_adulterate_ant_unpolluted",
    word: "UNPOLLUTED",
    type: "Antonym",
    meaning: "Free from contamination, harmful chemicals, or toxic substances; fresh (प्रदूषण रहित)",
    synonym: "Clean",
    antonym: "Polluted"
  },
  {
    id: "vocab_adulterate_ant_unadulterated",
    word: "UNADULTERATED",
    type: "Antonym",
    meaning: "Not altered, diluted, or mixed with any harmful or inferior substances; genuine (अशुद्धता से मुक्त)",
    synonym: "Pure",
    antonym: "Adulterated"
  },
  {
    id: "vocab_adulterate_ant_filtered",
    word: "FILTERED",
    type: "Antonym",
    meaning: "Having impurities or solid particles removed through a porous medium or filtering device (छान लिया हुआ)",
    synonym: "Purified",
    antonym: "Unfiltered"
  },
  {
    id: "vocab_adulterate_ant_sterilized",
    word: "STERILIZED",
    type: "Antonym",
    meaning: "Made completely free from bacteria, germs, or living microorganisms through heating or cleaning (निर्जर्मित, कीटाणूरहित)",
    synonym: "Sanitized",
    antonym: "Infected"
  },

  // --- SET: APATHY ---
  {
    id: "vocab_apathy_main",
    word: "APATHY",
    type: "Synonym",
    meaning: "Lack of interest, enthusiasm, warmth, or concern; a state of being completely indifferent (उदासीनता, नीरसता)",
    synonym: "Indifference",
    antonym: "Empathy"
  },
  {
    id: "vocab_apathy_syn_emotionlessness",
    word: "EMOTIONLESSNESS",
    type: "Synonym",
    meaning: "Complete lack of emotional response, warmth, or feeling toward situations or people (भावहीनता)",
    synonym: "Indifference",
    antonym: "Emotion"
  },
  {
    id: "vocab_apathy_syn_impassiveness",
    word: "IMPASSIVENESS",
    type: "Synonym",
    meaning: "The quality of remaining unresponsive, stoic, or completely unaffected by feelings (वीरता, निश्चलता)",
    synonym: "Stoicism",
    antonym: "Sensitivity"
  },
  {
    id: "vocab_apathy_syn_insensibility",
    word: "INSENSIBILITY",
    type: "Synonym",
    meaning: "Lack of awareness, responsiveness, or sensitivity to physical pain, emotions, or distress (संवेदनहीनता)",
    synonym: "Numbness",
    antonym: "Sensibility"
  },
  {
    id: "vocab_apathy_syn_phlegm",
    word: "PHLEGM",
    type: "Synonym",
    meaning: "Calmness, coolness, or extreme lack of emotion or excitement in difficult conditions (थकावट, नीरसता)",
    synonym: "Calmness",
    antonym: "Excitement"
  },
  {
    id: "vocab_apathy_syn_callosity",
    word: "CALLOSITY",
    type: "Synonym",
    meaning: "Emotional insensitivity, hardness of heart, or a complete lack of empathy for others (कठोरता, संवेदनहीनता)",
    synonym: "Hardness",
    antonym: "Sympathy"
  },
  {
    id: "vocab_apathy_syn_obduragcy",
    word: "OBDURACY",
    type: "Synonym",
    meaning: "The quality of being stubbornly resistant to persuasion, influence, or human emotion (कठोरता, हठ)",
    synonym: "Stubbornness",
    antonym: "Flexibility"
  },
  {
    id: "vocab_apathy_syn_unconcern",
    word: "UNCONCERN",
    type: "Synonym",
    meaning: "Lack of anxiety, interest, or care in a matter; persistent indifference (उदासीनता, अनिच्छा)",
    synonym: "Indifference",
    antonym: "Concern"
  },
  {
    id: "vocab_apathy_ant_emotion",
    word: "EMOTION",
    type: "Antonym",
    meaning: "A strong feeling such as love, anger, joy, or fear that deeply affects behavior and mind (भावना)",
    synonym: "Feeling",
    antonym: "Apathy"
  },
  {
    id: "vocab_apathy_ant_sensibility",
    word: "SENSIBILITY",
    type: "Antonym",
    meaning: "The capacity to feel, perceive, appreciate, and respond emotionally to experiences (संवेदनशीलता)",
    synonym: "Sensitivity",
    antonym: "Callosity"
  },
  {
    id: "vocab_apathy_ant_empathy",
    word: "EMPATHY",
    type: "Antonym",
    meaning: "The psychological ability to understand, share, and resonate with the feelings of another (सहानुभूति)",
    synonym: "Compassion",
    antonym: "Apathy"
  },
  {
    id: "vocab_apathy_ant_sympathy",
    word: "SYMPATHY",
    type: "Antonym",
    meaning: "Feelings of pity, sorrow, or shared compassion for someone experiencing misfortune (सहानुभूति, दया)",
    synonym: "Compassion",
    antonym: "Cruelty"
  },
  {
    id: "vocab_apathy_ant_receptiveness",
    word: "RECEPTIVENESS",
    type: "Antonym",
    meaning: "The willingness or readiness to receive, accept, and consider new ideas or emotions (ग्रहणशीलता)",
    synonym: "Openness",
    antonym: "Resistance"
  },

  // --- SET: SUCCINCT ---
  {
    id: "vocab_succinct_main",
    word: "SUCCINCT",
    type: "Synonym",
    meaning: "Briefly and clearly expressed, without using unnecessary words or rambling details (संक्षिप्त, संक्षेप)",
    synonym: "Concise",
    antonym: "Prolix"
  },
  {
    id: "vocab_succinct_syn_aphoristic",
    word: "APHORISTIC",
    type: "Synonym",
    meaning: "Expressing a general truth, wisdom, or principle in a short, memorable, and concise manner (सूक्तिपूर्ण, संक्षिप्त)",
    synonym: "Pithy",
    antonym: "Verbose"
  },
  {
    id: "vocab_succinct_syn_compact",
    word: "COMPACT",
    type: "Synonym",
    meaning: "Closely packed, neatly arranged, and free of redundant or scattered elements (संक्षिप्त, सघन)",
    synonym: "Dense",
    antonym: "Scattered"
  },
  {
    id: "vocab_succinct_syn_concise",
    word: "CONCISE",
    type: "Synonym",
    meaning: "Giving a lot of information clearly and in a few words; brief and free of fluff (संक्षिप्त, संक्षेप)",
    synonym: "Brief",
    antonym: "Wordy"
  },
  {
    id: "vocab_succinct_syn_elliptical",
    word: "ELLIPTICAL",
    type: "Synonym",
    meaning: "Expressed in a condensed way that deliberately omits obvious words or phrases (संक्षिप्त, गोल)",
    synonym: "Obscure",
    antonym: "Explicit"
  },
  {
    id: "vocab_succinct_syn_laconic",
    word: "LACONIC",
    type: "Synonym",
    meaning: "Using very few words in speech or writing, often appearing blunt or reserved (संक्षिप्त, अल्पभाषी)",
    synonym: "Terse",
    antonym: "Talkative"
  },
  {
    id: "vocab_succinct_syn_pithy",
    word: "PITHY",
    type: "Synonym",
    meaning: "Concise, forceful, and meaningfully expressive; full of substance (सार्थक, संक्षिप्त)",
    synonym: "Terse",
    antonym: "Verbose"
  },
  {
    id: "vocab_succinct_syn_crisp",
    word: "CRISP",
    type: "Synonym",
    meaning: "Neat, clean, brisk, precise, and directly to the point in speech or style (संक्षिप्त, साफ)",
    synonym: "Clear",
    antonym: "Vague"
  },
  {
    id: "vocab_succinct_syn_capsule",
    word: "CAPSULE",
    type: "Synonym",
    meaning: "Condensed, summarized, or presented in a highly compressed and short format (संक्षिप्त रूप)",
    synonym: "Condensed",
    antonym: "Expanded"
  },
  {
    id: "vocab_succinct_syn_thumbnail",
    word: "THUMBNAIL",
    type: "Synonym",
    meaning: "A brief, highly compact summary or representation of something complex (संक्षिप्त विवरण)",
    synonym: "Brief",
    antonym: "Detailed"
  },
  {
    id: "vocab_succinct_ant_circuitous",
    word: "CIRCUITOUS",
    type: "Antonym",
    meaning: "Longer than the most direct way; roundabout, indirect, and winding (घुमावदार, गोल-मोल)",
    synonym: "Indirect",
    antonym: "Direct"
  },
  {
    id: "vocab_succinct_ant_prolix",
    word: "PROLIX",
    type: "Antonym",
    meaning: "Using or containing too many words; tediously lengthy, wordy, and detailed (विस्तृत, अति-शब्दिक)",
    synonym: "Verbose",
    antonym: "Succinct"
  },
  {
    id: "vocab_succinct_ant_rambling",
    word: "RAMBLING",
    type: "Antonym",
    meaning: "Lengthy and disorganized; wandering from subject to subject without clear focus (असंगत, बेतरतीब)",
    synonym: "Wandering",
    antonym: "Focused"
  },
  {
    id: "vocab_succinct_ant_autologous",
    word: "AUTOLOGOUS",
    type: "Antonym",
    meaning: "Referring to self-derived material or self-referential, tedious repetition (स्वयं से संबंधित, स्व-संबद्ध)",
    synonym: "Repetitive",
    antonym: "Direct"
  },
  {
    id: "vocab_succinct_ant_repetitious",
    word: "REPETITIOUS",
    type: "Antonym",
    meaning: "Repeated far too often, unnecessary, wordy, and tedious to listen to (पुनरावृत्त, बार-बार दोहराने वाला)",
    synonym: "Redundant",
    antonym: "Concise"
  },

  // --- SET: TEMPESTUOUS ---
  {
    id: "vocab_tempestuous_main",
    word: "TEMPESTUOUS",
    type: "Synonym",
    meaning: "Characterized by strong, turbulent, conflicting emotions or wildly stormy, violent weather (तूफानी, उग्र)",
    synonym: "Turbulent",
    antonym: "Calm"
  },
  {
    id: "vocab_tempestuous_syn_convulsive",
    word: "CONVULSIVE",
    type: "Synonym",
    meaning: "Having sudden, violent, uncontrollable movements, spasms, or emotional outbursts (आक्षेपयुक्त, उपद्रवी)",
    synonym: "Violent",
    antonym: "Steady"
  },
  {
    id: "vocab_tempestuous_syn_cyclonic",
    word: "CYCLONIC",
    type: "Synonym",
    meaning: "Relating to or resembling a violent cyclone; wild, chaotic, and destructive (चक्रवातीय)",
    synonym: "Chaotic",
    antonym: "Peaceful"
  },
  {
    id: "vocab_tempestuous_syn_ferocious",
    word: "FEROCIOUS",
    type: "Synonym",
    meaning: "Savagely fierce, violent, aggressive, or intensely cruel in strength (भयंकर, उग्र)",
    synonym: "Fierce",
    antonym: "Gentle"
  },
  {
    id: "vocab_tempestuous_syn_turbulent",
    word: "TURBULENT",
    type: "Synonym",
    meaning: "Characterized by disorder, chaos, agitation, instability, or severe violence (उथल-पुथल भरा)",
    synonym: "Chaotic",
    antonym: "Peaceful"
  },
  {
    id: "vocab_tempestuous_syn_stormy",
    word: "STORMY",
    type: "Synonym",
    meaning: "Full of strong winds, heavy rain, or marked by angry, passionate conflict (तूफानी, अशांत)",
    synonym: "Turbulent",
    antonym: "Calm"
  },
  {
    id: "vocab_tempestuous_syn_violent",
    word: "VIOLENT",
    type: "Synonym",
    meaning: "Using or involving strong, destructive physical force or intense emotional energy (हिंसक, तेज)",
    synonym: "Fierce",
    antonym: "Peaceful"
  },
  {
    id: "vocab_tempestuous_syn_tumultuous",
    word: "TUMULTUOUS",
    type: "Synonym",
    meaning: "Marked by great noise, confusion, emotional disturbance, or wild uproar (उथल-पुथल से भरा)",
    synonym: "Chaotic",
    antonym: "Tranquil"
  },
  {
    id: "vocab_tempestuous_syn_fierce",
    word: "FIERCE",
    type: "Synonym",
    meaning: "Having or showing intense, aggressive, or powerful enthusiasm or hostility (प्रचंड, उग्र)",
    synonym: "Intense",
    antonym: "Mild"
  },
  {
    id: "vocab_tempestuous_ant_nonviolent",
    word: "NONVIOLENT",
    type: "Antonym",
    meaning: "Free from physical force, aggression, or violence; peaceful in nature (अहिंसक)",
    synonym: "Peaceful",
    antonym: "Violent"
  },
  {
    id: "vocab_tempestuous_ant_calm",
    word: "CALM",
    type: "Antonym",
    meaning: "Free from agitation, excitement, disturbance, or wild weather; serene (शांत, स्थिर)",
    synonym: "Serene",
    antonym: "Stormy"
  },
  {
    id: "vocab_tempestuous_ant_pacific",
    word: "PACIFIC",
    type: "Antonym",
    meaning: "Promoting peace, tranquility, and calmness; non-aggressive in nature (शांतिप्रिय)",
    synonym: "Peaceful",
    antonym: "Hostile"
  },
  {
    id: "vocab_tempestuous_ant_serene",
    word: "SERENE",
    type: "Antonym",
    meaning: "Calm, peaceful, untroubled, and completely free from emotional turmoil (शांत, निर्विकार)",
    synonym: "Tranquil",
    antonym: "Turbulent"
  },
  {
    id: "vocab_tempestuous_ant_halcyon",
    word: "HALCYON",
    type: "Antonym",
    meaning: "Denoting a period of time in the past that was peaceful, happy, prosperous, and calm (शांतिक्षेत्र, सुखमय)",
    synonym: "Peaceful",
    antonym: "Stormy"
  },

  // --- SET: PUNGENT ---
  {
    id: "vocab_pungent_main",
    word: "PUNGENT",
    type: "Synonym",
    meaning: "Having a strong, sharp, biting taste or smell, or being sharply critical in tone or style (तीव्र, तीखा, तेज)",
    synonym: "Sharp",
    antonym: "Mild"
  },
  {
    id: "vocab_pungent_syn_tangy",
    word: "TANGY",
    type: "Synonym",
    meaning: "Having a strong, sharp, refreshing, and often zesty flavor or aroma (तीखा, तीव्र स्वाद)",
    synonym: "Zesty",
    antonym: "Bland"
  },
  {
    id: "vocab_pungent_syn_acrid",
    word: "ACRID",
    type: "Synonym",
    meaning: "Having an unpleasantly bitter, sharp, or burning smell or taste that stings the senses (तीखा, जलन पैदा करने वाला)",
    synonym: "Biting",
    antonym: "Sweet"
  },
  {
    id: "vocab_pungent_syn_bitter",
    word: "BITTER",
    type: "Synonym",
    meaning: "Having a sharp, pungent taste or smell, often harsh and opposite to sweetness (कड़वा)",
    synonym: "Harsh",
    antonym: "Sweet"
  },
  {
    id: "vocab_pungent_syn_piquant",
    word: "PIQUANT",
    type: "Synonym",
    meaning: "Pleasantly sharp, spicy, or appetizing in flavor, stimulating taste buds (तीखा, मसालेदार)",
    synonym: "Spicy",
    antonym: "Bland"
  },
  {
    id: "vocab_pungent_syn_peppery",
    word: "PEPPERY",
    type: "Synonym",
    meaning: "Having a sharp, hot, or spicy taste like black pepper (मिर्च जैसा, तीखा)",
    synonym: "Spicy",
    antonym: "Mild"
  },
  {
    id: "vocab_pungent_syn_putrid",
    word: "PUTRID",
    type: "Synonym",
    meaning: "Rotten, decaying, foul-smelling, and emitting a sickeningly sharp odor (सड़ांधदार, सड़ा हुआ)",
    synonym: "Foul",
    antonym: "Fresh"
  },
  {
    id: "vocab_pungent_syn_rancid",
    word: "RANCID",
    type: "Synonym",
    meaning: "Having an extremely foul, stale, or unpleasant odor/taste due to spoilage, especially in fats or oils (बासी, सड़ा हुआ)",
    synonym: "Stale",
    antonym: "Fresh"
  },
  {
    id: "vocab_pungent_syn_acute",
    word: "ACUTE",
    type: "Synonym",
    meaning: "Having a strong, sharp, penetrating, or intense sensory quality or perception (तीव्र, गहरी)",
    synonym: "Sharp",
    antonym: "Dull"
  },
  {
    id: "vocab_pungent_syn_gingery",
    word: "GINGERY",
    type: "Synonym",
    meaning: "Having the sharp, spicy, or warm flavor and aroma characteristic of ginger (अदरक जैसा, तीखा)",
    synonym: "Spicy",
    antonym: "Bland"
  },
  {
    id: "vocab_pungent_ant_mild",
    word: "MILD",
    type: "Antonym",
    meaning: "Not strong, sharp, or harsh in taste, smell, or character; gentle and subtle (हल्का, सौम्य)",
    synonym: "Gentle",
    antonym: "Pungent"
  },
  {
    id: "vocab_pungent_ant_smooth",
    word: "SMOOTH",
    type: "Antonym",
    meaning: "Having a soft, even texture or mild flavor without harshness or sharp bite (मुलायम, चिकना)",
    synonym: "Soft",
    antonym: "Harsh"
  },
  {
    id: "vocab_pungent_ant_mellow",
    word: "MELLOW",
    type: "Antonym",
    meaning: "Soft, rich, pleasant, and gentle in taste, sound, or mood, reduced in harshness (मधुर, सौम्य)",
    synonym: "Soft",
    antonym: "Harsh"
  },
  {
    id: "vocab_pungent_ant_ripe",
    word: "RIPE",
    type: "Antonym",
    meaning: "Fully developed, matured, and ready for consumption, often with a pleasant sweet taste (पका हुआ)",
    synonym: "Mature",
    antonym: "Raw"
  },
  {
    id: "vocab_pungent_ant_dilute",
    word: "DILUTE",
    type: "Antonym",
    meaning: "Reduced in strength, flavor, or concentration; watery (पतला, कमजोर)",
    synonym: "Watery",
    antonym: "Strong"
  },
  {
    id: "vocab_pungent_ant_watery",
    word: "WATERY",
    type: "Antonym",
    meaning: "Having the thin consistency or bland taste of water; lacking rich flavor intensity (पानी जैसा, पतला)",
    synonym: "Thin",
    antonym: "Concentrated"
  },
  // --- SET: TENTATIVE ---
  {
    id: "vocab_tentative_main",
    word: "TENTATIVE",
    type: "Synonym",
    meaning: "Not certain or fixed; provisional, hesitant, or subject to change (अस्थायी, अनिश्चित, प्रायोगिक)",
    synonym: "Provisional",
    antonym: "Certain"
  },
  {
    id: "vocab_tentative_syn_dependent",
    word: "DEPENDENT",
    type: "Synonym",
    meaning: "Relying on someone or something else for support, existence, or decision (निर्भर, आश्रित)",
    synonym: "Reliant",
    antonym: "Independent"
  },
  {
    id: "vocab_tentative_syn_contingent",
    word: "CONTINGENT",
    type: "Synonym",
    meaning: "Subject to chance or dependent on other uncertain conditions or factors (सशर्त, अप्रत्याशित)",
    synonym: "Conditional",
    antonym: "Unconditional"
  },
  {
    id: "vocab_tentative_syn_conditional",
    word: "CONDITIONAL",
    type: "Synonym",
    meaning: "Subject to specific conditions, stipulations, or requirements being met (शर्तों पर आधारित)",
    synonym: "Stipulated",
    antonym: "Absolute"
  },
  {
    id: "vocab_tentative_syn_susceptible",
    word: "SUSCEPTIBLE",
    type: "Synonym",
    meaning: "Likely to be influenced, harmed, or affected by something vulnerable (संवेदनशील, प्रभावशाली)",
    synonym: "Vulnerable",
    antonym: "Resistant"
  },
  {
    id: "vocab_tentative_syn_dubious",
    word: "DUBIOUS",
    type: "Synonym",
    meaning: "Hesitant, doubtful, or uncertain about truth, quality, or outcome (संदिग्ध, शंकास्पद)",
    synonym: "Doubtful",
    antonym: "Certain"
  },
  {
    id: "vocab_tentative_syn_shaky",
    word: "SHAKY",
    type: "Synonym",
    meaning: "Uncertain, unstable, unreliable, or lacking firm support and strength (कांपता हुआ, कमजोर)",
    synonym: "Unstable",
    antonym: "Firm"
  },
  {
    id: "vocab_tentative_ant_certain",
    word: "CERTAIN",
    type: "Antonym",
    meaning: "Completely sure, fixed, settled, or known beyond doubt (निश्चित, पक्का)",
    synonym: "Sure",
    antonym: "Tentative"
  },
  {
    id: "vocab_tentative_ant_hands_down",
    word: "HANDS-DOWN",
    type: "Antonym",
    meaning: "Easily, unquestionably, or without any shadow of a doubt (बिन किसी संदेह के, निश्चित)",
    synonym: "Undoubted",
    antonym: "Doubtful"
  },
  {
    id: "vocab_tentative_ant_sure",
    word: "SURE",
    type: "Antonym",
    meaning: "Free from doubt; confident, assured, and completely reliable (निश्चित, आश्वस्त)",
    synonym: "Confident",
    antonym: "Unsure"
  },
  {
    id: "vocab_tentative_ant_undeniable",
    word: "UNDENIABLE",
    type: "Antonym",
    meaning: "Impossible to deny, dispute, or refuse to accept; indisputable (अकाट्य, जिसका खंडन न हो सके)",
    synonym: "Indisputable",
    antonym: "Doubtful"
  },
  {
    id: "vocab_tentative_ant_indubitable",
    word: "INDUBITABLE",
    type: "Antonym",
    meaning: "Impossible to doubt; unquestionably clear, true, or certain (निर्विवाद, असंदिग्ध)",
    synonym: "Unquestionable",
    antonym: "Dubious"
  },
  {
    id: "vocab_tentative_ant_incontestable",
    word: "INCONTESTABLE",
    type: "Antonym",
    meaning: "Not open to dispute, challenge, or question; absolutely settled (निर्विवाद)",
    synonym: "Unchallengeable",
    antonym: "Contestable"
  },

  // --- SET: HERALD ---
  {
    id: "vocab_herald_main",
    word: "HERALD",
    type: "Synonym",
    meaning: "To announce, signal, or foretell the beginning, approach, or arrival of something (उद्घोषित करना, सूचना देना, पूर्वाभास देना)",
    synonym: "Announce",
    antonym: "Suppress"
  },
  {
    id: "vocab_herald_syn_harbinger",
    word: "HARBINGER",
    type: "Synonym",
    meaning: "A person, object, or event that signals or indicates the approach of future events (पूर्वसूचक, संकेतकर्ता)",
    synonym: "Forerunner",
    antonym: "Follower"
  },
  {
    id: "vocab_herald_syn_foregoer",
    word: "FOREGOER",
    type: "Synonym",
    meaning: "Someone or something that precedes and indicates the arrival of something else (पूर्वागामी, पहले होने वाला)",
    synonym: "Predecessor",
    antonym: "Successor"
  },
  {
    id: "vocab_herald_syn_advertiser",
    word: "ADVERTISER",
    type: "Synonym",
    meaning: "A person or entity that publicizes, promotes, or announces something publicly (विज्ञापन करने वाला, सूचना देने वाला)",
    synonym: "Promoter",
    antonym: "Concealer"
  },
  {
    id: "vocab_herald_syn_proclaimer",
    word: "PROCLAIMER",
    type: "Synonym",
    meaning: "A person who announces or declares important news or statements publicly (उद्घोषक, घोषणा करने वाला)",
    synonym: "Declarer",
    antonym: "Suppressor"
  },
  {
    id: "vocab_herald_syn_announcer",
    word: "ANNOUNCER",
    type: "Synonym",
    meaning: "A person who introduces programs, reads news, or makes public statements (उद्घोषक, प्रस्तावक)",
    synonym: "Reporter",
    antonym: "Listener"
  },
  {
    id: "vocab_herald_syn_anticipate",
    word: "ANTICIPATE",
    type: "Synonym",
    meaning: "To expect, look forward to, or foresee future events before they happen (पूर्वानुमान करना, अपेक्षा रखना)",
    synonym: "Foresee",
    antonym: "Unexpect"
  },
  {
    id: "vocab_herald_ant_suppress",
    word: "SUPPRESS",
    type: "Antonym",
    meaning: "To forcibly put an end to something, inhibit, or prevent information from being revealed (दबाना, रोकना)",
    synonym: "Restrain",
    antonym: "Herald"
  },
  {
    id: "vocab_herald_ant_conceal",
    word: "CONCEAL",
    type: "Antonym",
    meaning: "To hide, keep secret, or cover up something to prevent it from being seen or known (छिपाना, ढका देना)",
    synonym: "Hide",
    antonym: "Reveal"
  },
  {
    id: "vocab_herald_ant_recall",
    word: "RECALL",
    type: "Antonym",
    meaning: "To bring back to mind, cancel, revoke, or officially order the return of something (याद करना, वापस बुलाना)",
    synonym: "Revoke",
    antonym: "Announce"
  },
  {
    id: "vocab_herald_ant_recant",
    word: "RECANT",
    type: "Antonym",
    meaning: "To formally withdraw, disavow, or take back a previously held opinion or statement (बदलना, वापस लेना)",
    synonym: "Retract",
    antonym: "Proclaim"
  },
  {
    id: "vocab_herald_ant_retract",
    word: "RETRACT",
    type: "Antonym",
    meaning: "To draw back or formally withdraw a statement, promise, or claim (वापस लेना, खींचना)",
    synonym: "Withdraw",
    antonym: "Declare"
  },
  {
    id: "vocab_herald_ant_revoke",
    word: "REVOKE",
    type: "Antonym",
    meaning: "To officially cancel, annul, or take back a decree, law, or privilege (निरस्त करना, वापस लेना)",
    synonym: "Cancel",
    antonym: "Sanction"
  },

  // --- SET: SUCCULENT ---
  {
    id: "vocab_succulent_main",
    word: "SUCCULENT",
    type: "Synonym",
    meaning: "Of food, especially fruit or meat, full of juice, tender, moist, and delicious (रसीला, ताज़गी से भरा हुआ)",
    synonym: "Juicy",
    antonym: "Desiccated"
  },
  {
    id: "vocab_succulent_syn_juicy",
    word: "JUICY",
    type: "Synonym",
    meaning: "Full of liquid or juice, moist, succulent, and rich in natural flavor (रसीला, रस से भरा हुआ)",
    synonym: "Moist",
    antonym: "Dry"
  },
  {
    id: "vocab_succulent_syn_pulpy",
    word: "PULPY",
    type: "Synonym",
    meaning: "Soft, fleshy, moist, and rich in fruit fiber or pulp (गुदेदार, मांशल)",
    synonym: "Fleshy",
    antonym: "Hard"
  },
  {
    id: "vocab_succulent_syn_sappy",
    word: "SAPPY",
    type: "Synonym",
    meaning: "Full of sap, juice, or moisture; soft and tender (रसॉला, चिपचिपा)",
    synonym: "Moist",
    antonym: "Dry"
  },
  {
    id: "vocab_succulent_syn_appetizing",
    word: "APPETIZING",
    type: "Synonym",
    meaning: "Appealing or inviting to the senses, especially stimulating hunger or taste (स्वादिष्ट, भूख बढ़ाने वाला)",
    synonym: "Inviting",
    antonym: "Unappetizing"
  },
  {
    id: "vocab_succulent_syn_delicious",
    word: "DELICIOUS",
    type: "Synonym",
    meaning: "Highly pleasing, agreeable, and delightful to the taste or smell (स्वादिष्ट, लजीज)",
    synonym: "Tasty",
    antonym: "Distasteful"
  },
  {
    id: "vocab_succulent_syn_delectable",
    word: "DELECTABLE",
    type: "Synonym",
    meaning: "Extremely delicious, mouth-watering, and pleasing to taste (स्वादिष्ट, लजीज)",
    synonym: "Delicious",
    antonym: "Distasteful"
  },
  {
    id: "vocab_succulent_syn_ambrosial",
    word: "AMBROSIAL",
    type: "Synonym",
    meaning: "Extremely pleasing to taste or smell; divine or fit for gods (अमृत जैसा, दिव्य)",
    synonym: "Heavenly",
    antonym: "Unsavory"
  },
  {
    id: "vocab_succulent_ant_distasteful",
    word: "DISTASTEFUL",
    type: "Antonym",
    meaning: "Unpleasant or offensive to taste, smell, or moral sensibilities (अप्रिय, घिनौना)",
    synonym: "Offensive",
    antonym: "Delicious"
  },
  {
    id: "vocab_succulent_ant_insipid",
    word: "INSIPID",
    type: "Antonym",
    meaning: "Lacking flavor, zest, interest, or vigor; dull and completely tasteless (बेस्वाद, बिना स्वाद का)",
    synonym: "Tasteless",
    antonym: "Flavorful"
  },
  {
    id: "vocab_succulent_ant_tasteless",
    word: "TASTELESS",
    type: "Antonym",
    meaning: "Lacking flavor, spice, or aesthetic taste; dull and bland (स्वादरहित)",
    synonym: "Bland",
    antonym: "Tasty"
  },
  {
    id: "vocab_succulent_ant_unsavory",
    word: "UNSAVORY",
    type: "Antonym",
    meaning: "Disagreeable or unpleasant to taste or smell; morally objectionable (अप्रिय, स्वादरहीन)",
    synonym: "Unpleasant",
    antonym: "Appetizing"
  },
  {
    id: "vocab_succulent_ant_unpalatable",
    word: "UNPALATABLE",
    type: "Antonym",
    meaning: "Not pleasant to taste or difficult to accept or tolerate (अप्रिय, स्वादरहीन)",
    synonym: "Inedible",
    antonym: "Palatable"
  },
  {
    id: "vocab_succulent_ant_desiccated",
    word: "DESICCATED",
    type: "Antonym",
    meaning: "Completely dried out; lacking moisture or vitality (सूखा हुआ, निर्जल)",
    synonym: "Dried",
    antonym: "Succulent"
  },
  {
    id: "vocab_succulent_ant_dry",
    word: "DRY",
    type: "Antonym",
    meaning: "Free from liquid, moisture, or natural juices; parched (सूखा)",
    synonym: "Arid",
    antonym: "Juicy"
  },

  // --- SET: EMEND ---
  {
    id: "vocab_emend_main",
    word: "EMEND",
    type: "Synonym",
    meaning: "To make corrections, revisions, or improvements, especially to a written text or document (सुधारना, संशोधित करना)",
    synonym: "Correct",
    antonym: "Impair"
  },
  {
    id: "vocab_emend_syn_amend",
    word: "AMEND",
    type: "Synonym",
    meaning: "To make formal changes, revisions, or improvements to a document, law, or statement (सुधारना, संशोधित करना)",
    synonym: "Revise",
    antonym: "Worsen"
  },
  {
    id: "vocab_emend_syn_correct",
    word: "CORRECT",
    type: "Synonym",
    meaning: "To remove errors, inaccuracies, or faults; make something right (सही करना)",
    synonym: "Rectify",
    antonym: "Spoil"
  },
  {
    id: "vocab_emend_syn_rectify",
    word: "RECTIFY",
    type: "Synonym",
    meaning: "To put right, correct, or remedy a mistake, problem, or fault (सुधारना, ठीक करना)",
    synonym: "Fix",
    antonym: "Aggravate"
  },
  {
    id: "vocab_emend_syn_debug",
    word: "DEBUG",
    type: "Synonym",
    meaning: "To identify and remove errors, flaws, or bugs from software, code, or systems (त्रुटियों को ठीक करना)",
    synonym: "Troubleshoot",
    antonym: "Infect"
  },
  {
    id: "vocab_emend_syn_remedy",
    word: "REMEDY",
    type: "Synonym",
    meaning: "To set right an undesirable situation, cure an illness, or correct a fault (उपचार करना, सुधारना)",
    synonym: "Cure",
    antonym: "Harm"
  },
  {
    id: "vocab_emend_syn_ameliorate",
    word: "AMELIORATE",
    type: "Synonym",
    meaning: "To make something bad or unsatisfactory better; improve conditions (सुधारना, अच्छा करना)",
    synonym: "Improve",
    antonym: "Worsen"
  },
  {
    id: "vocab_emend_syn_modify",
    word: "MODIFY",
    type: "Synonym",
    meaning: "To make partial changes or alterations to something to adapt or improve it (संशोधित करना, बदलना)",
    synonym: "Alter",
    antonym: "Preserve"
  },
  {
    id: "vocab_emend_syn_alter",
    word: "ALTER",
    type: "Synonym",
    meaning: "To change, adjust, or transform the character, structure, or detail of something (बदलना, संशोधित करना)",
    synonym: "Adjust",
    antonym: "Maintain"
  },
  {
    id: "vocab_emend_ant_damage",
    word: "DAMAGE",
    type: "Antonym",
    meaning: "To inflict physical harm, impairment, or loss on something (नुकसान पहुंचाना)",
    synonym: "Harm",
    antonym: "Repair"
  },
  {
    id: "vocab_emend_ant_impair",
    word: "IMPAIR",
    type: "Antonym",
    meaning: "To weaken, damage, or reduce the quality, strength, or functioning of something (नष्ट करना, बिगाड़ना)",
    synonym: "Weaken",
    antonym: "Enhance"
  },
  {
    id: "vocab_emend_ant_spoil",
    word: "SPOIL",
    type: "Antonym",
    meaning: "To diminish or destroy the value, quality, or enjoyment of something (खराब करना, बिगाड़ना)",
    synonym: "Ruin",
    antonym: "Emend"
  },
  {
    id: "vocab_emend_ant_aggravate",
    word: "AGGRAVATE",
    type: "Antonym",
    meaning: "To make a problem, injury, or severe situation worse or more troublesome (बढ़ाना, और खराब करना)",
    synonym: "Worsen",
    antonym: "Alleviate"
  },
  {
    id: "vocab_emend_ant_harm",
    word: "HARM",
    type: "Antonym",
    meaning: "To cause physical, emotional, or structural injury, damage, or hurt (हानि पहुंचाना, नुकसान करना)",
    synonym: "Hurt",
    antonym: "Protect"
  },

  // --- SET: BASTION ---
  {
    id: "vocab_bastion_main",
    word: "BASTION",
    type: "Synonym",
    meaning: "A fortified stronghold, building, or institution that strongly defends or protects principles (किला, गढ़)",
    synonym: "Stronghold",
    antonym: "Weakness"
  },
  {
    id: "vocab_bastion_syn_castle",
    word: "CASTLE",
    type: "Synonym",
    meaning: "A large fortified building or group of buildings surrounded by defensive walls (किला, महल)",
    synonym: "Palace",
    antonym: "Hovel"
  },
  {
    id: "vocab_bastion_syn_fort",
    word: "FORT",
    type: "Synonym",
    meaning: "A heavily fortified building or strategic military position designed for defense (किला, सैन्य किला)",
    synonym: "Stronghold",
    antonym: "Outpost"
  },
  {
    id: "vocab_bastion_syn_fortification",
    word: "FORTIFICATION",
    type: "Synonym",
    meaning: "A defensive wall, structure, or defensive reinforcement built to protect against attack (किलाबंदी, किले की संरचना)",
    synonym: "Defense",
    antonym: "Vulnerability"
  },
  {
    id: "vocab_bastion_syn_citadel",
    word: "CITADEL",
    type: "Synonym",
    meaning: "A fortress, typically on high ground, commanding and defending a city (किला, किले का ऊपरी हिस्सा)",
    synonym: "Fortress",
    antonym: "Weakness"
  },
  {
    id: "vocab_bastion_syn_battlement",
    word: "BATTLEMENT",
    type: "Synonym",
    meaning: "A parapet or defensive wall with indented gaps for shooting weapons (किले की दीवार पर सुरक्षा संरचना)",
    synonym: "Parapet",
    antonym: "Gap"
  },
  {
    id: "vocab_bastion_syn_rampart",
    word: "RAMPART",
    type: "Synonym",
    meaning: "A defensive wall or broad elevation of earth built to defend a fort or city (किले की दीवार, सुरक्षा दीवार)",
    synonym: "Bulwark",
    antonym: "Breach"
  },
  {
    id: "vocab_bastion_syn_blockhouse",
    word: "BLOCKHOUSE",
    type: "Synonym",
    meaning: "A small, heavily fortified structure or outpost used for defensive lookout (कड़ी सुरक्षा वाला घर)",
    synonym: "Outpost",
    antonym: "Target"
  },
  {
    id: "vocab_bastion_ant_weak_spot",
    word: "WEAK SPOT",
    type: "Antonym",
    meaning: "A vulnerable, exposed, or easily attacked point in a defense, system, or argument (कमजोर स्थान)",
    synonym: "Flaw",
    antonym: "Stronghold"
  },
  {
    id: "vocab_bastion_ant_weak_hold",
    word: "WEAK HOLD",
    type: "Antonym",
    meaning: "An insecure or fragile position or defense easily overcome due to lack of strength (कमजोर पकड़)",
    synonym: "Insecurity",
    antonym: "Bastion"
  },
  {
    id: "vocab_bastion_ant_weakness",
    word: "WEAKNESS",
    type: "Antonym",
    meaning: "The state or condition of lacking strength, power, defense, or firmness (कमजोरी)",
    synonym: "Frailty",
    antonym: "Strength"
  },
  // --- SET: INDELIBLE ---
  {
    id: "vocab_indelible_main",
    word: "INDELIBLE",
    type: "Synonym",
    meaning: "Not able to be erased, removed, or forgotten; leaving a permanent and lasting impression (अमिट, स्थायी)",
    synonym: "Permanent",
    antonym: "Erasable"
  },
  {
    id: "vocab_indelible_syn_memorable",
    word: "MEMORABLE",
    type: "Synonym",
    meaning: "Worth remembering or easily remembered because of being special or significant (यादगार)",
    synonym: "Unforgettable",
    antonym: "Forgettable"
  },
  {
    id: "vocab_indelible_syn_unforgettable",
    word: "UNFORGETTABLE",
    type: "Synonym",
    meaning: "So remarkable or extraordinary that it cannot be forgotten or erased from memory (अविस्मरणीय)",
    synonym: "Memorable",
    antonym: "Forgettable"
  },
  {
    id: "vocab_indelible_syn_notable",
    word: "NOTABLE",
    type: "Synonym",
    meaning: "Worth paying attention to; significant, remarkable, or important (महत्वपूर्ण, ध्यान आकर्षित करने योग्य)",
    synonym: "Remarkable",
    antonym: "Unremarkable"
  },
  {
    id: "vocab_indelible_syn_remarkable",
    word: "REMARKABLE",
    type: "Synonym",
    meaning: "Worth noticing or commenting on because of being unusual, extraordinary, or striking (उल्लेखनीय)",
    synonym: "Notable",
    antonym: "Ordinary"
  },
  {
    id: "vocab_indelible_syn_permanent",
    word: "PERMANENT",
    type: "Synonym",
    meaning: "Lasting or intended to last forever without changing or decaying (स्थायी)",
    synonym: "Lasting",
    antonym: "Temporary"
  },
  {
    id: "vocab_indelible_syn_lasting",
    word: "LASTING",
    type: "Synonym",
    meaning: "Continuing for a long time without significant change or termination (स्थायी, दीर्घकालिक)",
    synonym: "Enduring",
    antonym: "Brief"
  },
  {
    id: "vocab_indelible_syn_stirring",
    word: "STIRRING",
    type: "Synonym",
    meaning: "Causing strong feelings, excitement, passion, or inspiration in people (प्रेरणादायक, उत्तेजक)",
    synonym: "Inspiring",
    antonym: "Boring"
  },
  {
    id: "vocab_indelible_syn_enduring",
    word: "ENDURING",
    type: "Synonym",
    meaning: "Lasting for a long time, often despite hardship, difficulty, or challenges (स्थायी, टिकाऊ)",
    synonym: "Lasting",
    antonym: "Temporary"
  },
  {
    id: "vocab_indelible_ant_unremarkable",
    word: "UNREMARKABLE",
    type: "Antonym",
    meaning: "Not worthy of attention or consideration; completely ordinary and common (सामान्य, उल्लेखनीय नहीं)",
    synonym: "Ordinary",
    antonym: "Remarkable"
  },
  {
    id: "vocab_indelible_ant_forgettable",
    word: "FORGETTABLE",
    type: "Antonym",
    meaning: "Easy to forget because it lacks uniqueness, interest, or significance (भुलवाने योग्य)",
    synonym: "Ordinary",
    antonym: "Memorable"
  },
  {
    id: "vocab_indelible_ant_delible",
    word: "DELIBLE",
    type: "Antonym",
    meaning: "Capable of being erased, removed, or deleted; not permanent (मिटाने योग्य)",
    synonym: "Erasable",
    antonym: "Indelible"
  },
  {
    id: "vocab_indelible_ant_erasable",
    word: "ERASABLE",
    type: "Antonym",
    meaning: "Able to be wiped away, removed, or scrubbed off easily (मिटाने योग्य)",
    synonym: "Delible",
    antonym: "Permanent"
  },
  {
    id: "vocab_indelible_ant_destructible",
    word: "DESTRUCTIBLE",
    type: "Antonym",
    meaning: "Capable of being destroyed, ruined, or broken down completely (नष्ट किया जा सकने योग्य)",
    synonym: "Fragile",
    antonym: "Enduring"
  },

  // --- SET: EXPEDITIOUS ---
  {
    id: "vocab_expeditious_main",
    word: "EXPEDITIOUS",
    type: "Synonym",
    meaning: "Done with speed and efficiency; quick, prompt, and effective in achieving a result (त्वरित, शीघ्र)",
    synonym: "Prompt",
    antonym: "Dilatory"
  },
  {
    id: "vocab_expeditious_syn_alert",
    word: "ALERT",
    type: "Synonym",
    meaning: "Quick to notice and respond to things; vigilant, attentive, and fully awake (सतर्क)",
    synonym: "Vigilant",
    antonym: "Inattentive"
  },
  {
    id: "vocab_expeditious_syn_alacritous",
    word: "ALACRITOUS",
    type: "Synonym",
    meaning: "Eager and quick to respond, act, or execute duties cheerfully (तत्पर)",
    synonym: "Eager",
    antonym: "Slow"
  },
  {
    id: "vocab_expeditious_syn_receptive",
    word: "RECEPTIVE",
    type: "Synonym",
    meaning: "Willing to consider or accept new ideas, suggestions, or feedback promptly (ग्रहणशील)",
    synonym: "Open",
    antonym: "Resistant"
  },
  {
    id: "vocab_expeditious_syn_immediate",
    word: "IMMEDIATE",
    type: "Synonym",
    meaning: "Occurring or done instantly without delay; instant (तत्काल)",
    synonym: "Instant",
    antonym: "Delayed"
  },
  {
    id: "vocab_expeditious_syn_fleet",
    word: "FLEET",
    type: "Synonym",
    meaning: "Moving or operating quickly and gracefully; fast-moving (तेज़)",
    synonym: "Swift",
    antonym: "Slow"
  },
  {
    id: "vocab_expeditious_syn_prompt",
    word: "PROMPT",
    type: "Synonym",
    meaning: "Done or given without delay; quick to act or respond (तत्काल, शीघ्र)",
    synonym: "Quick",
    antonym: "Dilatory"
  },
  {
    id: "vocab_expeditious_syn_quick",
    word: "QUICK",
    type: "Synonym",
    meaning: "Moving or occurring at a fast pace or short period of time (त्वरित)",
    synonym: "Fast",
    antonym: "Slow"
  },
  {
    id: "vocab_expeditious_syn_rapid",
    word: "RAPID",
    type: "Synonym",
    meaning: "Happening or moving at great speed or within a short time (तेज़)",
    synonym: "Swift",
    antonym: "Slow"
  },
  {
    id: "vocab_expeditious_syn_responsive",
    word: "RESPONSIVE",
    type: "Synonym",
    meaning: "Reacting quickly and positively to stimuli, requests, or suggestions (प्रतिक्रियाशील)",
    synonym: "Receptive",
    antonym: "Unresponsive"
  },
  {
    id: "vocab_expeditious_ant_crawling",
    word: "CRAWLING",
    type: "Antonym",
    meaning: "Moving very slowly, almost at a crawl; lacking speed (रेंगने जैसा)",
    synonym: "Slow",
    antonym: "Rapid"
  },
  {
    id: "vocab_expeditious_ant_dawdling",
    word: "DAWDLING",
    type: "Antonym",
    meaning: "Wasting time by being slow, lazy, or idling unnecessarily (आलस्य से समय बिताना)",
    synonym: "Loitering",
    antonym: "Expeditious"
  },
  {
    id: "vocab_expeditious_ant_dilatory",
    word: "DILATORY",
    type: "Antonym",
    meaning: "Tending to delay, postpone, or procrastinate; slow to act (विलंब करने वाला)",
    synonym: "Slow",
    antonym: "Prompt"
  },
  {
    id: "vocab_expeditious_ant_lagging",
    word: "LAGGING",
    type: "Antonym",
    meaning: "Falling behind in progress, growth, or speed; slow-moving (पिछड़ता हुआ)",
    synonym: "Trailing",
    antonym: "Leading"
  },
  {
    id: "vocab_expeditious_ant_laggard",
    word: "LAGGARD",
    type: "Antonym",
    meaning: "A person or thing that is slow to move, respond, or progress (ढीला, पीछे रहने वाला)",
    synonym: "Slowpoke",
    antonym: "Fleet"
  },

  // --- SET: ANARCHIST ---
  {
    id: "vocab_anarchist_main",
    word: "ANARCHIST",
    type: "Synonym",
    meaning: "A person who believes in or advocates for the absence of government authority and law (अराजकतावादी)",
    synonym: "Rebel",
    antonym: "Law-abiding"
  },
  {
    id: "vocab_anarchist_syn_anarchy",
    word: "ANARCHY",
    type: "Synonym",
    meaning: "A state of disorder due to the absence or non-recognition of authority (अराजकता)",
    synonym: "Chaos",
    antonym: "Order"
  },
  {
    id: "vocab_anarchist_syn_subversive",
    word: "SUBVERSIVE",
    type: "Synonym",
    meaning: "Seeking or intended to disrupt, overthrow, or undermine an established system or authority (क्रांतिकारी, विद्रोही)",
    synonym: "Rebellious",
    antonym: "Loyal"
  },
  {
    id: "vocab_anarchist_syn_extremist",
    word: "EXTREMIST",
    type: "Synonym",
    meaning: "A person who holds extreme political or religious views and supports radical action (अतिवादी)",
    synonym: "Radical",
    antonym: "Moderate"
  },
  {
    id: "vocab_anarchist_syn_crazy",
    word: "CRAZY",
    type: "Synonym",
    meaning: "Acting in an irrational, erratic, wild, or extreme manner (पागल, विक्षिप्त)",
    synonym: "Wild",
    antonym: "Sane"
  },
  {
    id: "vocab_anarchist_syn_radical",
    word: "RADICAL",
    type: "Synonym",
    meaning: "Advocating thorough or complete political, economic, or social change (क्रांतिकारी, कट्टर)",
    synonym: "Extreme",
    antonym: "Conservative"
  },
  {
    id: "vocab_anarchist_syn_revolutionary",
    word: "REVOLUTIONARY",
    type: "Synonym",
    meaning: "Involving or causing a complete or dramatic change in politics or society (क्रांतिकारी)",
    synonym: "Rebellious",
    antonym: "Traditional"
  },
  {
    id: "vocab_anarchist_ant_legitimacy",
    word: "LEGITIMACY",
    type: "Antonym",
    meaning: "The quality of conforming to the law, rules, or accepted legal standards (वैधता)",
    synonym: "Validity",
    antonym: "Illegitimacy"
  },
  {
    id: "vocab_anarchist_ant_law_abidingness",
    word: "LAW-ABIDINGNESS",
    type: "Antonym",
    meaning: "The quality or habit of obeying the laws and regulations of society (कानून का पालन करनेवाला)",
    synonym: "Obedience",
    antonym: "Lawlessness"
  },
  {
    id: "vocab_anarchist_ant_orderliness",
    word: "ORDERLINESS",
    type: "Antonym",
    meaning: "The state of being well-arranged, peaceful, neat, and maintaining social order (व्यवस्थितता)",
    synonym: "System",
    antonym: "Chaos"
  },
  {
    id: "vocab_anarchist_ant_peacefulness",
    word: "PEACEFULNESS",
    type: "Antonym",
    meaning: "The state of being calm, tranquil, non-violent, and free from disturbance (शांतिपूर्णता)",
    synonym: "Tranquility",
    antonym: "Violence"
  },
  {
    id: "vocab_anarchist_ant_tyrant",
    word: "TYRANT",
    type: "Antonym",
    meaning: "A cruel and oppressive ruler who exercises absolute authority ruthlessly (अत्याचारी)",
    synonym: "Dictator",
    antonym: "Democrat"
  },

  // --- SET: PARCH ---
  {
    id: "vocab_parch_main",
    word: "PARCH",
    type: "Synonym",
    meaning: "To make something extremely dry, hot, or thirsty, especially by heat or intense sunlight (झुलसाना, सूखा देना)",
    synonym: "Dry",
    antonym: "Drench"
  },
  {
    id: "vocab_parch_syn_desiccate",
    word: "DESICCATE",
    type: "Synonym",
    meaning: "To remove moisture thoroughly from something; dry out completely (सुखाना)",
    synonym: "Dehydrate",
    antonym: "Moisten"
  },
  {
    id: "vocab_parch_syn_dry",
    word: "DRY",
    type: "Synonym",
    meaning: "To remove moisture, liquid, or dampness from something (सूखा करना)",
    synonym: "Dehydrate",
    antonym: "Wet"
  },
  {
    id: "vocab_parch_syn_dehydrate",
    word: "DEHYDRATE",
    type: "Synonym",
    meaning: "To lose or remove a large amount of water or fluid from a body or substance (जल का अभाव होना)",
    synonym: "Dry",
    antonym: "Hydrate"
  },
  {
    id: "vocab_parch_syn_bake",
    word: "BAKE",
    type: "Synonym",
    meaning: "To dry or cook something by subjecting it to intense dry heat (सेंकना)",
    synonym: "Scorch",
    antonym: "Freeze"
  },
  {
    id: "vocab_parch_syn_evaporate",
    word: "EVAPORATE",
    type: "Synonym",
    meaning: "To turn from liquid into vapor due to heat, leaving the surface dry (वाष्पित होना)",
    synonym: "Vaporize",
    antonym: "Condense"
  },
  {
    id: "vocab_parch_syn_sear",
    word: "SEAR",
    type: "Synonym",
    meaning: "To burn, scorch, or dry up the surface of something with intense heat (जलाना, जलाना)",
    synonym: "Scorch",
    antonym: "Cool"
  },
  {
    id: "vocab_parch_syn_shrivel",
    word: "SHRIVEL",
    type: "Synonym",
    meaning: "To wrinkle, dry up, or contract due to intense heat or lack of moisture (सिकुड़ना)",
    synonym: "Wither",
    antonym: "Swell"
  },
  {
    id: "vocab_parch_syn_wither",
    word: "WITHER",
    type: "Synonym",
    meaning: "To become dry, shriveled, or faded from loss of moisture or heat (मुरझाना)",
    synonym: "Shrivel",
    antonym: "Bloom"
  },
  {
    id: "vocab_parch_ant_deluge",
    word: "DELUGE",
    type: "Antonym",
    meaning: "A severe flood or a massive downpour of water (भारी वर्षा, बाढ़)",
    synonym: "Flood",
    antonym: "Drought"
  },
  {
    id: "vocab_parch_ant_drench",
    word: "DRENCH",
    type: "Antonym",
    meaning: "To soak, wet, or saturate something thoroughly with liquid (सिक्त करना)",
    synonym: "Soak",
    antonym: "Parch"
  },
  {
    id: "vocab_parch_ant_flood",
    word: "FLOOD",
    type: "Antonym",
    meaning: "An overflow of a large body of water beyond its normal limits (बाढ़, जलप्रलय)",
    synonym: "Inundation",
    antonym: "Drought"
  },
  {
    id: "vocab_parch_ant_inundate",
    word: "INUNDATE",
    type: "Antonym",
    meaning: "To overwhelm or submerge completely with a flood of water (जलमग्न करना)",
    synonym: "Submerge",
    antonym: "Drain"
  },
  {
    id: "vocab_parch_ant_saturate",
    word: "SATURATE",
    type: "Antonym",
    meaning: "To cause something to become thoroughly soaked or filled with liquid (संतृप्त करना)",
    synonym: "Soak",
    antonym: "Dry"
  },
  {
    id: "vocab_parch_ant_moisten",
    word: "MOISTEN",
    type: "Antonym",
    meaning: "To make something slightly wet or damp (गीला करना)",
    synonym: "Dampen",
    antonym: "Dry"
  },
  {
    id: "vocab_parch_ant_swamp",
    word: "SWAMP",
    type: "Antonym",
    meaning: "To overwhelm or drench an area with an abundance of water or work (जलमग्न करना)",
    synonym: "Inundate",
    antonym: "Parch"
  },

  // --- SET: PARRY ---
  {
    id: "vocab_parry_main",
    word: "PARRY",
    type: "Synonym",
    meaning: "To ward off, deflect, or evade an incoming attack, question, or criticism skillfully (टालना, बचाव करना)",
    synonym: "Deflect",
    antonym: "Confront"
  },
  {
    id: "vocab_parry_syn_avoid",
    word: "AVOID",
    type: "Synonym",
    meaning: "To keep away from or prevent something undesirable from happening (बचना)",
    synonym: "Evade",
    antonym: "Confront"
  },
  {
    id: "vocab_parry_syn_evade",
    word: "EVADE",
    type: "Synonym",
    meaning: "To escape or dodge something skillfully or dishonestly (बच निकलना, टालना)",
    synonym: "Dodge",
    antonym: "Face"
  },
  {
    id: "vocab_parry_syn_elude",
    word: "ELUDE",
    type: "Synonym",
    meaning: "To escape or avoid capture, comprehension, or memory in a clever way (बच निकलना)",
    synonym: "Escape",
    antonym: "Confront"
  },
  {
    id: "vocab_parry_syn_escape",
    word: "ESCAPE",
    type: "Synonym",
    meaning: "To break free from confinement, danger, or unwanted situations (बचना)",
    synonym: "Flee",
    antonym: "Capture"
  },
  {
    id: "vocab_parry_syn_weave",
    word: "WEAVE",
    type: "Synonym",
    meaning: "To move back and forth or twist in and out to dodge obstacles (मुड़ना, उलझना)",
    synonym: "Dodge",
    antonym: "Advance"
  },
  {
    id: "vocab_parry_syn_dodge",
    word: "DODGE",
    type: "Synonym",
    meaning: "To move quickly to one side to avoid a blow, obstacle, or question (खिसकना, बचना)",
    synonym: "Evade",
    antonym: "Face"
  },
  {
    id: "vocab_parry_syn_deflect",
    word: "DEFLECT",
    type: "Synonym",
    meaning: "To divert or turn something aside from its original straight course (मोड़ना, टालना)",
    synonym: "Divert",
    antonym: "Attract"
  },
  {
    id: "vocab_parry_syn_fence",
    word: "FENCE",
    type: "Synonym",
    meaning: "To use evasive language or skill to avoid answering directly during debate (बचाव करना, लड़ाई करना)",
    synonym: "Parry",
    antonym: "Confront"
  },
  {
    id: "vocab_parry_syn_resist",
    word: "RESIST",
    type: "Synonym",
    meaning: "To withstand, fight against, or oppose an attack or temptation (विरोध करना)",
    synonym: "Oppose",
    antonym: "Submit"
  },
  {
    id: "vocab_parry_ant_allow",
    word: "ALLOW",
    type: "Antonym",
    meaning: "To give permission for or permit something to happen without resistance (अनुमति देना)",
    synonym: "Permit",
    antonym: "Forbid"
  },
  {
    id: "vocab_parry_ant_encounter",
    word: "ENCOUNTER",
    type: "Antonym",
    meaning: "To unexpectedly meet, face, or confront a problem or person (सामना करना)",
    synonym: "Confront",
    antonym: "Avoid"
  },
  {
    id: "vocab_parry_ant_face",
    word: "FACE",
    type: "Antonym",
    meaning: "To confront, deal with, or meet a situation or difficulty directly (सामना करना)",
    synonym: "Confront",
    antonym: "Evade"
  },
  {
    id: "vocab_parry_ant_meet",
    word: "MEET",
    type: "Antonym",
    meaning: "To come into direct contact or confrontation with someone or something (मिलना, सामना करना)",
    synonym: "Confront",
    antonym: "Avoid"
  },
  {
    id: "vocab_parry_ant_take_on",
    word: "TAKE ON",
    type: "Antonym",
    meaning: "To accept a challenge or engage in a direct fight or task (सामना करना, चुनौती स्वीकार करना)",
    synonym: "Confront",
    antonym: "Evade"
  },
  {
    id: "vocab_parry_ant_deal_with",
    word: "DEAL WITH",
    type: "Antonym",
    meaning: "To handle, manage, or address a difficult situation directly (निपटना)",
    synonym: "Handle",
    antonym: "Ignore"
  },
  {
    id: "vocab_parry_ant_attract",
    word: "ATTRACT",
    type: "Antonym",
    meaning: "To draw or invite attention, engagement, or confrontation toward oneself (आकर्षित करना)",
    synonym: "Invite",
    antonym: "Repel"
  }
];