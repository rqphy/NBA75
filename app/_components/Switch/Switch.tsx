interface switchProps {
    currentId: string
}

export default function Switch({ currentId }: switchProps) {
    return <div>{currentId}</div>
}
