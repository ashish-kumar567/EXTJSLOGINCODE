Ext.define('AkApp.store.Formstore', {
    extend: 'Ext.data.Store',
    alias: 'store.formstore',
   model: 'AkApp.model.Formstore',
    Storeid : 'formStore',
    autoLoad: true,
    // sorters: [{
    //     property: 'studentname,dateofbirth',
    //     direction: 'ASC'
    // }],
    
    
    
    
    data: {
        items: [
            { studentname:"Ashish", fathersname: " MrShyam", mothersname: "Rakhi",  dateofbirth: '15/02/2020',class:"B.tech",feepaid:2000,extracircullar:"singing" },
            { studentname:"Amit", fathersname: " MrShyam", mothersname: "sita",  dateofbirth: '12/02/2020',class:"matric",feepaid:9000,extracircullar:"badminton" },
            { studentname:"Rajan", fathersname: " shyam", mothersname: "shyami",  dateofbirth: '13/03/2020',class:"matric",feepaid:8000,extracircullar:"cricket" },
            { studentname:"sunny", fathersname: " Ramu", mothersname: "Rekha",  dateofbirth: '11/02/2010',class:"Internediate",feepaid:4000,extracircullar:"cricket" },
            { studentname:"Rajat", fathersname: " GayaSingh", mothersname: "Appu",  dateofbirth: '25/02/2018',class:"B.tech",feepaid:5000,extracircullar:"singing" },
           
           
        ]
    },

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
