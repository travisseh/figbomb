// This plugin creates 5 rectangles on the screen.
// const numberOfRectangles = 5;
// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs such as the network by creating a UI which contains
// a full browser environment (see documentation).
// const nodes = [];
// for (let i = 0; i < numberOfRectangles; i++) {
//     const rect = figma.createRectangle();
//     rect.x = i * 150;
//     rect.fills = [{ type: 'SOLID', color: { r: 1, g: 0.5, b: 0 } }];
//     figma.currentPage.appendChild(rect);
//     nodes.push(rect);
// }
// figma.currentPage.selection = nodes;
// figma.viewport.scrollAndZoomIntoView(nodes);
// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
//test 
// figma.closePlugin();


// figma.currentPage.children.forEach(node => {
//     if (node.type === "FRAME") {
//         node.x += 200
//     }
// })

// figma.currentPage.findAll(node => {

//         node.x += 200
// })

async function runPlugin() {
    
    await figma.loadFontAsync({ family: "Roboto", style: "Regular" })
    
    const Xcenter = figma.viewport.center.x
    const Ycenter = figma.viewport.center.y
    
    figma.currentPage.children.forEach(node => {
    
        // if (node.type === 'FRAME') {
            
            if (node.x > Xcenter) {
                node.x += Math.random() * 2000
            } else {
                node.x -= Math.random() * 2000
            }
            if (node.y > Ycenter) {
                node.y += Math.random() * 2000
            } else {
                node.y -= Math.random() * 2000
            }
    
        // }
    
        
    })
    
    const Text = figma.createText()
    
    Text.characters = "You've been Figbombed! 💣"
    Text.x = Xcenter
    Text.y = Ycenter
    Text.fontSize = 100
    Text.textAlignHorizontal = "CENTER"
    Text.resize(1000, 200)
    // Text.setRangeHyperlink(5,10, "www.google.com")
    console.log(Text.getRangeFontSize(5,10))
    Text.setRangeHyperlink(11,22, {type: "URL", value: "https://www.ksl.com"})
    Text.setRangeTextDecoration(11, 22, "UNDERLINE")
    // figma.closePlugin();

}

runPlugin();

figma.closePlugin();


// frame.x = figma.viewport.center.x - frameWidth / 2
// frame.y = figma.viewport.center.y - frameHeight / 2

// figma.currentPage.selection.x = 300

// const nodes = node.findAll(node => node.type === "FRAME")

// nodes.forEach(node => node.x += 200)

// nodes.forEach(node => node.y += 200)


//need to find the center of the screen next
