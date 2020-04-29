Ext.define('AkApp.view.form', {
    extend: 'Ext.form.Panel',
    title: 'User Form',
    xtype:'newform',
    id : 'newform',
    renderTo: Ext.getBody(), 
    //layout : 'fit',
    height: 500,
    width: 300,
    bodyPadding: 10,
    controller:'form',

    requires: [
        'AkApp.store.Formstore','AkApp.view.form.formController','AkApp.model.Formstore'
        
    ],


   
    store: {type: 'formstore'},
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
            name: 'fathername',
            allowBlank: false,
            minLength : 3,
            flex: 1
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Mothers Name',
            name: 'mothername',
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
            //allowBlank: false,
        },
        {
            xtype: 'combobox',
            fieldLabel: 'Extra Curricular',
            name: 'activities',
            multiSelect: true,
            flex: 1,
            store: Ext.create('Ext.data.Store', {

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
               text:'FeePaid',
               formBind:true,
               allowBlank:false,
               flex:1, 
               listeners: {
                click: function() {
                   Ext.MessageBox.show ({
                    allowBlank:false,
                      title: ' Fees Details',
                      msg: 'Did you paid your fees?:',
                      width:300,
                      buttons: Ext.MessageBox.YESNO,
                      multiline: true,
                      fn: callbackFunction
                   });
                   function callbackFunction() {
                     if(Ext.MessageBox.YES){
                       Ext.Msg.alert("Fee paid successfully")
                     }
                     else{
                            Ext.Msg.alert("It is optional")
                     }


                     // Ext.Msg.alert('FeePaid', 'Fee paid succesfully');
                   }
                }
             }
            
            },
           







        
          { 
            xtype:'button',
            width:'50',
            text:'submit',
            formBind: true,
            handler: 'onButtonClick',   

             

                
                // //console.log("Hello ashish");
                // var values = this.up('form').getForm().getValues();
                // //console.log("the form data is:", data);
                // //console.log(Ext.getStore('formStore'))
                // //console.log(Ext.getStore('formstore'))
                //  //let store = this.up('form').getStore();
                //  Ext.getStore('formStore').values.add({
                //     studentname: values.studentname,
                //     fathersname: values.fathersname,
                //     mothersname: values.mothersname,
                //     dateOfbirth: values. dateofbirth,
                //     class:  values.class,
                //     feepaid:  values.feepaid,
                //     extracircullar:  values.extracircullar    
                // });
                // console.log("Data push is done");
                // console.log("data is",values)
               
            
        },  
        
       


    
       
    ],

    
});
