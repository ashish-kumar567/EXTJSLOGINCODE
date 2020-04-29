Ext.define('AkApp.store.Formstore', {
    extend: 'Ext.data.Store',
    alias: 'store.formstore',
    model: 'AkApp.model.Formstore',
    
    autoLoad: true,
    pageSize:4,

       sorters: [
        {
        property: 'studentname',
        direction: 'ASC',
        //store: 'AkApp.store.FormChainedStore',
       },
       {
        property: 'dateofbirth',
        direction: 'desc',
        //store: 'AkApp.store.FormChainedStore',
       }
],
    
    
    
    data: {


        items: [
        
            { studentname:"Ashish", fathersname: " shyam", mothersname: "Rakhi",  dateofbirth: '15/02/2020',class:"B.tech",feepaid:'',extracircullar:"singing" },
            { studentname:"Amit", fathersname: " rayan", mothersname: "sita",  dateofbirth: '12/02/2020',class:"matric",feepaid:9000,extracircullar:"badminton" },
            { studentname:"Rajan", fathersname: " shyam", mothersname: "shyami",  dateofbirth: '11/03/2020',class:"matric",feepaid:8000,extracircullar:"cricket" },
            { studentname:"sunny", fathersname: " Ramu", mothersname: "Rekha",  dateofbirth: '11/02/2010',class:"Intermediate",feepaid:4000,extracircullar:"cricket" },
            { studentname:"Rajat", fathersname: " GayaSingh", mothersname: "Appu",  dateofbirth: '03/02/2018',class:"B.tech",feepaid:5000,extracircullar:"singing" },
            { studentname:"shafique", fathersname: " MrShyam", mothersname: "Rakhi",  dateofbirth: '03/02/2020',class:"B.tech",feepaid:2000,extracircullar:"singing" },
            // { studentname:"Rakesh", fathersname: " MrShyam", mothersname: "sita",  dateofbirth: '12/02/2020',class:"matric",feepaid:9000,extracircullar:"badminton" },
            // { studentname:"Niraj", fathersname: " shyam", mothersname: "shyami",  dateofbirth: '06/03/2020',class:"matric",feepaid:8000,extracircullar:"cricket" },
            // { studentname:"umesh", fathersname: " Ramu", mothersname: "Rekha",  dateofbirth: '07/02/2010',class:"Intermediate",feepaid:4000,extracircullar:"cricket" },
            
           
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
