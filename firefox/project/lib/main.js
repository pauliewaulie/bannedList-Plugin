const {classes: Cc, interfaces: Ci, utils: Cu} = Components;
Cu.import("resource://gre/modules/AddonManager.jsm");  // Import so we can get the Addon object that allows us to load CSS

const { Trait } = require("traits");
const widgets = require("widget");
const badges = require("BadgedWidget");
const k_WidgetBadgeOpacity = '1';

var data = require('self').data;

AddonManager.getAddonByID( /* Our Id from 'package.json': */ 'jid1-fM9zwpn7QB5NAA', function(addon) {
    loadStyles( addon, ["bannedList","bootstrap_content.min"]);
});

////////////////////////////////////////////////////////////////////////////////

var contextMenu = require("context-menu");

var theSubmitMenuIten = contextMenu.Item({
    label: "Submit #BannedList phrase...",
    image: data.url("img/icon16.png"),
    // Show this item when a selection exists.
    context: contextMenu.SelectionContext(),
    // When this item is clicked, post a message back with the selection
    contentScriptFile: data.url("js/jquery-1.7.1.min_plus_highlight.js"),
    contentScript: 'self.on("click", function (node,data) {' +
                   '  var text = window.getSelection().toString();' +
                   'console.log( "Using " + self + " / " + data);' +
                  '  self.postMessage(text);' +
             //       '  self.port.emit("myAddonEvent", "SENT");' +
                   '});',

    onMessage: function (item) {
      self.port.emit("myAddonEvent", "SENT");
      // submitBannedListEntry(item);
    }
  });

////////////////////////////////////////////////////////////////////////////////

function submitBannedListEntry( inItem ) {
    console.log('looking up "' + inItem + '"');
    try {
        showSubmissionDialog( { pageUrl: '*** FIXME ***'}, {});
    } catch (e) {
        console.log(e); // 'ERROR!');
    }
}

////////////////////////////////////////////////////////////////////////////////

var theResultsPanel = require("panel").Panel({
  width: 320,
  height: 290,
  contentURL: data.url("popup/shareResults.html")
});

var widget = badges.BadgedWidget({
  id: "bannedListLink",
  label: "#BannedList Highlighter",
  contentURL: data.url("img/icon16.png"),
  panel: theResultsPanel,
  width: 50
});

// widget.badge = { text: '', color: 'rgb(220,0,0)', textColor: 'white', opacity: k_WidgetBadgeOpacity };

////////////////////////////////////////////////////////////////////////////////

var pageMod = require("page-mod");
pageMod.PageMod({
  include: ['*'],
  contentScriptWhen: "end",
  // contentScript: ["console.log(document.URL)"],
  contentScriptFile: [ data.url("js/jquery-1.7.1.min_plus_highlight.js"), data.url("js/contentSupport.js"), data.url("js/bannedList.js"), data.url("js/bootstrap.min.js") ],
  onAttach: function onAttach( worker, mod) {

    worker.port.on("resetBadge", function() {
	widget.badge = { text: '', color: '', textColor: 'white', opacity: k_WidgetBadgeOpacity };
    });

    worker.port.emit("myAddonEvent", "Hello");

    worker.port.on("setBadge", function(inStats) {

	var theScoreText = '';
	var theBackColor = '';

	if ( inStats.score > 0) {
		theScoreText = '' + inStats.score;

		if ( inStats.score <= 3) {
			theBackColor = 'rgb(255,127,0)';
		}
                else if ( inStats.score <= 8) {
			theBackColor = 'rgb(255,70,70)';
                }
                else {
			theBackColor = 'rgb(220,0,0)';
                }
	}

	widget.badge = { text: theScoreText, color: theBackColor, textColor: 'white', opacity: k_WidgetBadgeOpacity };
    });
  }
});

/*******************************************************************************
*******************************************************************************/
function loadStyles( addon, styles) {
  let sss = Cc["@mozilla.org/content/style-sheet-service;1"].getService(Ci.nsIStyleSheetService);
  let ios = Cc["@mozilla.org/network/io-service;1"].getService(Ci.nsIIOService);

  styles.forEach( function(fileName) {
    // console.log('Trying... ' + "css/" + fileName + ".css");
    let resURI = data.url("css/" + fileName + ".css");
    let fileURI = ios.newURI( resURI, null, null); // data.url("css/" + fileName + ".css");	// addon.getResourceURI("css/" + fileName + ".css");
    // console.log('Loading... ' + fileURI);
    sss.loadAndRegisterSheet( fileURI, sss.USER_SHEET);
    console.log('Loaded ' + resURI + ' OK!');
    unload( function() sss.unregisterSheet( fileURI, sss.USER_SHEET) );
  });
}

/**
 * Save callbacks to run when unloading. Optionally scope the callback to a
 * container, e.g., window. Provide a way to run all the callbacks.
 *
 * @usage unload(): Run all callbacks and release them.
 *
 * @usage unload(callback): Add a callback to run on unload.
 * @param [function] callback: 0-parameter function to call on unload.
 * @return [function]: A 0-parameter function that undoes adding the callback.
 *
 * @usage unload(callback, container) Add a scoped callback to run on unload.
 * @param [function] callback: 0-parameter function to call on unload.
 * @param [node] container: Remove the callback when this container unloads.
 * @return [function]: A 0-parameter function that undoes adding the callback.
 */
function unload(callback, container) {
  // Initialize the array of unloaders on the first usage
  let unloaders = unload.unloaders;
  if (unloaders == null)
    unloaders = unload.unloaders = [];

  // Calling with no arguments runs all the unloader callbacks
  if (callback == null) {
    unloaders.slice().forEach(function(unloader) unloader());
    unloaders.length = 0;
    return;
  }

  // The callback is bound to the lifetime of the container if we have one
  if (container != null) {
    // Remove the unloader when the container unloads
    container.addEventListener("unload", removeUnloader, false);

    // Wrap the callback to additionally remove the unload listener
    let origCallback = callback;
    callback = function() {
      container.removeEventListener("unload", removeUnloader, false);
      origCallback();
    }
  }

  // Wrap the callback in a function that ignores failures
  function unloader() {
    try {
      callback();
    }
    catch(ex) {}
  }
  unloaders.push(unloader);

  // Provide a way to remove the unloader
  function removeUnloader() {
    let index = unloaders.indexOf(unloader);
    if (index != -1)
      unloaders.splice(index, 1);
  }
  return removeUnloader;
}