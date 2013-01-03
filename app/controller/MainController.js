/**
 * Author: Chris Clerville
 * GitHub: https://github.com/CClerville
 * Date: 1/2/13
 * Time: 9:25 PM
 */

Ext.define('DemoApp.controller.MainController', {
    extend : 'Ext.app.Controller',

    config : {
        control : {
            "button[action=capture]" : {
                tap : 'capturePhoto'
            },
            "button[action=delete]"  : {
                tap : 'deletePhoto'
            }
        },

        refs : {
            photoBtn     : '#photoBtn',
            Img          : '#img',
            deleteBtn    : '#deleteBtn',
            imgContainer : '#imgContainer'
        }
    },

    deletePhoto : function () {
        var me = this,
            img = me.getImg(),
            deleteBtn = me.getDeleteBtn();

        img.destroy();
        me.createImg(); //replace destroyed img component
        deleteBtn.setHidden(true);
    },

    // function to replace destroyed image
    createImg   : function () {
        var me = this,
            imgContainer = me.getImgContainer(),
            img;

        img = {
            xtype  : 'image',
            itemId : 'img',
            height : 400
        };

        imgContainer.add(img);

        // return the newly added image
        return imgContainer.items[0];
    },

    capturePhoto : function () {
        var me = this,
            pictureSource, // picture source
            destinationType, // sets the format of returned value
            deleteBtn = me.getDeleteBtn(),
            photoComponent = ( me.getImg() ? me.getImg() : me.createImg() );

        // Wait for Cordova to connect with the device
        document.addEventListener("deviceready", onDeviceReady, false);

        // Take picture using device camera and retrieve image as base64-encoded string
        navigator.camera.getPicture(
            onPhotoDataSuccess,
            onFail, {
                quality : 50, destinationType : destinationType.DATA_URL
            });

        /*-------------- Helper Functions -------------- */
        function onDeviceReady () {
            pictureSource = navigator.camera.PictureSourceType;
            destinationType = navigator.camera.DestinationType;
        }

        function onPhotoDataSuccess (imageData) {
            var imgSrc = 'data:image/jpeg;base64,'.concat(imageData);

            photoComponent.setSrc(imgSrc);

            //hide delete button
            deleteBtn.setHidden(false);
        }

        // Called if something bad happens.
        function onFail (message) {
            alert('Failed because: ' + message);
        }
    }
});