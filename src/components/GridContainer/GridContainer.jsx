// GridContainer
export const GridContainer = ({children, width, height, gap, rows, columns, alignLeft, alignRight, alignCenter, justifyLeft, justifyRight, justifyCenter }) => {

    // Set Defaults if missing
    width ? width : width = '100%';
    height ? height : height = "auto";
    gap ? gap : gap = '8px';
    rows ? rows : rows = "1";
    columns ? columns : columns = "1";

    // Define style
    let style = { 
            display: `grid`,
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
            gap: `${gap}`,
            width:`${width}`,
            height: `${height}`,
            alignItems: `${alignLeft ? 'start' : alignRight ? 'end' : alignCenter ? 'center' : 'inherit'}`,
            justifyItems: `${justifyLeft ? 'start' : justifyRight ? 'end' : justifyCenter ? 'center' : 'inherit'}`,
            margin: `auto`,
    }

 // Return container
 return (
     <div style={{...style}}>
         {children}
     </div> 
 )   
}