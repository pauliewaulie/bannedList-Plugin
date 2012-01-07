var theCoreTerms = ['Way (beyond|more)','Learning curve','rais(es*|ing) awareness','Celebrat(es*|ing) diversity','Inclusive','Community','Hearts and minds','Celebrity','Makeover','Lifestyle','Going forward','forward policy','Big Ask','At this moment in time','Fit for Purpose','Hard(-| |)working families','Game-chang(er|ing)','Vibrant','Progressives*','Arguably','Iconic','Parameters*','the hallmarks of','Exponentially','On a daily basis','At the end of the day','Organically','Political Journey','Any time soon','Economy, stupid','any way, shape or form','elephant in the room','Perfect Storm','Seal the Deal','Good Election to Lose','Let’s be clear','^The truth is','Out of the box','Paradigm','Pot, Kettle','Name and Shame','Deliverables*','Enough already','Who knew?','Epic Fail','Guilty as charged','Political hot potato','no-brainer','cynica(l|lly)','sycophantic','(in)*significant','meaning(ful|less)','substan(ce|tial)','vital','unforgettable','inevitable','inexorable','hysterical','ludicrous','nonsensical','disgusting','leading (blogger|reason)s*','beleaguered','vulnerable moment','unthinking','knee-jerk','Progressive','devastating','equality','slash(ed)*','reared its(| ugly) head','Beggars Belief','Body blow','Scrap heap','Guns blazing','Deafening silence','A fine art','makes no mention','endanger','thought(ful|less)','scandalous','distort(ed|ing)','prescient','pithy','unsurprisingly','gamely','lamented','laz(y|iness)','prostrated','irrationa(l|lly)','ill-(conceived|considered|informed)','affordable','crazy','wrong-headed','Hodge-podge','Half-baked','chutzpah','wanton','self-(hatred|indulgent|satisfied)','delusional','catastroph(e|ic)','disgrace(ful)*','febrile','The(| simple) fact(| of the matter) is','A (basket|package|raft|range|sense|series) of','(Sea|Step)(-| )change','creeping privati[s|z]ation','read(ing)*(| \w*) the Riot Act','touch base','Is it just me, or','[^\'\"]The \w+ Delusion[^\'\"]'];

var theExtraTerms = ['uncritical','willful ignorance','clearly','meaning(ful|less)','shameless(ly)*','Incredibly','Ideologues*','Vultures*','Parasites*','ideological','Regressive','Imperialis[m|t]','reactionary','fairness','unfairness'];

$(function() {
    $('body').highlight( theCoreTerms.join('|'), 'highlightCore');
    $('body').highlight( theExtraTerms.join('|'), 'highlightExtra');
//  $('body').highlight( '\b' + thePattern + '\b');
    $("#remove").click(function() {$("#row").removeHighlight();});
});