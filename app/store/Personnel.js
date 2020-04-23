Ext.define('AkApp.store.Personnel', {
    extend: 'Ext.data.Store',
    alias: 'store.personnel',

    model: 'AkApp.model.Personnel',

    data: {
        items: [
            { name: 'Amit', email: "arai@gmail.com", phone: "555-111-1111", city: "Patna" },
            { name: 'Rajan', email: "rajansingh@gmail.com", phone: "555-222-2222", city: "Gaya" },
            { name: 'Bharat', email: "bharat.kumar1@gmail.com", phone: "555-333-3333", city: "Bengalury" },
            { name: 'Ashish', email: "ashishgaya12@gmail.com", phone: "555-444-4444", city: "Chennai" }
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
