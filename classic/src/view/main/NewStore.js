Ext.define('AkApp.view.main.NewStore', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.NewStore',
    xtype: 'newgrid',

    require: ['AkApp.store.Formstore'],
   


    // config: {},
    // constructor: function (config) {
    //     return this.callParent(arguments);
    // },
    columnLines: true,
    // selModel:
    // {
    //     mode: 'rowmodel'
    // },
    // viewConfig:
    // {
    //     stripeRows: true
    // },


    title: 'ChainedFormStore',
    views: ['AkApp.view.NewStore'],
    stores: ['AkApp.store.Formstore'],



  

            columns: [
              

            {

                text: 'StudentName',
                dataIndex: 'studentname',
                flex: 1,

                filter:{
                    type:'string',
                }
               
            },
            {
                text: 'DateofBirth',
                dataIndex: 'dateofbirth',
                flex: 1,
               
                filter:{
                    type: 'string',
                }
            }         
            ],
            plugins : 'gridfilters', 
            
            
            tbar: [
                {
                    xtype: 'combobox',
                    fieldLabel: 'Class',
                    name: 'class',

                    store: Ext.create('Ext.data.Store', {
                        fields: ['abbr', 'name'],
                        data: [
                            { 'abbr': 'Matric', 'name': 'Matric' },
                            { 'abbr': 'Intermediate', 'name': 'Intermediate' },
                            { 'abbr': 'B.tech', 'name': 'B.tech' }
                            
                        ]
                    }),
                    valueField: 'abbr',
                    displayField: 'name'
                }
            ],
            listeners: {
                select: 'onItemSelected'
            },
     


});

    