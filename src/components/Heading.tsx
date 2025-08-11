export default function Heading ({ heading, className }: { heading: string; className?: React.ReactNode; }) {
    return (
        <div className={`space-y-2 ${className}`}>
            <h3 className="font-bold text-2xl leading-[39px]">{ heading }</h3>
        </div>
    )
}