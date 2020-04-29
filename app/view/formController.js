Ext.define('AkApp.view.form.formController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.form',
    require:['AkApp.view.form'],
     model:'Formstore',
    onButtonClick: function (button) {
         debugger
        var form = button.up('form').getForm().getValues();
        //  model = this.getModel('AkApp.model.Formstore');
      
      
        console.log("form Data is",form);
    
        let store = this.getStore('form');
        console.log(store);
      
            var values = Ext.create(form.getFieldValues());
            console.log(values.data);
            store.add({
                
                studentname: values.studentname,
                fathersname: values.fathersname,
                mothersname: values.mothersname,
                dateofbirth: values. dateofbirth,
                class:  values.class,
                feepaid:  values.feepaid,
                extracircullar:  values.extracircullar,


            });  
            console.log("form Data is",form);

        
    
    }
});


// Ext.define('AkApp.view.form.formController', {
//     extend: 'Ext.app.Controller',

//      views: [
//         'view.form'
//             ],
//      stores: ['Formstore'],
//      models: ['Formstore'],
//     init: function() {
//         console.log('controller initialized');
//         this.control({
//             'viewport panel button': {
//                 'click': this.onButtonClick
//             }
//         });
//     },

//     onButtonClick: function(button, e, eOpts ) {
//         debugger
//         var form = button.up('form').getForm();
//         var model = this.getModel('AkApp.model.Formstore');

//       // Validate the form
//       if (form.isValid ()) {
//         var question = model.create(form.getFieldValues());
//         console.log(question.data);
//       }
//       else {
//           alert("Insert values in textfields");       
//       } 
//     }


// })

