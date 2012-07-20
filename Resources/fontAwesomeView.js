var fontAwesome = require('/FontAwesome').FontAwesome();

var convertVerticalAlignText = function(text){
    if(text === 'top'){
        return Ti.UI.TEXT_VERTICAL_ALIGNMENT_TOP;
    }
    if(text === 'middle'){
        return Ti.UI.TEXT_VERTICAL_ALIGNMENT_CENTER;
    }
    return Ti.UI.TEXT_VERTICAL_ALIGNMENT_BOTTOM;
}

var createFontAwesomeView = function(args){
    args = args || {};

    args.color = args.color || 'black';
    args.font = {
        fontFamily:'FontAwesome',
        fontSize:args.size || 100
    }
    args.width = args.height = args.font.fontSize * 1.25; // magic number
    args.value = fontAwesome.icon(args.icon || 'github');
    args.textAlign = 'center';
    args.verticalAlign = convertVerticalAlignText(args.verticalAlign || 'bottom');
    args.enabled = false;

    var textField = Ti.UI.createTextField(args);
    var selectedColor = args.selectedColor || textField.color;
    var normalColor = textField.color;

    textField.addEventListener('touchstart', function(e){
        textField.color = selectedColor;
    });

    textField.addEventListener('touchend', function(e){
        textField.color = normalColor;
    });

    return textField;
}

var icons = [];
for(var icon in fontAwesome.charcode){
    icons.push(icon);
}

module.exports = {
    createFontAwesomeView : createFontAwesomeView,
    icons : icons
}