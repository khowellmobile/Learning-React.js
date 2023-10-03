import imageData from "../imageData/imageData";

function Background (props) {

    const backgroundStyle = {
        backgroundImage: 'url(' + imageData[0] + ')',
        width: 'auto',
        height: '100%'

    }

    return <div style={backgroundStyle}>
        {props.children}
    </div>
}

export default Background;