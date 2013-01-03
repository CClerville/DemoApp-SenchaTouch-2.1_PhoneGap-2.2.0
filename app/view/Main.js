/**
 * Author: Chris Clerville
 * GitHub: https://github.com/CClerville
 * Date: 1/2/13
 * Time: 9:26 PM
 */

Ext.define('DemoApp.view.Main', {
    extend   : 'Ext.tab.Panel',
    xtype    : 'main',
    requires : [
        'Ext.TitleBar',
        'Ext.Img'
    ],
    config   : {
        tabBarPosition : 'bottom',

        items : [
            {
                xtype   : 'container',
                iconCls : 'home',
                title   : 'Home',
                items   : [
                    {
                        xtype  : 'titlebar',
                        docked : 'top',
                        title  : 'DemoApp',
                        items  : [
                            {
                                xtype    : 'button',
                                itemId   : 'deleteBtn',
                                iconCls  : 'delete',
                                align    : 'right',
                                iconMask : true,
                                ui       : 'decline',
                                action   : 'delete',
                                hidden   : true
                            }

                        ]
                    },
                    {
                        xtype    : 'button',
                        text     : 'Take photo',
                        itemId   : 'photoBtn',
                        margin   : '5 10 0 10',
                        iconMask : true,
                        ui       : 'confirm',
                        action   : 'capture'
                    },
                    {
                        xtype  : 'container',
                        layout : 'fit',
                        margin : '10 0 0 0',
                        itemId : 'imgContainer',
                        items  : [
                            {
                                xtype  : 'image',
                                itemId : 'img',
                                height : 400
                            }
                        ]
                    }
                ]
            }
        ]
    }
});
