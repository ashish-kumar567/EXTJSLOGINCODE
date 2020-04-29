Ext.define('AkApp.store.FormChainedStore', {
    extend: 'Ext.data.ChainedStore',
    //alias:'store.chainedstore',
    source:'AkApp.store.Formstore',
    storeId: 'MyChainedStore',
    model:' AkApp.model.Formstore',
    autoLoad: 'true',
    sorters: [
        {
        property: 'studentname',
        direction: 'desc',
        store:'AkApp.store.Formstore',
        
       },
       {
        property: 'dateofbirth',
        direction: 'ASC'
       }
],

    data: {
        items: [
            { studentname:"Ashish",  dateofbirth: '15/02/2020'},
            { studentname:"Amit",   dateofbirth: '12/02/2020'},
            { studentname:"Rajan",  dateofbirth: '13/03/2020' },
            { studentname:"sunny", dateofbirth: '11/02/2010' },
            { studentname:"Rajat",  dateofbirth: '25/02/2018' }           
           
        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }

});