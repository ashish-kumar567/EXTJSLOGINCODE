Ext.define('AkApp.model.Formstore', {
    extend: 'AkApp.model.Base',
    extend: 'Ext.data.Model',
   // idProperty: 'studentname',

    
    autoLoad : true,
    autoSync: true,
    fields: [

    //  'studentname','fathersname','mothersname','dateofbirth','class','feepaid','extracircullar','id','email'
        
        {name:'studentname', type:'string'},
        {name: 'fathersname', type:'string'},
        {name:  'mothersname', type:'string'},
        {name: 'dateofbirth',type:'string'},
        {name: 'class', type:'string'},
         {name: 'feepaid', type:'int',
        
         convert: function(feepaid, row) {
            return (feepaid == null) ? null : parseInt(feepaid);
        }
    },
            {name: 'extracircullar', type:'string'}
     ]
});
