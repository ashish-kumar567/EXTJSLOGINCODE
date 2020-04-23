Ext.define('AkApp.store.Formstore', {
    extend: 'Ext.data.Store',
    alias: 'store.formstore',
    model: 'AkApp.model.Formstore',

    data: {
        // /*item: [
        //     { StudentName: '', FathersName: "", MotherName: "",  dateofbirth: "",Class:"",FeePaid:"",ExtraCircullar:"" },
           
        // ]*/
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'item'
        }
    }
});
