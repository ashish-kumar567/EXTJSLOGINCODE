Ext.define('AkApp.model.Formstore', {
    extend: 'AkApp.model.Base',
    extend: 'Ext.data.Model',
    idProperty: 'studentname',

    sorters: [{
        property: 'studentname',
        direction: 'ASC'
    }],

    





    autoLoad : true,
    fields: [
        'studentname', 'fathersname',  'mothersname',  'dateofbirth', 'class', 'feepaid', 'extracircullar',
    ]
});
