Ext.define('AkApp.view.NewForm.newform', {
    extend:'Ext.Panel',
    xtype: 'myForm',   
    title: ' View-ModelFORM',
    layout: 'fit',
    
    viewModel: {
        formulas: {
            fieldvalue: {
                bind: {
                    x: '{!field1.value}',
                    y: '{!field2.value}'
                },
    
                get: function (data) {
                    return (data.x || data.y)
                }
            }
        }
    },
    
    items: [{
        xtype: 'form',
        defaultType: 'textfield',
        bodyPadding: 10,
        items: [
            {fieldLabel: 'Field 1', reference: 'field1', publishes: 'value', },
            {fieldLabel: 'Field 2', reference: 'field2', publishes: 'value',
            bind:{
                disabled:"{!field1.value}" || "{!field3.value}"
            }
        },
        
        
            {
                fieldLabel: 'Field 3', 
                bind: {
                    disabled: "{fieldvalue}"
                }
            },            
        ],
        
    }]
        
});
