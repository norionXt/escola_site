import '../../css/alert.css';


export default function Alert({children, classes, show = true}: any) {
    if(!show) {
        return <></>
    }
    return (
        <div className={"alert bg-danger text-white p-2"+{classes}}>
            <span>
                {children}
            </span>
        </div>
    )
}