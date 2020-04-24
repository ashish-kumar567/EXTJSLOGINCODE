Ext.define('AkApp.view.main.Formstore', {
    extend: 'Ext.grid.Panel',
    xtype: 'formlist',

    requires: [
        'AkApp.store.Formstore',
    ],

    title: 'Formstore',

    store: {
        type: 'formstore'
    },
    
   
    // bind: {
    //     store: '{formstore}'
    // },

    // handler: function() {
    //     var gridPanel = Ext.ComponentQuery.query('grid[]')[0];
    //     gridPanel.getStore().data.loadPage();
    // },


    columns: [
        { text: 'StudentName', dataIndex: 'studentname', flex: 1},
        { text: 'FathersName', dataIndex: 'fathersname', flex: 1 },
        { text: 'MothersName', dataIndex: 'mothersname', flex: 1 },
        { text: 'DateofBirth', dataIndex: 'dateofbirth',flex: 1 },
        { text: 'Class', dataIndex: 'class',flex: 1 },
        { text: 'FeePaid', dataIndex: 'feepaid',flex: 1 },
        { text: 'ExtraCircullar', dataIndex: 'extracircullar',flex: 1 }
    
    ],


    listeners: {
        select: 'onItemSelected'
    },  

});
