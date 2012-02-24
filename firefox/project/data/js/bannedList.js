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
'Campaigners',
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
optSuffixes( optPrefixes('Communit(y|ies)',  'Asian','Black','BME','Gay','Muslim','Scientific','Security','The','The \\w+'),  'Leaders?','Representatives?'),
'Compelling',
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
'Deliverables*',
reqdPrefixes('Do self-doubt',  'Does not','Doesn.t'),
'Doff',
optDashes('Dog-whistle'),
'Downward spiral',
'Dracula in charge of a blood bank',
'Economics of the madhouse',
'Economy, stupid',
'Elephant in the room',
'Empower(ment)*',
'Empty-chair',
'Enough already',
'Epic Fail',
'Equality',
'Events, dear boy',
optSuffixes( 'Existential',  'Crisis'),
'Exponentially',
'Fairly unique',
'False dawn',
optDashes('Fast-forward to'),
'Fatally flawed',
'Febrile',
'Feral',
optPrefixes('Fit for Purpose',  'Not'),
reqdSuffixes('Flagship',  'Hospital','News','Policy','(\\w+ )?Programmes?','(\\w+ )?Stores?'),
'Flexicurity',
'Fog of war',
'Foregone conclusion',
'Forward policy',
optDashes('Front-line'),
optDashes('Game-chang(er|ing)'),
'Gamely',
'Gerrymander(ing)?',
reqdPrefixes('Get it',  'Does not','Doesn.t'),
'Give 110(%| per cent)',
'Glaring loophole',
'Going forward',
'Good Election to Lose',
'Granular(ity)?',
'(Grind|Ground) to a halt',
'Grist to the mill',
optDashes('Ground-breaking'),
'Guilty as charged',
'Guns blazing',
'Hapless',
'Hard-headed',
'Hardwired?',
optDashes('Hard-working families'),
'Hearts and minds',
optDashes('Heavy-lifting'),
'Hodge-podge',
'Holistic',
'Honcho',
'Hope (you are|you.re) well',
'Hostage to fortune',
'Hotbed',
'Human shield',
reqdPrefixes('Hypocrisy',  'Breathtaking','Rank','Shameless'),
'Iconic',
'If I were a betting man',
'Inclusive',
'In conjunction with',
'Inconvenient truth',
'Incredibl(e|y)',
reqdPrefixes('Indictment',  'Damning','Devastating'),
'Inextricably link(ed)?',
optPrefixes('In (his|her|my|our|their) DNA',  'Not'),
'In point of fact',
'In (order|relation) to',
'In (respect|terms) of',
'Is it just me, or',
optPrefixes('Is not an option',  'Doing nothing','(The )?Status quo'),
'Is toast',
'It.s \\w+, Jim, but not as we know it',
'Keynote speech',
'Kick(ing)? the can( further)? down the road',
optDashes('Last-ditch'),
'Last time I looked',
'Learning curve',
'Let\'s be clear',
'Level playing field',
'Life chances',
'Lifestyle',
'Line in the sand',
'Lost generation',
optDashes('Low-hanging fruit'),
reqdPrefixes('Majority',  'Deserving','Silent'),
'Make no mistake',
'Makeover',
'Massive own goal',
'Mee*t with',
'Militate against',
'Moment in time',
optPrefixes('Mood music', 'Political'),
'Moral compass',
optSuffixes('(The )?Most vulnerable',  'in society'),
'Name and Shame',
'Neglect \\w+ at our peril',
'No-brainer',
'No longer\\.',
'Normalcy',
'Nothing ruled out',
'Now is not the time for',
'Now,? more than ever',
'On a collision course',
'On a daily basis',
'Ongoing',
optPrefixes('Only poll that matters',  'The'),
'Opening salvo',
'Opined*',
'Organically',
'Out of the box',
'Outside of',
optSuffixes('Paradigm(atic|s)?',  'Shift'),
reqdPrefixes('Parameters?',  'Certain','Her','His','Important','Key','Main','The'),
'Paucity',
'Perfect Storm',
optDashes('Pipe-dream'),
'Plan B',
'Play(ed|ing)? a leading (part|role)( in)?',
'Play(ing)? catch-up',
'Play into (the hands of|\\w+ hands)',
'Plethora',
'Political (football|hot potato|Journey)',
'Postcode lottery',
'Pot, Kettle',
'Prior to',
'Progressive',
'Progressives*',
'Psyche',
'Psychodrama',
optSuffixes('Quantum',  'Leap'),
'Question mark over',
'Rais(es*|ing) awareness',
reqdPrefixes('Raison d.etre',  'Her','His'),
'Read(ing)?(| \\w*) the Riot Act',
'Real (change|communities|families|lives|people|world)',
'Reality check',
'(Re)?Connect with the voters',
'Red lines',
'Reinvent(ing)? the wheel',
'Resonates?( with)?',
optSuffixes('Ride roughshod',  'Over','Poop'),
optDashes('Ring-fenced?'),
'Ring the changes',
optSuffixes('Robust',  'Frameworks?','Measures?'),
'Root and branch',
'Rude awakening',
'Scant comfort',
'Scrap heap',
optDashes('(Sea|Step)-change'),
'Seal the Deal',
'Seismic shift',
'Serve\\w? the purpose of',
'Serves to',
'Shred of credibility',
'Signage',
'Simples',
'Sing(ing|s)? from the same (hymn|song) sheet',
'Siren voices*',
'Sleaze',
'Sleepwalk(ing)? into',
'Smell the Coffee',
'Social mobility',
'Something of a',
'Soubriquet',
'Speak(ing)? truth (un)?to power',
'Spiral of decline',
'Spiral out of control',
'Stakeholders*',
'Stand shoulder to shoulder with',
'Stark contrast',
optDashes('State-of-the-art'),
'Step forward, \\w+',
reqdSuffixes('Stinging',  'Attack','Criticism'),
'Substantive',
'Systemic( failure|ally)?',
'Takeaway point',
'Take effect',
'Take up the cudgels for',
'Tak(e|ing) on board',
'Taking(\\w+)? forward',
'Talismanic',
'Tangled web',
'Tectonic plates',
'The hallmarks of',
'The Mother of all',
'The prospect of',
'The(| simple) fact(| of the matter) is',
'The truth is',
'The \\w+ Delusion',
optDashes('Thought-leader'),
optPrefixes('Time Bomb',  'Ticking'),
optDashes('Tipping-point'),
'Tome',
'Too little, too late',
optDashes('Top-down'),
'Top priority',
'Touch base',
'Toxic',
'Turkeys voting for Christmas',
'Underclass',
'Uni',
'Up and down the country',
'Upcoming',
'Utilis(e|ed|ing)',
'Vibrant',
'Virtuous circle',
'Vulnerable moment',
'Wake-up call',
'War of words',
'Way (beyond|more)',
'We are all \\w+ now',
'We are where we are',
'Web 2.0',
'Webinar',
optDashes('Well-oiled machine'),
reqdSuffixes('Westminster',  'Bubble','Village'),
'We will take no lessons',
optPrefixes('What drives (him|her)',  'Not'),
optPrefixes('What gets (him|her) up in the morning',  'Not'),
'Wield the dagger',
'Wiggle room',
'Win-win',
'Without fear or favour',
'Wow factor',
'Wreak havoc',
'You couldn.t make it up\\.?'];


var theCaseInsensitiveCoreTerms = ['ConDems?( Government)?',
'Team [A-Z]\\w+'];

var theNotJustWordsTerms = ['That is all\\.',
'\\b' + 'Well-worn clich(e|\\xE9)',
'\\b' + 'Who knew\\?'];

var theSpecialIgnoreTerms = ['(Points|Pulls?|Way) Ahead of',
reqdPrefixes('Clearly',  'As'),
'Hackathon',
'Marathon',
'Team Blog',
reqdSuffixes('Toxic', 'Chemicals?','Gas(es)?','Nuclear','Substances?') ];


var theExtraTerms = ['Abundantly clear',
'Accelerating' + someWords(1,3) + ' change',
'Against this backdrop',
reqdPrefixes('Agenda',  'Fairness','Strong'),
'Alarm bells( are)? ringing',
'Arc of history',
'Arch-(Blairite|Thatcherite)',
'Backsliding',
optPrefixes('Baseline',  'Firm'),
'Blink(ed)* in the face',
'Blood money',
'Body (blow|politic)',
'Bow down to',
'Broad sweep of history',
'Broken Britain',
optPrefixes('Business as usual',  'Go back to','Return to'),
'Byzantine complexity',
'Catastroph(e|ic)',
'Chang(e|ing) the conversation',
'Channelling',
'Chorus of criticism',
'Chutzpah',
reqdPrefixes('Clarity',  'Gain','Get'),
'Clear (blue|red) water',
'Clearly',
'Closer? to the ground',
'Cogent vision',
'Coherent (alternative|strategy)',
'Condemned to repeat \\w+',
'Congratulations, \\w+.',
reqdPrefixes('Conversation',  'Contemporary','Economic','National','Nuanced','Political'),
'Conversation with the public',
'Corporate media',
'Crazy',
'Credibility gap',
'Creeping privati[s|z]ation',
'Cross(ed|ing)? (a|the) Rubicon',
optDashes('Crunch-time'),
'Cuckoo in the \\w+ nest',
'Cynica(l|lly)',
'Day of reckoning',
'Deal or No Deal',
optDashes('Death-spiral'),
optPrefixes('Decency',  'Common'),
'Decent',
'Decimat(e|ing)',
'Defend(ing)* the indefensible',
'Defining moment',
'Delusional',
'Different kind of emphasis',
'Disgrace(ful)*',
'Disgusting',
'Distort(ed|ing)',
'Dodgy',
'Do the right thing',
'Draconian',
optDashes('Economic dead-end'),
'Economic(ally)* illitera(te|cy)',
'Economic(ally)* incoheren(t|ce)',
reqdPrefixes('Engagement',  'Effective'),
optDashes('Ever-astute'),
reqdPrefixes('Excess',  'Runaway'),
'Excessive',
'Excellence',
'Expeditious(ly)?',
'Factoids?',
'Fair(er)* economy',
'Fairness',
'Fear to tread',
reqdSuffixes('Fertile',  'Ground','Territory'),
'Fight(ing)? the (fair|good) fight',
'Fight(ing)?,? tooth and nail',
'Fill(ing)? the black hole',
'Foot-dragging',
'For the few',
optPrefixes('Framework', 'Critical','Policy'),
'From another time',
reqdSuffixes('Fundamental',  'Change','Debate'),
reqdPrefixes('Fundamentalism',  'Market'),
reqdSuffixes('Genuine',  'Attempt','Credibility'),
optPrefixes('Get serious',  'Need to'),
optDashes('Gold-plated'),
'Golden goose',
'Good ship \\w+',
optPrefixes('Good society',  'The'),
'Grassroots movement',
'Growing (calls|consensus)',
optDashes('Half-baked'),
'Hard-(left|right)',
reqdSuffixes('(Hard|Hard-|Hard )working',  'Britons','Majority','Many','Taxpayers?'),
'(Has|Have) to go further',
'Have the values',
'\'Healthier\'',
'Hearts? ripped out',
'Hegemonic',
'Height of irresponsibility',
'Here we go again',
'Hurtling towards',
'Hysterical',
'Ideological',
'Ideologues*',
'ill-(conceived|considered|informed)',
'Immoral',
'Imperialis[m|t]',
'Implement \\w+ commitments?',
'\\w+ In a hole, stop digging',
'In hock to',
'Inevitable',
'Inexorable',
'Inject some clarity',
'\\w+ in sheep\'s clothing',
reqdPrefixes('Insiders?',  'Downing Street'),
'Insidious',
'Insignificant',
'Interests of the majority',
optPrefixes('(National|Public) Interest',  'The'),
'Internal contradictions?',
'In the \\w+ worldview',
'Irrationa(l|lly)',
'Jump(ed)* the shark',
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
'Leading (\\w+ )?(blogger|campaigner|MP|reason|voice)s?',
'Leaps and bounds',
reqdSuffixes('Let.s be',  'Honest','Realistic'),
'Level killing-field',
'Listen very hard and you will hear',
'Litmus test',
'Little local difficulty',
optDashes('Long-term vision'),
'Loom large',
'Ludicrous',
'Lurch to the \\w+',
'Made his mark',
'Makes no mention',
'Map \\w+ agenda',
'Marathon not a sprint',
'Meaning(ful|less)',
'Mechanisms',
'Methinks',
'Me-too approach',
'Metastorm',
'\'Minefield\'',
'Moral (bankruptcy|integrity)',
'National mission',
'Negative consequences?',
'Netizen',
'New Normal',
'New political settlement',
'New type of( \\w+)* (democracy|economics|economy|society)',
'Noises off',
'Nonsensical',
'No past to',
'Nothing short of',
'Objective analysis',
'Oldest trick in the (\\w+ )?book',
'On a knife edge',
'Operationali(s|z)(e|ation)',
'Ordinary (families|people)',
optPrefixes('Orthodox(y|ies)',  'Failed','Free-market','Keynesian','Market','Past','Stale','Tired','Wrong'),
'Our culture',
'Our \\w+ crosshairs',
optPrefixes('Out of touch', 'Increasingly','So'),
'Owns this turf',
'Pander(ing)? to',
'Panjandrums*',
'Parasites*',
'Pay packet',
reqdPrefixes('Picture', 'Bigger'),
'Pithy',
optPrefixes('Pivotal role', 'Play(s|ed)? a'),
optDashes('Political dead-end'),
'Political (calculus|dynamics*|lexicon|space)',
'Political(ly)? incoheren(t|ce)',
'Predatory capitalism',
'Prescient',
'Prism',
'Privately delighted',
'\'Promising\'',
'Prostrated',
'Puts? the public interest before',
'Put(ting)? \\w+ at the (very )?heart of',
'Quisling',
'Race is wide open',
'Race to the bottom',
'Raise.? the spectre',
'Reach(ing)? boiling point',
'Reach out to',
'Reactionary',
'Real (alternative)',
'Reared its(| ugly) head',
'Rebalanc(e|ing) our economy',
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
'Rolling programme',
'Same old failed \\w+',
'Say it again',
'Scandalous',
optPrefixes('Scarcely be able to believe',  'Must'),
'Seared in(to)? my memory',
'Seiz(e|ing) the initiative',
'Self-(evident|hatred|indulgent|satisfied|serving)(ly)*',
'Senior( (Labour|Tory))? figures?',
'Set to continue',
'Shameless(ly)*',
'Shape a new deal',
'Ship of state',
'Shutting the stable door after the horse has bolted',
'Significant',
'Slash-and-burn',
'Slash(ed)*',
'Slippery slope',
reqdSuffixes('Social',  'Acceptability','Change','Legitimacy'),
'Socially acceptable',
optDashes('Something-for-nothing'),
optDashes('Something-for-something'),
reqdPrefixes('Sources?',  'Downing Street'),
'Sparked outrage',
'Squeeze families',
'Squeezed middle',
'Standstill commitments?',
reqdPrefixes('Story',  'Resonant'),
'Straitened times*',
'\'Strong case\'',
'Substan(ce|tial)',
'(Un)?Sustainab(le|ility)',
'Sustainable growth',
'Sycophantic',
'Tantamount',
optPrefixes('Tenets?',  'Central','Core','Key'),
optPrefixes('The heart bleeds',  'How'),
'The (left|right) needs (a|to)',
'The old model of',
'The old view',
optPrefixes('The reset button',  'Hit(ting)?'),
'The time for \\w+ is over',
optDashes('Thinly-veiled'),
reqdPrefixes('This forward',  'Move','Take'),
'(This|thus) far and no further',
optPrefixes('Thoughtful',  'Ever-','Usually'),
'To fit changing times',
optPrefixes('Traction',  'Gain'),
optPrefixes('Trajectory',  'Current'),
'Transforming Britain',
'Trenderati',
'Tsunami of \\w+',
'Tumbleweed',
'Turn[^\\.,]*away[^\\.,]*in[^\\.,]*disgust',
'Uncharted waters',
'Uncritical',
'Undeniabl(e|y)',
'Unfairness',
'Unforgettable',
'Unintelligent',
'Unsurprisingly',
'Unthinking',
reqdPrefixes('Uplift',  'Full'),
'Upkick',
'Upskill(ing)*',
optPrefixes('Vacuous',  'Ideologically','Intellectually'),
'Very distinctive',
'Vested interests?',
'Vital',
'Vocalise',
'Vulnerable groups*',
'Vultures*',
'Waiting nervously',
'Wanton',
'Warmist',
'Weather the' + someWords(0,3) + ' storm',
optPrefixes('Well-?being',  'General'),
'Where.s the beef?',
optPrefixes('Where we.re at( politically)?',  '(An )?Expression of'),
'Whiff of grapeshot',
'Whip(ping)? up a storm',
'Who will rid me of this turbulent \\w+\\??',
'Willful ignorance',
optPrefixes('With a human face',  'Capitalism','Politics'),
'Wiped off the value',
'Wip(e|ing) the slate clean',
'Works for the many',
reqdPrefixes('Would Argue',  'Many','Some'),
'Wrong-headed',
'Year zero'];

var theCaseInsensitiveExtraTerms = ['[A-Z]\\w+' + 'ite spin'];


var theExtraHealthTerms = [
optPrefixes('(Aid|Block|Cure|Cut|Fight|Slow|Stop)s?( \\w+)? Cancer( Risk)?',  'Could','May'),
'Linked to( \\w+)? cancer'];


////////////////////////////////////////////////////////////////////////////////

$(function() {
	refreshBannedStuff( { /* Dodgy defaults... */ "extras.politics.andrew1" : "true" } );
});

function refreshBannedStuff( inOptions ) {
    $("head").append($("<link rel='stylesheet' href='css/bannedList.css' type='text/css' media='screen' />"));

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

    $('body').highlight( '\\b(' + theSpecialIgnoreTerms.join('|') + ')\\b', 'highlightIgnore', '', true);
    $('body').highlight( '\\b(' + theCaseInsensitiveCoreTerms.join('|') + ')\\b', 'highlightCore', '#BannedList entry', false);
    $('body').highlight( '(' + theNotJustWordsTerms.join('|') + ')', 'highlightCore', '#BannedList entry', true);
    $('body').highlight( '\\b(' + theCoreTerms.join('|') + ')\\b', 'highlightCore', '#BannedList entry', true);

    if ( inOptions["extras.politics.andrew1"] == 'true') {
        $('body').highlight( '\\b(' + theExtraTerms.join('|') + ')\\b', 'highlightExtra', '#BannedList Extras: dodgy political language', true);
        $('body').highlight( '\\b(' + theCaseInsensitiveExtraTerms.join('|') + ')\\b', 'highlightExtra', '#BannedList Extras: dodgy political language', false);
        $('body').highlight( '\\b(' + theExtraHealthTerms.join('|') + ')\\b', 'highlightExtra', '#BannedList Extras: dodgy Health language', true);
    }
}