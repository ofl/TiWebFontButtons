window = Ti.UI.createWindow
  title: 'Buttons'
  toolbar:[]
  backgroundColor: '#FFF'

tabGroup = Ti.UI.createTabGroup
  tabs: [Ti.UI.createTab {window: window}]

tabGroup.open()