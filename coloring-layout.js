export function paperLayout({viewportWidth,paddingLeft=0,paddingRight=0,nativeWidth,nativeHeight,zoom=1}){
 const width=Math.max(1,Number(viewportWidth)-Number(paddingLeft)-Number(paddingRight)-3);
 const factor=width/Math.max(1,Number(nativeWidth))*Math.max(1,Math.min(4,Number(zoom)||1));
 return{width:Math.max(1,Math.floor(Number(nativeWidth)*factor)),height:Math.max(1,Math.floor(Number(nativeHeight)*factor)),scale:factor};
}
