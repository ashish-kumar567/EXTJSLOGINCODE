Ext.define('AkApp.view.form', {
    extend: 'Ext.form.Panel',
    title: 'User Form',
    xtype:'newform',
    id : 'newform',
    //layout : 'fit',
    height: 400,
    width: 300,
    bodyPadding: 10,
    controller:'form',

    requires: [
        'AkApp.store.Formstore','AkApp.view.form.formController',
        
    ],


   
    store: {type: 'formstore'},
    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Student Name',
            name: 'studentname',
            allowBlank: false,
            minLength : 3,
            
            flex: 1
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Fathers Name',
            name: 'fathersname',
            allowBlank: false,
            minLength : 3,
            flex: 1
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Mothers Name',
            name: 'mothersname',
            allowBlank: false,
            minLength : 3,
            flex: 1

        },

        {
            xtype: 'datefield',
            fieldLabel: 'Date of Birth',
            name: 'DOB',
            allowBlank: false,
            flex: 1
        },
        {
            xtype: 'combobox',
            fieldLabel: 'class',
            name: 'class',
            allowBlank: false,
            store: Ext.create('Ext.data.Store', {

              
                fields: ['abbr', 'name'],
                data: [{
                   'abbr': 'Matric',
                   'name': 'Matric'
                },{
                   'abbr': 'Intermediate',
                   'name': 'Intermediate'
                },{
                   'abbr': 'B.tech',
                   'name': 'B.tech'
                }]
             }),
             valueField: 'abbr',
             displayField: 'name'
        },
        {
            xtype: 'numberfield',
            fieldLabel: 'Fee Paid',
            name: 'feepaid',
            allowBlank: false,
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Extra Curricular',
            name: 'extracircullar',
            flex: 1,
            store: Ext.create('Ext.data.Store', {

                requires: [
                    'Ext.view.MultiSelector'
                ],
               
                xtype:'multiselect',
                fields: ['abbr', 'name'],
                data: [{
                   'abbr': 'cricket',
                   'name': 'cricket'
                },{
                   'abbr': 'singing',
                   'name': 'singing'
                },{
                   'abbr': 'badminton',
                   'name': 'badminton'
                }]
             }),
             valueField: 'abbr',
             displayField: 'name'
        },
        
        //   {
        //     buttons: [{
        //         formBind: true,
        //         listeners: {
        //         click: 'onButtonClick'
        //         }
        //     }],
        // },

          { 
            xtype:'button',
            text:'submit',
            formBind: true,
            handler:function(btn){
                debugger
                //console.log("Hello ashish");
                var values = this.up('form').getForm().getValues();
                //console.log("the form data is:", data);
                //console.log(Ext.getStore('formStore'))
                //console.log(Ext.getStore('formstore'))
                 //let store = this.up('form').getStore();
                 Ext.getStore('formStore').data.add({
                    studentname: values.studentname,
                    fathersname: values.fathersname,
                    mothersname: values.mothersname,
                    dateOfbirth: values. DOB,
                    class:  values.class,
                    feepaid:  values.feepaid,
                    extracircullar:  values.extracircullar    
                });
                console.log("Data push is done");
               
            }
        },   
    
        { 
            xtype:'button',
            text:'Reset',
            flex:1, 
            handler:'reset'
        
        }
    ]
});
