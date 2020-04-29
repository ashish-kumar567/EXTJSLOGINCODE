// Ext.define('AkApp.store.ExtraApi',{
//     extend:'Ext.data.Store',
//     alias:'Store.extraApi',
//    // autoSync:'true',
//    autoLoad:true,
//     proxy:{
//         type:'ajax',
//         url:'https://reqres.in/api/users/2',
//         reader:{
//            type :'json/rest',
//            rootProperty:'data'
//         }
//     },
//     autoLoad:'true'
// })


Ext.define('AkApp.store.ExtraApi',{
    extend:'Ext.data.Store',
    alias:'Store.extraApi',
  // model:'modeapi',
    proxy:{
        type:'ajax',
        url:'https://reqres.in/api/users/2',
        
        },
    
    autoLoad:'true',
})