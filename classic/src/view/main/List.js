/**
 * This view is an example list of people.
 */
Ext.define('AkApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'datalist',

    requires: [
        'AkApp.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    columns: [
        { text: 'Name', dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 },
        { text: 'City', dataIndex: 'city' }

    ],
   

    listeners: {
        select: 'onItemSelected'
    },

   tbar: [
        { xtype: 'tbfill' },
        {
         
            padding: '10px',
            xtype: 'button',
            text: ' ADD Details',
            textAlign: 'center',
            cls: 'x_btn_default_small',
            listeners: {
                click: 'onAddDetailButtonClick'
            }

        },
        { xtype: 'tbfill' },
        {
            padding: '10px',
            xtype: 'button',
            text: ' Delete Details',
            textAlign: 'center',
            cls: 'x_btn_default_small',
            listeners: {
                click: 'onAddDetailButtonClick'
            }

        },
    ]
});
