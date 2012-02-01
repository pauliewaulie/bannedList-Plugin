var theCoreTerms = [optSuffixes('(A )?(basket|package|raft|range|sense|series) of',  'Measures?'),
'Above my pay grade',
'(A|C|Z)-list',
'Added bonus',
'A fine art',
'Affordable',
optDashes('Age-old question'),
'Ahead of( the curve)?',
'Ahem',
'A long time in politics',
'Any time soon',
'Any way, shape or form',
'Approbation',
'Arguably',
'Art form',
'Articulated* a',
'At the end of the day',
'At this moment in time',
'[A-Z][A-Z][A-Z]+athon',
'Atop',
'A truth universally acknowledged',
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
'Blood on the (carpet|floor|walls)',
'Blueprint',
'Blue sky thinking',
'Bottom line',
reqdPrefixes('Bullet',  'Magic','Silver'),
'By the back door',
'Celebrat(es*|ing) diversity',
'Celebrity',
'Chaos',
'Civil society',
'Clause (Four|IV) moment',
'Clear and present danger',
'Close down discussion',
optSuffixes('Community',  'Leaders?','Representatives?'),
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
'Doff',
optDashes('Dog-whistle'),
'Downward spiral',
'Dracula in charge of a blood bank',
'Economics of the madhouse',
'Economy, stupid',
'Elephant in the room',
'Empower(ment)*',
'Enough already',
'Epic Fail',
'Equality',
'Events, dear boy',
'Exponentially',
'Fairly unique',
optDashes('Fast-forward to'),
'Febrile',
'Feral',
optPrefixes('Fit for Purpose',  'Not'),
'Fog of war',
'Foregone conclusion',
'Forward policy',
optDashes('Front-line'),
optDashes('Game-chang(er|ing)'),
'Gamely',
'Give 110(%| per cent)',
'Glaring loophole',
'Going forward',
'Good Election to Lose',
'Granular(ity)?',
'(Grind|Ground) to a halt',
optDashes('Ground-breaking'),
'Guilty as charged',
'Guns blazing',
'Hapless',
'Hard-headed',
optDashes('Hard-working families'),
'Hearts and minds',
optDashes('Heavy-lifting'),
'Hodge-podge',
'Holistic',
'Honcho',
'Hostage to fortune',
'Hotbed',
'Human shield',
reqdPrefixes('Hypocrisy',  'Breathtaking','Rank','Shameless'),
'Iconic',
'If I were a betting man',
'Inclusive',
'In conjunction with',
'Incredibl(e|y)',
reqdPrefixes('Indictment',  'Damning','Devastating'),
'Inextricably link(ed)?',
'In point of fact',
'In (order|relation) to',
'In (respect|terms) of',
'Is it just me, or',
optPrefixes('Is not an option',  'Doing nothing','(The )?Status quo'),
'Is toast',
'It.s \\w+, Jim, but not as we know it',
'Keynote speech',
optDashes('Last-ditch'),
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
'Mee*t with',
'Militate against',
'Moment in time',
optPrefixes('Mood music', 'Political'),
'Moral compass',
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
'Opening salvo',
'Opined*',
'Organically',
'Out of the box',
'Outside of',
'Paradigm',
reqdPrefixes('Parameters?',  'Important','Key','Main','The'),
'Paucity',
'Perfect Storm',
optDashes('Pipe-dream'),
'Plan B',
'Play(ed|ing)? a leading (part|role)( in)?',
'Play into (the hands of|\\w+ hands)',
'Plethora',
'Political (football|hot potato|Journey)',
'Postcode lottery',
'Pot, Kettle',
'Prior to',
'Progressive',
'Progressives*',
'Psychodrama',
optSuffixes('Quantum',  'Leap'),
'Question mark over',
'Rais(es*|ing) awareness',
'Read(ing)*(| \w*) the Riot Act',
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
'Speak(ing)? truth (un)?to power',
'Spiral of decline',
'Spiral out of control',
'Stakeholders*',
'Stand shoulder to shoulder with',
'Stark contrast',
optDashes('State-of-the-art'),
'Step forward, (\\w+)',
'Stinging (attack|criticism)',
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
'[^\'\"]The \w+ Delusion[^\'\"]',
optPrefixes('Time Bomb',  'Ticking'),
optDashes('Tipping-point'),
'Tome',
'Too little, too late',
optDashes('Top-down'),
'Top priority',
'Touch base',
'Toxic',
'Turkeys voting for Christmas',
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
'Who knew?',
'Win-win',
'Wow factor',
'Wreak havoc'];


var theCaseInsensitiveCoreTerms = ['ConDems?( Government)?',
'Team [A-Z]\\w+'];

var theNotJustWordsTerms = ['That is all\\.',
'\\b' + 'Well-worn clich(e|\\xE9)'];

var theSpecialIgnoreTerms = ['(Points|Pulls?|Way) Ahead of',
reqdPrefixes('Clearly',  'As'),
'Marathon',
'Team Blog'];


var theExtraTerms = ['Abundantly clear',
reqdPrefixes('Agenda',  'Fairness','Strong'),
'Alarm bells( are)? ringing',
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
'Clear (blue|red) water',
'Clearly',
'Closer? to the ground',
'Cogent vision',
'Coherent (alternative|strategy)',
'Condemned to repeat \\w+',
'Congratulations, \\w+.',
reqdPrefixes('Conversation',  'Contemporary','Economic','National','Political'),
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
'Death-spiral',
optPrefixes('Decency',  'Common'),
'Decent',
'Decimat(e|ing)',
'Defend(ing)* the indefensible',
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
'Fight(ing)? the (fair|good) fight',
'Fight(ing)?,? tooth and nail',
'Fill(ing)? the black hole',
'Foot-dragging',
'For the few',
optPrefixes('Framework', 'Critical','Policy'),
'From another time',
reqdSuffixes('Fundamental',  'Change','Debate'),
reqdSuffixes('Genuine',  'Attempt','Credibility'),
optDashes('Gold-plated'),
'Golden goose',
optPrefixes('Good society',  'The'),
'Grassroots movement',
'Growing calls',
optDashes('Half-baked'),
'Hard-(left|right)',
'Hardwired',
reqdSuffixes('(Hard|Hard-|Hard )working',  'Britons','Majority','Many','Taxpayers?'),
'Have the values',
'\'Healthier\'',
'Hearts? ripped out',
'Hegemonic',
'Height of irresponsibility',
'Here we go again',
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
'Kick in the teeth',
'Knee-jerk',
'Kulturkampf',
'Laid the foundations',
'Lamented',
optPrefixes('Landscape', 'Changed','Different'),
'Last chance saloon',
'Laughable',
'Law of the jungle',
'Leading (\\w+ )?(blogger|campaigner|MP|reason|voice)s?',
'Leaps and bounds',
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
optPrefixes('Orthodox(y|ies)',  'Failed','Free-market','Keynesian','Past','Stale','Tired','Wrong'),
'Our culture',
'Our \\w+ crosshairs',
optPrefixes('Out of touch', 'Increasingly','So'),
'Owns this turf',
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
'Reflect (our|their) values',
'Regurgitat(e|ing)',
'Reframe',
'Regressive',
'Remains to be seen',
'Responsible measures*',
'Responsible middle',
'Rolling programme',
'Same old failed \\w+',
'Scandalous',
optPrefixes('Scarcely be able to believe',  'Must'),
'Seared in(to)? my memory',
'Seiz(e|ing) the initiative',
'Self-(evident|hatred|indulgent|satisfied|serving)(ly)*',
'Senior( (Labour|Tory))? figures?',
'Set to continue',
'Shameless(ly)*',
'Ship of state',
'Shutting the stable door after the horse has bolted',
'Significant',
'Slash-and-burn',
'Slash(ed)*',
'Slippery slope',
'Social acceptability',
'Social justice',
'Socially acceptable',
optDashes('Something-for-nothing'),
optDashes('Something-for-something'),
reqdPrefixes('Sources?',  'Downing Street'),
'Sparked outrage',
'Squeeze families',
'Squeezed middle',
'Standstill commitments?',
'Straitened times*',
'\'Strong case\'',
'Substan(ce|tial)',
'(Un)?Sustainab(le|ility)',
'Sustainable growth',
'Sycophantic',
'Tantamount',
optPrefixes('Tenets?',  'Central','Key'),
optPrefixes('The heart bleeds',  'How'),
'The (left|right) needs (a|to)',
'The old model of',
'The old view',
optPrefixes('The reset button',  'Hit(ting)?'),
'The time for \\w+ is over',
optDashes('Thinly-veiled'),
'(This|thus) far and no further',
optPrefixes('Thoughtful',  'Ever-','Usually'),
'To fit changing times',
optPrefixes('Traction',  'Gain'),
'Transforming Britain',
'Trenderati',
'Tsunami of \\w+',
'Tumbleweed',
'Turn[^\.,]*away[^\.,]*in[^\.,]*disgust',
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
'Very distinctive',
'Vested interests?',
'Vital',
'Vocalise',
'Vulnerable groups*',
'Vultures*',
'Waiting nervously',
'Wanton',
'Warmist',
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
'Linked to( \\w+)? cancer',
];


////////////////////////////////////////////////////////////////////////////////

$(function() {
	chrome.extension.sendRequest({ method: "getOptions"}, function(inResp) {
	  refreshBannedStuff( inResp.options );
	});
});

chrome.extension.onRequest.addListener(
	function( inReq, inSender, inSendResponse) {
		$('body').removeHighlights();
		refreshBannedStuff( inReq.options );
	}
);

function refreshBannedStuff( inOptions ) {
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

function optDashes(inStr) {
    return inStr.replace('-','(-| )');
}

function optPrefixes() {
    return handlePrefixes( Array.prototype.slice.apply(arguments), true);
}

function reqdPrefixes() {
    return handlePrefixes( Array.prototype.slice.apply(arguments), false);
}

function optSuffixes() {
    return handleSuffixes( Array.prototype.slice.apply(arguments), true);
}

function reqdSuffixes() {
    return handleSuffixes( Array.prototype.slice.apply(arguments), false);
}

function handlePrefixes( inArray, inIsOptional) {  // assume each prefix is word and needs trailing space
    var theStr = '(';

    for ( i = 1; i < inArray.length; i++) {
        if ( i > 1) {
            theStr += '|';
        }

        theStr += inArray[i] + ' ';
    }

    return theStr += ( inIsOptional ? ')?' : ')') + inArray[0];
}

function handleSuffixes( inArray, inIsOptional) {  // assume each prefix is word and needs trailing space
    var theStr = inArray[0] + '(';

    for ( i = 1; i < inArray.length; i++) {
        if ( i > 1) {
            theStr += '|';
        }

        theStr += ' ' + inArray[i];
    }

    return theStr + ( inIsOptional ? ')?' : ')');
}