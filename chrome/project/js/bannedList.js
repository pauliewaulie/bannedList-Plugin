var theCoreTerms = ['A (basket|package|raft|range|sense|series) of',
'(A|C|Z)-list',
'Added bonus',
'A fine art',
'Affordable',
optDash('Age-old question'),
'Ahead of the curve',
'Ahem',
'A long time in politics',
'Any time soon',
'Any way, shape or form',
'Approbation',
'Arguably',
'Art form',
'At the end of the day',
'At this moment in time',
'Atop',
'A truth universally acknowledged',
'Awry',
optDash('Back-burner'),
'Bank of Mum and Dad',
'Beggars Belief',
'beleaguered',
'Big Ask',
'Blood on the (carpet|floor|walls)',
'Celebrat(es*|ing) diversity',
'Celebrity',
'Chaos',
'Clause (Four|IV) moment',
'Clear and present danger',
'Community',
'Crowd-*sourc(e|ing)',
'Crystal clear',
'Damp squib',
'Dead hand',
'Dead in the water',
'Dead on arrival',
'Deafening silence',
'Deliverables*',
'Dracula in charge of a blood bank',
'Economy, stupid',
'Elephant in the room',
'Empower(ment)*',
'Enough already',
'Epic Fail',
'Equality',
'Events, dear boy',
'Exponentially',
'Fairly unique',
optDash('Fast-forward to'),
'Febrile',
'Feral',
'Fit for Purpose',
'Fog of war',
'Foregone conclusion',
'Forward policy',
optDash('Front-line'),
optDash('Game-chang(er|ing)'),
'Gamely',
'Give 110(%| per cent)',
'Glaring loophole',
'Going forward',
'Good Election to Lose',
optDash('Ground-breaking'),
'Guilty as charged',
'Guns blazing',
'Hapless',
'Hard-headed',
optDash('Hard-working families'),
'Hearts and minds',
'Hodge-podge',
'Hostage to fortune',
'Iconic',
'If I were a betting man',
'Inclusive',
'In conjunction with',
'Incredibl(e|y)',
'Inextricably link(ed)?',
'In point of fact',
'In (order|relation) to',
'In (respect|terms) of',
'Is it just me, or',
'Is toast',
'It.s \\w+, Jim, but not as we know it',
'Keynote speech',
optDash('Last-ditch'),
'Learning curve',
'Let\'s be clear',
'Life chances',
'Lifestyle',
'Line in the sand',
'Lost generation',
'Make no mistake',
'Makeover',
'Mee*t with',
'Militate against',
'Moment in time',
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
'Parameters*',
'Paucity',
'Perfect Storm',
optDash('Pipe-dream'),
'Plan B',
'Plethora',
'Political (football|hot potato|Journey)',
'Postcode lottery',
'Pot, Kettle',
'Progressive',
'Progressives*',
'Psychodrama',
'Quantum leap',
'Rais(es*|ing) awareness',
'read(ing)*(| \w*) the Riot Act',
'Real (change|people|world)',
'Reality check',
'Red lines',
'Robust',
'Root and branch',
'Scant comfort',
'Scrap heap',
optDash('(Sea|Step)-change'),
'Seal the Deal',
'Seismic shift',
'Serve\\w? the purpose of',
'Signage',
'Simples',
'Siren voices*',
'Sleaze',
'Smell the Coffee',
'Social mobility',
'Spiral out of control',
'Stakeholders*',
'Stark contrast',
'Stinging (attack|criticism)',
'Substantive',
'Systemic( failure)?',
'Takeaway point',
'Talismanic',
'Tectonic plates',
'The hallmarks of',
'The Mother of all',
'The prospect of',
'The(| simple) fact(| of the matter) is',
'The truth is',
'[^\'\"]The \w+ Delusion[^\'\"]',
optDash('Tipping-point'),
'Tome',
'Too little, too late',
optDash('Top-down'),
'Top priority',
'Touch base',
'Upcoming',
'Vibrant',
'Virtuous circle',
'Vulnerable moment',
'War of words',
'Way (beyond|more)',
'We are all \\w+ now',
'Web 2.0',
'Webinar',
optDash('Well-oiled machine'),
'Westminster bubble',
'We will take no lessons',
'Who knew?',
'Win-win',
'Wow factor',
'Wreak havoc'];

var theLaterCoreTerms = ['Abject failure',
'Damning indictment',
'Devastating',
'Little local difficulty',
'Methinks',
'Nothing short of',
'That is all'];

var theExtraTerms = ['Arch-(Blairite|Thatcherite)',
'Articulated* a',
'Backsliding',
'Blink(ed)* in the face',
'Blood money',
'Body (blow|politic)',
'Bow down to',
'Broad sweep of history',
'Byzantine complexity',
'Catastroph(e|ic)',
'(Changed|Different) landscape',
'Chorus of criticism',
'Chutzpah',
'Clearly',
'Cogent vision',
'Coherent (alternative|strategy)',
'(Common )?Decency',
'Congratulations, \\w+.',
'Corporate media',
'Crazy',
'Creeping privati[s|z]ation',
optDash('Crunch-time'),
'Cuckoo in the \\w+ nest',
'Cynica(l|lly)',
'Decent',
'Defend(ing)* the indefensible',
'Delusional',
'Different kind of emphasis',
'Disgrace(ful)*',
'Disgusting',
'Distort(ed|ing)',
'Dodgy',
'Draconian',
optDash('Economic dead-end'),
'Economic(ally)* illitera(te|cy)',
'Economic(ally)* incoheren(t|ce)',
'Endanger',
optDash('Ever-astute'),
'(Ever-|Usually )?Thoughtful',
'Excellence',
'(Failed|Past|Stale)* orthodox(y|ies)',
'Fair(er)* economy',
'Fairness',
'Fight(ing)* the (fair|good) fight',
'Fight(ing)*,* tooth and nail',
'Foot-dragging',
'For the few',
'Fundamental change',
'Genuine credibility',
optDash('Gold-plated'),
'Golden goose',
'Grassroots movement',
optDash('Half-baked'),
'Hard-(left|right)',
optDash('Hard-working majority'),
'Have the values',
'\'Healthier\'',
'Height of irresponsibility',
'Here we go again',
'(How )?the heart bleeds',
'Hysterical',
'Ideological',
'Ideologues*',
'ill-(conceived|considered|informed)',
'Immoral',
'Imperialis[m|t]',
'In hock to',
'Inevitable',
'Inexorable',
'\\w+ in sheep\'s clothing',
'Insignificant',
'Interests of the majority',
'In the \\w+ worldview',
'Irrationa(l|lly)',
'Jump(ed)* the shark',
'(Key )?tenets?',
'Knee-jerk',
'Lamented',
'Laughable',
'Laz(y|iness)',
'Leading (blogger|MP|reason)s?',
'Leaps and bounds',
'Level killing-field',
optDash('Long-term vision'),
'Ludicrous',
'Made his mark',
'Makes no mention',
'Marathon not a sprint',
'Meaning(ful|less)',
'Me-too approach',
'Metastorm',
'\'Minefield\'',
'Moral bankruptcy',
'National mission',
'Netizen',
'New political settlement',
'New type of( \\w+)* (democracy|economics|economy|society)',
'Nonsensical',
'No past to',
'Objective analysis',
'Ordinary families',
'Our culture',
'Our \\w+ crosshairs',
'Out of touch',
'Owns this turf',
'Panjandrums*',
'Parasites*',
'Pay packet',
'Pithy',
optDash('Political dead-end'),
'Political (calculus|dynamics*|lexicon)',
'Political(ly)? incoheren(t|ce)',
'Predatory capitalism',
'Prescient',
'Privately delighted',
'\'Promising\'',
'Prostrated',
'Puts* the public interest before',
'Quisling',
'Reach out to',
'Reactionary',
'Reared its(| ugly) head',
'Reciprocity',
'Reckless',
'Reflect (our|their) values',
'Regurgitat(e|ing)',
'Reframe',
'Regressive',
'Responsible measures*',
'Responsible middle',
'Rolling programme',
'Scandalous',
'Seared in(to)? my memory',
'Seiz(e|ing) the initiative',
'Self-(evident|hatred|indulgent|satisfied|serving)(ly)*',
'Senior( (Labour|Tory))? figures?',
'Shameless(ly)*',
'Ship of state',
'Shutting the stable door after the horse has bolted',
'Significant',
'Slash(ed)*',
'Social acceptability',
'Social justice',
'Socially acceptable',
optDash('Something-for-nothing'),
optDash('Something-for-something'),
'Spin',
'Squeeze families',
'Squeezed middle',
'Straitened times*',
'\'Strong case\'',
'Substan(ce|tial)',
'Sycophantic',
'(The )?Good society',
'The (left|right) needs (a|to)',
'The old model of',
optDash('Thinly-veiled'),
'(This|thus) far and no further',
'To fit changing times',
'Transforming Britain',
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
'Upkick',
'Upskill(ing)*',
'Vital',
'Vulnerable groups*',
'Vultures*',
'Wanton',
'Wellbeing',
'Well-worn clich.',
'Whiff of grapeshot',
'Willful ignorance',
'Wiped off the value',
'Works for the many',
'Wrong-headed'];

$(function() {
    $('body').highlight( '\\b(' + theCoreTerms.join('|') + ')\\b', 'highlightCore', '#BannedList entry');
    $('body').highlight( '\\b(' + theLaterCoreTerms.join('|') + ')\\b', 'highlightCore', '#BannedList entry');
    $('body').highlight( '\\b(' + theExtraTerms.join('|') + ')\\b', 'highlightExtra', '#BannedList Extras: dodgy political language');
});

function optDash(inStr) {
    return inStr.replace('-','(-| )');
}