/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'AkApp.Application',

    name: 'AkApp',

    requires: [
        // This will automatically load all classes in the AkApp namespace
        // so that application classes do not need to require each other.
        'AkApp.*'
    ],

    // The name of the initial view to create.
     //mainView: 'AkApp.view.main.Main'
});
