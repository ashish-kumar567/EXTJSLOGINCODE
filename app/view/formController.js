Ext.define('AkApp.view.form.formController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.form',
    /*views: [
        'Formstore.List'
    ],*/

    //store: ['Formstore'],
    //model: ['Formstore'],

    onButtonClick: function () {

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
            alert("Values Submitted")
            alert(JSON.string)
            console.log("form Data is",form.getValues())

        }
        else {
            alert("Insert values in textfields");
        }
    }
});



