import { ReactNode, useState } from "react"


const RenderProps = (props: any) => {

    function render(hovered: any) {
        const style = {
            backgroundColor: hovered ? "red" : ""
        }
        return (
            <div style={style}>
                <h1>Render Props!</h1>
                <p>
                    Render props were used to encapsulate logic into one component; To be used in other multiple
                    components. A child component that is passed a render prop, that contains a function for how to render
                    the jsx element.

                </p>
            </div>
        )
    }
    return <DetectHover render={render} />
}

const DetectHover: React.FC<{ render: (hovered: any) => ReactNode }> = (props) => {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {props.render(hovered)}
        </div>
    )
}

export default RenderProps;