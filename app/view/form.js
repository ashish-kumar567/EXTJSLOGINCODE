Ext.define('AkApp.view.form', {
    extend: 'Ext.form.Panel',
    title: 'User Form',
    xtype:'newform',
    //layout : 'fit',
    height: 400,
    width: 300,
    bodyPadding: 10,
    controller:'form',

    requires: [
        'AkApp.store.Formstore','AkApp.view.form.formController',
        
    ],


   
    store : "formstore",
    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Student Name',
            name: 'student name',
            allowBlank: false,
            minLength : 3,
            
            flex: 1
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Fathers Name',
            name: 'father name',
            allowBlank: false,
            minLength : 3,
            flex: 1
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Mothers Name',
            name: 'mother  name',
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
            name: 'fee paid',
            allowBlank: false,
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Extra Curricular',
            name: 'activities',
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
         { 
            xtype:'button',
            text:'submit',
            formBind: true,
            handler:function(btn){
                console.log("Hello ashish");
                var data = this.up('form').getForm().getValues();
               console.log("the form data is:", data);
               // let store = this.getStore();
            //  formstore. data.push({
                
            //         StudentName: data.StudentName,
            //         FathersName: data.FathersName,
            //         MothersName: data.MothersName,
            //         DateOfBirth: data. DateOfBirth,
            //         Class:  data.Class,
            //         FeePaid:  data.FeePaid,
            //         ExtraCircullar:  data.ExtraCircullar
    
    
            //     });
                console.log("Data push is done");
            }
            
        },
        { 
            xtype:'button',
            text:'Reset',
            flex:1, 
            handler:'resetForm'
        
        }
    ]
});
