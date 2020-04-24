Ext.define('AkApp.view.form.formController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.form',
  require:['AkApp.view.form'],

    onButtonClick: function () {
         debugger
        var form = this.up('form').getForm();
        console.log("form Data is",form.getValues());
        let store = this.getStore();
        console.log(store);
        if (form.isValid()) {
            var values = form.getFieldValues();
            store.add({
                
                StudentName: values.StudentName,
                FathersName: values.FathersName,
                MothersName: values.MothersName,
                DateOfBirth: values. DateOfBirth,
                Class:  values.Class,
                FeePaid:  values.FeePaid,
                ExtraCircullar:  values.ExtraCircullar,


            });  
            console.log("form Data is",form.getValues())

        }
        else {
            alert("Insert values in textfields");
        }
    }
});



