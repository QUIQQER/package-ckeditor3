/**
 * CKEditor3 for QUIQQER
 *
 * @author www.pcsg.de (Henning Leutz)
 *
 * @module package/ckeditor3/bin/Editor
 * @package package/ckeditor3/bin/Editor
 */

define('package/quiqqer/ckeditor3/bin/Editor', [

    'classes/Editor'

], function(Editor)
{
    console.log( 'package/quiqqer/ckeditor3/bin/Editor' );

    return new Class({

        Implements : [ Editor ],
        Type       : 'QUI.package.CKEditor3',

        options : {

        }
    });

});