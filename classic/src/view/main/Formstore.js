Ext.define('AkApp.view.main.Formstore', {
    extend: 'Ext.grid.Panel',
    xtype: 'formlist',
    title: 'Formstore',
   
    requires: [
        'AkApp.store.Formstore',
    ],

    store: {
        type: 'formstore'
    },
    
    plugins: {
        pagingtoolbar: true
    },
   
    
    // bind: {
    //     store: '{formstore}'
    // },

    // handler: function() {
    //     var gridPanel = Ext.ComponentQuery.query('grid[]')[0];
    //     gridPanel.getStore().data.loadPage();
    // },
     bbar:{
     xtype:'pagingtoolbar',
     //store:formstore,
     displayInfo:'true',
     },
     onClearFilters: function(){
        this.getStore().clearFilter();
    },

    columns: [
        { text: 'StudentName', dataIndex: 'studentname', flex: 1,

        filter:{
            type:'string'
        }
    
        },
        { text: 'FathersName', dataIndex: 'fathersname', flex: 1 },
        { text: 'MothersName', dataIndex: 'mothersname', flex: 1 },
        { text: 'DateofBirth', dataIndex: 'dateofbirth',flex: 1,
            
        filter:{
            type:'string'
        }
    
    },
        { text: 'Class', dataIndex: 'class',flex: 1,
    
        filter:{
            type:'string'
        }
     },
        { text: 'FeePaid', dataIndex: 'feepaid',flex: 1 },
        { text: 'ExtraCircullar', dataIndex: 'extracircullar',flex: 1 },
       
     ],
         plugins:'gridfilters',

        
    listeners: {
        select: 'onItemSelected'
    } ,
   
})