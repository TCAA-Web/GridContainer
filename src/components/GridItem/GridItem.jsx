export const GridItem = ({children, width, height }) => {
    width ? width : width = "100%";
    height ? height : height = "100%";

    return (
        <div style={{width: width, height: height, backgroundColor: "red", textAlign: "center"}}>
            {children}
        </div>
    )
}