window = Ti.UI.createWindow
  title: 'Buttons'
  backgroundColor: '#FFF'

fontAwesome = require('/FontAwesome').FontAwesome()
fontAwesomeView = require '/fontAwesomeView'

icon = fontAwesomeView.createFontAwesomeView({icon: 'github', color: "#fff", size: 20}).toImage()

leftNavBtn = Ti.UI.createButtonBar
  labels: [image:icon]
  backgroundImage: 'none'
window.setLeftNavButton leftNavBtn

rightNavBtn = Ti.UI.createButton
  image: icon
  backgroundImage: 'none'
window.setRightNavButton rightNavBtn


bigFatBtn = Ti.UI.createButton
  height: 44
  width: Ti.UI.FILL
  top: 100
  left: 10
  right: 10
  backgroundImage: 'none'
  backgroundSelectedColor: '#446'
  borderColor: '#444'
  borderRadius: 7
  borderWidth: 3
  # title: 'GitHub'
  color: '#fff'
  font: 
    fontFamily: 'Helvetica-Bold'
    fontWeight: 'bold'
    fontSize: 20
  selectedColor: '#777'
bigFatBtn.backgroundGradient = 
  type:'linear'
  colors: [{ color: '#66f', position: 0.0 }, { color: '#44c', position: 1.0}]
  backFillStart:false

label = Ti.UI.createLabel
  left: 135
  width: 100
  height:20
  text: 'GitHub'
  font: 
    fontFamily: 'Helvetica-Bold'
    fontWeight: 'bold'
    fontSize: 20
  color: '#FFF'
bigFatBtn.add label

buttonIcon = Ti.UI.createLabel
  left: 105
  top: 10
  width: 25
  height:25
  text: fontAwesome.icon 'github'
  font: 
    fontFamily: 'FontAwesome'
    fontSize: 24
  color: '#FFF'
bigFatBtn.add buttonIcon

window.add bigFatBtn

bigFatBtn.addEventListener 'touchstart', (e) -> 
  label.color = '#777'
  buttonIcon.color = '#777'
  bigFatBtn.backgroundGradient = 
    type:'linear'
    colors: [{ color: '#44f', position: 0.0 }, { color: '#229', position: 1.0}]
    backFillStart:false
  return

bigFatBtn.addEventListener 'touchend', (e) -> 
  label.color = '#FFF'
  buttonIcon.color = '#FFF'
  bigFatBtn.backgroundGradient = 
    type:'linear'
    colors: [{ color: '#66f', position: 0.0 }, { color: '#44c', position: 1.0}]
    backFillStart:false
  return


bigFatBtn2 = Ti.UI.createButton
  height: 44
  width: Ti.UI.FILL
  top: 180
  backgroundImage: 'none'
  backgroundSelectedColor: '#446'
  color: '#fff'
  font: 
    fontFamily: 'Helvetica-Bold'
    fontWeight: 'bold'
    fontSize: 20
  selectedColor: '#777'
bigFatBtn2.backgroundGradient = 
  type:'linear'
  colors: [{ color: '#900', position: 0.0 }, { color: '#600', position: 1.0}]
  backFillStart:false

label2 = Ti.UI.createLabel
  left: 135
  width: 100
  height:20
  text: 'GitHub'
  font: 
    fontFamily: 'Helvetica-Bold'
    fontWeight: 'bold'
    fontSize: 20
  color: '#400'
  shadowColor:'#a00'
  shadowOffset:{x:1,y:1}  
bigFatBtn2.add label2

buttonIcon2 = Ti.UI.createLabel
  left: 105
  top: 10
  width: 25
  height:25
  text: fontAwesome.icon 'github'
  font: 
    fontFamily: 'FontAwesome'
    fontSize: 24
  color: '#400'
  shadowColor:'#a00'
  shadowOffset:{x:1,y:1}  
bigFatBtn2.add buttonIcon2

window.add bigFatBtn2

bigFatBtn2.addEventListener 'touchstart', (e) -> 
  label2.color = '#300'
  buttonIcon2.color = '#300'
  bigFatBtn2.backgroundGradient = 
    type:'linear'
    colors: [{ color: '#600', position: 0.0 }, { color: '#300', position: 1.0}]
    backFillStart:false
  return

bigFatBtn2.addEventListener 'touchend', (e) -> 
  label2.color = '#400'
  buttonIcon2.color = '#400'
  bigFatBtn2.backgroundGradient = 
    type:'linear'
    colors: [{ color: '#900', position: 0.0 }, { color: '#600', position: 1.0}]
    backFillStart:false
  return

imageFile = Titanium.Filesystem.getFile Ti.Filesystem.applicationDataDirectory, 'icon.jpg'
if !imageFile.exists()
  Ti.API.info 123
  imageFile.write icon

tabGroup = Ti.UI.createTabGroup
  tabs: [Ti.UI.createTab {window: window, icon: imageFile.nativePath, title:'GitHub'}]

tabGroup.open()