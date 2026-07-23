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
  }
];