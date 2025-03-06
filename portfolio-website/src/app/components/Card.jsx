export default function Card({children, className = ""}){
    return (<div className={'bg-amber-50 rounded-lg border px-2 py-2 inline-block text-center ${className}'}>
        <div className="flex flex-col gap-2">{children}</div>
    </div>);
}