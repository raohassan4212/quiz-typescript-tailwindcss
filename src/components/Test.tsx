import { FC } from "react"

type paraType = {
    para: string,
    name: string
}


const Test: FC<paraType> = ({para, name}) => {
    return (
        <div>
            Hello {para}
        </div>
    )
}

export default Test