var theCoreTerms = ['A (basket|package|raft|range|sense|series) of',
'A fine art',
'Affordable',
'Any time soon',
'any way, shape or form',
'At the end of the day',
'At this moment in time',
'A truth universally acknowledged',
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
'Dead hand',
'Dead in the water',
'Dead on arrival',
'Deafening silence',
'Deliverables*',
'Dracula in charge of a blood bank',
'Economically illiterate',
'Economy, stupid',
'Elephant in the room',
'Empower(ment)*',
'Enough already',
'Epic Fail',
'Equality',
'Events, dear boy',
'Exponentially',
'Fast(-| )forward to',
'Febrile',
'Feral',
'Fit for Purpose',
'Fog of war',
'Forward policy',
'Game-chang(er|ing)',
'Gamely',
'Give 110(%| per cent)',
'Going forward',
'Good Election to Lose',
'Guilty as charged',
'Guns blazing',
'Hapless',
'Hard-headed',
'Hard(-| |)working families',
'Hearts and minds',
'Hodge-podge',
'Hostage to fortune',
'Iconic',
'If I were a betting man',
'In conjunction with',
'In point of fact',
'Is it just me, or',
'Is toast',
'It.s \\w+, Jim, but not as we know it',
'Learning curve',
'Let\'s be clear',
'Life chances',
'Lifestyle',
'Lost generation',
'Makeover',
'Moral compass',
'Name and Shame',
'No-brainer',
'Normalcy',
'Now is not the time for',
'On a collision course',
'On a daily basis',
'Organically',
'Out of the box',
'Outside of',
'Paradigm',
'Parameters*',
'Perfect Storm',
'Political hot potato',
'Political Journey',
'Pot, Kettle',
'Progressive',
'Progressives*',
'Quantum leap',
'Rais(es*|ing) awareness',
'read(ing)*(| \w*) the Riot Act',
'Reality check',
'Red lines',
'Scant comfort',
'Scrap heap',
'(Sea|Step)(-| )change',
'Seal the Deal',
'Seismic shift',
'Signage',
'Significant',
'Simples',
'Sleaze',
'Social mobility',
'Stark contrast',
'Substantive',
'Takeaway point',
'Talismanic',
'Tectonic plates',
'The hallmarks of',
'The Mother of all',
'The(| simple) fact(| of the matter) is',
'The truth is',
'[^\'\"]The \w+ Delusion[^\'\"]',
'Too little, too late',
'Touch base',
'Vibrant',
'Vulnerable moment',
'War of words',
'Way (beyond|more)',
'Web 2.0',
'Webinar',
'Westminster bubble',
'Who knew?',
'Wow factor',
'Wreak havoc'];

var theLaterCoreTerms = ['Abject failure',
'Damning indictment',
'Devastating',
'Little local difficulty',
'Methinks',
'Nothing short of',
'That is all'];

var theExtraTerms = ['Ahead of the curve',
'Arguably',
'Backsliding',
'Body (blow|politic)',
'Bow down to',
'Catastroph(e|ic)',
'Chorus of criticism',
'Chutzpah',
'Clearly',
'Coherent strategy',
'Crazy',
'Creeping privati[s|z]ation',
'Cynica(l|lly)',
'Decen(t|cy)',
'Defend(ing)* the indefensible',
'Delusional',
'Disgrace(ful)*',
'Disgusting',
'Distort(ed|ing)',
'Dodgy',
'Endanger',
'Ever-astute',
'Fairness',
'Fight(ing)* tooth and nail',
'Foot-dragging',
'For the few',
'Grassroots movement',
'Half-baked',
'Hard working (families|majority)',
'\'Healthier\'',
'Hysterical',
'Ideological',
'Ideologues*',
'ill-(conceived|considered|informed)',
'Immoral',
'Imperialis[m|t]',
'In hock to',
'Inclusive',
'Inevitable',
'Inexorable',
'Insignificant',
'Interests of the majority',
'Irrationa(l|lly)',
'Knee-jerk',
'Lamented',
'Laughable',
'Laz(y|iness)',
'Leading (blogger|reason)s*',
'Level killing-field',
'Ludicrous',
'Made his mark',
'Makes no mention',
'Marathon not a sprint',
'Meaning(ful|less)',
'\'Minefield\'',
'Moral bankruptcy',
'National mission',
'Netizen',
'Nonsensical',
'Ordinary families',
'Out of touch',
'Parasites*',
'Pithy',
'Political lexicon',
'Prescient',
'\'Promising\'',
'Prostrated',
'Reactionary',
'Reared its(| ugly) head',
'Reckless',
'Reflect (our|their) values',
'Regurgitat(e|ing)',
'Reframe',
'Regressive',
'Responsible measures*',
'Robust',
'Scandalous',
'Self-(hatred|indulgent|satisfied|serving)',
'Shameless(ly)*',
'Shutting the stable door after the horse has bolted',
'Slash(ed)*',
'Social acceptability',
'Social justice',
'Socially acceptable',
'Something( |-)for( |-)nothing',
'Something( |-)for( |-)something',
'Spin',
'Squeeze families',
'Squeezed middle',
'\'Strong case\'',
'Substan(ce|tial)',
'Sycophantic',
'Thought(ful|less)',
'To fit changing times',
'Turn[^\.,]*away[^\.,]*in[^\.,]*disgust',
'Uncritical',
'Undeniabl(e|y)',
'Unfairness',
'Unforgettable',
'Unintelligent',
'Unsurprisingly',
'Unthinking',
'Vital',
'Vulnerable groups*',
'Vultures*',
'Wanton',
'Well-worn clich.',
'Whiff of grapeshot',
'Willful ignorance',
'Wrong-headed'];

$(function() {
    $('body').highlight( '\\b(' + theCoreTerms.join('|') + ')\\b', 'highlightCore', '#BannedList entry');
    $('body').highlight( '\\b(' + theLaterCoreTerms.join('|') + ')\\b', 'highlightCore', '#BannedList entry');
    $('body').highlight( '\\b(' + theExtraTerms.join('|') + ')\\b', 'highlightExtra', '#BannedList Extras: dodgy political language');
});