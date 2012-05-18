var theCoreTerms = [optSuffixes('(A )?(basket|package|raft|range|sense|series) of',  'Measures?'),
'Above my pay grade',
'(A|C|Z)-list',
'Across the piece',
optPrefixes('(Action|Cascade|Progress) this',  'I','Let.s','We','You'),
'Added bonus',
'A fine art',
'Affordable',
optDashes('Age-old question'),
reqdPrefixes('Agenda',  'Forward'),
'Ahead of( the curve)?',
'Ahem',
optPrefixes('All comes down to turnout',  'It'),
'A long time in politics',
'Any time soon',
'Any way, shape or form',
'Approbation',
'Arguably',
reqdPrefixes('Arrogance',  'Breathtaking'),
'Art form',
'Articulated* a',
'At a crossroads',
'At the end of the day',
'At this moment in time',
'[A-Z][A-Z][A-Z]+athon',
'Atop',
'A truth universally acknowledged',
'A very British' + someWords(0,1),
'Awry',
optDashes('Back-burner'),
'Back in the day',
'Ballpark',
'Bank of Mum and Dad',
'Battle lines?',
'Beggars Belief',
'Beleaguered',
'Beyond (parody|satire)',
'Big Ask',
'Big Beasts?',
optPrefixes('Big picture',  'The'),
'Blood on the (carpet|floor|walls)',
'Blueprint',
'Blue sky thinking',
'Bottom line',
reqdPrefixes('Bullet',  'Magic','Silver'),
'By the back door',
optPrefixes('Campaigners',  'Health'),
optDashes('Cast-iron guarantees?'),
'Catalogue of errors',
'Celebrat(es*|ing) diversity',
'Celebrity',
'Chaos',
'Circular firing squad',
'Civil society',
'Clause (Four|IV) moment',
'Clear and present danger',
'Close down discussion',
'Cognoscenti',
optSuffixes( optPrefixes('Communit(y|ies)',  'Asian','Black','BME','Diverse','Ethnic','Gay','Harmonious','International','Minority','Muslim','Positive','Real','Scientific','Security','Strong(er)?','The','The \\w+','(The )?Wider \\w+','Vulnerable',optDashes('Working-class')),  'Cohesion','Leaders?','Partner(ship)?s?','Representatives?','Tensions?'),
'Compelling',
'Confined to a wheelchair',
'Connect with the (electorate|voters?)',
'Crash and burn',
'Crowd-*sourc(e|ing)',
'Crystal clear',
reqdSuffixes('Culture of',  'Blame','Excuses'),
'Damp squib',
'Dawn of time',
'Dead hand',
'Dead in the water',
'Dead on arrival',
'Deafening silence',
'Death knell',
'Dialogue of the deaf',
optPrefixes('(Capitalism.s|His|Her|Labour(.s)?|My|Our|Their|Tor(y|ies.)|\\S+ Party(.s)?) DNA',  'In','Not in'),
'Direct descendant',
reqdPrefixes('Do self-doubt',  'Does not','Doesn.t'),
'Doff',
optDashes('Dog-whistle'),
'Downward spiral',
'Dracula in charge of a blood bank',
optDashes('Drink(s|ing)? the Kool-Aid'),
'Economics of the madhouse',
'Edgy',
'Elephant in the room',
'Empower(ment)?',
'Empty-chair',
'Enough already',
'Enviable curves',
'Epic Fail',
optPrefixes('Equality',  'Embrac(e|ing)'),
'Events, dear \\S+',
'Every dot and comma',
optSuffixes( 'Existential',  'Crisis'),
reqdPrefixes('Experience',  'Passenger'),
'Exponentially',
'False dawn',
optDashes('Fast-forward to'),
'Fatally flawed',
'Febrile',
'Feral',
'Few and far between',
optPrefixes('Fit for Purpose',  'Not'),
reqdSuffixes('Flagship',  'Hospital','News','Policy','(\\S+ )?Programmes?','(\\S+ )?Stores?'),
'Flexicurity',
'Fog of war',
reqdPrefixes('Footprint',  'Carbon','Digital','Energy','Environmental'),
'Foregone conclusion',
optDashes('Front-line'),
'Gamely',
'Gerrymander(ing)?',
reqdPrefixes('Get it',  'Does not','Doesn.t'),
'Giftable',
'Give 110(%| per cent)',
'Glaring loophole',
'Good Election to Lose',
'(Grind|Ground) to a halt',
'Grist to the mill',
'Guilty as charged',
'Guns blazing',
'Hapless',
'Hard-headed',
optDashes('Hard-working (families|people)'),
'Hearts and minds',
optDashes('Heavy-lifting'),
'Here.s the thing',
'Hodge-podge',
'Hoffice',
'Honcho',
'Hope (you are|you.re) well',
'Hostage to fortune',
'Hotbed',
'Human shield',
reqdPrefixes('Hypocrisy',  'Breathtaking','Rank','Shameless'),
'Iconic',
'If I were a betting man',
optSuffixes('Inclusive',  'Vision'),
'In conjunction with',
'Inconvenient truth',
'Incredibl(e|y)',
reqdPrefixes('Indictment',  'Damning','Devastating'),
'Inextricably link(ed)?',
'In harm.s way',
'In point of fact',
'In (order|relation) to',
'In (respect|terms) of',
'Inside the Beltway',
'Is it just me, or',
optPrefixes('Is not an option',  'Doing nothing','(The )?Status quo'),
'Is toast',
'It.s \\S+, Jim, but not as we know it',
'It.s (the )?\\S+, stupid',
'Jubilympics',
'Keynote speech',
'Kick(ing)? the can( further)? down the road',
optDashes('Last-ditch'),
'Last time I looked',
'Learning curve',
'Leav(es|ing) little to the imagination',
'Let\'s be clear',
'Level playing field',
'Life chances',
'Lifestyle',
'Line in the sand',
'Lost generation',
reqdPrefixes('Majority',  'Deserving','Silent'),
'Make no mistake',
'Makeover',
'Massive own goal',
'Mee*t with',
'Methinks',
'Militate against',
'Moment in time',
optPrefixes('Mood music', 'Political'),
'Moral compass',
optSuffixes('(The )?Most vulnerable',  'in society'),
'Name and Shame',
'Neglect \\S+ at our peril',
'New Normal',
'No-brainer',
'No longer\\.',
'Normalcy',
'Nothing ruled out',
'Nothing will ever be the same again',
'Now is not the time for',
'Now,? more than ever',
'Omnishambles',
'On a collision course',
'On a daily basis',
optPrefixes('Only poll that matters',  'The'),
'Opening salvo',
'Opined*',
'Outside of',
'Paucity',
'Perfect Storm',
optDashes('Pipe-dream'),
'Plan B',
'Play(ed|ing)? a leading (part|role)( in)?',
'Play(ing)? catch-up',
'Play into (the hands of|\\S+ hands)',
'Plethora',
'Political (football|hot potato|Journey)',
'Post ?code lotter(y|ies)',
'Pot, Kettle',
'Prior to',
'Progressive',
'Progressives*',
'Psyche',
'Psychodrama',
optSuffixes('Quantum',  'Leap'),
'Question mark over',
reqdPrefixes('Radar',  '(Below|Under)' + someWords(1,2)),
'Rais(es*|ing) awareness',
reqdPrefixes('Raison d.etre',  'Her','His'),
'Read(ing)?(| \\S*) the Riot Act',
'Real (change|choice|families|lives|people|relationships?|world)',
'Reality check',
optSuffixes('(Re)?arranging( the)? deckchairs',  'On the \\S'),
'Rebalanc(e|ing) (the|the \\S+|our) economy',
'(Re)?Connect with the voters',
'Red lines',
optSuffixes('Ride roughshod',  'Over','Poop'),
optDashes('Ring-fenced?'),
'Ring the changes',
optSuffixes('Robust',  'Evidence','Frameworks?','Measures?'),
'Rude awakening',
'Scant comfort',
'Scientifically proven',
'Scrap heap',
optDashes('(Sea|Step)-change'),
'Seal the Deal',
optSuffixes('Seismic',  'Shift'),
'Serve\\S? the purpose of',
'Serves to',
'Shocked and appalled',
'Shred of credibility',
'Signage',
'Simples',
'Sing(ing|s)? from the same (hymn|song) sheet',
'Siren voices*',
'Sleaze',
'Sleepwalk(ing)?.? into',
optPrefixes('Smell the Coffee',  'Wake up and'),
'Social mobility',
'Something of a',
'Soubriquet',
'Speak(ing)? truth (un)?to power',
'Spiral of decline',
optDashes('Squeaky-bum-time'),
'Spiral out of control',
'Stand shoulder to shoulder with',
'Stark contrast',
reqdSuffixes('Stinging',  'Attack','Criticism'),
'Substantive',
'Take up the cudgels for',
'Talismanic',
'Tangled web',
'Tectonic plates',
'The clue is in the (name|title)',
'The hallmarks of',
'The most important' + someWords(1,2) + ' you.ve never heard of',
'The Mother of all',
'The prospect of',
'The reason why',
'The reason is because',
'The(| simple) fact(| of the matter) is',
'The simple reason being',
'The truth( of the matter)? is',
'The \\S+ Delusion',
'Tick(ing|s)? all the( right)? boxes',
optDashes('(Ticking-)?' + 'Time-Bomb'),
optDashes('Tipping-point'),
'Tome',
'Toe(ing)? (the|\\S+) line',
'Too little, too late',
optDashes('Top-down'),
'Top priority',
'Touch base',
'Toxic',
'Tropes?',
'Turkeys voting for Christmas',
reqdPrefixes('Underbelly( of the city)?',  'Dark','Seedy','Sinister'),
'Underclass',
'Uni',
reqdPrefixes('Unique',  'Fairly','Particularly'),
'Unlock(ing)? potential',
'Up and down the country',
'Upcoming',
'Uptick',
'Utilis(e|ed|ing)',
'Vibrant',
'Virtuous circle',
'Vulnerable moment',
'Waitlist(ed|ing)',
'Wake-up call',
'War of words',
'Way (beyond|more)',
'We are all \\S+ now',
'We are where we are',
optDashes('Well-oiled machine'),
reqdSuffixes('Westminster',  'Bubble','Village'),
'We will take no lessons',
optPrefixes('What drives (him|her)',  'Not'),
optPrefixes('What gets (him|her) up in the morning',  'Not'),
optDashes('Wheelchair-bound'),
'Wield the dagger',
'Wiggle room',
'Win-win',
'Without fear or favour',
'Wow factor',
'Wreak havoc',
'You couldn.t make it up\\.?'];


var theCaseSensitiveCoreTerms = ['ConDems?( Government)?',
'Team [A-Z]\\S+'];


var theCaseSensitiveNotJustWordsTerms = ['\\b' + 'As a [A-Z]\\S+' + someWords(0,2) + ',( I.m)?',
'It is what it is\\.',
'It was not meant to be like this\\.',
'SoLoMo',
'Step forward, [A-Z]\\S+',
'That is all\\.',
'\\b' + 'Well-worn clich(e|\\xE9)',
'\\b' + 'Who knew\\?'];


var theSpecialIgnoreTerms = ['(Points|Pulls?|Way) Ahead of',
reqdSuffixes('Community',  'Hospital','Order','School'),
'Equality Act',
'Hackathon',
'Jonathon',
'Marathon',
'Team Blog',
reqdSuffixes('Toxic', 'Chemicals?','Gas(es)?','Nuclear','\\S+ Radioactive','Substances?'),
'Was met with'
];


var theManagementSpeakTerms = [ optPrefixes('Action points?',  'Key','Numerous'),
optSuffixes('Adjective-rich',  'Answers'),
'Articulate (this|that) message',
optDashes('Best-of-(brand|breed)'),
'Build on these (strengths)',
'Coordinative leadership',
reqdSuffixes('Creat(e|ing) a',  'Place that','Space where'),
'Deliverables?',
reqdPrefixes('Direction', 'Strategic'),
reqdSuffixes('Downstream',  'Costs?'),
'Extract adjectives',
'Five point plan',
reqdSuffixes('Forward',  'Offer','Planning','Policy'),
optPrefixes('Frameworks?', 'Critical','Narrow','Policy','Strategic'),
optDashes('Game-chang(er|ing)'),
optPrefixes('Global leadership',  'Aspire to'),
'Going forward',
'Granular(ity)?',
optDashes('Ground-breaking'),
'Hardwired?',
'Helicopter view',
'Holistic',
optPrefixes('Horizon Shift',  'Engineer a'),
'Implement \\S+ commitments?',
'Information age',
'Inject some clarity',
'Intensify outreach',
'Key technolog(y|ies)',
optSuffixes('Lead(ing)? cheerleader',  'Behind'),
'Likeonomics?',
optDashes('Low-hanging fruit'),
'Metaphor questions?',
'Ongoing',
'Organically',
'Out of the box',
optDashes('Outside-the-box'),
optPrefixes( optSuffixes('Paradigm(atic|s)?',  'Shift'),  'Dominant'),
reqdPrefixes('Parameters?',  'Certain','Her','His','Important','Key','Main','The'),
'Plurality concerns?',
'Pluss?ification',
optPrefixes('Produc(e|ing) the goods',  'To'),
'Reactive incrementalism',
'Reinvent(ing)? the wheel',
'Resonates?( with)?',
'Root and branch',
'Shap(e|ing) the future',
'Sharp-edged statements?',
'Shift the graph',
optSuffixes('Stakeholders?',  'Liaison'),
optDashes('State-of-the-art'),
optSuffixes('Step(ping)? up',  'To the plate'),
'Strategic imperatives?',
'Sunsetting',
'Surface them',
'Systemic( failure|ally)?',
reqdSuffixes('Takeaway',  'Points?'),
'Take effect',
'Tak(e|ing) on board',
'Taking(\\S+)? forward',
optDashes('Thought-leader'),
'Tradigital',
'Transition into',
'Undertaking in lieu',
'Unlock \\S+ dynamism',
'Vanilla Strategy',
reqdPrefixes('Vision',  'Cogent','coherent','coherent and compelling','compelling',optDashes('Long-term'),'(More )?Rounded'),
'Web 2.0',
'Webinar',
'Wrongsided?' + someWords(0,1) + ' demographic',
];


var theSociologyTerms = ['Fact Pattern',
'Intersectionality',
'Overarching',
'Positionality',
'Transformative',
];


var theExtraWeaselTerms = ['Could be argued',
optSuffixes('Evidence (does show|shows)',  'That'),
'For (many|several) reasons',
reqdPrefixes('Good reasons',  'Many','Several'),
'In (many|numerous|several) ways',
'Key argument',
'Negative consequences?',
'Negative impact on \\S+',
'Negatively affect(ed)?',
'Not inconsequential',
optPrefixes('One thing is certain',  'Only'),
'Research has shown',
reqdSuffixes('Seems only',  'Fair','Right','Sensible'),
'Some circumstances',
'Some have argued',
'Studies have (found|shown)',
optSuffixes('What is clear is',  'That')
];


var theExtraTerms = ['Abundantly clear',
'A Capitalism that',
'Accelerating' + someWords(1,3) + ' change',
'Against (a|this) backdrop',
reqdPrefixes('Agenda',  'Fairness','Strong'),
'Alarm bells( are)? ringing',
'An Economics that',
'Annus horribilis',
'Arc of history',
'Arch-(Blairite|Thatcherite)',
'Are we all' + someWords(1,2) + ' now\?',
'Backsliding',
'Backward-looking',
'Balkanis(e|ed|ation)',
optPrefixes('Baseline',  'Firm'),
'Blanket idea',
'Blink(ed)* in the face',
'Blood money',
'Body (blow|politic)',
'Bow down to',
'Brighton Rocks',
'Broad sweep of history',
'Broken Britain',
optPrefixes('Business as usual',  'Go back to','Return to'),
'Byzantine complexity',
'Campaign groups?',
reqdPrefixes('Capitalis(m|ts?)', optDashes('Gung-ho'),'Predatory','Vulture'),
'Catastroph(e|ic)',
'Challenges? for both (Left|Right) and (Right|Left)',
'Chang(e|ing) the conversation',
'Chorus of criticism',
'Chutzpah',
reqdPrefixes('Clarity',  'Gain','Get'),
optSuffixes( optDashes('Cloud-cuckoo'),  'Land'),
'Clear (blue|red) water',
/* 'Clearly', */
'Closer? to the ground',
'Clunking fist',
'Clutch(ing)? at straws',
'Coherent (alternative|strategy)',
reqdPrefixes('Concerns',  'A few','Has','Have'),
'Concrete solutions?',
'Condemned to repeat \\S+',
'Congratulations, \\S+.',
'Constant vigilance',
reqdPrefixes('Contradictions?',  'Internal','Its own'),
reqdPrefixes('Conversation',  'Contemporary','Economic','Grown-up','National','Nuanced','Political'),
'Conversation with the public',
'Corporate media',
optPrefixes('Creative industries',  'The'),
'Credibility gap',
'Creeping (deregulation|privati[s|z]ation)',
reqdPrefixes('Critical mass',  'Attained'),
'Cross(ed|ing)? (a|the) Rubicon',
optDashes('Crunch-time'),
'Cuckoo in the \\S+ nest',
'Cynica(l|lly)',
'Day of reckoning',
'Dead man walking',
'Deal or No Deal',
optDashes('Death-spiral'),
optPrefixes('Decency',  'Common'),
'Decent',
optPrefixes('Decent people',  'All'),
'Decimat(e|ing)',
'Defend(ing)* the indefensible',
'Defining moment',
'Delusional',
'Deserve nothing less',
'Detoxify',
'Different kind of emphasis',
reqdPrefixes('Discourse',  'Prevailing'),
'Disgrace(ful)*',
'Disgusting',
'Distort(ed|ing)',
'Dodgy',
optPrefixes('Dogma',  'Economic','Left-?wing','Monetarist','Neo-?liberal','Right-?wing','Socialist'),
'Do the right thing',
'Draconian',
optDashes('Economic dead-end'),
'Economic(ally)* illitera(te|cy)',
'Economic(ally)* incoheren(t|ce)',
'Economic madhouse',
reqdPrefixes('Engagement',  'Effective','Higher'),
optDashes('Ever-astute'),
optDashes('Ever-polarising'),
reqdPrefixes('Excess',  'Runaway'),
'Excessive',
'Excellence',
'Expeditious(ly)?',
'Factoids?',
'Failed (policy|policies) of the past',
'Fair(er)* economy',
'Fairness',
'Fear to tread',
reqdSuffixes('Fertile',  'Ground','Territory'),
'Fight(ing)? the (fair|good) fight',
'Fight(ing)?,? tooth and nail',
'Fill(ing)? the black hole',
'Foot-dragging',
'For the few',
'From another time',
reqdSuffixes('Fundamental',  'Change','Debate','Issue'),
reqdPrefixes('Fundamentalism',  'Market'),
optSuffixes('Gendered',  'Dynamics','Lens'),
reqdSuffixes('Genuine',  'Attempt','Credibility'),
'Get(ting)? into bed with',
optPrefixes('Get serious',  'Need to'),
'Global world',
optDashes('Gold-plated'),
'Golden goose',
'Good ship \\S+',
optPrefixes('Good society',  'The'),
'Good values',
'Grassroots movement',
'Growing (calls|consensus)',
'Growth industries',
optDashes('Half-baked'),
'Hard-(left|right)',
optDashes('Hard-pressed families'),
reqdSuffixes('(Hard|Hard-|Hard )working',  'Britons','Majority','Many','Taxpayers?'),
'(Has|Have) to go further',
reqdPrefixes('(Has|Have) (Her|His|Their) views',  'He','She','They'),
'Have the values',
'\'Healthier\'',
'Hearts? ripped out',
'Hegemonic',
'Height of irresponsibility',
'Here we go again',
'Hold(ing)? the \\S+ to ransom',
'Homosexualists?',
'Hove,? Actually',
'Human-scale',
'Hurtling towards',
'Hysterical',
'I make you this promise',
optSuffixes('Ideological',  'Divisions?','Gamble','Purpose','Reasons'),
optDashes('Ideologically-driven'),
optPrefixes('Ideologues?',  'Economic','Free-market'),
reqdPrefixes('Ideology',  'Misguided'),
'If that makes me a' + someWords(1,2) + '. then',
'Ill-(conceived|considered|founded|informed)',
'Immoral',
'Imperialis[m|t]',
'\\S+ In a hole, stop digging',
'In hock to',
'In politics, as in \\S+',
'In the name of ideology',
'In the \\S+ worldview',
'Increasingly noted',
'Inexorable',
'\\S+ in sheep\'s clothing',
reqdPrefixes('Insiders?',  'Downing Street'),
'Insidious',
'Insignificant',
'Integrated transport policy',
'Interests of the majority',
optPrefixes('(National|Public) Interest',  'The'),
optPrefixes('Internet is changing the way',  'The'),
'Irrationa(l|lly)',
optPrefixes('Issues? of conscience',  'Critical'),
'Issues that matter',
optSuffixes('Job of work',  'To do'),
'Jump(ed)* the shark',
optPrefixes('Jury is still out',  'The'),
reqdPrefixes('Justice',  'Gender','Social'),
'Kick in the teeth',
'Knee-jerk',
'Kulturkampf',
'Laid the foundations',
'Lamented',
reqdPrefixes('Landscape', 'Changed','Different','Economic','Political','Social'),
'Last chance saloon',
'Laughable',
'Law of the jungle',
'Leading (\\S+ )?(blogger|campaigner|MP|reason|thinker|voice)s?',
'Leaps and bounds',
reqdSuffixes('Let.s be',  'Honest','Realistic'),
'Level killing-field',
'Licking their lips',
'Lifeblood',
'Listen very hard and you will hear',
'Litmus test',
'Little local difficulty',
'Loom large',
'Ludicrous',
'Lurch to the \\S+',
'Made his mark',
'Makes no mention',
'Map \\S+ agenda',
'Marathon not a sprint',
'May or may not',
'Meanest intellect',
'Meaning(ful|less)',
'Mechanisms',
'Mentality shift',
'Message discipline',
'Messianic',
'Me-too approach',
'Metastorm',
'\'Minefield\'',
reqdPrefixes('Moment',  'Iraq War','poll tax'),
'Mounting opposition',
reqdSuffixes('Moral',  'Bankruptcy','Integrity'),
reqdSuffixes('Morally',  'Bankrupt','Important'),
'Mutual back-slapping',
'National mission',
'Nature of society',
'Neocons?',
'Netizen',
'New political settlement',
'New type of( \\S+)* (democracy|economics|economy|society)',
'Noises off',
'No-nonsense',
'Nonsensical',
'No past to',
reqdPrefixes('Nostrums?',  'Fundamentalist'),
'Nothing short of',
'Objective analysis',
'(\\S+s|People) of all (colou?rs|hues)',
reqdPrefixes('Of colou?r',  'Man','Men','People','Woman','Women'),
reqdPrefixes('Old days',  'Bad','Good'),
'Oldest trick in the (\\S+ )?book',
'On a knife edge',
reqdPrefixes('On the beat',  'Bobbies','Police.*'),
'Only fair that',
'Operationali(s|z)(e|ation)',
'Ordinary (families|people)',
'Organi(s|z)ational citizenship',
optPrefixes('Orthodox(y|ies)',  'Economic','Failed','Free-market','Keynesian','Market','Old','Past','Right-?wing','Stale','Tired','Wrong'),
'Our culture',
'Our \\S+ crosshairs',
optPrefixes('Out of touch', 'Increasingly','So'),
'Owns this turf',
'Pander(ing)? to',
'Panjandrums*',
'Parasites*',
optPrefixes('Parroting',  'Endless'),
'Pay packet',
'People before profits?',
'People of colou?r',
reqdPrefixes('Picture', 'Bigger'),
'Pithy',
optPrefixes('Pivotal role', 'Play(s|ed)? a'),
optPrefixes('Plague on',  'A'),
optDashes('Political dead-end'),
'Political (calculus|dynamics*|furniture|lexicon|space)',
'Political(ly)? incoheren(t|ce)',
reqdPrefixes('Poll Tax',  '(The|This) Government.s','His','(Tony )?Blair.s','(David )?Cameron.s'),
'Prescient',
'Prism',
'Privately delighted',
'\'Promising\'',
'Prostrated',
'Put manufacturing at its heart',
'Puts? the public interest before',
'Put(ting)? \\S+ at the (very )?heart of',
'Quisling',
'Race is wide open',
'Raced? to the bottom',
'Raise.? the spectre',
'Reach(ing)? boiling point',
'Reach out to',
'Reactionary',
optPrefixes('Reactionaries',  'Cadre of'),
'Real (alternative|argument|generosity)',
'Reared its(| ugly) head',
reqdPrefixes('Reception',  'Lukewarm'),
'Reciprocity',
'Reckless',
'Redefine' + someWords(1,2) + ' politics',
'Reflect (our|their) values',
'Regurgitat(e|ing)',
'Reframe',
'Regressive',
'Remains to be seen',
'Responsible measures*',
'Responsible middle',
"Rising echo",
'Rolling programme',
'Rootedness',
'Rubs? salt into the wound',
'Sacrificed? (on|upon) the altar',
optSuffixes('Sacrificial lambs?',  'To the slaughter'),
'Same old failed \\S+',
'Say it again',
'Scandalous',
optPrefixes('Scarcely be able to believe',  'Must'),
'Seared in(to)? my memory',
'Seiz(e|ing) the initiative',
'Self-(evident|hatred|indulgent|satisfied|serving)(ly)*',
'Senior( (Labour|Tory))? figures?',
'Sensible proposal',
'Set to continue',
'Shameless(ly)*',
'Shape a new deal',
optPrefixes('Shibboleths?',  'Economic','Free-market','Market','Old'),
'Ship of state',
'Shock and awe',
'Shrill calls',
'Shutting the stable door after the horse has bolted',
/* 'Significant', */
optPrefixes('Silence( (of|on)' + someWords(1,3) + ')? speaks volumes',  'Her','His','The','Their'),
'Slap in the face',
'Slash-and-burn',
'Slash(ed)*',
'Slippery slope',
'Slow motion \\S+ crash',
reqdSuffixes('Social',  'Acceptability','Change','Legitimacy'),
'Socially acceptable',
optDashes('Something-for-nothing'),
optDashes('Something-for-something'),
reqdPrefixes('Sources?',  'Downing Street'),
'Sparked outrage',
'Squar(e|ing) the circle',
'Squeezed? families',
'Squeezed middle',
'Standstill commitments?',
reqdPrefixes('Story',  'Resonant'),
'Straitened times*',
optSuffixes('Strike at the heart',  'Of'),
'\'Strong case\'',
'Substantial',
'Sucking demand out',
'(Un)?Sustainab(le|ility)',
'Sustainable growth',
'Sycophantic',
'Synapses? of struggle',
'Tantamount',
optPrefixes('Tenets?',  'Central','Core','Key'),
'The reality is',
optPrefixes('The heart bleeds',  'How'),
'The (left|right) needs (a|to)',
'The old model of',
'The old view',
optPrefixes('The reset button',  'Hit(ting)?'),
'The time for \\S+ is over',
optDashes('Thinly-veiled'),
reqdPrefixes('This forward',  'Move','Take'),
'(This|thus) far and no further',
'Those( not)? of faith',
optPrefixes('Thoughtful',  'Ever-','Usually'),
'\\S+,? thy name is',
'To fit changing times',
optPrefixes('Traction',  'Gain'),
optPrefixes('Trajectory',  'Current'),
'Transform(ed|ing)? (Britain|Capitalism)',
'Trenderati',
'Tsunami of \\S+',
'Tumbleweed',
'Turn[^\\.,]*away[^\\.,]*in[^\\.,]*disgust',
'Uncharted waters',
'Uncritical',
'Undeniabl(e|y)',
optDashes('Under-funded'),
'Unfairness',
'Unforgettable',
'Unintelligent',
'UK plc',
'Unsurprisingly',
'Unthinking',
reqdPrefixes('Uplift',  'Full'),
'Upkick',
'Upskill(ing)*',
optPrefixes('Vacuous',  'Ideologically','Intellectually'),
'Values? shift',
'Very distinctive',
'Vested interests?',
'Vital',
optSuffixes('Vocalise',  '\\S+ feelings'),
'Vulnerable groups*',
'Vultures*',
'Waiting nervously',
'Wanton',
'Warmist',
reqdPrefixes('Ways? of thinking',  'New','Old'),
'Weather the' + someWords(0,3) + ' storm',
'We live in interesting times',
optPrefixes('Well-?being',  'General'),
'Where.s the beef?',
optPrefixes('Where we.re at( politically)?',  '(An )?Expression of'),
'Whiff of grapeshot',
'Whip(ping)? up a storm',
'Whither \\S+\?',
'Wholesale destruction',
'Who will rid me of this turbulent \\S+\\??',
'Will?ful ignorance',
'Wiped off the value',
'Wip(e|ing) the slate clean',
optPrefixes('With a human face',  'Capitalism','Politics'),
'With( greater| our)? freedom( also| should)? comes?( greater)? responsibilit(y|ies)',
'Works for the many',
reqdPrefixes('Would Argue',  'Many','Some'),
'Wrong-headed(ness)?',
'Year zero',
'Zombie arguments?'];

var theCaseSensitiveExtraTerms = ['[A-Z]\\S+' + 'ite spin'];


var theExtraHealthTerms = [
optPrefixes('(Aid|Block|Cure|Cut|Fight|Slow|Stop)s?( \\S+)? Cancer( Risk)?',  'Could','May'),
'At risk from',
reqdPrefixes('Linked to',  'Has been','Is'),
'Linked to( \\S+)? cancer'];


////////////////////////////////////////////////////////////////////////////////

var coreTerms = [
    new BannedListTermSet({terms: theSpecialIgnoreTerms, className:'highlightIgnore', title:''}),
    new BannedListTermSet({terms: theCaseSensitiveCoreTerms, className:'highlightCore', title:'#BannedList entry', caseInsensitive:false}),
    new BannedListTermSet({terms: theCaseSensitiveNotJustWordsTerms, caseInsensitive:false, ignoreWordBoundaries:true, className:'highlightCore', title:'#BannedList entry'}),
    new BannedListTermSet({terms: theManagementSpeakTerms, className:'highlightMgmt', title:'#BannedList Management Speak'}),
    new BannedListTermSet({terms: theCoreTerms, className:'highlightCore', title:'#BannedList entry'})
];

var extraTerms = [
    new BannedListTermSet({terms: theExtraTerms, className:'highlightExtra', title:'#BannedList Extras: dodgy political language'}),
    new BannedListTermSet({terms: theExtraWeaselTerms, className:'highlightExtra', title:'#BannedList Extras: weasel terms'}),
    new BannedListTermSet({terms: theSociologyTerms, className:'highlightExtra', title:'#BannedList Extras: dodgy sociological terms'}),
    new BannedListTermSet({terms: theExtraHealthTerms, className:'highlightExtra', title:'#BannedList Extras: dodgy Health language'}),
    new BannedListTermSet({terms: theCaseSensitiveExtraTerms, className:'highlightExtra', title:'#BannedList Extras: dodgy political language', caseInsensitive:false})
];

////////////////////////////////////////////////////////////////////////////////

$(function() {
    chrome.extension.sendRequest({ method: "getOptions"}, function(inResp) {
        processPage( inResp.options );
    });
});

chrome.extension.onRequest.addListener(
    function( inReq, inSender, inSendResponse) {
        if ( inReq.method == "getOptions") {
            $('body').removeHighlights();
            refreshBannedStuff( inReq.options, null, null);
        } else if ( inReq.method == "showSubmitOptions") {
            showSubmissionDialog( inReq, inSendResponse);
        }
    }
);

function processPage( inOptions ) {
    if (getIgnoreStatsPageFilterRegex().test( document.URL )) {
        chrome.extension.sendRequest({ method: "resetBadge"} );
        refreshBannedStuff( inOptions, document.URL, null);
    } else {
        var theStats = {};
        theStats['$meta'] = {url: trimUrlForStats( document.URL ), title: getPageTitle(), uniqueTerms: 0, totalMatches: 0};
        refreshBannedStuff( inOptions, document.URL, theStats);

        var unqs = theStats['$meta'].uniqueTerms;
        var score = ( unqs == 0) ? 0 : Math.round( Math.pow( unqs, 1.4) * Math.pow( theStats['$meta'].totalMatches / unqs, 0.7) );
        chrome.extension.sendRequest({ method: "setBadge", score: score, url: document.URL});

        submitAnonymousStats( theStats, score);
    }

    callChurnalism( document.URL );
}

function refreshBannedStuff( inOptions, inDocUrl, ioStats) {
    if ( inOptions["extras.special.goodOrBad"] == 'true') {
        $('body').replaceHighlight( '\\b(Blair|Brown|New Labour)ites\\b', 'some Labour people', 'highlightReplaced', '#BannedList Replacement');
        $('body').replaceHighlight( '\\b(Blairite|Brownite)\\b', 'Labour', 'highlightReplaced', '#BannedList Replacement');
        $('body').replaceHighlight( '\\b((left|right)-wing of the)\\b', '!', 'highlightReplaced', '#BannedList Replacement');
        $('body').replaceHighlight( '\\b(Apprenticeships?|Hospitals?)\\b', 'Good Things', 'highlightReplaced', '#BannedList Replacement');
        $('body').replaceHighlight( '\\b(British (employers|industry)|Elderly|Entrepreneurs|Families|Most vulnerable|Squeezed middle|Police(men| Officers?)?|Workers|Young people)\\b', 'Good People', 'highlightReplaced', '#BannedList Replacement');
        $('body').replaceHighlight( '\\b(Long-term?)\\b', 'Good', 'highlightReplaced', '#BannedList Replacement');
        $('body').replaceHighlight( '\\b(Equality)\\b', 'Goodness', 'highlightReplaced', '#BannedList Replacement');
        $('body').replaceHighlight( '\\b(Big companies|Vested interests?)\\b', 'Bad Things', 'highlightReplaced', '#BannedList Replacement');
        $('body').replaceHighlight( '\\b(Deficit)\\b', 'Bad Thing', 'highlightReplaced', '#BannedList Replacement');
        $('body').replaceHighlight( '\\b(Inequality?|Injustice|Unfair)\\b', 'Badness', 'highlightReplaced', '#BannedList Replacement');
    }

    for ( var i = 0; i < coreTerms.length; i++) {
        $('body').highlight( ioStats, inDocUrl, coreTerms[i]);
    }

    if ( inOptions["extras.politics.andrew1"] == 'true') {
        for ( var i = 0; i < extraTerms.length; i++) {
            $('body').highlight( ioStats, inDocUrl, extraTerms[i]);
        }
    }
}