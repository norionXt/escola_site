


export default function Success({children, classes, show = true}: any) {
    if(!show) {
        return <></>
    }
    return (
        <div className={"alert bg-success text-white p-2"+{classes}}>
            <span>
                {children}
            </span>
        </div>
    )
}