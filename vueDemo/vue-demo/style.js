import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "height": "100%"
    },
    "app": {
        "height": "100%"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0,
        "height": "100%",
        "maxHeight": "100%",
        "position": "relative"
    },
    "toolbar": {
        "float": "left",
        "width": 80,
        "height": "100%",
        "backgroundColor": "#30414D",
        "color": "#767676",
        "paddingTop": 35,
        "paddingRight": 25,
        "paddingBottom": 25,
        "paddingLeft": 25
    },
    "notes-list": {
        "float": "left",
        "width": 300,
        "height": "100%",
        "backgroundColor": "#F5F5F5",
        "fontFamily": "'Raleway', sans-serif",
        "fontWeight": "400"
    },
    "list-header": {
        "paddingTop": 5,
        "paddingRight": 25,
        "paddingBottom": 25,
        "paddingLeft": 25
    },
    "list-header h2": {
        "fontWeight": "300",
        "textTransform": "uppercase",
        "textAlign": "center",
        "fontSize": 22,
        "paddingBottom": 8
    },
    "notes-list container": {
        "height": "calc(100% - 137px)",
        "maxHeight": "calc(100% - 137px)",
        "overflow": "auto",
        "width": "100%",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "notes-list container list-group-item": {
        "border": 0,
        "borderRadius": 0
    },
    "list-group-item-heading": {
        "fontWeight": "300",
        "fontSize": 15
    },
    "note-editor": {
        "height": "100%",
        "marginLeft": 380
    },
    "note-editor textarea": {
        "height": "100%",
        "border": 0,
        "borderRadius": 0
    },
    "toolbar i": {
        "fontSize": 30,
        "marginBottom": 35,
        "cursor": "pointer",
        "opacity": 0.8,
        "transition": "opacity 0.5s ease"
    },
    "toolbar i:hover": {
        "opacity": 1
    },
    "starred": {
        "color": "#F7AE4F"
    }
});