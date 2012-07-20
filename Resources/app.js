var bigFatBtn, bigFatBtn2, buttonIcon, buttonIcon2, fontAwesome, fontAwesomeView, icon, icon2, imageFile, label, label2, leftNavBtn, rightNavBtn, tabGroup, window;

// @k0sukey / TiFontAwesome
// https://github.com/k0sukey/TiFontAwesome
fontAwesome = require('/FontAwesome').FontAwesome();

// @atsusy
// http://qiita.com/items/f23caf5f90442d9224a2
fontAwesomeView = require('/fontAwesomeView');

window = Ti.UI.createWindow({
  title: 'Buttons',
  backgroundColor: '#FFF'
});

//以下iOSのシステムボタン部分ではFont Awesomeの文字そのままでは
//使用できないため toImage()で画像化

icon = fontAwesomeView.createFontAwesomeView({
  icon: 'github',
  color: "#fff",
  size: 20
}).toImage();


//LeftNavButton
//Ti.UI.iPhone.SystemButtonStyleを反映してくれないので
//ButtonではなくButtonBarを使用

leftNavBtn = Ti.UI.createButtonBar({
  labels: [
    {
      image: icon
    }
  ],
  backgroundImage: 'none'
});
window.setLeftNavButton(leftNavBtn);


//RightNavButton

rightNavBtn = Ti.UI.createButton({
  image: icon,
  backgroundImage: 'none'
});
window.setRightNavButton(rightNavBtn);


//青ボタン。アイコンとタイトル用のラベルをボタンの上に追加している  

bigFatBtn = Ti.UI.createButton({
  height: 44,
  width: Ti.UI.FILL,
  top: 100,
  left: 10,
  right: 10,
  backgroundImage: 'none',
  backgroundSelectedColor: '#446',
  borderColor: '#444',
  borderRadius: 7,
  borderWidth: 3,
  color: '#fff',
  font: {
    fontFamily: 'Helvetica-Bold',
    fontWeight: 'bold',
    fontSize: 20
  },
  selectedColor: '#777'
});

//Gradientは別個に設定してやらないとエラーが発生する 
bigFatBtn.backgroundGradient = {
  type: 'linear',
  colors: [
    {
      color: '#66f',
      position: 0.0
    }, {
      color: '#44c',
      position: 1.0
    }
  ],
  backFillStart: false
};

//タイトルラベル
label = Ti.UI.createLabel({
  left: 135,
  width: 100,
  height: 20,
  text: 'GitHub',
  font: {
    fontFamily: 'Helvetica-Bold',
    fontWeight: 'bold',
    fontSize: 20
  },
  color: '#FFF'
});
bigFatBtn.add(label);

//アイコン
buttonIcon = Ti.UI.createLabel({
  left: 105,
  top: 10,
  width: 25,
  height: 25,
  text: fontAwesome.icon('github'),
  font: {
    fontFamily: 'FontAwesome',
    fontSize: 24
  },
  color: '#FFF'
});
bigFatBtn.add(buttonIcon);
window.add(bigFatBtn);

//Gradientを設定するとどうやらselected colorが設定できなくなる
//それ以前にselectedGradientなる項目がないためtouchstart,toucheendで
//背景等を変更する

bigFatBtn.addEventListener('touchstart', function(e) {
  label.color = '#777';
  buttonIcon.color = '#777';
  bigFatBtn.backgroundGradient = {
    type: 'linear',
    colors: [
      {
        color: '#44f',
        position: 0.0
      }, {
        color: '#229',
        position: 1.0
      }
    ],
    backFillStart: false
  };
});
bigFatBtn.addEventListener('touchend', function(e) {
  label.color = '#FFF';
  buttonIcon.color = '#FFF';
  bigFatBtn.backgroundGradient = {
    type: 'linear',
    colors: [
      {
        color: '#66f',
        position: 0.0
      }, {
        color: '#44c',
        position: 1.0
      }
    ],
    backFillStart: false
  };
});


//赤ボタン

bigFatBtn2 = Ti.UI.createButton({
  height: 44,
  width: Ti.UI.FILL,
  top: 180,
  backgroundImage: 'none',
  backgroundSelectedColor: '#446',
  color: '#fff',
  font: {
    fontFamily: 'Helvetica-Bold',
    fontWeight: 'bold',
    fontSize: 20
  },
  selectedColor: '#777'
});
bigFatBtn2.backgroundGradient = {
  type: 'linear',
  colors: [
    {
      color: '#900',
      position: 0.0
    }, {
      color: '#600',
      position: 1.0
    }
  ],
  backFillStart: false
};
label2 = Ti.UI.createLabel({
  left: 135,
  width: 100,
  height: 20,
  text: 'GitHub',
  font: {
    fontFamily: 'Helvetica-Bold',
    fontWeight: 'bold',
    fontSize: 20
  },
  color: '#400',
  shadowColor: '#a00',
  shadowOffset: {
    x: 1,
    y: 1
  }
});
bigFatBtn2.add(label2);
buttonIcon2 = Ti.UI.createLabel({
  left: 105,
  top: 10,
  width: 25,
  height: 25,
  text: fontAwesome.icon('github'),
  font: {
    fontFamily: 'FontAwesome',
    fontSize: 24
  },
  color: '#400',
  shadowColor: '#a00',
  shadowOffset: {
    x: 1,
    y: 1
  }
});
bigFatBtn2.add(buttonIcon2);
window.add(bigFatBtn2);
bigFatBtn2.addEventListener('touchstart', function(e) {
  label2.color = '#300';
  buttonIcon2.color = '#300';
  bigFatBtn2.backgroundGradient = {
    type: 'linear',
    colors: [
      {
        color: '#600',
        position: 0.0
      }, {
        color: '#300',
        position: 1.0
      }
    ],
    backFillStart: false
  };
});
bigFatBtn2.addEventListener('touchend', function(e) {
  label2.color = '#400';
  buttonIcon2.color = '#400';
  bigFatBtn2.backgroundGradient = {
    type: 'linear',
    colors: [
      {
        color: '#900',
        position: 0.0
      }, {
        color: '#600',
        position: 1.0
      }
    ],
    backFillStart: false
  };
});


//以下TabGroupではアイコンは直接Blobを受け付けずパスを渡すしかないようなので画像をファイルに保存
//そこまでするなら素直に画像を用意したほうが。。。

imageFile = Titanium.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'icon.jpg');
if (!imageFile.exists()) {
  Ti.API.info(123);
  imageFile.write(icon);
}

tabGroup = Ti.UI.createTabGroup({
  tabs: [
    Ti.UI.createTab({
      window: window,
      icon: imageFile.nativePath,
      title: 'GitHub'
    })
  ]
});
tabGroup.open();