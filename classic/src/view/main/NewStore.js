Ext.define('AkApp.view.NewStore', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.NewStore',
    xtype:'newgrid',

    require:['AkApp.store.Formstore'],
    title: 'ChainedFormStore',
    config: {},
    constructor: function (config) {
        return this.callParent(arguments);
    },


    views: ['AkApp.view.NewStore'],
    stores: ['AkApp.store.Formstore', 'AkApp.store.FormChainedStore'],
 
    columnLines: true,
    selModel:
    {
        mode: 'rowmodel'
    },
    viewConfig:
    {
        stripeRows: true
    },
   
    initComponent: function () {

        Ext.apply(this, {

            columns: [{

            },
            
            { text: 'StudentName', dataIndex: 'studentname', flex: 1},
            { text: 'DateofBirth', dataIndex: 'dateofbirth',flex: 1 },

            ],
            tbar:[
            {
                xtype: 'combobox',
                fieldLabel: 'Class',
                name: 'class',
               
                store: Ext.create('Ext.data.Store', {
                    fields: ['abbr', 'name'],
                    data: [
                        {'abbr': 'Matric','name': 'Matric'},
                        {'abbr': 'Intermediate', 'name': 'Intermediate' },
                        {'abbr': 'B.tech','name': 'B.tech'}
                    ]
                 }),
                 valueField: 'abbr',
                 displayField: 'name'
            }
            ,
        ],
            listeners: {
                select: 'onItemSelected'
            },
        });
   this.callParent(arguments);
    }    
});