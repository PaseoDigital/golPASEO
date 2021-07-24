(function(){
	var script = {
 "mouseWheelEnabled": true,
 "downloadEnabled": false,
 "definitions": [{
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "Container_7DE3A59A_6911_E2E0_41D8_A93A28426D33",
 "paddingLeft": 50,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 50,
 "scrollBarColor": "#0069A3",
 "gap": 0,
 "width": "35%",
 "children": [
  "this.Container_7DE3459A_6911_E2E0_41CE_F97D3E361A8D"
 ],
 "horizontalAlign": "left",
 "minHeight": 1,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "minWidth": 1,
 "class": "Container",
 "scrollBarOpacity": 0.51,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "layout": "vertical",
 "overflow": "visible",
 "shadow": false,
 "paddingTop": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "data": {
  "name": "-right"
 }
},
{
 "class": "PlayList",
 "id": "playList_C36911EA_FAA6_CF87_41C5_BBC2DBEE6F5B",
 "items": [
  {
   "media": "this.video_CE14519E_FAAA_4FBF_41DE_DE0D2D396E77",
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_C36911EA_FAA6_CF87_41C5_BBC2DBEE6F5B, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_C36911EA_FAA6_CF87_41C5_BBC2DBEE6F5B, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ]
},
{
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "Container_2E6121EE_347D_0EFC_41AD_FCF661FCEEBC",
 "width": 115,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "right": "0%",
 "paddingLeft": 0,
 "children": [
  "this.Container_2E6031ED_347D_0EFC_41A1_12EC3C0472FF",
  "this.Container_2E6011ED_347D_0EFF_41C9_5AC77536D968"
 ],
 "horizontalAlign": "left",
 "gap": 10,
 "minHeight": 400,
 "borderSize": 0,
 "top": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "height": 641,
 "layout": "absolute",
 "data": {
  "name": "--- SETTINGS"
 },
 "shadow": false
},
{
 "class": "MediaAudio",
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_D92BA52C_F999_D483_41E4_3D475D9DF052.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_D92BA52C_F999_D483_41E4_3D475D9DF052.ogg"
 },
 "id": "audio_D92BA52C_F999_D483_41E4_3D475D9DF052",
 "data": {
  "label": "car trunk open"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 2.65,
  "pitch": -15.28
 },
 "id": "camera_C017631A_FAA6_CC87_41DE_CAD6BBF40469",
 "manualZoomSpeed": 2
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundOpacity": 1,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "X"
 },
 "borderRadius": 0,
 "id": "Button_775D3775_6F10_A324_41B1_8092A2023E17",
 "shadowBlurRadius": 6,
 "width": 50,
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "maxHeight": 50,
 "horizontalAlign": "center",
 "right": 20,
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "fontFamily": "Arial",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 50,
 "borderSize": 0,
 "gap": 5,
 "iconURL": "skin/Button_775D3775_6F10_A324_41B1_8092A2023E17.png",
 "rollOverBackgroundColor": [
  "#C50A01"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#E7392B"
 ],
 "mode": "push",
 "minWidth": 50,
 "top": 20,
 "fontSize": "1.29vmin",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "class": "Button",
 "paddingBottom": 0,
 "iconHeight": 32,
 "fontStyle": "normal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_7A542551_6EFF_A77C_41BD_77B516563B0F, false, 0, this.effect_7874758E_6EF0_67E5_41D8_CFAFDB1F2DCE, 'hideEffect', false)",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "height": 50,
 "layout": "horizontal",
 "iconWidth": 32,
 "shadowSpread": 1,
 "paddingTop": 0,
 "maxWidth": 50,
 "fontWeight": "normal"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "IconButton_2E6021ED_347D_0EFF_41BD_84BE6BEAB908",
 "iconURL": "skin/IconButton_2E6021ED_347D_0EFF_41BD_84BE6BEAB908.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 60,
 "horizontalAlign": "center",
 "width": 60,
 "minHeight": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "toggle",
 "click": "if(!this.Container_2E6011ED_347D_0EFF_41C9_5AC77536D968.get('visible')){ this.setComponentVisibility(this.Container_2E6011ED_347D_0EFF_41C9_5AC77536D968, true, 0, this.effect_E78445AC_ED52_6962_41E7_337128A4BA87, 'showEffect', false) } else { this.setComponentVisibility(this.Container_2E6011ED_347D_0EFF_41C9_5AC77536D968, false, 0, this.effect_E78445AC_ED52_6962_41E5_44E0250686CD, 'hideEffect', false) }",
 "class": "IconButton",
 "paddingBottom": 0,
 "propagateClick": false,
 "pressedIconURL": "skin/IconButton_2E6021ED_347D_0EFF_41BD_84BE6BEAB908_pressed.png",
 "verticalAlign": "middle",
 "data": {
  "name": "settings button"
 },
 "height": 60,
 "pressedRollOverIconURL": "skin/IconButton_2E6021ED_347D_0EFF_41BD_84BE6BEAB908_pressed.png",
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 0,
  "pitch": -29.39
 },
 "id": "camera_C3D26224_FAA6_CC83_41D6_EAB3F1C13C70",
 "manualZoomSpeed": 2
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 7.35,
  "pitch": -12.86
 },
 "id": "camera_C6510518_FAA6_3484_41EF_1F2E59EBDC32",
 "manualZoomSpeed": 2
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 0.62,
  "pitch": -20.13
 },
 "id": "panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_camera",
 "manualZoomSpeed": 2
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -0.58,
  "pitch": -9.51
 },
 "id": "panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_camera",
 "manualZoomSpeed": 2
},
{
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "Container_2E6011ED_347D_0EFF_41C9_5AC77536D968",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "right": "0%",
 "width": "91.304%",
 "children": [
  "this.IconButton_2E6041ED_347D_0EFF_41BF_3C82AFA80CBB",
  "this.IconButton_2E60B1ED_347D_0EFF_41C3_3E7369236DCE",
  "this.IconButton_2E60A1ED_347D_0EFF_41BC_A36ED8CE8127",
  "this.IconButton_2E6091ED_347D_0EFF_41C6_E6D253232DA1",
  "this.IconButton_2E6081ED_347D_0EFF_41AA_ECC3AD42DC4D",
  "this.IconButton_2E60F1ED_347D_0EFF_41C9_4BA017DDD347",
  "this.IconButton_2E60E1EE_347D_0EFC_41C3_A8DD2E2819ED"
 ],
 "horizontalAlign": "center",
 "gap": 3,
 "minHeight": 1,
 "borderSize": 0,
 "bottom": "0%",
 "contentOpaque": false,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "minWidth": 1,
 "layout": "vertical",
 "visible": false,
 "data": {
  "name": "down"
 },
 "shadow": false,
 "scrollBarWidth": 10,
 "height": "85.959%"
},
{
 "duration": 500,
 "class": "FadeOutEffect",
 "id": "effect_7B8186D4_6EF3_A564_41D1_26B2B20529FE",
 "easing": "linear"
},
{
 "duration": 5000,
 "id": "album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_5",
 "width": 1920,
 "class": "Photo",
 "thumbnailUrl": "media/album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_5_t.jpg",
 "image": {
  "levels": [
   {
    "url": "media/album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_5.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1280
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_C77AA640_FAA6_3484_41C2_9A192573F1D4",
 "manualZoomSpeed": 2
},
{
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "data": {
  "name": "Global"
 },
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "Container_7DE3E59A_6911_E2E0_41D7_0925C3250BD2",
 "left": "8%",
 "shadowBlurRadius": 25,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "right": "8%",
 "children": [
  "this.Container_7DE3959A_6911_E2E0_41D2_9D01577E4575",
  "this.Container_7DE3A59A_6911_E2E0_41D8_A93A28426D33"
 ],
 "shadowColor": "#000000",
 "horizontalAlign": "left",
 "gap": 0,
 "minHeight": 1,
 "borderSize": 0,
 "shadowHorizontalLength": 0,
 "shadowOpacity": 0.3,
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "top": "10%",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "horizontal",
 "shadowSpread": 1,
 "paddingTop": 0,
 "overflow": "scroll"
},
{
 "hfov": 360,
 "label": "Perspectiva 2 - Puertas Cerradas",
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FDD3B010_F261_EB1C_41ED_560070399204",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 95,
 "vfov": 180,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_t.jpg",
 "pitch": 0,
 "id": "panorama_E258E3A7_F262_AD03_41E0_B75DA340C271",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_EB337CA2_F2E7_9B3C_41DF_1D1252D2587D",
  "this.overlay_EB364115_F2E6_AD07_41E0_24D3EFDF9AC9",
  "this.overlay_EB032D03_F2E2_B503_41D5_E114E2C32F0B",
  "this.overlay_E8927AC7_F97A_DD8C_41D9_BEBB81295333",
  "this.overlay_E8F9CC59_F966_3484_41E5_AE2E1710D6A9",
  "this.overlay_E8E63C59_F966_3484_41E2_91C404475A27",
  "this.overlay_E8E62C59_F966_3484_41A8_A5B658B883FD",
  "this.overlay_E8E61C59_F966_3484_41AB_C10EE91E5D40",
  "this.overlay_EFA57BC9_F99A_D385_41E5_562AF155A012",
  "this.overlay_EFA54BC9_F99A_D385_41B7_6EBD1CBF292A",
  "this.panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_tcap0",
  "this.overlay_DEE81434_F999_F48C_41A3_24C670C864E3"
 ]
},
{
 "class": "PlayList",
 "id": "playList_C2BC4169_FAA6_CC85_41E3_39A1ACF950AF",
 "items": [
  {
   "media": "this.album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA",
   "class": "PhotoAlbumPlayListItem",
   "begin": "this.loopAlbum(this.playList_C2BC4169_FAA6_CC85_41E3_39A1ACF950AF, 0)",
   "player": "this.ViewerAreaLabeled_3AEAC6FC_3514_3866_41BA_E46727E47B58PhotoAlbumPlayer"
  }
 ]
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "Image_6924E557_649A_33AC_41BA_A1E22386BC22",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 130,
 "horizontalAlign": "center",
 "right": "0%",
 "url": "skin/Image_6924E557_649A_33AC_41BA_A1E22386BC22.png",
 "minHeight": 100,
 "borderSize": 0,
 "bottom": "0%",
 "minWidth": 1000,
 "class": "Image",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "bottom",
 "scaleMode": "fit_to_height",
 "data": {
  "name": "img "
 },
 "height": 100,
 "shadow": false,
 "paddingTop": 0
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 0.62,
  "pitch": -15.09
 },
 "id": "camera_C1BCF4FD_FAA6_357C_41D2_6D1AD2C44A28",
 "manualZoomSpeed": 2
},
{
 "duration": 5000,
 "id": "album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_8",
 "width": 1920,
 "class": "Photo",
 "thumbnailUrl": "media/album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_8_t.jpg",
 "image": {
  "levels": [
   {
    "url": "media/album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_8.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1280
},
{
 "hfov": 360,
 "label": "Perspectiva 3 - Puertas Cerradas",
 "id": "panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E258E3A7_F262_AD03_41E0_B75DA340C271",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FD013EBF_F261_9704_41E1_A65F3D829440",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FD013EBF_F261_9704_41E1_A65F3D829440",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FD013EBF_F261_9704_41E1_A65F3D829440",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FD013EBF_F261_9704_41E1_A65F3D829440",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 95,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_t.jpg",
 "pitch": 0,
 "vfov": 180,
 "hfovMin": "120%",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_E5D32269_F9A9_CC85_41D2_2E9CB70D1463",
  "this.overlay_E5D31269_F9A9_CC85_41E1_EFC8A961B154",
  "this.overlay_E5D30269_F9A9_CC85_41E3_38760716583C",
  "this.overlay_E5D37269_F9A9_CC85_41DC_B8AEF9DF6FDA",
  "this.overlay_E5D36269_F9A9_CC85_41E5_D065B0472731",
  "this.overlay_E5D35269_F9A9_CC85_41E8_CF216C5E727B",
  "this.overlay_E5D34269_F9A9_CC85_41E1_1C27487303C2",
  "this.overlay_E5D3B269_F9A9_CC85_41E6_6116D02B807A",
  "this.panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_tcap0",
  "this.overlay_DEC5D39C_F99E_53BC_41E2_7DA41B9E75E3"
 ]
},
{
 "duration": 5000,
 "id": "album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_10",
 "width": 1920,
 "class": "Photo",
 "thumbnailUrl": "media/album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_10_t.jpg",
 "image": {
  "levels": [
   {
    "url": "media/album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_10.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1280
},
{
 "duration": 5000,
 "id": "album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_7",
 "width": 1920,
 "class": "Photo",
 "thumbnailUrl": "media/album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_7_t.jpg",
 "image": {
  "levels": [
   {
    "url": "media/album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_7.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1280
},
{
 "rotationY": 0,
 "hfov": 5.08,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "class": "PopupPanoramaOverlay",
 "id": "popup_D809E8D5_F9E6_5D8C_41C3_42A9322DB424",
 "popupMaxHeight": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_D809E8D5_F9E6_5D8C_41C3_42A9322DB424_0_0.jpg",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 761
   },
   {
    "url": "media/popup_D809E8D5_F9E6_5D8C_41C3_42A9322DB424_0_1.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 389
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -13.45,
 "popupMaxWidth": "95%",
 "yaw": -23.21,
 "showDuration": 500
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 8.58,
  "pitch": -17.45
 },
 "id": "panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_camera",
 "manualZoomSpeed": 2
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 0.62,
  "pitch": -20.13
 },
 "id": "camera_C3B1D2A7_FAA6_CD8D_41E7_F2F8539E561B",
 "manualZoomSpeed": 2
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_camera",
 "manualZoomSpeed": 2
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 0.62,
  "pitch": -15.09
 },
 "id": "camera_C1AE550A_FAA6_3484_41E0_329C22A87B1B",
 "manualZoomSpeed": 2
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 10.1,
  "pitch": -14.69
 },
 "id": "camera_C0397355_FAA6_CC8D_41E1_001CF5171A80",
 "manualZoomSpeed": 2
},
{
 "rotationY": 0,
 "hfov": 2.91,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "class": "PopupPanoramaOverlay",
 "id": "popup_F77333EA_F96F_D387_41EC_E704BCC1DC1C",
 "popupMaxHeight": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_F77333EA_F96F_D387_41EC_E704BCC1DC1C_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -18.46,
 "popupMaxWidth": "95%",
 "yaw": 21.66,
 "showDuration": 500
},
{
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "Container_685CC558_649E_53A4_41C3_031C34B7328A",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "gap": 10,
 "width": "100%",
 "children": [
  "this.Image_6924E557_649A_33AC_41BA_A1E22386BC22",
  "this.Container_1830289D_3415_1D5C_41BC_8E6011E2CDF1"
 ],
 "horizontalAlign": "left",
 "minHeight": 1,
 "borderSize": 0,
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "height": 144,
 "layout": "absolute",
 "data": {
  "name": "---BUTTON SET"
 },
 "shadow": false,
 "scrollBarWidth": 10
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 0,
  "pitch": -29.39
 },
 "id": "camera_C19894E0_FAA6_3584_41E3_9A5B8521C5EE",
 "manualZoomSpeed": 2
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -0.92,
  "pitch": -19.29
 },
 "id": "camera_C3A802C4_FAA6_CD83_41EA_9FBEF0C8FBE1",
 "manualZoomSpeed": 2
},
{
 "duration": 5000,
 "id": "album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_3",
 "width": 1920,
 "class": "Photo",
 "thumbnailUrl": "media/album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_3_t.jpg",
 "image": {
  "levels": [
   {
    "url": "media/album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_3.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1280
},
{
 "class": "MediaAudio",
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_E8689391_F97A_3384_41EB_82C0732165CD.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_E8689391_F97A_3384_41EB_82C0732165CD.ogg"
 },
 "id": "audio_E8689391_F97A_3384_41EB_82C0732165CD",
 "data": {
  "label": "car door close"
 }
},
{
 "cursor": "hand",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "IconButton_253A0D7D_3513_E866_41BC_277EBE69ACB4",
 "iconURL": "skin/IconButton_253A0D7D_3513_E866_41BC_277EBE69ACB4.png",
 "width": 70,
 "paddingRight": 0,
 "maxHeight": 60,
 "horizontalAlign": "center",
 "right": "1%",
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_253A0D7D_3513_E866_41BC_277EBE69ACB4_rollover.png",
 "minHeight": 40,
 "borderSize": 0,
 "top": "45.9%",
 "transparencyActive": false,
 "bottom": "45.9%",
 "minWidth": 40,
 "mode": "push",
 "class": "IconButton",
 "paddingBottom": 0,
 "propagateClick": false,
 "pressedIconURL": "skin/IconButton_253A0D7D_3513_E866_41BC_277EBE69ACB4_pressed.png",
 "verticalAlign": "middle",
 "data": {
  "name": ">"
 },
 "pressedRollOverIconURL": "skin/IconButton_253A0D7D_3513_E866_41BC_277EBE69ACB4_pressed.png",
 "shadow": false,
 "paddingTop": 0,
 "maxWidth": 60
},
{
 "hfov": 360,
 "label": "Perspectiva 3 - Puertas Cerradas",
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E258E3A7_F262_AD03_41E0_B75DA340C271",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FD013EBF_F261_9704_41E1_A65F3D829440",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FD013EBF_F261_9704_41E1_A65F3D829440",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FD013EBF_F261_9704_41E1_A65F3D829440",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FD013EBF_F261_9704_41E1_A65F3D829440",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 95,
 "vfov": 180,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_t.jpg",
 "pitch": 0,
 "id": "panorama_FDD3B010_F261_EB1C_41ED_560070399204",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_E88D4310_F966_CC83_41EE_43ECBC9CB654",
  "this.overlay_E88D5310_F966_CC83_41B3_F544E6EDCD54",
  "this.overlay_E88D6310_F966_CC83_41EA_DAF2EA903184",
  "this.overlay_EA5FEB3E_F96B_DCFF_41CF_C6360E397E33",
  "this.overlay_EA5FFB3E_F96B_DCFF_41CD_CDDECF47E180",
  "this.overlay_ED434C86_F96A_558C_41CB_D8A5CC95EE05",
  "this.overlay_EC0CCDD6_F9A6_D78C_41B8_C23BF0BF0650",
  "this.overlay_EC0CDDD6_F9A6_D78C_41E2_AB4F79FEB6EE",
  "this.panorama_FDD3B010_F261_EB1C_41ED_560070399204_tcap0",
  "this.overlay_DE8EE5CD_F99E_379D_4174_0B47DD2622D3"
 ]
},
{
 "class": "PlayList",
 "change": "if(event.source.get('selectedIndex') != -1) { this.setComponentVisibility(this.Container_7A542551_6EFF_A77C_41BD_77B516563B0F, false, 0, this.effect_7B8186D4_6EF3_A564_41D1_26B2B20529FE, 'hideEffect', false) }",
 "items": [
  {
   "media": "this.panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_camera"
  },
  {
   "media": "this.panorama_FF789D13_F263_951C_41D9_105C8727681A",
   "class": "PanoramaPlayListItem",
   "begin": "this.playGlobalAudio(this.audio_E5FE14CB_F2E2_6B0C_41DB_0A9E661166B9); this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FF789D13_F263_951C_41D9_105C8727681A_camera"
  },
  {
   "media": "this.panorama_E258E3A7_F262_AD03_41E0_B75DA340C271",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_camera"
  },
  {
   "media": "this.panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF",
   "class": "PanoramaPlayListItem",
   "begin": "this.playGlobalAudio(this.audio_EB4A4A30_F97F_FC84_41E2_ECC90EA86B4A); this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_camera"
  },
  {
   "media": "this.panorama_FDD3B010_F261_EB1C_41ED_560070399204",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FDD3B010_F261_EB1C_41ED_560070399204_camera"
  },
  {
   "media": "this.panorama_FD013EBF_F261_9704_41E1_A65F3D829440",
   "class": "PanoramaPlayListItem",
   "begin": "this.playGlobalAudio(this.audio_EB4A4A30_F97F_FC84_41E2_ECC90EA86B4A); this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FD013EBF_F261_9704_41E1_A65F3D829440_camera"
  },
  {
   "media": "this.panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_camera"
  },
  {
   "media": "this.panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77",
   "class": "PanoramaPlayListItem",
   "begin": "this.playGlobalAudio(this.audio_D92BA52C_F999_D483_41E4_3D475D9DF052); this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_camera"
  },
  {
   "media": "this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_camera"
  },
  {
   "media": "this.album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA",
   "class": "PhotoAlbumPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist, 9, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist"
},
{
 "class": "PhotoAlbumPlayer",
 "id": "ViewerAreaLabeled_3AEAC6FC_3514_3866_41BA_E46727E47B58PhotoAlbumPlayer",
 "buttonNext": "this.IconButton_253A0D7D_3513_E866_41BC_277EBE69ACB4",
 "buttonPrevious": "this.IconButton_26A59E96_3534_28A2_419C_6C5ADD7D1CAC",
 "viewerArea": "this.ViewerAreaLabeled_3AEAC6FC_3514_3866_41BA_E46727E47B58"
},
{
 "rotationY": 0,
 "hfov": 2.25,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "class": "PopupPanoramaOverlay",
 "id": "popup_C97790FD_FAFA_CD7D_41EC_D7C599F903D4",
 "popupMaxHeight": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_C97790FD_FAFA_CD7D_41EC_D7C599F903D4_0_0.jpg",
    "width": 864,
    "class": "ImageResourceLevel",
    "height": 739
   },
   {
    "url": "media/popup_C97790FD_FAFA_CD7D_41EC_D7C599F903D4_0_1.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 437
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -25.79,
 "popupMaxWidth": "95%",
 "yaw": 8.38,
 "showDuration": 500
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -0.92,
  "pitch": -26.63
 },
 "id": "camera_C393327D_FAA6_CD7D_41E3_1648B37F7361",
 "manualZoomSpeed": 2
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "Image_7DE3B59A_6911_E2E0_41D3_E1AF7DF208C7",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "right": "0%",
 "url": "skin/Image_7DE3B59A_6911_E2E0_41D3_E1AF7DF208C7.jpg",
 "minHeight": 1,
 "borderSize": 0,
 "minWidth": 1,
 "top": "0%",
 "class": "Image",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "height": "100%",
 "shadow": false,
 "paddingTop": 0
},
{
 "class": "PlayList",
 "id": "playList_C34591AC_FAA6_CF83_41B1_A51119FC17D6",
 "items": [
  {
   "media": "this.panorama_EF7AF964_F99E_7C83_41EA_12427C876877",
   "class": "PanoramaPlayListItem",
   "begin": "this.playGlobalAudio(this.audio_E6F800D3_F99A_4D85_41E3_1B31EF171022)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EF7AF964_F99E_7C83_41EA_12427C876877_camera"
  }
 ]
},
{
 "duration": 5000,
 "id": "album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_12",
 "width": 1920,
 "class": "Photo",
 "thumbnailUrl": "media/album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_12_t.jpg",
 "image": {
  "levels": [
   {
    "url": "media/album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_12.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1280
},
{
 "textDecoration": "none",
 "backgroundOpacity": 0,
 "data": {
  "name": "360 views"
 },
 "borderRadius": 0,
 "height": "100%",
 "id": "Button_6B3DCC00_647A_DF9A_41D5_DC120403F72A",
 "paddingLeft": 0,
 "paddingRight": 0,
 "fontFamily": "Akhand-Bold",
 "horizontalAlign": "center",
 "gap": 5,
 "width": 110,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "borderSize": 0,
 "mode": "push",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "fontSize": "19px",
 "class": "Button",
 "rollOverFontColor": "#FF0000",
 "paddingBottom": 0,
 "iconHeight": 32,
 "label": "PERSPECTIVAS",
 "fontStyle": "normal",
 "shadowBlurRadius": 6,
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_7A542551_6EFF_A77C_41BD_77B516563B0F, true, 0, this.effect_78B5ED2F_6F10_6723_41CB_017231EE0D8C, 'showEffect', false)",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "layout": "horizontal",
 "iconWidth": 32,
 "shadowSpread": 1,
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 7.35,
  "pitch": -12.86
 },
 "id": "camera_C386628B_FAA6_CD85_41C6_35D01EEA7330",
 "manualZoomSpeed": 2
},
{
 "backgroundOpacity": 0.8,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "Container_3A863D9B_3513_E8A1_41BD_38320457DF78",
 "left": "0%",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "right": "0%",
 "children": [
  "this.Container_3A26EF53_3514_E9A2_4159_FC2DDA226A54"
 ],
 "horizontalAlign": "left",
 "gap": 10,
 "minHeight": 1,
 "borderSize": 0,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "visible": false,
 "overflow": "scroll",
 "paddingTop": 0,
 "data": {
  "name": "---PHOTOALBUM"
 }
},
{
 "hfov": 360,
 "label": "Perspectiva 1 - Capot Cerrado",
 "hfovMin": "130%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FF789D13_F263_951C_41D9_105C8727681A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FF789D13_F263_951C_41D9_105C8727681A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E258E3A7_F262_AD03_41E0_B75DA340C271",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FDD3B010_F261_EB1C_41ED_560070399204",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 95,
 "vfov": 180,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_t.jpg",
 "pitch": 0,
 "id": "panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_E2AFAFFB_F26E_9503_41ED_BDC0976D6128",
  "this.overlay_E6E7EDD6_F22E_9505_41B1_D279213FEF79",
  "this.overlay_EA7821D5_F23F_ED04_41E2_DAF275DD3F96",
  "this.overlay_E883F893_F223_BB03_41B9_0B01E2D0B001",
  "this.overlay_E5FBAA3D_F226_7F04_41BB_E734DEC14B9E",
  "this.overlay_E70845D4_F221_9504_41E5_0F614EB101FC",
  "this.overlay_EB301E21_F223_B73F_41C7_17E6669FA25F",
  "this.overlay_EA13F1EC_F222_AD04_41E9_6776A6A37506",
  "this.overlay_EB8BC1B7_F2E1_AD03_41DE_23E48705A457",
  "this.popup_EB22D5D2_F2E2_951C_41A0_152FBB529ECA",
  "this.overlay_EC3AA536_F99E_348C_41D6_1F0E4957A1EE",
  "this.overlay_ECBDA131_F99E_CC84_41D0_B18E495731CD",
  "this.overlay_E5BEFB76_F9A6_3C8F_41BC_80715E498940",
  "this.overlay_D81DC903_F9E6_5C84_41E4_D783ADBFF1ED",
  "this.overlay_D81DD903_F9E6_5C84_41E3_14F1DC89A71B",
  "this.popup_D808F8D4_F9E6_5D8C_41EA_1736D7CBB879",
  "this.popup_D809E8D5_F9E6_5D8C_41C3_42A9322DB424",
  "this.panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_tcap0",
  "this.overlay_CE69D9F5_FAAB_FF8C_41B7_117E76BB49D8",
  "this.overlay_C2165607_FAAE_548D_41ED_C4CA80C98AB4",
  "this.overlay_CCD8F7DE_FAAE_33BC_41EE_BE5C03660B64"
 ]
},
{
 "rotationY": 0,
 "hfov": 4.19,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "class": "PopupPanoramaOverlay",
 "id": "popup_CF3DF76E_FAA7_D49F_41ED_5B969ECE0D8A",
 "popupMaxHeight": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_CF3DF76E_FAA7_D49F_41ED_5B969ECE0D8A_0_0.jpg",
    "width": 918,
    "class": "ImageResourceLevel",
    "height": 640
   },
   {
    "url": "media/popup_CF3DF76E_FAA7_D49F_41ED_5B969ECE0D8A_0_1.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 356
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -49.61,
 "popupMaxWidth": "95%",
 "yaw": -163.28,
 "showDuration": 500
},
{
 "class": "PhotoAlbumPlayer",
 "id": "MainViewerPhotoAlbumPlayer",
 "buttonNext": "this.IconButton_253A0D7D_3513_E866_41BC_277EBE69ACB4",
 "buttonPrevious": "this.IconButton_26A59E96_3534_28A2_419C_6C5ADD7D1CAC",
 "viewerArea": "this.MainViewer"
},
{
 "class": "VideoPlayer",
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 1.84,
  "pitch": -13.78
 },
 "id": "camera_C1E9C4D1_FAA6_3584_41D5_54DA3C27BB2E",
 "manualZoomSpeed": 2
},
{
 "hfov": 360,
 "label": "Perspectiva 4 - Ba\u00fal Cerrado",
 "id": "panorama_EF7AF964_F99E_7C83_41EA_12427C876877",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FDD3B010_F261_EB1C_41ED_560070399204",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 95,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_t.jpg",
 "pitch": 0,
 "vfov": 180,
 "hfovMin": "120%",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_E5296028_F99A_4C83_41E2_390ED9BFC50C",
  "this.overlay_E5297028_F99A_4C83_41D7_5044466D9432",
  "this.overlay_E5618977_F99A_3C8D_41EB_37C5837BE660",
  "this.overlay_E5617978_F99A_3C83_41B3_16EDBEF1D8E7",
  "this.overlay_E5616978_F99A_3C83_41DE_C72FA436C6B9",
  "this.panorama_EF7AF964_F99E_7C83_41EA_12427C876877_tcap0",
  "this.overlay_DEDAE03B_F99E_4C84_41D5_97B58254BBE8"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -0.64,
  "pitch": -20.37
 },
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "duration": 3000,
   "class": "TargetRotationalCameraDisplayMovement",
   "targetHfov": 80,
   "easing": "cubic_in_out",
   "targetStereographicFactor": 0,
   "targetPitch": -20.37
  }
 ],
 "id": "panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_camera",
 "displayOriginPosition": {
  "stereographicFactor": 1,
  "class": "RotationalCameraDisplayPosition",
  "hfov": 165,
  "yaw": -0.64,
  "pitch": -90
 },
 "manualZoomSpeed": 2
},
{
 "label": "Team Diesa - TCR 2018",
 "id": "video_CC278578_FAAE_3483_41D5_F6B2E66218A4",
 "width": 1280,
 "class": "Video",
 "thumbnailUrl": "media/video_CC278578_FAAE_3483_41D5_F6B2E66218A4_t.jpg",
 "loop": false,
 "scaleMode": "fit_inside",
 "height": 720,
 "video": {
  "width": 1144,
  "class": "VideoResource",
  "mp4Url": "media/video_CC278578_FAAE_3483_41D5_F6B2E66218A4.mp4",
  "height": 644
 }
},
{
 "shadowVerticalLength": 0,
 "backgroundOpacity": 1,
 "data": {
  "name": "Global"
 },
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "Container_7A549551_6EFF_A77C_41D5_C1ADFF60CE66",
 "left": "24%",
 "shadowBlurRadius": 25,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "right": "24%",
 "children": [
  "this.Container_7A547551_6EFF_A77C_41C6_43235B32276F",
  "this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358"
 ],
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "gap": 10,
 "minHeight": 1,
 "borderSize": 0,
 "shadowHorizontalLength": 0,
 "shadowOpacity": 0.3,
 "bottom": "18%",
 "contentOpaque": false,
 "minWidth": 1,
 "top": "18%",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "shadow": true,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "layout": "absolute",
 "shadowSpread": 1,
 "paddingTop": 0,
 "overflow": "visible"
},
{
 "duration": 5000,
 "id": "album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_0",
 "width": 1920,
 "class": "Photo",
 "thumbnailUrl": "media/album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_0_t.jpg",
 "image": {
  "levels": [
   {
    "url": "media/album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1280
},
{
 "duration": 500,
 "class": "FadeInEffect",
 "id": "effect_757D2F2A_6F10_A32C_41C3_CCBEB7AD57F6",
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 0.11,
  "pitch": -16.87
 },
 "id": "panorama_EF7AF964_F99E_7C83_41EA_12427C876877_camera"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "height": "98%",
 "id": "Image_1FC43E22_342D_1564_41BB_A63B6F19A750",
 "paddingLeft": 0,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "width": 7,
 "url": "skin/Image_1FC43E22_342D_1564_41BB_A63B6F19A750.png",
 "minHeight": 1,
 "borderSize": 0,
 "class": "Image",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "scaleMode": "fit_inside",
 "data": {
  "name": "-"
 },
 "minWidth": 1,
 "shadow": false,
 "paddingTop": 0,
 "maxWidth": 7
},
{
 "class": "MediaAudio",
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_E6F800D3_F99A_4D85_41E3_1B31EF171022.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_E6F800D3_F99A_4D85_41E3_1B31EF171022.ogg"
 },
 "id": "audio_E6F800D3_F99A_4D85_41E3_1B31EF171022",
 "data": {
  "label": "car trunk close"
 }
},
{
 "class": "PlayList",
 "id": "playList_C36971EB_FAA6_CF85_41E1_95D60585A162",
 "items": [
  {
   "media": "this.video_C25092E3_FAAE_4D84_41D1_75D02597D940",
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_C36971EB_FAA6_CF85_41E1_95D60585A162, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_C36971EB_FAA6_CF85_41E1_95D60585A162, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ]
},
{
 "hfov": 360,
 "label": "Perspectiva 1 - Capot Abierto",
 "id": "panorama_FF789D13_F263_951C_41D9_105C8727681A",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E258E3A7_F262_AD03_41E0_B75DA340C271",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FDD3B010_F261_EB1C_41ED_560070399204",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 95,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_t.jpg",
 "pitch": 0,
 "vfov": 180,
 "hfovMin": "130%",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_EBE8EC8E_F2E2_BB04_41D3_3D1F2DF61455",
  "this.overlay_EBE8DC8E_F2E2_BB04_41ED_9D1E44849E54",
  "this.overlay_E7CC79AA_F999_DF87_41E8_89535FD9EE20",
  "this.overlay_EBE8AC8E_F2E2_BB04_41E7_58F8262B4D24",
  "this.overlay_EBE8BC8E_F2E2_BB04_41DC_6B35C5B88A58",
  "this.overlay_EBE88C8E_F2E2_BB04_41D0_E1267C0669CA",
  "this.overlay_EBE89C8E_F2E2_BB04_41D4_3632D8D63BAA",
  "this.overlay_EC6B60B9_F99B_CD85_41DB_479ED6B372CB",
  "this.overlay_EC6B90B9_F99B_CD85_41DD_D5ECFE0960E0",
  "this.overlay_E502AD04_F9A6_7483_41EC_4124F55AF90E",
  "this.overlay_EBE8FC8E_F2E2_BB04_41E4_C24829D2A92A",
  "this.overlay_E649C08D_F99E_4D9D_41E3_184F3AC19F75",
  "this.popup_D95F0E4E_F99A_349C_41EA_7C79A32CB19A",
  "this.popup_E6696D42_F99A_D487_41EB_ED5DEC55F356",
  "this.panorama_FF789D13_F263_951C_41D9_105C8727681A_tcap0",
  "this.overlay_DE5FBF80_F999_D384_41D1_908D0AFD328F"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -0.92,
  "pitch": -26.63
 },
 "id": "camera_C3DB5233_FAA6_CC85_41E2_E72E49A25E51",
 "manualZoomSpeed": 2
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -0.94,
  "pitch": -11.63
 },
 "id": "panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_camera",
 "manualZoomSpeed": 2
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 0,
  "pitch": -29.39
 },
 "id": "camera_C6A95611_FAA6_3484_41D4_E13089CBEE3B",
 "manualZoomSpeed": 2
},
{
 "class": "MediaAudio",
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_EB4A4A30_F97F_FC84_41E2_ECC90EA86B4A.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_EB4A4A30_F97F_FC84_41E2_ECC90EA86B4A.ogg"
 },
 "id": "audio_EB4A4A30_F97F_FC84_41E2_ECC90EA86B4A",
 "data": {
  "label": "car door open"
 }
},
{
 "class": "PlayList",
 "id": "playList_C316B1EB_FAA6_CF85_41CB_CB67F70370B5",
 "items": [
  {
   "media": "this.video_CC278578_FAAE_3483_41D5_F6B2E66218A4",
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_C316B1EB_FAA6_CF85_41CB_CB67F70370B5, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_C316B1EB_FAA6_CF85_41CB_CB67F70370B5, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "player": "this.MainViewerVideoPlayer"
  }
 ]
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "IconButton_2E60A1ED_347D_0EFF_41BC_A36ED8CE8127",
 "iconURL": "skin/IconButton_2E60A1ED_347D_0EFF_41BC_A36ED8CE8127.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 58,
 "horizontalAlign": "center",
 "width": 58,
 "minHeight": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "paddingBottom": 0,
 "propagateClick": false,
 "pressedIconURL": "skin/IconButton_2E60A1ED_347D_0EFF_41BC_A36ED8CE8127_pressed.png",
 "verticalAlign": "middle",
 "data": {
  "name": "audio"
 },
 "height": 58,
 "pressedRollOverIconURL": "skin/IconButton_2E60A1ED_347D_0EFF_41BC_A36ED8CE8127_pressed.png",
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "Container_1830289D_3415_1D5C_41BC_8E6011E2CDF1",
 "left": "0%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "right": "0%",
 "children": [
  "this.Image_1F5560D3_342D_0D24_41C3_009D491A3B6B",
  "this.Button_6B3DCC00_647A_DF9A_41D5_DC120403F72A",
  "this.Image_1F089AA1_342D_3D64_41C5_D320F4A4C707",
  "this.Button_750C11A1_648F_A89A_41C9_2E58278A81A6",
  "this.Image_1FC43E22_342D_1564_41BB_A63B6F19A750",
  "this.Button_748008CC_648F_B8AA_41C2_97E5C5DE0CD2",
  "this.Image_1FC09DB8_342E_F764_41A3_E939228A46A8",
  "this.Button_6B3517BB_64A6_3EE4_41D7_49868CE9F7A9",
  "this.Image_6B6FAA55_64A6_71AF_41D3_F197980C21A5"
 ],
 "horizontalAlign": "center",
 "gap": 0,
 "minHeight": 1,
 "borderSize": 0,
 "bottom": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "verticalAlign": "bottom",
 "scrollBarMargin": 2,
 "overflow": "scroll",
 "height": 80,
 "layout": "horizontal",
 "data": {
  "name": "buttons"
 },
 "shadow": false,
 "scrollBarWidth": 10
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 9.63,
  "pitch": -17.55
 },
 "id": "camera_C68505E4_FAA6_378C_41B0_B0684EC1EB9B",
 "manualZoomSpeed": 2
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 1.84,
  "pitch": -13.78
 },
 "id": "camera_C0E5C3AC_FAA6_3383_41E6_05E65551AD28",
 "manualZoomSpeed": 2
},
{
 "duration": 5000,
 "id": "album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_2",
 "width": 1920,
 "class": "Photo",
 "thumbnailUrl": "media/album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_2_t.jpg",
 "image": {
  "levels": [
   {
    "url": "media/album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_2.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1280
},
{
 "touchControlMode": "drag_rotation",
 "class": "PanoramaPlayer",
 "buttonToggleHotspots": "this.IconButton_2E6091ED_347D_0EFF_41C6_E6D253232DA1",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.IconButton_2E6041ED_347D_0EFF_41BF_3C82AFA80CBB",
 "id": "MainViewerPanoramaPlayer",
 "mouseControlMode": "drag_rotation",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_2E60B1ED_347D_0EFF_41C3_3E7369236DCE"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_C0B4B3E7_FAA6_338C_41E7_AEE85861AF4B",
 "manualZoomSpeed": 2
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 0.62,
  "pitch": -15.09
 },
 "id": "panorama_FF789D13_F263_951C_41D9_105C8727681A_camera",
 "manualZoomSpeed": 2
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -0.92,
  "pitch": -19.29
 },
 "id": "camera_C0E993BA_FAA6_3387_41D4_D42FE7557200",
 "manualZoomSpeed": 2
},
{
 "rotationY": 0,
 "hfov": 5.09,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "class": "PopupPanoramaOverlay",
 "id": "popup_CF39DCC5_FABA_D58D_41EE_6058F432FF7D",
 "popupMaxHeight": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_CF39DCC5_FABA_D58D_41EE_6058F432FF7D_0_0.jpg",
    "width": 918,
    "class": "ImageResourceLevel",
    "height": 640
   },
   {
    "url": "media/popup_CF39DCC5_FABA_D58D_41EE_6058F432FF7D_0_1.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 356
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -11.71,
 "popupMaxWidth": "95%",
 "yaw": -159.2,
 "showDuration": 500
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 5.51,
  "pitch": -17.45
 },
 "id": "camera_C049E2EF_FAA6_CD9D_41DE_8A42DB109C76",
 "manualZoomSpeed": 2
},
{
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "Container_2E6031ED_347D_0EFC_41A1_12EC3C0472FF",
 "width": 110,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "right": "0%",
 "paddingLeft": 0,
 "children": [
  "this.IconButton_2E6021ED_347D_0EFF_41BD_84BE6BEAB908"
 ],
 "horizontalAlign": "center",
 "gap": 10,
 "minHeight": 1,
 "borderSize": 0,
 "top": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "overflow": "visible",
 "height": 110,
 "layout": "horizontal",
 "data": {
  "name": "top"
 },
 "shadow": false,
 "scrollBarWidth": 10
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 0.62,
  "pitch": -20.13
 },
 "id": "camera_C3A5B2B6_FAA6_CD8F_41CF_A7E4EA2997B2",
 "manualZoomSpeed": 2
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 0,
  "pitch": -11.94
 },
 "id": "camera_C74BC631_FAA6_3484_41D4_22E5E99279F2",
 "manualZoomSpeed": 2
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 0.11,
  "pitch": -16.87
 },
 "id": "camera_C3F86261_FAA6_CC85_41E4_CEDC2F4DA17D"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_C153E412_FAA6_3484_41DB_92EECC91DE7B",
 "manualZoomSpeed": 2
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "IconButton_2E60E1EE_347D_0EFC_41C3_A8DD2E2819ED",
 "iconURL": "skin/IconButton_2E60E1EE_347D_0EFC_41C3_A8DD2E2819ED.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 58,
 "horizontalAlign": "center",
 "rollOverIconURL": "skin/IconButton_2E60E1EE_347D_0EFC_41C3_A8DD2E2819ED_rollover.png",
 "width": 58,
 "minHeight": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "push",
 "click": "this.openLink('http://www.facebook.com/loremipsum', '_blank')",
 "class": "IconButton",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "data": {
  "name": "fb"
 },
 "height": 58,
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -0.94,
  "pitch": -11.63
 },
 "id": "camera_C6650544_FAA6_348C_41E2_920F0FF82033",
 "manualZoomSpeed": 2
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -0.92,
  "pitch": -13.78
 },
 "id": "camera_C1C514A6_FAA6_358C_41E9_6A6E26A8E62B",
 "manualZoomSpeed": 2
},
{
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "HTMLText_6BDD8039_64A6_31E4_41D7_D3C38C6C69F2",
 "left": 10,
 "paddingLeft": 10,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "width": 546,
 "minHeight": 1,
 "borderSize": 0,
 "top": 18,
 "minWidth": 1,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "-STICKER"
 },
 "height": 104,
 "shadow": false,
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-shadow:0px 0px 15px rgba(0,0,0,0.6);text-align:left;\"><SPAN STYLE=\"letter-spacing:0vmin; white-space:pre-wrap;color:#000000;font-family:'Segoe UI';\"><SPAN STYLE=\"color:#ffffff;font-size:7.43vmin;font-family:'Zekton';\"><B><I>Volkswagen</I></B></SPAN></SPAN></DIV></div>"
},
{
 "class": "PlayList",
 "id": "playList_C2A8618A_FAA6_CF87_41D7_31C73BD38338",
 "items": [
  {
   "media": "this.panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C",
   "class": "PanoramaPlayListItem",
   "begin": "this.playGlobalAudio(this.audio_E8689391_F97A_3384_41EB_82C0732165CD)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 2.65,
  "pitch": -15.28
 },
 "id": "camera_C6DC959A_FAA6_3784_41C9_5A9D8FD0FDE4",
 "manualZoomSpeed": 2
},
{
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "height": "100%",
 "id": "HTMLText_7DE3759A_6911_E2E0_41A7_C2659986BA1F",
 "paddingLeft": 0,
 "paddingRight": 0,
 "scrollBarColor": "#FF0000",
 "width": "100%",
 "minHeight": 1,
 "borderSize": 0,
 "class": "HTMLText",
 "scrollBarOpacity": 0.2,
 "scrollBarVisible": "rollOver",
 "paddingBottom": 10,
 "propagateClick": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText"
 },
 "minWidth": 1,
 "shadow": false,
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vw; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.02vw;font-family:'Exo';\"><B><I>Gol Trend 2021</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vw; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#e7392b;font-size:1.57vw;font-family:'Exo';\"><B><I>1.6 / FLEX / 104 CV </I></B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.21vw;\"><BR STYLE=\"letter-spacing:0vw; white-space:pre-wrap;color:#000000;font-size:5vw;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vw; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.97vw;font-family:'Roboto Black';\">Informaci\u00f3n General:</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vw; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.78vw;font-family:'Roboto Medium';\">Como es una prueba, voy a poner texto de ejemplo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vw; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.78vw;font-family:'Roboto Medium';\">Un veh\u00edculo vers\u00e1til, econ\u00f3mico, duradero con tecnolog\u00eda de punta. Su sistema abs ayuda en terrenos mojados y sus doble air-bags te protegen ante cualquier eventualidad.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vw; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.78vw;font-family:'Roboto Medium';\">Ingener\u00eda alemana pensada para la familia.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.78vw;\"><BR STYLE=\"letter-spacing:0vw; white-space:pre-wrap;color:#000000;font-size:5vw;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vw; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:0.78vw;font-family:'Roboto Medium';\">Lo ideal ser\u00eda preparar un texto para los veh\u00edculos que vayamos haciendo para que sean atractivos y ayuden a convencer al comprador a tomar la decisi\u00f3n.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.97vw;\"><BR STYLE=\"letter-spacing:0vw; white-space:pre-wrap;color:#000000;font-size:5vw;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vw; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#e7392b;font-size:0.97vw;font-family:'Roboto Black';\">A\u00f1o 2021 / 0 km / Nafta / </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vw; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#e7392b;font-size:0.97vw;font-family:'Roboto Black';\">5 doors / 104 cv / Manual</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.21vw;\"><BR STYLE=\"letter-spacing:0vw; white-space:pre-wrap;color:#000000;font-size:5vw;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vw; white-space:pre-wrap;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.45vw;font-family:'Exo';\"><B>US$ 12.900</B></SPAN></SPAN></DIV></div>"
},
{
 "rotationY": 0,
 "hfov": 9.71,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "class": "PopupPanoramaOverlay",
 "id": "popup_D95F0E4E_F99A_349C_41EA_7C79A32CB19A",
 "popupMaxHeight": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_D95F0E4E_F99A_349C_41EA_7C79A32CB19A_0_0.jpg",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 761
   },
   {
    "url": "media/popup_D95F0E4E_F99A_349C_41EA_7C79A32CB19A_0_1.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 389
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -12.61,
 "popupMaxWidth": "95%",
 "yaw": -23.01,
 "showDuration": 500
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 1.84,
  "pitch": -13.78
 },
 "id": "camera_C38A8299_FAA6_CD85_41DE_1B31E79E99CC",
 "manualZoomSpeed": 2
},
{
 "duration": 500,
 "class": "FadeInEffect",
 "id": "effect_77FFEBD0_6F11_A37D_41CF_E0702F0FF71B",
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 9.63,
  "pitch": -17.55
 },
 "id": "panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_camera",
 "manualZoomSpeed": 2
},
{
 "rotationY": 0,
 "hfov": 4.12,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "class": "PopupPanoramaOverlay",
 "id": "popup_CBAF6A45_FAFB_DC8D_41D9_FFAC06D87360",
 "popupMaxHeight": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_CBAF6A45_FAFB_DC8D_41D9_FFAC06D87360_0_0.jpg",
    "width": 894,
    "class": "ImageResourceLevel",
    "height": 746
   },
   {
    "url": "media/popup_CBAF6A45_FAFB_DC8D_41D9_FFAC06D87360_0_1.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 427
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -16.29,
 "popupMaxWidth": "95%",
 "yaw": -15.33,
 "showDuration": 500
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 7.35,
  "pitch": -12.86
 },
 "id": "camera_C10FB469_FAA6_3484_41E0_32CC0025C6FF",
 "manualZoomSpeed": 2
},
{
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "Container_7DE2D59A_6911_E2E0_41A7_D15D0A935C33",
 "left": "0%",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "right": "0%",
 "children": [
  "this.Container_7DE3E59A_6911_E2E0_41D7_0925C3250BD2",
  "this.Container_7DE3059A_6911_E2E0_41C7_5A5AF3BF1498"
 ],
 "horizontalAlign": "left",
 "gap": 10,
 "minHeight": 1,
 "borderSize": 0,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_7DE2D59A_6911_E2E0_41A7_D15D0A935C33, false, 0, null, null, false)",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "visible": false,
 "overflow": "scroll",
 "paddingTop": 0,
 "data": {
  "name": "--INFO"
 }
},
{
 "hfov": 360,
 "label": "Interior",
 "hfovMin": "130%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E258E3A7_F262_AD03_41E0_B75DA340C271",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FDD3B010_F261_EB1C_41ED_560070399204",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 95,
 "vfov": 180,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_t.jpg",
 "pitch": 0,
 "id": "panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_DB59FD92_F9FA_D787_41E2_6C5D31A0CE37",
  "this.overlay_DC5269AA_F9FA_3F84_41D1_16B1B3A99DDD",
  "this.overlay_DFFC0DA7_F9F9_F78D_41ED_7036F2D0B94A",
  "this.overlay_DC5279AA_F9FA_3F84_41DF_BB4E5167B113",
  "this.overlay_DAE83E31_F9E6_3484_41D8_60F5C513B5A2",
  "this.overlay_DB44E3B2_F9FF_F384_419D_B2A673EA1324",
  "this.overlay_DA7A3E58_F9E6_7483_41C4_16D7AB522A18",
  "this.overlay_DDFF75C0_F9E6_3783_41EB_878975BC1703",
  "this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_tcap0",
  "this.overlay_DE897447_F99E_348D_41ED_333988700A26",
  "this.overlay_C8C18FAA_FAAA_5384_41ED_49802A708995",
  "this.popup_C988382B_FAFE_5C84_41E0_DDDEC91B8969",
  "this.popup_CE06AF0D_FAFA_349D_41D6_8C252829C7E4",
  "this.popup_C97790FD_FAFA_CD7D_41EC_D7C599F903D4",
  "this.popup_CBAF6A45_FAFB_DC8D_41D9_FFAC06D87360",
  "this.overlay_CAAA06EE_FAAA_F59F_41C0_5477A9C4B87F",
  "this.overlay_BF7DA6A6_FAF9_D58C_41DC_87ECDEB550D3",
  "this.overlay_C8FC41C8_FAE7_CF83_41C4_4BA647382F0F",
  "this.overlay_C21A729A_FAE6_CD84_41D5_B115CE43BDF0",
  "this.overlay_C9ACF018_FAE9_CC83_41E6_8ACC7506C529",
  "this.overlay_CE2FBF47_FA9F_D48D_41EB_9051AFACA51E",
  "this.overlay_CB45325C_FAE9_CCBC_41E8_52EF1B67C688",
  "this.overlay_C849575D_FA9A_54BC_41E2_5DE3B94BC2AA",
  "this.overlay_C90ADAB4_FAEA_DD83_41BC_B12CE4837CEB",
  "this.popup_CF3DF76E_FAA7_D49F_41ED_5B969ECE0D8A",
  "this.overlay_CF23BCF4_FABA_D583_41E3_71F96E31B4FB",
  "this.overlay_CF23CCF4_FABA_D583_41BA_56B30AD3054F",
  "this.popup_CF39DCC5_FABA_D58D_41EE_6058F432FF7D"
 ]
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "IconButton_2E60F1ED_347D_0EFF_41C9_4BA017DDD347",
 "iconURL": "skin/IconButton_2E60F1ED_347D_0EFF_41C9_4BA017DDD347.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 58,
 "horizontalAlign": "center",
 "rollOverIconURL": "skin/IconButton_2E60F1ED_347D_0EFF_41C9_4BA017DDD347_rollover.png",
 "width": 58,
 "minHeight": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "push",
 "click": "this.openLink('http://twitter.com/loremipsum', '_blank')",
 "class": "IconButton",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "data": {
  "name": "twitter"
 },
 "height": 58,
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "rotationY": 0,
 "hfov": 5.08,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "class": "PopupPanoramaOverlay",
 "id": "popup_D8093C1D_F9E6_54BD_41EC_06A5C036D6F1",
 "popupMaxHeight": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_D8093C1D_F9E6_54BD_41EC_06A5C036D6F1_0_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -13.45,
 "popupMaxWidth": "95%",
 "yaw": -23.21,
 "showDuration": 500
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 9.63,
  "pitch": -17.55
 },
 "id": "camera_C6B4C5F2_FAA6_3784_41E1_45B5547BEAFE",
 "manualZoomSpeed": 2
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -0.92,
  "pitch": -26.63
 },
 "id": "camera_C0F1739E_FAA6_33BF_41DC_77FF2579C4F0",
 "manualZoomSpeed": 2
},
{
 "cursor": "hand",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "IconButton_26A59E96_3534_28A2_419C_6C5ADD7D1CAC",
 "left": "1%",
 "iconURL": "skin/IconButton_26A59E96_3534_28A2_419C_6C5ADD7D1CAC.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 60,
 "horizontalAlign": "center",
 "rollOverIconURL": "skin/IconButton_26A59E96_3534_28A2_419C_6C5ADD7D1CAC_rollover.png",
 "width": 170,
 "minHeight": 40,
 "borderSize": 0,
 "top": "42%",
 "transparencyActive": false,
 "bottom": "42%",
 "minWidth": 40,
 "mode": "push",
 "class": "IconButton",
 "paddingBottom": 0,
 "propagateClick": false,
 "pressedIconURL": "skin/IconButton_26A59E96_3534_28A2_419C_6C5ADD7D1CAC_pressed.png",
 "verticalAlign": "middle",
 "data": {
  "name": "<"
 },
 "pressedRollOverIconURL": "skin/IconButton_26A59E96_3534_28A2_419C_6C5ADD7D1CAC_pressed.png",
 "shadow": false,
 "paddingTop": 0,
 "maxWidth": 60
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -3.26,
  "pitch": -18.71
 },
 "id": "panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_camera",
 "manualZoomSpeed": 2
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -0.92,
  "pitch": -26.63
 },
 "id": "camera_C1D26497_FAA6_358C_41EC_5773FB17632A",
 "manualZoomSpeed": 2
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -0.92,
  "pitch": -19.29
 },
 "id": "camera_C032F344_FAA6_CC83_41ED_05AEB2175B33",
 "manualZoomSpeed": 2
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_C0BB63F6_FAA6_338C_41DE_735F5916623E",
 "manualZoomSpeed": 2
},
{
 "hfov": 360,
 "label": "Perspectiva 2 - Puertas Abiertas",
 "id": "panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FDD3B010_F261_EB1C_41ED_560070399204",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 95,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_t.jpg",
 "pitch": 0,
 "vfov": 180,
 "hfovMin": "120%",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_EB35EC51_F2E2_9B1C_41E4_B5489AFD1FCC",
  "this.overlay_EB321C51_F2E2_9B1C_41DF_3AF41A39D2A2",
  "this.overlay_EB320C51_F2E2_9B1C_41D9_1A6FDE2D2464",
  "this.overlay_EDF9491B_F2DE_9D0C_41EA_91585549FD28",
  "this.overlay_E88235DB_F966_3784_41DC_E809891CC92F",
  "this.overlay_E88225DB_F966_3784_41E1_37E30A452DA7",
  "this.overlay_E88215DB_F966_3784_41A1_8A674445F642",
  "this.overlay_E88205DB_F966_3784_41E7_3D968884D068",
  "this.overlay_EC4CE601_F9A6_3485_41E6_AB3964F180B6",
  "this.overlay_EC4CD601_F9A6_3485_41C9_1276934010FE",
  "this.panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_tcap0",
  "this.overlay_DE1050DC_F999_CDBC_41DD_43536B7BDE4B"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 2.76,
  "pitch": -15.61
 },
 "id": "camera_C02DA364_FAA6_CC83_41EA_F0CD618976E2",
 "manualZoomSpeed": 2
},
{
 "duration": 500,
 "class": "FadeInEffect",
 "id": "effect_78B5ED2F_6F10_6723_41CB_017231EE0D8C",
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_C76F3652_FAA6_3487_41DD_DAF3DF74B23C",
 "manualZoomSpeed": 2
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 1.84,
  "pitch": -13.78
 },
 "id": "camera_C1317479_FAA6_3484_41DE_D4692CADC63D",
 "manualZoomSpeed": 2
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 0,
  "pitch": -29.39
 },
 "id": "camera_C6090570_FAA6_3484_41E4_CF0F63AB0847",
 "manualZoomSpeed": 2
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "IconButton_2E6041ED_347D_0EFF_41BF_3C82AFA80CBB",
 "iconURL": "skin/IconButton_2E6041ED_347D_0EFF_41BF_3C82AFA80CBB.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 58,
 "horizontalAlign": "center",
 "rollOverIconURL": "skin/IconButton_2E6041ED_347D_0EFF_41BF_3C82AFA80CBB_rollover.png",
 "width": 58,
 "minHeight": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "data": {
  "name": "VR"
 },
 "height": 58,
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "duration": 5000,
 "id": "album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_13",
 "width": 1920,
 "class": "Photo",
 "thumbnailUrl": "media/album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_13_t.jpg",
 "image": {
  "levels": [
   {
    "url": "media/album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_13.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1280
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "IconButton_2E60B1ED_347D_0EFF_41C3_3E7369236DCE",
 "iconURL": "skin/IconButton_2E60B1ED_347D_0EFF_41C3_3E7369236DCE.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 58,
 "horizontalAlign": "center",
 "width": 58,
 "minHeight": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "paddingBottom": 0,
 "propagateClick": false,
 "pressedIconURL": "skin/IconButton_2E60B1ED_347D_0EFF_41C3_3E7369236DCE_pressed.png",
 "verticalAlign": "middle",
 "data": {
  "name": "gyroscopic"
 },
 "height": 58,
 "pressedRollOverIconURL": "skin/IconButton_2E60B1ED_347D_0EFF_41C3_3E7369236DCE_pressed.png",
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -0.92,
  "pitch": -26.63
 },
 "id": "camera_C08033D8_FAA6_3384_41D1_60D3E5D75476",
 "manualZoomSpeed": 2
},
{
 "class": "MediaAudio",
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_EB6DC748_F222_950C_41C3_F579A5BF210D.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_EB6DC748_F222_950C_41C3_F579A5BF210D.ogg"
 },
 "id": "audio_EB6DC748_F222_950C_41C3_F579A5BF210D",
 "data": {
  "label": "Bocina gol exterior"
 }
},
{
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "Container_7DE3959A_6911_E2E0_41D2_9D01577E4575",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "gap": 10,
 "width": "65%",
 "children": [
  "this.Image_7DE3B59A_6911_E2E0_41D3_E1AF7DF208C7"
 ],
 "horizontalAlign": "center",
 "minHeight": 1,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "minWidth": 1,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "overflow": "scroll",
 "shadow": false,
 "paddingTop": 0,
 "backgroundColor": [
  "#000000"
 ],
 "data": {
  "name": "-left"
 }
},
{
 "duration": 5000,
 "id": "album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_6",
 "width": 1920,
 "class": "Photo",
 "thumbnailUrl": "media/album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_6_t.jpg",
 "image": {
  "levels": [
   {
    "url": "media/album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_6.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1280
},
{
 "duration": 500,
 "class": "FadeOutEffect",
 "id": "effect_7874758E_6EF0_67E5_41D8_CFAFDB1F2DCE",
 "easing": "linear"
},
{
 "textDecoration": "none",
 "backgroundOpacity": 0,
 "data": {
  "name": "info"
 },
 "borderRadius": 0,
 "height": "100%",
 "id": "Button_750C11A1_648F_A89A_41C9_2E58278A81A6",
 "paddingLeft": 0,
 "paddingRight": 0,
 "fontFamily": "Akhand-Bold",
 "horizontalAlign": "center",
 "gap": 5,
 "width": 130,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "borderSize": 0,
 "rollOverBackgroundColor": [
  "#000000",
  "#FFFFFF"
 ],
 "rollOverBackgroundColorRatios": [
  1,
  1
 ],
 "rollOverShadow": false,
 "mode": "push",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "fontSize": "19px",
 "class": "Button",
 "rollOverFontColor": "#FF0000",
 "paddingBottom": 0,
 "iconHeight": 32,
 "label": "INFORMACI\u00d3N",
 "fontStyle": "normal",
 "shadowBlurRadius": 6,
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_7DE2D59A_6911_E2E0_41A7_D15D0A935C33, true, 0, this.effect_757D2F2A_6F10_A32C_41C3_CCBEB7AD57F6, 'showEffect', false)",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "layout": "horizontal",
 "iconWidth": 32,
 "shadowSpread": 1,
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "rollOverBackgroundOpacity": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal",
 "rollOverShadowBlurRadius": 66
},
{
 "class": "MediaAudio",
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_DC6BECA2_F9E6_5584_41D7_41994F4EE3BC.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_DC6BECA2_F9E6_5584_41D7_41994F4EE3BC.ogg"
 },
 "id": "audio_DC6BECA2_F9E6_5584_41D7_41994F4EE3BC",
 "data": {
  "label": "Sonido motor gol int"
 }
},
{
 "paddingTop": 0,
 "transitionMode": "blending",
 "id": "MainViewer",
 "left": 0,
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipShadowSpread": 0,
 "playbackBarBorderRadius": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarHeadShadow": true,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowVerticalLength": 0,
 "minHeight": 50,
 "borderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarOpacity": 1,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarProgressBorderRadius": 0,
 "progressBackgroundOpacity": 1,
 "progressBorderRadius": 0,
 "toolTipBorderRadius": 3,
 "toolTipDisplayTime": 600,
 "minWidth": 100,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarRight": 0,
 "toolTipFontStyle": "normal",
 "toolTipPaddingLeft": 6,
 "playbackBarHeadWidth": 6,
 "class": "ViewerArea",
 "progressBarBorderSize": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipShadowBlurRadius": 3,
 "progressBarBorderRadius": 0,
 "height": "100%",
 "toolTipBorderSize": 1,
 "toolTipFontWeight": "normal",
 "propagateClick": false,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipPaddingBottom": 4,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "transitionDuration": 500,
 "toolTipFontFamily": "Arial",
 "progressBarBorderColor": "#000000",
 "shadow": false,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarBottom": 5,
 "toolTipPaddingTop": 4,
 "progressBackgroundColorDirection": "vertical",
 "toolTipFontSize": 12,
 "vrPointerSelectionTime": 2000,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "firstTransitionDuration": 0,
 "paddingRight": 0,
 "toolTipTextShadowColor": "#000000",
 "progressOpacity": 1,
 "progressBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "playbackBarProgressBorderSize": 0,
 "progressBottom": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowOpacity": 0,
 "top": 0,
 "progressHeight": 10,
 "playbackBarLeft": 0,
 "toolTipOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeight": 10,
 "toolTipPaddingRight": 6,
 "playbackBarHeadHeight": 15,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderColor": "#767676",
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressRight": 0,
 "toolTipShadowOpacity": 1,
 "data": {
  "name": "Main Viewer"
 },
 "progressBorderColor": "#000000",
 "progressLeft": 0
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 2.65,
  "pitch": -15.28
 },
 "id": "camera_C6E0C5C7_FAA6_378C_41E9_6F65C9C14B02",
 "manualZoomSpeed": 2
},
{
 "class": "MediaAudio",
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_EB5F9A5F_F2E2_7F03_41E0_F0A1042EBCB1.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_EB5F9A5F_F2E2_7F03_41E0_F0A1042EBCB1.ogg"
 },
 "id": "audio_EB5F9A5F_F2E2_7F03_41E0_F0A1042EBCB1",
 "data": {
  "label": "Car Hood Close (Closing Auto Hood) (Sound Effect)"
 }
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "height": "98%",
 "id": "Image_1FC09DB8_342E_F764_41A3_E939228A46A8",
 "paddingLeft": 0,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "width": 7,
 "url": "skin/Image_1FC43E22_342D_1564_41BB_A63B6F19A750.png",
 "minHeight": 1,
 "borderSize": 0,
 "class": "Image",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "scaleMode": "fit_inside",
 "data": {
  "name": "-"
 },
 "minWidth": 1,
 "shadow": false,
 "paddingTop": 0,
 "maxWidth": 7
},
{
 "textDecoration": "none",
 "backgroundOpacity": 0,
 "data": {
  "name": "photoalbum"
 },
 "borderRadius": 0,
 "height": "100%",
 "id": "Button_748008CC_648F_B8AA_41C2_97E5C5DE0CD2",
 "paddingLeft": 0,
 "paddingRight": 0,
 "fontFamily": "Akhand-Bold",
 "horizontalAlign": "center",
 "gap": 5,
 "width": 130,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "borderSize": 0,
 "mode": "push",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "fontSize": "19px",
 "class": "Button",
 "rollOverFontColor": "#FF0000",
 "paddingBottom": 0,
 "iconHeight": 32,
 "label": "\u00c1LBUM DE FOTOS",
 "fontStyle": "normal",
 "shadowBlurRadius": 6,
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_3A863D9B_3513_E8A1_41BD_38320457DF78, true, 0, this.effect_77FFEBD0_6F11_A37D_41CF_E0702F0FF71B, 'showEffect', false); this.ViewerAreaLabeled_3AEAC6FC_3514_3866_41BA_E46727E47B58.bind('hide', function(e){ e.source.unbind('hide', arguments.callee, this); this.playList_C2BC4169_FAA6_CC85_41E3_39A1ACF950AF.set('selectedIndex', -1); }, this); this.playList_C2BC4169_FAA6_CC85_41E3_39A1ACF950AF.set('selectedIndex', 0)",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "layout": "horizontal",
 "iconWidth": 32,
 "shadowSpread": 1,
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "rollOverBackgroundOpacity": 0,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "rotationY": 0,
 "hfov": 9.71,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "class": "PopupPanoramaOverlay",
 "id": "popup_D8080C1C_F9E6_5483_41B7_8F60F7E0605B",
 "popupMaxHeight": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_D8080C1C_F9E6_5483_41B7_8F60F7E0605B_0_0.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -12.61,
 "popupMaxWidth": "95%",
 "yaw": -23.01,
 "showDuration": 500
},
{
 "duration": 5000,
 "id": "album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_9",
 "width": 1920,
 "class": "Photo",
 "thumbnailUrl": "media/album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_9_t.jpg",
 "image": {
  "levels": [
   {
    "url": "media/album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_9.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1280
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 2.65,
  "pitch": -15.28
 },
 "id": "camera_C01BF328_FAA6_CC83_41EB_6976BAB0D29E",
 "manualZoomSpeed": 2
},
{
 "backgroundOpacity": 0.6,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "Container_7A542551_6EFF_A77C_41BD_77B516563B0F",
 "left": "0%",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "right": "0%",
 "children": [
  "this.Container_7A549551_6EFF_A77C_41D5_C1ADFF60CE66"
 ],
 "horizontalAlign": "left",
 "gap": 10,
 "minHeight": 1,
 "borderSize": 0,
 "top": "0%",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "contentOpaque": false,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_7A542551_6EFF_A77C_41BD_77B516563B0F, false, 0, null, null, false)",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "visible": false,
 "overflow": "scroll",
 "paddingTop": 0,
 "data": {
  "name": "--PANORAMA LIST"
 }
},
{
 "duration": 5000,
 "id": "album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_14",
 "width": 1920,
 "class": "Photo",
 "thumbnailUrl": "media/album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_14_t.jpg",
 "image": {
  "levels": [
   {
    "url": "media/album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_14.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1280
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 0,
  "pitch": 0
 },
 "id": "camera_C0AFC404_FAA6_348C_419D_13614DE3ADB6",
 "manualZoomSpeed": 2
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 1.84,
  "pitch": -13.78
 },
 "id": "camera_C3CE1242_FAA6_CC87_41D4_30C89089420D",
 "manualZoomSpeed": 2
},
{
 "levels": [
  {
   "url": "media/popup_F77333EA_F96F_D387_41EC_E704BCC1DC1C_0_0.jpg",
   "width": 1920,
   "class": "ImageResourceLevel",
   "height": 1280
  },
  {
   "url": "media/popup_F77333EA_F96F_D387_41EC_E704BCC1DC1C_0_1.jpg",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 682
  },
  {
   "url": "media/popup_F77333EA_F96F_D387_41EC_E704BCC1DC1C_0_2.jpg",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 341
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_EA6A3632_F2E7_971D_41C1_D6079374DA64"
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "height": "98%",
 "id": "Image_1F089AA1_342D_3D64_41C5_D320F4A4C707",
 "paddingLeft": 0,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "width": 7,
 "url": "skin/Image_1FC43E22_342D_1564_41BB_A63B6F19A750.png",
 "minHeight": 1,
 "borderSize": 0,
 "class": "Image",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "scaleMode": "fit_inside",
 "data": {
  "name": "-"
 },
 "minWidth": 1,
 "shadow": false,
 "paddingTop": 0,
 "maxWidth": 7
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 0.62,
  "pitch": -15.09
 },
 "id": "camera_C16D444A_FAA6_3484_41E5_A4762B085DFE",
 "manualZoomSpeed": 2
},
{
 "class": "PlayList",
 "id": "playList_C35ED19B_FAA6_CF85_41E5_EC461B25133E",
 "items": [
  {
   "media": "this.panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06",
   "class": "PanoramaPlayListItem",
   "begin": "this.playGlobalAudio(this.audio_E8689391_F97A_3384_41EB_82C0732165CD)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_camera"
  }
 ]
},
{
 "duration": 5000,
 "id": "album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_4",
 "width": 1920,
 "class": "Photo",
 "thumbnailUrl": "media/album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_4_t.jpg",
 "image": {
  "levels": [
   {
    "url": "media/album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_4.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1280
},
{
 "rotationY": 0,
 "hfov": 3.15,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "class": "PopupPanoramaOverlay",
 "id": "popup_C988382B_FAFE_5C84_41E0_DDDEC91B8969",
 "popupMaxHeight": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_C988382B_FAFE_5C84_41E0_DDDEC91B8969_0_0.jpg",
    "width": 874,
    "class": "ImageResourceLevel",
    "height": 835
   },
   {
    "url": "media/popup_C988382B_FAFE_5C84_41E0_DDDEC91B8969_0_1.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 489
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -27.88,
 "popupMaxWidth": "95%",
 "yaw": -25.81,
 "showDuration": 500
},
{
 "duration": 5000,
 "id": "album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_11",
 "width": 1920,
 "class": "Photo",
 "thumbnailUrl": "media/album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_11_t.jpg",
 "image": {
  "levels": [
   {
    "url": "media/album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_11.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1280
},
{
 "class": "MediaAudio",
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_D2D458C4_F99E_3D83_41EE_4D1BA703EE0C.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_D2D458C4_F99E_3D83_41EE_4D1BA703EE0C.ogg"
 },
 "id": "audio_D2D458C4_F99E_3D83_41EE_4D1BA703EE0C",
 "data": {
  "label": "Driving Upbeat Energetic Action (Full)"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 0.11,
  "pitch": -16.87
 },
 "id": "camera_C3F5C251_FAA6_CC85_41E7_BD7971F594E9"
},
{
 "class": "PlayList",
 "id": "playList_C2A2C179_FAA6_CC85_41EC_AA10B0EEAC53",
 "items": [
  {
   "media": "this.panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95",
   "class": "PanoramaPlayListItem",
   "begin": "this.playGlobalAudio(this.audio_EB5F9A5F_F2E2_7F03_41E0_F0A1042EBCB1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_camera"
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -0.92,
  "pitch": -26.63
 },
 "id": "camera_C18D74EF_FAA6_359C_41CA_386497BD9C2F",
 "manualZoomSpeed": 2
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "height": "100%",
 "id": "Image_6B6FAA55_64A6_71AF_41D3_F197980C21A5",
 "paddingLeft": 0,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "width": 7,
 "url": "skin/Image_1FC43E22_342D_1564_41BB_A63B6F19A750.png",
 "minHeight": 1,
 "borderSize": 0,
 "class": "Image",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "scaleMode": "fit_inside",
 "data": {
  "name": "-"
 },
 "minWidth": 1,
 "visible": false,
 "shadow": false,
 "paddingTop": 0,
 "maxWidth": 7
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 2.95,
  "pitch": -15.71
 },
 "id": "panorama_FDD3B010_F261_EB1C_41ED_560070399204_camera",
 "manualZoomSpeed": 2
},
{
 "rotationY": 0,
 "hfov": 2.91,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "class": "PopupPanoramaOverlay",
 "id": "popup_EB22D5D2_F2E2_951C_41A0_152FBB529ECA",
 "popupMaxHeight": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_EB22D5D2_F2E2_951C_41A0_152FBB529ECA_0_1.jpg",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 682
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -18.46,
 "popupMaxWidth": "95%",
 "yaw": 21.66,
 "showDuration": 500
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_camera",
 "manualZoomSpeed": 2
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 2.65,
  "pitch": -15.28
 },
 "id": "camera_C6F105B8_FAA6_3784_41E4_6926F442B7BC",
 "manualZoomSpeed": 2
},
{
 "hfov": 360,
 "label": "Perspectiva 4 - Ba\u00fal Cerrado",
 "hfovMin": "120%",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FDD3B010_F261_EB1C_41ED_560070399204",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 95,
 "vfov": 180,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_t.jpg",
 "pitch": 0,
 "id": "panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_EE888FBB_F9AA_F385_41C3_C588E76AC85F",
  "this.overlay_EEBCA1CF_F9AA_4F9D_41E1_3C7149261B8D",
  "this.overlay_EEBC91CF_F9AA_4F9D_41E7_6CE74DE9CA31",
  "this.panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_tcap0",
  "this.overlay_DEFC1584_F99E_D78C_41CA_1EFD94191483"
 ]
},
{
 "paddingTop": 0,
 "transitionMode": "blending",
 "id": "ViewerAreaLabeled_3AEAC6FC_3514_3866_41BA_E46727E47B58",
 "left": "0%",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarBorderColor": "#FFFFFF",
 "toolTipShadowSpread": 0,
 "playbackBarBorderRadius": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "width": "100%",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarHeadShadow": true,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipShadowVerticalLength": 0,
 "minHeight": 1,
 "borderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarOpacity": 1,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarProgressBorderRadius": 0,
 "progressBackgroundOpacity": 1,
 "progressBorderRadius": 0,
 "toolTipBorderRadius": 3,
 "toolTipDisplayTime": 600,
 "minWidth": 1,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarRight": 0,
 "toolTipFontStyle": "normal",
 "toolTipPaddingLeft": 6,
 "playbackBarHeadWidth": 6,
 "class": "ViewerArea",
 "progressBarBorderSize": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarBackgroundOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipShadowBlurRadius": 3,
 "progressBarBorderRadius": 0,
 "height": "100%",
 "toolTipBorderSize": 1,
 "toolTipFontWeight": "normal",
 "propagateClick": false,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipPaddingBottom": 4,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "transitionDuration": 500,
 "toolTipFontFamily": "Arial",
 "progressBarBorderColor": "#000000",
 "shadow": false,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarBottom": 0,
 "toolTipPaddingTop": 4,
 "progressBackgroundColorDirection": "vertical",
 "toolTipFontSize": 12,
 "vrPointerSelectionTime": 2000,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "firstTransitionDuration": 0,
 "paddingRight": 0,
 "toolTipTextShadowColor": "#000000",
 "progressOpacity": 1,
 "progressBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "playbackBarProgressBorderSize": 0,
 "progressBottom": 2,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowOpacity": 0,
 "top": "0%",
 "progressHeight": 10,
 "playbackBarLeft": 0,
 "toolTipOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeight": 10,
 "toolTipPaddingRight": 6,
 "playbackBarHeadHeight": 15,
 "playbackBarBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderColor": "#767676",
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressRight": 0,
 "toolTipShadowOpacity": 1,
 "data": {
  "name": "Viewer Photo"
 },
 "progressBorderColor": "#000000",
 "progressLeft": 0
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 0,
  "pitch": -29.39
 },
 "id": "camera_C176942E_FAA6_349C_41CE_F5DFDEB514F7",
 "manualZoomSpeed": 2
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 2.65,
  "pitch": -15.28
 },
 "id": "camera_C07C02FD_FAA6_CD7D_41C0_A49D2136CE6E",
 "manualZoomSpeed": 2
},
{
 "class": "PlayList",
 "id": "mainPlayList",
 "items": [
  {
   "media": "this.panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_camera"
  },
  {
   "media": "this.panorama_FF789D13_F263_951C_41D9_105C8727681A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FF789D13_F263_951C_41D9_105C8727681A_camera"
  },
  {
   "media": "this.panorama_E258E3A7_F262_AD03_41E0_B75DA340C271",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_camera"
  },
  {
   "media": "this.panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_camera"
  },
  {
   "media": "this.panorama_FDD3B010_F261_EB1C_41ED_560070399204",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FDD3B010_F261_EB1C_41ED_560070399204_camera"
  },
  {
   "media": "this.panorama_FD013EBF_F261_9704_41E1_A65F3D829440",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FD013EBF_F261_9704_41E1_A65F3D829440_camera"
  },
  {
   "media": "this.panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_camera"
  },
  {
   "media": "this.panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_camera"
  },
  {
   "media": "this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_camera"
  },
  {
   "media": "this.album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA",
   "class": "PhotoAlbumPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ]
},
{
 "hfov": 360,
 "label": "Perspectiva 2 - Puertas Cerradas",
 "id": "panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FDD3B010_F261_EB1C_41ED_560070399204",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 95,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_t.jpg",
 "pitch": 0,
 "vfov": 180,
 "hfovMin": "120%",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_E863A8C8_F97A_3D84_41D2_E156601B5913",
  "this.overlay_E86398C8_F97A_3D84_41E1_DF69397969D4",
  "this.overlay_E86388C8_F97A_3D84_41DA_5BCB797590CD",
  "this.overlay_EB517B7D_F97A_337D_41D6_D15B01707E9E",
  "this.overlay_E8062079_F966_4C84_41AF_D47E2586A6A8",
  "this.overlay_E8063079_F966_4C84_41EE_364FA315A3D9",
  "this.overlay_E807C079_F966_4C84_41B4_475C452CBB32",
  "this.overlay_E807D079_F966_4C84_41E7_3FE21F6F0E79",
  "this.panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_tcap0",
  "this.overlay_DEDB15E2_F99E_7784_41B8_2BAB88AB281C"
 ]
},
{
 "textDecoration": "none",
 "backgroundOpacity": 1,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "Button"
 },
 "borderRadius": 50,
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_7DE3659A_6911_E2E0_41C3_93316288CBE4",
 "shadowBlurRadius": 6,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "fontFamily": "Exo",
 "horizontalAlign": "center",
 "gap": 5,
 "width": 245,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 1,
 "borderSize": 0,
 "rollOverBackgroundColor": [
  "#C50A01"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#E7392B"
 ],
 "mode": "push",
 "minWidth": 1,
 "fontSize": "2.2vh",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "class": "Button",
 "paddingBottom": 0,
 "iconHeight": 32,
 "label": "SOLICITAR COTIZACI\u00d3N",
 "fontStyle": "italic",
 "propagateClick": false,
 "click": "this.openLink('https://api.whatsapp.com/send?phone=595981408400&text=%C2%A1Hola!%20Me%20interesa%20saber%20m%C3%A1s%20sobre%20el%20Gol%20Trend.', '_blank')",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "height": 44,
 "layout": "horizontal",
 "iconWidth": 32,
 "shadowSpread": 1,
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "fontWeight": "bold"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 1.84,
  "pitch": -13.78
 },
 "id": "camera_C6A72601_FAA6_3484_41E9_1B4BD8D68C59",
 "manualZoomSpeed": 2
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 0.62,
  "pitch": -15.09
 },
 "id": "camera_C11CE45A_FAA6_3484_41E6_E6DF9FE4B46A",
 "manualZoomSpeed": 2
},
{
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "HTMLText_524CEEAF_7E31_E3D9_41D5_A18634B5A288",
 "left": 12,
 "paddingLeft": 10,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "width": 546,
 "minHeight": 1,
 "borderSize": 0,
 "top": 100,
 "minWidth": 1,
 "class": "HTMLText",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "scrollBarMargin": 2,
 "data": {
  "name": "-STICKER"
 },
 "height": 85,
 "shadow": false,
 "scrollBarWidth": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-shadow:0px 0px 15px rgba(0,0,0,0.6);text-align:left;\"><SPAN STYLE=\"letter-spacing:0vmin; white-space:pre-wrap;color:#000000;font-family:'Segoe UI';\"><SPAN STYLE=\"color:#e7392b;font-size:5.25vmin;font-family:'Zekton';\"><B><I>Gol Trend 2021</I></B></SPAN></SPAN></DIV></div>"
},
{
 "duration": 200,
 "class": "FadeInEffect",
 "id": "effect_E78445AC_ED52_6962_41E7_337128A4BA87",
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 2.65,
  "pitch": -15.28
 },
 "id": "camera_C6CE55A9_FAA6_3784_41E9_A96E2CCA62AB",
 "manualZoomSpeed": 2
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "IconButton_2E6081ED_347D_0EFF_41AA_ECC3AD42DC4D",
 "iconURL": "skin/IconButton_2E6081ED_347D_0EFF_41AA_ECC3AD42DC4D.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 58,
 "horizontalAlign": "center",
 "width": 58,
 "minHeight": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "paddingBottom": 0,
 "propagateClick": false,
 "pressedIconURL": "skin/IconButton_2E6081ED_347D_0EFF_41AA_ECC3AD42DC4D_pressed.png",
 "verticalAlign": "middle",
 "data": {
  "name": "fullscreen"
 },
 "height": 58,
 "pressedRollOverIconURL": "skin/IconButton_2E6081ED_347D_0EFF_41AA_ECC3AD42DC4D_pressed.png",
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "class": "MediaAudio",
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_EBDCA255_F2E3_EF04_41D5_65092F3815C3.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_EBDCA255_F2E3_EF04_41D5_65092F3815C3.ogg"
 },
 "id": "audio_EBDCA255_F2E3_EF04_41D5_65092F3815C3",
 "data": {
  "label": "Sonido motor Gol ext"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -0.94,
  "pitch": -11.63
 },
 "id": "camera_C0D01372_FAA6_CC87_41E1_0AABB338C497",
 "manualZoomSpeed": 2
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "IconButton_2E6091ED_347D_0EFF_41C6_E6D253232DA1",
 "iconURL": "skin/IconButton_2E6091ED_347D_0EFF_41C6_E6D253232DA1.png",
 "paddingLeft": 0,
 "paddingRight": 0,
 "maxHeight": 58,
 "horizontalAlign": "center",
 "width": 58,
 "minHeight": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "toggle",
 "class": "IconButton",
 "paddingBottom": 0,
 "propagateClick": false,
 "pressedIconURL": "skin/IconButton_2E6091ED_347D_0EFF_41C6_E6D253232DA1_pressed.png",
 "verticalAlign": "middle",
 "data": {
  "name": "HS"
 },
 "height": 58,
 "pressedRollOverIconURL": "skin/IconButton_2E6091ED_347D_0EFF_41C6_E6D253232DA1_pressed.png",
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 58
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -0.92,
  "pitch": -13.78
 },
 "id": "camera_C69385D6_FAA6_378C_41E9_3EDBC765AD3C",
 "manualZoomSpeed": 2
},
{
 "rotationY": 0,
 "hfov": 2.55,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "class": "PopupPanoramaOverlay",
 "id": "popup_CE06AF0D_FAFA_349D_41D6_8C252829C7E4",
 "popupMaxHeight": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_CE06AF0D_FAFA_349D_41D6_8C252829C7E4_0_0.jpg",
    "width": 874,
    "class": "ImageResourceLevel",
    "height": 835
   },
   {
    "url": "media/popup_CE06AF0D_FAFA_349D_41D6_8C252829C7E4_0_1.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 489
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -19.06,
 "popupMaxWidth": "95%",
 "yaw": 23.13,
 "showDuration": 500
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -0.94,
  "pitch": -11.63
 },
 "id": "camera_C6724535_FAA6_348C_41DE_D8CA6D10BB1A",
 "manualZoomSpeed": 2
},
{
 "class": "MediaAudio",
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_E5FE14CB_F2E2_6B0C_41DB_0A9E661166B9.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_E5FE14CB_F2E2_6B0C_41DB_0A9E661166B9.ogg"
 },
 "id": "audio_E5FE14CB_F2E2_6B0C_41DB_0A9E661166B9",
 "data": {
  "label": "apertura de cap\u00f3"
 }
},
{
 "class": "MediaAudio",
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_D2D6A828_F99E_3C83_41E6_44A4DA89078B.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_D2D6A828_F99E_3C83_41E6_44A4DA89078B.ogg"
 },
 "id": "audio_D2D6A828_F99E_3C83_41E6_44A4DA89078B",
 "data": {
  "label": "Driving In My Car"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 9.63,
  "pitch": -17.55
 },
 "id": "camera_C1E7B4C2_FAA6_3584_41E4_8A9ACB16B3A3",
 "manualZoomSpeed": 2
},
{
 "label": "Team Diesa - Clasifiaci\u00f3n TCR 2019",
 "id": "video_C25092E3_FAAE_4D84_41D1_75D02597D940",
 "width": 1280,
 "class": "Video",
 "thumbnailUrl": "media/video_C25092E3_FAAE_4D84_41D1_75D02597D940_t.jpg",
 "loop": false,
 "scaleMode": "fit_inside",
 "height": 720,
 "video": {
  "width": 1144,
  "class": "VideoResource",
  "mp4Url": "media/video_C25092E3_FAAE_4D84_41D1_75D02597D940.mp4",
  "height": 644
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -0.92,
  "pitch": -26.63
 },
 "id": "camera_C7587622_FAA6_3484_41EB_9D32527EC88E",
 "manualZoomSpeed": 2
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 1.84,
  "pitch": -13.78
 },
 "id": "camera_C614C554_FAA6_348C_41E7_66DCBCF288D3",
 "manualZoomSpeed": 2
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -0.92,
  "pitch": -19.29
 },
 "id": "camera_C607A562_FAA6_3484_41EA_FA1D086EE25E",
 "manualZoomSpeed": 2
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 5.51,
  "pitch": -17.45
 },
 "id": "camera_C62BE58C_FAA6_379C_41A2_509AEA5FA2C1",
 "manualZoomSpeed": 2
},
{
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "height": "98%",
 "id": "Image_1F5560D3_342D_0D24_41C3_009D491A3B6B",
 "paddingLeft": 0,
 "paddingRight": 0,
 "horizontalAlign": "center",
 "width": 7,
 "url": "skin/Image_1FC43E22_342D_1564_41BB_A63B6F19A750.png",
 "minHeight": 1,
 "borderSize": 0,
 "class": "Image",
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "scaleMode": "fit_inside",
 "data": {
  "name": "-"
 },
 "minWidth": 1,
 "shadow": false,
 "paddingTop": 0,
 "maxWidth": 7
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -0.94,
  "pitch": -11.63
 },
 "id": "camera_C0C48381_FAA6_3385_41EE_E21A998DDB52",
 "manualZoomSpeed": 2
},
{
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "Container_3A26EF53_3514_E9A2_4159_FC2DDA226A54",
 "left": "14%",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "right": "14%",
 "children": [
  "this.ViewerAreaLabeled_3AEAC6FC_3514_3866_41BA_E46727E47B58",
  "this.IconButton_26A59E96_3534_28A2_419C_6C5ADD7D1CAC",
  "this.IconButton_253A0D7D_3513_E866_41BC_277EBE69ACB4",
  "this.Button_7DC9A1F7_6916_6221_41A7_DA6068060007"
 ],
 "horizontalAlign": "left",
 "gap": 10,
 "minHeight": 1,
 "borderSize": 0,
 "top": "10%",
 "bottom": "10%",
 "contentOpaque": false,
 "minWidth": 1,
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "layout": "absolute",
 "overflow": "scroll",
 "paddingTop": 0,
 "data": {
  "name": "Global"
 }
},
{
 "class": "MediaAudio",
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_D2CCC6E0_F99E_3583_41D8_1EE58742D157.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_D2CCC6E0_F99E_3583_41D8_1EE58742D157.ogg"
 },
 "id": "audio_D2CCC6E0_F99E_3583_41D8_1EE58742D157",
 "data": {
  "label": "Cup Of Coffee (Full)"
 }
},
{
 "paddingTop": 20,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "id": "Container_7DE3059A_6911_E2E0_41C7_5A5AF3BF1498",
 "left": "8.06%",
 "paddingLeft": 0,
 "paddingRight": 20,
 "scrollBarColor": "#000000",
 "right": "8.02%",
 "children": [
  "this.Button_78C5D2AD_6EF0_BD24_41BA_7914C520D22E"
 ],
 "horizontalAlign": "right",
 "gap": 10,
 "minHeight": 1,
 "borderSize": 0,
 "bottom": "80%",
 "contentOpaque": false,
 "minWidth": 1,
 "top": "10%",
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "overflow": "visible",
 "layout": "vertical",
 "data": {
  "name": "Container X"
 },
 "shadow": false,
 "scrollBarWidth": 10
},
{
 "duration": 500,
 "class": "FadeOutEffect",
 "id": "effect_7E0FE099_696E_E2E0_4183_0FC331E0D87C",
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 1.84,
  "pitch": -13.78
 },
 "id": "camera_C71EE660_FAA6_3484_41D1_39340849E57B",
 "manualZoomSpeed": 2
},
{
 "hfov": 360,
 "label": "Perspectiva 4 - Ba\u00fal Abierto",
 "id": "panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FDD3B010_F261_EB1C_41ED_560070399204",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_EF7AF964_F99E_7C83_41EA_12427C876877",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_EF7AF964_F99E_7C83_41EA_12427C876877",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 95,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_t.jpg",
 "pitch": 0,
 "vfov": 180,
 "hfovMin": "130%",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_E52994AF_F99A_759D_41CE_56BC8C34CD9E",
  "this.overlay_E52984AF_F99A_759D_41EB_4ABD550A813F",
  "this.overlay_E529B4AF_F99A_759D_41E4_75FE7A5FB812",
  "this.overlay_E6A27DAE_F99F_D79F_41D4_F1EFEF96A61C",
  "this.overlay_E6A24DAE_F99F_D79F_41EC_7095267B5D73",
  "this.panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_tcap0",
  "this.overlay_DEEF8505_F99E_F48C_41DC_6A22D6353629",
  "this.overlay_CA3654B7_FAA9_F58C_41EA_419FD43C6E97",
  "this.overlay_CA9E86AE_FAAE_559C_41E7_8EA2856D7639"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 9.63,
  "pitch": -17.55
 },
 "id": "camera_C1F4E4B4_FAA6_358C_41E9_33D0AA57BDC9",
 "manualZoomSpeed": 2
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 2.65,
  "pitch": -15.28
 },
 "id": "panorama_FD013EBF_F261_9704_41E1_A65F3D829440_camera",
 "manualZoomSpeed": 2
},
{
 "hfov": 360,
 "label": "Perspectiva 1 - Capot Cerrado",
 "id": "panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FF789D13_F263_951C_41D9_105C8727681A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FF789D13_F263_951C_41D9_105C8727681A",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E258E3A7_F262_AD03_41E0_B75DA340C271",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FDD3B010_F261_EB1C_41ED_560070399204",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 95,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_t.jpg",
 "pitch": 0,
 "vfov": 180,
 "hfovMin": "120%",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_F747441C_F96F_D483_41E7_6A84A62D5373",
  "this.overlay_F759341D_F96F_D4BD_41E6_8130B1B32C83",
  "this.overlay_F759041D_F96F_D4BD_41E4_1EED3B85E8E2",
  "this.overlay_F759141D_F96F_D4BD_41EA_CBB267C885DE",
  "this.overlay_F759641D_F96F_D4BD_41A1_4AC77FC1F5CC",
  "this.overlay_F759741D_F96F_D4BD_41E0_D696DAB984F6",
  "this.overlay_F759441D_F96F_D4BD_41E3_F70255AFCD0A",
  "this.overlay_F759541D_F96F_D4BD_41B3_5E2EA921D85A",
  "this.popup_F77333EA_F96F_D387_41EC_E704BCC1DC1C",
  "this.overlay_E5BEE01B_F9A6_CC85_41CD_61944852A1A7",
  "this.overlay_E5864CA7_F999_D58D_4189_E79953DBEB43",
  "this.overlay_E5865CA7_F999_D58D_41EA_91731FB03A33",
  "this.overlay_D81D5C4B_F9E6_5485_41D0_025027D71F9A",
  "this.overlay_D81D2C4B_F9E6_5485_41EC_F9819D0D52D2",
  "this.popup_D8080C1C_F9E6_5483_41B7_8F60F7E0605B",
  "this.popup_D8093C1D_F9E6_54BD_41EC_06A5C036D6F1",
  "this.panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_tcap0",
  "this.overlay_DECE841E_F99E_54BF_4199_8A8CEFDEC91F"
 ]
},
{
 "rollOverItemThumbnailShadowColor": "#E7392B",
 "itemBackgroundOpacity": 0,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "id": "ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358",
 "left": 0,
 "itemHeight": 160,
 "paddingLeft": 70,
 "itemThumbnailBorderRadius": 0,
 "scrollBarColor": "#E7392B",
 "gap": 26,
 "width": "100%",
 "horizontalAlign": "center",
 "selectedItemLabelFontColor": "#E7392B",
 "selectedItemThumbnailShadow": true,
 "paddingTop": 10,
 "minHeight": 1,
 "borderSize": 0,
 "itemVerticalAlign": "top",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemLabelGap": 7,
 "itemPaddingTop": 3,
 "itemPaddingRight": 3,
 "minWidth": 1,
 "itemMinWidth": 50,
 "class": "ThumbnailGrid",
 "itemLabelFontColor": "#666666",
 "height": "92%",
 "itemLabelPosition": "bottom",
 "selectedItemThumbnailShadowVerticalLength": 0,
 "propagateClick": false,
 "itemLabelFontSize": 16,
 "itemLabelFontStyle": "normal",
 "shadow": false,
 "scrollBarWidth": 10,
 "itemMode": "normal",
 "backgroundOpacity": 0,
 "borderRadius": 5,
 "itemOpacity": 1,
 "paddingRight": 70,
 "itemLabelHorizontalAlign": "center",
 "itemBackgroundColor": [],
 "playList": "this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "itemThumbnailHeight": 125,
 "itemThumbnailWidth": 220,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemHorizontalAlign": "center",
 "itemMaxWidth": 1000,
 "itemThumbnailShadow": false,
 "bottom": -0.2,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "itemThumbnailOpacity": 1,
 "itemLabelFontFamily": "Exo",
 "itemLabelTextDecoration": "none",
 "itemMinHeight": 50,
 "scrollBarOpacity": 0.5,
 "itemBackgroundColorRatios": [],
 "scrollBarVisible": "rollOver",
 "itemWidth": 220,
 "paddingBottom": 70,
 "selectedItemLabelFontWeight": "bold",
 "itemThumbnailScaleMode": "fit_outside",
 "verticalAlign": "middle",
 "scrollBarMargin": 2,
 "itemPaddingBottom": 3,
 "rollOverItemThumbnailShadow": true,
 "itemLabelFontWeight": "bold",
 "itemMaxHeight": 1000,
 "data": {
  "name": "ThumbnailList"
 },
 "itemPaddingLeft": 3,
 "itemBackgroundColorDirection": "vertical",
 "rollOverItemLabelFontColor": "#E7392B"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 0,
  "pitch": -29.39
 },
 "id": "camera_C120C489_FAA6_3584_41E8_BE8DF8F68BD6",
 "manualZoomSpeed": 2
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 0,
  "pitch": -29.39
 },
 "id": "camera_C09C23C9_FAA6_3384_41EC_96E8AFFBEAC1",
 "manualZoomSpeed": 2
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundOpacity": 1,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "X"
 },
 "borderRadius": 0,
 "pressedBackgroundColorRatios": [
  0
 ],
 "id": "Button_78C5D2AD_6EF0_BD24_41BA_7914C520D22E",
 "shadowBlurRadius": 6,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "maxHeight": 50,
 "horizontalAlign": "center",
 "gap": 5,
 "width": 50,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "fontFamily": "Arial",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 30,
 "borderSize": 0,
 "iconURL": "skin/Button_775D3775_6F10_A324_41B1_8092A2023E17.png",
 "rollOverBackgroundColor": [
  "#C50A01"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#E7392B"
 ],
 "mode": "push",
 "minWidth": 30,
 "fontSize": "1.29vmin",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "class": "Button",
 "paddingBottom": 0,
 "iconHeight": 32,
 "fontStyle": "normal",
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_7DE2D59A_6911_E2E0_41A7_D15D0A935C33, false, 0, this.effect_7E0FE099_696E_E2E0_4183_0FC331E0D87C, 'hideEffect', false)",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "height": 50,
 "layout": "horizontal",
 "iconWidth": 32,
 "shadowSpread": 1,
 "shadow": false,
 "paddingTop": 0,
 "maxWidth": 50,
 "fontWeight": "normal"
},
{
 "rotationY": 0,
 "hfov": 5.08,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "class": "PopupPanoramaOverlay",
 "id": "popup_E6696D42_F99A_D487_41EB_ED5DEC55F356",
 "popupMaxHeight": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_E6696D42_F99A_D487_41EB_ED5DEC55F356_0_0.jpg",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 761
   },
   {
    "url": "media/popup_E6696D42_F99A_D487_41EB_ED5DEC55F356_0_1.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 389
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -13.45,
 "popupMaxWidth": "95%",
 "yaw": -23.21,
 "showDuration": 500
},
{
 "textDecoration": "none",
 "cursor": "hand",
 "backgroundOpacity": 1,
 "pressedBackgroundOpacity": 1,
 "rollOverBackgroundOpacity": 1,
 "data": {
  "name": "X"
 },
 "borderRadius": 0,
 "id": "Button_7DC9A1F7_6916_6221_41A7_DA6068060007",
 "shadowBlurRadius": 6,
 "width": 50,
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "maxHeight": 50,
 "horizontalAlign": "center",
 "right": 20,
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "fontFamily": "Arial",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "minHeight": 50,
 "borderSize": 0,
 "gap": 5,
 "iconURL": "skin/Button_775D3775_6F10_A324_41B1_8092A2023E17.png",
 "rollOverBackgroundColor": [
  "#C50A01"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#E7392B"
 ],
 "mode": "push",
 "minWidth": 50,
 "top": 20,
 "fontSize": "1.29vmin",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "class": "Button",
 "paddingBottom": 0,
 "iconHeight": 32,
 "fontStyle": "normal",
 "pressedBackgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_3A863D9B_3513_E8A1_41BD_38320457DF78, false, 0, this.effect_77AF96BF_6F11_E523_41B8_61E169A25F9B, 'hideEffect', false)",
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "height": 50,
 "layout": "horizontal",
 "iconWidth": 32,
 "shadowSpread": 1,
 "paddingTop": 0,
 "maxWidth": 50,
 "fontWeight": "normal"
},
{
 "label": "Main_Comp_1_x264_light",
 "id": "video_DBF906E2_F9F9_D584_41E9_FC1EB109B26D",
 "width": 1920,
 "class": "Video",
 "thumbnailUrl": "media/video_DBF906E2_F9F9_D584_41E9_FC1EB109B26D_t.jpg",
 "loop": false,
 "scaleMode": "fit_inside",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "mp4Url": "media/video_DBF906E2_F9F9_D584_41E9_FC1EB109B26D.mp4",
  "height": 1080
 }
},
{
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "Container_7DE3459A_6911_E2E0_41CE_F97D3E361A8D",
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "scrollBarColor": "#E73B2C",
 "gap": 10,
 "width": "100%",
 "children": [
  "this.HTMLText_7DE3759A_6911_E2E0_41A7_C2659986BA1F",
  "this.Button_7DE3659A_6911_E2E0_41C3_93316288CBE4"
 ],
 "horizontalAlign": "left",
 "minHeight": 300,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "minWidth": 100,
 "class": "Container",
 "scrollBarOpacity": 0.79,
 "paddingBottom": 50,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "layout": "vertical",
 "overflow": "scroll",
 "shadow": false,
 "paddingTop": 70,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "data": {
  "name": "Container text"
 }
},
{
 "hfov": 360,
 "label": "Perspectiva 3 - Puertas Abierta",
 "id": "panorama_FD013EBF_F261_9704_41E1_A65F3D829440",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_E258E3A7_F262_AD03_41E0_B75DA340C271",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMax": 95,
 "class": "Panorama",
 "thumbnailUrl": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_t.jpg",
 "pitch": 0,
 "vfov": 180,
 "hfovMin": "130%",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "rowCount": 7,
      "height": 3584
     },
     {
      "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "overlays": [
  "this.overlay_EA6C6144_F96A_CC83_41C7_C6DFA2DF0595",
  "this.overlay_EA6C7144_F96A_CC83_41EC_7C15B3285444",
  "this.overlay_EA6C4144_F96A_CC83_41E9_3579FD1249A1",
  "this.overlay_EA6C5144_F96A_CC83_41E2_0D7AC9458E77",
  "this.overlay_EA6FA144_F96A_CC83_41D2_0F677913255A",
  "this.overlay_EA6FB144_F96A_CC83_41CA_A71041848B8B",
  "this.overlay_EF17178E_F9A7_F39F_41E1_7AD60F8A8DD9",
  "this.overlay_EF17278F_F9A7_F39D_41D6_ED0ACCBE7017",
  "this.panorama_FD013EBF_F261_9704_41E1_A65F3D829440_tcap0",
  "this.overlay_DE870560_F99E_7484_41E4_EC4CCD19A4EC"
 ]
},
{
 "class": "MediaAudio",
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_DF303072_F9EB_CC87_41B0_D8B5F151A5B8.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_DF303072_F9EB_CC87_41B0_D8B5F151A5B8.ogg"
 },
 "id": "audio_DF303072_F9EB_CC87_41B0_D8B5F151A5B8",
 "data": {
  "label": "Sonido bocina gol interior"
 }
},
{
 "duration": 5000,
 "id": "album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_1",
 "width": 1920,
 "class": "Photo",
 "thumbnailUrl": "media/album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_1_t.jpg",
 "image": {
  "levels": [
   {
    "url": "media/album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_1.jpg",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "height": 1280
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -0.92,
  "pitch": -26.63
 },
 "id": "camera_C638D57E_FAA6_377C_41EB_364661AC567F",
 "manualZoomSpeed": 2
},
{
 "duration": 200,
 "class": "FadeOutEffect",
 "id": "effect_E78445AC_ED52_6962_41E5_44E0250686CD",
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 0,
  "pitch": -29.39
 },
 "id": "camera_C05F42D2_FAA6_CD87_41CD_34256EA02301",
 "manualZoomSpeed": 2
},
{
 "backgroundOpacity": 0.3,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "Container_7A547551_6EFF_A77C_41C6_43235B32276F",
 "left": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0,
  1
 ],
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "gap": 10,
 "width": "100%",
 "children": [
  "this.Button_775D3775_6F10_A324_41B1_8092A2023E17"
 ],
 "horizontalAlign": "left",
 "minHeight": 1,
 "borderSize": 0,
 "top": 0,
 "contentOpaque": false,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "class": "Container",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "minWidth": 1,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "overflow": "scroll",
 "shadow": false,
 "paddingTop": 0,
 "height": 167,
 "data": {
  "name": "header"
 }
},
{
 "class": "MediaAudio",
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_D33DC5F5_F99E_378C_41ED_AD813EC6B4D1.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_D33DC5F5_F99E_378C_41ED_AD813EC6B4D1.ogg"
 },
 "id": "audio_D33DC5F5_F99E_378C_41ED_AD813EC6B4D1",
 "data": {
  "label": "Crazy Sport (Full)"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 0,
  "pitch": -29.39
 },
 "id": "camera_C0CA8390_FAA6_3383_41EA_EE67B0042589",
 "manualZoomSpeed": 2
},
{
 "duration": 500,
 "class": "FadeOutEffect",
 "id": "effect_77AF96BF_6F11_E523_41B8_61E169A25F9B",
 "easing": "linear"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -0.92,
  "pitch": -26.63
 },
 "id": "camera_C17A443C_FAA6_34FC_41AA_54A152005A84",
 "manualZoomSpeed": 2
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 1.84,
  "pitch": -13.78
 },
 "id": "camera_C640F526_FAA6_348C_41C6_55B8108A3983",
 "manualZoomSpeed": 2
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 2.65,
  "pitch": -15.28
 },
 "id": "camera_C060930C_FAA6_CC83_41EA_B6B652829378",
 "manualZoomSpeed": 2
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -0.92,
  "pitch": -21.12
 },
 "id": "camera_C00E1336_FAA6_CC8C_41E7_908C64201440",
 "manualZoomSpeed": 2
},
{
 "rotationY": 0,
 "hfov": 9.71,
 "popupDistance": 100,
 "hideEasing": "cubic_out",
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "class": "PopupPanoramaOverlay",
 "id": "popup_D808F8D4_F9E6_5D8C_41EA_1736D7CBB879",
 "popupMaxHeight": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_D808F8D4_F9E6_5D8C_41EA_1736D7CBB879_0_0.jpg",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 761
   },
   {
    "url": "media/popup_D808F8D4_F9E6_5D8C_41EA_1736D7CBB879_0_1.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 389
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -12.61,
 "popupMaxWidth": "95%",
 "yaw": -23.01,
 "showDuration": 500
},
{
 "class": "MediaAudio",
 "autoplay": true,
 "audio": {
  "mp3Url": "media/audio_D2D0A78B_F99E_3384_41D5_BF3FF05051C2.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_D2D0A78B_F99E_3384_41D5_BF3FF05051C2.ogg"
 },
 "id": "audio_D2D0A78B_F99E_3384_41D5_BF3FF05051C2",
 "data": {
  "label": "Deep House Fashion (Short)"
 }
},
{
 "textDecoration": "none",
 "backgroundOpacity": 0,
 "data": {
  "name": "button 4"
 },
 "borderRadius": 0,
 "height": "100%",
 "id": "Button_6B3517BB_64A6_3EE4_41D7_49868CE9F7A9",
 "paddingLeft": 0,
 "paddingRight": 0,
 "fontFamily": "Akhand-Bold",
 "horizontalAlign": "center",
 "gap": 5,
 "width": 90,
 "shadowColor": "#000000",
 "iconBeforeLabel": true,
 "backgroundColorRatios": [
  0,
  1
 ],
 "minHeight": 1,
 "borderSize": 0,
 "mode": "push",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "fontSize": "22px",
 "class": "Button",
 "rollOverFontColor": "#FF0000",
 "paddingBottom": 0,
 "iconHeight": 32,
 "label": "BUTTON",
 "fontStyle": "normal",
 "shadowBlurRadius": 6,
 "propagateClick": false,
 "verticalAlign": "middle",
 "backgroundColorDirection": "vertical",
 "minWidth": 1,
 "layout": "horizontal",
 "visible": false,
 "iconWidth": 32,
 "shadowSpread": 1,
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "fontWeight": "normal"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 0,
  "pitch": -29.39
 },
 "id": "camera_C3EC826F_FAA6_CC9D_41CD_5C76294D0809",
 "manualZoomSpeed": 2
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": 5.51,
  "pitch": -17.45
 },
 "id": "camera_C147E420_FAA6_3484_41E7_BCE650284266",
 "manualZoomSpeed": 2
},
{
 "label": "Team Diesa  - Gran Largada - Transchaco Rally 2019",
 "id": "video_CE14519E_FAAA_4FBF_41DE_DE0D2D396E77",
 "width": 1280,
 "class": "Video",
 "thumbnailUrl": "media/video_CE14519E_FAAA_4FBF_41DE_DE0D2D396E77_t.jpg",
 "loop": false,
 "scaleMode": "fit_inside",
 "height": 720,
 "video": {
  "width": 1144,
  "class": "VideoResource",
  "mp4Url": "media/video_CE14519E_FAAA_4FBF_41DE_DE0D2D396E77.mp4",
  "height": 644
 }
},
{
 "playList": "this.album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_AlbumPlayList",
 "id": "album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA",
 "label": "Photo Album IMG_5817",
 "class": "PhotoAlbum",
 "thumbnailUrl": "media/album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_t.png"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "hfov": 80,
  "yaw": -0.92,
  "pitch": -26.63
 },
 "id": "camera_C04562E0_FAA6_CD83_41EC_AF8691A5A50F",
 "manualZoomSpeed": 2
},
{
 "backgroundOpacity": 0.55,
 "borderRadius": 0,
 "id": "veilPopupPanorama",
 "left": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "right": 0,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "minHeight": 0,
 "borderSize": 0,
 "top": 0,
 "bottom": 0,
 "minWidth": 0,
 "class": "UIComponent",
 "paddingBottom": 0,
 "propagateClick": false,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "backgroundColor": [
  "#000000"
 ],
 "visible": false,
 "data": {
  "name": "UIComponent57888"
 },
 "paddingTop": 0
},
{
 "backgroundOpacity": 1,
 "borderRadius": 0,
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "paddingLeft": 0,
 "backgroundColorRatios": [],
 "paddingRight": 0,
 "right": 0,
 "minHeight": 0,
 "borderSize": 0,
 "top": 0,
 "bottom": 0,
 "minWidth": 0,
 "class": "ZoomImage",
 "paddingBottom": 0,
 "propagateClick": false,
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "backgroundColor": [],
 "visible": false,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage57889"
 },
 "paddingTop": 0
},
{
 "textDecoration": "none",
 "backgroundOpacity": 0.3,
 "data": {
  "name": "CloseButton57890"
 },
 "borderRadius": 0,
 "id": "closeButtonPopupPanorama",
 "shadowBlurRadius": 6,
 "paddingLeft": 5,
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "paddingRight": 5,
 "fontFamily": "Arial",
 "horizontalAlign": "center",
 "right": 10,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowColor": "#000000",
 "iconLineWidth": 5,
 "gap": 5,
 "minHeight": 0,
 "borderSize": 0,
 "iconBeforeLabel": true,
 "iconColor": "#000000",
 "pressedIconColor": "#888888",
 "top": 10,
 "minWidth": 0,
 "mode": "push",
 "fontSize": "1.29vmin",
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "class": "CloseButton",
 "paddingBottom": 5,
 "iconHeight": 20,
 "label": "",
 "fontStyle": "normal",
 "propagateClick": false,
 "verticalAlign": "middle",
 "rollOverIconColor": "#666666",
 "backgroundColorDirection": "vertical",
 "layout": "horizontal",
 "visible": false,
 "iconWidth": 20,
 "shadowSpread": 1,
 "shadow": false,
 "paddingTop": 5,
 "cursor": "hand",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "fontWeight": "normal"
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -52.63,
   "hfov": 13.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "ir a perspectiva 1"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.72,
   "pitch": -31.04,
   "yaw": -52.63,
   "image": "this.AnimatedImageResource_DAB87C2C_F9AA_7483_41D3_987F584E093C",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EB337CA2_F2E7_9B3C_41DF_1D1252D2587D",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19, this.camera_C1C514A6_FAA6_358C_41E9_6A6E26A8E62B); this.mainPlayList.set('selectedIndex', 0)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 24.71,
   "hfov": 10,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0_HS_1_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "abrir puertas"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0_HS_1_0.png",
      "width": 287,
      "class": "ImageResourceLevel",
      "height": 317
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.53,
   "yaw": 24.71,
   "distance": 50
  }
 ],
 "id": "overlay_EB364115_F2E6_AD07_41E0_24D3EFDF9AC9",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_C1F4E4B4_FAA6_358C_41E9_33D0AA57BDC9, this.panorama_E258E3A7_F262_AD03_41E0_B75DA340C271); this.startPanoramaWithCamera(this.panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF, this.camera_C1F4E4B4_FAA6_358C_41E9_33D0AA57BDC9); this.mainPlayList.set('selectedIndex', 3)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 24.42,
   "hfov": 10.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "icon abrir puertas"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.36,
   "pitch": -16.46,
   "yaw": 24.42,
   "image": "this.AnimatedImageResource_DAB9FC2C_F9AA_7483_41E6_F02A7E99117C",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EB032D03_F2E2_B503_41D5_E114E2C32F0B",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_C1E7B4C2_FAA6_3584_41E4_8A9ACB16B3A3, this.panorama_E258E3A7_F262_AD03_41E0_B75DA340C271); this.startPanoramaWithCamera(this.panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF, this.camera_C1E7B4C2_FAA6_3584_41E4_8A9ACB16B3A3); this.mainPlayList.set('selectedIndex', 3)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 67.86,
   "hfov": 14.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "ir a perspectiva 3"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.93,
   "pitch": -21.15,
   "yaw": 67.86,
   "image": "this.AnimatedImageResource_DAB9CC31_F9AA_7485_41DF_C5CAE8FD2CCB",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E8927AC7_F97A_DD8C_41D9_BEBB81295333",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FDD3B010_F261_EB1C_41ED_560070399204, this.camera_C1E9C4D1_FAA6_3584_41D5_54DA3C27BB2E); this.mainPlayList.set('selectedIndex', 4)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.41,
   "hfov": 12.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0_HS_4_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "encender el motor"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.91,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0_HS_4_0.png",
      "width": 373,
      "class": "ImageResourceLevel",
      "height": 222
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.38,
   "yaw": -16.41,
   "distance": 50
  }
 ],
 "id": "overlay_E8F9CC59_F966_3484_41E5_AE2E1710D6A9",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_E41A1622_F227_973D_41E4_E8FD58B119D1, this.panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19); this.startPanoramaWithCamera(this.panorama_FF789D13_F263_951C_41D9_105C8727681A, this.camera_E41A1622_F227_973D_41E4_E8FD58B119D1); this.playGlobalAudioWhilePlay(this.mainPlayList, 2, this.audio_EBDCA255_F2E3_EF04_41D5_65092F3815C3, undefined)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 5.37,
   "hfov": 10.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0_HS_5_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "sonar la bocina"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.09,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0_HS_5_0.png",
      "width": 284,
      "class": "ImageResourceLevel",
      "height": 198
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.28,
   "yaw": 5.37,
   "distance": 50
  }
 ],
 "id": "overlay_E8E63C59_F966_3484_41E2_91C404475A27",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_E41A1622_F227_973D_41E4_E8FD58B119D1, this.panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19); this.startPanoramaWithCamera(this.panorama_FF789D13_F263_951C_41D9_105C8727681A, this.camera_E41A1622_F227_973D_41E4_E8FD58B119D1); this.playGlobalAudioWhilePlay(this.mainPlayList, 2, this.audio_EB6DC748_F222_950C_41C3_F579A5BF210D, undefined)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.68,
   "hfov": 6.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Icon - Encender Motor"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.37,
   "pitch": -16.99,
   "yaw": -16.68,
   "image": "this.AnimatedImageResource_DAB96C31_F9AA_7485_41E9_6054FF440BDA",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E8E62C59_F966_3484_41A8_A5B658B883FD",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.playGlobalAudioWhilePlay(this.mainPlayList, 2, this.audio_EBDCA255_F2E3_EF04_41D5_65092F3815C3, undefined)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.75,
   "hfov": 5.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Icon - Sonar Bocina"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.24,
   "pitch": -11.29,
   "yaw": 4.75,
   "image": "this.AnimatedImageResource_DABADC31_F9AA_7485_41D6_0EE077F63024",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E8E61C59_F966_3484_41AB_C10EE91E5D40",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.playGlobalAudioWhilePlay(this.mainPlayList, 2, this.audio_EB6DC748_F222_950C_41C3_F579A5BF210D, undefined)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.95,
   "hfov": 7.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0_HS_8_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "ver interior"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.78,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0_HS_8_0.png",
      "width": 216,
      "class": "ImageResourceLevel",
      "height": 170
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.9,
   "yaw": 8.95,
   "distance": 50
  }
 ],
 "id": "overlay_EFA57BC9_F99A_D385_41E5_562AF155A012",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B, this.camera_C120C489_FAA6_3584_41E8_BE8DF8F68BD6); this.mainPlayList.set('selectedIndex', 8)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.6,
   "hfov": 3.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.92
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Icon Ver interior"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.59,
   "pitch": -3.92,
   "yaw": 8.6,
   "image": "this.AnimatedImageResource_DAB99C31_F9AA_7485_41B1_686B8470D05F",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EFA54BC9_F99A_D385_41B7_6EBD1CBF292A",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B, this.camera_C1D26497_FAA6_358C_41EC_5773FB17632A); this.mainPlayList.set('selectedIndex', 8)"
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 43.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4,
 "pitch": 15.89,
 "id": "overlay_DEE81434_F999_F48C_41A3_24C670C864E3",
 "yaw": -76.75,
 "bleaching": 0.7
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 22.56,
   "hfov": 9.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0_HS_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "abrir puertas"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.95,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0_HS_0_0.png",
      "width": 286,
      "class": "ImageResourceLevel",
      "height": 316
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.74,
   "yaw": 22.56,
   "distance": 50
  }
 ],
 "id": "overlay_E5D32269_F9A9_CC85_41D2_2E9CB70D1463",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_C6DC959A_FAA6_3784_41C9_5A9D8FD0FDE4, this.panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06); this.startPanoramaWithCamera(this.panorama_FD013EBF_F261_9704_41E1_A65F3D829440, this.camera_C6DC959A_FAA6_3784_41C9_5A9D8FD0FDE4); this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 22.41,
   "hfov": 10.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "icon abrir puertas"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.33,
   "pitch": -16.96,
   "yaw": 22.41,
   "image": "this.AnimatedImageResource_DBBB5E53_F9FA_D485_41EF_0065C954528E",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E5D31269_F9A9_CC85_41E1_EFC8A961B154",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_C6CE55A9_FAA6_3784_41E9_A96E2CCA62AB, this.panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06); this.startPanoramaWithCamera(this.panorama_FD013EBF_F261_9704_41E1_A65F3D829440, this.camera_C6CE55A9_FAA6_3784_41E9_A96E2CCA62AB); this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 68.42,
   "hfov": 14.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "ir a perspectiva 4"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.58,
   "pitch": -24.43,
   "yaw": 68.42,
   "image": "this.AnimatedImageResource_DBBABE53_F9FA_D485_41D9_1F4C2C02E5A1",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E5D30269_F9A9_CC85_41E3_38760716583C",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375, this.camera_C607A562_FAA6_3484_41EA_FA1D086EE25E); this.mainPlayList.set('selectedIndex', 6)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.05,
   "hfov": 9.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0_HS_3_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "abrir puertas"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.88,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0_HS_3_0.png",
      "width": 286,
      "class": "ImageResourceLevel",
      "height": 316
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.59,
   "yaw": -5.05,
   "distance": 50
  }
 ],
 "id": "overlay_E5D37269_F9A9_CC85_41DC_B8AEF9DF6FDA",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_C6F105B8_FAA6_3784_41E4_6926F442B7BC, this.panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06); this.startPanoramaWithCamera(this.panorama_FD013EBF_F261_9704_41E1_A65F3D829440, this.camera_C6F105B8_FAA6_3784_41E4_6926F442B7BC); this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.77,
   "hfov": 8.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "icon abrir puertas"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.27,
   "pitch": -17.03,
   "yaw": -5.77,
   "image": "this.AnimatedImageResource_DBBAFE54_F9FA_D483_41C5_85133A78B3A6",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E5D36269_F9A9_CC85_41E5_D065B0472731",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_C6E0C5C7_FAA6_378C_41E9_6F65C9C14B02, this.panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06); this.startPanoramaWithCamera(this.panorama_FD013EBF_F261_9704_41E1_A65F3D829440, this.camera_C6E0C5C7_FAA6_378C_41E9_6F65C9C14B02); this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -71.02,
   "hfov": 14.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0_HS_5_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "ir a perspectiva 4"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.65,
   "pitch": -23.75,
   "yaw": -71.02,
   "image": "this.AnimatedImageResource_DBBADE54_F9FA_D483_41E6_0A47251B6B41",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E5D35269_F9A9_CC85_41E8_CF216C5E727B",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_E258E3A7_F262_AD03_41E0_B75DA340C271, this.camera_C62BE58C_FAA6_379C_41A2_509AEA5FA2C1); this.mainPlayList.set('selectedIndex', 2)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.35,
   "hfov": 7.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0_HS_6_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "ver interior"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.76,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0_HS_6_0.png",
      "width": 216,
      "class": "ImageResourceLevel",
      "height": 170
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.87,
   "yaw": 7.35,
   "distance": 50
  }
 ],
 "id": "overlay_E5D34269_F9A9_CC85_41E1_1C27487303C2",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B, this.camera_C6090570_FAA6_3484_41E4_CF0F63AB0847); this.mainPlayList.set('selectedIndex', 8)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 6.58,
   "hfov": 6.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Icon Ver interior"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.67,
   "pitch": -6.58,
   "yaw": 6.58,
   "image": "this.AnimatedImageResource_DBBA0E54_F9FA_D483_41BE_441700DCC7CC",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E5D3B269_F9A9_CC85_41E6_6116D02B807A",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B, this.camera_C638D57E_FAA6_377C_41EB_364661AC567F); this.mainPlayList.set('selectedIndex', 8)"
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 43.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4,
 "pitch": 13.88,
 "id": "overlay_DEC5D39C_F99E_53BC_41E2_7DA41B9E75E3",
 "yaw": -28.51,
 "bleaching": 0.7
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 22.56,
   "hfov": 9.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0_HS_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.74
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "abrir puertas"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.95,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0_HS_0_0.png",
      "width": 287,
      "class": "ImageResourceLevel",
      "height": 317
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.74,
   "yaw": 22.56,
   "distance": 50
  }
 ],
 "id": "overlay_E88D4310_F966_CC83_41EE_43ECBC9CB654",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_C07C02FD_FAA6_CD7D_41C0_A49D2136CE6E, this.panorama_FDD3B010_F261_EB1C_41ED_560070399204); this.startPanoramaWithCamera(this.panorama_FD013EBF_F261_9704_41E1_A65F3D829440, this.camera_C07C02FD_FAA6_CD7D_41C0_A49D2136CE6E); this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 22.41,
   "hfov": 10.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "icon abrir puertas"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.33,
   "pitch": -16.96,
   "yaw": 22.41,
   "image": "this.AnimatedImageResource_DAB4AC31_F9AA_7485_41C7_44D0F95BB5FA",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E88D5310_F966_CC83_41B3_F544E6EDCD54",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_C060930C_FAA6_CC83_41EA_B6B652829378, this.panorama_FDD3B010_F261_EB1C_41ED_560070399204); this.startPanoramaWithCamera(this.panorama_FD013EBF_F261_9704_41E1_A65F3D829440, this.camera_C060930C_FAA6_CC83_41EA_B6B652829378); this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 68.42,
   "hfov": 14.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "ir a perspectiva 4"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.58,
   "pitch": -24.43,
   "yaw": 68.42,
   "image": "this.AnimatedImageResource_DAB41C31_F9AA_7485_41DA_BD4B0A9ED77B",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E88D6310_F966_CC83_41EA_DAF2EA903184",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375, this.camera_C3A802C4_FAA6_CD83_41EA_9FBEF0C8FBE1); this.mainPlayList.set('selectedIndex', 6)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.05,
   "hfov": 9.88,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0_HS_3_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "abrir puertas"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.88,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0_HS_3_0.png",
      "width": 286,
      "class": "ImageResourceLevel",
      "height": 316
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.59,
   "yaw": -5.05,
   "distance": 50
  }
 ],
 "id": "overlay_EA5FEB3E_F96B_DCFF_41CF_C6360E397E33",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_C017631A_FAA6_CC87_41DE_CAD6BBF40469, this.panorama_FDD3B010_F261_EB1C_41ED_560070399204); this.startPanoramaWithCamera(this.panorama_FD013EBF_F261_9704_41E1_A65F3D829440, this.camera_C017631A_FAA6_CC87_41DE_CAD6BBF40469); this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.77,
   "hfov": 8.27,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "icon abrir puertas"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.27,
   "pitch": -17.03,
   "yaw": -5.77,
   "image": "this.AnimatedImageResource_DAB59C31_F9AA_7485_41DD_5783E5D6C9C0",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EA5FFB3E_F96B_DCFF_41CD_CDDECF47E180",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_C01BF328_FAA6_CC83_41EB_6976BAB0D29E, this.panorama_FDD3B010_F261_EB1C_41ED_560070399204); this.startPanoramaWithCamera(this.panorama_FD013EBF_F261_9704_41E1_A65F3D829440, this.camera_C01BF328_FAA6_CC83_41EB_6976BAB0D29E); this.mainPlayList.set('selectedIndex', 5)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -71.02,
   "hfov": 14.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0_HS_5_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "ir a perspectiva 4"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.65,
   "pitch": -23.75,
   "yaw": -71.02,
   "image": "this.AnimatedImageResource_DAB54C31_F9AA_7485_41D5_F5061FCBDB1A",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ED434C86_F96A_558C_41CB_D8A5CC95EE05",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_E258E3A7_F262_AD03_41E0_B75DA340C271, this.camera_C049E2EF_FAA6_CD9D_41DE_8A42DB109C76); this.mainPlayList.set('selectedIndex', 2)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 7.35,
   "hfov": 7.76,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0_HS_6_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.87
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "ver interior"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.76,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0_HS_6_0.png",
      "width": 216,
      "class": "ImageResourceLevel",
      "height": 170
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.87,
   "yaw": 7.35,
   "distance": 50
  }
 ],
 "id": "overlay_EC0CCDD6_F9A6_D78C_41B8_C23BF0BF0650",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B, this.camera_C05F42D2_FAA6_CD87_41CD_34256EA02301); this.mainPlayList.set('selectedIndex', 8)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 6.58,
   "hfov": 6.67,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Icon Ver interior"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.67,
   "pitch": -6.58,
   "yaw": 6.58,
   "image": "this.AnimatedImageResource_DAB52C31_F9AA_7485_41E7_AFEB69B34B5A",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EC0CDDD6_F9A6_D78C_41E2_AB4F79FEB6EE",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B, this.camera_C04562E0_FAA6_CD83_41EC_AF8691A5A50F); this.mainPlayList.set('selectedIndex', 8)"
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 43.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_FDD3B010_F261_EB1C_41ED_560070399204_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4,
 "pitch": 14.38,
 "id": "overlay_DE8EE5CD_F99E_379D_4174_0B47DD2622D3",
 "yaw": -28.51,
 "bleaching": 0.7
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4,
 "pitch": 19.41,
 "id": "overlay_E2AFAFFB_F26E_9503_41ED_BDC0976D6128",
 "yaw": -138.55,
 "bleaching": 0.7
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.44,
   "hfov": 11.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0_HS_1_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "encender el motor"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.48,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0_HS_1_0.png",
      "width": 374,
      "class": "ImageResourceLevel",
      "height": 222
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.69,
   "yaw": 12.44,
   "distance": 50
  }
 ],
 "id": "overlay_E6E7EDD6_F22E_9505_41B1_D279213FEF79",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_E41A1622_F227_973D_41E4_E8FD58B119D1, this.panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19); this.startPanoramaWithCamera(this.panorama_FF789D13_F263_951C_41D9_105C8727681A, this.camera_E41A1622_F227_973D_41E4_E8FD58B119D1); this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_EBDCA255_F2E3_EF04_41D5_65092F3815C3, undefined)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.77,
   "hfov": 10.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0_HS_3_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "sonar la bocina"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.17,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0_HS_3_0.png",
      "width": 285,
      "class": "ImageResourceLevel",
      "height": 198
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.17,
   "yaw": 8.77,
   "distance": 50
  }
 ],
 "id": "overlay_EA7821D5_F23F_ED04_41E2_DAF275DD3F96",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_E41A1622_F227_973D_41E4_E8FD58B119D1, this.panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19); this.startPanoramaWithCamera(this.panorama_FF789D13_F263_951C_41D9_105C8727681A, this.camera_E41A1622_F227_973D_41E4_E8FD58B119D1); this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_EB6DC748_F222_950C_41C3_F579A5BF210D, undefined)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.18,
   "hfov": 9.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0_HS_5_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "abrir el cap\u00f3"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.23,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0_HS_5_0.png",
      "width": 268,
      "class": "ImageResourceLevel",
      "height": 222
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.62,
   "yaw": 0.18,
   "distance": 50
  }
 ],
 "id": "overlay_E883F893_F223_BB03_41B9_0B01E2D0B001",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_C16D444A_FAA6_3484_41E5_A4762B085DFE, this.panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19); this.startPanoramaWithCamera(this.panorama_FF789D13_F263_951C_41D9_105C8727681A, this.camera_C16D444A_FAA6_3484_41E5_A4762B085DFE); this.mainPlayList.set('selectedIndex', 1)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 63.49,
   "hfov": 10.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_1_HS_6_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "A Perspectiva 2"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.07,
   "pitch": -24.78,
   "yaw": 63.49,
   "image": "this.AnimatedImageResource_E8D66BFF_F2E1_9D03_41D3_CBF36F4B9DB3",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E5FBAA3D_F226_7F04_41BB_E734DEC14B9E",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_E258E3A7_F262_AD03_41E0_B75DA340C271, this.camera_C10FB469_FAA6_3484_41E0_32CC0025C6FF); this.mainPlayList.set('selectedIndex', 2)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.11,
   "hfov": 6.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Icon - Abrir Capot"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.09,
   "pitch": -18.76,
   "yaw": 0.11,
   "image": "this.AnimatedImageResource_E8D70BFE_F2E1_9D05_41D3_F70E00269544",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E70845D4_F221_9504_41E5_0F614EB101FC",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_C11CE45A_FAA6_3484_41E6_E6DF9FE4B46A, this.panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19); this.startPanoramaWithCamera(this.panorama_FF789D13_F263_951C_41D9_105C8727681A, this.camera_C11CE45A_FAA6_3484_41E6_E6DF9FE4B46A); this.mainPlayList.set('selectedIndex', 1)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 11.78,
   "hfov": 5.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Icon - Encender Motor"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.58,
   "pitch": -33.05,
   "yaw": 11.78,
   "image": "this.AnimatedImageResource_DABCBC2C_F9AA_7483_41E1_06CEB66D83AF",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EB301E21_F223_B73F_41C7_17E6669FA25F",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_EBDCA255_F2E3_EF04_41D5_65092F3815C3, undefined)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.1,
   "hfov": 5.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Icon - Sonar Bocina"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.28,
   "pitch": -9.25,
   "yaw": 8.1,
   "image": "this.AnimatedImageResource_DABC6C2C_F9AA_7483_41B2_73249E925868",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EA13F1EC_F222_AD04_41E9_6776A6A37506",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.playGlobalAudioWhilePlay(this.mainPlayList, 0, this.audio_EB6DC748_F222_950C_41C3_F579A5BF210D, undefined)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 21.66,
   "hfov": 2.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0_HS_7_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Foto Faro"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0_HS_7_0.png",
      "width": 85,
      "class": "ImageResourceLevel",
      "height": 77
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.46,
   "yaw": 21.66
  }
 ],
 "id": "overlay_EB8BC1B7_F2E1_AD03_41DE_23E48705A457",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_EB22D5D2_F2E2_951C_41A0_152FBB529ECA, {'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverIconHeight':20,'paddingLeft':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':20,'paddingRight':5,'pressedIconHeight':20,'pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','iconColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'backgroundColorDirection':'vertical','borderColor':'#000000','rollOverBorderSize':0,'pressedBorderSize':0,'iconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20}, this.ImageResource_EA6A3632_F2E7_971D_41C1_D6079374DA64, null, null, null, null, false)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.99,
   "hfov": 7.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0_HS_8_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "ver interior"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.77,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0_HS_8_0.png",
      "width": 216,
      "class": "ImageResourceLevel",
      "height": 221
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.84,
   "yaw": -0.99,
   "distance": 50
  }
 ],
 "id": "overlay_EC3AA536_F99E_348C_41D6_1F0E4957A1EE",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B, this.camera_C176942E_FAA6_349C_41CE_F5DFDEB514F7); this.mainPlayList.set('selectedIndex', 8)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.42,
   "hfov": 3.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Icon Ver interior"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.58,
   "pitch": -5.71,
   "yaw": -1.42,
   "image": "this.AnimatedImageResource_DABEDC2C_F9AA_7483_41E0_4EF9B48F66E4",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ECBDA131_F99E_CC84_41D0_B18E495731CD",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B, this.camera_C17A443C_FAA6_34FC_41AA_54A152005A84); this.mainPlayList.set('selectedIndex', 8)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 33.08,
   "hfov": 8.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0_HS_10_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "ir a perspectiva 3"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.19,
   "pitch": -14.4,
   "yaw": 33.08,
   "image": "this.AnimatedImageResource_DBB23E49_F9FA_D485_41E4_D22D548B1F59",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E5BEFB76_F9A6_3C8F_41BC_80715E498940",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FDD3B010_F261_EB1C_41ED_560070399204, this.camera_C1317479_FAA6_3484_41DE_D4692CADC63D); this.mainPlayList.set('selectedIndex', 4)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -23.01,
   "hfov": 9.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0_HS_11_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "  ficha t\u00e9cnica"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.71,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0_HS_11_0.png",
      "width": 276,
      "class": "ImageResourceLevel",
      "height": 214
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.61,
   "yaw": -23.01,
   "distance": 50
  }
 ],
 "id": "overlay_D81DC903_F9E6_5C84_41E4_D783ADBFF1ED",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_E41A1622_F227_973D_41E4_E8FD58B119D1, this.panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19); this.startPanoramaWithCamera(this.panorama_FF789D13_F263_951C_41D9_105C8727681A, this.camera_E41A1622_F227_973D_41E4_E8FD58B119D1); this.showPopupPanoramaOverlay(this.popup_D808F8D4_F9E6_5D8C_41EA_1736D7CBB879, {'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverIconHeight':20,'paddingLeft':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':20,'paddingRight':5,'pressedIconHeight':20,'pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','iconColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'backgroundColorDirection':'vertical','borderColor':'#000000','rollOverBorderSize':0,'pressedBorderSize':0,'iconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20}, null, null, null, null, null, false)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -23.21,
   "hfov": 5.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0_HS_12_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "icon ficha tecnica"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.08,
   "pitch": -13.45,
   "yaw": -23.21,
   "image": "this.AnimatedImageResource_DBB27E4A_F9FA_D487_41C0_1045EA288F86",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D81DD903_F9E6_5C84_41E3_14F1DC89A71B",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_D809E8D5_F9E6_5D8C_41C3_42A9322DB424, {'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverIconHeight':20,'paddingLeft':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':20,'paddingRight':5,'pressedIconHeight':20,'pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','iconColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'backgroundColorDirection':'vertical','borderColor':'#000000','rollOverBorderSize':0,'pressedBorderSize':0,'iconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20}, null, null, null, null, null, false)"
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 43.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "hfov": 40.42,
 "enabledInCardboard": true,
 "data": {
  "label": "Video"
 },
 "id": "overlay_CE69D9F5_FAAB_FF8C_41B7_117E76BB49D8",
 "vfov": 27.3,
 "roll": 0.81,
 "class": "VideoPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/overlay_CE69D9F5_FAAB_FF8C_41B7_117E76BB49D8_t.jpg",
    "width": 1280,
    "class": "ImageResourceLevel",
    "height": 720
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 2.27,
 "useHandCursor": true,
 "yaw": 149.52,
 "loop": false,
 "click": "if(this.overlay_CE69D9F5_FAAB_FF8C_41B7_117E76BB49D8.get('state') != 'playing'){ this.overlay_CE69D9F5_FAAB_FF8C_41B7_117E76BB49D8.play(); } else { this.overlay_CE69D9F5_FAAB_FF8C_41B7_117E76BB49D8.pause(); }",
 "rotationY": -9.25,
 "rotationX": -0.27,
 "videoVisibleOnStop": false,
 "autoplay": false,
 "distance": 50,
 "stateChange": "if(this.overlay_CE69D9F5_FAAB_FF8C_41B7_117E76BB49D8.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_CE69D9F5_FAAB_FF8C_41B7_117E76BB49D8', [this.overlay_CE69D9F5_FAAB_FF8C_41B7_117E76BB49D8]); } else { this.resumeGlobalAudios('overlay_CE69D9F5_FAAB_FF8C_41B7_117E76BB49D8'); }",
 "blending": 0,
 "video": {
  "width": 1144,
  "class": "VideoResource",
  "mp4Url": "media/video_CE14519E_FAAA_4FBF_41DE_DE0D2D396E77.mp4",
  "height": 644
 }
},
{
 "hfov": 36.89,
 "enabledInCardboard": true,
 "data": {
  "label": "Video"
 },
 "id": "overlay_C2165607_FAAE_548D_41ED_C4CA80C98AB4",
 "vfov": 25.42,
 "roll": 0.93,
 "class": "VideoPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/overlay_C2165607_FAAE_548D_41ED_C4CA80C98AB4_t.jpg",
    "width": 1280,
    "class": "ImageResourceLevel",
    "height": 720
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 19.82,
 "useHandCursor": true,
 "yaw": 47.68,
 "loop": false,
 "click": "if(this.overlay_C2165607_FAAE_548D_41ED_C4CA80C98AB4.get('state') != 'playing'){ this.overlay_C2165607_FAAE_548D_41ED_C4CA80C98AB4.play(); } else { this.overlay_C2165607_FAAE_548D_41ED_C4CA80C98AB4.pause(); }",
 "rotationY": -3.16,
 "rotationX": -13.48,
 "videoVisibleOnStop": false,
 "autoplay": false,
 "distance": 50,
 "stateChange": "if(this.overlay_C2165607_FAAE_548D_41ED_C4CA80C98AB4.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_C2165607_FAAE_548D_41ED_C4CA80C98AB4', [this.overlay_C2165607_FAAE_548D_41ED_C4CA80C98AB4]); } else { this.resumeGlobalAudios('overlay_C2165607_FAAE_548D_41ED_C4CA80C98AB4'); }",
 "blending": 0,
 "video": {
  "width": 1144,
  "class": "VideoResource",
  "mp4Url": "media/video_C25092E3_FAAE_4D84_41D1_75D02597D940.mp4",
  "height": 644
 }
},
{
 "hfov": 37.12,
 "enabledInCardboard": true,
 "data": {
  "label": "Video"
 },
 "id": "overlay_CCD8F7DE_FAAE_33BC_41EE_BE5C03660B64",
 "vfov": 25.11,
 "roll": 0.75,
 "class": "VideoPanoramaOverlay",
 "image": {
  "levels": [
   {
    "url": "media/overlay_CCD8F7DE_FAAE_33BC_41EE_BE5C03660B64_t.jpg",
    "width": 1280,
    "class": "ImageResourceLevel",
    "height": 720
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 20.11,
 "useHandCursor": true,
 "yaw": -49.67,
 "loop": false,
 "click": "if(this.overlay_CCD8F7DE_FAAE_33BC_41EE_BE5C03660B64.get('state') != 'playing'){ this.overlay_CCD8F7DE_FAAE_33BC_41EE_BE5C03660B64.play(); } else { this.overlay_CCD8F7DE_FAAE_33BC_41EE_BE5C03660B64.pause(); }",
 "rotationY": -2.46,
 "rotationX": -11.46,
 "videoVisibleOnStop": false,
 "autoplay": false,
 "distance": 50,
 "stateChange": "if(this.overlay_CCD8F7DE_FAAE_33BC_41EE_BE5C03660B64.get('state') == 'playing'){ this.pauseGlobalAudios('overlay_CCD8F7DE_FAAE_33BC_41EE_BE5C03660B64', [this.overlay_CCD8F7DE_FAAE_33BC_41EE_BE5C03660B64]); } else { this.resumeGlobalAudios('overlay_CCD8F7DE_FAAE_33BC_41EE_BE5C03660B64'); }",
 "blending": 0,
 "video": {
  "width": 1144,
  "class": "VideoResource",
  "mp4Url": "media/video_CC278578_FAAE_3483_41D5_F6B2E66218A4.mp4",
  "height": 644
 }
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.56,
   "hfov": 9.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_0_HS_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "ver interior"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.68,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_0_HS_0_0.png",
      "width": 269,
      "class": "ImageResourceLevel",
      "height": 221
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.9,
   "yaw": 0.56,
   "distance": 50
  }
 ],
 "id": "overlay_E5296028_F99A_4C83_41E2_390ED9BFC50C",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B, this.camera_C0CA8390_FAA6_3383_41EA_EE67B0042589); this.mainPlayList.set('selectedIndex', 8)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.59,
   "hfov": 5.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Icon Ver interior"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.22,
   "pitch": -6.61,
   "yaw": -0.59,
   "image": "this.AnimatedImageResource_DBBF9E58_F9FA_D483_41D7_9F8697A00BF0",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E5297028_F99A_4C83_41D7_5044466D9432",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B, this.camera_C0F1739E_FAA6_33BF_41DC_77FF2579C4F0); this.mainPlayList.set('selectedIndex', 8)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -60.52,
   "hfov": 14.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "ir a perspectiva 3"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.37,
   "pitch": -26.17,
   "yaw": -60.52,
   "image": "this.AnimatedImageResource_DBBFFE58_F9FA_D483_41CD_34F71C66C020",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E5618977_F99A_3C8D_41EB_37C5837BE660",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FDD3B010_F261_EB1C_41ED_560070399204, this.camera_C0E5C3AC_FAA6_3383_41E6_05E65551AD28); this.mainPlayList.set('selectedIndex', 4)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.06,
   "hfov": 9.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_0_HS_3_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "  abrir ba\u00fal"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.14,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_0_HS_3_0.png",
      "width": 284,
      "class": "ImageResourceLevel",
      "height": 322
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.86,
   "yaw": -0.06,
   "distance": 50
  }
 ],
 "id": "overlay_E5617978_F99A_3C83_41B3_16EDBEF1D8E7",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_C0D01372_FAA6_CC87_41E1_0AABB338C497, this.panorama_EF7AF964_F99E_7C83_41EA_12427C876877); this.startPanoramaWithCamera(this.panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77, this.camera_C0D01372_FAA6_CC87_41E1_0AABB338C497); this.mainPlayList.set('selectedIndex', 7)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.17,
   "hfov": 9.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "icon abrir puertas"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.54,
   "pitch": -28,
   "yaw": -0.17,
   "image": "this.AnimatedImageResource_DBBF3E59_F9FA_D485_41E6_E81188A18FFF",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E5616978_F99A_3C83_41DE_C72FA436C6B9",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_C0C48381_FAA6_3385_41EE_E21A998DDB52, this.panorama_EF7AF964_F99E_7C83_41EA_12427C876877); this.startPanoramaWithCamera(this.panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77, this.camera_C0C48381_FAA6_3385_41EE_E21A998DDB52); this.mainPlayList.set('selectedIndex', 7)"
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 43.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_EF7AF964_F99E_7C83_41EA_12427C876877_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4,
 "pitch": 13.13,
 "id": "overlay_DEDAE03B_F99E_4C84_41D5_97B58254BBE8",
 "yaw": 25.75,
 "bleaching": 0.7
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.44,
   "hfov": 11.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0_HS_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "encender el motor"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.48,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0_HS_0_0.png",
      "width": 374,
      "class": "ImageResourceLevel",
      "height": 222
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.69,
   "yaw": 12.44,
   "distance": 50
  }
 ],
 "id": "overlay_EBE8EC8E_F2E2_BB04_41D3_3D1F2DF61455",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_E41A1622_F227_973D_41E4_E8FD58B119D1, this.panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19); this.startPanoramaWithCamera(this.panorama_FF789D13_F263_951C_41D9_105C8727681A, this.camera_E41A1622_F227_973D_41E4_E8FD58B119D1); this.playGlobalAudioWhilePlay(this.mainPlayList, 1, this.audio_EBDCA255_F2E3_EF04_41D5_65092F3815C3, undefined)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.82,
   "hfov": 11.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0_HS_2_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "cerrar el cap\u00f3"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.17,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0_HS_2_0.png",
      "width": 311,
      "class": "ImageResourceLevel",
      "height": 222
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.16,
   "yaw": 0.82,
   "distance": 50
  }
 ],
 "id": "overlay_EBE8DC8E_F2E2_BB04_41ED_9D1E44849E54",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_C3B1D2A7_FAA6_CD8D_41E7_F2F8539E561B, this.panorama_FF789D13_F263_951C_41D9_105C8727681A); this.startPanoramaWithCamera(this.panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95, this.camera_C3B1D2A7_FAA6_CD8D_41E7_F2F8539E561B); this.setMediaBehaviour(this.playList_C2A2C179_FAA6_CC85_41EC_AA10B0EEAC53, 0, this.panorama_FF789D13_F263_951C_41D9_105C8727681A)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 9.6,
   "hfov": 10.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0_HS_9_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "sonar la bocina"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.19,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0_HS_9_0.png",
      "width": 285,
      "class": "ImageResourceLevel",
      "height": 198
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.28,
   "yaw": 9.6,
   "distance": 50
  }
 ],
 "id": "overlay_E7CC79AA_F999_DF87_41E8_89535FD9EE20",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_E41A1622_F227_973D_41E4_E8FD58B119D1, this.panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19); this.startPanoramaWithCamera(this.panorama_FF789D13_F263_951C_41D9_105C8727681A, this.camera_E41A1622_F227_973D_41E4_E8FD58B119D1); this.playGlobalAudioWhilePlay(this.mainPlayList, 1, this.audio_EB6DC748_F222_950C_41C3_F579A5BF210D, undefined)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 63.49,
   "hfov": 10.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "A Perspectiva 2"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.07,
   "pitch": -24.78,
   "yaw": 63.49,
   "image": "this.AnimatedImageResource_DABE0C2C_F9AA_7483_41E7_8733B80828E7",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EBE8AC8E_F2E2_BB04_41E7_58F8262B4D24",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_E258E3A7_F262_AD03_41E0_B75DA340C271, this.camera_C386628B_FAA6_CD85_41C6_35D01EEA7330); this.mainPlayList.set('selectedIndex', 2)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.41,
   "hfov": 6.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Icon - Abrir Capot"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.42,
   "pitch": 4,
   "yaw": 0.41,
   "image": "this.AnimatedImageResource_DABFEC2C_F9AA_7483_41EB_6E78040F43FA",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EBE8BC8E_F2E2_BB04_41DC_6B35C5B88A58",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_C3A5B2B6_FAA6_CD8F_41CF_A7E4EA2997B2, this.panorama_FF789D13_F263_951C_41D9_105C8727681A); this.startPanoramaWithCamera(this.panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95, this.camera_C3A5B2B6_FAA6_CD8F_41CF_A7E4EA2997B2); this.setMediaBehaviour(this.playList_C2A2C179_FAA6_CC85_41EC_AA10B0EEAC53, 0, this.panorama_FF789D13_F263_951C_41D9_105C8727681A)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 11.78,
   "hfov": 5.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Icon - Encender Motor"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.58,
   "pitch": -33.05,
   "yaw": 11.78,
   "image": "this.AnimatedImageResource_DABFAC2C_F9AA_7483_41EA_9F26C22E9854",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EBE88C8E_F2E2_BB04_41D0_E1267C0669CA",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.playGlobalAudioWhilePlay(this.mainPlayList, 1, this.audio_EBDCA255_F2E3_EF04_41D5_65092F3815C3, undefined)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.19,
   "hfov": 5.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Icon - Sonar Bocina"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.29,
   "pitch": -8.22,
   "yaw": 8.19,
   "image": "this.AnimatedImageResource_DABF1C2C_F9AA_7483_41ED_11EC6B77AC9B",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EBE89C8E_F2E2_BB04_41D4_3632D8D63BAA",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.playGlobalAudioWhilePlay(this.mainPlayList, 1, this.audio_EB6DC748_F222_950C_41C3_F579A5BF210D, undefined)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.78,
   "hfov": 7.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0_HS_7_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "ver interior"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.74,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0_HS_7_0.png",
      "width": 216,
      "class": "ImageResourceLevel",
      "height": 221
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.48,
   "yaw": -0.78,
   "distance": 50
  }
 ],
 "id": "overlay_EC6B60B9_F99B_CD85_41DB_479ED6B372CB",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B, this.camera_C3EC826F_FAA6_CC9D_41CD_5C76294D0809); this.mainPlayList.set('selectedIndex', 8)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.99,
   "hfov": 3.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Icon Ver interior"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.57,
   "pitch": -7.21,
   "yaw": -0.99,
   "image": "this.AnimatedImageResource_DAB89C2C_F9AA_7483_41D9_48BDE698CE91",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EC6B90B9_F99B_CD85_41DD_D5ECFE0960E0",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B, this.camera_C393327D_FAA6_CD7D_41E3_1648B37F7361); this.mainPlayList.set('selectedIndex', 8)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 33.08,
   "hfov": 8.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0_HS_10_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "ir a perspectiva 3"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.19,
   "pitch": -14.4,
   "yaw": 33.08,
   "image": "this.AnimatedImageResource_DBB56E4B_F9FA_D485_41D0_BBBFAE651C3E",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E502AD04_F9A6_7483_41EC_4124F55AF90E",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FDD3B010_F261_EB1C_41ED_560070399204, this.camera_C38A8299_FAA6_CD85_41DE_1B31E79E99CC); this.mainPlayList.set('selectedIndex', 4)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -23.01,
   "hfov": 9.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0_HS_1_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "  ficha t\u00e9cnica"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.71,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0_HS_1_0.png",
      "width": 276,
      "class": "ImageResourceLevel",
      "height": 214
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.61,
   "yaw": -23.01,
   "distance": 50
  }
 ],
 "id": "overlay_EBE8FC8E_F2E2_BB04_41E4_C24829D2A92A",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_E41A1622_F227_973D_41E4_E8FD58B119D1, this.panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19); this.startPanoramaWithCamera(this.panorama_FF789D13_F263_951C_41D9_105C8727681A, this.camera_E41A1622_F227_973D_41E4_E8FD58B119D1); this.showPopupPanoramaOverlay(this.popup_D95F0E4E_F99A_349C_41EA_7C79A32CB19A, {'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverIconHeight':20,'paddingLeft':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':20,'paddingRight':5,'pressedIconHeight':20,'pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','iconColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'backgroundColorDirection':'vertical','borderColor':'#000000','rollOverBorderSize':0,'pressedBorderSize':0,'iconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20}, null, null, null, null, null, false)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -23.21,
   "hfov": 5.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0_HS_11_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "icon ficha tecnica"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.08,
   "pitch": -13.45,
   "yaw": -23.21,
   "image": "this.AnimatedImageResource_DBB4AE4C_F9FA_D483_41DF_1A8C2DED628D",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E649C08D_F99E_4D9D_41E3_184F3AC19F75",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_E6696D42_F99A_D487_41EB_ED5DEC55F356, {'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverIconHeight':20,'paddingLeft':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':20,'paddingRight':5,'pressedIconHeight':20,'pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','iconColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'backgroundColorDirection':'vertical','borderColor':'#000000','rollOverBorderSize':0,'pressedBorderSize':0,'iconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20}, null, null, null, null, null, false)"
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 43.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_FF789D13_F263_951C_41D9_105C8727681A_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4,
 "pitch": 19.16,
 "id": "overlay_DE5FBF80_F999_D384_41D1_908D0AFD328F",
 "yaw": -138.3,
 "bleaching": 0.7
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.29,
   "hfov": 7.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "encender \u000del motor"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.31,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_0_0.png",
      "width": 231,
      "class": "ImageResourceLevel",
      "height": 242
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28.5,
   "yaw": -16.29,
   "distance": 50
  }
 ],
 "id": "overlay_DB59FD92_F9FA_D787_41E2_6C5D31A0CE37",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.stopGlobalAudios(true); this.playGlobalAudioWhilePlay(this.mainPlayList, 8, this.audio_DC6BECA2_F9E6_5584_41D7_41994F4EE3BC, undefined, true)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -38.85,
   "hfov": 11.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_1_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": " sonar la bocina"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.3,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_1_0.png",
      "width": 342,
      "class": "ImageResourceLevel",
      "height": 259
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.55,
   "yaw": -38.85,
   "distance": 50
  }
 ],
 "id": "overlay_DC5269AA_F9FA_3F84_41D1_16B1B3A99DDD",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.playGlobalAudioWhilePlay(this.mainPlayList, 8, this.audio_DF303072_F9EB_CC87_41B0_D8B5F151A5B8, undefined)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.87,
   "hfov": 10.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.01
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "norte"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.84,
   "pitch": -9.01,
   "yaw": -1.87,
   "image": "this.AnimatedImageResource_C169C773_F99A_F485_41E6_CE495E2C43B0",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DFFC0DA7_F9F9_F78D_41ED_7036F2D0B94A",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19, this.camera_C032F344_FAA6_CC83_41ED_05AEB2175B33); this.mainPlayList.set('selectedIndex', 0)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -17.67,
   "hfov": 5.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -30.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Encender Motor"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.28,
   "pitch": -30.11,
   "yaw": -17.67,
   "image": "this.AnimatedImageResource_C1693773_F99A_F485_41ED_D42BDA57C80B",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DC5279AA_F9FA_3F84_41DF_BB4E5167B113",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.stopGlobalAudios(true); this.playGlobalAudioWhilePlay(this.mainPlayList, 8, this.audio_DC6BECA2_F9E6_5584_41D7_41994F4EE3BC, undefined, true)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -55.75,
   "hfov": 10.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "noroeste"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.74,
   "pitch": -11.73,
   "yaw": -55.75,
   "image": "this.AnimatedImageResource_C1696774_F99A_F483_41DA_A32289F2B717",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DAE83E31_F9E6_3484_41D8_60F5C513B5A2",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_E258E3A7_F262_AD03_41E0_B75DA340C271, this.camera_C0397355_FAA6_CC8D_41E1_001CF5171A80); this.mainPlayList.set('selectedIndex', 2)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -35.96,
   "hfov": 5.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Sonar Bocina"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.59,
   "pitch": -23.56,
   "yaw": -35.96,
   "image": "this.AnimatedImageResource_C49CFB84_FAEA_D383_41E6_AB3DC327D1D3",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DB44E3B2_F9FF_F384_419D_B2A673EA1324",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.playGlobalAudioWhilePlay(this.mainPlayList, 8, this.audio_DF303072_F9EB_CC87_41B0_D8B5F151A5B8, undefined)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -127.67,
   "hfov": 10.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "suroeste"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.86,
   "pitch": -8.22,
   "yaw": -127.67,
   "image": "this.AnimatedImageResource_C168F774_F99A_F483_41E2_22F8DE01298D",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DA7A3E58_F9E6_7483_41C4_16D7AB522A18",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FDD3B010_F261_EB1C_41ED_560070399204, this.camera_C02DA364_FAA6_CC83_41EA_F0CD618976E2); this.mainPlayList.set('selectedIndex', 4)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -179.96,
   "hfov": 10.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "sur"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.93,
   "pitch": -5.27,
   "yaw": -179.96,
   "image": "this.AnimatedImageResource_C1685774_F99A_F483_41BF_EEA2351F6695",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DDFF75C0_F9E6_3783_41EB_878975BC1703",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375, this.camera_C00E1336_FAA6_CC8C_41E7_908C64201440); this.mainPlayList.set('selectedIndex', 6)"
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 27,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4,
 "pitch": 2.83,
 "id": "overlay_DE897447_F99E_348D_41ED_333988700A26",
 "yaw": 12.44,
 "bleaching": 0.7
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -162.2,
   "hfov": 22.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_9_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -48.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "anclajes isofix para asientos de beb\u00e9s y ni\u00f1os"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.09,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_9_0.png",
      "width": 929,
      "class": "ImageResourceLevel",
      "height": 260
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -48.68,
   "yaw": -162.2,
   "distance": 50
  }
 ],
 "id": "overlay_C8C18FAA_FAAA_5384_41ED_49802A708995",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -163.28,
   "hfov": 4.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -49.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "icon isofix"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.19,
   "pitch": -49.61,
   "yaw": -163.28,
   "image": "this.AnimatedImageResource_C49D9B85_FAEA_D38D_41C5_68B8271FF635",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CAAA06EE_FAAA_F59F_41C0_5477A9C4B87F",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_CF3DF76E_FAA7_D49F_41ED_5B969ECE0D8A, {'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverIconHeight':20,'paddingLeft':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':20,'paddingRight':5,'pressedIconHeight':20,'pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','iconColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'backgroundColorDirection':'vertical','borderColor':'#000000','rollOverBorderSize':0,'pressedBorderSize':0,'iconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20}, null, null, null, null, null, false)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.74,
   "hfov": 5.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_17_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "tecnologia"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.46,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_17_0.png",
      "width": 167,
      "class": "ImageResourceLevel",
      "height": 132
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.94,
   "yaw": 8.74,
   "distance": 50
  }
 ],
 "id": "overlay_BF7DA6A6_FAF9_D58C_41DC_87ECDEB550D3",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 23.55,
   "hfov": 5.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_18_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "seguridad"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.71,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_18_0.png",
      "width": 167,
      "class": "ImageResourceLevel",
      "height": 132
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.29,
   "yaw": 23.55,
   "distance": 50
  }
 ],
 "id": "overlay_C8FC41C8_FAE7_CF83_41C4_4BA647382F0F",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -25.43,
   "hfov": 5.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_19_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "seguridad"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.35,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_19_0.png",
      "width": 166,
      "class": "ImageResourceLevel",
      "height": 130
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.75,
   "yaw": -25.43,
   "distance": 50
  }
 ],
 "id": "overlay_C21A729A_FAE6_CD84_41D5_B115CE43BDF0",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -14.9,
   "hfov": 6.82,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_20_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "rendimiento"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.82,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_20_0.png",
      "width": 196,
      "class": "ImageResourceLevel",
      "height": 141
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.23,
   "yaw": -14.9,
   "distance": 50
  }
 ],
 "id": "overlay_C9ACF018_FAE9_CC83_41E6_8ACC7506C529",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 23.13,
   "hfov": 2.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_14_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "icon seguridad"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.55,
   "pitch": -19.06,
   "yaw": 23.13,
   "image": "this.AnimatedImageResource_CE782E60_FAA9_D483_41B7_B44F205AF815",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CE2FBF47_FA9F_D48D_41EB_9051AFACA51E",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_CE06AF0D_FAFA_349D_41D6_8C252829C7E4, {'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverIconHeight':20,'paddingLeft':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':20,'paddingRight':5,'pressedIconHeight':20,'pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','iconColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'backgroundColorDirection':'vertical','borderColor':'#000000','rollOverBorderSize':0,'pressedBorderSize':0,'iconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20}, null, null, null, null, null, false)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -15.33,
   "hfov": 4.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_13_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "icon rendimiento"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.12,
   "pitch": -16.29,
   "yaw": -15.33,
   "image": "this.AnimatedImageResource_C49D0B85_FAEA_D38D_41C7_D63EE8E58CAB",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CB45325C_FAE9_CCBC_41E8_52EF1B67C688",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_CBAF6A45_FAFB_DC8D_41D9_FFAC06D87360, {'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverIconHeight':20,'paddingLeft':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':20,'paddingRight':5,'pressedIconHeight':20,'pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','iconColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'backgroundColorDirection':'vertical','borderColor':'#000000','rollOverBorderSize':0,'pressedBorderSize':0,'iconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20}, null, null, null, null, null, false)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -25.81,
   "hfov": 3.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_15_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -27.88
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "icon seguridad volante"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.15,
   "pitch": -27.88,
   "yaw": -25.81,
   "image": "this.AnimatedImageResource_C49E9B86_FAEA_D38F_41EE_32945848BFD5",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C849575D_FA9A_54BC_41E2_5DE3B94BC2AA",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_C988382B_FAFE_5C84_41E0_DDDEC91B8969, {'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverIconHeight':20,'paddingLeft':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':20,'paddingRight':5,'pressedIconHeight':20,'pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','iconColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'backgroundColorDirection':'vertical','borderColor':'#000000','rollOverBorderSize':0,'pressedBorderSize':0,'iconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20}, null, null, null, null, null, false)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.38,
   "hfov": 2.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_16_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -25.79
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "icon tecnologia"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.25,
   "pitch": -25.79,
   "yaw": 8.38,
   "image": "this.AnimatedImageResource_C49ECB86_FAEA_D38F_41D0_4F46BDA9D124",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C90ADAB4_FAEA_DD83_41BC_B12CE4837CEB",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_C97790FD_FAFA_CD7D_41EC_D7C599F903D4, {'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverIconHeight':20,'paddingLeft':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':20,'paddingRight':5,'pressedIconHeight':20,'pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','iconColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'backgroundColorDirection':'vertical','borderColor':'#000000','rollOverBorderSize':0,'pressedBorderSize':0,'iconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20}, null, null, null, null, null, false)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -157.37,
   "hfov": 32.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_22_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "anclajes isofix para asientos de beb\u00e9s y ni\u00f1os"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 32.77,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_22_0.png",
      "width": 928,
      "class": "ImageResourceLevel",
      "height": 258
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.26,
   "yaw": -157.37,
   "distance": 50
  }
 ],
 "id": "overlay_CF23BCF4_FABA_D583_41E3_71F96E31B4FB",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -159.2,
   "hfov": 5.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_23_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "icon isofix"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.09,
   "pitch": -11.71,
   "yaw": -159.2,
   "image": "this.AnimatedImageResource_C67C736E_FABE_4C9C_41DB_97F884C6A172",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CF23CCF4_FABA_D583_41BA_56B30AD3054F",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_CF39DCC5_FABA_D58D_41EE_6058F432FF7D, {'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverIconHeight':20,'paddingLeft':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':20,'paddingRight':5,'pressedIconHeight':20,'pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','iconColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'backgroundColorDirection':'vertical','borderColor':'#000000','rollOverBorderSize':0,'pressedBorderSize':0,'iconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20}, null, null, null, null, null, false)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -54.27,
   "hfov": 13.97,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -29.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "ir a perspectiva 1"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.97,
   "pitch": -29.27,
   "yaw": -54.27,
   "image": "this.AnimatedImageResource_DAB96C31_F9AA_7485_41E8_9B5AFBCD9A1B",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EB35EC51_F2E2_9B1C_41E4_B5489AFD1FCC",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19, this.camera_C74BC631_FAA6_3484_41D4_22E5E99279F2); this.mainPlayList.set('selectedIndex', 0)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 37.64,
   "hfov": 10.55,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0_HS_1_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "cerrar puertas"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.55,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0_HS_1_0.png",
      "width": 307,
      "class": "ImageResourceLevel",
      "height": 317
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.69,
   "yaw": 37.64,
   "distance": 50
  }
 ],
 "id": "overlay_EB321C51_F2E2_9B1C_41DF_3AF41A39D2A2",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_C77AA640_FAA6_3484_41C2_9A192573F1D4, this.panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF); this.startPanoramaWithCamera(this.panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C, this.camera_C77AA640_FAA6_3484_41C2_9A192573F1D4); this.setMediaBehaviour(this.playList_C2A8618A_FAA6_CF87_41D7_31C73BD38338, 0, this.panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 37,
   "hfov": 10.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.81
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "icon abrir puertas"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.22,
   "pitch": -18.81,
   "yaw": 37,
   "image": "this.AnimatedImageResource_DABAEC31_F9AA_7485_41BF_A227FA263CFF",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EB320C51_F2E2_9B1C_41D9_1A6FDE2D2464",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_C76F3652_FAA6_3487_41DD_DAF3DF74B23C, this.panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF); this.startPanoramaWithCamera(this.panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C, this.camera_C76F3652_FAA6_3487_41DD_DAF3DF74B23C); this.setMediaBehaviour(this.playList_C2A8618A_FAA6_CF87_41D7_31C73BD38338, 0, this.panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 67.86,
   "hfov": 14.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "ir a perspectiva 3"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.93,
   "pitch": -21.15,
   "yaw": 67.86,
   "image": "this.AnimatedImageResource_DABABC31_F9AA_7485_41BB_637555B9F060",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EDF9491B_F2DE_9D0C_41EA_91585549FD28",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FDD3B010_F261_EB1C_41ED_560070399204, this.camera_C71EE660_FAA6_3484_41D1_39340849E57B); this.mainPlayList.set('selectedIndex', 4)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.41,
   "hfov": 12.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0_HS_4_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "encender el motor"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.91,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0_HS_4_0.png",
      "width": 373,
      "class": "ImageResourceLevel",
      "height": 222
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.38,
   "yaw": -16.41,
   "distance": 50
  }
 ],
 "id": "overlay_E88235DB_F966_3784_41DC_E809891CC92F",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_E41A1622_F227_973D_41E4_E8FD58B119D1, this.panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19); this.startPanoramaWithCamera(this.panorama_FF789D13_F263_951C_41D9_105C8727681A, this.camera_E41A1622_F227_973D_41E4_E8FD58B119D1); this.playGlobalAudioWhilePlay(this.mainPlayList, 3, this.audio_EBDCA255_F2E3_EF04_41D5_65092F3815C3, undefined)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.21,
   "hfov": 10.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0_HS_5_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "sonar la bocina"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.08,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0_HS_5_0.png",
      "width": 284,
      "class": "ImageResourceLevel",
      "height": 198
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.33,
   "yaw": 4.21,
   "distance": 50
  }
 ],
 "id": "overlay_E88225DB_F966_3784_41E1_37E30A452DA7",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_E41A1622_F227_973D_41E4_E8FD58B119D1, this.panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19); this.startPanoramaWithCamera(this.panorama_FF789D13_F263_951C_41D9_105C8727681A, this.camera_E41A1622_F227_973D_41E4_E8FD58B119D1); this.playGlobalAudioWhilePlay(this.mainPlayList, 3, this.audio_EB6DC748_F222_950C_41C3_F579A5BF210D, undefined)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.68,
   "hfov": 6.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Icon - Encender Motor"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.37,
   "pitch": -16.99,
   "yaw": -16.68,
   "image": "this.AnimatedImageResource_DABBCC31_F9AA_7485_41E7_AB3EBC488CB3",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E88215DB_F966_3784_41A1_8A674445F642",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.playGlobalAudioWhilePlay(this.mainPlayList, 3, this.audio_EBDCA255_F2E3_EF04_41D5_65092F3815C3, undefined)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.86,
   "hfov": 5.25,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Icon - Sonar Bocina"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.25,
   "pitch": -10.7,
   "yaw": 3.86,
   "image": "this.AnimatedImageResource_DABB8C31_F9AA_7485_41A4_3E09D0473B8C",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E88205DB_F966_3784_41E7_3D968884D068",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.playGlobalAudioWhilePlay(this.mainPlayList, 3, this.audio_EB6DC748_F222_950C_41C3_F579A5BF210D, undefined)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.95,
   "hfov": 7.78,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0_HS_8_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "ver interior"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.78,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0_HS_8_0.png",
      "width": 216,
      "class": "ImageResourceLevel",
      "height": 170
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.9,
   "yaw": 8.95,
   "distance": 50
  }
 ],
 "id": "overlay_EC4CE601_F9A6_3485_41E6_AB3964F180B6",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B, this.camera_C6A95611_FAA6_3484_41D4_E13089CBEE3B); this.mainPlayList.set('selectedIndex', 8)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.6,
   "hfov": 3.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.92
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Icon Ver interior"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.59,
   "pitch": -3.92,
   "yaw": 8.6,
   "image": "this.AnimatedImageResource_DABB0C31_F9AA_7485_41DA_AB8659C2E3A6",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EC4CD601_F9A6_3485_41C9_1276934010FE",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B, this.camera_C7587622_FAA6_3484_41EB_9D32527EC88E); this.mainPlayList.set('selectedIndex', 8)"
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 43.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4,
 "pitch": 15.64,
 "id": "overlay_DE1050DC_F999_CDBC_41DD_43536B7BDE4B",
 "yaw": -75.99,
 "bleaching": 0.7
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -60.52,
   "hfov": 14.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "ir a perspectiva 3"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.37,
   "pitch": -26.17,
   "yaw": -60.52,
   "image": "this.AnimatedImageResource_DAB01C31_F9AA_7485_41C6_785F7DDE2F36",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EE888FBB_F9AA_F385_41C3_C588E76AC85F",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FDD3B010_F261_EB1C_41ED_560070399204, this.camera_C614C554_FAA6_348C_41E7_66DCBCF288D3); this.mainPlayList.set('selectedIndex', 4)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.06,
   "hfov": 9.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_0_HS_1_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 18
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "  abrir ba\u00fal"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.14,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_0_HS_1_0.png",
      "width": 284,
      "class": "ImageResourceLevel",
      "height": 323
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.86,
   "yaw": -0.06,
   "distance": 50
  }
 ],
 "id": "overlay_EEBCA1CF_F9AA_4F9D_41E1_3C7149261B8D",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_C6724535_FAA6_348C_41DE_D8CA6D10BB1A, this.panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375); this.startPanoramaWithCamera(this.panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77, this.camera_C6724535_FAA6_348C_41DE_D8CA6D10BB1A); this.mainPlayList.set('selectedIndex', 7)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.17,
   "hfov": 9.54,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "icon abrir puertas"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.54,
   "pitch": -28,
   "yaw": -0.17,
   "image": "this.AnimatedImageResource_DAB1EC31_F9AA_7485_4194_7F6B8095A5C9",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EEBC91CF_F9AA_4F9D_41E7_6CE74DE9CA31",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_C6650544_FAA6_348C_41E2_920F0FF82033, this.panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375); this.startPanoramaWithCamera(this.panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77, this.camera_C6650544_FAA6_348C_41E2_920F0FF82033); this.mainPlayList.set('selectedIndex', 7)"
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 43.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4,
 "pitch": 14.63,
 "id": "overlay_DEFC1584_F99E_D78C_41CA_1EFD94191483",
 "yaw": 27.01,
 "bleaching": 0.7
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -52.63,
   "hfov": 13.72,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "ir a perspectiva 1"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.72,
   "pitch": -31.04,
   "yaw": -52.63,
   "image": "this.AnimatedImageResource_DAB27C40_F9AA_7483_41E5_9B4891A7EA62",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E863A8C8_F97A_3D84_41D2_E156601B5913",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19, this.camera_C69385D6_FAA6_378C_41E9_3EDBC765AD3C); this.mainPlayList.set('selectedIndex', 0)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 24.71,
   "hfov": 10,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_1_HS_1_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "abrir puertas"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_1_HS_1_0.png",
      "width": 287,
      "class": "ImageResourceLevel",
      "height": 317
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.53,
   "yaw": 24.71,
   "distance": 50
  }
 ],
 "id": "overlay_E86398C8_F97A_3D84_41E1_DF69397969D4",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_C68505E4_FAA6_378C_41B0_B0684EC1EB9B, this.panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C); this.startPanoramaWithCamera(this.panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF, this.camera_C68505E4_FAA6_378C_41B0_B0684EC1EB9B); this.mainPlayList.set('selectedIndex', 3)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 24.42,
   "hfov": 10.36,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "icon abrir puertas"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.36,
   "pitch": -16.46,
   "yaw": 24.42,
   "image": "this.AnimatedImageResource_DAB3CC40_F9AA_7483_41E4_19D7C42D668D",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E86388C8_F97A_3D84_41DA_5BCB797590CD",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_C6B4C5F2_FAA6_3784_41E1_45B5547BEAFE, this.panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C); this.startPanoramaWithCamera(this.panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF, this.camera_C6B4C5F2_FAA6_3784_41E1_45B5547BEAFE); this.mainPlayList.set('selectedIndex', 3)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 67.86,
   "hfov": 14.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.15
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "ir a perspectiva 3"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.93,
   "pitch": -21.15,
   "yaw": 67.86,
   "image": "this.AnimatedImageResource_DAB38C40_F9AA_7483_41DF_551FD5F2A5E3",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EB517B7D_F97A_337D_41D6_D15B01707E9E",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FDD3B010_F261_EB1C_41ED_560070399204, this.camera_C6A72601_FAA6_3484_41E9_1B4BD8D68C59); this.mainPlayList.set('selectedIndex', 4)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.41,
   "hfov": 12.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_1_HS_4_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "encender el motor"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.91,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_1_HS_4_0.png",
      "width": 373,
      "class": "ImageResourceLevel",
      "height": 222
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.38,
   "yaw": -16.41,
   "distance": 50
  }
 ],
 "id": "overlay_E8062079_F966_4C84_41AF_D47E2586A6A8",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_E41A1622_F227_973D_41E4_E8FD58B119D1, this.panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19); this.startPanoramaWithCamera(this.panorama_FF789D13_F263_951C_41D9_105C8727681A, this.camera_E41A1622_F227_973D_41E4_E8FD58B119D1); this.stopGlobalAudios(true); this.playGlobalAudioWhilePlay(this.playList_C2A8618A_FAA6_CF87_41D7_31C73BD38338, 0, this.audio_EBDCA255_F2E3_EF04_41D5_65092F3815C3, undefined, true)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 6.81,
   "hfov": 10.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_1_HS_5_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "sonar la bocina"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.17,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_1_HS_5_0.png",
      "width": 284,
      "class": "ImageResourceLevel",
      "height": 198
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.35,
   "yaw": 6.81,
   "distance": 50
  }
 ],
 "id": "overlay_E8063079_F966_4C84_41EE_364FA315A3D9",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_E41A1622_F227_973D_41E4_E8FD58B119D1, this.panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19); this.startPanoramaWithCamera(this.panorama_FF789D13_F263_951C_41D9_105C8727681A, this.camera_E41A1622_F227_973D_41E4_E8FD58B119D1); this.stopGlobalAudios(true); this.playGlobalAudioWhilePlay(this.playList_C2A8618A_FAA6_CF87_41D7_31C73BD38338, 0, this.audio_EB6DC748_F222_950C_41C3_F579A5BF210D, undefined, true)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -16.68,
   "hfov": 6.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_1_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Icon - Encender Motor"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.37,
   "pitch": -16.99,
   "yaw": -16.68,
   "image": "this.AnimatedImageResource_DAACCC42_F9AA_7487_41E1_CCBDEC83D198",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E807C079_F966_4C84_41B4_475C452CBB32",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.stopGlobalAudios(true); this.playGlobalAudioWhilePlay(this.playList_C2A8618A_FAA6_CF87_41D7_31C73BD38338, 0, this.audio_EBDCA255_F2E3_EF04_41D5_65092F3815C3, undefined, true)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 6.26,
   "hfov": 5.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_1_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Icon - Sonar Bocina"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.28,
   "pitch": -9.08,
   "yaw": 6.26,
   "image": "this.AnimatedImageResource_DAB20C42_F9AA_7487_41CC_B388B823E605",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E807D079_F966_4C84_41E7_3FE21F6F0E79",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.stopGlobalAudios(true); this.playGlobalAudioWhilePlay(this.playList_C2A8618A_FAA6_CF87_41D7_31C73BD38338, 0, this.audio_EB6DC748_F222_950C_41C3_F579A5BF210D, undefined, true)"
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 43.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4,
 "pitch": 15.89,
 "id": "overlay_DEDB15E2_F99E_7784_41B8_2BAB88AB281C",
 "yaw": -75.74,
 "bleaching": 0.7
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -60.52,
   "hfov": 14.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -26.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "ir a perspectiva 3"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.37,
   "pitch": -26.17,
   "yaw": -60.52,
   "image": "this.AnimatedImageResource_DBB94E52_F9FA_D487_41E3_F533C3EE41C5",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E52994AF_F99A_759D_41CE_56BC8C34CD9E",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FDD3B010_F261_EB1C_41ED_560070399204, this.camera_C3CE1242_FAA6_CC87_41D4_30C89089420D); this.mainPlayList.set('selectedIndex', 4)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.09,
   "hfov": 10.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0_HS_1_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 22.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "  cerrar ba\u00fal"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.61,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0_HS_1_0.png",
      "width": 318,
      "class": "ImageResourceLevel",
      "height": 322
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 22.45,
   "yaw": 0.09,
   "distance": 50
  }
 ],
 "id": "overlay_E52984AF_F99A_759D_41EB_4ABD550A813F",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_C3F5C251_FAA6_CC85_41E7_BD7971F594E9, this.panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77); this.startPanoramaWithCamera(this.panorama_EF7AF964_F99E_7C83_41EA_12427C876877, this.camera_C3F5C251_FAA6_CC85_41E7_BD7971F594E9); this.setMediaBehaviour(this.playList_C34591AC_FAA6_CF83_41B1_A51119FC17D6, 0, this.panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.2,
   "hfov": 10.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 21.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "icon abrir puertas"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.07,
   "pitch": 21.21,
   "yaw": 0.2,
   "image": "this.AnimatedImageResource_DBB88E52_F9FA_D487_41D0_56A4114D61E4",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E529B4AF_F99A_759D_41E4_75FE7A5FB812",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_C3F86261_FAA6_CC85_41E4_CEDC2F4DA17D, this.panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77); this.startPanoramaWithCamera(this.panorama_EF7AF964_F99E_7C83_41EA_12427C876877, this.camera_C3F86261_FAA6_CC85_41E4_CEDC2F4DA17D); this.setMediaBehaviour(this.playList_C34591AC_FAA6_CF83_41B1_A51119FC17D6, 0, this.panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.56,
   "hfov": 9.68,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0_HS_3_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "ver interior"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.68,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0_HS_3_0.png",
      "width": 269,
      "class": "ImageResourceLevel",
      "height": 221
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.9,
   "yaw": 0.56,
   "distance": 50
  }
 ],
 "id": "overlay_E6A27DAE_F99F_D79F_41D4_F1EFEF96A61C",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B, this.camera_C3D26224_FAA6_CC83_41D6_EAB3F1C13C70); this.mainPlayList.set('selectedIndex', 8)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.59,
   "hfov": 5.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Icon Ver interior"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.22,
   "pitch": -6.61,
   "yaw": -0.59,
   "image": "this.AnimatedImageResource_DBB8CE52_F9FA_D487_41CB_8525F8C7CD17",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E6A24DAE_F99F_D79F_41EC_7095267B5D73",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B, this.camera_C3DB5233_FAA6_CC85_41E2_E72E49A25E51); this.mainPlayList.set('selectedIndex', 8)"
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 43.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4,
 "pitch": 13.88,
 "id": "overlay_DEEF8505_F99E_F48C_41DC_6A22D6353629",
 "yaw": 25.25,
 "bleaching": 0.7
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.83,
   "hfov": 21.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0_HS_5_0_map.gif",
      "width": 73,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "capacidad de 285 L"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.42,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0_HS_5_0.png",
      "width": 616,
      "class": "ImageResourceLevel",
      "height": 134
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.28,
   "yaw": 4.83,
   "distance": 50
  }
 ],
 "id": "overlay_CA3654B7_FAA9_F58C_41EA_419FD43C6E97",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 13.87,
   "hfov": 2.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.72
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Info 02"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.57,
   "pitch": -16.72,
   "yaw": 13.87,
   "image": "this.AnimatedImageResource_C4A3AB83_FAEA_D385_41AD_213A21A5C030",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_CA9E86AE_FAAE_559C_41E7_8EA2856D7639",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 12.44,
   "hfov": 11.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_1_HS_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "encender el motor"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.48,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_1_HS_0_0.png",
      "width": 374,
      "class": "ImageResourceLevel",
      "height": 222
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -31.69,
   "yaw": 12.44,
   "distance": 50
  }
 ],
 "id": "overlay_F747441C_F96F_D483_41E7_6A84A62D5373",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_E41A1622_F227_973D_41E4_E8FD58B119D1, this.panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19); this.startPanoramaWithCamera(this.panorama_FF789D13_F263_951C_41D9_105C8727681A, this.camera_E41A1622_F227_973D_41E4_E8FD58B119D1); this.stopGlobalAudios(true); this.playGlobalAudioWhilePlay(this.playList_C2A2C179_FAA6_CC85_41EC_AA10B0EEAC53, 0, this.audio_EBDCA255_F2E3_EF04_41D5_65092F3815C3, undefined, true)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.04,
   "hfov": 10.1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0_HS_1_0_map.gif",
      "width": 22,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "sonar la bocina"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.1,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0_HS_1_0.png",
      "width": 283,
      "class": "ImageResourceLevel",
      "height": 198
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.89,
   "yaw": 8.04,
   "distance": 50
  }
 ],
 "id": "overlay_F759341D_F96F_D4BD_41E6_8130B1B32C83",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_E41A1622_F227_973D_41E4_E8FD58B119D1, this.panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19); this.startPanoramaWithCamera(this.panorama_FF789D13_F263_951C_41D9_105C8727681A, this.camera_E41A1622_F227_973D_41E4_E8FD58B119D1); this.stopGlobalAudios(true); this.playGlobalAudioWhilePlay(this.playList_C2A2C179_FAA6_CC85_41EC_AA10B0EEAC53, 0, this.audio_EB6DC748_F222_950C_41C3_F579A5BF210D, undefined, true)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.18,
   "hfov": 9.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_1_HS_2_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "abrir el cap\u00f3"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.23,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_1_HS_2_0.png",
      "width": 268,
      "class": "ImageResourceLevel",
      "height": 222
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.62,
   "yaw": 0.18,
   "distance": 50
  }
 ],
 "id": "overlay_F759041D_F96F_D4BD_41E4_1EED3B85E8E2",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_C1BCF4FD_FAA6_357C_41D2_6D1AD2C44A28, this.panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95); this.startPanoramaWithCamera(this.panorama_FF789D13_F263_951C_41D9_105C8727681A, this.camera_C1BCF4FD_FAA6_357C_41D2_6D1AD2C44A28); this.mainPlayList.set('selectedIndex', 1); this.stopGlobalAudios(true); this.playGlobalAudioWhilePlay(this.playList_C2A2C179_FAA6_CC85_41EC_AA10B0EEAC53, 0, this.audio_E5FE14CB_F2E2_6B0C_41DB_0A9E661166B9, undefined, true)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 63.49,
   "hfov": 10.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "A Perspectiva 2"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.07,
   "pitch": -24.78,
   "yaw": 63.49,
   "image": "this.AnimatedImageResource_DAB30C42_F9AA_7487_41D6_53AB8B0874DA",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F759141D_F96F_D4BD_41EA_CBB267C885DE",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_E258E3A7_F262_AD03_41E0_B75DA340C271, this.camera_C6510518_FAA6_3484_41EF_1F2E59EBDC32); this.mainPlayList.set('selectedIndex', 2)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.11,
   "hfov": 6.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_1_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Icon - Abrir Capot"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.09,
   "pitch": -18.76,
   "yaw": 0.11,
   "image": "this.AnimatedImageResource_DAACCC42_F9AA_7487_41D5_4DBB47E296BD",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F759641D_F96F_D4BD_41A1_4AC77FC1F5CC",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_C1AE550A_FAA6_3484_41E0_329C22A87B1B, this.panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95); this.startPanoramaWithCamera(this.panorama_FF789D13_F263_951C_41D9_105C8727681A, this.camera_C1AE550A_FAA6_3484_41E0_329C22A87B1B); this.stopGlobalAudios(true); this.playGlobalAudioWhilePlay(this.playList_C2A2C179_FAA6_CC85_41EC_AA10B0EEAC53, 0, this.audio_E5FE14CB_F2E2_6B0C_41DB_0A9E661166B9, undefined, true); this.mainPlayList.set('selectedIndex', 1)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 11.78,
   "hfov": 5.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_1_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -33.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Icon - Encender Motor"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.58,
   "pitch": -33.05,
   "yaw": 11.78,
   "image": "this.AnimatedImageResource_DAACBC42_F9AA_7487_41D3_D81BF5D9A059",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F759741D_F96F_D4BD_41E0_D696DAB984F6",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.stopGlobalAudios(true); this.playGlobalAudioWhilePlay(this.playList_C2A2C179_FAA6_CC85_41EC_AA10B0EEAC53, 0, this.audio_EBDCA255_F2E3_EF04_41D5_65092F3815C3, undefined, true)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 6.91,
   "hfov": 5.28,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Icon - Sonar Bocina"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.28,
   "pitch": -8.82,
   "yaw": 6.91,
   "image": "this.AnimatedImageResource_DBBCBE57_F9FA_D48D_41E1_F90FEDBFDD1A",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F759441D_F96F_D4BD_41E3_F70255AFCD0A",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.stopGlobalAudios(true); this.playGlobalAudioWhilePlay(this.playList_C2A2C179_FAA6_CC85_41EC_AA10B0EEAC53, 0, this.audio_EB6DC748_F222_950C_41C3_F579A5BF210D, undefined, true)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 21.66,
   "hfov": 2.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_1_HS_7_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Foto Faro"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_1_HS_7_0.png",
      "width": 85,
      "class": "ImageResourceLevel",
      "height": 77
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -18.46,
   "yaw": 21.66
  }
 ],
 "id": "overlay_F759541D_F96F_D4BD_41B3_5E2EA921D85A",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_F77333EA_F96F_D387_41EC_E704BCC1DC1C, {'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverIconHeight':20,'paddingLeft':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':20,'paddingRight':5,'pressedIconHeight':20,'pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','iconColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'backgroundColorDirection':'vertical','borderColor':'#000000','rollOverBorderSize':0,'pressedBorderSize':0,'iconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20}, this.ImageResource_EA6A3632_F2E7_971D_41C1_D6079374DA64, null, null, null, null, false)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 33.08,
   "hfov": 8.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0_HS_8_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "ir a perspectiva 3"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.19,
   "pitch": -14.4,
   "yaw": 33.08,
   "image": "this.AnimatedImageResource_DBBCCE57_F9FA_D48D_41ED_E797708E9B65",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E5BEE01B_F9A6_CC85_41CD_61944852A1A7",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FDD3B010_F261_EB1C_41ED_560070399204, this.camera_C640F526_FAA6_348C_41C6_55B8108A3983); this.mainPlayList.set('selectedIndex', 4)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.99,
   "hfov": 7.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0_HS_9_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "ver interior"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.77,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0_HS_9_0.png",
      "width": 216,
      "class": "ImageResourceLevel",
      "height": 221
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.84,
   "yaw": -0.99,
   "distance": 50
  }
 ],
 "id": "overlay_E5864CA7_F999_D58D_4189_E79953DBEB43",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B, this.camera_C19894E0_FAA6_3584_41E3_9A5B8521C5EE); this.mainPlayList.set('selectedIndex', 8)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.42,
   "hfov": 3.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0_HS_10_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.71
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Icon Ver interior"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.58,
   "pitch": -5.71,
   "yaw": -1.42,
   "image": "this.AnimatedImageResource_DBBC0E57_F9FA_D48D_41E4_F0A3E878B2B2",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_E5865CA7_F999_D58D_41EA_91731FB03A33",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B, this.camera_C18D74EF_FAA6_359C_41CA_386497BD9C2F); this.mainPlayList.set('selectedIndex', 8)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -23.01,
   "hfov": 9.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0_HS_11_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 15
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "  ficha t\u00e9cnica"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.71,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0_HS_11_0.png",
      "width": 276,
      "class": "ImageResourceLevel",
      "height": 214
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.61,
   "yaw": -23.01,
   "distance": 50
  }
 ],
 "id": "overlay_D81D5C4B_F9E6_5485_41D0_025027D71F9A",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_E41A1622_F227_973D_41E4_E8FD58B119D1, this.panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19); this.startPanoramaWithCamera(this.panorama_FF789D13_F263_951C_41D9_105C8727681A, this.camera_E41A1622_F227_973D_41E4_E8FD58B119D1); this.showPopupPanoramaOverlay(this.popup_D8080C1C_F9E6_5483_41B7_8F60F7E0605B, {'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverIconHeight':20,'paddingLeft':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':20,'paddingRight':5,'pressedIconHeight':20,'pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','iconColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'backgroundColorDirection':'vertical','borderColor':'#000000','rollOverBorderSize':0,'pressedBorderSize':0,'iconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20}, null, null, null, null, null, false)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -23.21,
   "hfov": 5.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0_HS_12_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "icon ficha tecnica"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.08,
   "pitch": -13.45,
   "yaw": -23.21,
   "image": "this.AnimatedImageResource_DBBC4E58_F9FA_D483_41ED_DDEE2E04E059",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D81D2C4B_F9E6_5485_41EC_F9819D0D52D2",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_D8093C1D_F9E6_54BD_41EC_06A5C036D6F1, {'backgroundOpacity':0.3,'pressedBackgroundOpacity':0.3,'rollOverIconWidth':20,'rollOverIconHeight':20,'paddingLeft':5,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','pressedBackgroundColorDirection':'vertical','iconHeight':20,'paddingRight':5,'pressedIconHeight':20,'pressedIconLineWidth':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBorderColor':'#000000','iconColor':'#000000','pressedIconColor':'#888888','borderSize':0,'iconLineWidth':5,'rollOverIconColor':'#666666','paddingBottom':5,'rollOverBackgroundOpacity':0.3,'rollOverBackgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'backgroundColorDirection':'vertical','borderColor':'#000000','rollOverBorderSize':0,'pressedBorderSize':0,'iconWidth':20,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconWidth':20}, null, null, null, null, null, false)"
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 43.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4,
 "pitch": 19.66,
 "id": "overlay_DECE841E_F99E_54BF_4199_8A8CEFDEC91F",
 "yaw": -137.79,
 "bleaching": 0.7
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 1.64,
   "hfov": 9.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0_HS_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "cerrar puertas"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.91,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0_HS_0_0.png",
      "width": 293,
      "class": "ImageResourceLevel",
      "height": 316
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -20.34,
   "yaw": 1.64,
   "distance": 50
  }
 ],
 "id": "overlay_EA6C6144_F96A_CC83_41C7_C6DFA2DF0595",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_C0B4B3E7_FAA6_338C_41E7_AEE85861AF4B, this.panorama_FD013EBF_F261_9704_41E1_A65F3D829440); this.startPanoramaWithCamera(this.panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06, this.camera_C0B4B3E7_FAA6_338C_41E7_AEE85861AF4B); this.setMediaBehaviour(this.playList_C35ED19B_FAA6_CF85_41E5_EC461B25133E, 0, this.panorama_FD013EBF_F261_9704_41E1_A65F3D829440)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.81,
   "hfov": 10.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -21.65
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "icon abrir puertas"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.04,
   "pitch": -21.65,
   "yaw": 0.81,
   "image": "this.AnimatedImageResource_DAB64C31_F9AA_7485_41E6_FC4BCAAD637D",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EA6C7144_F96A_CC83_41EC_7C15B3285444",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_C0BB63F6_FAA6_338C_41DE_735F5916623E, this.panorama_FD013EBF_F261_9704_41E1_A65F3D829440); this.startPanoramaWithCamera(this.panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06, this.camera_C0BB63F6_FAA6_338C_41DE_735F5916623E); this.setMediaBehaviour(this.playList_C35ED19B_FAA6_CF85_41E5_EC461B25133E, 0, this.panorama_FD013EBF_F261_9704_41E1_A65F3D829440)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 68.42,
   "hfov": 14.58,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -24.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "ir a perspectiva 4"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.58,
   "pitch": -24.43,
   "yaw": 68.42,
   "image": "this.AnimatedImageResource_DAB63C31_F9AA_7485_41DC_8741E6B50ADD",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EA6C4144_F96A_CC83_41E9_3579FD1249A1",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375, this.camera_C0E993BA_FAA6_3387_41D4_D42FE7557200); this.mainPlayList.set('selectedIndex', 6)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -37.69,
   "hfov": 10.42,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0_HS_3_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.17
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "cerrar puertas"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.42,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0_HS_3_0.png",
      "width": 300,
      "class": "ImageResourceLevel",
      "height": 315
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.17,
   "yaw": -37.69,
   "distance": 50
  }
 ],
 "id": "overlay_EA6C5144_F96A_CC83_41E2_0D7AC9458E77",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_C0AFC404_FAA6_348C_419D_13614DE3ADB6, this.panorama_FD013EBF_F261_9704_41E1_A65F3D829440); this.startPanoramaWithCamera(this.panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06, this.camera_C0AFC404_FAA6_348C_419D_13614DE3ADB6); this.setMediaBehaviour(this.playList_C35ED19B_FAA6_CF85_41E5_EC461B25133E, 0, this.panorama_FD013EBF_F261_9704_41E1_A65F3D829440)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -38.08,
   "hfov": 8.35,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.24
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "icon abrir puertas"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.35,
   "pitch": -15.24,
   "yaw": -38.08,
   "image": "this.AnimatedImageResource_DAB7AC31_F9AA_7485_41E9_0E95848CE0B5",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EA6FA144_F96A_CC83_41D2_0F677913255A",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.setCameraSameSpotAsMedia(this.camera_C153E412_FAA6_3484_41DB_92EECC91DE7B, this.panorama_FD013EBF_F261_9704_41E1_A65F3D829440); this.startPanoramaWithCamera(this.panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06, this.camera_C153E412_FAA6_3484_41DB_92EECC91DE7B); this.setMediaBehaviour(this.playList_C35ED19B_FAA6_CF85_41E5_EC461B25133E, 0, this.panorama_FD013EBF_F261_9704_41E1_A65F3D829440)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -71.02,
   "hfov": 14.65,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0_HS_5_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -23.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "ir a perspectiva 4"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.65,
   "pitch": -23.75,
   "yaw": -71.02,
   "image": "this.AnimatedImageResource_DAB76C31_F9AA_7485_41C6_A19C42926A11",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EA6FB144_F96A_CC83_41CA_A71041848B8B",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_E258E3A7_F262_AD03_41E0_B75DA340C271, this.camera_C147E420_FAA6_3484_41E7_BCE650284266); this.mainPlayList.set('selectedIndex', 2)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.94,
   "hfov": 7.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0_HS_6_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": true,
 "data": {
  "label": "ver interior"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.71,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "levels": [
     {
      "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0_HS_6_0.png",
      "width": 216,
      "class": "ImageResourceLevel",
      "height": 170
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.32,
   "yaw": -4.94,
   "distance": 50
  }
 ],
 "id": "overlay_EF17178E_F9A7_F39F_41E1_7AD60F8A8DD9",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B, this.camera_C09C23C9_FAA6_3384_41EC_96E8AFFBEAC1); this.mainPlayList.set('selectedIndex', 8)"
  }
 ]
},
{
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.1,
   "hfov": 6.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "data": {
  "label": "Icon Ver interior"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.6,
   "pitch": -10.2,
   "yaw": -5.1,
   "image": "this.AnimatedImageResource_DAB09C31_F9AA_7485_41D5_F9A839033AC4",
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EF17278F_F9A7_F39D_41D6_ED0ACCBE7017",
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B, this.camera_C08033D8_FAA6_3384_41D1_60D3E5D75476); this.mainPlayList.set('selectedIndex', 8)"
  }
 ]
},
{
 "class": "TripodCapPanoramaOverlay",
 "hfov": 43.5,
 "angle": 0,
 "image": {
  "levels": [
   {
    "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_tcap0.png",
    "width": 850,
    "class": "ImageResourceLevel",
    "height": 850
   }
  ],
  "class": "ImageResource"
 },
 "rotate": false,
 "id": "panorama_FD013EBF_F261_9704_41E1_A65F3D829440_tcap0",
 "distance": 50,
 "inertia": false
},
{
 "class": "LensFlarePanoramaOverlay",
 "bleachingDistance": 0.4,
 "pitch": 13.38,
 "id": "overlay_DE870560_F99E_7484_41E4_EC4CCD19A4EC",
 "yaw": -29.02,
 "bleaching": 0.7
},
{
 "class": "PhotoPlayList",
 "id": "album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_AlbumPlayList",
 "items": [
  {
   "media": "this.album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.28",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.68"
    },
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  },
  {
   "media": "this.album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_1",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.31",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.56"
    },
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  },
  {
   "media": "this.album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_2",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.29",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.65"
    },
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  },
  {
   "media": "this.album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_3",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.37",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.53"
    },
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  },
  {
   "media": "this.album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_4",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.52",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.48"
    },
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  },
  {
   "media": "this.album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_5",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.70",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.39"
    },
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  },
  {
   "media": "this.album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_6",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.46",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.42"
    },
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  },
  {
   "media": "this.album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_7",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.28",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.63"
    },
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  },
  {
   "media": "this.album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_8",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.34",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.67"
    },
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  },
  {
   "media": "this.album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_9",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.71",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.29"
    },
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  },
  {
   "media": "this.album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_10",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.31",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.65"
    },
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  },
  {
   "media": "this.album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_11",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.54",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.40"
    },
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  },
  {
   "media": "this.album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_12",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.68",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.55"
    },
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  },
  {
   "media": "this.album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_13",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.55"
    },
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  },
  {
   "media": "this.album_E5E667F8_F9AE_3383_41B3_EB958EF46DDA_14",
   "class": "PhotoPlayListItem",
   "camera": {
    "duration": 5000,
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.31",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.69"
    },
    "scaleMode": "fit_outside",
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    }
   }
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 5,
 "id": "AnimatedImageResource_DAB87C2C_F9AA_7483_41D3_987F584E093C",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0_HS_2_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DAB9FC2C_F9AA_7483_41E6_F02A7E99117C",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 5,
 "id": "AnimatedImageResource_DAB9CC31_F9AA_7485_41DF_C5CAE8FD2CCB",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0_HS_6_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DAB96C31_F9AA_7485_41E9_6054FF440BDA",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0_HS_7_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DABADC31_F9AA_7485_41D6_0EE077F63024",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_E258E3A7_F262_AD03_41E0_B75DA340C271_0_HS_9_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DAB99C31_F9AA_7485_41B1_686B8470D05F",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DBBB5E53_F9FA_D485_41EF_0065C954528E",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 5,
 "id": "AnimatedImageResource_DBBABE53_F9FA_D485_41D9_1F4C2C02E5A1",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0_HS_4_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DBBAFE54_F9FA_D483_41C5_85133A78B3A6",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 5,
 "id": "AnimatedImageResource_DBBADE54_F9FA_D483_41E6_0A47251B6B41",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_ED84859D_F96A_37BC_41CE_04C8A49A1E06_0_HS_7_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DBBA0E54_F9FA_D483_41BE_441700DCC7CC",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DAB4AC31_F9AA_7485_41C7_44D0F95BB5FA",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 5,
 "id": "AnimatedImageResource_DAB41C31_F9AA_7485_41DA_BD4B0A9ED77B",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0_HS_4_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DAB59C31_F9AA_7485_41DD_5783E5D6C9C0",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 5,
 "id": "AnimatedImageResource_DAB54C31_F9AA_7485_41D5_F5061FCBDB1A",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FDD3B010_F261_EB1C_41ED_560070399204_0_HS_7_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DAB52C31_F9AA_7485_41E7_AFEB69B34B5A",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_1_HS_6_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 5,
 "id": "AnimatedImageResource_E8D66BFF_F2E1_9D03_41D3_CBF36F4B9DB3",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_1_HS_0_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_E8D70BFE_F2E1_9D05_41D3_F70E00269544",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0_HS_4_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DABCBC2C_F9AA_7483_41E1_06CEB66D83AF",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0_HS_2_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DABC6C2C_F9AA_7483_41B2_73249E925868",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0_HS_9_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DABEDC2C_F9AA_7483_41E0_4EF9B48F66E4",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0_HS_10_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 5,
 "id": "AnimatedImageResource_DBB23E49_F9FA_D485_41E4_D22D548B1F59",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FE1947A2_F25F_953C_41D7_BFD0D8F0AC19_0_HS_12_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DBB27E4A_F9FA_D487_41C0_1045EA288F86",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DBBF9E58_F9FA_D483_41D7_9F8697A00BF0",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 5,
 "id": "AnimatedImageResource_DBBFFE58_F9FA_D483_41CD_34F71C66C020",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_EF7AF964_F99E_7C83_41EA_12427C876877_0_HS_4_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DBBF3E59_F9FA_D485_41E6_E81188A18FFF",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 5,
 "id": "AnimatedImageResource_DABE0C2C_F9AA_7483_41E7_8733B80828E7",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0_HS_4_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DABFEC2C_F9AA_7483_41EB_6E78040F43FA",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0_HS_5_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DABFAC2C_F9AA_7483_41EA_9F26C22E9854",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0_HS_6_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DABF1C2C_F9AA_7483_41ED_11EC6B77AC9B",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0_HS_8_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DAB89C2C_F9AA_7483_41D9_48BDE698CE91",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0_HS_10_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 5,
 "id": "AnimatedImageResource_DBB56E4B_F9FA_D485_41D0_BBBFAE651C3E",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FF789D13_F263_951C_41D9_105C8727681A_0_HS_11_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DBB4AE4C_F9FA_D483_41DF_1A8C2DED628D",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_2_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_C169C773_F99A_F485_41E6_CE495E2C43B0",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_3_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_C1693773_F99A_F485_41ED_D42BDA57C80B",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_4_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_C1696774_F99A_F483_41DA_A32289F2B717",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_5_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_C49CFB84_FAEA_D383_41E6_AB3DC327D1D3",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_6_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_C168F774_F99A_F483_41E2_22F8DE01298D",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_7_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_C1685774_F99A_F483_41BF_EEA2351F6695",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_8_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_C49D9B85_FAEA_D38D_41C5_68B8271FF635",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_14_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_CE782E60_FAA9_D483_41B7_B44F205AF815",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_13_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_C49D0B85_FAEA_D38D_41C7_D63EE8E58CAB",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_15_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_C49E9B86_FAEA_D38F_41EE_32945848BFD5",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_16_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_C49ECB86_FAEA_D38F_41D0_4F46BDA9D124",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FCBA169D_F26E_7707_41E3_FB859DA9675B_0_HS_23_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_C67C736E_FABE_4C9C_41DB_97F884C6A172",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 5,
 "id": "AnimatedImageResource_DAB96C31_F9AA_7485_41E8_9B5AFBCD9A1B",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0_HS_2_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DABAEC31_F9AA_7485_41BF_A227FA263CFF",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 5,
 "id": "AnimatedImageResource_DABABC31_F9AA_7485_41BB_637555B9F060",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0_HS_6_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DABBCC31_F9AA_7485_41E7_AB3EBC488CB3",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0_HS_7_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DABB8C31_F9AA_7485_41A4_3E09D0473B8C",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FEA9952B_F263_B50C_41E3_C979EE52AFCF_0_HS_9_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DABB0C31_F9AA_7485_41DA_AB8659C2E3A6",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 5,
 "id": "AnimatedImageResource_DAB01C31_F9AA_7485_41C6_785F7DDE2F36",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FCBB64CD_F26E_AB07_41DE_D8D94A166375_0_HS_2_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DAB1EC31_F9AA_7485_4194_7F6B8095A5C9",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 5,
 "id": "AnimatedImageResource_DAB27C40_F9AA_7483_41E5_9B4891A7EA62",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_1_HS_2_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DAB3CC40_F9AA_7483_41E4_19D7C42D668D",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 5,
 "id": "AnimatedImageResource_DAB38C40_F9AA_7483_41DF_551FD5F2A5E3",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_1_HS_6_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DAACCC42_F9AA_7487_41E1_CCBDEC83D198",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_EBDA9765_F97E_F48D_41EA_1AE0A657769C_1_HS_7_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DAB20C42_F9AA_7487_41CC_B388B823E605",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 5,
 "id": "AnimatedImageResource_DBB94E52_F9FA_D487_41E3_F533C3EE41C5",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0_HS_2_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DBB88E52_F9FA_D487_41D0_56A4114D61E4",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0_HS_4_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DBB8CE52_F9FA_D487_41CB_8525F8C7CD17",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FCA17D22_F26E_953C_41D8_ECCC5DAA8C77_0_HS_6_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_C4A3AB83_FAEA_D385_41AD_213A21A5C030",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 5,
 "id": "AnimatedImageResource_DAB30C42_F9AA_7487_41D6_53AB8B0874DA",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_1_HS_4_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DAACCC42_F9AA_7487_41D5_4DBB47E296BD",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_1_HS_5_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DAACBC42_F9AA_7487_41D3_D81BF5D9A059",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0_HS_6_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DBBCBE57_F9FA_D48D_41E1_F90FEDBFDD1A",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0_HS_8_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 5,
 "id": "AnimatedImageResource_DBBCCE57_F9FA_D48D_41ED_E797708E9B65",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0_HS_10_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DBBC0E57_F9FA_D48D_41E4_F0A3E878B2B2",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F4F2F52F_F96E_349D_41CA_4BC823F08A95_0_HS_12_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DBBC4E58_F9FA_D483_41ED_DDEE2E04E059",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0_HS_1_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DAB64C31_F9AA_7485_41E6_FC4BCAAD637D",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 5,
 "id": "AnimatedImageResource_DAB63C31_F9AA_7485_41DC_8741E6B50ADD",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0_HS_4_0.png",
   "width": 1200,
   "class": "ImageResourceLevel",
   "height": 1800
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DAB7AC31_F9AA_7485_41E9_0E95848CE0B5",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 20,
 "levels": [
  {
   "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 5,
 "id": "AnimatedImageResource_DAB76C31_F9AA_7485_41C6_A19C42926A11",
 "colCount": 4,
 "frameDuration": 41
},
{
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_FD013EBF_F261_9704_41E1_A65F3D829440_0_HS_7_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "rowCount": 6,
 "id": "AnimatedImageResource_DAB09C31_F9AA_7485_41D5_F9A839033AC4",
 "colCount": 4,
 "frameDuration": 41
}],
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "paddingLeft": 0,
 "paddingRight": 0,
 "vrPolyfillScale": 0.5,
 "scrollBarColor": "#000000",
 "gap": 10,
 "width": "100%",
 "scripts": {
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback, stopBackgroundAudio){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')].audio; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } var src = this.playGlobalAudio(audio, endCallback); if(stopBackgroundAudio === true){ var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); } return src; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')].audio; } return audio; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "playGlobalAudio": function(audio, endCallback, asBackground){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = {'audio': audio, 'asBackground': asBackground || false}; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "registerTextVariable": function(obj){  var property = (function() { switch (obj.get('class')) { case 'Label': return 'text'; case 'Button': case 'BaseButton': return 'label'; case 'HTMLText': return 'html'; } })(); if (property == undefined) return; var re = new RegExp('\\{\\{\\s*(\\w+)\\s*\\}\\}', 'g'); var text = obj.get(property); var data = obj.get('data') || {}; data[property] = text; obj.set('data', data); var updateLabel = function(vars) { var text = data[property]; for (var i = 0; i < vars.length; ++i) { var info = vars[i]; var dispatchers = info.dispatchers; for (var j = 0; j < dispatchers.length; ++j) { var dispatcher = dispatchers[j]; var index = dispatcher.get('selectedIndex'); if (index >= 0) { var srcPropArray = info.src.split('.'); var src = dispatcher.get('items')[index]; if(src == undefined || (info.itemCondition !== undefined && !info.itemCondition.call(this, src))) continue; for (var z = 0; z < srcPropArray.length; ++z) src = 'get' in src ? src.get(srcPropArray[z]) : src[srcPropArray[z]]; text = text.replace(info.replace, src); } } } if(text != data[property]) obj.set(property, text); }; var vars = []; var addVars = function(dispatchers, eventName, src, replace, itemCondition) { vars.push({ 'dispatchers': dispatchers, 'eventName': eventName, 'src': src, 'replace': replace, 'itemCondition': itemCondition }); }; var viewerAreaItemCondition = function(item) { var player = item.get('player'); return player !== undefined && player.get('viewerArea') == this.MainViewer; }; while (null != (result = re.exec(text))) { switch (result[1]) { case 'title': var playLists = this._getPlayListsWithViewer(this.MainViewer); addVars(playLists, 'change', 'media.label', result[0], viewerAreaItemCondition); break; case 'subtitle': var playLists = this._getPlayListsWithViewer(this.MainViewer); addVars(playLists, 'change', 'media.data.subtitle', result[0], viewerAreaItemCondition); break; } } if (vars.length > 0) { var func = updateLabel.bind(this, vars); for (var i = 0; i < vars.length; ++i) { var info = vars[i]; var dispatchers = info.dispatchers; for (var j = 0; j < dispatchers.length; ++j) dispatchers[j].bind(info.eventName, func, this); } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "keepCompVisible": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "stopGlobalAudios": function(onlyForeground){  var audios = window.currentGlobalAudios; var self = this; if(audios){ Object.keys(audios).forEach(function(key){ var data = audios[key]; if(!onlyForeground || (onlyForeground && !data.asBackground)) { self.stopGlobalAudio(data.audio); } }); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "shareSocial": function(socialID, url, deepLink){  if(url == undefined) { url = deepLink ? location.href : location.href.split(location.search||location.hash||/[?#]/)[0]; } else if(deepLink) { url += location.hash; } url = (function(id){ switch(id){ case 'fb': return 'https://www.facebook.com/sharer/sharer.php?u='+url; case 'wa': return 'https://api.whatsapp.com/send/?text='+encodeURIComponent(url); case 'tw': return 'https://twitter.com/intent/tweet?source=webclient&url='+url; default: return undefined; } })(socialID); this.openLink(url, '_blank'); },
  "_initItemWithComps": function(playList, index, components, eventName, visible, effectToApply, delay, restoreStateAt){  var item = playList.get('items')[index]; var registerVisibility = restoreStateAt > 0; var rootPlayer = this.rootPlayer; var cloneEffect = function(visible) { var klass = effectToApply ? effectToApply.get('class') : undefined; var effect = undefined; switch(klass) { case 'FadeInEffect': case 'FadeOutEffect': effect = rootPlayer.createInstance(visible ? 'FadeInEffect' : 'FadeOutEffect'); break; case 'SlideInEffect': case 'SlideOutEffect': effect = rootPlayer.createInstance(visible ? 'SlideInEffect' : 'SlideOutEffect'); break; } if(effect){ effect.set('duration', effectToApply.get('duration')); effect.set('easing', effectToApply.get('easing')); if(klass.indexOf('Slide') != -1) effect.set(visible ? 'from' : 'to', effectToApply.get(visible ? 'from' : 'to')); } return effect; }; var endFunc = function() { for(var i = 0, count = components.length; i<count; ++i) { var component = components[i]; if(restoreStateAt > 0){ this.setComponentVisibility(component, !visible, 0, cloneEffect(!visible)); } else { var key = 'visibility_' + component.get('id'); if(this.existsKey(key)) { if(this.getKey(key)) this.setComponentVisibility(component, true, 0, cloneEffect(true)); else this.setComponentVisibility(component, false, 0, cloneEffect(false)); this.unregisterKey(key); } } } item.unbind('end', endFunc, this); if(addMediaEndEvent) media.unbind('end', endFunc, this); }; var stopFunc = function() { item.unbind('stop', stopFunc, this, true); item.unbind('stop', stopFunc, this); item.unbind('begin', stopFunc, this, true); item.unbind('begin', stopFunc, this); for(var i = 0, count = components.length; i<count; ++i) { this.keepCompVisible(components[i], false); } }; var addEvent = function(eventName, delay, restoreStateAt){ var changeFunc = function(){ var changeVisibility = function(component, visible, effect) { rootPlayer.setComponentVisibility(component, visible, delay, effect, visible ? 'showEffect' : 'hideEffect', false); if(restoreStateAt > 0){ var time = delay + restoreStateAt + (effect != undefined ? effect.get('duration') : 0); rootPlayer.setComponentVisibility(component, !visible, time, cloneEffect(!visible), visible ? 'hideEffect' : 'showEffect', true); } }; for(var i = 0, count = components.length; i<count; ++i){ var component = components[i]; if(visible == 'toggle'){ if(!component.get('visible')) changeVisibility(component, true, cloneEffect(true)); else changeVisibility(component, false, cloneEffect(false)); } else { changeVisibility(component, visible, cloneEffect(visible)); } } item.unbind(eventName, changeFunc, this); }; item.bind(eventName, changeFunc, this) }; if(eventName == 'begin'){ for(var i = 0, count = components.length; i<count; ++i){ var component = components[i]; this.keepCompVisible(component, true); if(registerVisibility) { var key = 'visibility_' + component.get('id'); this.registerKey(key, component.get('visible')); } } item.bind('stop', stopFunc, this, true); item.bind('stop', stopFunc, this); item.bind('begin', stopFunc, this, true); item.bind('begin', stopFunc, this); if(registerVisibility){ item.bind('end', endFunc, this); var media = item.get('media'); var addMediaEndEvent = media.get('loop') != undefined && !(media.get('loop')); if(addMediaEndEvent) media.bind('end', endFunc, this); } } else if(eventName == 'end' && restoreStateAt > 0){ addEvent('begin', restoreStateAt, 0); restoreStateAt = 0; } if(eventName != undefined) addEvent(eventName, delay, restoreStateAt); },
  "registerKey": function(key, value){  window[key] = value; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ var audioData = audios[audio.get('id')]; if(audioData){ audio = audioData.audio; delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "unregisterKey": function(key){  delete window[key]; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "existsKey": function(key){  return key in window; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "_getPlayListsWithViewer": function(viewer){  var playLists = this.getByClassName('PlayList'); var containsViewer = function(playList) { var items = playList.get('items'); for(var j=items.length-1; j>=0; --j) { var item = items[j]; var player = item.get('player'); if(player !== undefined && player.get('viewerArea') == viewer) return true; } return false; }; for(var i=playLists.length-1; i>=0; --i) { if(!containsViewer(playLists[i])) playLists.splice(i, 1); } return playLists; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getFirstPlayListWithMedia": function(media, onlySelected){  var playLists = this.getPlayListsWithMedia(media, onlySelected); return playLists.length > 0 ? playLists[0] : undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ var audioData = audios[audio.get('id')]; if(audioData) audio = audioData.audio; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getPlayListsWithMedia": function(media, onlySelected){  var result = []; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) result.push(playList); } return result; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios).map(function(v) { return v.audio })); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getKey": function(key){  return window[key]; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = undefined; if(mediaDispatcher){ var playListsWithMedia = this.getPlayListsWithMedia(mediaDispatcher, true); playListDispatcher = playListsWithMedia.indexOf(playList) != -1 ? playList : (playListsWithMedia.length > 0 ? playListsWithMedia[0] : undefined); } if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } item.bind('begin', onBeginFunction, self); this.executeFunctionWhenChange(playList, index, disposeCallback);  },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext, true); }; playNext(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setOverlayBehaviour": function(overlay, media, action, preventDoubleClick){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(preventDoubleClick){ if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 1000); } }; if(preventDoubleClick && window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getFirstPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; }
 },
 "horizontalAlign": "left",
 "start": "this.playAudioList([this.audio_D33DC5F5_F99E_378C_41ED_AD813EC6B4D1, this.audio_D2CCC6E0_F99E_3583_41D8_1EE58742D157, this.audio_D2D0A78B_F99E_3384_41D5_BF3FF05051C2, this.audio_D2D6A828_F99E_3C83_41E6_44A4DA89078B, this.audio_D2D458C4_F99E_3D83_41EE_4D1BA703EE0C]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_2E60B1ED_347D_0EFF_41C3_3E7369236DCE], 'gyroscopeAvailable'); this.syncPlaylists([this.mainPlayList,this.ThumbnailGrid_7A545551_6EFF_A77C_4171_76469EB05358_playlist]); if(!this.get('fullscreenAvailable')) { [this.IconButton_2E6081ED_347D_0EFF_41AA_ECC3AD42DC4D].forEach(function(component) { component.set('visible', false); }) }",
 "buttonToggleFullscreen": "this.IconButton_2E6081ED_347D_0EFF_41AA_ECC3AD42DC4D",
 "minHeight": 20,
 "borderSize": 0,
 "left": 577.55,
 "desktopMipmappingEnabled": false,
 "buttonToggleMute": "this.IconButton_2E60A1ED_347D_0EFF_41BC_A36ED8CE8127",
 "children": [
  "this.MainViewer",
  "this.HTMLText_6BDD8039_64A6_31E4_41D7_D3C38C6C69F2",
  "this.HTMLText_524CEEAF_7E31_E3D9_41D5_A18634B5A288",
  "this.Container_2E6121EE_347D_0EFC_41AD_FCF661FCEEBC",
  "this.Container_685CC558_649E_53A4_41C3_031C34B7328A",
  "this.Container_7DE2D59A_6911_E2E0_41A7_D15D0A935C33",
  "this.Container_7A542551_6EFF_A77C_41BD_77B516563B0F",
  "this.Container_3A863D9B_3513_E8A1_41BD_38320457DF78",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "contentOpaque": false,
 "minWidth": 20,
 "class": "Player",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "defaultVRPointer": "laser",
 "backgroundPreloadEnabled": true,
 "scrollBarVisible": "rollOver",
 "propagateClick": false,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "height": "100%",
 "layout": "absolute",
 "overflow": "hidden",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Player464"
 }
};


	function HistoryData(playList) {
		this.playList = playList;
		this.list = [];
		this.pointer = -1;
	}

	HistoryData.prototype.add = function(index){
		if(this.pointer < this.list.length && this.list[this.pointer] == index) {
			return;
		}
		++this.pointer;
		this.list.splice(this.pointer, this.list.length - this.pointer, index);
	};

	HistoryData.prototype.back = function(){
		if(!this.canBack()) return;
		this.playList.set('selectedIndex', this.list[--this.pointer]);
	};

	HistoryData.prototype.forward = function(){
		if(!this.canForward()) return;
		this.playList.set('selectedIndex', this.list[++this.pointer]);
	};

	HistoryData.prototype.canBack = function(){
		return this.pointer > 0;
	};

	HistoryData.prototype.canForward = function(){
		return this.pointer >= 0 && this.pointer < this.list.length-1;
	};


	if(script.data == undefined)
		script.data = {};
	script.data["history"] = {};   

	TDV.PlayerAPI.defineScript(script);
})();
